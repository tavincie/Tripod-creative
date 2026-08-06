import type { MetadataRoute } from 'next';
import { getSiteUrl } from '@/config/site';
import { routing } from '@/i18n/routing';

const publicRoutePaths = ['', '/about', '/services', '/portfolio', '/studio-academy', '/contact'];

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = getSiteUrl();
  const now = new Date();

  return routing.locales.flatMap((locale) =>
    publicRoutePaths.map((path) => ({
      url: `${siteUrl}/${locale}${path}`,
      lastModified: now,
      changeFrequency: path === '' ? 'weekly' : 'monthly',
      priority: path === '' ? 1 : 0.8,
    })),
  );
}
