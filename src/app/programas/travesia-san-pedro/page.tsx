import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { getTouristTripJsonLd, getFAQJsonLd, getBreadcrumbJsonLd } from '@/lib/jsonld'

const BASE_URL = 'https://www.loshuapes.cl'
const PROGRAM_URL = `${BASE_URL}/programas/travesia-san-pedro`

export function generateMetadata(): Metadata {
  return {
    title: 'Travesía San Pedro — 2 Días y 1 Noche en Los Ríos',
    description:
      'Dos días en el Río San Pedro, Los Ríos: balsa 20 km, pesca con mosca, asado acampado, noche en el campo y cabalgata. $280.000 por persona, todo incluido.',
    keywords: [
      'travesía río San Pedro 2 días',
      'pesca con mosca San Pedro Chile',
      'turismo rural 2 días Los Ríos',
      'experiencia inmersiva campo chileno',
    ],
    alternates: { canonical: PROGRAM_URL },
    openGraph: {
      title: 'Travesía San Pedro — 2 Días y 1 Noche en Los Ríos | Fundo Los Huapes',
      description:
        'Balsa, pesca con mosca, asado acampado y cabalgata. 2 días todo incluido. $280.000 / persona.',
      url: PROGRAM_URL,
      images: [
        {
          url: `${BASE_URL}/og-travesia-san-pedro.jpg`,
          width: 1200,
          height: 630,
          alt: 'Travesía San Pedro — asado acampado y balsa en el Fundo Los Huapes',
        },
      ],
    },
  }
}

const faqs = [
  {
    question: '¿Qué tan difícil es la jornada de 8 horas en el río?',
    answer:
      'El nivel es accesible para personas sin experiencia previa. La balsa es guiada, el equipo de seguridad está incluido y los guías de Fly Fishing Riñihue ajustan el ritmo al grupo. La jornada baja por la cuenca del Río San Pedro desde el desagüe de Riñihue, con snack y almuerzo servidos durante la ruta, de modo que hay pausas para descansar. Quien prefiera algo más tranquilo puede optar por el paseo en el lago, la alternativa que incluye el Lago Riñihue.',
  },
  {
    question: '¿Dónde se duerme durante la noche?',
    answer:
      'En el campo, en instalaciones del Fundo Los Huapes, después del asado acampado que cierra el primer día alrededor de las 20:00. El alojamiento de una noche está incluido en el precio del programa, igual que el desayuno campestre del día siguiente, cuyo horario se acuerda con el grupo. Los detalles del alojamiento se confirman al momento de la reserva; para la noche conviene llevar ropa abrigada, bolsa de dormir y artículos de aseo personal.',
  },
  {
    question: '¿La pesca con mosca es obligatoria?',
    answer:
      'No. La pesca con mosca es una de las opciones del programa: el grupo elige entre pescar durante la jornada en el río o simplemente disfrutar del paisaje y la navegación. El equipamiento de pesca no está incluido, pero está disponible con Fly Fishing Riñihue, el operador del río. En el formulario de reserva se puede indicar el interés del grupo: todos, algunos o ninguno. La jornada de balsa y el resto del programa son iguales en ambos casos.',
  },
  {
    question: '¿Qué se necesita llevar para la noche?',
    answer:
      'Ropa abrigada, bolsa de dormir y artículos de aseo personal. El fundo provee el alojamiento y toda la gastronomía: asado acampado la primera noche, desayuno campestre al día siguiente y el almuerzo con snack durante la jornada en el río. El equipo de seguridad de la balsa está incluido; solo el equipamiento de pesca va aparte, disponible con Fly Fishing Riñihue para quienes elijan la opción de pesca con mosca.',
  },
  {
    question: '¿La Travesía San Pedro es apta para turistas extranjeros?',
    answer:
      'Sí. Es el programa más demandado por turistas nacionales e internacionales, pescadores con mosca y quienes buscan desconectarse completamente. Son dos días y una noche en el Río San Pedro y el campo, en la Región de Los Ríos, con grupos de 5 a 10 personas y edad mínima de 10 años. La temporada va del 1 de octubre al 30 de mayo, y la reserva se coordina por el formulario con respuesta en menos de 24 horas.',
  },
  {
    question: '¿Cuánto cuesta y qué incluye el precio?',
    answer:
      '$280.000 por persona, todo incluido. El precio cubre la bajada en balsa de 20 km, la cabalgata guiada con picoteo en el estero, el asado acampado de la primera noche, el alojamiento de una noche en el campo, el desayuno campestre y el almuerzo en el río con snack. No incluye el traslado al punto de zarpe, el equipamiento de pesca ni alojamiento adicional. Como opciones están la pesca con mosca, el paseo en el lago y el asado campestre del segundo día.',
  },
]

