/**
 * @todo: remove this comment below when ready
 * ref: https://github.com/vercel/next.js/issues/13712#issuecomment-910409023
 * */
// eslint-disable-next-line @next/next/no-document-import-in-page
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";

const APP_NAME = "nextarter-daisy";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en" data-theme="dracula">
        <Head>
          <meta name="application-name" content={APP_NAME} />
          <meta name="apple-mobile-web-app-capable" content="yes" />
          <meta
            name="apple-mobile-web-app-status-bar-style"
            content="default"
          />
          <meta name="apple-mobile-web-app-title" content={APP_NAME} />
          <meta name="format-detection" content="telephone=no" />
          <meta name="mobile-web-app-capable" content="yes" />
          <meta name="theme-color" content="#FFFFFF" />

          {/* add your own app-icon */}
          {/* <link
             rel="apple-touch-icon"
             sizes="180x180"
             href="/icons/apple-touch-icon.png"
           />
           <link rel="shortcut icon" href="/app-icon.png" /> */}
          <link rel="manifest" href="/manifest.json" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
