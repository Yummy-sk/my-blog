import type { Metadata } from 'next';
import * as Articles from '@/actions/articles';
import Layout from '@/components/articles-layout';

export const revalidate = 3600;

export const metadata: Metadata = {
  title: 'Articles',
  description: 'My Blog',
};

export default async function Page() {
  const articles = await Articles.get({ page: 1, size: 10 });

  return (
    <div className="w-full h-full">
      <Layout.Header
        title="Writing on software programming and experiences."
        description="Programming and insights from my experience, in chronological order."
      />
      <Layout articles={articles} />
    </div>
  );
}
