import type { MetadataRoute } from 'next';
import { wpClient } from '@/lib/wordpress/client';
import { GET_BUNGALOWS } from '@/lib/wordpress/queries';
import type { GetBungalowsResponse } from '@/lib/wordpress/types';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://europeenchantedkohrong.com';

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/bungalows`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/amenities`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  try {
    const data = await wpClient.request<GetBungalowsResponse>(GET_BUNGALOWS);
    const bungalowRoutes: MetadataRoute.Sitemap = (data.bungalows?.nodes ?? []).map((b) => ({
      url: `${baseUrl}/bungalows/${b.slug}`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.85,
    }));

    return [...staticRoutes, ...bungalowRoutes];
  } catch (error) {
    console.error('Error generating dynamic sitemap routes:', error);
    return staticRoutes;
  }
}
