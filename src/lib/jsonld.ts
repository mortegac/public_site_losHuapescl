/**
 * JSON-LD structured data helpers for Fundo Los Huapes.
 * Each function returns a plain object ready to be serialized
 * and injected via the <JsonLd> component.
 */

const BASE_URL = 'https://www.loshuapes.cl'
const BUSINESS_ID = `${BASE_URL}/#business`
const CONTACT_PHONE = '+56912345678' // TODO: confirmar número real
const CONTACT_EMAIL = 'reservas@loshuapes.cl'

// ---------------------------------------------------------------------------
// Season dates (octubre–mayo), derived from the current year at build time
// ---------------------------------------------------------------------------

interface SeasonDates {
  validFrom: string
  validThrough: string
}

/**
 * Returns the current season's date range. The season starts on October 1st
 * of the current year if we are in October or later; otherwise it belongs to
 * the season that started the previous year. It always ends on May 31st.
 */
function computeSeasonDates(now: Date): SeasonDates {
  const month = now.getMonth() + 1 // 1-12
  const startYear = month >= 10 ? now.getFullYear() : now.getFullYear() - 1

  return {
    validFrom: `${startYear}-10-01`,
    validThrough: `${startYear + 1}-05-31`,
  }
}

// Evaluado una sola vez en build (sitio estático): evita `new Date()` en render,
// que Next 16 con Cache Components rechaza al prerenderizar.
const SEASON_DATES: SeasonDates = computeSeasonDates(new Date())

function getSeasonDates(): SeasonDates {
  return SEASON_DATES
}

// ---------------------------------------------------------------------------
// Shared sub-objects
// ---------------------------------------------------------------------------

const tourOperator = {
  '@type': 'Organization',
  name: 'Fundo Los Huapes',
  url: BASE_URL,
  '@id': BUSINESS_ID,
} as const

const fundoAddress = {
  '@type': 'PostalAddress',
  addressRegion: 'Los Ríos',
  addressLocality: 'San Pedro',
  addressCountry: 'CL',
} as const

// TODO: reemplazar por GPS 5 decimales del portón del fundo
const fundoGeo = {
  '@type': 'GeoCoordinates',
  latitude: '-39.8',
  longitude: '-72.9',
} as const

const fundoPlace = {
  '@type': 'Place',
  name: 'Fundo Los Huapes',
  address: fundoAddress,
  geo: fundoGeo,
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
  const season = getSeasonDates()

  return {
    '@context': 'https://schema.org',
    '@type': ['SportsActivityLocation', 'TouristAttraction'],
    '@id': BUSINESS_ID,
    name: 'Fundo Los Huapes',
    description:
      'Cabalgatas, bajadas en balsa y asado acampado en el Río San Pedro, Región de Los Ríos, Chile.',
    url: BASE_URL,
    image: `${BASE_URL}/og-image.jpg`,
    telephone: CONTACT_PHONE,
    email: CONTACT_EMAIL,
    priceRange: '$$$',
    address: fundoAddress,
    geo: fundoGeo,
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      validFrom: season.validFrom,
      validThrough: season.validThrough,
      // TODO: confirmar horario de atención real
      opens: '09:00',
      closes: '18:00',
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
  const season = getSeasonDates()

  return {
    '@context': 'https://schema.org',
    '@type': 'TouristTrip',
    '@id': `${program.url}#trip`,
    name: program.name,
    description: program.description,
    url: program.url,
    image: program.image ?? `${BASE_URL}/og-image.jpg`,
    ...(program.duration ? { duration: program.duration } : {}),
    tourOperator,
    location: fundoPlace,
    offers: {
      '@type': 'Offer',
      price: program.price,
      priceCurrency: program.priceCurrency ?? 'CLP',
      url: program.url,
      availability: 'https://schema.org/InStock',
      validFrom: season.validFrom,
      priceValidUntil: season.validThrough,
      seller: tourOperator,
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

// ---------------------------------------------------------------------------
// WebSite — homepage
// ---------------------------------------------------------------------------

export function getWebSiteJsonLd(): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': `${BASE_URL}/#website`,
    name: 'Fundo Los Huapes',
    url: BASE_URL,
    inLanguage: 'es-CL',
    publisher: {
      '@id': BUSINESS_ID,
    },
  }
}

// ---------------------------------------------------------------------------
// ItemList — /programas listing page
// ---------------------------------------------------------------------------

export interface ItemListEntry {
  name: string
  url: string
}

export function getItemListJsonLd(items: ItemListEntry[]): Record<string, unknown> {
  return {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    itemListElement: items.map((entry, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: entry.name,
      url: entry.url,
    })),
  }
}
