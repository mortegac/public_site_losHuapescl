import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { getFAQJsonLd, getBreadcrumbJsonLd } from '@/lib/jsonld'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Gastronomía Campestre | Picoteo y Asado Acampado',
  description:
    'Picoteo de campo con arrollado huaso, queso fresco y pan amasado en el estero Huillinco. Asado acampado con cordero y estomaguillo al palo, preparado por De la Hoguera. Fundo Los Huapes, Región de Los Ríos.',
  keywords: [
    'asado acampado sur de Chile',
    'picoteo campo chileno',
    'gastronomía tradicional Los Ríos',
    'cordero al palo campo chileno',
    'De la Hoguera asado',
  ],
  alternates: { canonical: 'https://loshuapes.cl/gastronomia' },
  openGraph: {
    url: 'https://loshuapes.cl/gastronomia',
    title: 'Gastronomía Campestre | Picoteo y Asado Acampado | Fundo Los Huapes',
    description:
      'Picoteo de campo con arrollado huaso, queso fresco y pan amasado en el estero Huillinco. Asado acampado con cordero y estomaguillo al palo, preparado por De la Hoguera.',
    images: [{ url: '/og-gastronomia.jpg', width: 1200, height: 630, alt: 'Asado acampado en Fundo Los Huapes' }],
  },
}

// ---------------------------------------------------------------------------
// JSON-LD data
// ---------------------------------------------------------------------------

function getFoodEstablishmentJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'FoodEstablishment',
    name: 'Fundo Los Huapes — Gastronomía de Campo',
    url: 'https://loshuapes.cl/gastronomia',
    description:
      'Gastronomía tradicional chilena preparada con fuego de leña en el Fundo Los Huapes. Picoteo campestre y asado acampado a cargo de De la Hoguera.',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Los Ríos',
      addressLocality: 'San Pedro',
      addressCountry: 'CL',
    },
    servesCuisine: 'Comida tradicional chilena',
    hasMenu: {
      '@type': 'Menu',
      name: 'Menú del Asado Acampado',
      hasMenuSection: [
        {
          '@type': 'MenuSection',
          name: 'Picoteo en el Estero',
          hasMenuItem: [
            { '@type': 'MenuItem', name: 'Arrollado huaso', description: 'Receta tradicional del campo chileno' },
            { '@type': 'MenuItem', name: 'Queso fresco', description: 'Con aceite de oliva y ají verde' },
            { '@type': 'MenuItem', name: 'Pernil', description: 'Cocido y servido en láminas' },
            { '@type': 'MenuItem', name: 'Tortillas y pan amasado', description: 'Hechos en el campo' },
          ],
        },
        {
          '@type': 'MenuSection',
          name: 'Asado Acampado — Plato de Fondo',
          hasMenuItem: [
            { '@type': 'MenuItem', name: 'Estomaguillo de vacuno al palo', description: 'Aproximadamente 500 g por persona' },
            { '@type': 'MenuItem', name: 'Cordero al palo', description: 'Aproximadamente 500 g por persona' },
          ],
        },
      ],
    },
    offers: {
      '@type': 'Offer',
      name: 'Asado Acampado',
      price: '40000',
      priceCurrency: 'CLP',
      description: 'Disponible como add-on para cualquier programa. Precio por persona.',
    },
  }
}

const faqs = [
  {
    question: '¿El picoteo está incluido en todos los programas?',
    answer:
      'Sí. El picoteo en el estero Huillinco está incluido en todos los programas con cabalgata (Programas 01, 02, 03 y 04).',
  },
  {
    question: '¿El asado acampado es obligatorio?',
    answer:
      'No. Es opcional y se agrega a cualquier programa por $40.000 por persona adicionales.',
  },
  {
    question: '¿Qué es el estomaguillo?',
    answer:
      'El estomaguillo es el estómago de vacuno relleno y cocido al palo, una preparación tradicional del campo chileno austral. Es la estrella del asado acampado junto al cordero.',
  },
  {
    question: '¿Hay opciones para personas que no comen carne?',
    answer:
      'Se recomienda consultar al momento de la reserva. De la Hoguera puede adaptar el menú con previo aviso.',
  },
]

// ---------------------------------------------------------------------------
// Picoteo menu data
// ---------------------------------------------------------------------------

const picoteoItems = [
  { name: 'Arrollado huaso', desc: 'Receta tradicional del campo chileno' },
  { name: 'Queso fresco', desc: 'Con aceite de oliva y ají verde' },
  { name: 'Pernil', desc: 'Cocido y servido en láminas' },
  { name: 'Tortillas y pan amasado', desc: 'Hechos en el campo' },
]

