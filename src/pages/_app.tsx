import type { AppProps } from 'next/app';
import { Roboto } from '@next/font/google';
import Provider from '@/provider';

const roboto = Roboto({
  weight: ['100', '300', '400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={roboto.className}>
      <Provider>
        <Component {...pageProps} />
      </Provider>
    </main>
  );
}
