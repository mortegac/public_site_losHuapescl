import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { getBreadcrumbJsonLd } from '@/lib/jsonld'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Política de Privacidad',
  description:
    'Política de privacidad del Fundo Los Huapes: qué datos personales recopilamos a través de los formularios de reserva, cómo los usamos y cuáles son tus derechos según la Ley 19.628.',
  alternates: { canonical: 'https://www.loshuapes.cl/privacidad' },
  openGraph: {
    url: 'https://www.loshuapes.cl/privacidad',
    title: 'Política de Privacidad | Fundo Los Huapes',
    description:
      'Qué datos personales recopilamos a través de los formularios de reserva, cómo los usamos y cuáles son tus derechos según la Ley 19.628.',
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
    titulo: '1. Responsable del tratamiento',
    parrafos: [
      'El sitio web loshuapes.cl es operado por Fundo Los Huapes, operador de turismo rural ubicado en la ribera del Río San Pedro, Región de Los Ríos, Chile. Para cualquier consulta relacionada con esta política puedes escribir a reservas@loshuapes.cl.',
    ],
  },
  {
    titulo: '2. Qué datos recopilamos',
    parrafos: [
      'Recopilamos únicamente los datos que tú nos entregas voluntariamente a través de los formularios de reserva y de contacto comercial del sitio: nombre, correo electrónico, teléfono, fecha tentativa de visita, número de personas y los comentarios que decidas incluir. En el caso de agencias de turismo, también el nombre de la agencia.',
      'Este sitio no utiliza los datos de los formularios para crear perfiles ni los almacena en bases de datos propias: las solicitudes se envían por correo electrónico al equipo del fundo para gestionar tu reserva o consulta.',
    ],
  },
  {
    titulo: '3. Para qué usamos tus datos',
    parrafos: [
      'Usamos los datos exclusivamente para responder tu solicitud: confirmar disponibilidad, coordinar fechas y horarios, y entregarte la información necesaria para tu visita. No vendemos, arrendamos ni cedemos tus datos personales a terceros con fines comerciales.',
    ],
  },
  {
    titulo: '4. Base legal',
    parrafos: [
      'El tratamiento de datos personales se realiza conforme a la Ley N.º 19.628 sobre Protección de la Vida Privada de Chile y su normativa complementaria. La base del tratamiento es tu consentimiento, que otorgas al enviar el formulario y aceptar esta política.',
    ],
  },
  {
    titulo: '5. Conservación de los datos',
    parrafos: [
      'Conservamos la correspondencia asociada a tu solicitud solo durante el tiempo necesario para gestionar la reserva y las comunicaciones posteriores razonables. Puedes solicitar su eliminación en cualquier momento.',
    ],
  },
  {
    titulo: '6. Tus derechos',
    parrafos: [
      'De acuerdo con la Ley 19.628, tienes derecho a solicitar el acceso, la rectificación, la cancelación o el bloqueo de tus datos personales. Para ejercer cualquiera de estos derechos, escríbenos a reservas@loshuapes.cl indicando tu solicitud.',
    ],
  },
  {
    titulo: '7. Servicios de terceros',
    parrafos: [
      'Para el envío de los formularios utilizamos un proveedor de correo transaccional que procesa los datos únicamente con el fin de entregar el mensaje al equipo del fundo. Si nos contactas por WhatsApp, la comunicación se rige además por las políticas de privacidad de esa plataforma.',
    ],
  },
  {
    titulo: '8. Cambios a esta política',
    parrafos: [
      'Podemos actualizar esta política para reflejar cambios en el sitio o en la normativa aplicable. La versión vigente estará siempre publicada en esta página.',
    ],
  },
]

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function PrivacidadPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: 'Inicio', item: 'https://www.loshuapes.cl' },
          { name: 'Política de Privacidad', item: 'https://www.loshuapes.cl/privacidad' },
        ])}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-forest text-cream" aria-labelledby="privacidad-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <p className="font-ui text-xs tracking-widest uppercase text-ember mb-4">
            Fundo Los Huapes
          </p>
          <h1
            id="privacidad-heading"
            className="font-display text-4xl font-bold leading-tight lg:text-5xl"
          >
            Política de Privacidad
          </h1>
        </div>
      </section>

      {/* ── Contenido ────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px]">
            <p className="font-body text-base text-dark/80 leading-relaxed">
              En el Fundo Los Huapes valoramos tu confianza. Esta política explica, de forma
              simple, qué datos personales recopilamos a través de este sitio web, para qué
              los usamos y cómo puedes ejercer tus derechos.
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
                ¿Tienes dudas sobre esta política? Escríbenos a{' '}
                <a
                  href="mailto:reservas@loshuapes.cl"
                  className="text-ember underline underline-offset-4 hover:text-forest transition-colors"
                >
                  reservas@loshuapes.cl
                </a>
                . Consulta también nuestros{' '}
                <Link
                  href="/terminos"
                  className="text-ember underline underline-offset-4 hover:text-forest transition-colors"
                >
                  términos y condiciones
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
