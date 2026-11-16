'use client'

import Image from 'next/image'
import { useEffect, useState } from 'react'

export interface HeroSlide {
  src: string
  alt: string
}

const INTERVAL_MS = 10_000
const FADE_MS = 2_000

/**
 * Crossfade de imágenes del hero sin librería de carrusel.
 *
 * SEO/performance: el SSR emite SOLO la primera imagen (priority +
 * fetchPriority alto → LCP intacto y crawleable). Las siguientes se
 * montan tras la hidratación de forma progresiva: cada slide se agrega
 * al DOM cuando el anterior se activa, así next/image la precarga ~10 s
 * antes de mostrarse en vez de descargar las 8 de golpe. Con
 * prefers-reduced-motion no hay rotación: queda la primera imagen fija.
 */
export function HeroSlider({ slides }: { slides: HeroSlide[] }) {
  const [active, setActive] = useState(0)
  const [rotating, setRotating] = useState(false)

  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    setRotating(true)
    const id = setInterval(() => {
      setActive((current) => (current + 1) % slides.length)
    }, INTERVAL_MS)
    return () => clearInterval(id)
  }, [slides.length])

  return (
    <>
      {slides.map((slide, index) => {
        // SSR / reduced-motion: solo la primera. En rotación, montar hasta
        // la siguiente del active para precargarla con anticipación.
        const mounted = index === 0 || (rotating && index <= active + 1)
        if (!mounted) return null

        return (
          <Image
            key={slide.src}
            src={slide.src}
            alt={slide.alt}
            aria-hidden={index !== active || undefined}
            fill
            priority={index === 0}
            fetchPriority={index === 0 ? 'high' : undefined}
            className="object-cover transition-opacity ease-in-out"
            style={{ opacity: index === active ? 1 : 0, transitionDuration: `${FADE_MS}ms` }}
            sizes="100vw"
          />
        )
      })}
    </>
  )
}
