'use client';

import { useRouter } from 'next/navigation';

interface Props {
  text: string;
}

export default function NotFound({ text }: Props) {
  let router = useRouter();

  return (
    <div className="mx-auto max-w-7xl px-6 py-32 text-center sm:py-40 lg:px-8">
      <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
        Tag not found
      </h1>
      <p className="mt-4 text-base text-zinc-600 dark:text-zinc-400 sm:mt-6">
        {`Sorry, couldnt't find article contains a "${text}" tag.`}
      </p>
      <div className="mt-10 flex justify-center">
        <button
          className="text-sm font-medium text-teal-500"
          onClick={() => router.back()}
        >
          <span aria-hidden="true">&larr;</span>Go Back
        </button>
      </div>
    </div>
  );
}
