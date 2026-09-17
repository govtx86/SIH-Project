import { weightedPick, randInt } from './rng'

const BASE58 = '123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz'
const BECH32 = 'qpzry9x8gf2tvdw0s3jn54khce6mua7l'

export function isValidLtcTestnetAddress(input: string): boolean {
  if (typeof input !== 'string') return false
  const addr = input.trim()
  if (/^tltc1[qpzry9x8gf2tvdw0s3jn54khce6mua7l]{36,90}$/i.test(addr)) return true
  if (/^[mn2][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(addr)) return true
  return false
}

function genBase58Chunk(rng: () => number, prefixChars: string, length: number): string {
  let out = prefixChars.charAt(Math.floor(rng() * prefixChars.length))
  for (let i = 1; i < length; i++) {
    out += BASE58.charAt(Math.floor(rng() * BASE58.length))
  }
  return out
}

export function genLegacyAddress(rng: () => number): string {
  const prefix = weightedPick(rng, [['m', 0.44], ['n', 0.44], ['2', 0.12]] as Array<[string, number]>)
  return genBase58Chunk(rng, prefix, randInt(rng, 26, 34))
}

function genBech32Address(rng: () => number): string {
  let data = 'tltc1'
  const version = weightedPick(rng, [['q', 0.85], ['p', 0.15]] as Array<[string, number]>)
  data += version
  for (let i = 0; i < 37; i++) {
    data += BECH32.charAt(Math.floor(rng() * BECH32.length))
  }
  return data
}

export function genAddress(rng: () => number): string {
  return weightedPick(rng, [
    [() => genLegacyAddress(rng), 0.7],
    [() => genBech32Address(rng), 0.3],
  ] as Array<[() => string, number]>)()
}