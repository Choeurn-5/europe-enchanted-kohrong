// src/app/components/home/FeaturedBungalows.tsx
import { wpClient } from '@/lib/wordpress/client';
import Link from 'next/link';
import { GET_BUNGALOWS } from '@/lib/wordpress/queries';
import BungalowsGrid from '@/app/components/BungalowsGrid';
import type { GetBungalowsResponse } from '@/lib/wordpress/types';
import FeaturedBungalowsHeader from '@/app/components/home/FeaturedBungalowsHeader';

export default async function FeaturedBungalows() {
  const data = await wpClient.request<GetBungalowsResponse>(GET_BUNGALOWS);
  const featured = data.bungalows.nodes.slice(0, 3);

  return (
    <section className="bg-[#F9FAFB] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <FeaturedBungalowsHeader />

        <BungalowsGrid bungalows={featured} />

        <div className="mt-14 flex justify-center">
          <Link
            href="/bungalows"
            className="rounded-full border border-[#0C3B73]/20 px-8 py-3.5 text-xs font-semibold uppercase tracking-widest text-[#0C3B73] transition-colors duration-300 hover:border-[#0C3B73] hover:bg-[#0C3B73] hover:text-white"
          >
            View All Bungalows
          </Link>
        </div>
      </div>
    </section>
  );
}
