import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Compass, Waves } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { getTouristTripJsonLd, getFAQJsonLd, getBreadcrumbJsonLd } from '@/lib/jsonld'

const BASE_URL = 'https://www.loshuapes.cl'
const PROGRAM_URL = `${BASE_URL}/programas/rio-al-potrero`

export function generateMetadata(): Metadata {
  return {
    title: 'Del Río San Pedro al Potrero — Balsa y Cabalgata Familiar',
    description:
      'Balsa 20 km por el Río San Pedro en la mañana y cabalgata por el fundo en la tarde. Día completo en Los Ríos, desde 5 años. $180.000 por persona.',
    keywords: [
      'bajada en balsa Río San Pedro 20 km',
      'cabalgata río San Pedro familias',
      'actividades aventura Los Ríos niños',
    ],
    alternates: { canonical: PROGRAM_URL },
    openGraph: {
      title: 'Del Río San Pedro al Potrero — Balsa y Cabalgata | Fundo Los Huapes',
      description:
        'Balsa 20 km mañana + cabalgata tarde. Desde 5 años. Asado acampado opcional. $180.000 / persona.',
      url: PROGRAM_URL,
      images: [
        {
          url: `${BASE_URL}/og-rio-al-potrero.jpg`,
          width: 1200,
          height: 630,
          alt: 'Balsa navegando el Río San Pedro tramo Puente Ciruelos, Programa Del Río al Potrero',
        },
      ],
    },
  }
}

const faqs = [
  {
    question: '¿Por qué este programa parte más temprano que los demás?',
    answer:
      'Porque el tramo de balsa es el más largo de los programas: 20 km desde Puente Ciruelos por el Río San Pedro. El zarpe a las 9:30 permite navegar entre 3 y 4 horas, con snack a mitad de recorrido, y llegar a la isla del campo cerca de las 13:30, justo a la hora del almuerzo. Así la tarde queda libre para la cabalgata, que parte a las 15:30 y termina alrededor de las 19:30.',
  },
  {
    question: '¿Qué es el snack en el río?',
    answer:
      'Durante la bajada de 20 km, el equipo de guías de Fly Fishing Riñihue sirve un snack en un punto estratégico del recorrido: frutas, bebidas y algo seco para recargar energías. Es una pausa breve dentro de las 3 a 4 horas de navegación, pensada para llegar bien a la isla del campo, donde espera el almuerzo campestre completo antes de la cabalgata de la tarde. El snack está incluido en el valor del programa.',
  },
  {
    question: '¿Este programa es apto para niños pequeños?',
    answer:
      'Sí, desde los 5 años acompañados por sus padres, lo que lo convierte en el programa de día completo más accesible para familias. La cabalgata es la de turno tarde, pensada para grupos mixtos en nivel de experiencia, y la balsa es guiada por el equipo de Fly Fishing Riñihue. Al reservar, el formulario permite indicar las edades aproximadas de los participantes para preparar la jornada según el grupo.',
  },
  {
    question: '¿El Programa 03 incluye almuerzo?',
    answer:
      'Sí. Al llegar a la isla del campo, cerca de las 13:30, el grupo almuerza antes de iniciar la cabalgata de las 15:30. El almuerzo campestre está incluido en el valor del programa, igual que el snack en el río y el picoteo con bebestibles que se sirve durante el descanso en el estero, a las 17:00. Lo único que no está incluido en comida es el asado acampado, que es opcional al final del día.',
  },
  {
    question: '¿Se puede agregar el asado acampado al final?',
    answer:
      'Sí, se puede agregar por $40.000 adicionales por persona. El asado acampado se sirve alrededor de las 20:00, después del término de la cabalgata a las 19:30, y cierra la jornada completa de río y campo. Se puede marcar directamente en el formulario de reserva al indicar el número de personas. Si no se agrega, el programa termina con la segunda etapa de la cabalgata y el día igual incluye almuerzo, snack y picoteo.',
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
    number: '04',
    href: '/programas/travesia-san-pedro',
    name: 'Travesía San Pedro',
    desc: 'Balsa, pesca con mosca, asado acampado, noche en el campo y cabalgata.',
    price: '$280.000',
    duration: '2 días · 1 noche',
  },
]

