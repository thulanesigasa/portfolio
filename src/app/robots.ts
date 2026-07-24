import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/private/', '/dashboard/', '/og'],
    },
    sitemap: 'https://ts-industries.co.za/sitemap.xml',
  }
}
