import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Sunrise, Waves } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { getTouristTripJsonLd, getFAQJsonLd, getBreadcrumbJsonLd } from '@/lib/jsonld'

const BASE_URL = 'https://www.loshuapes.cl'
const PROGRAM_URL = `${BASE_URL}/programas/potrero-al-rio`

export function generateMetadata(): Metadata {
  return {
    title: 'Del Potrero al Río — Cabalgata y Balsa en el Río San Pedro',
    description:
      'Mañana a caballo por bosque nativo y tarde en balsa 15 km por el Río San Pedro hasta Antilhue, Los Ríos. Día completo con almuerzo. $180.000 por persona.',
    keywords: [
      'bajada en balsa Río San Pedro',
      'cabalgata y balsa Los Ríos',
      'turismo aventura Valdivia día completo',
    ],
    alternates: { canonical: PROGRAM_URL },
    openGraph: {
      title: 'Del Potrero al Río — Cabalgata y Balsa en el Río San Pedro | Fundo Los Huapes',
      description:
        'Cabalgata mañana + balsa 15 km tarde. Almuerzo campestre incluido. $180.000 / persona.',
      url: PROGRAM_URL,
      images: [
        {
          url: `${BASE_URL}/og-potrero-al-rio.jpg`,
          width: 1200,
          height: 630,
          alt: 'Balsa navegando el Río San Pedro en el Programa Del Potrero al Río',
        },
      ],
    },
  }
}

const faqs = [
  {
    question: '¿Se necesita experiencia en kayak o rafting?',
    answer:
      'No. La balsa es guiada y el equipo de Fly Fishing Riñihue, operador del tramo de río, se encarga de la navegación y del equipamiento, que está incluido en el programa. El recorrido de 15 km desde la isla del campo hasta Balsa San Javier dura entre 3 y 4 horas, a un ritmo que se ajusta al nivel del río y del grupo. Solo hay que disfrutar el paisaje del Río San Pedro.',
  },
  {
    question: '¿Qué incluye el almuerzo campestre?',
    answer:
      'El almuerzo campestre incluye empanada, mix de parrilla —tapabarriga, pollo y longaniza—, ensalada chilena, papas cocidas y postre de frutas de la estación. Se sirve alrededor de las 14:15, al término de la cabalgata de la mañana y antes del zarpe en balsa de las 15:00. Está incluido en el valor del programa, igual que el picoteo y los bebestibles que se sirven durante el descanso en el estero.',
  },
  {
    question: '¿Dónde termina la bajada en balsa?',
    answer:
      'La bajada termina en Balsa San Javier, en Antilhue, después de 15 km de navegación por el Río San Pedro desde la isla del campo. Desde ahí, el traslado de regreso al campo está incluido en el programa, por lo que no hay que coordinar transporte adicional al final del día. El horario de llegada es referencial: el tramo dura entre 3 y 4 horas según el nivel del río y el ritmo del grupo.',
  },
  {
    question: '¿Cuánto dura la bajada en balsa?',
    answer:
      'El tramo de 15 km dura entre 3 y 4 horas, según el nivel del río y el ritmo del grupo. El zarpe es a las 15:00 desde la isla del campo, después del almuerzo campestre, y el recorrido termina en Balsa San Javier, Antilhue. Los horarios son referenciales: el equipo de Fly Fishing Riñihue, que guía la bajada, puede ajustar el zarpe y el término según las condiciones del día.',
  },
  {
    question: '¿Puedo hacer solo la cabalgata y no la balsa?',
    answer:
      'Sí. El Programa 01, Cabalgata y Picoteo, cubre solo la cabalgata guiada en dos etapas con picoteo en el estero, en media jornada de mañana o tarde. Es una buena alternativa si el grupo incluye niños menores de 10 años —la edad mínima de este programa— o si se prefiere una actividad más corta. También existe la opción inversa: el Programa 03, Del Río al Potrero, hace la balsa en la mañana y la cabalgata en la tarde.',
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
    number: '03',
    href: '/programas/rio-al-potrero',
    name: 'Del Río al Potrero',
    desc: 'Balsa 20 km en la mañana y cabalgata en la tarde. Apto desde 5 años.',
    price: '$180.000',
    duration: 'Día completo',
  },
  {
    number: '04',
    href: '/programas/travesia-san-pedro',
    name: 'Travesía San Pedro',
    desc: 'Balsa, pesca con mosca, asado acampado, noche en el campo y cabalgata.',
    price: '$280.000',
    duration: '2 días · 1 noche',
  },
]

