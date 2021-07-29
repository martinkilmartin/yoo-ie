import type { AppProps } from 'next/app'
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

export default MyApp
