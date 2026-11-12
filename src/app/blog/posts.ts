/**
 * Contenido estático del blog del Fundo Los Huapes.
 * Patrón estático sin dependencias: los posts viven como objetos TS
 * y se renderizan desde src/app/blog/page.tsx y src/app/blog/[slug]/page.tsx.
 *
 * Todos los datos (precios, distancias, horarios, menús) provienen de las
 * páginas del propio sitio: /programas/*, /gastronomia y /el-entorno.
 */

export const BLOG_BASE_URL = 'https://www.loshuapes.cl'

export interface PostImage {
  src: string
  alt: string
}

export type PostBlock =
  | { type: 'h2'; text: string }
  | { type: 'p'; text: string }
  | { type: 'image'; image: PostImage }

export interface PostCtaLink {
  label: string
  href: string
}

export interface PostCta {
  title: string
  text: string
  links: PostCtaLink[]
}

export interface Post {
  slug: string
  category: string
  title: string
  metaTitle: string
  metaDescription: string
  excerpt: string
  /** Fecha ISO para metadata y JSON-LD */
  date: string
  /** Fecha visible en es-CL */
  dateDisplay: string
  author: { name: string; role: string }
  heroImage: PostImage
  /** Párrafo inicial auto-contenido (citabilidad AI) */
  lead: string
  blocks: PostBlock[]
  cta: PostCta
}

const AUTHOR = { name: 'Fundo Los Huapes', role: 'Equipo del fundo' } as const

