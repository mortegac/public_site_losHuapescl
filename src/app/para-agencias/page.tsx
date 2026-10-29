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
  title: 'Para Agencias de Turismo | Programas a la Medida',
  description:
    'Programas de turismo rural y aventura para agencias en el Fundo Los Huapes, Río San Pedro. Tarifas especiales para operadores, reserva directa y personalización de itinerarios. Región de Los Ríos, Chile.',
  keywords: [
    'turismo rural agencias Chile',
    'experiencias naturaleza sur Chile agencias',
    'operadores turismo Los Ríos',
  ],
  alternates: { canonical: 'https://loshuapes.cl/para-agencias' },
  openGraph: {
    url: 'https://loshuapes.cl/para-agencias',
    title: 'Para Agencias de Turismo | Fundo Los Huapes',
    description:
      'Programas de turismo rural y aventura para agencias. Tarifas especiales, reserva directa y personalización de itinerarios. Región de Los Ríos, Chile.',
    images: [{ url: '/og-agencias.jpg', width: 1200, height: 630, alt: 'Fundo Los Huapes — para agencias de turismo' }],
  },
}

// ---------------------------------------------------------------------------
// JSON-LD data
// ---------------------------------------------------------------------------

function getLocalBusinessAgenciasJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Fundo Los Huapes',
    url: 'https://loshuapes.cl',
    description:
      'Experiencias de turismo rural en el Río San Pedro para agencias de turismo. Cabalgatas, balsa y asado acampado.',
    address: {
      '@type': 'PostalAddress',
      addressRegion: 'Los Ríos',
      addressLocality: 'San Pedro',
      addressCountry: 'CL',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: '-39.8',
      longitude: '-72.9',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Programas para Agencias',
      itemListElement: [
        {
          '@type': 'Offer',
          name: 'Programa 01 · Cabalgata y Picoteo',
          price: '80000',
          priceCurrency: 'CLP',
          description: 'Media jornada. Cabalgata + picoteo. Edad mínima 5-10 años.',
        },
        {
          '@type': 'Offer',
          name: 'Programa 02 · Del Potrero al Río',
          price: '180000',
          priceCurrency: 'CLP',
          description: 'Día completo. Cabalgata + balsa 15 km. Edad mínima 10 años.',
        },
        {
          '@type': 'Offer',
          name: 'Programa 03 · Del Río al Potrero',
          price: '180000',
          priceCurrency: 'CLP',
          description: 'Día completo. Balsa 20 km + cabalgata. Edad mínima 5 años.',
        },
        {
          '@type': 'Offer',
          name: 'Programa 04 · Travesía San Pedro',
          price: '280000',
          priceCurrency: 'CLP',
          description: '2 días / 1 noche. Balsa + pesca + asado + alojamiento. Edad mínima 10 años.',
        },
      ],
    },
  }
}

// ---------------------------------------------------------------------------
// Programas data
// ---------------------------------------------------------------------------

interface Programa {
  codigo: string
  nombre: string
  duracion: string
  actividades: string
  edadMinima: string
  precio: string
  perfil: string
}

const programas: Programa[] = [
  {
    codigo: '01',
    nombre: 'Cabalgata y Picoteo',
    duracion: 'Media jornada',
    actividades: 'Cabalgata + picoteo',
    edadMinima: '5–10 años',
    precio: '$80.000/persona',
    perfil: 'Visitantes con poco tiempo o sin experiencia en equitación',
  },
  {
    codigo: '02',
    nombre: 'Del Potrero al Río',
    duracion: 'Día completo',
    actividades: 'Cabalgata + balsa 15 km',
    edadMinima: '10 años',
    precio: '$180.000/persona',
    perfil: 'Amantes de los caballos, familias con hijos mayores de 10 años',
  },
  {
    codigo: '03',
    nombre: 'Del Río al Potrero',
    duracion: 'Día completo',
    actividades: 'Balsa 20 km + cabalgata',
    edadMinima: '5 años',
    precio: '$180.000/persona',
    perfil: 'Grupos de amigos y familias con niños que buscan aventura y naturaleza',
  },
  {
    codigo: '04',
    nombre: 'Travesía San Pedro',
    duracion: '2 días · 1 noche',
    actividades: 'Balsa + pesca + asado + alojamiento',
    edadMinima: '10 años',
    precio: '$280.000/persona',
    perfil: 'Turistas nacionales y extranjeros, pescadores, grupos que buscan desconectarse',
  },
]

