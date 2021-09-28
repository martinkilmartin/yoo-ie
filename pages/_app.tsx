import type { AppProps, NextWebVitalsMetric } from 'next/app'
import { Browser as Logtail } from '@logtail/js'
import { useEffect } from 'react'
const LOGTAIL_SOURCE_TOKEN = process.env.NEXT_PUBLIC_LOGTAIL_SOURCE_TOKEN || ''

const logtail = new Logtail(LOGTAIL_SOURCE_TOKEN)
const ThemeChange = require('theme-change')
const { themeChange } = ThemeChange

import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
  useEffect(() => {
    themeChange(false)
  }, [])
  return <Component {...pageProps} />
}

export function reportWebVitals(metric: NextWebVitalsMetric): void {
  logtail.info(JSON.stringify(metric))
}

export default MyApp
