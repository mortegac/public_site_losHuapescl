'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'

/**
 * Animated hero content block.
 * Isolated as a Client Component so the parent page stays a Server Component.
 */
export function HeroAnimated() {
  return (
    <motion.div
      className="relative z-10 max-w-2xl"
      initial={{ opacity: 0, y: 28 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
    >
      {/* Eyebrow */}
      <motion.span
        className="block font-ui text-xs font-semibold tracking-[0.22em] uppercase text-ember mb-5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.7 }}
      >
        Río San Pedro · Bosque Nativo · Región de Los Ríos
      </motion.span>

      {/* H1 */}
      <motion.h1
        className="font-display text-[clamp(2.8rem,5.5vw,4.5rem)] font-bold text-cream leading-[1.05] mb-6"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35, duration: 0.8 }}
      >
        Río y montura en el Fundo Los Huapes
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        className="font-body text-[1.15rem] font-light text-cream/82 max-w-xl mb-10 leading-[1.65]"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.7 }}
      >
        Bajadas en balsa, cabalgatas por bosque nativo y asado al palo: cuatro programas para vivir el sur de Chile a otro ritmo.
      </motion.p>

      {/* CTAs */}
      <motion.div
        className="flex flex-wrap gap-4"
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.65, duration: 0.6 }}
      >
        <Link
          href="/programas"
          className="inline-flex items-center font-ui text-sm font-semibold tracking-[0.08em] uppercase bg-ember text-cream px-8 py-4 transition-all duration-300 hover:bg-[#A04520] hover:-translate-y-px focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ember focus-visible:ring-offset-2"
        >
          Ver programas
        </Link>
        <Link
          href="/para-agencias"
          className="inline-flex items-center font-ui text-sm font-semibold tracking-[0.08em] uppercase border border-cream/50 text-cream px-8 py-4 transition-all duration-300 hover:border-cream hover:bg-cream/8 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cream focus-visible:ring-offset-2"
        >
          Para agencias de turismo
        </Link>
      </motion.div>
    </motion.div>
  )
}
