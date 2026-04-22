import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [],
  },
  async redirects() {
    return [
      // Results page was restructured into /case-studies. Keep any inbound
      // bookmarks or external links working.
      { source: '/results', destination: '/case-studies', permanent: true },
    ]
  },
}

export default nextConfig
