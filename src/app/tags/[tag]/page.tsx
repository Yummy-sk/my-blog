import { match } from 'ts-pattern';
import * as Tags from '@/actions/tags';
import * as Articles from '@/actions/articles';
import Layout from '@/components/articles-layout';
import Back from './back';
import NotFound from './not-found';

interface Props {
  params: {
    tag: string;
  };
}

export async function generateStaticParams() {
  const tags = await Tags.get();

  return tags.map((tag) => ({
    params: {
      tag: tag.text,
    },
  }));
}

export function generateMetadata({ params }: Props) {
  return {
    title: `${params.tag} Articles`,
    keywords: [params.tag],
  };
}

export default async function Page({ params }: Props) {
  const tag = decodeURIComponent(params.tag);
  const articles = await Articles.get({ page: 1, size: 10, tag });

  return (
    <div className="w-full h-full relative">
      {match(articles.filter((article) => article.id != null))
        .with([], () => <NotFound text={tag} />)
        .otherwise((articles_) => (
          <>
            <Back />
            <Layout.Header title={tag} />
            <Layout articles={articles_} />
          </>
        ))}
    </div>
  );
}
