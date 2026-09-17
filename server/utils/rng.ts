export function fnv1a(str: string): number {
  let h = 0x811c9dc5
  for (let i = 0; i < str.length; i++) {
    h ^= str.charCodeAt(i)
    h = Math.imul(h, 0x01000193)
  }
  return h >>> 0
}

export function xmur3(str: string): () => number {
  let h = 1779033703 ^ str.length
  for (let i = 0; i < str.length; i++) {
    h = Math.imul(h ^ str.charCodeAt(i), 3432918353)
    h = (h << 13) | (h >>> 19)
  }
  return function () {
    h = Math.imul(h ^ (h >>> 16), 2246822507)
    h = Math.imul(h ^ (h >>> 13), 3266489909)
    h ^= h >>> 16
    return h >>> 0
  }
}

export function mulberry32(seed: number): () => number {
  let a = seed >>> 0
  return function () {
    a |= 0
    a = (a + 0x6d2b79f5) | 0
    let t = Math.imul(a ^ (a >>> 15), 1 | a)
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

export function createRng(seed: string): () => number {
  const next = xmur3(seed)
  return mulberry32(next() ^ next() ^ next() ^ next())
}

export function randBetween(rng: () => number, min: number, max: number): number {
  return min + rng() * (max - min)
}

export function randInt(rng: () => number, min: number, max: number): number {
  return Math.floor(randBetween(rng, min, max + 1))
}

export function pick<T>(rng: () => number, arr: T[]): T {
  return arr[randInt(rng, 0, arr.length - 1)]!
}

export function pickN<T>(rng: () => number, arr: T[], count: number): T[] {
  const copy = [...arr]
  const out: T[] = []
  while (out.length < count && copy.length) {
    const i = randInt(rng, 0, copy.length - 1)
    out.push(copy.splice(i, 1)[0]!)
  }
  return out
}

export function weightedPick<T>(rng: () => number, items: Array<[T, number]>): T {
  const total = items.reduce((sum, [, w]) => sum + w, 0)
  let roll = rng() * total
  for (const [item, w] of items) {
    roll -= w
    if (roll <= 0) return item
  }
  return items[items.length - 1]![0]
}

export function hexDigest(str: string, length = 16): string {
  let h1 = 0xdeadbeef ^ fnv1a(str)
  let h2 = 0x41c6ce57 ^ fnv1a(str + ':salt')
  let out = ''
  for (let i = 0; i < length; i++) {
    h1 = Math.imul(h1 ^ (h1 >>> 16), 2246822507)
    h2 = Math.imul(h2 ^ (h2 >>> 13), 3266489909)
    h1 ^= h2 ^ (h2 >>> 9)
    h2 ^= h1 ^ (h1 >>> 11)
    out += ((h1 ^ h2) & 0xff).toString(16).padStart(2, '0')
  }
  return out.slice(0, length)
}