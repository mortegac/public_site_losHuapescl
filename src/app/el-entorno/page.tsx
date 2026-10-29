import type { Metadata } from 'next'
import Image from 'next/image'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { getFAQJsonLd, getBreadcrumbJsonLd } from '@/lib/jsonld'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'El Entorno Natural | Río San Pedro y Bosque Nativo',
  description:
    'El Fundo Los Huapes está rodeado de bosque nativo valdiviano y bordeado por el Río San Pedro. Ciervos, copihues, liebres y Gran Pirineo habitan el paisaje de la Región de Los Ríos, Chile.',
  keywords: [
    'bosque nativo valdiviano',
    'naturaleza Región Los Ríos',
    'flora fauna sur Chile',
    'Río San Pedro paisaje',
    'ecoturismo Valdivia',
  ],
  alternates: { canonical: 'https://loshuapes.cl/el-entorno' },
  openGraph: {
    url: 'https://loshuapes.cl/el-entorno',
    title: 'El Entorno Natural | Río San Pedro y Bosque Nativo | Fundo Los Huapes',
    description:
      'Bosque nativo valdiviano, río turquesa y fauna silvestre a minutos de Valdivia. El escenario del Fundo Los Huapes en la Región de Los Ríos.',
    images: [{ url: '/og-entorno.jpg', width: 1200, height: 630, alt: 'Bosque valdiviano y Río San Pedro desde el Fundo Los Huapes' }],
  },
}

// ---------------------------------------------------------------------------
// JSON-LD data
// ---------------------------------------------------------------------------

function getTouristAttractionPageJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'TouristAttraction',
    name: 'Entorno Natural del Fundo Los Huapes',
    url: 'https://loshuapes.cl/el-entorno',
    description:
      'Bosque nativo valdiviano y Río San Pedro en la Región de Los Ríos, Chile. Flora nativa con ulmos, tilos, avellanos y copihues. Fauna silvestre: ciervos, liebres y aves acuáticas.',
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
    touristType: ['NatureTourist', 'EcotourismTourist', 'FamilyTourist'],
    availableSeason: {
      '@type': 'Schedule',
      startDate: '--10-01',
      endDate: '--05-30',
    },
  }
}

const faqs = [
  {
    question: '¿Dónde queda exactamente el Fundo Los Huapes?',
    answer:
      'En la ribera del Río San Pedro, Región de Los Ríos, Chile. A aproximadamente 45 km de Valdivia. El punto exacto de encuentro se confirma al momento de la reserva.',
  },
  {
    question: '¿En qué época del año es mejor visitar?',
    answer:
      'La temporada de operación es del 1 de octubre al 30 de mayo. El verano austral (diciembre-marzo) ofrece los días más largos y el clima más estable.',
  },
  {
    question: '¿Se pueden ver copihues durante las cabalgatas?',
    answer:
      'Sí, especialmente en primavera (octubre-noviembre). Los copihues crecen en el sotobosque y son fáciles de ver durante las etapas de bosque nativo.',
  },
  {
    question: '¿El río es peligroso para los niños?',
    answer:
      'No. Las balsas son guiadas y el equipo de seguridad está incluido. El Programa 03 (Del Río al Potrero) está disponible desde los 5 años.',
  },
]

// ---------------------------------------------------------------------------
// Stats data
// ---------------------------------------------------------------------------

const stats = [
  { value: '265 m', label: 'Altura sobre el nivel del mar', desc: 'Fundo Los Huapes' },
  { value: '70+ km', label: 'Longitud del Río San Pedro', desc: 'Desde el Lago Riñihue' },
  { value: '+120', label: 'Especies de aves registradas', desc: 'Región de Los Ríos' },
  { value: '14 °C', label: 'Temperatura media anual', desc: 'Sur de Chile' },
]

// ---------------------------------------------------------------------------
// Flora data
// ---------------------------------------------------------------------------

