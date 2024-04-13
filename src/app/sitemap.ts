import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${process.env.NEXT_PUBLIC_URL}`,
      changeFrequency: 'weekly',
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/about`,
      changeFrequency: 'weekly',
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/events`,
      changeFrequency: 'weekly',
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/projects`,
      changeFrequency: 'weekly',
    },
    {
      url: `${process.env.NEXT_PUBLIC_URL}/trident`,
      changeFrequency: 'weekly',
    },
  ]
}
