import * as Articles from '@/actions/articles';
import Layout from '@/components/articles-layout';

export const revalidate = 0;

export default async function Page() {
  const articles = await Articles.get({ page: 1, size: 10 });

  return (
    <div className="w-full h-full">
      <Layout.Header
        title="Writing on software design, company building, and the aerospace industry."
        description="All of my long-form thoughts on programming, leadership, product design, and more, collected in chronological order."
      />
      <Layout articles={articles} />
    </div>
  );
}
