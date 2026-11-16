import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Sunrise, MoonStar } from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { getTouristTripJsonLd, getFAQJsonLd, getBreadcrumbJsonLd } from '@/lib/jsonld'

const BASE_URL = 'https://www.loshuapes.cl'
const PROGRAM_URL = `${BASE_URL}/programas/cabalgata-picoteo`

export function generateMetadata(): Metadata {
  return {
    title: 'Cabalgata y Picoteo en el Río San Pedro | Media Jornada',
    description:
      'Cabalgata guiada por bosque nativo junto al Río San Pedro, Los Ríos, con picoteo en el estero Huillinco. Media jornada, desde 5 años. $80.000 por persona.',
    keywords: [
      'cabalgata bosque nativo Los Ríos',
      'cabalgata Río San Pedro Chile',
      'cabalgata media jornada Valdivia',
    ],
    alternates: { canonical: PROGRAM_URL },
    openGraph: {
      title: 'Cabalgata y Picoteo en el Río San Pedro | Fundo Los Huapes',
      description:
        'Cabalgata guiada por bosque nativo y potreros con picoteo en el estero Huillinco. $80.000 / persona.',
      url: PROGRAM_URL,
      images: [
        {
          url: `${BASE_URL}/og-cabalgata-picoteo.jpg`,
          width: 1200,
          height: 630,
          alt: 'Cabalgata por bosque nativo en el Fundo Los Huapes',
        },
      ],
    },
  }
}

const faqs = [
  {
    question: '¿Se necesita experiencia previa en equitación?',
    answer:
      'No. Los caballos del fundo están adaptados a todos los niveles y el guía acompaña a cada jinete durante todo el recorrido. La cabalgata se hace en dos etapas —primero bosque nativo y luego potreros— con un alto intermedio en el estero Huillinco para el picoteo, lo que permite descansar y retomar con calma. Los grupos son de 5 a 10 personas, ideales para que el guía pueda atender a cada participante.',
  },
  {
    question: '¿Cuánto dura la cabalgata?',
    answer:
      'Aproximadamente 4 horas en total, incluyendo el picoteo en el estero Huillinco. En el turno mañana, la cabalgata parte a las 10:30 y termina a las 14:30, con el picoteo a las 12:00; en el turno tarde, parte a las 15:30 y termina a las 19:30, con el picoteo a las 17:00. En ambos casos, la llegada y bienvenida es media hora antes del inicio y, si se agrega el asado acampado, la jornada se extiende después del término.',
  },
  {
    question: '¿Desde qué edad pueden participar los niños?',
    answer:
      'Desde los 10 años en el turno mañana y desde los 5 años en el turno tarde, siempre acompañados por sus padres. Por eso, para familias con niños pequeños el turno tarde es la opción indicada: parte a las 15:30, incluye el picoteo en el estero a las 17:00 y termina a las 19:30. Los grupos son de 5 a 10 personas, por lo que conviene indicar las edades de los participantes al momento de reservar.',
  },
  {
    question: '¿Qué incluye el picoteo?',
    answer:
      'El picoteo de campo se sirve a mitad del recorrido, en el estero Huillinco, a la sombra. Incluye arrollado huaso, queso fresco con aceite de oliva y ají verde, pernil, tortillas y pan amasado. Para tomar hay cervezas, jugos naturales, bebidas y agua mineral, todo incluido en el precio del programa. Es la pausa entre la primera y la segunda etapa de la cabalgata: alrededor de 45 minutos para reponer energía antes de volver a montar.',
  },
  {
    question: '¿Dónde queda el Fundo Los Huapes?',
    answer:
      'El Fundo Los Huapes está en la orilla del Río San Pedro, en la Región de Los Ríos, Chile. El punto de encuentro exacto se confirma al momento de la reserva, junto con las indicaciones de llegada. El traslado hasta el fundo no está incluido en el programa, así que cada grupo llega por sus propios medios a la hora de bienvenida: 10:00 para el turno mañana y 15:00 para el turno tarde.',
  },
  {
    question: '¿Se puede agregar el asado acampado?',
    answer:
      'Sí. El asado acampado se puede agregar a este programa por $40.000 adicionales por persona y lo prepara De la Hoguera, con cordero y estomaguillo al palo. Se sirve al término de la cabalgata: a las 15:00 en el turno mañana o a las 20:00 en el turno tarde. Puedes marcarlo directamente en el formulario de reserva. Si prefieres solo la cabalgata, el programa incluye de todas formas el picoteo y los bebestibles en el estero.',
  },
]

const otherPrograms = [
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
  { alt: 'Manada de caballos en potreros verdes del fundo', image: '/images/experiencia-caballos.jpg' },
  { alt: 'Caballos descansando bajo la sombra de árboles con campo al fondo', image: '/images/cabalgata-bosque.jpg' },
  { alt: 'Caballos pastando entre flores silvestres y árboles nativos en verano', image: '/images/cabalgata-verano.jpg' },
  { alt: 'Manada de caballos criollos en potrero con grandes árboles nativos', image: '/images/cabalgata-manada.jpg' },
  { alt: 'Picoteo tradicional chileno con queso, pan amasado y pebre en el estero', image: '/images/gastronomia-spread.jpg' },
]