const galleryItems = [
  { alt: 'Balsa varada en la orilla del río con paredes de cañón verde', image: '/images/balsa-raft.jpg' },
  { alt: 'Río San Pedro con acantilados rocosos y cielo azul', image: '/images/hero-rio.jpg' },
  { alt: 'Caballos en el potrero al atardecer, Fundo Los Huapes', image: '/images/cabalgata-potrero.jpg' },
  { alt: 'Río San Pedro con agua turquesa verde reflejando el bosque nativo', image: '/images/entorno-rio-verde.jpg' },
  { alt: 'Manada de caballos criollos en potrero con grandes árboles', image: '/images/cabalgata-manada.jpg' },
  { alt: 'Picoteo tradicional chileno con queso, pan y pebre', image: '/images/gastronomia-spread.jpg' },
]

export default function RioAlPotreroPage() {
  const tripJsonLd = getTouristTripJsonLd({
    name: 'Del Río al Potrero',
    description:
      'Balsa 20 km por el tramo largo del Río San Pedro en la mañana y cabalgata guiada por el campo en la tarde. Almuerzo campestre incluido. Apto desde 5 años.',
    url: PROGRAM_URL,
    image: `${BASE_URL}/og-rio-al-potrero.jpg`,
    price: '180000',
    duration: 'P1D',
    minAge: 5,
    groupMin: 5,
    groupMax: 10,
  })

  const faqJsonLd = getFAQJsonLd(faqs)

  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'Inicio', item: BASE_URL },
    { name: 'Programas', item: `${BASE_URL}/programas` },
    { name: 'Del Río al Potrero', item: PROGRAM_URL },
  ])

  return (
    <>
      <JsonLd data={tripJsonLd} />
      <JsonLd data={faqJsonLd} />
      <JsonLd data={breadcrumb} />

      {/* ── Hero ── */}
      <section className="relative bg-forest text-cream overflow-hidden pt-20 pb-16 lg:pt-28 lg:pb-24">
        <div className="absolute inset-0" aria-hidden="true">
          <Image
            src="/images/programa-rio-potrero.jpg"
            alt="Navegando el Río San Pedro en balsa bajo el cielo azul"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest/80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            {/* Badges */}
            <div className="flex flex-wrap items-center gap-2 mb-6">
              <span className="inline-flex items-center rounded-full bg-white text-muted font-ui text-xs tracking-widest uppercase px-4 py-1.5">
                Programa 03
              </span>
              <Badge variant="program">Día completo</Badge>
              <Badge variant="program">Balsa 20 km</Badge>
              <Badge variant="highlight">Desde 5 años</Badge>
            </div>

            <h1 className="font-display text-5xl font-bold leading-tight mb-6 lg:text-7xl">
              Del Río San Pedro al Potrero
            </h1>

            <p className="font-body text-lg text-cream/80 leading-relaxed mb-8 lg:text-xl max-w-2xl">
              El tramo largo del Río San Pedro en la mañana —20 km desde Puente Ciruelos— y la
              cabalgata por el fundo en la tarde. El programa más completo para grupos con niños y
              familias que buscan aventura y naturaleza.
            </p>

            <div className="flex flex-wrap items-baseline gap-4 mb-8">
              <span className="font-display text-4xl font-bold text-ember">$180.000</span>
              <span className="font-ui text-cream/60 text-base">/ persona</span>
              <span className="font-ui text-cream/50 text-sm">
                · Asado acampado +$40.000 / persona
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
            Del Río al Potrero es el programa familiar de día completo del Fundo Los Huapes, apto
            desde los 5 años. La mañana parte a las 9:30 con el zarpe en balsa desde Puente
            Ciruelos: 20 km por el tramo largo del Río San Pedro, con snack a mitad de recorrido y
            entre 3 y 4 horas de navegación guiada por el equipo de Fly Fishing Riñihue. Al llegar a
            la isla del campo, cerca de las 13:30, el grupo almuerza antes de iniciar la cabalgata
            de la tarde, con descanso y picoteo en el estero y término alrededor de las 19:30. El
            valor es de $180.000 por persona e incluye balsa, snack, almuerzo campestre, cabalgata y
            picoteo; el asado acampado se puede agregar por $40.000 adicionales. Los grupos son de 5
            a 10 personas y la temporada va del 1 de octubre al 30 de mayo, en la Región de Los
            Ríos.
          </p>
        </div>
      </section>

      {/* ── Itinerario (layout brochure: foto + timelines) ── */}
      <section className="py-16 bg-cream lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14 items-stretch">
            {/* Foto alta con número de programa */}
            <div className="group relative min-h-[320px] overflow-hidden lg:min-h-0">
              <Image
                src="/images/programa-rio-potrero.jpg"
                alt="Navegando el Río San Pedro en balsa bajo el cielo azul"
                fill
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-forest/15" aria-hidden="true" />
              <div className="absolute bottom-6 left-6" aria-hidden="true">
                <p className="font-display text-[4.5rem] font-bold text-white leading-none drop-shadow-md">
                  03
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
                <Badge variant="program">Balsa 20 km</Badge>
                <Badge variant="highlight">Desde 5 años</Badge>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {/* Mañana · Balsa */}
                <div>
                  <span className="inline-flex items-center gap-2 bg-forest text-cream font-ui text-xs tracking-widest uppercase px-4 py-2 mb-6">
                    <Waves size={14} strokeWidth={1.5} aria-hidden="true" />
                    Mañana · Balsa
                  </span>
                  <ol className="relative border-l-2 border-gold/40 space-y-5 pl-6">
                    {[
                      { time: '09:30', activity: 'Zarpe en balsa desde Puente Ciruelos' },
                      { time: 'En el río', activity: '20 km por el río San Pedro (3 a 4 h), con snack' },
                      { time: '13:30', activity: 'Llegada a la isla del campo y almuerzo' },
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

                {/* Tarde · Cabalgata */}
                <div>
                  <span className="inline-flex items-center gap-2 bg-forest text-cream font-ui text-xs tracking-widest uppercase px-4 py-2 mb-6">
                    <Compass size={14} strokeWidth={1.5} aria-hidden="true" />
                    Tarde · Cabalgata
                  </span>
                  <ol className="relative border-l-2 border-gold/40 space-y-5 pl-6">
                    {[
                      { time: '15:30', activity: 'Primera etapa de la cabalgata' },
                      { time: '17:00', activity: 'Descanso y picoteo en el estero' },
                      { time: '17:45', activity: 'Segunda etapa; término a las 19:30' },
                      { time: '20:00', activity: 'Asado acampado (opcional)' },
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
                  'Bajada guiada en balsa (20 km)',
                  'Snack en el río',
                  'Almuerzo campestre al llegar al campo',
                  'Cabalgata guiada de tarde',
                  'Picoteo y bebestibles en el estero',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-sm text-cream/90">
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-gold flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
              <p className="mt-6 bg-ember px-4 py-3 font-ui text-xs font-semibold text-cream text-center leading-snug">
                Asado acampado: +$40.000 por persona
              </p>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-forest mb-6">¿Qué no incluye?</h2>
              <ul className="space-y-3">
                {[
                  'Traslado hacia Puente Ciruelos (punto de zarpe)',
                  'Asado acampado (opcional, +$40.000 / persona)',
                  'Alojamiento',
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
              { label: 'Edad mínima', value: '5 años' },
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
                className="group rounded-2xl overflow-hidden aspect-[4/3] relative"
              >
                <Image
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
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

          <div className="mt-10 max-w-4xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-forest/10 bg-forest/5 p-6">
            <p className="font-body text-dark/80">
              ¿Quieres cerrar la jornada con un asado al palo junto al río?
            </p>
            <Button href="/gastronomia" variant="secondary" size="md" className="flex-shrink-0">
              Agrega el asado acampado
            </Button>
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
              <input type="hidden" name="programa" value="Del Río al Potrero" />

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
                  <label htmlFor="edades" className="block font-ui text-sm font-medium text-forest mb-2">
                    Edades aproximadas de los participantes
                  </label>
                  <input
                    id="edades"
                    name="edades"
                    type="text"
                    className="w-full rounded-lg border border-forest/20 bg-white px-4 py-3 font-body text-dark placeholder-muted/60 focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember transition-colors duration-200"
                    placeholder="ej: 7, 9, 35, 38 años"
                  />
                </div>
              </div>

              <div>
                <label className="block font-ui text-sm font-medium text-forest mb-2">
                  ¿Agregar asado acampado? (+$40.000 / persona)
                </label>
                <div className="flex gap-6">
                  <label className="flex items-center gap-2 font-body text-dark cursor-pointer">
                    <input type="radio" name="asado" value="si" className="accent-ember" />
                    Sí
                  </label>
                  <label className="flex items-center gap-2 font-body text-dark cursor-pointer">
                    <input type="radio" name="asado" value="no" defaultChecked className="accent-ember" />
                    No
                  </label>
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
                  placeholder="Requerimientos especiales, preguntas sobre el programa…"
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
            <li className="text-forest font-medium">Del Río al Potrero</li>
          </ol>
        </div>
      </nav>
    </>
  )
}
