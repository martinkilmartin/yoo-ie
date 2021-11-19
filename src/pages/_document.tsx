import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
  DocumentInitialProps,
} from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(
    ctx: DocumentContext
  ): Promise<DocumentInitialProps> {
    const initialProps = await Document.getInitialProps(ctx)

    return initialProps
  }

  render(): JSX.Element {
    return (
      <Html data-theme="forest" lang="en">
        <Head />
        <body className="bg-base-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
