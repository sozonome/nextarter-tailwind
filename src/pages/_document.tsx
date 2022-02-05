import type { DocumentContext } from "next/document";
import Document, { Html, Head, Main, NextScript } from "next/document";

const APP_NAME = "nextarter-tailwind";

class MyDocument extends Document {
  static getInitialProps(ctx: DocumentContext) {
    return Document.getInitialProps(ctx);
  }

  render() {
    return (
      <Html lang="en" data-theme="light">
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
           <link rel="icon" href="/app-icon.png" /> */}
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