// ---------------------------------------------------------------------------
// Asado acampado menu data
// ---------------------------------------------------------------------------

const asadoMenu = [
  {
    section: 'Para Recibir',
    items: ['Sangría y cervezas', 'Selección de vinos blancos y tintos', 'Jugos naturales de temporada', 'Bebidas normales, light y mineral'],
  },
  {
    section: 'Picoteo',
    items: ['Choripán', 'Crudo estilo valdiviano', 'Empanaditas de pino y de queso', 'Pan amasado, sopaipillas, pebre y chancho en piedra'],
  },
  {
    section: 'Plato de Fondo al Palo',
    items: ['Estomaguillo de vacuno y cordero (~500 g por persona)'],
  },
  {
    section: 'Acompañamientos',
    items: ['Ensalada chilena', 'Papas asadas al merquén con mantequilla', 'Mix de lechuga, albahaca y crutones', 'Pan amasado y pebre'],
  },
  {
    section: 'Postre y Sobremesa',
    items: ['Mote con huesillos o leche asada', 'Café de grano'],
  },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function GastronomiaPage() {
  return (
    <>
      {/* JSON-LD */}
      <JsonLd data={getFoodEstablishmentJsonLd()} />
      <JsonLd data={getFAQJsonLd(faqs)} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: 'Inicio', item: 'https://loshuapes.cl' },
          { name: 'Gastronomía', item: 'https://loshuapes.cl/gastronomia' },
        ])}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-forest text-cream overflow-hidden"
        aria-labelledby="hero-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/gastronomia-spread.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest/85" />
        </div>
        {/* Decorative diagonal */}
        <div
          className="absolute inset-0 opacity-10 pointer-events-none"
          aria-hidden="true"
          style={{
            background:
              'repeating-linear-gradient(45deg, transparent, transparent 40px, rgba(184,148,74,0.4) 40px, rgba(184,148,74,0.4) 41px)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <Badge variant="highlight" className="mb-6">
            Gastronomía de Campo
          </Badge>
          <h1
            id="hero-heading"
            className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl max-w-2xl"
          >
            Comida que sabe a campo
          </h1>
          <p className="mt-6 font-body text-lg text-cream/80 max-w-xl leading-relaxed">
            Recetas tradicionales chilenas preparadas con fuego de leña y tiempo. Desde el
            picoteo en el estero hasta el asado acampado bajo las estrellas.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/reservar" variant="primary" size="lg">
              Agregar gastronomía a mi programa
            </Button>
            <Button href="/programas" variant="ghost" size="lg" className="text-cream border-cream/40 hover:border-cream hover:bg-cream/10">
              Ver programas
            </Button>
          </div>
        </div>
      </section>

      {/* ── Galería gastronómica ────────────────────────────────────────── */}
      <section className="py-12 bg-dark" aria-label="Galería de gastronomía del Fundo Los Huapes">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {([
              { src: '/images/gastronomia-spread.jpg', alt: 'Picoteo tradicional chileno con queso, pan amasado, sopaipillas y pebre', cls: 'md:col-span-2' },
              { src: '/images/gastronomia-alpalo.jpg', alt: 'Carne al palo sobre brasas en el campo', cls: '' },
              { src: '/images/gastronomia-fogon.jpg', alt: 'Olla de hierro sobre fogón junto al río', cls: '' },
              { src: '/images/gastronomia-tripode.jpg', alt: 'Trípode con olla sobre fuego en el bosque nativo', cls: '' },
              { src: '/images/gastronomia-ensaladas.jpg', alt: 'Tablas de ensalada fresca en mesa rústica de campo', cls: 'md:col-span-2' },
              { src: '/images/balsa-cocina-rio.jpg', alt: 'Cocinando junto al río durante el recorrido en balsa', cls: '' },
            ] as const).map((img, i) => (
              <div key={i} className={`relative aspect-[4/3] overflow-hidden rounded-lg ${img.cls}`}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 768px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Sección 1: Picoteo en el Estero ──────────────────────────────── */}
      <section
        id="picoteo"
        className="py-20 lg:py-28 bg-cream"
        aria-labelledby="picoteo-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-center">
            {/* Text */}
            <div>
              <Badge variant="season" className="mb-5">
                Incluido en todos los programas
              </Badge>
              <h2
                id="picoteo-heading"
                className="font-display text-3xl font-bold text-forest lg:text-4xl"
              >
                A caballo hasta el estero
              </h2>
              <p className="mt-5 font-body text-base text-dark/80 leading-relaxed">
                Cada cabalgata va en dos etapas por bosque nativo y potreros. A mitad de
                camino, un alto en el estero Huillinco para descansar y compartir un picoteo
                de campo.
              </p>
              {/* Schedule badges */}
              <div className="mt-6 flex flex-wrap gap-3">
                <span className="font-ui text-sm text-muted border border-forest/20 rounded-full px-4 py-1.5">
                  Turno mañana: 10:30 – 14:30
                </span>
                <span className="font-ui text-sm text-muted border border-forest/20 rounded-full px-4 py-1.5">
                  Turno tarde: 15:30 – 19:30
                </span>
              </div>
            </div>

            {/* Menu card */}
            <div className="bg-forest/5 border border-forest/10 rounded-2xl overflow-hidden">
              <div className="bg-forest px-6 py-4">
                <h3 className="font-ui text-xs font-semibold uppercase tracking-widest text-gold">
                  Menú del Picoteo
                </h3>
              </div>
              <ul className="divide-y divide-forest/10" role="list">
                {picoteoItems.map((item) => (
                  <li key={item.name} className="px-6 py-5 flex gap-4 items-start">
                    <span className="mt-0.5 flex-shrink-0 w-2 h-2 rounded-full bg-ember" aria-hidden="true" />
                    <div>
                      <p className="font-ui font-semibold text-forest text-sm">{item.name}</p>
                      <p className="font-body text-sm text-muted mt-0.5">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="px-6 py-4 bg-gold/10 border-t border-forest/10">
                <p className="font-ui text-sm text-dark/70">
                  <span className="font-semibold text-dark">Para tomar:</span> Cervezas, jugos
                  naturales, bebidas y agua mineral
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Sección 2: El Asado Acampado ──────────────────────────────────── */}
      <section
        id="asado-acampado"
        className="py-20 lg:py-28 bg-forest text-cream"
        aria-labelledby="asado-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="max-w-2xl">
            <Badge variant="highlight" className="mb-5">
              Add-on disponible
            </Badge>
            <h2
              id="asado-heading"
              className="font-display text-3xl font-bold lg:text-4xl"
            >
              Cordero y estomaguillo al palo
            </h2>
            <p className="mt-5 font-body text-base text-cream/80 leading-relaxed">
              El cierre perfecto para cualquiera de los programas: fuego de leña, carne lenta
              y una mesa larga para compartir. El asado acampado lo prepara De la Hoguera.
            </p>
            <div className="mt-6 inline-flex items-center gap-3 bg-ember/20 border border-ember/40 rounded-full px-5 py-2.5">
              <span className="font-ui text-sm text-cream/60">Precio por persona:</span>
              <span className="font-display text-xl font-bold text-gold">$40.000</span>
              <span className="font-ui text-xs text-cream/50">adicional a cualquier programa</span>
            </div>
          </div>

          {/* Menu grid */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {asadoMenu.map((course) => (
              <div
                key={course.section}
                className="bg-cream/5 border border-cream/10 rounded-xl p-6 hover:bg-cream/10 transition-colors"
              >
                <h3 className="font-ui text-xs font-semibold uppercase tracking-widest text-gold mb-4">
                  {course.section}
                </h3>
                <ul className="space-y-2" role="list">
                  {course.items.map((item) => (
                    <li key={item} className="flex items-start gap-2.5">
                      <span className="mt-1.5 flex-shrink-0 w-1.5 h-1.5 rounded-full bg-ember" aria-hidden="true" />
                      <span className="font-body text-sm text-cream/80 leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button href="/reservar" variant="primary" size="lg">
              Agregar asado acampado a mi reserva
            </Button>
          </div>
        </div>
      </section>

      {/* ── Sección 3: De la Hoguera ──────────────────────────────────────── */}
      <section
        id="de-la-hoguera"
        className="py-20 lg:py-28 bg-cream"
        aria-labelledby="hoguera-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            {/* Text */}
            <div>
              <Badge variant="program" className="mb-5">
                Aliado gastronómico
              </Badge>
              <h2
                id="hoguera-heading"
                className="font-display text-3xl font-bold text-forest lg:text-4xl"
              >
                Nuestra cocina tiene autor
              </h2>
              <p className="mt-5 font-body text-base text-dark/80 leading-relaxed">
                El asado acampado lo prepara{' '}
                <strong className="font-semibold text-forest">De la Hoguera</strong>, el mismo
                sello detrás de{' '}
                <em>Nuestra antigua cocina chilena: el sabor de lo nuestro</em>, los libros de
                Mauricio Acevedo Guillibrand que rescata las comidas típicas del campo chileno,
                desde el Altiplano hasta Tierra del Fuego.
              </p>
              <div className="mt-8">
                <a
                  href="https://delahoguera.cl/libro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-ui text-sm font-medium text-ember hover:text-forest underline underline-offset-4 transition-colors"
                >
                  Conocer el libro →
                </a>
              </div>
            </div>

            {/* 3 pillars */}
            <ol className="space-y-6" aria-label="Tres pilares de De la Hoguera">
              {[
                {
                  num: '01',
                  title: 'Recetas rescatadas',
                  desc: 'Preparaciones tradicionales documentadas y probadas en el campo.',
                },
                {
                  num: '02',
                  title: 'Cocina a la antigua',
                  desc: 'Fuego de leña, carne al palo y pan amasado: las técnicas del libro.',
                },
                {
                  num: '03',
                  title: 'Un recuerdo para llevar',
                  desc: 'El libro está disponible para quienes quieran llevarse el sabor a casa.',
                },
              ].map((pillar) => (
                <li key={pillar.num} className="flex gap-6 items-start">
                  <span
                    className="flex-shrink-0 font-display text-3xl font-bold text-gold/40 leading-none select-none"
                    aria-hidden="true"
                  >
                    {pillar.num}
                  </span>
                  <div>
                    <h3 className="font-ui font-semibold text-forest text-base">{pillar.title}</h3>
                    <p className="mt-1 font-body text-sm text-muted leading-relaxed">{pillar.desc}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* ── Sección 4: Almuerzo Campestre ────────────────────────────────── */}
      <section
        id="almuerzo"
        className="py-20 lg:py-28 bg-forest/5 border-y border-forest/10"
        aria-labelledby="almuerzo-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <Badge variant="season" className="mb-5">
              Incluido en Programas 02, 03 y 04
            </Badge>
            <h2
              id="almuerzo-heading"
              className="font-display text-3xl font-bold text-forest lg:text-4xl"
            >
              Al mediodía, la mesa del campo
            </h2>
            <p className="mt-5 font-body text-base text-dark/70 leading-relaxed">
              Los programas de día completo y la Travesía San Pedro incluyen almuerzo
              campestre. Un menú de campo preparado con ingredientes de temporada.
            </p>
          </div>

          <div className="mt-12 max-w-lg mx-auto bg-cream border border-forest/15 rounded-2xl overflow-hidden shadow-sm">
            <div className="bg-forest px-6 py-4">
              <h3 className="font-ui text-xs font-semibold uppercase tracking-widest text-gold">
                Menú del Almuerzo
              </h3>
            </div>
            <ul className="divide-y divide-forest/10" role="list">
              {['Empanada', 'Mix de parrilla: tapabarriga, pollo y longaniza', 'Ensalada chilena', 'Papas cocidas', 'Postre: frutas de la estación'].map(
                (item) => (
                  <li key={item} className="px-6 py-4 flex items-center gap-3">
                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-gold" aria-hidden="true" />
                    <span className="font-body text-sm text-dark/80">{item}</span>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section
        id="preguntas"
        className="py-20 lg:py-28 bg-cream"
        aria-labelledby="faq-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              id="faq-heading"
              className="font-display text-2xl font-bold text-forest lg:text-3xl mb-10"
            >
              Preguntas frecuentes
            </h2>
            <dl className="space-y-8">
              {faqs.map((faq) => (
                <div key={faq.question} className="border-b border-forest/10 pb-8 last:border-0">
                  <dt className="font-ui font-semibold text-forest text-base">{faq.question}</dt>
                  <dd className="mt-3 font-body text-sm text-dark/70 leading-relaxed">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── CTA Final ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-ember text-cream" aria-label="Llamada a la acción">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold lg:text-4xl">
            Agrega gastronomía a tu programa
          </h2>
          <p className="mt-5 font-body text-base text-cream/80 max-w-lg mx-auto leading-relaxed">
            El picoteo está incluido. El asado acampado se suma a cualquier programa por
            $40.000 por persona. Disponible para grupos de 5 a 10 personas.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/reservar" variant="secondary" size="lg" className="border-cream text-cream hover:bg-cream hover:text-ember">
              Hacer una reserva
            </Button>
            <Button href="/programas" variant="ghost" size="lg" className="border-cream/40 text-cream hover:border-cream hover:bg-cream/10">
              Ver todos los programas
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