const otherPrograms = [
  {
    number: '01',
    href: '/programas/cabalgata-picoteo',
    name: 'Cabalgata y Picoteo',
    desc: 'Cabalgata guiada por bosque nativo con picoteo en el estero Huillinco.',
    price: '$80.000',
    duration: 'Media jornada',
  },
  {
    number: '02',
    href: '/programas/potrero-al-rio',
    name: 'Del Potrero al Río',
    desc: 'Mañana a caballo y tarde en balsa 15 km por el Río San Pedro. Almuerzo incluido.',
    price: '$180.000',
    duration: 'Día completo',
  },
  {
    number: '03',
    href: '/programas/rio-al-potrero',
    name: 'Del Río al Potrero',
    desc: 'Balsa 20 km en la mañana y cabalgata en la tarde. Apto desde 5 años.',
    price: '$180.000',
    duration: 'Día completo',
  },
]

const galleryItems = [
  { alt: 'Río San Pedro con acantilados rocosos y cielo azul', image: '/images/hero-rio.jpg' },
  { alt: 'Balsa varada en la orilla del río con paredes de cañón verde', image: '/images/balsa-raft.jpg' },
  { alt: 'Río turquesa brumoso en el entorno del Río San Pedro', image: '/images/entorno-rio.jpg' },
  { alt: 'Vista aérea del Río San Pedro serpenteando por el valle verde', image: '/images/entorno-aereo.jpg' },
  { alt: 'Atardecer dramático con siluetas de árboles nativos del bosque valdiviano', image: '/images/entorno-atardecer.jpg' },
  { alt: 'Olla de hierro sobre fogón de leña junto al río durante el asado acampado', image: '/images/gastronomia-fogon.jpg' },
]

