import Link from 'next/link'

interface FooterColumn {
  title: string
  links: { label: string; href: string }[]
}

const footerColumns: FooterColumn[] = [
  {
    // Réplica del menú principal del Navbar (mismos labels y rutas)
    title: 'Menú',
    links: [
      { label: 'Inicio', href: '/' },
      { label: 'Programas', href: '/programas' },
      { label: 'Gastronomía', href: '/gastronomia' },
      { label: 'El Entorno', href: '/el-entorno' },
      { label: 'Para Agencias', href: '/para-agencias' },
      { label: 'Blog', href: '/blog' },
      { label: 'Reservar', href: '/reservar' },
    ],
  },
  {
    title: 'Programas',
    links: [
      { label: 'Media Jornada', href: '/programas#media-jornada' },
      { label: 'Jornada Completa', href: '/programas#jornada-completa' },
      { label: 'Día y Noche', href: '/programas#dia-noche' },
      { label: '2 Días / 1 Noche', href: '/programas#dos-dias' },
    ],
  },
  {
    title: 'Información',
    links: [
      { label: 'Cómo Llegar', href: '/el-entorno#como-llegar' },
      { label: 'Preguntas Frecuentes', href: '/preguntas-frecuentes' },
      { label: 'Grupos Corporativos', href: '/para-agencias#corporativo' },
      { label: 'Operadores Turísticos', href: '/para-agencias#operadores' },
    ],
  },
  {
    title: 'Contacto',
    links: [
      // TODO: confirmar número real
      { label: 'WhatsApp', href: 'https://wa.me/56997305358' },
      { label: 'reservas@loshuapes.cl', href: 'mailto:reservas@loshuapes.cl' },
    ],
  },
]

// Año de build: el sitio es estático, se actualiza en cada deploy.
const currentYear = new Date().getFullYear()

export function Footer() {

  return (
    <footer className="bg-forest text-cream">
      {/* Main footer content */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-16 pb-10">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link
              href="/"
              className="font-display text-2xl font-bold text-cream hover:text-gold transition-colors duration-200"
            >
              Fundo Los Huapes
            </Link>
            <p className="mt-3 font-ui text-sm text-cream/70 leading-relaxed">
              Río San Pedro · Región de Los Ríos · Chile
            </p>
            <div className="mt-5 font-ui text-xs text-cream/50 space-y-1">
              <p className="font-semibold text-cream/70 uppercase tracking-wider">Temporada</p>
              <p>Octubre – Mayo</p>
              <p>Grupos de 5 a 10 personas</p>
            </div>
          </div>

          {/* Link columns */}
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="font-ui text-xs font-semibold uppercase tracking-widest text-gold mb-4">
                {column.title}
              </h3>
              <ul className="space-y-2.5">
                {column.links.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="font-ui text-sm text-cream/70 hover:text-cream transition-colors duration-200"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-cream/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="font-ui text-xs text-cream/50">
            &copy; {currentYear} Fundo Los Huapes. Todos los derechos reservados.
          </p>
          <div className="flex gap-5">
            <Link
              href="/privacidad"
              className="font-ui text-xs text-cream/50 hover:text-cream/80 transition-colors duration-200"
            >
              Privacidad
            </Link>
            <Link
              href="/terminos"
              className="font-ui text-xs text-cream/50 hover:text-cream/80 transition-colors duration-200"
            >
              Términos
            </Link>
            <Link
              href="/mapa-del-sitio"
              className="font-ui text-xs text-cream/50 hover:text-cream/80 transition-colors duration-200"
            >
              Mapa del sitio
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
