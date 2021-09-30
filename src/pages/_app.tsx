import type { AppProps } from "next/app";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import "@fontsource/plus-jakarta-sans";

import Layout from "components/layout";

import "styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
