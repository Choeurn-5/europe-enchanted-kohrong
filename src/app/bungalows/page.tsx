// src/app/bungalows/page.tsx
import type { Metadata } from 'next'
import { wpClient } from '@/lib/wordpress/client'
import { GET_BUNGALOWS } from '@/lib/wordpress/queries'
import BungalowsGrid from '@/app/components/BungalowsGrid'
import type { GetBungalowsResponse } from '@/lib/wordpress/types'

export const revalidate = 3600

export const metadata: Metadata = {
  title: 'Our Bungalows | Europe Enchanted Koh Rong',
  description: 'Explore our beachfront and garden bungalows on Koh Toch Beach, Koh Rong. Private balconies, modern amenities, and breathtaking island views.',
  openGraph: {
    title: 'Our Bungalows | Europe Enchanted Koh Rong',
    description: 'Explore our beachfront and garden bungalows on Koh Toch Beach, Koh Rong.',
    images: ['/images/resort-4.jpg'],
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

  return (
    <main className="min-h-screen bg-[#f8f9fc]">
      {/* Hero banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-[#0C3B73] via-[#0e4a8a] to-[#00A3C4] pt-36 pb-20 px-4">
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-white/5 pointer-events-none" />
        <div className="absolute -bottom-20 -left-20 w-72 h-72 rounded-full bg-white/5 pointer-events-none" />

        <div className="relative max-w-3xl mx-auto text-center">
          <span className="inline-block text-[#7dd8ed] text-xs font-bold tracking-[0.35em] uppercase mb-4">
            Accommodations
          </span>
          <h1 className="text-5xl md:text-6xl font-serif font-bold text-white leading-tight">
            Our Bungalows
          </h1>
          <p className="text-white/70 text-lg mt-5 max-w-xl mx-auto leading-relaxed">
            Each bungalow is thoughtfully designed for comfort, privacy, and an
            unmistakable island calm — your sanctuary awaits.
          </p>
        </div>
      </section>

      {/* Wave divider */}
      <div className="bg-gradient-to-br from-[#0C3B73] via-[#0e4a8a] to-[#00A3C4] -mb-1">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="block w-full">
          <path d="M0 60L60 50C120 40 240 20 360 15C480 10 600 20 720 28C840 36 960 42 1080 40C1200 38 1320 28 1380 23L1440 18V60H1380C1320 60 1200 60 1080 60C960 60 840 60 720 60C600 60 480 60 360 60C240 60 120 60 60 60H0Z" fill="#f8f9fc"/>
        </svg>
      </div>

      {/* Cards grid */}
      <section className="max-w-7xl mx-auto px-4 pt-12 pb-24">
        <BungalowsGrid bungalows={bungalows} />
      </section>
    </main>
  )
}