import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dreamaxis.co.in'
  
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin/', '/private/'], // Add any private routes here
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}

