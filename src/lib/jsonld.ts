/**
 * JSON-LD structured data helpers for Fundo Los Huapes.
 * Each function returns a plain object ready to be serialized
 * and injected via the <JsonLd> component.
 */

const BASE_URL = 'https://loshuapes.cl'

// ---------------------------------------------------------------------------
// Shared sub-objects
// ---------------------------------------------------------------------------

const tourOperator = {
  '@type': 'Organization',
  name: 'Fundo Los Huapes',
  url: BASE_URL,
} as const

const fundoAddress = {
  '@type': 'PostalAddress',
  addressRegion: 'Los Ríos',
  addressLocality: 'San Pedro',
  addressCountry: 'CL',
} as const

const fundoGeo = {
  '@type': 'GeoCoordinates',
  latitude: '-39.8',
  longitude: '-72.9',
} as const

// ---------------------------------------------------------------------------
// TouristAttraction — homepage
// ---------------------------------------------------------------------------

export function getTouristAttractionJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    '@id': `${BASE_URL}/#tourist-attraction`,
    name: 'Fundo Los Huapes',
    description:
      'Experiencias de turismo rural en el Río San Pedro: cabalgatas por bosque nativo, bajadas en balsa y asado acampado. Temporada octubre-mayo, grupos de 5 a 10 personas.',
    url: BASE_URL,
    image: `${BASE_URL}/og-image.jpg`,
    address: fundoAddress,
    geo: fundoGeo,
    touristType: ['FamilyTourist', 'AdventureTourist', 'NatureTourist'],
    availableSeason: {
      '@type': 'Schedule',
      startDate: '--10-01',
      endDate: '--05-30',
    },
    isAccessibleForFree: false,
  }
}

// ---------------------------------------------------------------------------
// LocalBusiness — SEO local
// ---------------------------------------------------------------------------

export function getLocalBusinessJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': `${BASE_URL}/#business`,
    name: 'Fundo Los Huapes',
    description:
      'Cabalgatas, bajadas en balsa y asado acampado en el Río San Pedro, Región de Los Ríos, Chile.',
    url: BASE_URL,
    image: `${BASE_URL}/og-image.jpg`,
    priceRange: '$$$',
    address: fundoAddress,
    geo: fundoGeo,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      validFrom: '2025-10-01',
      validThrough: '2026-05-30',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
    },
    currenciesAccepted: 'CLP',
    areaServed: {
      '@type': 'AdministrativeArea',
      name: 'Región de Los Ríos, Chile',
    },
  }
}

// ---------------------------------------------------------------------------
// TouristTrip + Offer — individual program pages
// ---------------------------------------------------------------------------

export interface ProgramData {
  name: string
  description: string
  url: string
  image?: string
  price: string
  priceCurrency?: string
  duration?: string
  minAge?: number
  groupMin?: number
  groupMax?: number
}

export function getTouristTripJsonLd(program: ProgramData): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    name: program.name,
    description: program.description,
    url: program.url,
    image: program.image ?? `${BASE_URL}/og-image.jpg`,
    ...(program.duration ? { duration: program.duration } : {}),
    tourOperator,
    offers: {
      '@type': 'Offer',
      price: program.price,
      priceCurrency: program.priceCurrency ?? 'CLP',
      url: program.url,
      availability: 'https://schema.org/InStock',
      validFrom: '2025-10-01',
      priceValidUntil: '2026-05-30',
    },
    ...(program.minAge
      ? {
          audience: {
            '@type': 'Audience',
            audienceType: `Desde ${program.minAge} años`,
          },
        }
      : {}),
  }
}

// ---------------------------------------------------------------------------
// FAQPage — program and general pages
// ---------------------------------------------------------------------------

export interface FaqItem {
  question: string
  answer: string
}

export function getFAQJsonLd(faqs: FaqItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  }
}

// ---------------------------------------------------------------------------
// BreadcrumbList — all pages except homepage
// ---------------------------------------------------------------------------

export interface BreadcrumbItem {
  name: string
  item?: string
}

export function getBreadcrumbJsonLd(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((crumb, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: crumb.name,
      ...(crumb.item ? { item: crumb.item } : {}),
    })),
  }
}
