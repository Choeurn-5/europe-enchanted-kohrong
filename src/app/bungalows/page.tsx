// src/app/bungalows/page.tsx
import { wpClient } from '@/lib/wordpress/client'
import { GET_BUNGALOWS } from '@/lib/wordpress/queries'
import BungalowsGrid from '@/app/components/BungalowsGrid'
import type { GetBungalowsResponse } from '@/lib/wordpress/types'

export default async function BungalowsPage() {
  const data = await wpClient.request<GetBungalowsResponse>(GET_BUNGALOWS)
  const bungalows = data.bungalows.nodes

  return (
    <main className="pt-32 pb-24 bg-white">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-[#00A3C4] text-xs font-semibold tracking-[0.3em] uppercase">
            Accommodations
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-[#0C3B73] mt-3">
            Our Bungalows
          </h1>
          <p className="text-gray-500 mt-4">
            Each bungalow is thoughtfully designed for comfort, privacy, and an
            unmistakable island calm.
          </p>
        </div>

        <BungalowsGrid bungalows={bungalows} />
      </div>
    </main>
  )
}