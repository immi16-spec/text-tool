import type { MetadataRoute } from 'next';
import { tools } from '@/lib/tools';

const siteUrl = 'https://texttoolpro.com';

const staticPages = ['/', '/about', '/privacy', '/contact', '/instagram-font-generator', '/whatsapp-stylish-text', '/youtube-title-tools'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries = staticPages.map((path) => ({
    url: `${siteUrl}${path}`,
    lastModified: new Date(),
  }));

  const toolEntries = tools.map((tool) => ({
    url: `${siteUrl}${tool.path}`,
    lastModified: new Date(),
  }));

  return [...staticEntries, ...toolEntries];
}
