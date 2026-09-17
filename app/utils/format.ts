export function fmtLtc(n: number | undefined): string {
  if (n === undefined || n === null || Number.isNaN(n)) return '0'
  return n.toLocaleString('en-US', { maximumFractionDigits: 8 })
}

export function fmtCompact(n: number | undefined): string {
  if (n === undefined || n === null || Number.isNaN(n)) return '0'
  if (n >= 1_000_000_000) return `${(n / 1_000_000_000).toFixed(1)}B`
  if (n >= 1_000_000) return `${(n / 1_000_000).toFixed(1)}M`
  if (n >= 1_000) return `${(n / 1_000).toFixed(1)}K`
  return `${n.toFixed(2)}`
}

export function fmtDate(ts: number): string {
  if (!ts) return '—'
  return new Date(ts).toISOString().replace('T', ' ').slice(0, 16) + ' UTC'
}

export function shortAddr(addr: string, head = 8, tail = 6): string {
  if (addr.length <= head + tail + 1) return addr
  return `${addr.slice(0, head)}…${addr.slice(-tail)}`
}

export function pct(v: number): string {
  return `${v.toFixed(1)}%`
}