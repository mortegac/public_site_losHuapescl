import type { Metadata } from 'next'
import Link from 'next/link'

// La 404 define robots noindex a nivel de ruta, sobreescribiendo el
// index,follow global del layout. Así solo existe UNA directiva robots
// efectiva para esta página (sin definiciones duplicadas en conflicto).
export const metadata: Metadata = {
  title: 'Página no encontrada',
  robots: {
    index: false,
    follow: false,
  },
}

export default function NotFound() {
  return (
    <section className="mx-auto flex max-w-[720px] flex-col items-center px-6 py-24 text-center">
      <p className="font-ui text-sm uppercase tracking-widest text-ember">Error 404</p>
      <h1 className="mt-4 font-display text-4xl text-forest">Página no encontrada</h1>
      <p className="mt-4 font-body text-base text-muted">
        La página que buscas no existe o fue movida.
      </p>
      <Link
        href="/"
        className="mt-8 inline-block bg-forest px-6 py-3 font-ui text-sm uppercase tracking-wider text-cream"
      >
        Volver al inicio
      </Link>
    </section>
  )
}
