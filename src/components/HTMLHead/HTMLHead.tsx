import Head from 'next/head'

type Props = {
  title: string
  description: string
  appName: string
  baseURL: string
}

const HTMLHead = ({
  title,
  description,
  appName,
  baseURL,
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
    <meta name="msapplication-TileColor" content="#ffffff" />
    <meta name="msapplication-tap-highlight" content="no" />
    <meta name="theme-color" content="#000000" />

    <meta name="twitter:card" content="summary" />
    <meta name="twitter:url" content={`https://${baseURL}`} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
    <meta
      name="twitter:image"
      content={`https://${baseURL}/android-chrome-192x192.png`}
    />
    <meta name="twitter:creator" content="@DavidWShadow" />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta property="og:site_name" content={appName} />
    <meta property="og:url" content={`https://${baseURL}`} />
    <meta
      property="og:image"
      content={`https://${baseURL}/apple-touch-icon.png`}
    />

    <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
    <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
    <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
    <link rel="manifest" href="/site.webmanifest" />
    <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#ffffff" />
    <link rel="shortcut icon" href="/favicon.ico" />
  </Head>
)

export default HTMLHead
