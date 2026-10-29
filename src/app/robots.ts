import type { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/studio/'],
      },
      {
        userAgent: ['GPTBot', 'ClaudeBot', 'PerplexityBot', 'anthropic-ai'],
        allow: '/',
      },
    ],
    sitemap: 'https://loshuapes.cl/sitemap.xml',
    host: 'https://loshuapes.cl',
  }
}
