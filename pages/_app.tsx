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
