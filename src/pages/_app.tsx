import type { AppProps } from 'next/app';
import { DefaultSeo } from 'next-seo';

import defaultSEOConfig from '../../next-seo.config';
import Layout from '@/lib/components/layout';
import { fontSans } from '@/lib/styles/fonts';

import 'lib/styles/globals.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className={`font-sans ${fontSans.variable}`}>
      <Layout>
        <DefaultSeo {...defaultSEOConfig} />
        <Component {...pageProps} />
      </Layout>
    </div>
  );
};

export default MyApp;
