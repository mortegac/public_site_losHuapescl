'use client'

import { motion, useInView } from 'framer-motion'
import { useRef, useSyncExternalStore } from 'react'

const emptySubscribe = () => () => {}

/** `false` during SSR and the hydration render, `true` right after hydration. */
function useMounted(): boolean {
  return useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false
  )
}

interface RevealOnScrollProps {
  children: React.ReactNode
  className?: string
  /** Delay in seconds before the animation starts once the element is in view */
  delay?: number
}

const EASE: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94]

/**
 * Wraps children in a motion.div that fades up into view when scrolled into
 * the viewport. Isolated as a Client Component so pages remain Server Components.
 *
 * CLS fix: `initial={false}` plus no `animate` target until `mounted`, so the
 * server HTML renders the content visible and in its final position (no inline
 * `opacity:0` / `translateY` → no layout shift, content readable without JS).
 * After hydration, sections still below the viewport are hidden instantly
 * (duration 0, invisible to the user) and fade up when scrolled into view —
 * the animation only ever runs on the client.
 */
export function RevealOnScroll({ children, className, delay = 0 }: RevealOnScrollProps) {
  const ref = useRef<HTMLDivElement>(null)
  const isInView = useInView(ref, { once: true, margin: '0px 0px -60px 0px' })
  const mounted = useMounted()

  return (
    <motion.div
      ref={ref}
      className={className}
      initial={false}
      animate={
        !mounted
          ? undefined
          : isInView
            ? { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE, delay } }
            : { opacity: 0, y: 24, transition: { duration: 0 } }
      }
    >
      {children}
    </motion.div>
  )
}
