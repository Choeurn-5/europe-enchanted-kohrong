// src/lib/wordpress/types.ts
export interface Bungalow {
  id: string
  title: string
  slug: string
  featuredImage: {
    node: {
      sourceUrl: string
      altText: string
    }
  } | null
  bungalowFields: {
    subtitle: string | null
    shortDescription: string | null
    pricePerNight: number | null
    maxGuests: number | null
    bedType: string | null
    sizeSqm: number | null
    galleryImage1: {
      node: {
        sourceUrl: string
      }
    } | null
    amenities: string[] | null
    bookingUrl: string | null
  }
}

export interface GetBungalowBySlugResponse {
  bungalow: Bungalow & {
    bungalowFields: Bungalow['bungalowFields'] & {
      description: string | null
      galleryImage2: Bungalow['bungalowFields']['galleryImage1']
      galleryImage3: Bungalow['bungalowFields']['galleryImage1']
      galleryImage4: Bungalow['bungalowFields']['galleryImage1']
      galleryImage5: Bungalow['bungalowFields']['galleryImage1']
    }
  }
}

export interface GetBungalowsResponse {
  bungalows: {
    nodes: Bungalow[]
  }
}