const flora = [
  { name: 'Ulmo', type: 'Árbol', fact: 'Florece en verano; su miel es apreciada a nivel mundial' },
  { name: 'Tilo', type: 'Árbol', fact: 'Madera noble, refugio de pájaros carpinteros' },
  { name: 'Avellano', type: 'Árbol', fact: 'Fruto comestible; el "avellano chileno"' },
  { name: 'Copihue', type: 'Enredadera', fact: 'Flor nacional de Chile; crece en el sotobosque' },
  { name: 'Canelo', type: 'Árbol', fact: 'Árbol sagrado del pueblo mapuche' },
]

// ---------------------------------------------------------------------------
// Fauna data
// ---------------------------------------------------------------------------

const faunaSilvestre = [
  { name: 'Ciervos', desc: 'Se avistan en los bordes del bosque, especialmente al amanecer y al atardecer' },
  { name: 'Liebres', desc: 'Comunes en los potreros abiertos' },
  { name: 'Aves acuáticas', desc: 'Patos, queltehues y garzas en el río y el estero' },
]

const faunaCampo = [
  { name: 'Caballos criollos', desc: 'Los protagonistas de las cabalgatas' },
  { name: 'Gran Pirineo', desc: 'Perros guardianes de las ovejas del fundo' },
  { name: 'Ovejas', desc: 'Pastando en los potreros, fuente del cordero del asado acampado' },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function ElEntornoPage() {
  return (
    <>
      {/* JSON-LD */}
      <JsonLd data={getTouristAttractionPageJsonLd()} />
      <JsonLd data={getFAQJsonLd(faqs)} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: 'Inicio', item: 'https://loshuapes.cl' },
          { name: 'El Entorno', item: 'https://loshuapes.cl/el-entorno' },
        ])}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section
        className="relative bg-forest text-cream overflow-hidden"
        aria-labelledby="hero-entorno-heading"
      >
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/entorno-aereo.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest/75" />
        </div>
        <div
          className="absolute inset-0 opacity-5 pointer-events-none"
          aria-hidden="true"
          style={{
            backgroundImage:
              'radial-gradient(circle at 30% 60%, rgba(184,148,74,0.6) 0%, transparent 60%), radial-gradient(circle at 80% 20%, rgba(192,92,40,0.3) 0%, transparent 50%)',
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 lg:py-36">
          <Badge variant="program" className="mb-6 bg-cream/10 text-cream border-cream/20">
            El Entorno
          </Badge>
          <h1
            id="hero-entorno-heading"
            className="font-display text-4xl font-bold leading-tight sm:text-5xl lg:text-6xl max-w-2xl"
          >
            Un escenario que no se encuentra en la ciudad
          </h1>
          <p className="mt-6 font-body text-lg text-cream/80 max-w-xl leading-relaxed">
            Bosque nativo, río turquesa y fauna silvestre a minutos de Valdivia.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="/programas" variant="primary" size="lg">
              Explorar programas
            </Button>
            <Button
              href="#como-llegar"
              variant="ghost"
              size="lg"
              className="text-cream border-cream/40 hover:border-cream hover:bg-cream/10"
            >
              Cómo llegar
            </Button>
          </div>
        </div>
      </section>

      {/* ── Stats ─────────────────────────────────────────────────────────── */}
      <section
        className="bg-gold/10 border-y border-gold/20 py-12"
        aria-label="Datos del entorno"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ul
            className="grid grid-cols-2 gap-8 lg:grid-cols-4"
            role="list"
            aria-label="Estadísticas del entorno natural"
          >
            {stats.map((stat) => (
              <li key={stat.label} className="text-center">
                <p className="font-display text-3xl font-bold text-forest lg:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1.5 font-ui text-xs font-semibold uppercase tracking-wide text-forest/70">
                  {stat.label}
                </p>
                <p className="mt-1 font-body text-xs text-muted">{stat.desc}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ── Galería del entorno ──────────────────────────────────────────── */}
      <section className="py-12 bg-dark" aria-label="Galería del entorno natural del Fundo Los Huapes">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-3">
            {([
              { src: '/images/entorno-aereo.jpg', alt: 'Vista aérea del Río San Pedro serpenteando por el valle verde', cls: 'md:col-span-2' },
              { src: '/images/entorno-atardecer.jpg', alt: 'Atardecer dramático con siluetas de árboles nativos', cls: '' },
              { src: '/images/entorno-flores.jpg', alt: 'Pradera de flores silvestres amarillas y blancas bajo cielo azul', cls: '' },
              { src: '/images/entorno-perros.jpg', alt: 'Gran Pirineo en el bosque nativo brumoso del fundo', cls: '' },
              { src: '/images/entorno-rio-verde.jpg', alt: 'Agua turquesa del Río San Pedro reflejando el bosque nativo', cls: 'md:col-span-2' },
              { src: '/images/entorno-potrero.jpg', alt: 'Potreros verdes del Fundo Los Huapes con montañas al fondo', cls: '' },
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

      {/* ── Sección 1: El Fundo ───────────────────────────────────────────── */}
      <section
        id="el-fundo"
        className="py-20 lg:py-28 bg-cream"
        aria-labelledby="fundo-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <Badge variant="program" className="mb-5">
                Ubicación
              </Badge>
              <h2
                id="fundo-heading"
                className="font-display text-3xl font-bold text-forest lg:text-4xl"
              >
                El campo en el corazón del río
              </h2>
              <p className="mt-5 font-body text-base text-dark/80 leading-relaxed">
                El Fundo Los Huapes está ubicado en la ribera del Río San Pedro, en la Región
                de Los Ríos, uno de los paisajes más biodiversos de Chile. El campo combina
                potreros abiertos, bosque nativo y el estero Huillinco, que atraviesa el predio
                y desemboca en el San Pedro.
              </p>
            </div>

            {/* Key data */}
            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {[
                { dt: 'Región', dd: 'Los Ríos, Chile' },
                { dt: 'Río principal', dd: 'Río San Pedro (desagüe del Lago Riñihue)' },
                { dt: 'Vegetación', dd: 'Bosque valdiviano nativo' },
                { dt: 'Distancia a Valdivia', dd: '~45 km (~50 minutos en auto)' },
              ].map((item) => (
                <div
                  key={item.dt}
                  className="bg-forest/5 border border-forest/10 rounded-xl px-5 py-4"
                >
                  <dt className="font-ui text-xs font-semibold uppercase tracking-wide text-muted">
                    {item.dt}
                  </dt>
                  <dd className="mt-1.5 font-body text-sm text-forest font-medium">{item.dd}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* ── Sección 2: Río San Pedro ──────────────────────────────────────── */}
      <section
        id="rio-san-pedro"
        className="py-20 lg:py-28 bg-forest text-cream"
        aria-labelledby="rio-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <Badge variant="highlight" className="mb-5">
              Río San Pedro
            </Badge>
            <h2
              id="rio-heading"
              className="font-display text-3xl font-bold lg:text-4xl"
            >
              El San Pedro desde el agua
            </h2>
            <p className="mt-5 font-body text-base text-cream/80 leading-relaxed">
              El Río San Pedro nace en el desagüe del Lago Riñihue y recorre más de 70 km
              antes de unirse al Río Valdivia. Sus aguas color turquesa, sus paredes de roca
              volcánica y su ribera cubierta de bosque nativo lo convierten en uno de los ríos
              más hermosos del sur de Chile.
            </p>

            {/* Quote */}
            <blockquote className="mt-8 border-l-4 border-gold pl-6">
              <p className="font-display text-xl italic text-cream/90 leading-relaxed">
                "Llegar al campo navegando, y no por la carretera, cambia por completo la
                experiencia."
              </p>
            </blockquote>
          </div>

          {/* Tramos del recorrido */}
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-3">
            {[
              {
                label: 'Zarpe',
                name: 'Puente Ciruelos',
                detail: 'Inicio del tramo largo (20 km)',
              },
              {
                label: 'Punto intermedio',
                name: 'Isla del campo',
                detail: 'Llegada al Fundo Los Huapes; punto de almuerzo',
              },
              {
                label: 'Llegada',
                name: 'Balsa San Javier, Antilhue',
                detail: 'Fin del tramo de 15 km (Programa 02)',
              },
            ].map((point) => (
              <div
                key={point.name}
                className="bg-cream/5 border border-cream/10 rounded-xl p-6"
              >
                <p className="font-ui text-xs font-semibold uppercase tracking-widest text-gold mb-2">
                  {point.label}
                </p>
                <p className="font-ui font-semibold text-cream text-base">{point.name}</p>
                <p className="mt-1.5 font-body text-sm text-cream/60">{point.detail}</p>
              </div>
            ))}
          </div>

          <p className="mt-8 font-ui text-sm text-cream/50">
            Operación en el río:{' '}
            <a
              href="https://flyfishingrinihuε.cl"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gold hover:text-cream transition-colors underline underline-offset-4"
            >
              Fly Fishing Riñihue
            </a>{' '}
            — Guías locales del San Pedro
          </p>
        </div>
      </section>

      {/* ── Sección 3: Flora ──────────────────────────────────────────────── */}
      <section
        id="flora"
        className="py-20 lg:py-28 bg-cream"
        aria-labelledby="flora-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="season" className="mb-5">
              Flora
            </Badge>
            <h2
              id="flora-heading"
              className="font-display text-3xl font-bold text-forest lg:text-4xl"
            >
              Bosque valdiviano: el más húmedo de América
            </h2>
            <p className="mt-5 font-body text-base text-dark/80 leading-relaxed">
              El bosque que rodea el fundo es parte del bosque valdiviano templado lluvioso,
              declarado punto de Biodiversidad Global. Ulmos, tilos, avellanos, canelos y
              coihues forman un dosel denso que en primavera se llena de copihues, la flor
              nacional de Chile.
            </p>
          </div>

          {/* Flora table — accessible */}
          <div className="overflow-x-auto rounded-xl border border-forest/10">
            <table className="w-full min-w-[480px]" aria-label="Especies de flora del bosque valdiviano">
              <thead className="bg-forest text-cream">
                <tr>
                  <th scope="col" className="px-6 py-4 text-left font-ui text-xs font-semibold uppercase tracking-widest text-gold">
                    Especie
                  </th>
                  <th scope="col" className="px-6 py-4 text-left font-ui text-xs font-semibold uppercase tracking-widest text-gold">
                    Tipo
                  </th>
                  <th scope="col" className="px-6 py-4 text-left font-ui text-xs font-semibold uppercase tracking-widest text-gold">
                    Dato
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-forest/10 bg-cream">
                {flora.map((row) => (
                  <tr key={row.name} className="hover:bg-forest/5 transition-colors">
                    <td className="px-6 py-4 font-ui font-semibold text-forest text-sm">
                      {row.name}
                    </td>
                    <td className="px-6 py-4">
                      <Badge variant="program">{row.type}</Badge>
                    </td>
                    <td className="px-6 py-4 font-body text-sm text-dark/70 leading-relaxed">
                      {row.fact}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ── Sección 4: Fauna ──────────────────────────────────────────────── */}
      <section
        id="fauna"
        className="py-20 lg:py-28 bg-forest/5 border-y border-forest/10"
        aria-labelledby="fauna-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <Badge variant="program" className="mb-5">
              Fauna
            </Badge>
            <h2
              id="fauna-heading"
              className="font-display text-3xl font-bold text-forest lg:text-4xl"
            >
              Los habitantes del fundo
            </h2>
            <p className="mt-5 font-body text-base text-dark/80 leading-relaxed">
              El campo y el bosque que lo rodea alojan una fauna variada, tanto silvestre como
              doméstica. Ciervos y liebres son avistamientos frecuentes durante las cabalgatas;
              los perros Gran Pirineo cuidan las ovejas del potrero.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-2">
            {/* Fauna silvestre */}
            <div>
              <h3 className="font-ui text-xs font-semibold uppercase tracking-widest text-muted mb-6">
                Fauna silvestre
              </h3>
              <ul className="space-y-5" role="list">
                {faunaSilvestre.map((animal) => (
                  <li key={animal.name} className="flex gap-4 items-start">
                    <span
                      className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-forest/10 border border-forest/20 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="w-2 h-2 rounded-full bg-forest" />
                    </span>
                    <div>
                      <p className="font-ui font-semibold text-forest text-sm">{animal.name}</p>
                      <p className="mt-0.5 font-body text-sm text-muted leading-relaxed">{animal.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Fauna del campo */}
            <div>
              <h3 className="font-ui text-xs font-semibold uppercase tracking-widest text-muted mb-6">
                Fauna del campo
              </h3>
              <ul className="space-y-5" role="list">
                {faunaCampo.map((animal) => (
                  <li key={animal.name} className="flex gap-4 items-start">
                    <span
                      className="flex-shrink-0 mt-1 w-8 h-8 rounded-full bg-gold/15 border border-gold/30 flex items-center justify-center"
                      aria-hidden="true"
                    >
                      <span className="w-2 h-2 rounded-full bg-gold" />
                    </span>
                    <div>
                      <p className="font-ui font-semibold text-forest text-sm">{animal.name}</p>
                      <p className="mt-0.5 font-body text-sm text-muted leading-relaxed">{animal.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ── Cómo Llegar ───────────────────────────────────────────────────── */}
      <section
        id="como-llegar"
        className="py-20 lg:py-28 bg-cream"
        aria-labelledby="llegar-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20 items-start">
            <div>
              <Badge variant="program" className="mb-5">
                Coordenadas y acceso
              </Badge>
              <h2
                id="llegar-heading"
                className="font-display text-3xl font-bold text-forest lg:text-4xl"
              >
                Cómo llegar
              </h2>
              <p className="mt-5 font-body text-base text-dark/80 leading-relaxed">
                El Fundo Los Huapes se encuentra en la ribera del Río San Pedro, a
                aproximadamente 45 km de Valdivia por la Ruta 5 Sur y caminos secundarios. El
                punto exacto de encuentro — que puede variar según el programa elegido — se
                confirma al momento de la reserva.
              </p>
              <p className="mt-4 font-body text-base text-dark/80 leading-relaxed">
                Para los programas con llegada en balsa (Programas 02 y 03), el zarpe es en
                Puente Ciruelos y el punto de encuentro es diferente al acceso en auto.
              </p>
            </div>

            {/* Coordinates card */}
            <div className="bg-forest text-cream rounded-2xl p-8 space-y-6">
              <h3 className="font-ui text-xs font-semibold uppercase tracking-widest text-gold">
                Datos de ubicación
              </h3>
              <dl className="space-y-4">
                <div>
                  <dt className="font-ui text-xs text-cream/50 uppercase tracking-wide">Región</dt>
                  <dd className="mt-1 font-body text-base text-cream">Los Ríos, Chile</dd>
                </div>
                <div>
                  <dt className="font-ui text-xs text-cream/50 uppercase tracking-wide">Río</dt>
                  <dd className="mt-1 font-body text-base text-cream">Río San Pedro</dd>
                </div>
                <div>
                  <dt className="font-ui text-xs text-cream/50 uppercase tracking-wide">Coordenadas aproximadas</dt>
                  <dd className="mt-1 font-ui font-semibold text-gold text-base">
                    39°48′ S · 72°54′ O
                  </dd>
                </div>
                <div>
                  <dt className="font-ui text-xs text-cream/50 uppercase tracking-wide">Desde Valdivia</dt>
                  <dd className="mt-1 font-body text-base text-cream">~45 km · ~50 min en auto</dd>
                </div>
              </dl>
              <p className="font-ui text-xs text-cream/40 border-t border-cream/10 pt-5">
                El punto exacto de encuentro se confirma al momento de la reserva.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <section
        id="preguntas"
        className="py-20 lg:py-28 bg-forest/5 border-t border-forest/10"
        aria-labelledby="faq-entorno-heading"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              id="faq-entorno-heading"
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
      <section className="py-20 bg-forest text-cream" aria-label="Llamada a la acción">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold lg:text-4xl">
            Ven a conocer este paisaje
          </h2>
          <p className="mt-5 font-body text-base text-cream/80 max-w-lg mx-auto leading-relaxed">
            Temporada octubre – mayo. Grupos de 5 a 10 personas. Cuatro programas que van de
            la media jornada a dos días con noche en el campo.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/programas" variant="primary" size="lg">
              Ver programas
            </Button>
            <Button href="/reservar" variant="ghost" size="lg" className="text-cream border-cream/40 hover:border-cream hover:bg-cream/10">
              Hacer una reserva
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
