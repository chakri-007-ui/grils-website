import type { MetadataRoute } from 'next'
import { pages, site } from '@/lib/seo'

export default function sitemap(): MetadataRoute.Sitemap {
  return Object.keys(pages).map((path) => ({ url: `${site.url}${path === '/' ? '/' : path}` }))
}
