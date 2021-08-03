import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { ReactElement, useEffect } from 'react'
const ThemeChange = require('theme-change')
const { themeChange } = ThemeChange

import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps): ReactElement<any, any> {
  useEffect(() => {
    themeChange(false)
  }, [])
  return <Component {...pageProps} />
}

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  // handle Web Vitals
  if (metric.label === 'web-vital') {
    switch (metric.name) {
      case 'FCP':
        // handle FCP results
        break
      case 'LCP':
        // handle LCP results
        break
      case 'CLS':
        // handle CLS results
        break
      case 'FID':
        // handle FID results
        break
      case 'TTFB':
        // handle TTFB results
        break
      default:
        break
    }
  }
  // handle NextJS results
  else if (metric.label === 'custom') {
    switch (metric.name) {
      case 'Next.js-hydration':
        // handle hydration results
        break
      case 'Next.js-route-change-to-render':
        // handle route-change to render results
        break
      case 'Next.js-render':
        // handle render results
        break
      default:
        break
    }
  }

  // const body =
  JSON.stringify(metric)
  // const url = 'https://example.com/analytics'

  // // Use `navigator.sendBeacon()` if available, falling back to `fetch()`.
  // if (navigator.sendBeacon) {
  //  navigator.sendBeacon(url, body)
  // } else {
  //  fetch(url, { body, method: 'POST', keepalive: true })
  // }
}

export default MyApp
