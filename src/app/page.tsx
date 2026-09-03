// src/app/page.tsx
import Hero from '@/app/components/home/Hero';

export default function Home() {
  return (
    <main>
      <Hero />
      {/* More sections will stack here as we build them:
          IntroStrip, FeaturedBungalows, AmenitiesStrip, etc. */}
    </main>
  );
}