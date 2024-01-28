import { match } from 'ts-pattern';
import * as Articles from '@/actions/articles';
import Layout from '@/components/articles-layout';
import Back from './back';
import NotFound from './not-found';

interface Props {
  params: {
    tag: string;
  };
}

export default async function Page({ params }: Props) {
  const tag = decodeURIComponent(params.tag);
  const articles = await Articles.get({ page: 1, size: 10, tag });

  return (
    <div className="w-full h-full relative">
      {match(articles.filter(article => article.id != null))
        .with([], () => <NotFound text={tag} />)
        .otherwise(articles => (
          <>
            <Back />
            <Layout.Header title={tag} />
            <Layout articles={articles} />
          </>
        ))}
    </div>
  );
}
