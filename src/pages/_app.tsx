import type { AppProps } from 'next/app';
import { Layout } from '@/components';
import Provider from '@/provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </Provider>
  );
}
