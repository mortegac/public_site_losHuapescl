import type { MetadataRoute } from 'next'

// Nota: se omite `host` a propósito — Next.js lo emite con protocolo
// (https://…), formato inválido para la directiva Host. El dominio canónico
// (https://www.loshuapes.cl) se declara vía canonical/metadataBase y sitemap.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/', '/studio/'],
      },
      {
        userAgent: [
          'GPTBot',
          'OAI-SearchBot',
          'ChatGPT-User',
          'ClaudeBot',
          'anthropic-ai',
          'PerplexityBot',
          'GoogleOther',
        ],
        allow: '/',
      },
    ],
    sitemap: 'https://www.loshuapes.cl/sitemap.xml',
  }
}