// ---------------------------------------------------------------------------
// Razones para incluir Los Huapes
// ---------------------------------------------------------------------------

const razones = [
  {
    num: '01',
    titulo: 'Tarifas para agencias',
    detalle:
      'Condiciones preferentes a convenir con cada operador. Comisión por volumen de reservas.',
  },
  {
    num: '02',
    titulo: 'A la medida',
    detalle:
      'Río, cabalgata y asado se ajustan al tiempo y el perfil de cada grupo.',
  },
  {
    num: '03',
    titulo: 'Reserva directa',
    detalle:
      'Confirmación ágil y coordinación de horarios con el equipo del fundo. Respuesta en menos de 24 horas hábiles.',
  },
  {
    num: '04',
    titulo: 'Aliados locales certificados',
    detalle:
      'Fly Fishing Riñihue en el río y De la Hoguera en el campo.',
  },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ParaAgenciasPage() {
  return (
    <>
      {/* JSON-LD */}
      <JsonLd data={getLocalBusinessAgenciasJsonLd()} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: 'Inicio', item: 'https://loshuapes.cl' },
          { name: 'Para Agencias', item: 'https://loshuapes.cl/para-agencias' },
        ])}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-forest text-cream overflow-hidden"
        aria-labelledby="hero-agencias-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/cabalgata-manada.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest/80" />
        </div>
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              'linear-gradient(135deg, rgba(184,148,74,0.5) 0%, transparent 50%), radial-gradient(circle at 80% 80%, rgba(192,92,40,0.3) 0%, transparent 60%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <Badge variant="highlight" className="mb-6">
            Para Agencias de Turismo
          </Badge>
          <h1
            id="hero-agencias-heading"
            className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl max-w-2xl"
          >
            Trabajemos juntos
          </h1>
          <p className="mt-6 font-body text-lg text-cream/80 max-w-xl leading-relaxed">
            Una experiencia auténtica y fácil de vender, con atención directa en cada reserva.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#formulario" variant="primary" size="lg">
              Enviar consulta comercial
            </Button>
            <Button
              href="#programas"
              variant="ghost"
              size="lg"
              className="text-cream border-cream/40 hover:border-cream hover:bg-cream/10"
            >
              Ver programas
            </Button>
          </div>
        </div>
      </section>

      {/* ── Franja de imágenes ───────────────────────────────────────────── */}
      <section className="bg-dark" aria-hidden="true">
        <div className="grid grid-cols-3 h-48 lg:h-64">
          {([
            { src: '/images/hero-rio.jpg', alt: 'Río San Pedro con acantilados rocosos y cielo azul' },
            { src: '/images/cabalgata-verano.jpg', alt: 'Caballos pastando en potreros con flores silvestres' },
            { src: '/images/gastronomia-fogon.jpg', alt: 'Olla de hierro sobre fogón de leña junto al río' },
          ] as const).map((img, i) => (
            <div key={i} className="relative overflow-hidden">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover"
                sizes="33vw"
              />
              <div className="absolute inset-0 bg-forest/20" />
            </div>
          ))}
        </div>
      </section>

      {/* ── 4 Razones ────────────────────────────────────────────────────── */}
      <section
        id="razones"
        className="py-20 lg:py-28 bg-cream"
        aria-labelledby="razones-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <Badge variant="program" className="mb-5">
              Propuesta de valor
            </Badge>
            <h2
              id="razones-heading"
              className="font-display text-3xl font-bold text-forest lg:text-4xl"
            >
              4 razones para incluir Los Huapes en tu cartera
            </h2>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {razones.map((razon) => (
              <article
                key={razon.num}
                className="bg-forest/5 border border-forest/10 rounded-2xl p-6 hover:border-ember/30 hover:bg-ember/5 transition-all duration-200"
              >
                <span
                  className="font-display text-4xl font-bold text-gold/30 leading-none select-none"
                  aria-hidden="true"
                >
                  {razon.num}
                </span>
                <h3 className="mt-4 font-ui font-semibold text-forest text-base">
                  {razon.titulo}
                </h3>
                <p className="mt-2 font-body text-sm text-muted leading-relaxed">
                  {razon.detalle}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Tabla de Programas ────────────────────────────────────────────── */}
      <section
        id="programas"
        className="py-20 lg:py-28 bg-forest/5 border-y border-forest/10"
        aria-labelledby="programas-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-xl mb-12">
            <Badge variant="season" className="mb-5">
              Resumen comparativo
            </Badge>
            <h2
              id="programas-heading"
              className="font-display text-3xl font-bold text-forest lg:text-4xl"
            >
              Los programas para agencias
            </h2>
            <p className="mt-4 font-body text-sm text-muted">
              Temporada: 1 de octubre al 30 de mayo · Grupos de 5 a 10 personas (exclusivo)
            </p>
          </div>

          {/* Horizontal scroll container for mobile */}
          <div className="overflow-x-auto -mx-4 sm:mx-0 rounded-xl border border-forest/15 shadow-sm">
            <table
              className="w-full min-w-[700px] bg-cream"
              aria-label="Tabla comparativa de programas para agencias"
            >
              <thead className="bg-forest text-cream">
                <tr>
                  <th scope="col" className="px-5 py-4 text-left font-ui text-xs font-semibold uppercase tracking-widest text-gold">
                    Programa
                  </th>
                  <th scope="col" className="px-5 py-4 text-left font-ui text-xs font-semibold uppercase tracking-widest text-gold">
                    Duración
                  </th>
                  <th scope="col" className="px-5 py-4 text-left font-ui text-xs font-semibold uppercase tracking-widest text-gold">
                    Actividades
                  </th>
                  <th scope="col" className="px-5 py-4 text-left font-ui text-xs font-semibold uppercase tracking-widest text-gold">
                    Edad mín.
                  </th>
                  <th scope="col" className="px-5 py-4 text-left font-ui text-xs font-semibold uppercase tracking-widest text-gold">
                    Precio público
                  </th>
                  <th scope="col" className="px-5 py-4 text-left font-ui text-xs font-semibold uppercase tracking-widest text-gold">
                    Perfil
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest/10">
                {programas.map((prog) => (
                  <tr
                    key={prog.codigo}
                    className="hover:bg-gold/5 transition-colors"
                  >
                    <td className="px-5 py-4">
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 w-8 h-8 rounded-full bg-ember text-cream flex items-center justify-center font-ui font-bold text-xs">
                          {prog.codigo}
                        </span>
                        <span className="font-ui font-semibold text-forest text-sm">
                          {prog.nombre}
                        </span>
                      </div>
                    </td>
                    <td className="px-5 py-4">
                      <Badge variant="season">{prog.duracion}</Badge>
                    </td>
                    <td className="px-5 py-4 font-body text-sm text-dark/70">
                      {prog.actividades}
                    </td>
                    <td className="px-5 py-4 font-ui text-sm text-dark/70 whitespace-nowrap">
                      {prog.edadMinima}
                    </td>
                    <td className="px-5 py-4 font-ui font-semibold text-forest text-sm whitespace-nowrap">
                      {prog.precio}
                    </td>
                    <td className="px-5 py-4 font-body text-sm text-muted max-w-[200px]">
                      {prog.perfil}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Add-on note */}
          <p className="mt-5 font-ui text-sm text-muted">
            <strong className="text-dark font-semibold">Asado acampado (add-on):</strong>{' '}
            +$40.000/persona · Disponible para Programas 01 y 03
          </p>
        </div>
      </section>

      {/* ── Condiciones Comerciales ───────────────────────────────────────── */}
      <section
        id="condiciones"
        className="py-20 lg:py-28 bg-cream"
        aria-labelledby="condiciones-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Condiciones */}
            <div>
              <Badge variant="program" className="mb-5">
                Condiciones comerciales
              </Badge>
              <h2
                id="condiciones-heading"
                className="font-display text-3xl font-bold text-forest lg:text-4xl mb-8"
              >
                Cómo trabajamos con agencias
              </h2>
              <ul className="space-y-4" role="list">
                {[
                  'Las tarifas para agencias se negocian directamente con el equipo del fundo.',
                  'Capacidad máxima: 10 personas por grupo (exclusivo).',
                  'La reserva se confirma con acuerdo por escrito.',
                  'Los programas son personalizables en horarios y combinaciones.',
                  'El fundo trabaja con confirmación ágil: respuesta en menos de 24 horas hábiles.',
                ].map((condicion) => (
                  <li key={condicion} className="flex items-start gap-3">
                    <span className="flex-shrink-0 mt-1.5 w-5 h-5 rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center">
                      <span className="w-1.5 h-1.5 rounded-full bg-ember" aria-hidden="true" />
                    </span>
                    <span className="font-body text-sm text-dark/80 leading-relaxed">
                      {condicion}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Aliados */}
            <div>
              <Badge variant="highlight" className="mb-5">
                Nuestros aliados
              </Badge>
              <h2 className="font-display text-3xl font-bold text-forest lg:text-4xl mb-8">
                Operadores de confianza
              </h2>
              <div className="space-y-6">
                <article className="bg-forest/5 border border-forest/10 rounded-xl p-6 hover:border-forest/20 transition-colors">
                  <h3 className="font-ui font-semibold text-forest text-base mb-2">
                    Fly Fishing Riñihue
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed">
                    Guías locales del Río San Pedro con operación certificada en el río. Amplio
                    conocimiento de los tramos del San Pedro y experiencia con grupos mixtos
                    (pescadores y no pescadores).
                  </p>
                </article>
                <article className="bg-forest/5 border border-forest/10 rounded-xl p-6 hover:border-forest/20 transition-colors">
                  <h3 className="font-ui font-semibold text-forest text-base mb-2">
                    De la Hoguera Eventos
                  </h3>
                  <p className="font-body text-sm text-muted leading-relaxed">
                    El sello gastronómico detrás del asado acampado. Preparaciones documentadas
                    de la cocina tradicional chilena, con enfoque en la experiencia colectiva del
                    fuego.
                  </p>
                </article>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Formulario de Contacto ────────────────────────────────────────── */}
      <section
        id="formulario"
        className="py-20 lg:py-28 bg-forest text-cream"
        aria-labelledby="formulario-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Badge variant="highlight" className="mb-5">
              Contacto comercial
            </Badge>
            <h2
              id="formulario-heading"
              className="font-display text-3xl font-bold lg:text-4xl mb-4"
            >
              Envíanos una consulta
            </h2>
            <p className="font-body text-base text-cream/70 mb-12 leading-relaxed">
              Completa el formulario y nos pondremos en contacto en menos de 24 horas hábiles.
            </p>

            {/*
              Note: This form requires a server action or API route for submission.
              Wire up the action attribute to your preferred form handler.
            */}
            <form
              aria-label="Formulario de consulta comercial para agencias"
              className="space-y-6"
              noValidate
            >
              {/* Nombre agencia + Contacto */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="agencia"
                    className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-2"
                  >
                    Nombre de la agencia <span aria-hidden="true" className="text-ember">*</span>
                    <span className="sr-only">(obligatorio)</span>
                  </label>
                  <input
                    id="agencia"
                    name="agencia"
                    type="text"
                    required
                    autoComplete="organization"
                    placeholder="Nombre de tu agencia"
                    className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="contacto"
                    className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-2"
                  >
                    Nombre del contacto <span aria-hidden="true" className="text-ember">*</span>
                    <span className="sr-only">(obligatorio)</span>
                  </label>
                  <input
                    id="contacto"
                    name="contacto"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Tu nombre"
                    className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              {/* Teléfono + Email */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="telefono"
                    className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-2"
                  >
                    Teléfono / WhatsApp <span aria-hidden="true" className="text-ember">*</span>
                    <span className="sr-only">(obligatorio)</span>
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    autoComplete="tel"
                    placeholder="+56 9 XXXX XXXX"
                    className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-2"
                  >
                    Correo electrónico <span aria-hidden="true" className="text-ember">*</span>
                    <span className="sr-only">(obligatorio)</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="tu@agencia.cl"
                    className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              {/* Programas de interés */}
              <fieldset>
                <legend className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-3">
                  Programas de interés
                </legend>
                <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                  {[
                    { id: 'prog01', value: 'programa-01', label: 'Programa 01 · Cabalgata y Picoteo' },
                    { id: 'prog02', value: 'programa-02', label: 'Programa 02 · Del Potrero al Río' },
                    { id: 'prog03', value: 'programa-03', label: 'Programa 03 · Del Río al Potrero' },
                    { id: 'prog04', value: 'programa-04', label: 'Programa 04 · Travesía San Pedro' },
                  ].map((prog) => (
                    <label
                      key={prog.id}
                      htmlFor={prog.id}
                      className="flex items-center gap-3 bg-cream/5 border border-cream/10 rounded-lg px-4 py-3 cursor-pointer hover:bg-cream/10 hover:border-cream/20 transition-colors"
                    >
                      <input
                        id={prog.id}
                        name="programas"
                        type="checkbox"
                        value={prog.value}
                        className="w-4 h-4 accent-ember flex-shrink-0 rounded cursor-pointer"
                      />
                      <span className="font-body text-sm text-cream/80">{prog.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              {/* Fecha + Personas */}
              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fecha"
                    className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-2"
                  >
                    Fecha aproximada de la visita
                  </label>
                  <input
                    id="fecha"
                    name="fecha"
                    type="text"
                    autoComplete="off"
                    placeholder="Ej: marzo 2026"
                    className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="personas"
                    className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-2"
                  >
                    Número estimado de personas
                  </label>
                  <input
                    id="personas"
                    name="personas"
                    type="number"
                    min={1}
                    max={10}
                    placeholder="Máx. 10 personas"
                    className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-colors"
                  />
                </div>
              </div>

              {/* Comentarios */}
              <div>
                <label
                  htmlFor="comentarios"
                  className="block font-ui text-xs font-semibold uppercase tracking-widest text-cream/60 mb-2"
                >
                  Comentarios o requerimientos especiales
                </label>
                <textarea
                  id="comentarios"
                  name="comentarios"
                  rows={4}
                  placeholder="Cuéntanos más sobre el grupo, necesidades especiales, etc."
                  className="w-full bg-cream/10 border border-cream/20 rounded-lg px-4 py-3 font-body text-sm text-cream placeholder-cream/30 focus:outline-none focus:ring-2 focus:ring-ember focus:border-transparent transition-colors resize-y"
                />
              </div>

              {/* Política de privacidad */}
              <div>
                <label
                  htmlFor="privacidad"
                  className="flex items-start gap-3 cursor-pointer group"
                >
                  <input
                    id="privacidad"
                    name="privacidad"
                    type="checkbox"
                    required
                    className="mt-0.5 w-4 h-4 accent-ember flex-shrink-0 rounded cursor-pointer"
                  />
                  <span className="font-body text-sm text-cream/60 leading-relaxed group-hover:text-cream/80 transition-colors">
                    He leído y acepto la{' '}
                    <a
                      href="/privacidad"
                      className="text-gold underline underline-offset-4 hover:text-cream transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      política de privacidad
                    </a>{' '}
                    de Fundo Los Huapes.{' '}
                    <span aria-hidden="true" className="text-ember">*</span>
                    <span className="sr-only">(obligatorio)</span>
                  </span>
                </label>
              </div>

              {/* Submit */}
              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center font-ui font-medium tracking-wide rounded transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2 bg-ember text-cream border-2 border-ember hover:bg-transparent hover:text-ember px-8 py-4 text-lg"
                >
                  Enviar consulta comercial
                </button>
              </div>

              <p className="font-ui text-xs text-cream/40">
                Los campos marcados con{' '}
                <span aria-hidden="true" className="text-ember">*</span>{' '}
                son obligatorios.
              </p>
            </form>
          </div>
        </div>
      </section>

      {/* ── CTA Final ────────────────────────────────────────────────────── */}
      <section className="py-16 bg-cream border-t border-forest/10" aria-label="Texto SEO y cierre">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-display text-2xl font-bold text-forest lg:text-3xl mb-6">
              El Fundo Los Huapes: un producto turístico listo para vender
            </h2>
            <div className="prose prose-sm max-w-none space-y-4">
              <p className="font-body text-base text-dark/70 leading-relaxed">
                El Fundo Los Huapes ofrece cuatro programas estructurados, con precios definidos
                y operación lista desde octubre hasta mayo. Para las agencias de turismo que
                buscan experiencias auténticas en el sur de Chile, es un producto fácil de
                comunicar: naturaleza genuina, gastronomía tradicional y río limpio.
              </p>
              <p className="font-body text-base text-dark/70 leading-relaxed">
                La flexibilidad es otra ventaja. Los programas se ajustan al tiempo y al perfil
                de cada grupo. Un tour de día completo puede adaptarse para salir más temprano o
                combinar actividades según lo que necesite la agencia y sus clientes.
              </p>
              <p className="font-body text-base text-dark/70 leading-relaxed">
                La Región de Los Ríos tiene una de las naturalezas más bien conservadas de Chile.
                El Río San Pedro, el Lago Riñihue y el bosque valdiviano forman un triángulo
                natural que pocos operadores han sabido aprovechar con la profundidad que lo hace
                el Fundo Los Huapes.
              </p>
            </div>
            <div className="mt-8">
              <Button href="#formulario" variant="primary" size="md">
                Enviar consulta comercial
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
