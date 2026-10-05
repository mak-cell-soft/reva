import type { MetadataRoute } from 'next';
import { brandConfig } from '@/lib/brand.config';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = brandConfig.url;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
