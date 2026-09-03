// src/app/components/BungalowCard.tsx
import Image from 'next/image'
import Link from 'next/link'
import type { Bungalow } from '@/lib/wordpress/types'

export default function BungalowCard({ bungalow }: { bungalow: Bungalow }) {
  const { title, slug, featuredImage, bungalowFields } = bungalow
  const { subtitle, pricePerNight, maxGuests, sizeSqm, bookingUrl } = bungalowFields

  const imageUrl = featuredImage?.node?.sourceUrl

  return (
    <div className="group rounded-2xl overflow-hidden shadow-md hover:shadow-2xl border border-gray-100 transition-all duration-500 hover:-translate-y-2 bg-white">
      <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
        {imageUrl ? (
          <Image
            src={imageUrl}
            alt={featuredImage?.node?.altText || title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="flex items-center justify-center h-full text-gray-400 text-sm">
            No image
          </div>
        )}

        {pricePerNight && (
          <span className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-[#0C3B73] text-xs font-bold px-3 py-1.5 rounded-full shadow-md">
            ${pricePerNight} / night
          </span>
        )}
      </div>

      <div className="p-5">
        <h3 className="text-lg font-serif font-bold text-[#0C3B73]">{title}</h3>
        {subtitle && <p className="text-sm text-gray-500 mt-1">{subtitle}</p>}

        <div className="flex gap-4 text-xs text-gray-500 mt-3 uppercase tracking-wide">
          {maxGuests && <span>{maxGuests} Guests</span>}
          {sizeSqm && <span>{sizeSqm} m²</span>}
        </div>

        <div className="flex gap-2 mt-5">
          <Link
            href={`/bungalows/${slug}`}
            className="flex-1 text-center border border-[#0C3B73]/20 text-[#0C3B73] rounded-full py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#0C3B73] hover:text-white hover:border-[#0C3B73] transition-colors duration-300"
          >
            View Details
          </Link>
          {bookingUrl && (
            <a
              href={bookingUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 text-center bg-[#00A3C4] text-white rounded-full py-2.5 text-xs font-semibold uppercase tracking-wider hover:bg-[#0C3B73] transition-colors duration-300"
            >
              Book Now
            </a>
          )}
        </div>
      </div>
    </div>
  )
}