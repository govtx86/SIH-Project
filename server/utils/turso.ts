import { useRuntimeConfig } from '#imports'
import type { KYCRecord } from '../../app/types'
import type { ExchangeAccount } from './identities'

interface TursoInfo {
  url: string
  token: string
}

interface PipelineRequest {
  type: 'execute' | 'close'
  stmt?: { sql: string; args?: unknown[] }
  want_rows?: boolean
}

export function tursoInfo(): TursoInfo {
  const cfg = useRuntimeConfig()
  return {
    url: String(cfg.tursoUrl || ''),
    token: String(cfg.tursoToken || ''),
  }
}

export function hasTurso(): boolean {
  const i = tursoInfo()
  return Boolean(i.url && i.token)
}

interface ParsedExecuteResult {
  cols: string[]
  rows: unknown[][]
}

function decodeValue(v: unknown): unknown {
  if (v === null || v === undefined) return v
  if (typeof v !== 'object') return v
  const obj = v as Record<string, unknown>
  if (!('type' in obj)) return v
  const type = obj.type as string
  if (type === 'null') return null
  if (type === 'integer') return Number(obj.value)
  if (type === 'float') return Number(obj.value)
  if (type === 'boolean') return Boolean(obj.value)
  if (type === 'blob') return String(obj.value)
  return obj.value ?? null
}

