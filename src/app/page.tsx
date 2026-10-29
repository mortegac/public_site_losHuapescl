import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import {
  Waves,
  Flame,
  Users,
  BadgeDollarSign,
  Map,
  Calendar,
  Star,
  ArrowUpRight,
  Compass,
  Moon,
  Fish,
  Utensils,
} from 'lucide-react'
import JsonLd from '@/components/JsonLd'
import { HeroAnimated } from '@/components/HeroAnimated'
import { RevealOnScroll } from '@/components/RevealOnScroll'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { getTouristAttractionJsonLd, getLocalBusinessJsonLd } from '@/lib/jsonld'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Cabalgatas y Experiencias en Fundo Los Huapes | Río San Pedro, Los Ríos',
  description:
    'Cabalgatas por bosque nativo, bajadas en balsa por el Río San Pedro y asado acampado en el Fundo Los Huapes. 4 programas desde media jornada hasta 2 días. Grupos de 5 a 10 personas, Región de Los Ríos, Chile.',
  alternates: {
    canonical: 'https://loshuapes.cl',
  },
  openGraph: {
    title: 'Cabalgatas y Experiencias en Fundo Los Huapes | Río San Pedro, Los Ríos',
    description:
      'Cabalgatas por bosque nativo, bajadas en balsa por el Río San Pedro y asado acampado en el Fundo Los Huapes. 4 programas desde media jornada hasta 2 días.',
    url: 'https://loshuapes.cl',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Fundo Los Huapes — Río San Pedro, Región de Los Ríos',
      },
    ],
  },
}

// ---------------------------------------------------------------------------
// Data
// ---------------------------------------------------------------------------

interface Activity {
  icon: React.ReactNode
  label: string
}

interface Program {
  num: string
  slug: string
  tag: string
  title: string
  description: string
  highlights: string[]
  price: string
  image: string
  imageAlt: string
  activities: Activity[]
}

const programs: Program[] = [
  {
    num: '01',
    slug: 'cabalgata-picoteo',
    tag: 'Media jornada',
    title: 'Cabalgata y Picoteo',
    description:
      'Cabalgata en dos etapas con picoteo en el estero; asado acampado opcional.',
    highlights: ['Mañana o tarde', 'Asado opcional', 'Desde 5 años'],
    price: '$80.000',
    image: '/images/cabalgata-bosque.jpg',
    imageAlt: 'Caballos en el bosque nativo del Fundo Los Huapes',
    activities: [
      { icon: <Compass size={13} strokeWidth={1.5} aria-hidden="true" />, label: 'Cabalgata' },
      { icon: <Utensils size={13} strokeWidth={1.5} aria-hidden="true" />, label: 'Picoteo' },
      { icon: <Flame size={13} strokeWidth={1.5} aria-hidden="true" />, label: 'Asado' },
    ],
  },
  {
    num: '02',
    slug: 'potrero-al-rio',
    tag: 'Día completo',
    title: 'Del Potrero al Río',
    description:
      'Cabalgata por la mañana y bajada en balsa por la tarde hasta Antilhue.',
    highlights: ['Cabalgata mañana', 'Balsa 15 km', 'Desde 10 años'],
    price: '$180.000',
    image: '/images/cabalgata-verano.jpg',
    imageAlt: 'Caballos en potreros verdes con flores silvestres del Fundo Los Huapes',
    activities: [
      { icon: <Compass size={13} strokeWidth={1.5} aria-hidden="true" />, label: 'Cabalgata' },
      { icon: <Waves size={13} strokeWidth={1.5} aria-hidden="true" />, label: 'Balsa 15 km' },
      { icon: <Utensils size={13} strokeWidth={1.5} aria-hidden="true" />, label: 'Picoteo' },
    ],
  },
  {
    num: '03',
    slug: 'rio-al-potrero',
    tag: 'Día completo',
    title: 'Del Río al Potrero',
    description:
      'Bajada en balsa por la mañana, picoteo en el río y cabalgata por la tarde.',
    highlights: ['Balsa 20 km', 'Cabalgata tarde', 'Desde 5 años'],
    price: '$180.000',
    image: '/images/balsa-personas.jpg',
    imageAlt: 'Guía y turista en balsa por el Río San Pedro, Los Ríos',
    activities: [
      { icon: <Waves size={13} strokeWidth={1.5} aria-hidden="true" />, label: 'Balsa 20 km' },
      { icon: <Utensils size={13} strokeWidth={1.5} aria-hidden="true" />, label: 'Picoteo' },
      { icon: <Compass size={13} strokeWidth={1.5} aria-hidden="true" />, label: 'Cabalgata' },
    ],
  },
  {
    num: '04',
    slug: 'travesia-san-pedro',
    tag: '2 días · 1 noche',
    title: 'Travesía San Pedro',
    description:
      'Primer día completo en el río con pesca. Segundo día de cabalgata y labores de campo.',
    highlights: ['Noche en el campo', 'Pesca con mosca', 'Todo incluido'],
    price: '$280.000',
    image: '/images/balsa-grupo.jpg',
    imageAlt: 'Grupo de pescadores junto al fogón a orillas del Río San Pedro',
    activities: [
      { icon: <Moon size={13} strokeWidth={1.5} aria-hidden="true" />, label: 'Noche campo' },
      { icon: <Fish size={13} strokeWidth={1.5} aria-hidden="true" />, label: 'Pesca mosca' },
      { icon: <Waves size={13} strokeWidth={1.5} aria-hidden="true" />, label: 'Río' },
    ],
  },
]