export default function TravesiaSanPedroPage() {
  const tripJsonLd = getTouristTripJsonLd({
    name: 'Travesía San Pedro',
    description:
      '2 días completos en el Río San Pedro y el Fundo Los Huapes. Balsa 20 km, pesca con mosca opcional, asado acampado, noche en el campo, desayuno campestre y cabalgata con picoteo el segundo día.',
    url: PROGRAM_URL,
    image: `${BASE_URL}/og-travesia-san-pedro.jpg`,
    price: '280000',
    duration: 'P2D',
    minAge: 10,
    groupMin: 5,
    groupMax: 10,
  })

  const faqJsonLd = getFAQJsonLd(faqs)

  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'Inicio', item: BASE_URL },
    { name: 'Programas', item: `${BASE_URL}/programas` },
    { name: 'Travesía San Pedro', item: PROGRAM_URL },
  ])

  return (
    <>
      <JsonLd data={tripJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumb} />

      {/* ── Hero ── */}
      <section className="relative bg-dark text-cream overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div
          className="absolute inset-0 bg-gradient-to-br from-forest via-dark to-ember/20 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-ui text-xs tracking-widest uppercase text-ember mb-4">
              Programa 04
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="highlight">2 días · 1 noche</Badge>
              <Badge variant="program">Río + cabalgata</Badge>
              <Badge variant="program">Noche en el campo</Badge>
            </div>

            <h1 className="font-display text-5xl font-bold leading-tight mb-6 lg:text-7xl">
              Travesía por el Río San Pedro
            </h1>

            <p className="font-body text-lg text-cream/80 leading-relaxed mb-8 lg:text-xl max-w-2xl">
              El programa más completo del fundo. Un día entero en el Río San Pedro con opción de
              pesca con mosca, noche bajo las estrellas con asado acampado, desayuno campestre y
              segundo día de cabalgata y labores de campo.
            </p>

            {/* Price with included note */}
            <div className="rounded-2xl border border-cream/10 bg-cream/5 p-6 mb-8 max-w-md">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="font-display text-4xl font-bold text-ember">$280.000</span>
                <span className="font-ui text-cream/60 text-base">/ persona</span>
              </div>
              <p className="font-ui text-sm text-cream/50">
                Incluye: balsa, cabalgata, picoteo, asado acampado, alojamiento, desayuno y almuerzo
              </p>
            </div>

            <Button href="#reserva" variant="primary" size="lg">
              Reservar este programa
            </Button>
          </div>
        </div>
      </section>

      {/* ── Resumen del programa ── */}
      <section className="py-12 bg-cream border-b border-forest/10 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="max-w-3xl font-body text-base text-dark/80 leading-relaxed lg:text-lg">
            La Travesía San Pedro es el programa más completo del Fundo Los Huapes: dos días y una
            noche entre el río y el campo, en la Región de Los Ríos. El primer día se navega en
            balsa por la cuenca del Río San Pedro desde el desagüe de Riñihue —una jornada de
            aproximadamente 8 horas con snack y almuerzo en la ruta y opción de pesca con mosca—, y
            termina con asado acampado y noche en el campo. El segundo día incluye desayuno
            campestre, cabalgata con picoteo en el estero y actividades de campo como rodear
            caballos. El valor es de $280.000 por persona, todo incluido: balsa, cabalgata, picoteo,
            asado acampado, alojamiento, desayuno y almuerzo. Los grupos son de 5 a 10 personas,
            desde los 10 años, y operan junto a Fly Fishing Riñihue y De la Hoguera. La temporada va
            del 1 de octubre al 30 de mayo.
          </p>
        </div>
      </section>

      {/* ── Itinerario 2 días ── */}
      <section className="py-16 bg-cream lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-forest mb-10 lg:text-4xl">
              ¿Cómo es el itinerario de los 2 días?
            </h2>

            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              {/* Día 1 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex-shrink-0 h-8 w-8 rounded-full bg-ember flex items-center justify-center font-ui text-cream font-bold text-sm">
                    1
                  </span>
                  <h3 className="font-display text-xl font-bold text-forest">Día 1 — El Río</h3>
                </div>
                <ol className="relative border-l-2 border-forest/20 space-y-6 pl-6">
                  {[
                    {
                      time: '09:30',
                      activity:
                        'Bajada en balsa por la Cuenca del Río San Pedro, inicio en desagüe de Riñihue pasando por Puente Malihue (también opción: Lago Riñihue). Snack y almuerzo durante la ruta. Pesca incluida. Duración aprox. 8 horas.',
                    },
                    {
                      time: '20:00',
                      activity: 'Asado acampado y noche en el campo',
                    },
                  ].map((item) => (
                    <li key={item.time} className="relative">
                      <span className="absolute -left-[1.625rem] top-1 h-3 w-3 rounded-full bg-ember border-2 border-cream" />
                      <time className="font-ui text-xs font-semibold text-ember tracking-wide block mb-0.5">
                        {item.time}
                      </time>
                      <p className="font-body text-dark/80 text-sm leading-relaxed">{item.activity}</p>
                    </li>
                  ))}
                </ol>
              </div>

              {/* Día 2 */}
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="flex-shrink-0 h-8 w-8 rounded-full bg-forest flex items-center justify-center font-ui text-cream font-bold text-sm">
                    2
                  </span>
                  <h3 className="font-display text-xl font-bold text-forest">Día 2 — El Campo</h3>
                </div>
                <ol className="relative border-l-2 border-forest/20 space-y-6 pl-6">
                  {[
                    {
                      time: 'Temprano',
                      activity: 'Desayuno campestre (horario acordado con el grupo)',
                    },
                    {
                      time: '10:00',
                      activity:
                        'Inicio cabalgata, picoteo en el estero y actividades de campo (rodear caballos)',
                    },
                    {
                      time: '14:30',
                      activity: 'Asado campestre (opcional)',
                    },
                  ].map((item) => (
                    <li key={item.time} className="relative">
                      <span className="absolute -left-[1.625rem] top-1 h-3 w-3 rounded-full bg-forest border-2 border-cream" />
                      <time className="font-ui text-xs font-semibold text-forest tracking-wide block mb-0.5">
                        {item.time}
                      </time>
                      <p className="font-body text-dark/80 text-sm leading-relaxed">{item.activity}</p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>

            <p className="mt-8 font-ui text-xs text-muted italic">
              Horarios referenciales.
            </p>
          </div>
        </div>
      </section>

      {/* ── Incluye / Opciones / No incluye ── */}
      <section className="py-16 bg-forest/5 border-y border-forest/10 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-3 max-w-4xl">
            <div>
              <h2 className="font-display text-2xl font-bold text-forest mb-6">
                ¿Qué incluye el precio?
              </h2>
              <ul className="space-y-3">
                {[
                  'Bajada en balsa (20 km)',
                  'Cabalgata guiada con picoteo',
                  'Asado acampado (noche 1)',
                  'Alojamiento 1 noche en el campo',
                  'Desayuno campestre',
                  'Almuerzo en el río (snack + almuerzo completo)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-dark/80 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-ember flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-forest mb-6">Opciones</h2>
              <ul className="space-y-3">
                {[
                  'Pesca con mosca durante la jornada en el río',
                  'Paseo en el lago (alternativa al tramo de río, incluye Lago Riñihue)',
                  'Asado campestre día 2 (opcional al término)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-dark/80 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-forest mb-6">¿Qué no incluye?</h2>
              <ul className="space-y-3">
                {[
                  'Traslado al punto de zarpe',
                  'Equipamiento de pesca (disponible con Fly Fishing Riñihue)',
                  'Alojamiento adicional',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-dark/80 text-sm">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-muted flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 max-w-4xl grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: 'Edad mínima', value: '10 años' },
              { label: 'Duración', value: '2 días · 1 noche' },
              { label: 'Grupo', value: '5 – 10 personas' },
              { label: 'Temporada', value: '1 oct – 30 may' },
            ].map((c) => (
              <div key={c.label} className="bg-cream rounded-xl p-4 text-center border border-forest/10">
                <p className="font-ui text-xs tracking-wide uppercase text-muted mb-1">{c.label}</p>
                <p className="font-display text-sm font-bold text-forest">{c.value}</p>
              </div>
            ))}
          </div>

          {/* Partners */}
          <div className="mt-8 max-w-4xl flex flex-wrap gap-3">
            <span className="font-ui text-xs tracking-wide uppercase text-muted">Operadores:</span>
            <span className="font-ui text-xs text-forest font-medium">Fly Fishing Riñihue (río)</span>
            <span className="text-muted text-xs">·</span>
            <span className="font-ui text-xs text-forest font-medium">De la Hoguera (gastronomía)</span>
          </div>
        </div>
      </section>

      {/* ── Galería ── */}
      <section className="py-16 bg-cream lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-forest mb-10 lg:text-4xl">
            Galería
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryItems.map((item, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden aspect-[4/3] relative"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section className="py-16 bg-forest text-cream lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold mb-10 lg:text-4xl">
              Preguntas frecuentes
            </h2>
            <div className="space-y-4">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group border-b border-cream/20 pb-4"
                >
                  <summary className="cursor-pointer font-ui font-medium text-base text-cream list-none flex items-center justify-between gap-4 py-2 hover:text-ember transition-colors duration-200">
                    <span>{faq.question}</span>
                    <span className="flex-shrink-0 text-ember text-xl leading-none group-open:rotate-45 transition-transform duration-200">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 font-body text-cream/70 text-sm leading-relaxed">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Otros programas ── */}
      <section className="py-16 bg-cream border-b border-forest/10 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-display text-3xl font-bold text-forest mb-10 lg:text-4xl">
            Otros programas
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 max-w-4xl">
            {otherPrograms.map((program) => (
              <Link
                key={program.href}
                href={program.href}
                className="group block rounded-xl border border-forest/10 bg-white p-6 hover:border-ember/40 hover:shadow-md transition-all duration-200"
              >
                <p className="font-ui text-xs tracking-widest uppercase text-muted mb-2">
                  Programa {program.number}
                </p>
                <h3 className="font-display text-xl font-bold text-forest mb-2 group-hover:text-ember transition-colors duration-200">
                  {program.name}
                </h3>
                <p className="font-body text-sm text-dark/70 leading-relaxed mb-4">{program.desc}</p>
                <p className="font-ui text-sm font-semibold text-ember">
                  {program.price}{' '}
                  <span className="text-muted font-normal">· {program.duration}</span>
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Formulario de reserva ── */}
      <section id="reserva" className="py-16 bg-cream lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-forest mb-3 lg:text-4xl">
              Reservar este programa
            </h2>
            <p className="font-body text-dark/60 mb-10">
              Completa el formulario y te contactamos en menos de 24 horas para confirmar
              disponibilidad y detalles.
            </p>

            <form action="/api/reservas" method="POST" className="space-y-6">
              <input type="hidden" name="programa" value="Travesía San Pedro" />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="nombre" className="block font-ui text-sm font-medium text-forest mb-2">
                    Nombre completo <span className="text-ember">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    autoComplete="name"
                    className="w-full rounded-lg border border-forest/20 bg-white px-4 py-3 font-body text-dark placeholder-muted/60 focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember transition-colors duration-200"
                    placeholder="Tu nombre"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block font-ui text-sm font-medium text-forest mb-2">
                    Correo electrónico <span className="text-ember">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    className="w-full rounded-lg border border-forest/20 bg-white px-4 py-3 font-body text-dark placeholder-muted/60 focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember transition-colors duration-200"
                    placeholder="tu@email.com"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="telefono" className="block font-ui text-sm font-medium text-forest mb-2">
                    Teléfono / WhatsApp <span className="text-ember">*</span>
                  </label>
                  <input
                    id="telefono"
                    name="telefono"
                    type="tel"
                    required
                    autoComplete="tel"
                    className="w-full rounded-lg border border-forest/20 bg-white px-4 py-3 font-body text-dark placeholder-muted/60 focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember transition-colors duration-200"
                    placeholder="+56 9 1234 5678"
                  />
                </div>

                <div>
                  <label htmlFor="fecha" className="block font-ui text-sm font-medium text-forest mb-2">
                    Fecha tentativa <span className="text-ember">*</span>
                  </label>
                  <input
                    id="fecha"
                    name="fecha"
                    type="date"
                    required
                    className="w-full rounded-lg border border-forest/20 bg-white px-4 py-3 font-body text-dark focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember transition-colors duration-200"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label htmlFor="personas" className="block font-ui text-sm font-medium text-forest mb-2">
                    Número de personas <span className="text-ember">*</span>
                  </label>
                  <input
                    id="personas"
                    name="personas"
                    type="number"
                    required
                    min={5}
                    max={10}
                    className="w-full rounded-lg border border-forest/20 bg-white px-4 py-3 font-body text-dark placeholder-muted/60 focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember transition-colors duration-200"
                    placeholder="5 a 10"
                  />
                </div>

                <div>
                  <label htmlFor="pesca" className="block font-ui text-sm font-medium text-forest mb-2">
                    Interés en pesca con mosca
                  </label>
                  <select
                    id="pesca"
                    name="pesca"
                    className="w-full rounded-lg border border-forest/20 bg-white px-4 py-3 font-body text-dark focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember transition-colors duration-200"
                  >
                    <option value="">Selecciona una opción</option>
                    <option value="si">Sí, todo el grupo</option>
                    <option value="mixto">Mixto (algunos sí, otros no)</option>
                    <option value="no">No, preferimos solo el río</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="mensaje" className="block font-ui text-sm font-medium text-forest mb-2">
                  Mensaje (opcional)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className="w-full rounded-lg border border-forest/20 bg-white px-4 py-3 font-body text-dark placeholder-muted/60 focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember transition-colors duration-200 resize-none"
                  placeholder="Requerimientos especiales, preguntas sobre la noche en el campo, equipamiento…"
                />
              </div>

              <div className="flex items-start gap-3">
                <input
                  id="privacidad"
                  name="privacidad"
                  type="checkbox"
                  required
                  className="mt-1 accent-ember h-4 w-4 flex-shrink-0"
                />
                <label htmlFor="privacidad" className="font-body text-sm text-dark/70">
                  He leído y acepto la{' '}
                  <Link href="/privacidad" className="text-ember underline hover:text-ember/80">
                    política de privacidad
                  </Link>{' '}
                  del Fundo Los Huapes. <span className="text-ember">*</span>
                </label>
              </div>

              <Button type="submit" variant="primary" size="lg" className="w-full sm:w-auto">
                Enviar consulta de reserva
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* ── Breadcrumb nav ── */}
      <nav aria-label="Breadcrumb" className="bg-cream border-t border-forest/10 py-4">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <ol className="flex items-center gap-2 font-ui text-xs text-muted">
            <li><Link href="/" className="hover:text-forest transition-colors">Inicio</Link></li>
            <li aria-hidden="true">›</li>
            <li><Link href="/programas" className="hover:text-forest transition-colors">Programas</Link></li>
            <li aria-hidden="true">›</li>
            <li className="text-forest font-medium">Travesía San Pedro</li>
          </ol>
        </div>
      </nav>
    </>
  )
}
