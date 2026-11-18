import type { Metadata } from 'next'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { getBreadcrumbJsonLd, getItemListJsonLd } from '@/lib/jsonld'

export const metadata: Metadata = {
  title: { absolute: 'Programas de Cabalgata y Balsa | Río San Pedro, Los Ríos' },
  description:
    '4 programas en el Fundo Los Huapes: de cabalgata media jornada a travesía 2 días con balsa por el Río San Pedro y noche en el campo. Región de Los Ríos.',
  alternates: {
    canonical: 'https://www.loshuapes.cl/programas',
  },
  openGraph: {
    title: 'Programas | Fundo Los Huapes',
    description:
      'Cuatro experiencias en el Río San Pedro y el campo. Media jornada a 2 días completos. Grupos de 5 a 10 personas.',
    url: 'https://www.loshuapes.cl/programas',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Programas Fundo Los Huapes' }],
  },
}

interface ProgramCard {
  number: string
  /** Anchor usado por los enlaces del Footer (/programas#...) */
  anchorId: string
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
    anchorId: 'media-jornada',
    href: '/programas/cabalgata-picoteo',
    name: 'Cabalgata y Picoteo',
    shortDesc:
      'Cabalgata guiada por bosque nativo y potreros con picoteo de campo en el estero Huillinco.',
    price: '$80.000',
    duration: 'Media jornada',
    minAge: 'Desde 8 años',
    badges: ['Media jornada', 'Mañana o tarde'],
    image: '/images/programa-cabalgata.jpg',
    imageAlt: 'Jinetes a caballo entre el bosque nativo del Fundo Los Huapes',
  },
  {
    number: '02',
    anchorId: 'jornada-completa',
    href: '/programas/potrero-al-rio',
    name: 'Del Potrero al Río',
    shortDesc:
      'Mañana a caballo por el campo y tarde navegando el Río San Pedro 15 km en balsa. Almuerzo incluido.',
    price: '$180.000',
    duration: 'Día completo',
    minAge: 'Desde 8 años',
    badges: ['Día completo', 'Balsa 15 km'],
    image: '/images/programa-potrero-rio.jpg',
    imageAlt: 'Ovejas junto al portón del potrero con bosque nativo al fondo',
  },
  {
    number: '03',
    anchorId: 'dia-noche',
    href: '/programas/rio-al-potrero',
    name: 'Del Río al Potrero',
    shortDesc:
      'Balsa 20 km por el tramo largo del San Pedro en la mañana y cabalgata en el campo en la tarde.',
    price: '$180.000',
    duration: 'Día completo',
    minAge: 'Desde 8 años',
    badges: ['Día completo', 'Balsa 20 km', 'Familias'],
    image: '/images/programa-rio-potrero.jpg',
    imageAlt: 'Navegando el Río San Pedro en balsa bajo el cielo azul',
  },
  {
    number: '04',
    anchorId: 'dos-dias',
    href: '/programas/travesia-san-pedro',
    name: 'Travesía San Pedro',
    shortDesc:
      '2 días con balsa, pesca con mosca, asado acampado, noche en el campo y cabalgata al día siguiente.',
    price: '$280.000',
    duration: '2 días · 1 noche',
    minAge: 'Desde 8 años',
    badges: ['2 días · 1 noche', 'Todo incluido'],
    image: '/images/programa-travesia.jpg',
    imageAlt: 'Balsa catamarán a orillas del Río San Pedro',
  },
]

export default function ProgramasPage() {
  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'Inicio', item: 'https://www.loshuapes.cl' },
    { name: 'Programas', item: 'https://www.loshuapes.cl/programas' },
  ])

  const itemList = getItemListJsonLd(
    programs.map((program) => ({
      name: program.name,
      url: `https://www.loshuapes.cl${program.href}`,
    })),
  )

  return (
    <>
      <JsonLd data={breadcrumb} />
      <JsonLd data={itemList} />

      {/* Hero */}
      <section className="relative bg-forest text-cream overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/entorno-aereo.jpg"
            alt=""
            fill
            priority
            className="object-cover object-bottom"
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

      {/* Intro — párrafo citable (GEO) */}
      <section className="bg-cream pt-16 lg:pt-24" aria-label="Cómo elegir programa">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="font-body text-[1.05rem] text-dark/70 leading-relaxed max-w-[720px]">
            En el Fundo Los Huapes combinamos tres elementos que pocas veces se encuentran
            juntos: cabalgatas por bosque nativo, bajadas en balsa por el Río San Pedro y
            gastronomía de campo preparada a la usanza tradicional. Todos los programas
            operan con grupos reducidos de 5 a 10 personas y atención directa, durante la
            temporada de octubre a mayo. Para elegir, el criterio principal es el tiempo
            disponible: si cuenta con medio día, la Cabalgata y Picoteo es la opción; con
            un día completo puede partir por el campo o por el río, según prefiera
            cabalgar en la mañana o navegar primero; y si busca la experiencia completa,
            la Travesía San Pedro suma pesca con mosca, asado acampado y una noche en el
            campo. La edad mínima es de 8 años en todos los programas.
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
                id={program.anchorId}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-forest/10 bg-white shadow-sm hover:shadow-lg transition-shadow duration-300 scroll-mt-24"
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
