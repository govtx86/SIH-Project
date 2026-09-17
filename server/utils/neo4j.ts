import { useRuntimeConfig } from '#imports'
import type { AddressStats, GraphData, SimTx } from '../../app/types'
import type { Simulation } from './simulator'

interface Neo4jConfig {
  host: string
  user: string
  password: string
  database: string
}

interface QueryRow {
  [k: string]: unknown
}

function neo4jConfig(): Neo4jConfig {
  const cfg = useRuntimeConfig()
  return {
    host: String(cfg.neo4jHost || ''),
    user: String(cfg.neo4jUser || 'neo4j'),
    password: String(cfg.neo4jPassword || ''),
    database: String(cfg.neo4jDatabase || 'neo4j'),
  }
}

export function hasNeo4j(): boolean {
  const c = neo4jConfig()
  return Boolean(c.host && c.password)
}

function normalize(v: unknown): unknown {
  if (v === null || v === undefined) return v
  if (Array.isArray(v)) return v.map(normalize)
  if (typeof v !== 'object') return v
  const obj = v as Record<string, unknown>
  for (const key of ['node', 'relationship', 'map', 'list'] as const) {
    if (key in obj) return normalize(obj[key])
  }
  if ('int' in obj && Object.keys(obj).length === 1) {
    const n = Number(obj.int)
    return Number.isSafeInteger(n) ? n : String(obj.int)
  }
  if ('float' in obj && Object.keys(obj).length === 1) return Number(obj.float)
  if ('string' in obj && Object.keys(obj).length === 1) return String(obj.string)
  if ('bool' in obj && Object.keys(obj).length === 1) return Boolean(obj.bool)
  if ('date' in obj && Object.keys(obj).length === 1) return String(obj.date)
  if ('value' in obj && 'type' in obj) {
    if (obj.type === 'null') return null
    return normalize(obj.value)
  }
  if ('labels' in obj && 'properties' in obj) {
    return { ...(obj.properties as Record<string, unknown>), labels: obj.labels, elementId: obj.elementId }
  }
  if ('type' in obj && 'start' in obj && 'end' in obj) {
    return { ...(obj.properties as Record<string, unknown>), type: obj.type, elementId: obj.elementId, start: obj.start, end: obj.end }
  }
  const out: Record<string, unknown> = {}
  for (const [k, val] of Object.entries(obj)) out[k] = normalize(val)
  return out
}

interface QueryApiResponse {
  errors?: Array<{ message?: string; code?: string }>
  data?: { fields?: string[]; values?: unknown[][] }
}

class DatabaseMissingError extends Error {
  status: number
  database: string

  constructor(database: string, status: number, message: string) {
    super(message)
    this.name = 'DatabaseMissingError'
    this.database = database
    this.status = status
  }
}

function isDatabaseMissing(status: number, msg: string, code: string): boolean {
  if (status === 404) return true
  const text = `${status} ${msg} ${code}`.toLowerCase()
  return text.includes('database does not exist')
    || text.includes('database not found')
    || text.includes('could not be found')
    || (text.includes('not found') && text.includes('database'))
}

let resolvedDatabase: string | null = null

async function discoverDatabase(c: Neo4jConfig): Promise<string | null> {
  try {
    const auth = `Basic ${btoa(`${c.user}:${c.password}`)}`
    const res = await fetch(`https://${c.host}/db/system/query/v2`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Authorization: auth },
      body: JSON.stringify({ statement: 'SHOW DATABASES' }),
    })
    const body = await res.json() as QueryApiResponse
    if (!res.ok || (body.errors && body.errors.length)) return null
    const fields = body.data?.fields ?? []
    const values = body.data?.values ?? []
    const idx = fields.indexOf('name')
    if (idx < 0) return null
    const names = values.map((row) => String(normalize(row[idx]) ?? '')).filter((n) => n && n !== 'system')
    return names.find((n) => n === 'neo4j') ?? names[0] ?? null
  } catch {
    return null
  }
}

export async function usedDatabaseName(): Promise<string> {
  if (resolvedDatabase) return resolvedDatabase
  const c = neo4jConfig()
  if (c.database && c.database !== 'neo4j') return c.database
  const discovered = c.host ? await discoverDatabase(c) : null
  return discovered ?? c.database ?? 'neo4j'
}

