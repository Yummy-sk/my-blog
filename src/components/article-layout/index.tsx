'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Card } from '@/components/card';
import { Button } from '@/components/button';
import { formatDate } from '@/utils/formatDate';

interface Props {
  title: string;
  date: string;
  tags: {
    id: string;
    text: string;
  }[];
  children: React.ReactNode;
}

export default function Layout({ title, date, tags, children }: Props) {
  const router = useRouter();

  return (
    <div className="relative w-full h-full">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <Button.Back
            className="lg:absolute lg:-left-5 lg:-mt-2 lg:mb-0 xl:-top-1.5 xl:left-0 xl:mt-0"
            ariaLabel="Go back to articles"
            onClick={() => router.back()}
          />
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 sm:text-5xl dark:text-zinc-100">
                {title}
              </h1>
              <time
                dateTime={date}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{formatDate(date)}</span>
              </time>

              <div className="flex flex-row gap-2">
                {tags.map((tag) => (
                  <Link key={tag.id} href={`/tags/${tag.text}`}>
                    <Card.Tag text={tag.text} />
                  </Link>
                ))}
              </div>
            </header>
            <div className="mt-8" data-mdx-content>
              {children}
            </div>
          </article>
        </div>
      </div>
    </div>
  );
}
