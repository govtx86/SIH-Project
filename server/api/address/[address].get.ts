import { getRouterParam, createError } from 'h3'
import { isValidLtcTestnetAddress } from '../../utils/address'
import { getAddressNode } from '../../utils/neo4j'
import { getKycForAddresses } from '../../utils/turso'

export default defineEventHandler(async (event) => {
  const address = String(getRouterParam(event, 'address') ?? '').trim()
  if (!isValidLtcTestnetAddress(address)) throw createError({ statusCode: 422, statusMessage: 'Not a valid Litecoin testnet address' })
  const [node, kyc] = await Promise.all([
    getAddressNode(address),
    getKycForAddresses([address]),
  ])
  if (!node) {
    return {
      address,
      exists: false,
      node: null,
      kyc: kyc[0] ?? null,
    }
  }
  return { address, exists: true, node, kyc: kyc[0] ?? null }
})