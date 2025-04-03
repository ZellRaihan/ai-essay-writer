import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  const deploymentUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : "https://ai-essay-writer.vercel.app"
  
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/'],
    },
    sitemap: `${deploymentUrl}/sitemap.xml`,
  }
} 