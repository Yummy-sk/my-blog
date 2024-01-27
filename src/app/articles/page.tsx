import { Card } from '@/components/card';
import { formatDate } from '@/utils/formatDate';
import type { Article as Item } from '@/types/articles';
import * as Articles from '@/actions/articles';

function Article({ article }: { article: Item }) {
  return (
    <article className="md:grid md:grid-cols-4 md:items-baseline">
      <Card className="md:col-span-3 relative">
        <Card.Link href={`/articles/${article.slug}`}>
          <Card.Title>{article.title}</Card.Title>
          <Card.Eyebrow
            as="time"
            dateTime={article.created_at}
            className="md:hidden"
            decorate
          >
            {formatDate(article.created_at)}
          </Card.Eyebrow>
          <Card.Description>{article.description}</Card.Description>
          <Card.Cta>Read article</Card.Cta>
        </Card.Link>
      </Card>
      <Card.Eyebrow
        as="time"
        dateTime={article.created_at}
        className="mt-1 hidden md:block"
      >
        {formatDate(article.created_at)}
      </Card.Eyebrow>
    </article>
  );
}

export default async function Page() {
  const articles = await Articles.get({ page: 1, size: 10 });

  return (
    <div className="w-full h-full">
      <header className="max-w-2xl">
        <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
          Writing on software design, company building, and the aerospace
          industry.
        </h1>
        <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
          All of my long-form thoughts on programming, leadership, product
          design, and more, collected in chronological order.
        </p>
      </header>
      <section className="flex flex-1 mt-16 sm:mt-20">
        <div className="md:border-l md:border-zinc-100 md:pl-6 md:dark:border-zinc-700/40 w-full">
          <div className="flex max-w-3xl flex-col space-y-16">
            {articles
              // FIXME: DB NULL 내려오는 이슈 수정 필
              .filter(article => article.id != null)
              .map(article => (
                <Article key={article.slug} article={article} />
              ))}
          </div>
        </div>
      </section>
    </div>
  );
}
