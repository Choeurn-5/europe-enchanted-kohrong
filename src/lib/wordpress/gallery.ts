// src/lib/wordpress/gallery.ts
import { wpClient } from './client'
import { GET_GALLERY_ITEMS } from './queries'
import type { GetGalleryItemsResponse, GalleryItemNode } from './types'

export async function getWordPressGalleryItems(): Promise<GalleryItemNode[]> {
  try {
    const data = await wpClient.request<GetGalleryItemsResponse>(GET_GALLERY_ITEMS)
    return data.galleryItems?.nodes ?? []
  } catch (error) {
    // When the custom post type is not yet created in WordPress, fail gracefully
    console.warn('Gallery items not found or not yet registered in WordPress GraphQL:', error)
    return []
  }
}
