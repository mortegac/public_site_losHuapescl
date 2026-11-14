import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/Badge'
import JsonLd from '@/components/JsonLd'
import { getBreadcrumbJsonLd, getItemListJsonLd } from '@/lib/jsonld'
import { posts, getAllCategories, BLOG_BASE_URL } from './posts'

const BLOG_URL = `${BLOG_BASE_URL}/blog`

export const metadata: Metadata = {
  title: 'Blog',
  description:
    'Historias y guías del Fundo Los Huapes: cabalgatas por bosque nativo, bajadas en balsa por el Río San Pedro y gastronomía de campo en Los Ríos, Chile.',
  alternates: { canonical: BLOG_URL },
  openGraph: {
    title: 'Blog | Fundo Los Huapes',
    description:
      'Cabalgatas por bosque nativo, bajadas en balsa por el Río San Pedro y gastronomía de campo en la Región de Los Ríos, Chile.',
    url: BLOG_URL,
  },
}

/** Avatar con iniciales del fundo (no hay foto de autor en el repo). */
function AuthorAvatar() {
  return (
    <span
      aria-hidden="true"
      className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-forest font-ui text-xs font-semibold text-cream"
    >
      LH
    </span>
  )
}

export default function BlogPage() {
  // Más recientes primero (fechas ISO → orden lexicográfico = cronológico).
  // toSorted: copia ordenada, sin mutar `posts`.
  const sortedPosts = posts.toSorted((a, b) => b.date.localeCompare(a.date))
  const [featured] = sortedPosts
  const categories = getAllCategories()

  const itemListJsonLd = getItemListJsonLd(
    sortedPosts.map((post) => ({ name: post.title, url: `${BLOG_URL}/${post.slug}` }))
  )

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', item: BLOG_BASE_URL },
    { name: 'Blog', item: BLOG_URL },
  ])

  return (
    <>
      <JsonLd data={itemListJsonLd} />
      <JsonLd data={breadcrumbJsonLd} />

      <section className="bg-cream py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ── Encabezado ── */}
          <h1 className="font-display text-4xl font-bold text-forest lg:text-6xl">Blog</h1>
          <p className="mt-4 max-w-2xl font-body text-lg leading-relaxed text-dark/70">
            Historias del campo: cabalgatas por bosque nativo, el Río San Pedro en balsa y la
            gastronomía de fuego de leña del Fundo Los Huapes.
          </p>

          {/* ── Post destacado ── */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group mt-12 grid grid-cols-1 items-center gap-8 border border-forest/10 bg-forest/5 p-6 transition-colors duration-200 hover:bg-forest/10 sm:rounded-lg lg:grid-cols-2 lg:gap-12 lg:p-10"
          >
            <div>
              <Badge variant="highlight">{featured.category}</Badge>
              <h2 className="mt-5 font-display text-2xl font-bold leading-tight text-forest transition-colors duration-200 group-hover:text-ember lg:text-4xl">
                {featured.title}
              </h2>
              <p className="mt-4 font-body text-base leading-relaxed text-dark/70">
                {featured.excerpt}
              </p>
              <time
                dateTime={featured.date}
                className="mt-5 block font-ui text-xs tracking-wide text-muted"
              >
                {featured.dateDisplay}
              </time>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
              <Image
                src={featured.heroImage.src}
                alt={featured.heroImage.alt}
                fill
                priority
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
          </Link>

          {/* ── Categorías ── */}
          <div className="mt-12 flex flex-wrap gap-2" aria-label="Categorías del blog">
            <Badge variant="highlight">Todos</Badge>
            {categories.map((category) => (
              <Badge key={category} variant="program">
                {category}
              </Badge>
            ))}
          </div>

          {/* ── Grilla de artículos ── */}
          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {sortedPosts.map((post) => (
              <article
                key={post.slug}
                className="group overflow-hidden rounded-lg border border-forest/10 bg-white transition-shadow duration-200 hover:shadow-md"
              >
                <Link href={`/blog/${post.slug}`} className="flex h-full flex-col">
                  <div className="relative aspect-[3/2]">
                    <Image
                      src={post.heroImage.src}
                      alt={post.heroImage.alt}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <span className="absolute left-3 top-3">
                      <Badge variant="highlight">{post.category}</Badge>
                    </span>
                  </div>

                  <div className="flex flex-1 flex-col p-6">
                    <time
                      dateTime={post.date}
                      className="font-ui text-xs tracking-wide text-muted"
                    >
                      {post.dateDisplay}
                    </time>
                    <h2 className="mt-2 font-display text-xl font-bold leading-snug text-forest transition-colors duration-200 group-hover:text-ember">
                      {post.title}
                    </h2>
                    <p className="mt-3 flex-1 font-body text-sm leading-relaxed text-dark/70">
                      {post.excerpt}
                    </p>

                    <div className="mt-6 flex items-center gap-3 border-t border-forest/10 pt-4">
                      <AuthorAvatar />
                      <div>
                        <p className="font-ui text-sm font-medium text-forest">
                          {post.author.name}
                        </p>
                        <p className="font-ui text-xs text-muted">{post.author.role}</p>
                      </div>
                    </div>
                  </div>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
