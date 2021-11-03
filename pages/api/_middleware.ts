import { NextRequest, NextResponse } from 'next/server'
import { ipRateLimit } from '@lib/ip-rate-limit'

// Block USA, Allow Ireland, Canada, UK
const ALLOWED_COUNTRY = ['IE', 'CA', 'GB']
const BLOCKED_COUNTRY = ['US']

export async function middleware(req: NextRequest): Promise<Response> {
  const { nextUrl: url, geo } = req
  const country = geo.country || 'US'

  if (ALLOWED_COUNTRY.includes(country)) {
    const res = await ipRateLimit(req)
    if (res.status !== 200) {
      return res
    } else {
      url.searchParams.set('country', country)
      return NextResponse.rewrite(url)
    }
  } else if (BLOCKED_COUNTRY.includes(country)) {
    return new Response('Blocked for legal reasons', { status: 451 })
  } else {
    return new Response('Limited audience', { status: 451 })
  }
}
