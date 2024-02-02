import type { MetadataRoute } from 'next';
import * as Articles from '@/actions/articles';
import * as Tags from '@/actions/tags';
import * as Env from '@/utils/env';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const siteUrl = Env.get({ key: 'PRODUCTION_URL' });

  const rootPages: MetadataRoute.Sitemap = ['', 'articles', 'tags'].map(
    (path) => ({
      url: `${siteUrl}/${path}`,
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified: new Date().toISOString(),
    }),
  );

  const articles: MetadataRoute.Sitemap = await Articles.get({}).then((res) =>
    res.map((article) => ({
      url: `${siteUrl}/articles/${article.slug}`,
      changeFrequency: 'monthly',
      priority: 1,
      lastModified: new Date(article.created_at).toISOString(),
    })),
  );

  const tags: MetadataRoute.Sitemap = await Tags.get().then((res) =>
    res.map((tag) => ({
      url: `${siteUrl}/tags/${tag.text}`,
      changeFrequency: 'monthly',
      priority: 0.7,
      lastModified: new Date().toISOString(),
    })),
  );

  return [...rootPages, ...articles, ...tags];
}
