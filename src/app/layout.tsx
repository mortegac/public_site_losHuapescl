import type { Metadata, Viewport } from 'next'
import Script from 'next/script'
import { Playfair_Display, Open_Sans } from 'next/font/google'
import { Navbar } from '@/components/layout/Navbar'
import { Footer } from '@/components/layout/Footer'
import './globals.css'

const playfairDisplay = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '700', '900'],
  display: 'swap',
})

// Open Sans: Regular, SemiBold, Bold y ExtraBold/Black, con itálicas
const openSans = Open_Sans({
  variable: '--font-open-sans',
  subsets: ['latin'],
  weight: ['400', '600', '700', '800'],
  style: ['normal', 'italic'],
  display: 'swap',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://www.loshuapes.cl'),
  title: {
    default: 'Fundo Los Huapes',
    template: '%s | Fundo Los Huapes',
  },
  description:
    'Cabalgatas por bosque nativo, balsa por el Río San Pedro y asado acampado. 4 programas, grupos de 5 a 10 personas. Región de Los Ríos, Chile.',
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
  authors: [{ name: 'Fundo Los Huapes', url: 'https://www.loshuapes.cl' }],
  creator: 'Fundo Los Huapes',
  publisher: 'Fundo Los Huapes',
  // robots se define una sola vez aquí (index,follow global). La página 404
  // usa src/app/not-found.tsx con robots noindex, que sobreescribe esta
  // definición a nivel de ruta — así no hay directivas duplicadas/conflictivas.
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
    url: 'https://www.loshuapes.cl',
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
    canonical: 'https://www.loshuapes.cl',
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
      className={`${playfairDisplay.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {/* Google Tag Manager — snippet oficial, global en todas las páginas.
            GA4 y demás etiquetas se configuran dentro del contenedor en GTM. */}
        <Script id="gtm" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-NCKN4PLB');`}
        </Script>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NCKN4PLB"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Navbar />
        <main className="flex-1 pt-16 lg:pt-20">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
