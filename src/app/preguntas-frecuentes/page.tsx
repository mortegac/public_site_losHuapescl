import type { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { getFAQJsonLd, getBreadcrumbJsonLd, type FaqItem } from '@/lib/jsonld'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Preguntas Frecuentes | Cabalgatas, Balsa y Reservas',
  description:
    'Respuestas a las preguntas más frecuentes sobre el Fundo Los Huapes: cabalgatas, bajadas en balsa por el Río San Pedro, gastronomía de campo, edades mínimas, temporada y reservas.',
  alternates: { canonical: 'https://www.loshuapes.cl/preguntas-frecuentes' },
  openGraph: {
    url: 'https://www.loshuapes.cl/preguntas-frecuentes',
    title: 'Preguntas Frecuentes | Fundo Los Huapes',
    description:
      'Cabalgatas, bajadas en balsa por el Río San Pedro, gastronomía de campo, edades mínimas, temporada y reservas: todas las respuestas en un solo lugar.',
    images: [{ url: '/og-image.jpg', width: 1200, height: 630, alt: 'Fundo Los Huapes — preguntas frecuentes' }],
  },
}

// ---------------------------------------------------------------------------
// FAQs agrupadas por tema (recopiladas de las páginas del sitio)
// ---------------------------------------------------------------------------

interface GrupoFaq {
  id: string
  tema: string
  descripcion: string
  faqs: FaqItem[]
}

const grupos: GrupoFaq[] = [
  {
    id: 'ubicacion-temporada',
    tema: 'Ubicación y temporada',
    descripcion: 'Dónde estamos y cuándo visitarnos.',
    faqs: [
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
    ],
  },
  {
    id: 'cabalgatas',
    tema: 'Cabalgatas',
    descripcion: 'Experiencia, duración y edades para montar.',
    faqs: [
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
        question: '¿Puedo hacer solo la cabalgata y no la balsa?',
        answer:
          'Sí. El Programa 01 (Cabalgata y Picoteo) cubre solo la cabalgata con picoteo en el estero.',
      },
    ],
  },
  {
    id: 'rio-balsa',
    tema: 'El río y la balsa',
    descripcion: 'Bajadas en balsa por el Río San Pedro, seguridad y pesca.',
    faqs: [
      {
        question: '¿Se necesita experiencia en kayak o rafting?',
        answer:
          'No. La balsa es guiada y el equipo de Fly Fishing Riñihue se encarga de todo. Solo hay que disfrutar el río.',
      },
      {
        question: '¿Cuánto dura la bajada en balsa?',
        answer:
          'El tramo de 15 km dura entre 3 y 4 horas según el nivel del río y el ritmo del grupo.',
      },
      {
        question: '¿Dónde termina la bajada en balsa?',
        answer:
          'En Balsa San Javier, Antilhue. Desde ahí, el traslado de regreso al campo está incluido en el programa.',
      },
      {
        question: '¿El río es peligroso para los niños?',
        answer:
          'No. Las balsas son guiadas y el equipo de seguridad está incluido. El Programa 03 (Del Río al Potrero) está disponible desde los 5 años.',
      },
      {
        question: '¿Qué tan difícil es la jornada de 8 horas en el río?',
        answer:
          'El nivel es accesible para personas sin experiencia previa. La balsa es guiada, el equipo de seguridad está incluido y los guías de Fly Fishing Riñihue ajustan el ritmo al grupo.',
      },
      {
        question: '¿La pesca con mosca es obligatoria?',
        answer:
          'No. El grupo elige entre una experiencia de pesca con mosca o simplemente disfrutar del río y el paisaje.',
      },
      {
        question: '¿Qué es el snack en el río?',
        answer:
          'Durante la bajada, el equipo de guías sirve un snack en un punto estratégico del recorrido: frutas, bebidas y algo seco para recargar energías.',
      },
    ],
  },
  {
    id: 'gastronomia',
    tema: 'Gastronomía',
    descripcion: 'Picoteo, almuerzo campestre y asado acampado.',
    faqs: [
      {
        question: '¿Qué incluye el picoteo?',
        answer:
          'Arrollado huaso, queso fresco con aceite de oliva y ají verde, pernil, tortillas y pan amasado. Para tomar: cervezas, jugos naturales, bebidas y agua mineral.',
      },
      {
        question: '¿El picoteo está incluido en todos los programas?',
        answer:
          'Sí. El picoteo en el estero Huillinco está incluido en todos los programas con cabalgata (Programas 01, 02, 03 y 04).',
      },
      {
        question: '¿Qué incluye el almuerzo campestre?',
        answer:
          'Empanada, mix de parrilla (tapabarriga, pollo, longaniza), ensalada chilena, papas cocidas y postre de frutas de la estación.',
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
    ],
  },
  {
    id: 'programas-reservas',
    tema: 'Programas y reservas',
    descripcion: 'Qué incluye cada programa y cómo reservar.',
    faqs: [
      {
        question: '¿Se puede agregar el asado acampado?',
        answer:
          'Sí, el asado acampado se puede agregar a cualquier programa por $40.000 adicionales por persona. Lo prepara De la Hoguera con cordero y estomaguillo al palo.',
      },
      {
        question: '¿Por qué el Programa 03 parte más temprano que los demás?',
        answer:
          'Porque el tramo de balsa es el más largo —20 km desde Puente Ciruelos—. El zarpe a las 9:30 permite llegar al campo a la hora del almuerzo y tener la tarde para la cabalgata.',
      },
      {
        question: '¿El Programa 03 incluye almuerzo?',
        answer:
          'Sí. Al llegar a la isla del campo, el grupo almuerza antes de iniciar la cabalgata.',
      },
      {
        question: '¿Cuánto cuesta y qué incluye la Travesía San Pedro?',
        answer:
          '$280.000 por persona. Incluye balsa, cabalgata con picoteo, asado acampado, alojamiento una noche, desayuno campestre y almuerzo en el río. Todo incluido.',
      },
      {
        question: '¿Dónde se duerme durante la noche de la Travesía San Pedro?',
        answer:
          'En el campo, en instalaciones del Fundo Los Huapes. Se confirman los detalles de alojamiento al momento de la reserva.',
      },
      {
        question: '¿Qué se necesita llevar para la noche?',
        answer:
          'Ropa abrigada, bolsa de dormir y artículos de aseo personal. El fundo provee el alojamiento y la gastronomía.',
      },
      {
        question: '¿La Travesía San Pedro es apta para turistas extranjeros?',
        answer:
          'Sí. Es el programa más demandado por turistas nacionales e internacionales, pescadores con mosca y quienes buscan desconectarse completamente.',
      },
    ],
  },
]

