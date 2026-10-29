import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { getBreadcrumbJsonLd } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: 'Programas — 4 Experiencias en el Campo y el Río',
  description:
    'Cuatro programas de turismo rural en el Fundo Los Huapes: desde cabalgata media jornada hasta travesía 2 días con balsa, asado y noche en el campo. Río San Pedro, Región de Los Ríos.',
  alternates: {
    canonical: 'https://loshuapes.cl/programas',
  },
  openGraph: {
    title: 'Programas | Fundo Los Huapes',
    description:
      'Cuatro experiencias en el Río San Pedro y el campo. Media jornada a 2 días completos. Grupos de 5 a 10 personas.',
    url: 'https://loshuapes.cl/programas',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Programas Fundo Los Huapes' }],
  },
}

interface ProgramCard {
  number: string
  href: string
  name: string
  shortDesc: string
  price: string
  duration: string
  minAge: string
  badges: string[]
  image: string
  imageAlt: string
}

const programs: ProgramCard[] = [
  {
    number: '01',
    href: '/programas/cabalgata-picoteo',
    name: 'Cabalgata y Picoteo',
    shortDesc:
      'Cabalgata guiada por bosque nativo y potreros con picoteo de campo en el estero Huillinco.',
    price: '$80.000',
    duration: 'Media jornada',
    minAge: 'Desde 5 años',
    badges: ['Media jornada', 'Mañana o tarde'],
    image: '/images/cabalgata-verano.jpg',
    imageAlt: 'Caballos pastando en potreros con flores silvestres y árboles nativos',
  },
  {
    number: '02',
    href: '/programas/potrero-al-rio',
    name: 'Del Potrero al Río',
    shortDesc:
      'Mañana a caballo por el campo y tarde navegando el Río San Pedro 15 km en balsa. Almuerzo incluido.',
    price: '$180.000',
    duration: 'Día completo',
    minAge: 'Desde 10 años',
    badges: ['Día completo', 'Balsa 15 km'],
    image: '/images/cabalgata-manada.jpg',
    imageAlt: 'Manada de caballos criollos en potrero con árboles nativos',
  },
  {
    number: '03',
    href: '/programas/rio-al-potrero',
    name: 'Del Río al Potrero',
    shortDesc:
      'Balsa 20 km por el tramo largo del San Pedro en la mañana y cabalgata en el campo en la tarde.',
    price: '$180.000',
    duration: 'Día completo',
    minAge: 'Desde 5 años',
    badges: ['Día completo', 'Balsa 20 km', 'Familias'],
    image: '/images/hero-rio.jpg',
    imageAlt: 'Río San Pedro con paredes de roca volcánica y cielo azul',
  },
  {
    number: '04',
    href: '/programas/travesia-san-pedro',
    name: 'Travesía San Pedro',
    shortDesc:
      '2 días con balsa, pesca con mosca, asado acampado, noche en el campo y cabalgata al día siguiente.',
    price: '$280.000',
    duration: '2 días · 1 noche',
    minAge: 'Desde 10 años',
    badges: ['2 días · 1 noche', 'Todo incluido'],
    image: '/images/entorno-aereo.jpg',
    imageAlt: 'Vista aérea del Río San Pedro serpenteando por el valle verde',
  },
]

export default function ProgramasPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'Inicio', item: 'https://loshuapes.cl' },
    { name: 'Programas', item: 'https://loshuapes.cl/programas' },
  ])

  return (
    <>
      <JsonLd data={breadcrumb} />

      {/* Hero */}
      <section className="relative bg-forest text-cream overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/entorno-aereo.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest/80" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-ui text-xs tracking-widest uppercase text-ember mb-4">
            Fundo Los Huapes
          </p>
          <h1 className="font-display text-4xl font-bold leading-tight mb-6 lg:text-6xl">
            Cuatro formas de vivir
            <br />
            el campo y el río
          </h1>
          <p className="font-body text-lg text-cream/80 max-w-2xl lg:text-xl">
            Desde una media jornada a caballo hasta dos días completos en el Río San Pedro.
            Grupos de 5 a 10 personas. Temporada octubre a mayo.
          </p>
        </div>
      </section>

      {/* Program grid */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-2 xl:gap-10">
            {programs.map((program) => (
              <article
                key={program.number}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                {/* Photo */}
                <div className="relative h-56 lg:h-64 overflow-hidden">
                  <Image
                    src={program.image}
                    alt={program.imageAlt}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    sizes="(max-width: 640px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-forest/20" aria-hidden="true" />
                  {/* Number watermark */}
                  <div className="absolute inset-0 flex items-end p-6" aria-hidden="true">
                    <span className="font-display text-6xl font-bold text-cream/20 select-none">
                      {program.number}
                    </span>
                  </div>
                  {/* Badges overlay */}
                  <div className="absolute top-4 left-4 flex flex-wrap gap-2">
                    {program.badges.map((badge) => (
                      <Badge key={badge} variant="highlight">
                        {badge}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col p-6 lg:p-8">
                  <p className="font-ui text-xs tracking-widest uppercase text-muted mb-2">
                    Programa {program.number}
                  </p>
                  <h2 className="font-display text-2xl font-bold text-forest mb-3 lg:text-3xl">
                    {program.name}
                  </h2>
                  <p className="font-body text-dark/70 text-base leading-relaxed mb-6 flex-1">
                    {program.shortDesc}
                  </p>

                  {/* Meta */}
                  <div className="flex flex-wrap items-center gap-4 mb-6 text-sm font-ui">
                    <span className="text-muted">{program.duration}</span>
                    <span className="text-muted">·</span>
                    <span className="text-muted">{program.minAge}</span>
                    <span className="ml-auto text-ember font-semibold text-lg">
                      {program.price}
                      <span className="text-muted text-xs font-normal ml-1">/ persona</span>
                    </span>
                  </div>

                  <Button href={program.href} variant="primary" size="md" className="w-full">
                    Ver programa
                  </Button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Conditions strip */}
      <section className="py-12 bg-forest/5 border-t border-forest/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 text-center">
            <div>
              <p className="font-ui text-xs tracking-widest uppercase text-muted mb-1">Grupo</p>
              <p className="font-display text-xl font-bold text-forest">5 a 10 personas</p>
            </div>
            <div>
              <p className="font-ui text-xs tracking-widest uppercase text-muted mb-1">Temporada</p>
              <p className="font-display text-xl font-bold text-forest">Octubre — Mayo</p>
            </div>
            <div>
              <p className="font-ui text-xs tracking-widest uppercase text-muted mb-1">Ubicación</p>
              <p className="font-display text-xl font-bold text-forest">Río San Pedro, Los Ríos</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
