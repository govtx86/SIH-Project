import { useRuntimeConfig } from '#imports'
import { createRng, pick, randInt, weightedPick } from './rng'
import { genAddress } from './address'

const EXCHANGE_COUNT = 14

const EXCHANGE_PREFIXES = [
  'Nimbus', 'Velaro', 'Lunastone', 'Onyx', 'Crimson', 'Aurora', 'Solace',
  'Meridian', 'Vantage', 'Northgrove', 'Zenith', 'Cobalt', 'Ember', 'Fathom',
  'Holloway', 'Opaline', 'Quartz', 'Steelrock', 'Tideway', 'Vesper', 'Garland',
  'Ivory', 'Keystone', 'Midwinter', 'Prism', 'Rutabaga', 'Skyreach', 'Twinpeak',
]

const EXCHANGE_SUFFIXES = [
  'Exchange', 'Trade', 'Markets', 'Capital', 'Trust', 'Group', 'Global',
  'Labs', 'Prime', 'Collective', 'Fintech', 'Vault', 'Desk', 'Pinnacle', 'Node',
  'Row', 'Shore', 'Brigade', 'Circuit', 'Dispatch',
]

const EXCHANGE_CATEGORIES: Array<[string, number]> = [
  ['Centralized Exchange', 0.55],
  ['OTC / Pro Desk', 0.15],
  ['Instant Swap', 0.2],
  ['Crypto Exchange', 0.1],
]

const FIRST_NAMES = [
  'Ahmed', 'Anya', 'Bruno', 'Camille', 'Diego', 'Elif', 'Fatima', 'Gunnar',
  'Hassan', 'Ingrid', 'Jamal', 'Katarina', 'Liam', 'Mei', 'Nadia', 'Omar',
  'Priya', 'Quentin', 'Ravi', 'Sofia', 'Tomas', 'Ursula', 'Viktor', 'Wei',
  'Ximena', 'Yusuf', 'Zara', 'Ivan', 'Lena', 'Mateo',
]

const LAST_NAMES = [
  'Alvarez', 'Bauer', 'Chen', 'Diaz', 'Elaine', 'Fischer', 'Garcia', 'Haddad',
  'Ivanov', 'Jensen', 'Kim', 'Lopez', 'Miranda', 'Novak', 'Okafor', 'Petersen',
  'Rossi', 'Silva', 'Tanaka', 'Ueda', 'Vega', 'Wagner', 'Xu', 'Yilmaz',
  'Zimmermann', 'Farouk', 'Gupta', 'Hoffmann', 'Nordqvist', 'Osman',
]

const COUNTRIES = [
  'Germany', 'France', 'United Kingdom', 'Spain', 'Portugal', 'Netherlands', 'Sweden',
  'Poland', 'Czech Republic', 'United Arab Emirates', 'Singapore', 'Hong Kong', 'Japan',
  'Brazil', 'Argentina', 'Turkey', 'Nigeria', 'Kenya', 'India', 'Indonesia', 'Vietnam',
  'Philippines', 'Mexico', 'Colombia', 'Canada', 'Australia', 'New Zealand', 'South Africa',
  'Romania', 'Hungary', 'Greece', 'Italy', 'Belgium', 'Austria', 'Switzerland', 'Luxembourg',
  'Ireland', 'Norway', 'Finland', 'Denmark', 'Estonia', 'Lithuania', 'Latvia', 'Slovakia',
]

const ID_TYPES = ['Passport', 'National ID Card', 'Driver License', 'Residence Permit']

export interface ExchangeAccount {
  exchangeSlug: string
  exchangeName: string
  country: string
  category: string
  address: string
  kyc: { name: string; email: string; country: string; idType: string; idNumber: string; verificationLevel: string; phone: string; dob: string; registeredAt: string }
}

export function maskIdNumber(id: string): string {
  if (id.length <= 6) return '*'.repeat(id.length)
  return id.slice(0, 3) + '*'.repeat(id.length - 6) + id.slice(-3)
}

let configuredNamesCache: string[] | null = null

function getConfiguredNames(): string[] {
  if (configuredNamesCache) return configuredNamesCache
  const cfg = useRuntimeConfig()
  const raw = (cfg.suspectNames as unknown) ?? []
  configuredNamesCache = Array.isArray(raw)
    ? raw.map(String).map((n) => n.trim()).filter(Boolean)
    : []
  return configuredNamesCache
}