async function pipeline(requests: PipelineRequest[]): Promise<Array<ParsedExecuteResult | null>> {
  const i = tursoInfo()
  const res = await fetch(`${i.url}/v2/pipeline`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${i.token}`,
    },
    body: JSON.stringify({ requests }),
  })
  if (!res.ok) {
    const text = await res.text().catch(() => '')
    throw new Error(`Turso request failed (${res.status}): ${text.slice(0, 200)}`)
  }
  const body = await res.json() as {
    results: Array<{ type: string; response?: { type: string; result?: { cols: Array<{ name?: string }>; rows: unknown[][] } } } | null>
  }
  return (body.results ?? []).map((r) => {
    if (!r || r.type !== 'execute' || !r.response) return null
    const result = r.response.result
    if (!result) return null
    const cols = (result.cols ?? []).map((c) => c.name ?? '')
    const rows = (result.rows ?? []).map((row) => row.map(decodeValue))
    return { cols, rows }
  })
}

export async function turfExecute(sql: string, args: unknown[] = []): Promise<unknown[][]> {
  const results = await pipeline([{ type: 'execute', stmt: { sql, args }, want_rows: true }, { type: 'close' }])
  return results[0]?.rows ?? []
}

export async function turfBatch(requests: Array<{ sql: string; args?: unknown[] }>): Promise<void> {
  if (!requests.length) return
  const chunks: PipelineRequest[][] = []
  let chunk: PipelineRequest[] = []
  for (const r of requests) {
    chunk.push({ type: 'execute', stmt: { sql: r.sql, args: r.args ?? [] } })
    if (chunk.length >= 40) {
      chunks.push(chunk)
      chunk = []
    }
  }
  if (chunk.length) chunks.push(chunk)
  for (const c of chunks) {
    await pipeline([...c, { type: 'close' }])
  }
}

const DDL = [
  `CREATE TABLE IF NOT EXISTS exchanges (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    slug TEXT UNIQUE NOT NULL,
    name TEXT NOT NULL,
    country TEXT NOT NULL DEFAULT '',
    category TEXT NOT NULL DEFAULT ''
  )`,
  `CREATE TABLE IF NOT EXISTS exchange_addresses (
    address TEXT PRIMARY KEY,
    exchange_id INTEGER NOT NULL REFERENCES exchanges(id),
    chain TEXT NOT NULL DEFAULT 'litecoin_testnet'
  )`,
  `CREATE TABLE IF NOT EXISTS kyc_records (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    address TEXT UNIQUE NOT NULL REFERENCES exchange_addresses(address),
    exchange_id INTEGER NOT NULL REFERENCES exchanges(id),
    user_name TEXT NOT NULL,
    user_email TEXT NOT NULL,
    user_country TEXT NOT NULL,
    id_type TEXT NOT NULL,
    id_number TEXT NOT NULL,
    verification_level TEXT NOT NULL,
    phone TEXT NOT NULL DEFAULT '',
    dob TEXT NOT NULL DEFAULT '',
    registered_at TEXT NOT NULL DEFAULT ''
  )`,
  `CREATE INDEX IF NOT EXISTS idx_exch_address ON exchange_addresses(address)`,
]

let schemaEnsured = false

export async function ensureSchema(): Promise<void> {
  if (schemaEnsured || !hasTurso()) return
  await turfBatch(DDL.map((sql) => ({ sql })))
  schemaEnsured = true
}

const memoryKyc = new Map<string, KYCRecord>()

export async function persistExchangeKyc(accounts: ExchangeAccount[]): Promise<'turso' | 'memory'> {
  if (!hasTurso()) {
    for (const acc of accounts) {
      memoryKyc.set(acc.address, {
        address: acc.address,
        exchange: acc.exchangeName,
        exchangeCountry: acc.country,
        user: { ...acc.kyc },
      })
    }
    return 'memory'
  }
  await ensureSchema()
  const requests: Array<{ sql: string; args: unknown[] }> = []
  for (const acc of accounts) {
    requests.push({
      sql: `INSERT OR IGNORE INTO exchanges(slug, name, country, category) VALUES (?, ?, ?, ?)`,
      args: [acc.exchangeSlug, acc.exchangeName, acc.country, acc.category],
    })
    requests.push({
      sql: `INSERT OR IGNORE INTO exchange_addresses(address, exchange_id, chain) VALUES (?, (SELECT id FROM exchanges WHERE slug = ?), 'litecoin_testnet')`,
      args: [acc.address, acc.exchangeSlug],
    })
    requests.push({
      sql: `INSERT INTO kyc_records(address, exchange_id, user_name, user_email, user_country, id_type, id_number, verification_level, phone, dob, registered_at)
            VALUES (?, (SELECT id FROM exchanges WHERE slug = ?), ?, ?, ?, ?, ?, ?, ?, ?, ?)
            ON CONFLICT(address) DO UPDATE SET
              user_name = excluded.user_name,
              user_email = excluded.user_email,
              user_country = excluded.user_country,
              id_type = excluded.id_type,
              id_number = excluded.id_number,
              verification_level = excluded.verification_level,
              phone = excluded.phone,
              dob = excluded.dob,
              registered_at = excluded.registered_at`,
      args: [acc.address, acc.exchangeSlug, acc.kyc.name, acc.kyc.email, acc.kyc.country, acc.kyc.idType, acc.kyc.idNumber, acc.kyc.verificationLevel, acc.kyc.phone, acc.kyc.dob, acc.kyc.registeredAt],
    })
  }
  await turfBatch(requests)
  return 'turso'
}

export async function getKycForAddresses(addresses: string[]): Promise<KYCRecord[]> {
  const unique = [...new Set(addresses)]
  if (!hasTurso()) {
    return unique.map((a) => memoryKyc.get(a)).filter(Boolean) as KYCRecord[]
  }
  await ensureSchema()
  if (!unique.length) return []
  const placeholders = unique.map(() => '?').join(',')
  const rows = await turfExecute(
    `SELECT ea.address,
            ex.name AS exchange, ex.country AS exchange_country,
            k.user_name, k.user_email, k.user_country, k.id_type, k.id_number,
            k.verification_level, k.phone, k.dob, k.registered_at
     FROM exchange_addresses ea
     JOIN exchanges ex ON ex.id = ea.exchange_id
     LEFT JOIN kyc_records k ON k.address = ea.address AND k.exchange_id = ea.exchange_id
     WHERE ea.address IN (${placeholders})`,
    unique,
  )
  return rows.map((row) => ({
    address: String(row[0]),
    exchange: String(row[1]),
    exchangeCountry: String(row[2]),
    user: {
      name: String(row[3] ?? ''),
      email: String(row[4] ?? ''),
      country: String(row[5] ?? ''),
      idType: String(row[6] ?? ''),
      idNumber: String(row[7] ?? ''),
      verificationLevel: String(row[8] ?? ''),
      phone: String(row[9] ?? ''),
      dob: String(row[10] ?? ''),
      registeredAt: String(row[11] ?? ''),
    },
  }))
}

export interface ExchangeSummaryRow {
  slug: string
  name: string
  country: string
  category: string
  count: number
}

export async function listExchangeSummaries(): Promise<ExchangeSummaryRow[]> {
  if (!hasTurso()) return []
  await ensureSchema()
  const rows = await turfExecute(
    `SELECT ex.slug, ex.name, ex.country, ex.category, COUNT(ea.address) AS n
     FROM exchanges ex
     LEFT JOIN exchange_addresses ea ON ea.exchange_id = ex.id
     GROUP BY ex.id ORDER BY ex.name`,
  )
  return rows.map((row) => ({
    slug: String(row[0]),
    name: String(row[1]),
    country: String(row[2]),
    category: String(row[3]),
    count: Number(row[4]),
  }))
}