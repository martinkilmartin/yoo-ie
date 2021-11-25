import Head from 'next/head'
import {
  BASE_URL,
  BRAND,
  COLOR_MS_TILE,
  COLOR_SAFARI_PIN,
  COLOR_THEME,
} from '@constants/CONTENT'

type Props = {
  appName?: string
  title: string
  description: string
  twitterCreator?: string
}

const HTMLHead = ({
  title,
  description,
  appName = BRAND,
  twitterCreator,
}: Props): JSX.Element => (
  <Head>
    <title>{title}</title>
    <meta charSet="utf-8" />
    <meta
      name="viewport"
      content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, viewport-fit=cover"
    />
    <meta name="application-name" content={appName} />
    <meta name="apple-mobile-web-app-capable" content="yes" />
    <meta name="apple-mobile-web-app-status-bar-style" content="default" />
    <meta name="apple-mobile-web-app-title" content={title} />
    <meta name="description" content={description} />
    <meta name="format-detection" content="telephone=no" />
    <meta name="mobile-web-app-capable" content="yes" />
    <meta
      name="msapplication-config"
      content="/static/icons/browserconfig.xml"
    />
    <meta name="msapplication-TileColor" content={COLOR_MS_TILE} />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="theme-color" content={COLOR_THEME} />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content={`https://${BASE_URL}`} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta
      name="twitter:image"
      content={`https://${BASE_URL}/android-chrome-192x192.png`}
    />
    {twitterCreator && <meta name="twitter:creator" content={twitterCreator} />}
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={appName} />
    <meta property="og:url" content={`https://${BASE_URL}`} />
    <meta
      property="og:image"
      content={`https://${BASE_URL}/apple-touch-icon.png`}
    />
    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link
      rel="mask-icon"
      href="/safari-pinned-tab.svg"
      color={COLOR_SAFARI_PIN}
    />
    <link rel="shortcut icon" href="/favicon.ico" />
  </Head>
)

export default HTMLHead
