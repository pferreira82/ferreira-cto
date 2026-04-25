import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://ferreiracto.com';
  const now = new Date();

  return [
    { url: base,                                  lastModified: now, changeFrequency: 'weekly',  priority: 1.0 },
    { url: `${base}/build-anyway`,                lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${base}/build-anyway/foundation`,     lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/build-anyway/for-directors`,  lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/red-flags`,                   lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/podcast`,                     lastModified: now, changeFrequency: 'weekly',  priority: 0.7 },
    { url: `${base}/assessment`,                  lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${base}/privacy`,                     lastModified: now, changeFrequency: 'yearly',  priority: 0.3 },
  ];
}
