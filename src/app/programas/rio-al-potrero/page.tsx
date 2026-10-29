import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { getTouristTripJsonLd, getFAQJsonLd, getBreadcrumbJsonLd } from '@/lib/jsonld'

const BASE_URL = 'https://loshuapes.cl'
const PROGRAM_URL = `${BASE_URL}/programas/rio-al-potrero`

export function generateMetadata(): Metadata {
  return {
    title: 'Del Río al Potrero — Balsa y Cabalgata Día Completo',
    description:
      'Mañana en balsa por el Río San Pedro (20 km) y tarde a caballo en el Fundo Los Huapes. Día completo desde 5 años. $180.000 por persona. Asado acampado opcional.',
    keywords: [
      'bajada en balsa Río San Pedro 20 km',
      'cabalgata río San Pedro familias',
      'actividades aventura Los Ríos niños',
    ],
    alternates: { canonical: PROGRAM_URL },
    openGraph: {
      title: 'Del Río al Potrero — Balsa y Cabalgata Día Completo | Fundo Los Huapes',
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
      'Porque el tramo de balsa es el más largo —20 km desde Puente Ciruelos—. El zarpe a las 9:30 permite llegar al campo a la hora del almuerzo y tener la tarde para la cabalgata.',
  },
  {
    question: '¿Qué es el snack en el río?',
    answer:
      'Durante la bajada, el equipo de guías sirve un snack en un punto estratégico del recorrido: frutas, bebidas y algo seco para recargar energías.',
  },
  {
    question: '¿Este programa es apto para niños pequeños?',
    answer:
      'Sí, desde los 5 años acompañados por sus padres. La cabalgata es la de turno tarde, que está pensada para grupos mixtos en nivel de experiencia.',
  },
  {
    question: '¿El Programa 03 incluye almuerzo?',
    answer:
      'Sí. Al llegar a la isla del campo, el grupo almuerza antes de iniciar la cabalgata.',
  },
  {
    question: '¿Se puede agregar el asado acampado al final?',
    answer: 'Sí, se puede agregar por $40.000 por persona adicionales.',
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
        <div
          className="absolute inset-0 bg-gradient-to-br from-ember/10 via-transparent to-forest/50 pointer-events-none"
          aria-hidden="true"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <p className="font-ui text-xs tracking-widest uppercase text-ember mb-4">
              Programa 03
            </p>

            <div className="flex flex-wrap gap-2 mb-6">
              <Badge variant="program">Día completo</Badge>
              <Badge variant="program">Balsa 20 km</Badge>
              <Badge variant="highlight">Desde 5 años</Badge>
            </div>

            <h1 className="font-display text-5xl font-bold leading-tight mb-6 lg:text-7xl">
              Del Río al Potrero
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

      {/* ── Itinerario ── */}
      <section className="py-16 bg-cream lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <h2 className="font-display text-3xl font-bold text-forest mb-10 lg:text-4xl">
              Itinerario del día
            </h2>

            <ol className="relative border-l-2 border-forest/20 space-y-8 pl-6">
              {[
                { time: '09:30', activity: 'Zarpe en balsa desde Puente Ciruelos' },
                { time: 'En el río', activity: '20 km por el río San Pedro (3 a 4 h), con snack' },
                { time: '13:30', activity: 'Llegada a la isla del campo y almuerzo' },
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
                  <p className="font-body text-dark/80">{item.activity}</p>
                </li>
              ))}
            </ol>

            <p className="mt-8 font-ui text-xs text-muted italic">
              Horarios referenciales; el zarpe y el término pueden variar según el río y el grupo.
            </p>
          </div>
        </div>
      </section>

      {/* ── Incluye / No incluye ── */}
      <section className="py-16 bg-forest/5 border-y border-forest/10 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 max-w-3xl">
            <div>
              <h2 className="font-display text-2xl font-bold text-forest mb-6">Incluye</h2>
              <ul className="space-y-3">
                {[
                  'Bajada guiada en balsa (20 km)',
                  'Snack en el río',
                  'Almuerzo campestre al llegar al campo',
                  'Cabalgata guiada de tarde',
                  'Picoteo y bebestibles en el estero',
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 font-body text-dark/80">
                    <span className="mt-1 h-2 w-2 rounded-full bg-ember flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h2 className="font-display text-2xl font-bold text-forest mb-6">No incluye</h2>
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
