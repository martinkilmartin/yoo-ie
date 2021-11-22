import { NextRequest, NextResponse } from 'next/server'
import { ipRateLimit } from 'src/lib/ip-rate-limit'
import { ALLOWED_COUNTRY, BLOCKED_COUNTRY } from '@constants/GEO_LOCK'

export async function middleware(req: NextRequest): Promise<Response> {
  const { nextUrl: url, geo } = req
  const country = geo.country || 'XX'

  if (ALLOWED_COUNTRY.length == 0 || ALLOWED_COUNTRY.includes(country)) {
    const res = await ipRateLimit(req)
    if (res.status !== 200) return res
    return NextResponse.rewrite(url)
  } else if (BLOCKED_COUNTRY.includes(country)) {
    return new Response(
      JSON.stringify({
        error:
          'The temperature at which book paper 📖 catches fire and burns 🔥',
      }),
      {
        status: 451,
      }
    )
  } else {
    return new Response(JSON.stringify({ error: "I'm a teapot 🫖" }), {
      status: 418,
    })
  }
}
