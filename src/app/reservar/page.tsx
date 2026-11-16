import type { Metadata } from 'next'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { getBreadcrumbJsonLd } from '@/lib/jsonld'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Reservar | Programas en el Río San Pedro',
  description:
    'Reserva tu programa en el Fundo Los Huapes: cabalgatas, balsa por el Río San Pedro y asado acampado. Grupos de 5 a 10 personas, temporada octubre a mayo. Región de Los Ríos, Chile.',
  keywords: [
    'reservar cabalgata Los Ríos',
    'reserva balsa Río San Pedro',
    'turismo rural sur de Chile reservas',
  ],
  alternates: { canonical: 'https://www.loshuapes.cl/reservar' },
  openGraph: {
    url: 'https://www.loshuapes.cl/reservar',
    title: 'Reservar | Fundo Los Huapes',
    description:
      'Elige uno de los cuatro programas del Fundo Los Huapes y envía tu consulta de reserva. Grupos de 5 a 10 personas, temporada octubre a mayo.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Reservar en Fundo Los Huapes' }],
  },
}

// ---------------------------------------------------------------------------
// Programas data
// ---------------------------------------------------------------------------

interface ProgramaReserva {
  numero: string
  nombre: string
  descripcion: string
  precio: string
  duracion: string
  edadMinima: string
  href: string
  image: string
  imageAlt: string
}

const programas: ProgramaReserva[] = [
  {
    numero: '01',
    nombre: 'Cabalgata y Picoteo',
    descripcion:
      'Cabalgata guiada por bosque nativo y potreros con picoteo de campo en el estero Huillinco.',
    precio: '$80.000',
    duracion: 'Media jornada',
    edadMinima: 'Desde 5 años',
    href: '/programas/cabalgata-picoteo#reserva',
    image: '/images/cabalgata-verano.jpg',
    imageAlt: 'Caballos pastando en potreros con flores silvestres y árboles nativos',
  },
  {
    numero: '02',
    nombre: 'Del Potrero al Río',
    descripcion:
      'Mañana a caballo por el campo y tarde navegando el Río San Pedro 15 km en balsa. Almuerzo incluido.',
    precio: '$180.000',
    duracion: 'Día completo',
    edadMinima: 'Desde 10 años',
    href: '/programas/potrero-al-rio#reserva',
    image: '/images/cabalgata-manada.jpg',
    imageAlt: 'Manada de caballos criollos en potrero con árboles nativos',
  },
  {
    numero: '03',
    nombre: 'Del Río al Potrero',
    descripcion:
      'Balsa 20 km por el tramo largo del San Pedro en la mañana y cabalgata en el campo en la tarde.',
    precio: '$180.000',
    duracion: 'Día completo',
    edadMinima: 'Desde 5 años',
    href: '/programas/rio-al-potrero#reserva',
    image: '/images/hero-rio.jpg',
    imageAlt: 'Río San Pedro con paredes de roca volcánica y cielo azul',
  },
  {
    numero: '04',
    nombre: 'Travesía San Pedro',
    descripcion:
      '2 días con balsa, pesca con mosca, asado acampado, noche en el campo y cabalgata al día siguiente.',
    precio: '$280.000',
    duracion: '2 días · 1 noche',
    edadMinima: 'Desde 10 años',
    href: '/programas/travesia-san-pedro#reserva',
    image: '/images/entorno-aereo.jpg',
    imageAlt: 'Vista aérea del Río San Pedro serpenteando por el valle verde',
  },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ReservarPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: 'Inicio', item: 'https://www.loshuapes.cl' },
          { name: 'Reservar', item: 'https://www.loshuapes.cl/reservar' },
        ])}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-forest text-cream overflow-hidden"
        aria-labelledby="hero-reservar-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/hero-rio.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest/85" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <Badge variant="highlight" className="mb-6">
            Reservas
          </Badge>
          <h1
            id="hero-reservar-heading"
            className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl max-w-2xl"
          >
            Reserva tu programa
          </h1>
          <p className="mt-6 font-body text-lg text-cream/80 max-w-xl leading-relaxed">
            Elige uno de los cuatro programas y completa el formulario de reserva. Te
            contactamos en menos de 24 horas para confirmar disponibilidad y detalles.
          </p>
          <p className="mt-4 font-ui text-sm text-cream/60">
            Temporada: octubre a mayo · Grupos de 5 a 10 personas
          </p>
        </div>
      </section>

      {/* ── Tarjetas de programas ────────────────────────────────────────── */}
      <section
        id="programas"
        className="py-16 lg:py-24 bg-cream"
        aria-labelledby="programas-reservar-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            id="programas-reservar-heading"
            className="font-display text-3xl font-bold text-forest lg:text-4xl mb-10"
          >
            ¿Qué programa quieres reservar?
          </h2>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:gap-10">
            {programas.map((programa) => (
              <article
                key={programa.numero}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Photo */}
                <div className="relative h-48 lg:h-56 overflow-hidden">
                  <Image
                    src={programa.image}
                    alt={programa.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-forest/20" aria-hidden="true" />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <p className="font-ui text-xs tracking-widest uppercase text-muted mb-2">
                    Programa {programa.numero}
                  </p>
                  <h3 className="font-display text-2xl font-bold text-forest mb-3">
                    {programa.nombre}
                  </h3>
                  <p className="font-body text-dark/70 text-base leading-relaxed mb-6 flex-1">
                    {programa.descripcion}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-ui">
                    <span className="text-muted">{programa.duracion}</span>
                    <span className="text-muted" aria-hidden="true">·</span>
                    <span className="text-muted">{programa.edadMinima}</span>
                    <span className="ml-auto text-ember font-semibold text-lg">
                      {programa.precio}
                      <span className="text-muted text-xs font-normal ml-1">/ persona</span>
                    </span>
                  </div>

                  <Button href={programa.href} variant="primary" size="md" className="w-full">
                    Reservar este programa
                  </Button>
                </div>
              </article>
            ))}
          </div>

          <p className="mt-8 font-ui text-sm text-muted">
            <strong className="text-dark font-semibold">Asado acampado (add-on):</strong>{' '}
            se puede agregar a cualquier programa por $40.000 por persona adicionales.
          </p>
        </div>
      </section>

      {/* ── Contacto directo ─────────────────────────────────────────────── */}
      <section
        id="contacto"
        className="py-16 lg:py-24 bg-forest text-cream"
        aria-labelledby="contacto-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="contacto-heading" className="font-display text-3xl font-bold lg:text-4xl">
            ¿Prefieres hablar directamente?
          </h2>
          <p className="mt-5 font-body text-base text-cream/80 max-w-lg mx-auto leading-relaxed">
            Escríbenos por WhatsApp o correo y te ayudamos a elegir el programa, coordinar
            fechas y resolver cualquier duda.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {/* TODO: confirmar número real */}
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center font-ui font-medium tracking-wide rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 bg-ember text-cream border-2 border-ember hover:bg-transparent hover:text-cream px-8 py-4 text-lg"
            >
              Escribir por WhatsApp
            </a>
            <a
              href="mailto:reservas@loshuapes.cl"
              className="inline-flex items-center justify-center font-ui font-medium tracking-wide rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 bg-transparent text-cream border-2 border-cream/40 hover:border-cream hover:bg-cream/10 px-8 py-4 text-lg"
            >
              reservas@loshuapes.cl
            </a>
          </div>
          <p className="mt-8 font-ui text-xs text-cream/50">
            Respondemos en menos de 24 horas hábiles.
          </p>
        </div>
      </section>
    </>
  )
}
