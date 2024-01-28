'use client';

import Link from 'next/link';

interface Props {
  error: Error
}

export default function ErrorBoundary({ error }: Props) {
  return (
    <main className="grid min-h-full place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold">Error</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Something went wrong...</h1>
        <p className="mt-6 text-base leading-7">{`message: ${error.message}`}</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          <Link
            href="/"
            className="font-semibold transition hover:text-teal-500 dark:hover:text-teal-400"
          >
            Go back home
          </Link>
        </div>
      </div>
    </main>
  );
}
