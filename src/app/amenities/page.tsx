import type { Metadata } from 'next';
import AmenitiesHeader from '../components/amenities/AmenitiesHeader';
import AmenitySection from '../components/amenities/AmenitySection';
import AmenitiesIconGrid from '../components/amenities/AmenitiesIconGrid';
import AmenitiesCTA from '../components/amenities/AmenitiesCTA';
import { getGlobalAmenities } from '@/lib/wordpress/amenities';

export const metadata: Metadata = {
  title: 'Resort Amenities | Europe Enchanted Koh Rong',
  description: 'Discover the world-class amenities at Europe Enchanted Koh Rong, from our infinity pool and spa to island tours and fine dining.',
};

export default async function AmenitiesPage() {
  const globalAmenities = await getGlobalAmenities();

  return (
    <main className="flex min-h-screen flex-col bg-white">
      <AmenitiesHeader />

      <AmenitySection
        eyebrow="Leisure"
        heading="Infinity Pool"
        description="Relax by our stunning infinity pool overlooking the Gulf of Thailand. With comfortable loungers, towel service, and a poolside bar serving tropical cocktails and fresh juices, it's the perfect spot to unwind after a day of island exploration."
        details={[
          { label: 'Hours', value: '7:00 AM – 9:00 PM' },
          { label: 'Service', value: 'Poolside food & drinks' },
        ]}
        image="/amenities-pool.jpg"
        imageAlt="Infinity pool at Europe Enchanted Koh Rong"
        reverse={false}
        bg="white"
      />

      <AmenitySection
        eyebrow="Dining"
        heading="Restaurant & Bar"
        description="Savor a blend of authentic Khmer cuisine and international favorites. Our open-air restaurant features fresh, locally sourced seafood and organic ingredients, accompanied by panoramic sea views for an unforgettable dining experience."
        details={[
          { label: 'Breakfast', value: '7:00 AM – 10:30 AM' },
          { label: 'Lunch', value: '12:00 PM – 3:00 PM' },
          { label: 'Dinner', value: '6:00 PM – 10:00 PM' },
        ]}
        image="/amenities-dining.jpg"
        imageAlt="Restaurant and Bar at Europe Enchanted Koh Rong"
        reverse={true}
        bg="soft"
      />

      <AmenitySection
        eyebrow="Wellness"
        heading="Spa & Wellness"
        description="Rejuvenate your body and mind with our signature spa treatments. Combining traditional Cambodian healing techniques with natural aromatherapy, our skilled therapists will help you find deep relaxation in our tranquil wellness pavilions."
        details={[
          { label: 'Treatments', value: 'Massages, Facials, Scrubs' },
          { label: 'Booking', value: 'Advance reservation required' },
        ]}
        image="/amenities-spa.jpg"
        imageAlt="Spa and wellness treatments"
        reverse={false}
        bg="white"
      />

      <AmenitySection
        eyebrow="Adventure"
        heading="Island Tours"
        description="Discover the hidden gems of Koh Rong. We organize guided snorkeling trips, sunset kayak tours through bioluminescent waters, and jungle treks to pristine beaches. Let us arrange your perfect island adventure."
        details={[
          { label: 'Options', value: 'Snorkeling, Kayaking, Hiking' },
          { label: 'Duration', value: 'Half-day and Full-day trips' },
        ]}
        image="/amenities-tours.jpg"
        imageAlt="Island tours and activities"
        reverse={true}
        bg="soft"
      />

      <AmenitySection
        eyebrow="Connectivity"
        heading="Complimentary WiFi"
        description="Stay connected even in paradise. We offer high-speed, complimentary Wi-Fi throughout the resort, including in all bungalows, at the restaurant, and by the pool, ensuring you can share your magical moments or catch up on emails if needed."
        details={[
          { label: 'Coverage', value: 'Entire resort property' },
          { label: 'Speed', value: 'High-speed Starlink internet' },
        ]}
        image="/amenities-wifi.jpg"
        imageAlt="Fast Wi-Fi in the resort"
        reverse={false}
        bg="white"
      />

      <AmenitySection
        eyebrow="Transport"
        heading="Private Boat Transfer"
        description="Your enchanted journey begins on the water. We provide a seamless, comfortable speedboat transfer service from Sihanoukville directly to our resort pier. Our team will assist with your luggage every step of the way."
        details={[
          { label: 'Route', value: 'Sihanoukville to Resort' },
          { label: 'Duration', value: 'Approx. 45 minutes' },
        ]}
        image="/amenities-boat.jpg"
        imageAlt="Speedboat transfer to Koh Rong"
        reverse={true}
        bg="soft"
      />

      <AmenitiesIconGrid apiAmenities={globalAmenities} />
      <AmenitiesCTA />
    </main>
  );
}
