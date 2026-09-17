import { listExchangeSummaries, hasTurso } from '../utils/turso'
import { getExchangeRegistry } from '../utils/identities'

export default defineEventHandler(async () => {
  if (hasTurso()) {
    return {
      connected: true,
      storage: 'turso',
      exchanges: await listExchangeSummaries(),
    }
  }
  const registry = getExchangeRegistry()
  const grouped = new Map<string, { name: string; country: string; category: string; addresses: string[] }>()
  for (const acc of registry) {
    if (!grouped.has(acc.exchangeSlug)) {
      grouped.set(acc.exchangeSlug, { name: acc.exchangeName, country: acc.country, category: acc.category, addresses: [] })
    }
    grouped.get(acc.exchangeSlug)!.addresses.push(acc.address)
  }
  return {
    connected: false,
    storage: 'registry',
    exchanges: [...grouped.entries()].map(([slug, g]) => ({
      slug,
      name: g.name,
      country: g.country,
      category: g.category,
      count: g.addresses.length,
    })),
  }
})