interface ExperienceFeature {
  icon: React.ReactNode
  title: string
  description: string
}

const experienceFeatures: ExperienceFeature[] = [
  {
    icon: <Waves size={22} strokeWidth={1.5} aria-hidden="true" />,
    title: 'Bajada en balsa',
    description: 'Tramos de 15 y 20 km por el río San Pedro, con guía.',
  },
  {
    icon: <Compass size={22} strokeWidth={1.5} aria-hidden="true" />,
    title: 'Cabalgata guiada',
    description: 'Dos etapas por bosque y potreros, con alto en el estero.',
  },
  {
    icon: <Flame size={22} strokeWidth={1.5} aria-hidden="true" />,
    title: 'Asado acampado',
    description: 'Cordero y estomaguillo al palo, con picoteo y postre.',
  },
  {
    icon: <Users size={22} strokeWidth={1.5} aria-hidden="true" />,
    title: 'Grupos reducidos',
    description: 'Entre 5 y 10 personas, para una atención cercana.',
  },
]

interface GalleryItem {
  alt: string
  caption: string
  image: string
  gridClass: string
}

const galleryItems: GalleryItem[] = [
  {
    alt: 'Sendero entre el bosque nativo valdiviano del Fundo Los Huapes con vista al río',
    caption: 'Bosque nativo',
    image: '/images/entorno-bosque.jpg',
    gridClass: 'md:row-span-2',
  },
  {
    alt: 'Ciervos pastando en los campos del Fundo Los Huapes, Región de Los Ríos',
    caption: 'Ciervos',
    image: '/images/entorno-ciervos.jpg',
    gridClass: '',
  },
  {
    alt: 'Copihues, la flor nacional de Chile, en el bosque nativo del fundo',
    caption: 'Copihues',
    image: '/images/entorno-copihues.jpg',
    gridClass: '',
  },
  {
    alt: 'Perros Gran Pirineo en el bosque nativo con rayos de sol filtrados entre los árboles',
    caption: 'Gran Pirineo',
    image: '/images/entorno-pirineo.jpg',
    gridClass: '',
  },
  {
    alt: 'Ovejas con crías en los potreros del Fundo Los Huapes con bosque nativo al fondo',
    caption: 'Ovejas',
    image: '/images/entorno-ovejas.jpg',
    gridClass: '',
  },
  {
    alt: 'Flora nativa en floración en los campos de la Región de Los Ríos',
    caption: 'Flora nativa',
    image: '/images/entorno-flores.jpg',
    gridClass: '',
  },
]

interface MenuItem {
  name: string
  description: string
}

const menuItems: MenuItem[] = [
  { name: 'Arrollado huaso', description: 'Receta tradicional del campo chileno' },
  { name: 'Queso fresco', description: 'Con aceite de oliva y ají verde' },
  { name: 'Pernil', description: 'Cocido y servido en láminas' },
  { name: 'Pan amasado', description: 'Hecho en el campo' },
]

interface AgencyBenefit {
  icon: React.ReactNode
  title: string
  description: string
}

