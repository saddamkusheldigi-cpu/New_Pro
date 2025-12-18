import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://yourdomain.com' // TODO: Replace with your actual domain or set NEXT_PUBLIC_SITE_URL env variable
  
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

