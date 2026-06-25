import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/thanks'],
    },
    sitemap: 'https://noirtalentco.com/sitemap.xml',
    host: 'https://noirtalentco.com',
  }
}