const agencyBenefits: AgencyBenefit[] = [
  {
    icon: <BadgeDollarSign size={20} strokeWidth={1.5} aria-hidden="true" />,
    title: 'Tarifas para agencias',
    description: 'Condiciones preferentes a convenir con cada operador.',
  },
  {
    icon: <Map size={20} strokeWidth={1.5} aria-hidden="true" />,
    title: 'A la medida',
    description: 'Río, cabalgata y asado se ajustan al tiempo de cada grupo.',
  },
  {
    icon: <Calendar size={20} strokeWidth={1.5} aria-hidden="true" />,
    title: 'Reserva directa',
    description: 'Confirmación ágil y coordinación de horarios con su equipo.',
  },
  {
    icon: <Star size={20} strokeWidth={1.5} aria-hidden="true" />,
    title: 'Aliados locales',
    description: 'Fly Fishing Riñihue en el río y De la Hoguera en el campo.',
  },
]

// ---------------------------------------------------------------------------
// Page (Server Component)
// ---------------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      {/* Structured data */}
      <JsonLd data={getTouristAttractionJsonLd()} />
      <JsonLd data={getLocalBusinessJsonLd()} />

      {/* ── 1. HERO ─────────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[100svh] flex items-end pb-16 sm:pb-24 px-4 sm:px-8 lg:px-12 overflow-hidden"
        aria-label="Bienvenida al Fundo Los Huapes"
      >
        {/* Hero background */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/hero-rio.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest/65" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_50%_at_20%_80%,rgba(192,92,40,0.12),transparent)]" />
        </div>

        {/* Vertical scroll indicator */}
        <div
          className="absolute bottom-8 right-6 sm:right-10 hidden sm:flex flex-col items-center gap-2 text-cream/40 font-ui text-[0.65rem] tracking-[0.18em] uppercase [writing-mode:vertical-lr]"
          aria-hidden="true"
        >
          <span className="w-px h-14 bg-gradient-to-b from-cream/40 to-transparent mb-1" />
          Descubrir
        </div>

        {/* Animated content — isolated Client Component */}
        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <HeroAnimated />
        </div>
      </section>

      {/* ── 2. LA EXPERIENCIA ────────────────────────────────────────────── */}
      <section
        className="bg-cream py-20 sm:py-28 px-4 sm:px-8 lg:px-12"
        aria-labelledby="experiencia-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Experiencia image */}
            <RevealOnScroll>
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/images/experiencia-caballos.jpg"
                  alt="Caballos en los potreros del Fundo Los Huapes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {/* Ember accent square */}
                <div
                  className="absolute -bottom-5 -right-5 w-24 h-24 bg-ember -z-10"
                  aria-hidden="true"
                />
              </div>
            </RevealOnScroll>

            {/* Text + features */}
            <RevealOnScroll delay={0.15}>
              <span className="block font-ui text-xs font-semibold tracking-[0.22em] uppercase text-ember mb-5">
                La Experiencia
              </span>
              <h2
                id="experiencia-heading"
                className="font-display text-[clamp(2rem,3.5vw,3rem)] text-forest leading-[1.15] mb-6"
              >
                Del agua al caballo, del caballo al fuego
              </h2>
              <p className="font-body text-[1.05rem] text-muted leading-relaxed mb-10">
                Navegamos el río San Pedro en balsa, recorremos a caballo el bosque nativo
                y los potreros del campo, picoteamos en el estero Huillinco y cerramos el
                día con un asado al palo hecho a la usanza de siempre.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4" role="list">
                {experienceFeatures.map((feature) => (
                  <li
                    key={feature.title}
                    className="bg-[#F4EFE4] border-l-[3px] border-ember px-5 py-4 flex gap-3 items-start"
                  >
                    <span className="mt-0.5 text-forest shrink-0">{feature.icon}</span>
                    <div>
                      <strong className="block font-body font-semibold text-forest text-[0.95rem] mb-1">
                        {feature.title}
                      </strong>
                      <span className="font-body text-sm text-muted leading-snug">
                        {feature.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── 3. LOS PROGRAMAS ─────────────────────────────────────────────── */}
      <section
        className="bg-forest py-20 sm:py-28 px-4 sm:px-8 lg:px-12"
        aria-labelledby="programas-heading"
      >
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <span className="block font-ui text-xs font-semibold tracking-[0.22em] uppercase text-ember mb-5">
              Nuestros programas
            </span>
            <h2
              id="programas-heading"
              className="font-display text-[clamp(2rem,3.5vw,3rem)] text-cream mb-3 leading-tight"
            >
              Cuatro formas de vivir el río y el campo
            </h2>
            <p className="font-body text-[1.05rem] text-cream/65 max-w-xl mb-12 leading-relaxed">
              Desde una media jornada a caballo hasta dos días completos en el río. Elige
              según tu tiempo y nivel de aventura.
            </p>
          </RevealOnScroll>

          {/* 1 col → 2 col → 4 col grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-cream/10 border border-cream/10">
            {programs.map((program, index) => (
              <RevealOnScroll key={program.slug} delay={index * 0.08}>
                <Link
                  href={`/programas/${program.slug}`}
                  className="group relative flex flex-col bg-forest hover:bg-[#2D5A3D] transition-colors duration-300 h-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-inset"
                  aria-label={`Ver programa ${program.title} — ${program.price} por persona`}
                >
                  {/* Card image */}
                  <div className="relative h-48 overflow-hidden shrink-0">
                    <Image
                      src={program.image}
                      alt={program.imageAlt}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                      sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 25vw"
                    />
                    <div className="absolute inset-0 bg-forest/30" aria-hidden="true" />
                    {/* Ghost number overlay */}
                    <span
                      className="absolute bottom-2 left-4 font-display text-[4rem] font-bold text-cream/[0.18] leading-none select-none"
                      aria-hidden="true"
                    >
                      {program.num}
                    </span>
                    {/* Duration badge */}
                    <div className="absolute top-3 left-3">
                      <Badge variant="highlight" className="text-[0.65rem]">
                        {program.tag}
                      </Badge>
                    </div>
                  </div>

                  {/* Activity icons */}
                  <div className="flex gap-3 px-6 pt-4 pb-2 border-b border-cream/[0.08]">
                    {program.activities.map((activity) => (
                      <span
                        key={activity.label}
                        className="flex items-center gap-1 font-ui text-[0.68rem] text-ember/90 tracking-wide"
                      >
                        {activity.icon}
                        {activity.label}
                      </span>
                    ))}
                  </div>

                  {/* Text content */}
                  <div className="flex flex-col flex-1 p-6">
                    {/* Title */}
                    <h3 className="font-display text-[1.25rem] text-cream mb-3 leading-[1.2]">
                      {program.title}
                    </h3>

                    {/* Description */}
                    <p className="font-body text-sm text-cream/60 leading-relaxed mb-4 flex-1">
                      {program.description}
                    </p>

                    {/* Highlights */}
                    <ul className="space-y-1.5 mb-5" role="list">
                      {program.highlights.map((highlight) => (
                        <li
                          key={highlight}
                          className="flex items-center gap-2 font-ui text-xs text-cream/50 border-b border-cream/[0.06] pb-1.5"
                        >
                          <span className="text-ember font-medium shrink-0" aria-hidden="true">—</span>
                          {highlight}
                        </li>
                      ))}
                    </ul>

                    {/* Price + arrow */}
                    <div className="flex items-end justify-between">
                      <p className="font-display text-[1.5rem] font-bold text-cream">
                        {program.price}{' '}
                        <span className="font-body text-sm font-normal text-cream/50">
                          / persona
                        </span>
                      </p>
                      <ArrowUpRight
                        size={20}
                        className="text-ember transition-transform duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 shrink-0"
                        aria-hidden="true"
                      />
                    </div>
                  </div>
                </Link>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* ── 4. EL ENTORNO ────────────────────────────────────────────────── */}
      <section
        className="bg-[#EAE3D2] py-20 sm:py-28 px-4 sm:px-8 lg:px-12"
        aria-labelledby="entorno-heading"
      >
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <span className="block font-ui text-xs font-semibold tracking-[0.22em] uppercase text-[#2D5A3D] mb-5">
              El Entorno
            </span>
            <h2
              id="entorno-heading"
              className="font-display text-[clamp(1.8rem,3vw,2.6rem)] text-forest mb-4 max-w-2xl leading-tight"
            >
              Un escenario que no se encuentra en la ciudad
            </h2>
            <p className="font-body text-[1.05rem] text-muted max-w-xl mb-12 leading-relaxed">
              El Fundo Los Huapes está bordeado por el Río San Pedro y rodeado de bosque
              nativo. Ciervos, liebres, copihues y gran pirineo son parte del paisaje cotidiano.
            </p>
          </RevealOnScroll>

          {/* Asymmetric mosaic gallery — 6 photos */}
          <RevealOnScroll delay={0.1}>
            <div
              className="grid grid-cols-2 md:grid-cols-3 gap-1.5"
              style={{ gridTemplateRows: 'repeat(3, 240px)' }}
              role="list"
              aria-label="Galería del entorno del Fundo Los Huapes"
            >
              {galleryItems.map((item) => (
                <div
                  key={item.alt}
                  className={`relative overflow-hidden group ${item.gridClass}`}
                  role="listitem"
                >
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 768px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-forest/20 group-hover:bg-forest/10 transition-colors duration-300" />
                  <span className="absolute bottom-2.5 left-3 bg-forest/80 text-cream font-ui text-[0.72rem] px-2.5 py-1 tracking-wide">
                    {item.caption}
                  </span>
                </div>
              ))}
            </div>
          </RevealOnScroll>
        </div>
      </section>

      {/* ── 5. GASTRONOMÍA ──────────────────────────────────────────────── */}
      <section
        className="bg-ember py-16 sm:py-20 px-4 sm:px-8 lg:px-12"
        aria-labelledby="gastro-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text + menu */}
            <RevealOnScroll>
              <span className="block font-ui text-xs font-semibold tracking-[0.22em] uppercase text-cream/55 mb-5">
                Gastronomía de campo
              </span>
              <h2
                id="gastro-heading"
                className="font-display text-[clamp(2rem,3.5vw,3.2rem)] text-cream leading-[1.1] mb-5"
              >
                A caballo hasta el estero
              </h2>
              <p className="font-body text-[1.05rem] text-cream/85 mb-8 leading-relaxed">
                A mitad de camino, un alto en el estero Huillinco para compartir un picoteo
                de campo preparado con recetas tradicionales chilenas.
              </p>

              <ul
                className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8"
                role="list"
                aria-label="Menú del picoteo"
              >
                {menuItems.map((item) => (
                  <li key={item.name} className="border-t border-cream/25 pt-3">
                    <strong className="block font-body font-semibold text-cream text-[0.95rem] mb-1">
                      {item.name}
                    </strong>
                    <span className="font-body text-sm text-cream/70">{item.description}</span>
                  </li>
                ))}
              </ul>

              {/* Add-on asado */}
              <div className="bg-black/20 border-l-[3px] border-cream/50 px-5 py-4">
                <strong className="block font-body font-semibold text-cream mb-1">
                  + Asado acampado · $40.000 / persona
                </strong>
                <span className="font-body text-sm text-cream/75">
                  Cordero y estomaguillo al palo, bebidas libres. Preparado por{' '}
                  <em>De la Hoguera</em>.
                </span>
              </div>
            </RevealOnScroll>

            {/* Gastronomía image */}
            <RevealOnScroll delay={0.15}>
              <div className="relative overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[480px]">
                <Image
                  src="/images/gastronomia-asado.jpg"
                  alt="Asado al palo en el Fundo Los Huapes"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── 6. PARA AGENCIAS ─────────────────────────────────────────────── */}
      <section
        className="bg-cream py-20 sm:py-28 px-4 sm:px-8 lg:px-12"
        aria-labelledby="agencias-heading"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 items-start">

            {/* Title + CTA */}
            <RevealOnScroll className="lg:col-span-1">
              <span className="block font-ui text-xs font-semibold tracking-[0.22em] uppercase text-ember mb-5">
                Para agencias de turismo
              </span>
              <h2
                id="agencias-heading"
                className="font-display text-[clamp(1.8rem,3vw,2.8rem)] text-forest leading-[1.1] mb-4"
              >
                Trabajemos juntos
              </h2>
              <p className="font-body text-[1rem] text-muted mb-8 leading-relaxed">
                Una experiencia auténtica y fácil de vender, con atención directa en cada reserva.
              </p>
              <Button href="/para-agencias" variant="secondary" size="md">
                Ver propuesta comercial
              </Button>
            </RevealOnScroll>

            {/* Benefits */}
            <RevealOnScroll delay={0.12} className="lg:col-span-2">
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-8" role="list">
                {agencyBenefits.map((benefit) => (
                  <li key={benefit.title} className="flex gap-4 items-start">
                    <div
                      className="w-11 h-11 rounded-full bg-forest flex items-center justify-center text-cream shrink-0"
                      aria-hidden="true"
                    >
                      {benefit.icon}
                    </div>
                    <div>
                      <strong className="block font-body font-semibold text-forest text-[0.95rem] mb-1">
                        {benefit.title}
                      </strong>
                      <span className="font-body text-sm text-muted leading-relaxed">
                        {benefit.description}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </RevealOnScroll>

          </div>
        </div>
      </section>

      {/* ── 7. ALIADOS ───────────────────────────────────────────────────── */}
      <section
        className="bg-forest/5 border-y border-forest/10 py-14 px-4 sm:px-8 lg:px-12"
        aria-label="Aliados del Fundo Los Huapes"
      >
        <div className="max-w-7xl mx-auto">
          <RevealOnScroll>
            <p className="font-ui text-xs font-semibold tracking-[0.22em] uppercase text-muted mb-8 text-center">
              Operamos con los mejores
            </p>
          </RevealOnScroll>

          <div className="flex flex-col sm:flex-row gap-8 sm:gap-16 items-start sm:items-center justify-center">
            <RevealOnScroll delay={0.05} className="flex-1 max-w-xs text-center sm:text-left">
              <p className="font-display text-lg font-bold text-forest mb-1">
                Fly Fishing Riñihue
              </p>
              <p className="font-body text-sm text-muted">
                Guías locales del Río San Pedro con años de experiencia en el agua.
              </p>
            </RevealOnScroll>

            <div className="hidden sm:block w-px h-14 bg-forest/15 shrink-0" aria-hidden="true" />

            <RevealOnScroll delay={0.1} className="flex-1 max-w-xs text-center sm:text-left">
              <p className="font-display text-lg font-bold text-forest mb-1">
                De la Hoguera Eventos
              </p>
              <p className="font-body text-sm text-muted">
                El sello detrás de{' '}
                <em>Nuestra antigua cocina chilena: el sabor de lo nuestro</em>.
              </p>
            </RevealOnScroll>
          </div>
        </div>
      </section>

      {/* ── 8. CTA FINAL ─────────────────────────────────────────────────── */}
      <section
        className="relative min-h-[520px] flex items-center py-20 px-4 sm:px-8 lg:px-12 overflow-hidden"
        aria-label="Reservar experiencia en el Fundo Los Huapes"
      >
        {/* CTA background */}
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/fundo-casa.jpg"
            alt=""
            fill
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-forest/90 via-forest/60 to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Text */}
            <RevealOnScroll>
              <span className="block font-ui text-xs font-semibold tracking-[0.22em] uppercase text-ember mb-5">
                Los esperamos en el San Pedro
              </span>
              <h2 className="font-display text-[clamp(2rem,4vw,3.5rem)] text-cream leading-[1.05] mb-5">
                Ensille su próxima experiencia con nosotros
              </h2>
              <p className="font-body text-[1.05rem] text-cream/75 mb-3 leading-relaxed">
                Grupos de 5 a 10 personas. Atención directa y respuesta en 24 horas.
              </p>
              <p className="font-ui text-[0.78rem] tracking-[0.1em] uppercase text-cream/40">
                Temporada: 1 de octubre al 30 de mayo
              </p>
            </RevealOnScroll>

            {/* CTAs */}
            <RevealOnScroll delay={0.15} className="flex flex-col gap-4 items-start">
              <Link
                href="/reservar"
                className="inline-flex items-center font-ui text-sm font-semibold tracking-[0.08em] uppercase bg-ember text-cream px-10 py-4 transition-all duration-300 hover:bg-[#A04520] hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
              >
                Consultar disponibilidad
              </Link>
              <a
                href="https://wa.me/56900000000"
                className="inline-flex items-center gap-3 font-ui text-sm font-semibold tracking-wide bg-[#25D366] text-cream px-10 py-4 transition-all duration-200 hover:bg-[#1db954] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366] focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
                rel="noopener noreferrer"
                target="_blank"
              >
                {/* Inline WhatsApp SVG — no extra dependency */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-5 h-5 shrink-0"
                  aria-hidden="true"
                >
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.118.552 4.107 1.523 5.83L.057 23.999l6.304-1.654A11.938 11.938 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 0 1-5.007-1.371l-.359-.213-3.724.976.993-3.622-.234-.372A9.818 9.818 0 1 1 12 21.818z" />
                </svg>
                Escribir por WhatsApp
              </a>
              <small className="font-ui text-[0.78rem] text-cream/40">
                Respondemos lunes a sábado, 9–18 h
              </small>
            </RevealOnScroll>

          </div>
        </div>
      </section>
    </>
  )
}
