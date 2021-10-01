import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { useEffect } from "react";
import { themeChange } from "theme-change";
import "@fontsource/plus-jakarta-sans/latin.css";

import defaultSEOConfig from "../../next-seo.config";
import Layout from "components/layout";

import "styles/globals.css";

const MyApp = ({ Component, pageProps }: AppProps) => {
  useEffect(() => {
    themeChange(false);
    // 👆 false parameter is required for react project
  }, []);

  return (
    <Layout>
      <DefaultSeo {...defaultSEOConfig} />
      <Component {...pageProps} />
    </Layout>
  );
};

export default MyApp;
