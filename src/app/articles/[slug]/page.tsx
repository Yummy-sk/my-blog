import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '@/components/article-layout';
import * as Article from '@/actions/article';
import MDX from './mdx';

export const revalidate = 0;

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

interface Props {
  params: {
    slug: string;
  };
}

export default async function Page({ params }: Props) {
  const data = await Article.get({ slug: decodeURIComponent(params.slug) });
  const mdxSource = await serializeMdx(data.content);

  return (
    <Layout title={data.title} date={data.created_at} tags={data.tags}>
      <MDX mdxSource={mdxSource} />
    </Layout>
  );
}
