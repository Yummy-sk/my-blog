import { MetadataRoute } from 'next';
import * as Env from '@/utils/env';

export default function robots(): MetadataRoute.Robots {
  const siteUrl = Env.get({ key: 'BASE_URL' });

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/',
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