async function cypher(statement: string, parameters: Record<string, unknown> = {}): Promise<QueryRow[]> {
  const c = neo4jConfig()
  let database = resolvedDatabase ?? c.database
  const auth = `Basic ${btoa(`${c.user}:${c.password}`)}`

  const run = async (db: string) => {
    const url = `https://${c.host}/db/${db}/query/v2`
    let res: Response
    try {
      res = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Authorization: auth },
        body: JSON.stringify({ statement, parameters }),
      })
    } catch (fetchErr) {
      throw new Error(`Neo4j fetch failed (${url}): ${fetchErr instanceof Error ? fetchErr.message : String(fetchErr)}`)
    }
    let body: QueryApiResponse
    try {
      body = await res.json()
    } catch {
      throw new Error(`Neo4j returned a non-JSON response (${res.status} ${res.statusText}) from ${url}`)
    }
    if (!res.ok || (body.errors && body.errors.length)) {
      const msg = body.errors?.[0]?.message || res.statusText || String(res.status)
      const code = body.errors?.[0]?.code ?? ''
      if (isDatabaseMissing(res.status, msg, code)) throw new DatabaseMissingError(db, res.status, msg)
      throw new Error(`Neo4j query failed (${res.status}): ${msg}`)
    }
    return body
  }

  let body: QueryApiResponse
  try {
    body = await run(database)
  } catch (err) {
    if (err instanceof DatabaseMissingError) {
      const discovered = c.host ? await discoverDatabase(c) : null
      if (discovered) {
        resolvedDatabase = discovered
        body = await run(discovered)
      } else {
        throw new Error(
          `Database "${err.database}" does not exist on ${c.host}. Set NUXT_NEO4J_DATABASE to the database name `
          + `shown in Aura (AuraDB → your instance → Connections → the segment after /db/ in the Query API URL).`,
        )
      }
    } else {
      throw err
    }
  }
  const fields = body.data?.fields ?? []
  const values = body.data?.values ?? []
  return values.map((row) => {
    const record: QueryRow = {}
    fields.forEach((f, i) => { record[f] = normalize(row[i]) })
    return record
  })
}

interface MemoryStore {
  nodes: Map<string, AddressStats>
  edges: Array<{ id: string; source: string; target: string; hash: string; amount: number; fee: number; timestamp: number; direction: 'in' | 'out' }>
}

const memoryDb = new Map<string, MemoryStore>()

function buildMemoryStore(sim: Simulation): MemoryStore {
  const nodes = new Map<string, AddressStats>()
  for (const n of sim.nodes) nodes.set(n.address, n)
  const edges: MemoryStore['edges'] = []
  for (const t of sim.txns) {
    edges.push({
      id: t.hash,
      source: t.from,
      target: t.to,
      hash: t.hash,
      amount: t.amount,
      fee: t.fee,
      timestamp: t.timestamp,
      direction: t.to === sim.address ? 'in' : t.from === sim.address ? 'out' : edges.length % 2 === 0 ? 'out' : 'in',
    })
  }
  return { nodes, edges }
}

export async function upsertSimulation(sim: Simulation): Promise<void> {
  if (!hasNeo4j()) {
    memoryDb.set(sim.address, buildMemoryStore(sim))
    return
  }
  const nodeParams = sim.nodes.map((n) => ({
    address: n.address,
    totalReceived: n.totalReceived,
    totalSent: n.totalSent,
    balance: n.balance,
    txCount: n.txCount,
    firstSeen: n.firstSeen,
    lastSeen: n.lastSeen,
    isExchange: n.isExchange,
    exchangeName: n.exchangeName ?? '',
    ownerName: n.ownerName ?? '',
    isSuspect: n.isSuspect,
  }))
  await cypher(
    `UNWIND $nodes AS n
     MERGE (a:Address {address: n.address})
     SET a.total_received = n.totalReceived, a.total_sent = n.totalSent,
         a.balance = n.balance, a.tx_count = n.txCount,
         a.first_seen = n.firstSeen, a.last_seen = n.lastSeen
     FOREACH (_ IN CASE WHEN n.isExchange THEN [1] ELSE [] END |
        SET a:Exchange, a.exchange = n.exchangeName)
     FOREACH (_ IN CASE WHEN n.isSuspect THEN [1] ELSE [] END |
        SET a:Suspect, a.owner_name = n.ownerName)`,
    { nodes: nodeParams },
  )
  const edgeParams = sim.txns.map((t) => ({
    from: t.from,
    to: t.to,
    hash: t.hash,
    amount: t.amount,
    fee: t.fee,
    timestamp: t.timestamp,
  }))
  await cypher(
    `UNWIND $edges AS e
     MERGE (f:Address {address: e.from})
     MERGE (t:Address {address: e.to})
     MERGE (f)-[r:SENT_TO {hash: e.hash}]->(t)
     SET r.amount = e.amount, r.fee = e.fee, r.timestamp = e.timestamp`,
    { edges: edgeParams },
  )
}

