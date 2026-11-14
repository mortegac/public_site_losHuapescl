import Link from 'next/link'

/**
 * Cinta editorial con los 4 programas en marquee infinito.
 *
 * Server Component, cero JS de cliente: la animación es CSS pura
 * (keyframes `marquee-scroll` en globals.css). El track contiene el
 * contenido duplicado — la segunda copia lleva aria-hidden para que
 * crawlers y lectores de pantalla solo vean una vez cada programa —
 * y se desplaza con translateX(-50%) en loop lineal (~35s), pausado
 * al hacer hover. Con prefers-reduced-motion la copia se oculta y la
 * fila queda estática con overflow-x auto.
 */

interface MarqueeProgram {
  number: string
  name: string
  detail: string
  price: string
  href: string
}

const PROGRAMS: MarqueeProgram[] = [
  {
    number: '01',
    name: 'Cabalgata y Picoteo',
    detail: 'Media jornada',
    price: '$80.000',
    href: '/programas/cabalgata-picoteo',
  },
  {
    number: '02',
    name: 'Del Potrero al Río',
    detail: 'Día completo + balsa 15 km',
    price: '$180.000',
    href: '/programas/potrero-al-rio',
  },
  {
    number: '03',
    name: 'Del Río al Potrero',
    detail: 'Día completo + balsa 20 km',
    price: '$180.000',
    href: '/programas/rio-al-potrero',
  },
  {
    number: '04',
    name: 'Travesía San Pedro',
    detail: '2 días · 1 noche',
    price: '$280.000',
    href: '/programas/travesia-san-pedro',
  },
]

function MarqueeItems({ hidden = false }: { hidden?: boolean }) {
  return (
    <div
      aria-hidden={hidden || undefined}
      className={`flex shrink-0 items-baseline${hidden ? ' marquee-copy' : ''}`}
    >
      {PROGRAMS.map((program) => (
        <span key={program.href} className="flex shrink-0 items-baseline">
          <Link
            href={program.href}
            tabIndex={hidden ? -1 : undefined}
            className="group flex items-baseline gap-3 whitespace-nowrap px-5 py-1"
          >
            <span className="font-ui text-xs font-semibold tracking-widest text-ember">
              {program.number}
            </span>
            <span className="font-display text-base text-cream transition-colors duration-200 group-hover:text-gold">
              {program.name}
            </span>
            <span className="font-ui text-xs text-cream/60">{program.detail}</span>
            <span className="font-ui text-xs tracking-wide text-gold">{program.price}</span>
          </Link>
          <span aria-hidden="true" className="px-1 text-[10px] text-gold/70">
            ✦
          </span>
        </span>
      ))}
    </div>
  )
}

export default function ProgramsMarquee() {
  return (
    <nav
      aria-label="Programas del Fundo Los Huapes"
      className="marquee-container overflow-hidden border-y border-gold/30 bg-forest py-3"
    >
      <div className="marquee-track flex w-max items-baseline">
        <MarqueeItems />
        <MarqueeItems hidden />
      </div>
    </nav>
  )
}
