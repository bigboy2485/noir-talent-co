import type { MetadataRoute } from 'next'

const BASE = 'https://noirtalentco.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: '', priority: 1.0 },
    { path: '/apply', priority: 0.9 },
    { path: '/services', priority: 0.8 },
    { path: '/how-it-works', priority: 0.7 },
    { path: '/about', priority: 0.7 },
    { path: '/case-studies', priority: 0.6 },
    { path: '/faq', priority: 0.6 },
    { path: '/privacy', priority: 0.3 },
    { path: '/terms', priority: 0.3 },
  ]

  return routes.map(({ path, priority }) => ({
    url: `${BASE}${path}`,
    changeFrequency: 'monthly',
    priority,
  }))
}
