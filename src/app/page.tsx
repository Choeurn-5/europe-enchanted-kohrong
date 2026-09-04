// src/app/page.tsx
import Hero from '@/app/components/home/Hero';
import IntroStrip from '@/app/components/home/IntroStrip';
import FeaturedBungalows from '@/app/components/home/FeaturedBungalows';
import AmenitiesStrip from '@/app/components/home/AmenitiesStrip';
import DayInTheLife from '@/app/components/home/DayInTheLife';
import GalleryPreview from '@/app/components/home/GalleryPreview';
import Testimonials from '@/app/components/home/Testimonials';
import LocationMap from '@/app/components/home/LocationMap';
import FinalCTA from '@/app/components/home/FinalCTA';

export default function Home() {
  return (
    <main>
      <Hero />
      <IntroStrip />
      <FeaturedBungalows />
      <AmenitiesStrip />
      <DayInTheLife />
      <GalleryPreview />
      <Testimonials />
      <LocationMap />
      <FinalCTA />
      
    </main>
  );
}