function toAddressStat(row: QueryRow, address: string): AddressStats {
  const labels = Array.isArray(row.labels) ? row.labels as string[] : []
  return {
    address,
    isExchange: labels.includes('Exchange'),
    exchangeName: (row.exchange as string) || undefined,
    ownerName: (row.owner_name as string) || undefined,
    isSuspect: labels.includes('Suspect'),
    balance: Number(row.balance ?? 0),
    totalReceived: Number(row.total_received ?? 0),
    totalSent: Number(row.total_sent ?? 0),
    txCount: Number(row.tx_count ?? 0),
    firstSeen: Number(row.first_seen ?? 0),
    lastSeen: Number(row.last_seen ?? 0),
  }
}

function edgeKey(a: string, b: string, hash: string): string {
  return `${a}|${b}|${hash}`
}

export async function readGraph(address: string): Promise<GraphData> {
  if (!hasNeo4j()) {
    const store = memoryDb.get(address)
    if (!store) return { nodes: [], edges: [] }
    return {
      nodes: [...store.nodes.values()].map((n) => ({ data: n })),
      edges: store.edges.map((e) => ({ data: e })),
    }
  }

  const nodeMap = new Map<string, AddressStats>()
  const edgeMap = new Map<string, GraphData['edges'][number]['data']>()

  const suspectRows = await cypher(
    `MATCH (s:Address {address: $addr})
     RETURN s.address AS address, s.balance AS balance, s.total_received AS total_received,
            s.total_sent AS total_sent, s.tx_count AS tx_count, s.first_seen AS first_seen,
            s.last_seen AS last_seen, [l IN labels(s) | l] AS labels, s.exchange AS exchange,
            s.owner_name AS owner_name`,
    { addr: address },
  )
  if (suspectRows[0]) nodeMap.set(address, toAddressStat(suspectRows[0], address))

  const collectNode = (row: QueryRow) => {
    const addr = row.address as string
    if (addr && !nodeMap.has(addr)) nodeMap.set(addr, toAddressStat(row, addr))
  }
  const collectEdge = (key: string, source: string, target: string, row: QueryRow) => {
    if (!row.hash) return
    const data = {
      id: key,
      source,
      target,
      hash: row.hash as string,
      amount: Number(row.amount ?? 0),
      fee: Number(row.fee ?? 0),
      timestamp: Number(row.timestamp ?? 0),
      direction: row.direction as 'in' | 'out',
    }
    if (!edgeMap.has(key)) edgeMap.set(key, data)
  }

  for (const [pattern, direction] of [
    ['(s)-[r:SENT_TO]->(n)', 'out'],
    ['(n)-[r:SENT_TO]->(s)', 'in'],
  ] as Array<[string, 'in' | 'out']>) {
    const rows = await cypher(
      `MATCH (s:Address {address: $addr})
       OPTIONAL MATCH ${pattern}
       RETURN n.address AS address, n.balance AS balance, n.total_received AS total_received,
              n.total_sent AS total_sent, n.tx_count AS tx_count, n.first_seen AS first_seen,
              n.last_seen AS last_seen,
              [l IN labels(n) | l] AS labels, n.exchange AS exchange,
              r.hash AS hash, r.amount AS amount, r.fee AS fee, r.timestamp AS timestamp`,
      { addr: address },
    )
    for (const row of rows) {
      collectNode(row)
      const n = row.address as string
      if (direction === 'out') collectEdge(edgeKey(address, n, row.hash as string), address, n, { ...row, direction })
      else collectEdge(edgeKey(n, address, row.hash as string), n, address, { ...row, direction })
    }
  }

  for (const isForward of [true, false]) {
    const pattern = isForward
      ? '(s)-[r1:SENT_TO]->(a)-[r2:SENT_TO]->(b)'
      : '(b)-[r2:SENT_TO]->(a)-[r1:SENT_TO]->(s)'
    const rows = await cypher(
      `MATCH (s:Address {address: $addr})
       OPTIONAL MATCH ${pattern}
       RETURN a.address AS address, a.balance AS balance, a.total_received AS total_received,
              a.total_sent AS total_sent, a.tx_count AS tx_count, a.first_seen AS first_seen,
              a.last_seen AS last_seen, [l IN labels(a) | l] AS labels, a.exchange AS exchange,
              r1.hash AS h1, r1.amount AS amt1, r1.fee AS fee1, r1.timestamp AS ts1,
              b.address AS b, b.balance AS bBalance, b.total_received AS bReceived,
              b.total_sent AS bSent, b.tx_count AS bTx, b.first_seen AS bFirst, b.last_seen AS bLast,
              [l IN labels(b) | l] AS bLabels, b.exchange AS bExchange,
              r2.hash AS h2, r2.amount AS amt2, r2.fee AS fee2, r2.timestamp AS ts2`,
      { addr: address },
    )
    for (const row of rows) {
      const a = row.address as string | undefined
      const b = row.b as string | undefined
      if (a) {
        const aNode = toAddressStat({ ...row, labels: row.labels, exchange: row.exchange, balance: row.balance, total_received: row.total_received, total_sent: row.total_sent, tx_count: row.tx_count, first_seen: row.first_seen, last_seen: row.last_seen }, a)
        if (!nodeMap.has(a)) nodeMap.set(a, aNode)
      }
      if (b) {
        const bNode = toAddressStat({ ...row, labels: row.bLabels, exchange: row.bExchange, balance: row.bBalance, total_received: row.bReceived, total_sent: row.bSent, tx_count: row.bTx, first_seen: row.bFirst, last_seen: row.bLast }, b)
        if (!nodeMap.has(b)) nodeMap.set(b, bNode)
      }
      if (row.h1 && a) {
        const source = isForward ? address : a
        const target = isForward ? a : address
        collectEdge(edgeKey(source, target, row.h1 as string), source, target, {
          hash: row.h1,
          amount: row.amt1,
          fee: row.fee1,
          timestamp: row.ts1,
          direction: isForward ? 'out' : 'in',
        })
      }
      if (row.h2 && a && b) {
        const source = isForward ? a : b
        const target = isForward ? b : a
        collectEdge(edgeKey(source, target, row.h2 as string), source, target, {
          hash: row.h2,
          amount: row.amt2,
          fee: row.fee2,
          timestamp: row.ts2,
          direction: isForward ? 'out' : 'in',
        })
      }
    }
  }

  return {
    nodes: [...nodeMap.values()].map((n) => ({ data: n })),
    edges: [...edgeMap.values()].filter((e) => nodeMap.has(e.source) && nodeMap.has(e.target)).map((e) => ({ data: e })),
  }
}

