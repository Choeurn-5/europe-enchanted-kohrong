import type { Metadata } from 'next';
import GalleryHeader from '@/app/components/gallery/GalleryHeader';
import GalleryGrid, { GalleryItem } from '@/app/components/gallery/GalleryGrid';
import GalleryCTA from '@/app/components/gallery/GalleryCTA';
import { getWordPressGalleryItems } from '@/lib/wordpress/gallery';
import { wpClient } from '@/lib/wordpress/client';
import { GET_BUNGALOWS } from '@/lib/wordpress/queries';
import type { GetBungalowsResponse } from '@/lib/wordpress/types';

export const revalidate = 3600; // ISR: Revalidate once per hour

export const metadata: Metadata = {
  title: 'Resort Photo Gallery | Europe Enchanted Koh Rong',
  description:
    'Browse photos of Europe Enchanted Resort on Koh Rong Island, Cambodia. View our beachfront bungalows, private pool, tropical dining, and crystal-clear ocean views.',
  openGraph: {
    title: 'Resort Photo Gallery | Europe Enchanted Koh Rong',
    description:
      'Browse photos of Europe Enchanted Resort on Koh Rong Island, Cambodia. Beachfront wooden bungalows, turquoise waters, and tropical serenity.',
    url: 'https://europeenchantedkohrong.com/gallery',
    images: ['/images/resort-4.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Resort Photo Gallery | Europe Enchanted Koh Rong',
    description:
      'Browse photos of Europe Enchanted Resort on Koh Rong Island, Cambodia.',
    images: ['/images/resort-4.jpg'],
  },
};

const categoryLabelMap: Record<string, string> = {
  bungalows: 'Bungalows',
  beach: 'Beach & Ocean',
  dining: 'Dining & Leisure',
  activities: 'Island Life',
};

export default async function GalleryPage() {
  const wpGalleryNodes = await getWordPressGalleryItems();
  let dynamicItems: GalleryItem[] = [];

  // 1. If WordPress custom post type `galleryItems` has items, prioritize them
  if (wpGalleryNodes.length > 0) {
    dynamicItems = wpGalleryNodes
      .filter((item) => Boolean(item.featuredImage?.node?.sourceUrl))
      .map((item) => {
        const catKey = (item.galleryFields?.category?.toLowerCase() || 'bungalows') as GalleryItem['category'];
        const validCategory = ['bungalows', 'beach', 'dining', 'activities'].includes(catKey)
          ? catKey
          : 'bungalows';

        const spanChoice = item.galleryFields?.span as GalleryItem['span'] | undefined;
        const validSpan = ['tall', 'wide', 'normal'].includes(spanChoice || '') ? spanChoice : 'normal';

        return {
          id: item.id,
          src: item.featuredImage!.node.sourceUrl,
          alt: item.featuredImage!.node.altText || item.title,
          title: item.title,
          category: validCategory,
          categoryLabel: categoryLabelMap[validCategory] || 'Resort',
          span: validSpan,
        };
      });
  } else {
    // 2. Fallback: Pull images from Bungalows CPT if Gallery CPT is empty
    try {
      const data = await wpClient.request<GetBungalowsResponse>(GET_BUNGALOWS);
      const bungalows = data.bungalows?.nodes ?? [];

      bungalows.forEach((bungalow) => {
        if (bungalow.featuredImage?.node?.sourceUrl) {
          dynamicItems.push({
            id: `wp-b-${bungalow.id}-featured`,
            src: bungalow.featuredImage.node.sourceUrl,
            alt: bungalow.featuredImage.node.altText || bungalow.title,
            title: bungalow.title,
            category: 'bungalows',
            categoryLabel: 'Bungalows',
            span: 'tall',
          });
        }

        if (bungalow.bungalowFields?.galleryImage1?.node?.sourceUrl) {
          dynamicItems.push({
            id: `wp-b-${bungalow.id}-g1`,
            src: bungalow.bungalowFields.galleryImage1.node.sourceUrl,
            alt: `${bungalow.title} Gallery View`,
            title: `${bungalow.title} Interior`,
            category: 'bungalows',
            categoryLabel: 'Bungalows',
            span: 'normal',
          });
        }
      });
    } catch (err) {
      console.error('Error fetching fallback bungalow images:', err);
    }
  }

  return (
    <main className="min-h-screen bg-[#f8f9fc] flex flex-col">
      {/* Hero Header */}
      <GalleryHeader />

      {/* Main Gallery Grid with Category Filters & Lightbox */}
      <GalleryGrid dynamicItems={dynamicItems} />

      {/* Booking & Experience CTA */}
      <GalleryCTA />
    </main>
  );
}
