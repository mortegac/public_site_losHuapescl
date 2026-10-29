'use client'

import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  /** Delay in seconds before the animation starts once the element is in view */
  delay?: number
}

/**
 * Wraps children in a motion.div that fades up into view when scrolled into
 * the viewport. Isolated as a Client Component so pages remain Server Components.
 */
export function RevealOnScroll({ children, className, delay = 0 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={{ opacity: 0, y: 24 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
      transition={{ duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94], delay }}
    >
      {children}
    </motion.div>
  )
}