function identityName(rng: () => number): string {
  const pool = getConfiguredNames()
  if (pool.length) return pool[randInt(rng, 0, pool.length - 1)]!
  return `${pick(rng, FIRST_NAMES)} ${pick(rng, LAST_NAMES)}`
}

export function suspectOwnerName(address: string): string {
  const rng = createRng(`${address}:owner`)
  return identityName(rng)
}

function genKyc(rng: () => number, address: string): ExchangeAccount['kyc'] {
  const name = identityName(rng)
  const parts = name.split(/\s+/)
  const first = parts[0] ?? 'user'
  const last = parts[parts.length - 1] ?? 'user'
  const country = pick(rng, COUNTRIES)
  const year = randInt(rng, 1965, 1999)
  const month = String(randInt(rng, 1, 12)).padStart(2, '0')
  const day = String(randInt(rng, 1, 28)).padStart(2, '0')
  const idType = pick(rng, ID_TYPES)
  const idNumber = genIdNumber(rng, idType, country)
  return {
    name,
    email: `${first.toLowerCase()}.${last.toLowerCase()}${randInt(rng, 1, 99)}@example.net`,
    country,
    idType,
    idNumber: maskIdNumber(idNumber),
    verificationLevel: weightedPick(rng, [['L3 Verified', 0.45], ['L2 Verified', 0.4], ['L1 Basic', 0.15]]),
    phone: `+${randInt(rng, 1, 99)} ${randInt(rng, 100, 999)} ${randInt(rng, 100, 999)} ${randInt(rng, 10, 99)}${randInt(rng, 10, 99)}`,
    dob: `${year}-${month}-${day}`,
    registeredAt: new Date(Date.UTC(2017 + randInt(rng, 0, 7), randInt(rng, 0, 11), randInt(rng, 1, 28))).toISOString(),
  }
}

function genIdNumber(rng: () => number, idType: string, country: string): string {
  const prefix = country.slice(0, 2).toUpperCase()
  if (idType === 'Passport') {
    return `${prefix}${chr(rng)}${chr(rng)}${randInt(rng, 100000, 999999)}`
  }
  return `${prefix}${randInt(rng, 10000000, 99999999)}`
}

function chr(rng: () => number): string {
  return String.fromCharCode(65 + randInt(rng, 0, 25))
}

interface ExchangeMeta {
  slug: string
  name: string
  country: string
  category: string
}

function buildExchangeMeta(rng: () => number): ExchangeMeta[] {
  const meta: ExchangeMeta[] = []
  const used = new Set<string>()
  let guard = 0
  while (meta.length < EXCHANGE_COUNT && guard++ < 300) {
    const name = `${pick(rng, EXCHANGE_PREFIXES)} ${pick(rng, EXCHANGE_SUFFIXES)}`
    if (used.has(name)) continue
    used.add(name)
    const slug = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '')
    meta.push({
      slug,
      name,
      country: pick(rng, COUNTRIES),
      category: weightedPick(rng, EXCHANGE_CATEGORIES),
    })
  }
  return meta
}

const FIXED_REGISTRY_SEED = 'fake-exchange-registry-v2'

export function buildExchangeRegistry(): ExchangeAccount[] {
  const rng = createRng(FIXED_REGISTRY_SEED)
  const meta = buildExchangeMeta(rng)
  const accounts: ExchangeAccount[] = []
  for (const m of meta) {
    const addrCount = weightedPick(rng, [[2, 0.6], [3, 0.3], [4, 0.1]])
    for (let i = 0; i < addrCount; i++) {
      const addrRng = createRng(`${m.slug}:${i}`)
      const address = genAddress(addrRng)
      accounts.push({
        exchangeSlug: m.slug,
        exchangeName: m.name,
        country: m.country,
        category: m.category,
        address,
        kyc: genKyc(createRng(`${m.slug}:${i}:kyc:${address}`), address),
      })
    }
  }
  return accounts
}

let cachedRegistry: ExchangeAccount[] | null = null

export function getExchangeRegistry(): ExchangeAccount[] {
  if (!cachedRegistry) cachedRegistry = buildExchangeRegistry()
  return cachedRegistry
}

export function findExchangeByAddress(address: string): ExchangeAccount | undefined {
  return getExchangeRegistry().find((a) => a.address === address)
}

export function findExchangeAccounts(addresses: string[]): ExchangeAccount[] {
  const registry = getExchangeRegistry()
  const byAddress = new Map(registry.map((a) => [a.address, a]))
  return (addresses.map((addr) => byAddress.get(addr)).filter(Boolean) as ExchangeAccount[])
}