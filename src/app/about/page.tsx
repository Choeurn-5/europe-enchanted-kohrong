import type { Metadata } from 'next';
import AboutHero from '@/app/components/about/AboutHero';
import AboutStory from '@/app/components/about/AboutStory';
import AboutValues from '@/app/components/about/AboutValues';
import AboutExperience from '@/app/components/about/AboutExperience';
import AboutCTA from '@/app/components/about/AboutCTA';

export const metadata: Metadata = {
  title: 'About Us & Our Story | Europe Enchanted Koh Rong',
  description:
    'Discover the story of Europe Enchanted Bungalows & Resort on Koh Rong Island, Cambodia. Handcrafted wooden architecture, beachfront tranquility, and authentic Khmer hospitality.',
  openGraph: {
    title: 'About Us & Our Story | Europe Enchanted Koh Rong',
    description:
      'Discover the story of Europe Enchanted Bungalows & Resort on Koh Rong Island, Cambodia. Handcrafted wooden architecture, beachfront tranquility, and authentic Khmer hospitality.',
    url: 'https://europeenchantedkohrong.com/about',
    images: ['/images/resort-4.jpg'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'About Us & Our Story | Europe Enchanted Koh Rong',
    description:
      'Discover the story of Europe Enchanted Bungalows & Resort on Koh Rong Island, Cambodia.',
    images: ['/images/resort-4.jpg'],
  },
};

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#f8f9fc] flex flex-col">
      {/* Hero Section */}
      <AboutHero />

      {/* Story & History Section */}
      <AboutStory />

      {/* Values & Core Pillars */}
      <AboutValues />

      {/* Guest Experience Steps */}
      <AboutExperience />

      {/* Bottom CTA */}
      <AboutCTA />
    </main>
  );
}
