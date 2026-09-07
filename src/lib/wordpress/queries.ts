// src/lib/wordpress/queries.ts
import { gql } from 'graphql-request'

export const GET_BUNGALOWS = gql`
  query GetBungalows {
    bungalows {
      nodes {
        id
        title
        slug
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        bungalowFields {
          subtitle
          shortDescription
          pricePerNight
          maxGuests
          bedType
          sizeSqm
          galleryImage1 {
            node {
              sourceUrl
            }
          }
          amenities
          bookingUrl
        }
      }
    }
  }
`

export const GET_BUNGALOW_BY_SLUG = gql`
  query GetBungalowBySlug($slug: ID!) {
    bungalow(id: $slug, idType: SLUG) {
      id
      title
      slug
      featuredImage {
        node {
          sourceUrl
          altText
        }
      }
      bungalowFields {
        subtitle
        shortDescription
        description
        pricePerNight
        maxGuests
        bedType
        sizeSqm
        galleryImage1 {
          node { sourceUrl }
        }
        galleryImage2 {
          node { sourceUrl }
        }
        galleryImage3 {
          node { sourceUrl }
        }
        galleryImage4 {
          node { sourceUrl }
        }
        galleryImage5 {
          node { sourceUrl }
        }
        amenities
        bookingUrl
      }
    }
  }
`
export const GET_GLOBAL_AMENITIES = gql` 
  query GetGlobalAmenities {
    globalAmenities {
      nodes {
        id
        title
        amenityFields {
          iconName
          subtitle
        }
      }
    }
  }
`

export const GET_GALLERY_ITEMS = gql`
  query GetGalleryItems {
    galleryItems(first: 100) {
      nodes {
        id
        title
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        galleryFields {
          category
          span
          caption
        }
      }
    }
  }
`


