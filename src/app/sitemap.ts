import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://seawebstudio.com',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
        url: 'https://seawebstudio.com/contact',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 1,
      },
    {
      url: 'https://seawebstudio.com/cgu-legal',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
        url: 'https://seawebstudio.com/privacy-policy',
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
      },
    {
      url: 'https://seawebstudio.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.5,
    },
  ]
}