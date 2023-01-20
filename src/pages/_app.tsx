import type { AppProps } from 'next/app';
import Provider from '@/provider';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Component {...pageProps} />
    </Provider>
  );
}
