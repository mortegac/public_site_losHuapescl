import type { Metadata } from 'next'
import Link from 'next/link'
import JsonLd from '@/components/JsonLd'
import { getBreadcrumbJsonLd } from '@/lib/jsonld'
import { posts, getAllCategories, type Post } from '../blog/posts'

// ---------------------------------------------------------------------------
// Metadata
// ---------------------------------------------------------------------------

export const metadata: Metadata = {
  title: 'Mapa del sitio',
  description:
    'Todas las páginas del Fundo Los Huapes: programas de cabalgata y balsa, gastronomía de campo, reservas, agencias y artículos del blog por categoría.',
  alternates: { canonical: 'https://www.loshuapes.cl/mapa-del-sitio' },
  openGraph: {
    url: 'https://www.loshuapes.cl/mapa-del-sitio',
    title: 'Mapa del sitio | Fundo Los Huapes',
    description:
      'Índice completo del sitio: programas, gastronomía, entorno, reservas, agencias y blog.',
  },
}

// ---------------------------------------------------------------------------
// Datos: secciones estáticas + blog agrupado por categoría (en build)
// ---------------------------------------------------------------------------

interface SiteLink {
  href: string
  label: string
}

interface SiteSection {
  id: string
  titulo: string
  links: SiteLink[]
}

const seccionesEstaticas: SiteSection[] = [
  {
    id: 'el-fundo',
    titulo: 'El Fundo',
    links: [
      { href: '/', label: 'Inicio' },
      { href: '/gastronomia', label: 'Gastronomía Campestre — Picoteo y Asado Acampado' },
      { href: '/el-entorno', label: 'El Entorno Natural — Río San Pedro y Bosque Nativo' },
    ],
  },
  {
    id: 'programas',
    titulo: 'Programas',
    links: [
      { href: '/programas', label: 'Todos los programas' },
      { href: '/programas/cabalgata-picoteo', label: 'Cabalgata y Picoteo en el Río San Pedro' },
      { href: '/programas/potrero-al-rio', label: 'Del Potrero al Río San Pedro' },
      { href: '/programas/rio-al-potrero', label: 'Del Río San Pedro al Potrero' },
      { href: '/programas/travesia-san-pedro', label: 'Travesía por el Río San Pedro' },
    ],
  },
  {
    id: 'reservas-agencias',
    titulo: 'Reservas y Agencias',
    links: [
      { href: '/reservar', label: 'Reservar' },
      { href: '/para-agencias', label: 'Para Agencias de Turismo' },
      { href: '/preguntas-frecuentes', label: 'Preguntas Frecuentes' },
    ],
  },
  {
    id: 'legal',
    titulo: 'Legal',
    links: [
      { href: '/privacidad', label: 'Política de Privacidad' },
      { href: '/terminos', label: 'Términos y Condiciones' },
    ],
  },
]

/** Posts de una categoría, ordenados del más reciente al más antiguo. */
function getPostsDeCategoria(categoria: string): Post[] {
  return posts
    .filter((post) => post.category === categoria)
    .toSorted((a, b) => b.date.localeCompare(a.date))
}

/** Categorías del blog con sus posts, derivadas de src/app/blog/posts.ts en build. */
const categoriasBlog = getAllCategories().map((categoria) => ({
  categoria,
  posts: getPostsDeCategoria(categoria),
}))

// ---------------------------------------------------------------------------
// UI
// ---------------------------------------------------------------------------

function SitemapLink({ href, label }: SiteLink) {
  return (
    <li>
      <Link
        href={href}
        className="font-body text-base text-dark/70 leading-relaxed underline underline-offset-4 decoration-forest/20 hover:text-ember hover:decoration-ember transition-colors"
      >
        {label}
      </Link>
    </li>
  )
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function MapaDelSitioPage() {
  return (
    <>
      <JsonLd
        data={getBreadcrumbJsonLd([
          { name: 'Inicio', item: 'https://www.loshuapes.cl' },
          { name: 'Mapa del sitio', item: 'https://www.loshuapes.cl/mapa-del-sitio' },
        ])}
      />

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="bg-forest text-cream" aria-labelledby="mapa-heading">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <p className="font-ui text-xs tracking-widest uppercase text-ember mb-4">
            Fundo Los Huapes
          </p>
          <h1
            id="mapa-heading"
            className="font-display text-4xl font-bold leading-tight lg:text-5xl"
          >
            Mapa del sitio
          </h1>
        </div>
      </section>

      {/* ── Contenido ────────────────────────────────────────────────────── */}
      <section className="py-16 lg:py-24 bg-cream">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-[720px]">
            <p className="font-body text-base text-dark/80 leading-relaxed">
              Índice completo de las páginas del sitio: los programas de cabalgata y balsa
              por el Río San Pedro, la gastronomía de campo, la información para reservar
              y los artículos del blog ordenados por categoría.
            </p>

            <div className="mt-12 space-y-10">
              {seccionesEstaticas.map((seccion) => (
                <section key={seccion.id} aria-label={seccion.titulo}>
                  <h2 className="font-display text-xl font-bold text-forest lg:text-2xl">
                    {seccion.titulo}
                  </h2>
                  <ul className="mt-4 space-y-2">
                    {seccion.links.map((link) => (
                      <SitemapLink key={link.href} {...link} />
                    ))}
                  </ul>
                </section>
              ))}

              {/* Blog: índice + subsecciones generadas desde posts.ts */}
              <section aria-label="Blog">
                <h2 className="font-display text-xl font-bold text-forest lg:text-2xl">
                  Blog
                </h2>
                <ul className="mt-4 space-y-2">
                  <SitemapLink href="/blog" label="Todos los artículos" />
                </ul>

                <div className="mt-6 space-y-8">
                  {categoriasBlog.map(({ categoria, posts: postsDeCategoria }) => (
                    <section key={categoria} aria-label={`Blog — ${categoria}`}>
                      <h3 className="font-ui text-xs tracking-widest uppercase text-muted">
                        {categoria}
                      </h3>
                      <ul className="mt-3 space-y-2">
                        {postsDeCategoria.map((post) => (
                          <SitemapLink
                            key={post.slug}
                            href={`/blog/${post.slug}`}
                            label={post.title}
                          />
                        ))}
                      </ul>
                    </section>
                  ))}
                </div>
              </section>
            </div>

            <div className="mt-14 border-t border-forest/10 pt-8">
              <p className="font-body text-sm text-muted leading-relaxed">
                ¿No encuentras lo que buscas? Escríbenos a{' '}
                <a
                  href="mailto:reservas@loshuapes.cl"
                  className="text-ember underline underline-offset-4 hover:text-forest transition-colors"
                >
                  reservas@loshuapes.cl
                </a>{' '}
                o revisa las{' '}
                <Link
                  href="/preguntas-frecuentes"
                  className="text-ember underline underline-offset-4 hover:text-forest transition-colors"
                >
                  preguntas frecuentes
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