const galleryItems = [
  { alt: 'Caballos en el potrero al atardecer, Fundo Los Huapes', image: '/images/cabalgata-potrero.jpg' },
  { alt: 'Balsa varada en la orilla del río con paredes de cañón verde', image: '/images/balsa-raft.jpg' },
  { alt: 'Río San Pedro con acantilados rocosos y cielo azul', image: '/images/hero-rio.jpg' },
  { alt: 'Caballos pastando entre flores silvestres en verano', image: '/images/cabalgata-verano.jpg' },
  { alt: 'Cocinando junto al río durante el recorrido en balsa', image: '/images/balsa-cocina-rio.jpg' },
  { alt: 'Olla de hierro sobre fogón de leña junto al río', image: '/images/gastronomia-fogon.jpg' },
]

export default function PotrreroAlRioPage() {
  const tripJsonLd = getTouristTripJsonLd({
    name: 'Del Potrero al Río',
    description:
      'Mañana a caballo por bosque nativo y tarde navegando 15 km el Río San Pedro en balsa hasta Antilhue. Almuerzo campestre incluido. Día completo.',
    url: PROGRAM_URL,
    image: `${BASE_URL}/og-potrero-al-rio.jpg`,
    price: '180000',
    duration: 'P1D',
    minAge: 10,
    groupMin: 5,
    groupMax: 10,
  })

  const faqJsonLd = getFAQJsonLd(faqs)

  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'Inicio', item: BASE_URL },
    { name: 'Programas', item: `${BASE_URL}/programas` },
    { name: 'Del Potrero al Río', item: PROGRAM_URL },
  ])

  return (
    <>
      <JsonLd data={tripJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumb} />

      {/* ── Hero ── */}
      <section className="relative bg-forest text-cream overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div
          className="absolute left-0 bottom-0 h-full w-1/2 bg-gradient-to-r from-ember/15 to-transparent pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-ui text-xs tracking-widest uppercase text-ember mb-4">
              Programa 02
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="program">Día completo</Badge>
              <Badge variant="program">Cabalgata mañana</Badge>
              <Badge variant="program">Desde 10 años</Badge>
            </div>

            <h1 className="font-display text-5xl font-bold leading-tight mb-6 lg:text-7xl">
              Del Potrero al Río San Pedro
            </h1>

            <p className="font-body text-lg text-cream/80 leading-relaxed mb-8 lg:text-xl max-w-2xl">
              La mañana en los potreros y el bosque nativo a caballo; la tarde navegando el Río San
              Pedro en balsa desde la isla del campo hasta Balsa San Javier en Antilhue. Almuerzo
              campestre incluido.
            </p>

            <div className="flex flex-wrap items-baseline gap-4 mb-8">
              <span className="font-display text-4xl font-bold text-ember">$180.000</span>
              <span className="font-ui text-cream/60 text-base">/ persona</span>
              <span className="font-ui text-cream/50 text-sm">
                · Almuerzo incluido
              </span>
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
            Del Potrero al Río es un programa de día completo del Fundo Los Huapes que combina la
            mañana a caballo con la tarde en el agua. La jornada parte a las 10:00 con una cabalgata
            guiada en dos etapas por potreros y bosque nativo, con descanso y picoteo en el estero.
            Después del almuerzo campestre —empanada, mix de parrilla, ensalada chilena, papas
            cocidas y postre—, el grupo zarpa en balsa desde la isla del campo y navega 15 km por el
            Río San Pedro hasta Balsa San Javier, en Antilhue, con el traslado de regreso incluido.
            La bajada es guiada por el equipo de Fly Fishing Riñihue y dura entre 3 y 4 horas. El
            valor es de $180.000 por persona, para grupos de 5 a 10 personas desde los 10 años. La
            temporada va del 1 de octubre al 30 de mayo en la Región de Los Ríos.
          </p>
        </div>
      </section>

      {/* ── Itinerario (layout brochure: foto + timelines) ── */}
      <section className="py-16 bg-cream lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14 items-stretch">
            {/* Foto alta con número de programa */}
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-0">
              <Image
                src="/images/programa-potrero-rio.jpg"
                alt="Ovejas junto al portón del potrero con bosque nativo al fondo"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-forest/15" aria-hidden="true" />
              <div className="absolute bottom-6 left-6" aria-hidden="true">
                <p className="font-display text-[4.5rem] font-bold text-white leading-none drop-shadow-md">
                  02
                </p>
                <p className="font-ui text-xs tracking-[0.3em] uppercase text-cream/90 mt-1">
                  Programa
                </p>
              </div>
            </div>

            {/* Contenido: título, badges y timelines */}
            <div>
              <h2 className="font-display text-3xl font-bold text-forest mb-6 lg:text-4xl">
                ¿Cómo es el itinerario del día?
              </h2>

              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="program">Día completo</Badge>
                <Badge variant="program">Cabalgata mañana</Badge>
                <Badge variant="program">Balsa 15 km</Badge>
                <Badge variant="program">Desde 10 años</Badge>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {/* Mañana: cabalgata */}
                <div>
                  <span className="inline-flex items-center gap-2 bg-forest text-cream font-ui text-xs tracking-widest uppercase px-4 py-2 mb-6">
                    <Sunrise size={14} strokeWidth={1.5} aria-hidden="true" />
                    Mañana · Cabalgata
                  </span>
                  <ol className="relative border-l-2 border-gold/40 space-y-5 pl-6">
                    {[
                      { time: '10:00', activity: 'Llegada y bienvenida al campo' },
                      { time: '10:30', activity: 'Primera etapa de la cabalgata' },
                      { time: '12:00', activity: 'Descanso y picoteo en el estero' },
                      { time: '12:45', activity: 'Segunda etapa; término a las 14:30' },
                      { time: '14:15', activity: 'Almuerzo campestre' },
                    ].map((item) => (
                      <li key={item.time} className="relative">
                        <span className="absolute -left-[1.625rem] top-1 h-3 w-3 rounded-full bg-ember border-2 border-cream" />
                        <time className="font-ui text-xs font-semibold text-ember tracking-wide block mb-0.5">
                          {item.time}
                        </time>
                        <p className="font-body text-dark/80 text-sm">{item.activity}</p>
                      </li>
                    ))}
                  </ol>
                </div>

                {/* Tarde: balsa */}
                <div>
                  <span className="inline-flex items-center gap-2 bg-forest text-cream font-ui text-xs tracking-widest uppercase px-4 py-2 mb-6">
                    <Waves size={14} strokeWidth={1.5} aria-hidden="true" />
                    Tarde · Balsa
                  </span>
                  <ol className="relative border-l-2 border-gold/40 space-y-5 pl-6">
                    {[
                      { time: '15:00', activity: 'Zarpe en balsa desde la isla del campo' },
                      { time: 'En el río', activity: '15 km hasta Balsa San Javier, Antilhue (3 a 4 h)' },
                      { time: 'Al llegar', activity: 'Traslado de regreso al campo' },
                    ].map((item) => (
                      <li key={item.time} className="relative">
                        <span className="absolute -left-[1.625rem] top-1 h-3 w-3 rounded-full bg-ember border-2 border-cream" />
                        <time className="font-ui text-xs font-semibold text-ember tracking-wide block mb-0.5">
                          {item.time}
                        </time>
                        <p className="font-body text-dark/80 text-sm">{item.activity}</p>
                      </li>
                    ))}
                  </ol>
                </div>

              </div>

              <p className="mt-8 font-ui text-xs text-muted italic">
                Horarios referenciales; el zarpe y el término pueden variar según el río y el grupo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Incluye / No incluye ── */}
      <section className="py-16 bg-forest/5 border-y border-forest/10 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 max-w-3xl">
            {/* Incluye (card brochure) */}
            <div className="bg-forest text-cream p-6 flex flex-col">
              <h2 className="font-ui text-xs tracking-[0.25em] uppercase text-gold mb-5">
                Incluye
              </h2>
              <ul className="space-y-3 flex-1">
                {[
                  'Cabalgata guiada de mañana',
                  'Picoteo y bebestibles en el estero',
                  'Bajada guiada en balsa (15 km)',
                  'Traslado de regreso al campo',
                  'Almuerzo campestre',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-cream/90">
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
                  'Traslado de llegada al fundo',
                  'Asado acampado (no disponible en este programa)',
                  'Equipamiento especial (el equipamiento de balsa está incluido)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-dark/80">
                    <span className="mt-1 h-2 w-2 rounded-full bg-muted flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 max-w-3xl grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: 'Edad mínima', value: '10 años' },
              { label: 'Operador río', value: 'Fly Fishing Riñihue' },
              { label: 'Grupo', value: '5 – 10 personas' },
              { label: 'Temporada', value: '1 oct – 30 may' },
            ].map((c) => (
              <div key={c.label} className="bg-cream rounded-xl p-4 text-center border border-forest/10">
                <p className="font-ui text-xs tracking-wide uppercase text-muted mb-1">{c.label}</p>
                <p className="font-display text-sm font-bold text-forest">{c.value}</p>
              </div>
            ))}
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
              <input type="hidden" name="programa" value="Del Potrero al Río" />

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
                <label htmlFor="mensaje" className="block font-ui text-sm font-medium text-forest mb-2">
                  Mensaje (opcional)
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  className="w-full rounded-lg border border-forest/20 bg-white px-4 py-3 font-body text-dark placeholder-muted/60 focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember transition-colors duration-200 resize-none"
                  placeholder="Edades de los participantes, requerimientos especiales…"
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
            <li className="text-forest font-medium">Del Potrero al Río</li>
          </ol>
        </div>
      </nav>
    </>
  )
}
