/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cms.europeenchantedkohrong.com',
      },
    ],
  },
}

module.exports = nextConfig