export async function getAddressNode(address: string): Promise<AddressStats | null> {
  if (!hasNeo4j()) {
    for (const store of memoryDb.values()) {
      const n = store.nodes.get(address)
      if (n) return n
    }
    return null
  }
  const rows = await cypher(
    `MATCH (s:Address {address: $addr})
     RETURN s.address AS address, s.balance AS balance, s.total_received AS total_received,
            s.total_sent AS total_sent, s.tx_count AS tx_count, s.first_seen AS first_seen,
            s.last_seen AS last_seen, [l IN labels(s) | l] AS labels, s.exchange AS exchange,
            s.owner_name AS owner_name`,
    { addr: address },
  )
  return rows[0] ? toAddressStat(rows[0], address) : null
}

export async function listExchangeAddresses(): Promise<string[]> {
  if (!hasNeo4j()) {
    const addrs = new Set<string>()
    for (const store of memoryDb.values()) {
      for (const n of store.nodes.values()) if (n.isExchange) addrs.add(n.address)
    }
    return [...addrs]
  }
  const rows = await cypher(`MATCH (e:Exchange) RETURN e.address AS address LIMIT 500`)
  return rows.map((r) => r.address as string).filter(Boolean)
}

export async function cypher_health(): Promise<void> {
  if (!hasNeo4j()) return
  await cypher(`RETURN 1 AS ok`)
}

export async function countNodes(): Promise<number> {
  if (!hasNeo4j()) return [...memoryDb.values()].reduce((sum, s) => sum + s.nodes.size, 0)
  const rows = await cypher(`MATCH (a:Address) RETURN count(a) AS c`)
  return Number(rows[0]?.c ?? 0)
}