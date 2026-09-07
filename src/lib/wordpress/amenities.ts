import { wpClient } from './client'
import { GET_GLOBAL_AMENITIES } from './queries'
import type { GetGlobalAmenitiesResponse } from './types'

export async function getGlobalAmenities() {
  try {
    const data = await wpClient.request<GetGlobalAmenitiesResponse>(GET_GLOBAL_AMENITIES)
    return data.globalAmenities.nodes
  } catch (error) {
    console.error('Failed to fetch global amenities:', error)
    return []
  }
}
