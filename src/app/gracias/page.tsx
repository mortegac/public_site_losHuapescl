import type { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'

export const metadata: Metadata = {
  title: 'Solicitud enviada',
  robots: { index: false, follow: false },
}

const ERROR_MESSAGES: Record<string, string> = {
  datos: 'Faltan campos obligatorios o el formato es inválido. Vuelve atrás y revisa el formulario.',
  limite: 'Recibimos demasiadas solicitudes seguidas. Espera unos minutos e intenta de nuevo.',
  envio: 'No pudimos enviar tu solicitud. Intenta de nuevo o escríbenos directo a hola@loshuapes.cl.',
}

function SuccessMessage() {
  return (
    <>
      <h1 className="font-display text-3xl font-bold text-forest mb-4">
        ¡Gracias! Recibimos tu solicitud
      </h1>
      <p className="font-body text-lg text-dark/80 mb-8">
        Te responderemos por email o WhatsApp para confirmar disponibilidad y coordinar los
        detalles de tu visita al Fundo Los Huapes.
      </p>
    </>
  )
}

async function StatusMessage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  const { error } = await searchParams
  if (!error) return <SuccessMessage />

  const errorMessage = ERROR_MESSAGES[error] ?? ERROR_MESSAGES.envio
  return (
    <>
      <h1 className="font-display text-3xl font-bold text-forest mb-4">
        No pudimos procesar tu solicitud
      </h1>
      <p className="font-body text-lg text-dark/80 mb-8">{errorMessage}</p>
    </>
  )
}

export default function GraciasPage({
  searchParams,
}: {
  searchParams: Promise<{ error?: string }>
}) {
  return (
    <main className="mx-auto flex min-h-[60vh] max-w-[720px] flex-col items-start justify-center px-6 py-24">
      <Suspense fallback={<SuccessMessage />}>
        <StatusMessage searchParams={searchParams} />
      </Suspense>
      <div className="flex gap-4 font-ui text-sm">
        <Link
          href="/programas"
          className="bg-ember px-6 py-3 font-semibold text-cream transition-colors hover:bg-ember/90"
        >
          Ver programas
        </Link>
        <Link
          href="/"
          className="border border-forest px-6 py-3 font-semibold text-forest transition-colors hover:bg-forest hover:text-cream"
        >
          Volver al inicio
        </Link>
      </div>
    </main>
  )
}
