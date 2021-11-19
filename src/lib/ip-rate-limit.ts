import { initRateLimit, CountFn } from './rate-limit'
import getIP from './get-ip'
import { upstashRest } from './upstash'
import { IP_LIMIT_QUANTITY, IP_LIMIT_DURATION } from '@constants/IP_LIMIT'

export const ipRateLimit = initRateLimit((request) => ({
  id: `${getIP(request)}`,
  count: increment,
  limit: IP_LIMIT_QUANTITY,
  duration: IP_LIMIT_DURATION,
}))

const increment: CountFn = async ({ key, duration }) => {
  const results = await upstashRest(
    [
      ['INCR', key],
      ['EXPIRE', key, duration],
    ],
    { pipeline: true }
  )
  return results[0].result
}
