'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavLink {
  href: string
  label: string
}

const navLinks: NavLink[] = [
  { href: '/programas', label: 'Programas' },
  { href: '/gastronomia', label: 'Gastronomía' },
  { href: '/el-entorno', label: 'El Entorno' },
  { href: '/para-agencias', label: 'Para Agencias' },
]

export function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 16)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false)
  }, [pathname])

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-sm border-b border-forest/10'
          : 'bg-transparent'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="font-display text-xl font-bold text-forest tracking-tight hover:text-ember transition-colors duration-200 lg:text-2xl"
          >
            Los Huapes
          </Link>

          {/* Desktop navigation */}
          <nav className="hidden lg:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  'font-ui text-sm font-medium tracking-wide transition-colors duration-200 relative group',
                  pathname === link.href
                    ? 'text-ember'
                    : 'text-forest hover:text-ember'
                )}
              >
                {link.label}
                <span
                  className={cn(
                    'absolute -bottom-1 left-0 h-px bg-ember transition-all duration-200',
                    pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                  )}
                />
              </Link>
            ))}
            <Link
              href="/reservar"
              className="font-ui text-sm font-medium bg-ember text-cream px-5 py-2.5 rounded transition-all duration-200 hover:bg-ember/90 hover:shadow-md ml-2"
            >
              Reservar
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            type="button"
            className="lg:hidden p-2 rounded text-forest hover:text-ember hover:bg-forest/5 transition-colors duration-200"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-expanded={menuOpen}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          >
            {menuOpen ? <X size={24} strokeWidth={1.5} /> : <Menu size={24} strokeWidth={1.5} />}
          </button>
        </div>
      </div>

      {/* Mobile overlay menu */}
      <div
        className={cn(
          'fixed inset-0 top-16 z-40 bg-cream flex flex-col transition-all duration-300 lg:hidden',
          menuOpen
            ? 'opacity-100 pointer-events-auto translate-y-0'
            : 'opacity-0 pointer-events-none -translate-y-2'
        )}
        aria-hidden={!menuOpen}
      >
        <nav
          className="flex flex-col gap-1 px-4 pt-6 pb-8"
          aria-label="Menú móvil"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                'font-ui text-lg font-medium px-4 py-4 rounded transition-colors duration-200 border-b border-forest/10',
                pathname === link.href
                  ? 'text-ember bg-ember/5'
                  : 'text-forest hover:text-ember hover:bg-forest/5'
              )}
            >
              {link.label}
            </Link>
          ))}
          <div className="mt-4 px-4">
            <Link
              href="/reservar"
              className="block w-full text-center font-ui text-base font-medium bg-ember text-cream px-5 py-3.5 rounded transition-all duration-200 hover:bg-ember/90"
            >
              Reservar
            </Link>
          </div>
        </nav>

        {/* Footer info inside mobile menu */}
        <div className="mt-auto px-8 pb-10 text-muted font-ui text-sm">
          Río San Pedro · Región de Los Ríos · Chile
        </div>
      </div>
    </header>
  )
}
