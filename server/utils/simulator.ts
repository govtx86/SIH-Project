import type { SimTx, AddressStats } from '../../app/types'
import { getExchangeRegistry, findExchangeByAddress, suspectOwnerName, type ExchangeAccount } from './identities'
import { createRng, randBetween, randInt, pickN, hexDigest } from './rng'
import { genAddress } from './address'

export interface Simulation {
  address: string
  txns: SimTx[]
  nodes: AddressStats[]
  exchangeAccounts: ExchangeAccount[]
  generatedAt: number
}

function uniqueAddresses(baseSeed: string, count: number): string[] {
  const seen = new Set<string>()
  const out: string[] = []
  let i = 0
  while (out.length < count) {
    const addr = genAddress(createRng(`${baseSeed}:slot:${i++}`))
    if (seen.has(addr)) continue
    seen.add(addr)
    out.push(addr)
  }
  return out
}

function round8(v: number): number {
  return Math.round(v * 1e8) / 1e8
}

function blockHeightFor(timestamp: number): number {
  const genesis = 1607040000000
  const blockMs = 150000
  return Math.floor((timestamp - genesis) / blockMs)
}

function txHash(rng: () => number, from: string, to: string, seq: number, ts: number): string {
  return `sim:${hexDigest(`${from}:${to}:${seq}:${ts}:${rng().toString(16)}`, 58)}`
}

function buildNode(
  address: string,
  suspect: string,
  txns: SimTx[],
  isExchange: boolean,
  exchangeName?: string,
): AddressStats {
  let received = 0
  let sent = 0
  const times: number[] = []
  for (const t of txns) {
    if (t.from === address || t.to === address) {
      times.push(t.timestamp)
      if (t.to === address) received += t.amount
      if (t.from === address) sent += t.amount + t.fee
    }
  }
  return {
    address,
    isExchange,
    exchangeName,
    isSuspect: address === suspect,
    totalReceived: round8(received),
    totalSent: round8(sent),
    balance: round8(Math.max(0, received - sent)),
    txCount: times.length,
    firstSeen: times.length ? Math.min(...times) : 0,
    lastSeen: times.length ? Math.max(...times) : 0,
  }
}

export function simulateSuspectGraph(address: string): Simulation {
  const sRng = createRng(address)
  const registry = getExchangeRegistry()
  const exchangeAccounts = pickN(sRng, registry, randInt(sRng, 4, 7))
  const exchangeAddresses = new Set(exchangeAccounts.map((a) => a.address))

  const midCount = randInt(sRng, 5, 11)
  const mids = uniqueAddresses(`${address}:mids`, midCount)
  const leaves = uniqueAddresses(`${address}:leaves`, randInt(sRng, 2, 5))

  const txns: SimTx[] = []
  let ts = Date.now() - randInt(sRng, 260, 380) * 86400000
  let seq = 0

  const push = (from: string, to: string, amount: number, fee: number) => {
    ts += randInt(sRng, 45, 60 * 24 * 9) * 60000
    txns.push({
      hash: txHash(sRng, from, to, seq++, ts),
      from,
      to,
      amount: round8(amount),
      fee: round8(fee),
      timestamp: ts,
      blockHeight: blockHeightFor(ts),
    })
  }

  for (const mid of mids) {
    const deposits = randInt(sRng, 1, 2)
    for (let i = 0; i < deposits; i++) {
      push(mid, address, randBetween(sRng, 0.05, 45), randBetween(sRng, 0.0001, 0.006))
    }
  }

  const layeringMids = pickN(sRng, mids, randInt(sRng, 2, 4))
  for (const mid of layeringMids) {
    const sends = randInt(sRng, 1, 2)
    for (let i = 0; i < sends; i++) {
      push(mid, pickN(sRng, exchangeAccounts, 1)[0]!.address, randBetween(sRng, 5, 90), randBetween(sRng, 0.0001, 0.009))
    }
  }

  const outgoing = randInt(sRng, 2, 5)
  for (let i = 0; i < outgoing; i++) {
    const ex = pickN(sRng, exchangeAccounts, 1)[0]!
    push(address, ex.address, randBetween(sRng, 5, 220), randBetween(sRng, 0.0002, 0.009))
  }

  const toMids = randInt(sRng, 2, 5)
  for (let i = 0; i < toMids; i++) {
    push(address, pickN(sRng, mids, 1)[0]!, randBetween(sRng, 0.3, 60), randBetween(sRng, 0.0001, 0.007))
  }

  for (const leaf of leaves) {
    push(address, leaf, randBetween(sRng, 0.01, 4), randBetween(sRng, 0.0001, 0.004))
  }

  let receivedTotal = 0
  let sentTotal = 0
  for (const t of txns) {
    if (t.to === address) receivedTotal += t.amount
    if (t.from === address) sentTotal += t.amount + t.fee
  }
  let guard = 0
  while (sentTotal > receivedTotal && guard < 5) {
    const shortfall = sentTotal - receivedTotal
    const donor = pickN(sRng, mids, 1)[0]!
    const extra = randBetween(sRng, shortfall + 15, shortfall + 220)
    push(donor, address, extra, randBetween(sRng, 0.0001, 0.005))
    receivedTotal += extra
    guard++
  }

  const suspect = buildNode(address, address, txns, false)
  suspect.ownerName = suspectOwnerName(address)
  const nodeSet = new Map<string, AddressStats>()

  const allOthers = [...new Set(txns.flatMap((t) => [t.from, t.to]).filter((a) => a !== address))]
  for (const addr of allOthers) {
    const exchange = findExchangeByAddress(addr)
    nodeSet.set(addr, buildNode(addr, address, txns, Boolean(exchange), exchange?.exchangeName))
  }
  nodeSet.set(address, suspect)

  return {
    address,
    txns,
    nodes: [...nodeSet.values()].sort((a, b) => a.address.localeCompare(b.address)),
    exchangeAccounts,
    generatedAt: Date.now(),
  }
}