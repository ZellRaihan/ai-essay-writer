import { MetadataRoute } from 'next'

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || process.env.NEXT_PUBLIC_VERCEL_URL || 'http://localhost:3000'

export default function sitemap(): MetadataRoute.Sitemap {
  // Current date for lastModified
  const currentDate = new Date().toISOString();
  
  // Essay types to include in sitemap
  const essayTypes = [
    'academic', 'argumentative', 'persuasive', 'narrative', 
    'descriptive', 'analytical', 'comparative', 'research'
  ];
  
  // Create main entries
  const mainPages = [
    {
      url: siteUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${siteUrl}/#generator`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${siteUrl}/#how-it-works`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/#features`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${siteUrl}/#faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  ];
  
  // Create essay type entries
  const essayTypePages = essayTypes.map(type => ({
    url: `${siteUrl}/#generator?type=${type}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  
  return [...mainPages, ...essayTypePages];
} 