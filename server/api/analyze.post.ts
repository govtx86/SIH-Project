import { readBody, createError } from 'h3'
import type { AnalyzeResponse } from '../../app/types'
import { isValidLtcTestnetAddress } from '../utils/address'
import { simulateSuspectGraph } from '../utils/simulator'
import { hasNeo4j, upsertSimulation } from '../utils/neo4j'
import { persistExchangeKyc, getKycForAddresses, hasTurso } from '../utils/turso'

export default defineEventHandler(async (event): Promise<AnalyzeResponse> => {
  try {
    const body = await readBody(event).catch(() => ({}))
    const input = String(body?.address ?? '').trim()

    if (!input) throw createError({ statusCode: 400, statusMessage: 'Missing "address" in request body' })
    if (!isValidLtcTestnetAddress(input)) {
      throw createError({ statusCode: 422, statusMessage: 'Not a valid Litecoin testnet address' })
    }
    if (input.length > 100) throw createError({ statusCode: 422, statusMessage: 'Address too long' })

    const sim = simulateSuspectGraph(input)

    await upsertSimulation(sim)
    const storageMode = hasNeo4j() ? 'neo4j' : 'memory'
    const tursoMode = await persistExchangeKyc(sim.exchangeAccounts)

    const graph: AnalyzeResponse['graph'] = {
      nodes: sim.nodes.map((n) => ({ data: n })),
      edges: sim.txns.map((t) => ({
        data: {
          id: t.hash,
          source: t.from,
          target: t.to,
          hash: t.hash,
          amount: t.amount,
          fee: t.fee,
          timestamp: t.timestamp,
          direction: t.to === sim.address ? 'in' : 'out',
        },
      })),
    }

    const exchangeAddresses = sim.nodes.filter((n) => n.isExchange).map((n) => n.address)
    const kyt = await getKycForAddresses(exchangeAddresses)

    return {
      graph,
      kyt,
      suspect: input,
      storageMode,
      tursoConnected: tursoMode === 'turso',
      generatedAt: Date.now(),
    }
  } catch (err) {
    if (err && typeof err === 'object' && 'statusCode' in (err as Record<string, unknown>)) throw err
    const message = err instanceof Error ? err.message : String(err)
    throw createError({ statusCode: 500, statusMessage: message })
  }
})