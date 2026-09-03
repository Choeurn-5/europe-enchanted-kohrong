// src/lib/wordpress/client.ts
import { GraphQLClient } from 'graphql-request'

const endpoint = process.env.WORDPRESS_GRAPHQL_URL

if (!endpoint) {
  throw new Error('WORDPRESS_GRAPHQL_URL is not defined in your .env.local file')
}

export const wpClient = new GraphQLClient(endpoint)