export default function CabalgataPickoteoPage() {
  const tripJsonLd = getTouristTripJsonLd({
    name: 'Cabalgata y Picoteo',
    description:
      'Cabalgata guiada en dos etapas por bosque nativo y potreros del Fundo Los Huapes, con picoteo de campo en el estero Huillinco. Media jornada, mañana o tarde.',
    url: PROGRAM_URL,
    image: `${BASE_URL}/og-cabalgata-picoteo.jpg`,
    price: '80000',
    duration: 'PT4H',
    minAge: 5,
    groupMin: 5,
    groupMax: 10,
  })

  const faqJsonLd = getFAQJsonLd(faqs)

  const breadcrumb = getBreadcrumbJsonLd([
    { name: 'Inicio', item: BASE_URL },
    { name: 'Programas', item: `${BASE_URL}/programas` },
    { name: 'Cabalgata y Picoteo', item: PROGRAM_URL },
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
            src="/images/cabalgata-bosque.jpg"
            alt=""
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-forest/80" />
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-ui text-xs tracking-widest uppercase text-ember mb-4">
              Programa 01
            </p>

            {/* Badges */}
            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="program">Media jornada</Badge>
              <Badge variant="program">Mañana o tarde</Badge>
              <Badge variant="program">Asado opcional</Badge>
            </div>

            <h1 className="font-display text-5xl font-bold leading-tight mb-6 lg:text-7xl">
              Cabalgata y Picoteo en el Río San Pedro
            </h1>

            <p className="font-body text-lg text-cream/80 leading-relaxed mb-8 lg:text-xl max-w-2xl">
              Una cabalgata guiada por dos etapas: bosque nativo y potreros del campo. A mitad del
              recorrido, un alto en el estero Huillinco para picar arrollado huaso, queso fresco y
              pan amasado, con cervezas y jugos a la sombra.
            </p>

            {/* Price */}
            <div className="flex flex-wrap items-baseline gap-4 mb-8">
              <span className="font-display text-4xl font-bold text-ember">$80.000</span>
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
            Cabalgata y Picoteo es el programa de media jornada del Fundo Los Huapes: una cabalgata
            guiada en dos etapas por bosque nativo y potreros, con un alto en el estero Huillinco
            para un picoteo de campo con arrollado huaso, queso fresco, pernil, tortillas y pan
            amasado, acompañado de cervezas, jugos naturales, bebidas y agua mineral. El recorrido
            dura aproximadamente 4 horas y se ofrece en turno mañana o tarde. El valor es de $80.000
            por persona e incluye la cabalgata guiada, el picoteo y los bebestibles; el asado
            acampado se puede agregar por $40.000 adicionales por persona. Los grupos son de 5 a 10
            personas, con edad mínima de 10 años en la mañana y 5 años en la tarde, siempre
            acompañados por sus padres. El fundo está en la orilla del Río San Pedro, Región de Los
            Ríos, Chile, y la temporada va del 1 de octubre al 30 de mayo.
          </p>
        </div>
      </section>

      {/* ── Itinerario (layout brochure: foto + timelines + incluye) ── */}
      <section className="py-16 bg-cream lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[2fr_3fr] lg:gap-14 items-stretch">
            {/* Foto alta con número de programa */}
            <div className="relative min-h-[320px] overflow-hidden lg:min-h-0">
              <Image
                src="/images/programa-cabalgata.jpg"
                alt="Jinetes a caballo entre el bosque nativo del Fundo Los Huapes"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-forest/15" aria-hidden="true" />
              <div className="absolute bottom-6 left-6" aria-hidden="true">
                <p className="font-display text-[4.5rem] font-bold text-white leading-none drop-shadow-md">
                  01
                </p>
                <p className="font-ui text-xs tracking-[0.3em] uppercase text-cream/90 mt-1">
                  Programa
                </p>
              </div>
            </div>

            {/* Contenido: título, badges, timelines e incluye */}
            <div>
              <h2 className="font-display text-3xl font-bold text-forest mb-6 lg:text-4xl">
                ¿Cuánto dura y cuál es el itinerario?
              </h2>

              <div className="flex flex-wrap gap-2 mb-8">
                <Badge variant="program">Media jornada</Badge>
                <Badge variant="program">Mañana o tarde</Badge>
                <Badge variant="program">Asado opcional</Badge>
              </div>

              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 xl:grid-cols-[1fr_1fr_1.15fr]">
                {/* Turno Mañana */}
                <div>
                  <span className="inline-flex items-center gap-2 bg-forest text-cream font-ui text-xs tracking-widest uppercase px-4 py-2 mb-6">
                    <Sunrise size={14} strokeWidth={1.5} aria-hidden="true" />
                    Mañana
                  </span>
                  <ol className="relative border-l-2 border-gold/40 space-y-5 pl-6">
                    {[
                      { time: '10:00', activity: 'Llegada y bienvenida' },
                      { time: '10:30', activity: 'Inicio de la cabalgata' },
                      { time: '12:00', activity: 'Picoteo en el estero' },
                      { time: '12:45', activity: 'Segunda etapa' },
                      { time: '14:30', activity: 'Término de la cabalgata' },
                      { time: '15:00', activity: 'Asado acampado (opcional)' },
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

                {/* Turno Tarde */}
                <div>
                  <span className="inline-flex items-center gap-2 bg-forest text-cream font-ui text-xs tracking-widest uppercase px-4 py-2 mb-6">
                    <MoonStar size={14} strokeWidth={1.5} aria-hidden="true" />
                    Tarde
                  </span>
                  <ol className="relative border-l-2 border-gold/40 space-y-5 pl-6">
                    {[
                      { time: '15:00', activity: 'Llegada y bienvenida' },
                      { time: '15:30', activity: 'Inicio de la cabalgata' },
                      { time: '17:00', activity: 'Picoteo en el estero' },
                      { time: '17:45', activity: 'Segunda etapa' },
                      { time: '19:30', activity: 'Término de la cabalgata' },
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

                {/* Card Incluye */}
                <div className="bg-forest text-cream p-6 flex flex-col sm:col-span-2 xl:col-span-1">
                  <h3 className="font-ui text-xs tracking-[0.25em] uppercase text-gold mb-5">
                    Incluye
                  </h3>
                  <ul className="space-y-3 flex-1">
                    {[
                      'Cabalgata guiada en dos etapas',
                      'Picoteo de campo en el estero',
                      'Cervezas, jugos naturales, bebidas y agua mineral',
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
              </div>

              <p className="mt-8 font-ui text-xs text-muted italic">
                Menores de edad, siempre acompañados por sus padres.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Incluye / No incluye ── */}
      <section className="py-16 bg-forest/5 border-y border-forest/10 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 max-w-3xl">
            {/* Incluye */}
            <div>
              <h2 className="font-display text-2xl font-bold text-forest mb-6">
                ¿Qué incluye el precio?
              </h2>
              <ul className="space-y-3">
                {[
                  'Cabalgata guiada en dos etapas',
                  'Picoteo de campo en el estero Huillinco',
                  'Cervezas, jugos naturales, bebidas y agua mineral',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-dark/80">
                    <span className="mt-1 h-2 w-2 rounded-full bg-ember flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* No incluye */}
            <div>
              <h2 className="font-display text-2xl font-bold text-forest mb-6">¿Qué no incluye?</h2>
              <ul className="space-y-3">
                {[
                  'Traslado al fundo',
                  'Asado acampado (opcional, +$40.000 / persona)',
                  'Almuerzo (disponible en Programas 02, 03 y 04)',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-dark/80">
                    <span className="mt-1 h-2 w-2 rounded-full bg-muted flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Conditions */}
          <div className="mt-10 max-w-3xl grid grid-cols-2 gap-4 sm:grid-cols-4">
            {[
              { label: 'Edad mínima mañana', value: '10 años' },
              { label: 'Edad mínima tarde', value: '5 años' },
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

          <div className="mt-10 max-w-4xl flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between rounded-xl border border-forest/10 bg-forest/5 p-6">
            <p className="font-body text-dark/80">
              ¿Quieres cerrar la jornada con cordero y estomaguillo al palo de De la Hoguera?
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

            <form
              action="/api/reservas"
              method="POST"
              className="space-y-6"
            >
              <input type="hidden" name="programa" value="Cabalgata y Picoteo" />

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="nombre"
                    className="block font-ui text-sm font-medium text-forest mb-2"
                  >
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
                  <label
                    htmlFor="email"
                    className="block font-ui text-sm font-medium text-forest mb-2"
                  >
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
                  <label
                    htmlFor="telefono"
                    className="block font-ui text-sm font-medium text-forest mb-2"
                  >
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
                  <label
                    htmlFor="turno"
                    className="block font-ui text-sm font-medium text-forest mb-2"
                  >
                    Turno preferido
                  </label>
                  <select
                    id="turno"
                    name="turno"
                    className="w-full rounded-lg border border-forest/20 bg-white px-4 py-3 font-body text-dark focus:border-ember focus:outline-none focus:ring-1 focus:ring-ember transition-colors duration-200"
                  >
                    <option value="">Selecciona turno</option>
                    <option value="manana">Mañana</option>
                    <option value="tarde">Tarde</option>
                    <option value="indistinto">Indistinto</option>
                  </select>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="fecha"
                    className="block font-ui text-sm font-medium text-forest mb-2"
                  >
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

                <div>
                  <label
                    htmlFor="personas"
                    className="block font-ui text-sm font-medium text-forest mb-2"
                  >
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
                <label
                  htmlFor="mensaje"
                  className="block font-ui text-sm font-medium text-forest mb-2"
                >
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
                  del Fundo Los Huapes.{' '}
                  <span className="text-ember">*</span>
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
            <li>
              <Link href="/" className="hover:text-forest transition-colors">Inicio</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li>
              <Link href="/programas" className="hover:text-forest transition-colors">Programas</Link>
            </li>
            <li aria-hidden="true">›</li>
            <li className="text-forest font-medium">Cabalgata y Picoteo</li>
          </ol>
        </div>
      </nav>
    </>
  )
}
