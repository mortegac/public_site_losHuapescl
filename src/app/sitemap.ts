import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.loshuapes.cl'
  const lastModified = new Date('2026-11-12')

  return [
    { url: baseUrl, lastModified },
    { url: `${baseUrl}/programas`, lastModified },
    { url: `${baseUrl}/programas/cabalgata-picoteo`, lastModified },
    { url: `${baseUrl}/programas/potrero-al-rio`, lastModified },
    { url: `${baseUrl}/programas/rio-al-potrero`, lastModified },
    { url: `${baseUrl}/programas/travesia-san-pedro`, lastModified },
    { url: `${baseUrl}/gastronomia`, lastModified },
    { url: `${baseUrl}/el-entorno`, lastModified },
    { url: `${baseUrl}/para-agencias`, lastModified },
    { url: `${baseUrl}/reservar`, lastModified },
    { url: `${baseUrl}/preguntas-frecuentes`, lastModified },
    { url: `${baseUrl}/privacidad`, lastModified },
    { url: `${baseUrl}/terminos`, lastModified },
    { url: `${baseUrl}/blog`, lastModified },
    { url: `${baseUrl}/blog/bajada-en-balsa-rio-san-pedro`, lastModified },
    { url: `${baseUrl}/blog/cabalgatas-bosque-nativo-los-rios`, lastModified },
    { url: `${baseUrl}/blog/asado-acampado-gastronomia-de-campo`, lastModified },
  ]
}
