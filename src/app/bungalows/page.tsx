// src/app/bungalows/page.tsx
import type { Metadata } from 'next'
import { wpClient } from '@/lib/wordpress/client'
import { GET_BUNGALOWS } from '@/lib/wordpress/queries'
import BungalowsGrid from '@/app/components/BungalowsGrid'
import type { GetBungalowsResponse } from '@/lib/wordpress/types'

import BungalowsHero from '@/app/components/bungalows/BungalowsHero'
import PropertyOverview from '@/app/components/bungalows/PropertyOverview'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Our Bungalows | Europe Enchanted Koh Rong',
  description: 'Explore our beachfront and garden bungalows on Koh Toch Beach, Koh Rong. Private balconies, modern amenities, and breathtaking island views.',
  openGraph: {
    title: 'Our Bungalows | Europe Enchanted Koh Rong',
    description: 'Explore our beachfront and garden bungalows on Koh Toch Beach, Koh Rong.',
    images: ['/images/common/resort-4.jpg'],
  },
}

export default async function BungalowsPage() {
  let bungalows: GetBungalowsResponse['bungalows']['nodes'] = []
  try {
    const data = await wpClient.request<GetBungalowsResponse>(GET_BUNGALOWS)
    bungalows = data.bungalows?.nodes ?? []
  } catch (error) {
    console.error('Failed to fetch bungalows:', error)
  }

  // Extract a few featured room images from the API for the background slideshow
  const heroSlides = bungalows
    .filter((b) => Boolean(b.featuredImage?.node?.sourceUrl))
    .slice(0, 6)
    .map((b) => ({
      url: b.featuredImage!.node!.sourceUrl,
      roomTitle: b.title,
    }))

  return (
    <main className="min-h-screen bg-[#f8f9fc]">
      {/* Dynamic Background Image Slideshow Hero */}
      <BungalowsHero slides={heroSlides} />

      {/* Wave transition divider */}
      <div className="relative -mt-1 bg-transparent overflow-hidden">
        <svg
          viewBox="0 0 1440 54"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="block w-full h-8 sm:h-12 text-[#f8f9fc] pointer-events-none"
        >
          <path
            d="M0 54L60 45C120 36 240 18 360 13C480 9 600 18 720 25C840 32 960 37 1080 36C1200 34 1320 25 1380 20L1440 16V54H1380C1320 54 1200 54 1080 54C960 54 840 54 720 54C600 54 480 54 360 54C240 54 120 54 60 54H0Z"
            fill="currentColor"
          />
        </svg>
      </div>

      {/* Cards grid & Property Highlights */}
      <section className="max-w-7xl mx-auto px-4 pt-8 pb-24">
        <BungalowsGrid bungalows={bungalows} />
        <PropertyOverview />
      </section>
    </main>
  )
}