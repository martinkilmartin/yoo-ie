import type { AppProps } from 'next/app'
import { useEffect } from 'react'
const ThemeChange = require('theme-change')
const { themeChange } = ThemeChange

import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    themeChange(false)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
