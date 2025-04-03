import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const deploymentUrl = process.env.VERCEL_URL 
    ? `https://${process.env.VERCEL_URL}` 
    : "https://ai-essay-writer.vercel.app"
  
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
      url: deploymentUrl,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 1.0,
    },
    {
      url: `${deploymentUrl}/#generator`,
      lastModified: currentDate,
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    {
      url: `${deploymentUrl}/#how-it-works`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${deploymentUrl}/#features`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${deploymentUrl}/#faq`,
      lastModified: currentDate,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    }
  ];
  
  // Create essay type entries
  const essayTypePages = essayTypes.map(type => ({
    url: `${deploymentUrl}/#generator?type=${type}`,
    lastModified: currentDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));
  
  return [...mainPages, ...essayTypePages];
} 