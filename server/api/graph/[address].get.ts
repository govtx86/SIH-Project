import { getRouterParam, createError } from 'h3'
import { isValidLtcTestnetAddress } from '../../utils/address'
import { readGraph } from '../../utils/neo4j'

export default defineEventHandler(async (event) => {
  const address = String(getRouterParam(event, 'address') ?? '').trim()
  if (!isValidLtcTestnetAddress(address)) throw createError({ statusCode: 422, statusMessage: 'Not a valid Litecoin testnet address' })
  const graph = await readGraph(address)
  return { ...graph, exists: graph.nodes.length > 0 }
})