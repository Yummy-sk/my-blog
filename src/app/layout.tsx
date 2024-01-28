import clsx from 'clsx';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Provider from '@/providers';
import './globals.css';
import Header from '@/components/header';
import Footer from '@/components/footer';

const inter = Inter({ subsets: ['latin'] });

interface Props {
  children: React.ReactNode;
}

export const metadata: Metadata = {
  title: 'Sang Kwon Yeum',
  description: 'My Blog',
};

export default function RootLayout({ children }: Props) {
  return (
    <html lang="ko">
      <body
        className={clsx(
          inter.className,
          'bg-zinc-50 dark:bg-black min-h-screen w-full flex justify-center sm:px-8',
        )}
      >
        <Provider>
          <div className="flex flex-col justify-between relative bg-white w-full max-w-6xl ring-1 ring-zinc-100 dark:bg-zinc-900 dark:ring-zinc-300/20">
            <Header />
            <main className="flex-1 px-4 sm:px-8 lg:px-12 mt-16 sm:mt-32">
              {children}
            </main>
            <Footer />
          </div>
        </Provider>
      </body>
    </html>
  );
}
