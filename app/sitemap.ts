import { BASE_URL } from '@/lib/constants'
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const routesMap = [''].map((route) => ({
    url: `${BASE_URL}${route}`,
    lastModified: new Date(),
  }))

  return routesMap
}
