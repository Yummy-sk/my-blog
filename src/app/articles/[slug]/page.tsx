import { Metadata } from 'next';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import { serialize } from 'next-mdx-remote/serialize';
import Layout from '@/components/article-layout';
import * as Article from '@/actions/article';
import * as Articles from '@/actions/articles';
import MDX from './mdx';

interface Props {
  params: {
    slug: string;
  };
}

export async function generateStaticParams() {
  const articles = await Articles.get({ page: 1, size: 10 });

  return articles.map((article) => ({
    params: {
      slug: article.slug,
    },
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { title, description, tags } = await Article.get({
    slug: decodeURIComponent(params.slug),
  });

  return {
    title,
    description,
    keywords: tags.map((tag) => tag.text),
  };
}

const serializeMdx = (source: string) =>
  serialize(source, {
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

export default async function Page({ params }: Props) {
  const data = await Article.get({ slug: decodeURIComponent(params.slug) });
  const mdxSource = await serializeMdx(data.content);

  return (
    <Layout title={data.title} date={data.created_at} tags={data.tags}>
      <MDX mdxSource={mdxSource} />
    </Layout>
  );
}
