import type { Metadata, Viewport } from 'next'
import { Playfair_Display, Source_Serif_4, DM_Sans } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
})

const sourceSerif4 = Source_Serif_4({
  variable: '--font-source-serif',
  subsets: ['latin'],
  weight: ['300', '400', '600'],
  display: 'swap',
})

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://loshuapes.cl'),
  title: {
    default: 'Fundo Los Huapes',
    template: '%s | Fundo Los Huapes',
  },
  description:
    'Cabalgatas por bosque nativo, bajadas en balsa por el Río San Pedro y asado acampado en el Fundo Los Huapes. 4 programas desde media jornada hasta 2 días. Grupos de 5 a 10 personas, Región de Los Ríos, Chile.',
  keywords: [
    'cabalgatas Los Ríos',
    'cabalgatas Valdivia',
    'bajada en balsa Río San Pedro',
    'turismo rural Valdivia',
    'Fundo Los Huapes',
    'turismo aventura Los Ríos',
    'experiencias campo chileno',
    'cabalgatas bosque nativo sur Chile',
  ],
  authors: [{ name: 'Fundo Los Huapes', url: 'https://loshuapes.cl' }],
  creator: 'Fundo Los Huapes',
  publisher: 'Fundo Los Huapes',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_CL',
    url: 'https://loshuapes.cl',
    siteName: 'Fundo Los Huapes',
    title: 'Cabalgatas y Experiencias en Fundo Los Huapes | Río San Pedro, Los Ríos',
    description:
      'Cabalgatas por bosque nativo, bajadas en balsa por el Río San Pedro y asado acampado en el Fundo Los Huapes. 4 programas desde media jornada hasta 2 días. Grupos de 5 a 10 personas, Región de Los Ríos, Chile.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fundo Los Huapes — Cabalgatas y balsa en el Río San Pedro, Región de Los Ríos',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Cabalgatas y Experiencias en Fundo Los Huapes | Río San Pedro, Los Ríos',
    description:
      'Cabalgatas por bosque nativo, bajadas en balsa y asado acampado. Región de Los Ríos, Chile.',
    images: ['/og-image.jpg'],
  },
  alternates: {
    canonical: 'https://loshuapes.cl',
  },
}

export const viewport: Viewport = {
  themeColor: '#1A3428',
  width: 'device-width',
  initialScale: 1,
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="es-CL"
      className={`${playfairDisplay.variable} ${sourceSerif4.variable} ${dmSans.variable} h-full antialiased`}
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
