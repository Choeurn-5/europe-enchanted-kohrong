// src/lib/wordpress/client.ts
import { GraphQLClient } from 'graphql-request'

const endpoint =
  process.env.WORDPRESS_GRAPHQL_URL ||
  'https://cms.europeenchantedkohrong.com/graphql'

export const wpClient = new GraphQLClient(endpoint)