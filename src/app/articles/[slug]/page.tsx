import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '@/components/article-layout';
import * as Article from '@/actions/article';
import MDX from './mdx';

const serializeMdx = (source: string) => {
  return serialize(source, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
      rehypePlugins: [
        [
          // @ts-ignore
          rehypePrettyCode,
          {
            theme: 'material-theme-palenight',
          },
        ],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['anchor dark:text-zinc-100'],
            },
          },
        ],
      ],
      format: 'mdx',
    },
  });
};

export default async function Page({ params }: { params: { slug: string } }) {
  const data = await Article.get({ slug: decodeURIComponent(params.slug) });
  const mdxSource = await serializeMdx(data.content);

  return (
    <Layout title={data.title} date={data.created_at}>
      <MDX mdxSource={mdxSource} />
    </Layout>
  );
}
