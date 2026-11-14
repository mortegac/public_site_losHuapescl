import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import JsonLd from '@/components/JsonLd'
import { getBreadcrumbJsonLd } from '@/lib/jsonld'
import { getPostBySlug, posts, BLOG_BASE_URL, type Post } from '../posts'

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams(): { slug: string }[] {
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) return {}

  const postUrl = `${BLOG_BASE_URL}/blog/${post.slug}`

  return {
    title: post.metaTitle,
    description: post.metaDescription,
    alternates: { canonical: postUrl },
    openGraph: {
      type: 'article',
      title: `${post.metaTitle} | Fundo Los Huapes`,
      description: post.metaDescription,
      url: postUrl,
      publishedTime: post.date,
      images: [{ url: `${BLOG_BASE_URL}${post.heroImage.src}`, alt: post.heroImage.alt }],
    },
  }
}

function getBlogPostingJsonLd(post: Post): Record<string, unknown> {
  const postUrl = `${BLOG_BASE_URL}/blog/${post.slug}`

  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.metaDescription,
    image: `${BLOG_BASE_URL}${post.heroImage.src}`,
    url: postUrl,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: 'es-CL',
    mainEntityOfPage: { '@type': 'WebPage', '@id': postUrl },
    author: {
      '@type': 'Organization',
      name: 'Fundo Los Huapes',
      url: BLOG_BASE_URL,
    },
    publisher: {
      '@type': 'Organization',
      name: 'Fundo Los Huapes',
      url: BLOG_BASE_URL,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)
  if (!post) notFound()

  const postUrl = `${BLOG_BASE_URL}/blog/${post.slug}`

  const breadcrumbJsonLd = getBreadcrumbJsonLd([
    { name: 'Inicio', item: BLOG_BASE_URL },
    { name: 'Blog', item: `${BLOG_BASE_URL}/blog` },
    { name: post.title, item: postUrl },
  ])

  return (
    <>
      <JsonLd data={getBlogPostingJsonLd(post)} />
      <JsonLd data={breadcrumbJsonLd} />

      <article className="bg-cream py-12 lg:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          {/* ── Breadcrumb ── */}
          <nav aria-label="Breadcrumb" className="mb-8">
            <ol className="flex flex-wrap items-center gap-2 font-ui text-xs text-muted">
              <li>
                <Link href="/" className="transition-colors hover:text-forest">
                  Inicio
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li>
                <Link href="/blog" className="transition-colors hover:text-forest">
                  Blog
                </Link>
              </li>
              <li aria-hidden="true">›</li>
              <li className="font-medium text-forest">{post.title}</li>
            </ol>
          </nav>

          <div className="mx-auto max-w-[720px]">
            {/* ── Meta del post ── */}
            <Badge variant="highlight">{post.category}</Badge>

            <h1 className="mt-5 font-display text-3xl font-bold leading-tight text-forest sm:text-4xl lg:text-5xl">
              {post.title}
            </h1>

            <div className="mt-6 flex items-center gap-3 border-b border-forest/10 pb-6">
              <span
                aria-hidden="true"
                className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-forest font-ui text-xs font-semibold text-cream"
              >
                LH
              </span>
              <div>
                <p className="font-ui text-sm text-dark/80">
                  Escrito por <span className="font-medium text-forest">{post.author.name}</span>,{' '}
                  {post.author.role.toLowerCase()}.
                </p>
                <p className="font-ui text-xs text-muted">
                  Publicado:{' '}
                  <time dateTime={post.date}>{post.dateDisplay}</time>
                </p>
              </div>
            </div>

            {/* ── Imagen principal ── */}
            <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-lg">
              <Image
                src={post.heroImage.src}
                alt={post.heroImage.alt}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 720px"
              />
            </div>

            {/* ── Párrafo inicial ── */}
            <p className="mt-10 font-body text-lg leading-relaxed text-dark/90">{post.lead}</p>

            {/* ── Cuerpo ── */}
            {post.blocks.map((block, index) => {
              if (block.type === 'h2') {
                return (
                  <h2
                    key={index}
                    className="mt-12 font-display text-2xl font-bold text-forest lg:text-3xl"
                  >
                    {block.text}
                  </h2>
                )
              }

              if (block.type === 'image') {
                return (
                  <figure key={index} className="mt-10">
                    <div className="relative aspect-[16/9] overflow-hidden rounded-lg">
                      <Image
                        src={block.image.src}
                        alt={block.image.alt}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 720px"
                      />
                    </div>
                    <figcaption className="mt-3 font-ui text-xs text-muted">
                      {block.image.alt}
                    </figcaption>
                  </figure>
                )
              }

              if (block.type === 'links') {
                return (
                  <ul key={index} className="mt-6 space-y-2">
                    {block.links.map((link) => (
                      <li key={link.href}>
                        <Link
                          href={link.href}
                          className="font-body text-base text-forest underline decoration-ember/40 underline-offset-4 transition-colors hover:text-ember"
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )
              }

              return (
                <p key={index} className="mt-6 font-body text-base leading-relaxed text-dark/80">
                  {block.text}
                </p>
              )
            })}

            {/* ── CTA al programa ── */}
            <aside className="mt-14 rounded-lg bg-forest p-8 text-cream lg:p-10">
              <h2 className="font-display text-2xl font-bold">{post.cta.title}</h2>
              <p className="mt-3 font-body text-base leading-relaxed text-cream/80">
                {post.cta.text}
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                {post.cta.links.map((link) => (
                  <Button key={link.href} href={link.href} variant="primary" size="md">
                    {link.label}
                  </Button>
                ))}
              </div>
            </aside>
          </div>
        </div>
      </article>
    </>
  )
}
