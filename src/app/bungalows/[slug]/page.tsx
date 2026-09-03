// src/app/bungalows/[slug]/page.tsx
import Image from 'next/image'
import { wpClient } from '@/lib/wordpress/client'
import { GET_BUNGALOW_BY_SLUG } from '@/lib/wordpress/queries'
import type { GetBungalowBySlugResponse } from '@/lib/wordpress/types'

export default async function BungalowDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params

  const data = await wpClient.request<GetBungalowBySlugResponse>(
    GET_BUNGALOW_BY_SLUG,
    { slug }
  )
  const bungalow = data.bungalow

  const {
    title,
    featuredImage,
    bungalowFields,
  } = bungalow

  const {
    subtitle,
    description,
    pricePerNight,
    maxGuests,
    bedType,
    sizeSqm,
    amenities,
    bookingUrl,
  } = bungalowFields

  return (
    <main className="max-w-4xl mx-auto px-4 py-10">
      <div className="relative w-full h-80 rounded-xl overflow-hidden bg-gray-100 mb-6">
        {featuredImage?.node?.sourceUrl && (
          <Image
            src={featuredImage.node.sourceUrl}
            alt={featuredImage.node.altText || title}
            fill
            className="object-cover"
          />
        )}
      </div>

      <h1 className="text-3xl font-bold">{title}</h1>
      {subtitle && <p className="text-gray-600 mt-1">{subtitle}</p>}

      <div className="flex gap-4 text-sm text-gray-500 mt-4">
        {maxGuests && <span>{maxGuests} guests</span>}
        {bedType && <span>{bedType}</span>}
        {sizeSqm && <span>{sizeSqm} m2</span>}
      </div>

      {pricePerNight && (
        <p className="text-2xl font-bold mt-4">${pricePerNight} / night</p>
      )}

      {description && (
        <div
          className="prose mt-6"
          dangerouslySetInnerHTML={{ __html: description }}
        />
      )}

      {amenities && amenities.length > 0 && (
        <div className="mt-6">
          <h2 className="font-semibold mb-2">Amenities</h2>
          <ul className="flex flex-wrap gap-2 text-sm">
            {amenities.map((item) => (
              <li key={item} className="bg-gray-100 rounded-full px-3 py-1">
                {item.replace(/_/g, ' ')}
              </li>
            ))}
          </ul>
        </div>
      )}

      {bookingUrl && (
        <a
          href={bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block mt-8 bg-teal-600 text-white rounded-md px-6 py-3 font-medium hover:bg-teal-700"
        >
          Book Now
        </a>
      )}
    </main>
  )
}