const todasLasFaqs: FaqItem[] = grupos.flatMap((grupo) => grupo.faqs)

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PreguntasFrecuentesPage() {
  return (
    <>
      <JsonLd data={getFAQJsonLd(todasLasFaqs)} />
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: 'Inicio', item: 'https://www.loshuapes.cl' },
          { name: 'Preguntas Frecuentes', item: 'https://www.loshuapes.cl/preguntas-frecuentes' },
        ])}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-forest text-cream" aria-labelledby="faq-page-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
          <Badge variant="highlight" className="mb-6">
            Preguntas Frecuentes
          </Badge>
          <h1
            id="faq-page-heading"
            className="font-display text-4xl font-bold leading-tight sm:text-5xl max-w-2xl"
          >
            Resolvemos tus dudas
          </h1>
          <p className="mt-6 font-body text-lg text-cream/80 max-w-xl leading-relaxed">
            Todo lo que necesitas saber antes de visitar el Fundo Los Huapes: cabalgatas,
            río, gastronomía y reservas.
          </p>

          {/* Índice de temas */}
          <nav aria-label="Temas de preguntas frecuentes" className="mt-10">
            <ul className="flex flex-wrap gap-3">
              {grupos.map((grupo) => (
                <li key={grupo.id}>
                  <a
                    href={`#${grupo.id}`}
                    className="inline-block font-ui text-sm text-cream/80 border border-cream/30 rounded-full px-4 py-1.5 hover:border-cream hover:bg-cream/10 transition-colors"
                  >
                    {grupo.tema}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </section>

      {/* ── Grupos de FAQs ───────────────────────────────────────────────── */}
      {grupos.map((grupo, index) => (
        <section
          key={grupo.id}
          id={grupo.id}
          className={`py-16 lg:py-20 ${index % 2 === 0 ? 'bg-cream' : 'bg-forest/5 border-y border-forest/10'}`}
          aria-labelledby={`${grupo.id}-heading`}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2
                id={`${grupo.id}-heading`}
                className="font-display text-2xl font-bold text-forest lg:text-3xl"
              >
                {grupo.tema}
              </h2>
              <p className="mt-2 font-body text-sm text-muted mb-8">{grupo.descripcion}</p>
              <dl className="space-y-8">
                {grupo.faqs.map((faq) => (
                  <div key={faq.question} className="border-b border-forest/10 pb-8 last:border-0 last:pb-0">
                    <dt className="font-ui font-semibold text-forest text-base">{faq.question}</dt>
                    <dd className="mt-3 font-body text-sm text-dark/70 leading-relaxed">{faq.answer}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </section>
      ))}

      {/* ── CTA Final ────────────────────────────────────────────────────── */}
      <section className="py-20 bg-forest text-cream" aria-label="Llamada a la acción">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl font-bold lg:text-4xl">
            ¿No encontraste tu respuesta?
          </h2>
          <p className="mt-5 font-body text-base text-cream/80 max-w-lg mx-auto leading-relaxed">
            Escríbenos y te respondemos en menos de 24 horas hábiles. También puedes revisar
            los detalles de cada programa antes de{' '}
            <Link href="/reservar" className="text-gold underline underline-offset-4 hover:text-cream transition-colors">
              reservar
            </Link>
            .
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="/reservar" variant="primary" size="lg">
              Hacer una reserva
            </Button>
            <Button
              href="/programas"
              variant="ghost"
              size="lg"
              className="text-cream border-cream/40 hover:border-cream hover:bg-cream/10"
            >
              Ver programas
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
