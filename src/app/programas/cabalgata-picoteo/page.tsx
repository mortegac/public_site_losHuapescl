import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { getTouristTripJsonLd, getFAQJsonLd, getBreadcrumbJsonLd } from '@/lib/jsonld'

const BASE_URL = 'https://loshuapes.cl'
const PROGRAM_URL = `${BASE_URL}/programas/cabalgata-picoteo`

export function generateMetadata(): Metadata {
  return {
    title: 'Cabalgata y Picoteo en Bosque Nativo | Media Jornada',
    description:
      'Cabalgata guiada en dos etapas por bosque nativo y potreros del Fundo Los Huapes, con picoteo de campo en el estero. Mañana o tarde. Desde 5 años. $80.000 por persona. Asado acampado opcional.',
    keywords: [
      'cabalgata bosque nativo Los Ríos',
      'cabalgata Río San Pedro Chile',
      'cabalgata media jornada Valdivia',
    ],
    alternates: { canonical: PROGRAM_URL },
    openGraph: {
      title: 'Cabalgata y Picoteo en Bosque Nativo | Media Jornada | Fundo Los Huapes',
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
      'No. Los caballos del fundo están adaptados a todos los niveles, y el guía acompaña a cada jinete durante todo el recorrido.',
  },
  {
    question: '¿Cuánto dura la cabalgata?',
    answer:
      'Aproximadamente 4 horas, incluyendo el picoteo en el estero Huillinco.',
  },
  {
    question: '¿Desde qué edad pueden participar los niños?',
    answer:
      'Desde los 10 años en el turno mañana y desde los 5 años en el turno tarde. Siempre acompañados por sus padres.',
  },
  {
    question: '¿Qué incluye el picoteo?',
    answer:
      'Arrollado huaso, queso fresco con aceite de oliva y ají verde, pernil, tortillas y pan amasado. Para tomar: cervezas, jugos naturales, bebidas y agua mineral.',
  },
  {
    question: '¿Dónde queda el Fundo Los Huapes?',
    answer:
      'En la orilla del Río San Pedro, Región de Los Ríos, Chile. Se confirma el punto de encuentro exacto al momento de la reserva.',
  },
  {
    question: '¿Se puede agregar el asado acampado?',
    answer:
      'Sí, el asado acampado se puede agregar a cualquier programa por $40.000 adicionales por persona. Lo prepara De la Hoguera con cordero y estomaguillo al palo.',
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
        {/* Decorative gradient blob */}
        <div
          className="absolute right-0 top-0 h-full w-1/2 bg-gradient-to-l from-ember/20 to-transparent pointer-events-none"
          aria-hidden="true"
        />

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
              Cabalgata y Picoteo
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

      {/* ── Itinerario ── */}
      <section className="py-16 bg-cream lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-bold text-forest mb-10 lg:text-4xl">
              Itinerario
            </h2>

            <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
              {/* Turno Mañana */}
              <div>
                <h3 className="font-ui text-xs tracking-widest uppercase text-ember mb-6">
                  Turno Mañana
                </h3>
                <ol className="relative border-l-2 border-forest/20 space-y-6 pl-6">
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
                <h3 className="font-ui text-xs tracking-widest uppercase text-ember mb-6">
                  Turno Tarde
                </h3>
                <ol className="relative border-l-2 border-forest/20 space-y-6 pl-6">
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
            </div>

            <p className="mt-8 font-ui text-xs text-muted italic">
              Menores de edad, siempre acompañados por sus padres.
            </p>
          </div>
        </div>
      </section>

      {/* ── Incluye / No incluye ── */}
      <section className="py-16 bg-forest/5 border-y border-forest/10 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 max-w-3xl">
            {/* Incluye */}
            <div>
              <h2 className="font-display text-2xl font-bold text-forest mb-6">Incluye</h2>
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
              <h2 className="font-display text-2xl font-bold text-forest mb-6">No incluye</h2>
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
