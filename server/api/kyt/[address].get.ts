import { getRouterParam, createError } from 'h3'
import { isValidLtcTestnetAddress } from '../../utils/address'
import { getKycForAddresses } from '../../utils/turso'

export default defineEventHandler(async (event) => {
  const address = String(getRouterParam(event, 'address') ?? '').trim()
  if (!isValidLtcTestnetAddress(address)) throw createError({ statusCode: 422, statusMessage: 'Not a valid Litecoin testnet address' })
  const records = await getKycForAddresses([address])
  const record = records[0]
  if (!record) throw createError({ statusCode: 404, statusMessage: 'No KYC record for this address' })
  return record
})