export const posts: Post[] = [
  {
    slug: 'bajada-en-balsa-rio-san-pedro',
    category: 'Río',
    title: 'Cómo es la bajada en balsa por el Río San Pedro',
    metaTitle: 'Cómo es la bajada en balsa por el Río San Pedro',
    metaDescription:
      'Dos tramos guiados por el Río San Pedro: 15 km hasta Antilhue o 20 km desde Puente Ciruelos. Sin experiencia previa, de octubre a mayo, en Los Ríos.',
    excerpt:
      'Dos tramos guiados —15 km hasta Antilhue o 20 km desde Puente Ciruelos—, sin experiencia previa y combinados con cabalgata por el fundo.',
    date: '2026-11-12',
    dateDisplay: '12 de noviembre de 2026',
    author: AUTHOR,
    heroImage: {
      src: '/images/balsa-raft.jpg',
      alt: 'Balsa varada en la orilla del Río San Pedro con paredes de cañón verde',
    },
    lead: 'La bajada en balsa por el Río San Pedro es una navegación guiada que parte en el Fundo Los Huapes, en la Región de Los Ríos, Chile, y se puede hacer en dos tramos: uno de 15 km desde la isla del campo hasta Balsa San Javier, en Antilhue, y otro de 20 km desde Puente Ciruelos hasta el fundo. Ambos forman parte de los programas de día completo del fundo —Del Potrero al Río y Del Río al Potrero—, que combinan la balsa con una cabalgata por bosque nativo y potreros. No se necesita experiencia previa: la balsa es guiada por el equipo de Fly Fishing Riñihue, el equipamiento está incluido y el tramo de 15 km toma entre 3 y 4 horas según el nivel del río y el ritmo del grupo. Los programas operan de octubre a mayo, en grupos de 5 a 10 personas.',
    blocks: [
      { type: 'h2', text: '¿Qué tramos se pueden navegar?' },
      {
        type: 'p',
        text: 'El programa Del Potrero al Río dedica la mañana a la cabalgata y la tarde al río: después del almuerzo campestre, el grupo zarpa desde la isla del campo alrededor de las 15:00 y navega 15 km hasta Balsa San Javier, en Antilhue. Al llegar, el traslado de regreso al campo está incluido en el programa.',
      },
      {
        type: 'p',
        text: 'El programa Del Río al Potrero invierte el orden y toma el tramo largo: 20 km desde Puente Ciruelos, con zarpe a las 9:30 de la mañana. Esa partida temprana permite llegar a la isla del campo a la hora del almuerzo y dejar la tarde libre para la cabalgata. Durante la bajada, el equipo de guías sirve un snack en un punto estratégico del recorrido: frutas, bebidas y algo seco para recargar energías.',
      },
      { type: 'h2', text: '¿Se necesita experiencia para bajar en balsa?' },
      {
        type: 'p',
        text: 'No. La balsa es guiada y el equipo de Fly Fishing Riñihue, el operador del río, se encarga de todo; el equipamiento de balsa está incluido. Solo hay que disfrutar el río. Los tiempos son referenciales: el tramo de 15 km dura entre 3 y 4 horas según el nivel del río y el ritmo del grupo, y el zarpe y el término pueden variar por las mismas razones.',
      },
      {
        type: 'image',
        image: {
          src: '/images/balsa-grupo.jpg',
          alt: 'Grupo navegando en balsa por el Río San Pedro',
        },
      },
      { type: 'h2', text: '¿Con qué programa conviene hacer la bajada?' },
      {
        type: 'p',
        text: 'Ambos programas cuestan $180.000 por persona, incluyen almuerzo campestre y combinan el río con una cabalgata por bosque nativo y potreros. La diferencia está en el orden y en las edades: Del Potrero al Río admite participantes desde los 10 años, mientras que Del Río al Potrero está pensado para familias y recibe niños desde los 5 años, siempre acompañados por sus padres. En este último, además, se puede agregar el asado acampado al final de la jornada por $40.000 adicionales por persona.',
      },
      {
        type: 'p',
        text: 'La temporada va del 1 de octubre al 30 de mayo y los grupos son de 5 a 10 personas. El punto de encuentro exacto se confirma al momento de la reserva.',
      },
    ],
    cta: {
      title: 'Navega el Río San Pedro',
      text: 'Elige el tramo que más te acomode: cabalgata en la mañana y 15 km de río en la tarde, o el tramo largo de 20 km en la mañana y caballos por la tarde.',
      links: [
        { label: 'Ver Del Potrero al Río', href: '/programas/potrero-al-rio' },
        { label: 'Ver Del Río al Potrero', href: '/programas/rio-al-potrero' },
      ],
    },
  },
  {
    slug: 'cabalgatas-bosque-nativo-los-rios',
    category: 'Cabalgatas',
    title: 'Cabalgatas por bosque nativo en Los Ríos: qué esperar',
    metaTitle: 'Cabalgatas por bosque nativo en Los Ríos: qué esperar',
    metaDescription:
      'Recorrido guiado de 4 horas en dos etapas, con picoteo en el estero Huillinco. Turnos mañana y tarde, desde 5 años. Fundo Los Huapes, Región de Los Ríos.',
    excerpt:
      'Un recorrido guiado de 4 horas en dos etapas por bosque nativo y potreros, con picoteo de campo en el estero Huillinco a mitad de camino.',
    date: '2026-11-12',
    dateDisplay: '12 de noviembre de 2026',
    author: AUTHOR,
    heroImage: {
      src: '/images/cabalgata-bosque.jpg',
      alt: 'Caballos descansando bajo la sombra de árboles nativos en el Fundo Los Huapes',
    },
    lead: 'Una cabalgata por bosque nativo en el Fundo Los Huapes, en la Región de Los Ríos, es un recorrido guiado de unas 4 horas que cruza en dos etapas los potreros y el bosque del campo, a orillas del Río San Pedro. A mitad de camino, el grupo hace un alto en el estero Huillinco para compartir un picoteo de campo: arrollado huaso, queso fresco con aceite de oliva y ají verde, pernil, tortillas y pan amasado, acompañados de cervezas, jugos naturales, bebidas y agua mineral. No se necesita experiencia previa: los caballos del fundo están adaptados a todos los niveles y el guía acompaña a cada jinete durante todo el recorrido. Hay dos turnos —mañana y tarde—, los niños pueden participar desde los 5 años acompañados por sus padres, y el programa opera de octubre a mayo en grupos de 5 a 10 personas.',
    blocks: [
      { type: 'h2', text: '¿Cómo es el recorrido?' },
      {
        type: 'p',
        text: 'La cabalgata va en dos etapas. La primera cruza el bosque nativo y los potreros del campo hasta el estero Huillinco, donde el grupo descansa y comparte el picoteo. La segunda etapa retoma el camino y completa el circuito de regreso. En total son unas 4 horas, con el alto del estero incluido.',
      },
      {
        type: 'p',
        text: 'Hay dos turnos para elegir. El turno mañana parte con la llegada al campo a las 10:00, inicia la cabalgata a las 10:30, hace el picoteo a las 12:00 y termina a las 14:30. El turno tarde replica el mismo esquema entre las 15:00 y las 19:30. En ambos casos, al final se puede agregar el asado acampado como cierre de la jornada.',
      },
      { type: 'h2', text: '¿Qué se come en el picoteo del estero?' },
      {
        type: 'p',
        text: 'El menú es de campo: arrollado huaso de receta tradicional, queso fresco con aceite de oliva y ají verde, pernil cocido y servido en láminas, y tortillas y pan amasado hechos en el campo. Para tomar hay cervezas, jugos naturales, bebidas y agua mineral.',
      },
      {
        type: 'image',
        image: {
          src: '/images/cabalgata-potrero.jpg',
          alt: 'Caballos en el potrero al atardecer, Fundo Los Huapes',
        },
      },
      { type: 'h2', text: '¿Necesito saber montar a caballo?' },
      {
        type: 'p',
        text: 'No. Los caballos del fundo están adaptados a todos los niveles y el guía acompaña a cada jinete durante todo el recorrido. Los niños pueden participar desde los 10 años en el turno mañana y desde los 5 años en el turno tarde, siempre acompañados por sus padres.',
      },
      { type: 'h2', text: '¿Cuánto cuesta y cuándo se puede ir?' },
      {
        type: 'p',
        text: 'El programa Cabalgata y Picoteo cuesta $80.000 por persona e incluye la cabalgata guiada en dos etapas, el picoteo en el estero Huillinco y los bebestibles. El asado acampado —cordero y estomaguillo al palo preparados por De la Hoguera— se puede agregar por $40.000 adicionales por persona. La temporada va del 1 de octubre al 30 de mayo, en grupos de 5 a 10 personas.',
      },
    ],
    cta: {
      title: 'Reserva tu cabalgata',
      text: 'Media jornada a caballo por bosque nativo y potreros, con picoteo en el estero Huillinco. Turno mañana o tarde, desde $80.000 por persona.',
      links: [{ label: 'Ver Cabalgata y Picoteo', href: '/programas/cabalgata-picoteo' }],
    },
  },
  {
    slug: 'asado-acampado-gastronomia-de-campo',
    category: 'Gastronomía',
    title: 'Asado acampado: la gastronomía de campo del fundo',
    metaTitle: 'Asado acampado: la gastronomía de campo del fundo',
    metaDescription:
      'Cordero y estomaguillo al palo preparados por De la Hoguera, con picoteo, acompañamientos y postre. Add-on de $40.000 por persona en cualquier programa.',
    excerpt:
      'Cordero y estomaguillo al palo, picoteo valdiviano y mote con huesillos: así es la comida de fuego de leña que prepara De la Hoguera.',
    date: '2026-11-12',
    dateDisplay: '12 de noviembre de 2026',
    author: AUTHOR,
    heroImage: {
      src: '/images/gastronomia-asado.jpg',
      alt: 'Asado acampado con carne al palo sobre fuego de leña en el Fundo Los Huapes',
    },
    lead: 'El asado acampado es la experiencia gastronómica del Fundo Los Huapes, en la Región de Los Ríos: una comida de campo preparada con fuego de leña por De la Hoguera, que se puede agregar a cualquiera de los programas del fundo por $40.000 por persona. El plato de fondo son cordero y estomaguillo de vacuno al palo —aproximadamente 500 gramos por persona—, precedidos por un picoteo con choripán, crudo estilo valdiviano, empanaditas de pino y de queso, pan amasado, sopaipillas, pebre y chancho en piedra. La mesa se completa con ensalada chilena, papas asadas al merquén con mantequilla y, de postre, mote con huesillos o leche asada con café de grano. Para recibir al grupo hay sangría, cervezas, vinos, jugos naturales y bebidas. Es el cierre de la jornada después de la cabalgata o la bajada en balsa, en una mesa larga para compartir.',
    blocks: [
      { type: 'h2', text: '¿Qué es el estomaguillo?' },
      {
        type: 'p',
        text: 'El estomaguillo es el estómago de vacuno relleno y cocido al palo, una preparación tradicional del campo chileno austral. En el asado acampado es la estrella junto al cordero: ambos se hacen lento, al palo y con fuego de leña, y se calculan unos 500 gramos por persona.',
      },
      { type: 'h2', text: '¿Qué incluye el menú completo?' },
      {
        type: 'p',
        text: 'El asado acampado es una comida de varias etapas. Para recibir al grupo hay sangría y cervezas, una selección de vinos blancos y tintos, jugos naturales de temporada y bebidas. Sigue un picoteo con choripán, crudo estilo valdiviano, empanaditas de pino y de queso, pan amasado, sopaipillas, pebre y chancho en piedra.',
      },
      {
        type: 'p',
        text: 'El plato de fondo al palo —estomaguillo de vacuno y cordero— llega a la mesa con ensalada chilena, papas asadas al merquén con mantequilla, mix de lechuga, albahaca y crutones, y más pan amasado con pebre. De postre, mote con huesillos o leche asada, y café de grano para la sobremesa.',
      },
      {
        type: 'image',
        image: {
          src: '/images/gastronomia-fogon.jpg',
          alt: 'Olla de hierro sobre fogón de leña junto al río',
        },
      },
      { type: 'h2', text: '¿Cómo se agrega a un programa?' },
      {
        type: 'p',
        text: 'El asado acampado no es obligatorio: es un add-on que se suma a cualquier programa del fundo por $40.000 por persona adicionales. Funciona como cierre de la jornada, después de la cabalgata o de la bajada en balsa. El picoteo del estero Huillinco, en cambio, está incluido en todos los programas con cabalgata.',
      },
      {
        type: 'p',
        text: 'En la práctica, el asado llega justo cuando el cuerpo lo pide. En el programa Cabalgata y Picoteo, por ejemplo, el turno mañana termina la cabalgata a las 14:30 y pasa a la mesa a las 15:00; el turno tarde baja del caballo a las 19:30 y se sienta al fuego a las 20:00, ya con la última luz sobre los potreros.',
      },
      {
        type: 'p',
        text: 'Para personas que no comen carne, De la Hoguera puede adaptar el menú con previo aviso; se recomienda consultarlo al momento de la reserva.',
      },
    ],
    cta: {
      title: 'Suma el asado acampado a tu programa',
      text: 'Fuego de leña, cordero y estomaguillo al palo y una mesa larga para compartir. Disponible como add-on en cualquier programa del fundo.',
      links: [{ label: 'Ver gastronomía de campo', href: '/gastronomia' }],
    },
  },
]

export function getPostBySlug(slug: string): Post | undefined {
  return posts.find((post) => post.slug === slug)
}

export function getAllCategories(): string[] {
  return [...new Set(posts.map((post) => post.category))]
}
