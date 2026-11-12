import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { getBreadcrumbJsonLd } from '@/lib/jsonld'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Términos y Condiciones',
  description:
    'Términos y condiciones del Fundo Los Huapes: uso del sitio web, proceso de reserva de los programas, condiciones generales de participación y limitaciones de responsabilidad.',
  alternates: { canonical: 'https://www.loshuapes.cl/terminos' },
  openGraph: {
    url: 'https://www.loshuapes.cl/terminos',
    title: 'Términos y Condiciones | Fundo Los Huapes',
    description:
      'Uso del sitio web, proceso de reserva de los programas, condiciones generales de participación y limitaciones de responsabilidad.',
  },
}

// ---------------------------------------------------------------------------
// Secciones
// ---------------------------------------------------------------------------

interface SeccionLegal {
  titulo: string
  parrafos: string[]
}

const secciones: SeccionLegal[] = [
  {
    titulo: '1. Sobre este sitio',
    parrafos: [
      'El sitio web loshuapes.cl presenta los programas de turismo rural del Fundo Los Huapes, ubicado en la ribera del Río San Pedro, Región de Los Ríos, Chile. Al navegar por el sitio o enviar un formulario aceptas estos términos y condiciones.',
    ],
  },
  {
    titulo: '2. Los programas',
    parrafos: [
      'Los programas publicados en el sitio —cabalgatas, bajadas en balsa, gastronomía de campo y la Travesía San Pedro— operan en temporada, del 1 de octubre al 30 de mayo, para grupos de 5 a 10 personas. Los precios publicados son por persona, en pesos chilenos, y pueden actualizarse entre temporadas.',
    ],
  },
  {
    titulo: '3. Proceso de reserva',
    parrafos: [
      'El envío de un formulario a través del sitio constituye una consulta de reserva, no una reserva confirmada. El equipo del fundo responde en menos de 24 horas hábiles para verificar disponibilidad y coordinar los detalles de la visita.',
      'Las condiciones específicas de cada reserva —formas de pago, confirmación, cambios de fecha y cancelación— se coordinan directamente con el equipo del fundo al confirmar la reserva.',
    ],
  },
  {
    titulo: '4. Condiciones de participación',
    parrafos: [
      'Cada programa indica una edad mínima de participación, y los menores de edad deben estar acompañados por sus padres o un adulto responsable. Las actividades son guiadas y el equipamiento de seguridad para la navegación en balsa está incluido.',
      'Las actividades se desarrollan al aire libre y pueden ajustarse o reprogramarse según las condiciones del clima y del río, priorizando siempre la seguridad del grupo.',
    ],
  },
  {
    titulo: '5. Responsabilidad',
    parrafos: [
      'Los participantes deben seguir en todo momento las instrucciones de los guías. Es responsabilidad de cada visitante informar al momento de la reserva cualquier condición de salud, restricción alimentaria u otra circunstancia relevante para la actividad.',
    ],
  },
  {
    titulo: '6. Propiedad intelectual',
    parrafos: [
      'Los textos, fotografías y marcas publicados en este sitio pertenecen al Fundo Los Huapes o a sus aliados y no pueden reproducirse con fines comerciales sin autorización previa.',
    ],
  },
  {
    titulo: '7. Privacidad',
    parrafos: [
      'El tratamiento de los datos personales enviados a través de los formularios del sitio se describe en nuestra Política de Privacidad, conforme a la Ley N.º 19.628.',
    ],
  },
  {
    titulo: '8. Legislación aplicable',
    parrafos: [
      'Estos términos se rigen por las leyes de la República de Chile. Cualquier actualización será publicada en esta misma página.',
    ],
  },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function TerminosPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: 'Inicio', item: 'https://www.loshuapes.cl' },
          { name: 'Términos y Condiciones', item: 'https://www.loshuapes.cl/terminos' },
        ])}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-forest text-cream" aria-labelledby="terminos-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <p className="font-ui text-xs tracking-widest uppercase text-ember mb-4">
            Fundo Los Huapes
          </p>
          <h1
            id="terminos-heading"
            className="font-display text-4xl font-bold leading-tight lg:text-5xl"
          >
            Términos y Condiciones
          </h1>
        </div>
      </section>

      {/* ── Contenido ────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px]">
            <p className="font-body text-base text-dark/80 leading-relaxed">
              Estos términos describen las condiciones generales de uso del sitio web y de
              reserva de los programas del Fundo Los Huapes.
            </p>

            <div className="mt-12 space-y-10">
              {secciones.map((seccion) => (
                <section key={seccion.titulo} aria-label={seccion.titulo}>
                  <h2 className="font-display text-xl font-bold text-forest lg:text-2xl">
                    {seccion.titulo}
                  </h2>
                  {seccion.parrafos.map((parrafo) => (
                    <p
                      key={parrafo.slice(0, 40)}
                      className="mt-4 font-body text-base text-dark/70 leading-relaxed"
                    >
                      {parrafo}
                    </p>
                  ))}
                </section>
              ))}
            </div>

            <div className="mt-14 border-t border-forest/10 pt-8">
              <p className="font-body text-sm text-muted leading-relaxed">
                ¿Tienes dudas sobre estos términos? Escríbenos a{' '}
                <a
                  href="mailto:hola@loshuapes.cl"
                  className="text-ember underline underline-offset-4 hover:text-forest transition-colors"
                >
                  hola@loshuapes.cl
                </a>
                . Revisa también nuestra{' '}
                <Link
                  href="/privacidad"
                  className="text-ember underline underline-offset-4 hover:text-forest transition-colors"
                >
                  política de privacidad
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
