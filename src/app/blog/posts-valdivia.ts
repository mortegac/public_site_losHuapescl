import type { Post } from './posts'

/**
 * Posts estacionales: actividades en Valdivia (nov–mar) conectadas con los
 * programas del fundo. Datos de eventos verificados por búsqueda web; fuentes
 * citadas en comentarios por post.
 */

const AUTHOR = { name: 'Fundo Los Huapes', role: 'Equipo del fundo' } as const

export const valdiviaPosts: Post[] = [
  // Fuentes: reutiliza las fuentes de los posts hijo de este archivo
  {
    slug: 'que-hacer-en-valdivia-panoramas',
    category: 'Valdivia',
    title: 'Qué hacer en Valdivia: 6 panoramas imperdibles',
    metaTitle: 'Qué hacer en Valdivia: 6 panoramas imperdibles',
    metaDescription:
      'Seis panoramas imperdibles en Valdivia: Feria Fluvial, Jardín Botánico, Bierfest, Noche Valdiviana, fuertes de Niebla y un día de campo y río a 50 minutos.',
    excerpt:
      'La guía corta de Valdivia: mercado, flora nativa, cerveza, carnaval fluvial, fuertes españoles y un día de caballos y balsa a 50 minutos de la ciudad.',
    date: '2026-11-14',
    dateDisplay: '14 de noviembre de 2026',
    author: AUTHOR,
    // Foto: Charlie danvers — CC BY-SA 4.0 — commons.wikimedia.org/wiki/File:Vista_costanera_valdivia.jpg
    heroImage: {
      src: '/images/blog/que-hacer-en-valdivia-panoramas.jpg',
      alt: 'Costanera de Valdivia con embarcaciones turísticas en el río, vista desde la Isla Teja',
    },
    lead: '¿Qué hacer en Valdivia? Los imperdibles son seis: recorrer la Feria Fluvial con sus lobos marinos, caminar el Jardín Botánico de la UACh en Isla Teja, vivir la Bierfest Kunstmann a fines de enero, ver el corso fluvial de la Noche Valdiviana en febrero, navegar hasta los fuertes españoles de Niebla, Corral e Isla Mancera y, a 50 minutos de la ciudad, pasar un día de campo con cabalgatas y balsa por el Río San Pedro en el Fundo Los Huapes. Valdivia es la ciudad fluvial del sur de Chile: mercado junto al agua, tradición cervecera alemana, historia colonial y naturaleza en todas direcciones. Esta guía resume los seis panoramas, el mejor mes para cada uno y el enlace a la guía completa de cada actividad, pensada para familias y grupos de amigos que arman un viaje por la Región de Los Ríos entre octubre y mayo.',
    blocks: [
      { type: 'h2', text: '1. La Feria Fluvial y sus lobos marinos' },
      {
        type: 'p',
        text: 'El mercado tradicional de la costanera Arturo Prat es el símbolo de la identidad fluvial valdiviana: pescados, mariscos, frutas y quesos que llegan desde las comunidades ribereñas y costeras de Los Ríos, con lobos marinos descansando a pasos de los puestos. Es un mercado de verdad, donde compran los restaurantes y las familias de la ciudad, y la mejor variedad está temprano en la mañana.',
      },
      {
        type: 'links',
        links: [
          {
            label: 'Leer la guía completa de la Feria Fluvial',
            href: '/blog/feria-fluvial-valdivia-que-hacer-noviembre',
          },
        ],
      },
      { type: 'h2', text: '2. El Jardín Botánico de la UACh en Isla Teja' },
      {
        type: 'p',
        text: 'Una península del Campus Isla Teja, rodeada por los ríos de la ciudad, con alrededor de mil especies de plantas y un foco especial en la flora nativa del sur de Chile. La entrada es liberada, con aporte voluntario, y se combina bien con el resto de la isla: el Parque Saval, los museos de la UACh y las vistas a la costanera desde la otra orilla.',
      },
      {
        type: 'links',
        links: [
          {
            label: 'Leer la guía completa del Jardín Botánico',
            href: '/blog/jardin-botanico-uach-valdivia-diciembre',
          },
        ],
      },
      { type: 'h2', text: '3. La Bierfest Kunstmann, a fines de enero' },
      {
        type: 'p',
        text: 'La fiesta cervecera más grande del sur de Chile se celebra habitualmente a fines de enero en el Parque Saval: cuatro días de barriles, carpas gastronómicas, música en vivo y un desfile inaugural que cruza la ciudad. La edición 2026 sirvió más de 830 barriles —unos 25.000 litros— e incluyó una cerveza exclusiva inspirada en el Oktoberfest de Múnich.',
      },
      {
        type: 'links',
        links: [
          {
            label: 'Leer la guía completa de la Bierfest Kunstmann',
            href: '/blog/bierfest-kunstmann-valdivia-enero',
          },
        ],
      },
      { type: 'h2', text: '4. La Noche Valdiviana y su corso fluvial' },
      {
        type: 'p',
        text: 'La fiesta mayor de Valdivia corona la Semana Valdiviana un sábado de febrero: embarcaciones alegóricas iluminadas desfilan por el río frente a la costanera y la noche cierra con fuegos artificiales de bajo impacto sonoro. La edición 2026 —la número 108— reunió 32 embarcaciones en competencia y decenas de miles de personas en ambas orillas.',
      },
      {
        type: 'links',
        links: [
          {
            label: 'Leer la guía completa de la Noche Valdiviana',
            href: '/blog/noche-valdiviana-que-hacer-febrero',
          },
        ],
      },
      { type: 'h2', text: '5. Niebla, Corral y Mancera: los castillos del fin del mundo' },
      {
        type: 'p',
        text: 'En la desembocadura del río, la corona española levantó en el siglo XVII uno de los sistemas defensivos más grandes de América: el Castillo de Niebla, el fuerte San Sebastián de la Cruz en Corral y el castillo de la Isla Mancera. Se visitan navegando desde el Muelle Schuster, en paseos de medio día a jornada completa, y en marzo se recorren sin las multitudes del verano.',
      },
      {
        type: 'links',
        links: [
          {
            label: 'Leer la guía completa de Niebla, Corral y Mancera',
            href: '/blog/navegacion-niebla-corral-mancera-marzo',
          },
        ],
      },
      { type: 'h2', text: '6. Un día de campo y río en el Fundo Los Huapes' },
      {
        type: 'p',
        text: 'A unos 45 km de Valdivia —cerca de 50 minutos en auto— está el panorama que completa el viaje: cabalgatas guiadas por bosque nativo y potreros, picoteo de campo junto al estero Huillinco y bajadas en balsa por el Río San Pedro, sin necesidad de experiencia previa. Los programas van desde la Cabalgata y Picoteo de media jornada por $80.000 hasta la Travesía San Pedro de 2 días y 1 noche por $280.000, pasando por los días completos de caballos y balsa por $180.000.',
      },
      {
        type: 'p',
        text: 'Los grupos son de 5 a 10 personas —el formato de una familia o una barra de amigos— y la temporada corre del 1 de octubre al 30 de mayo. En enero y febrero los cupos vuelan junto con el alojamiento en Valdivia, así que la jugada correcta es reservar el día de campo apenas fijes las fechas del viaje.',
      },
      {
        type: 'links',
        links: [{ label: 'Ver todos los programas del fundo', href: '/programas' }],
      },
    ],
    cta: {
      title: 'Cinco panoramas en la ciudad. El sexto te espera en el campo.',
      text: 'Ya tienes el mapa de Valdivia: mercado, jardín, cerveza, carnaval y fuertes. Ahora imagina el cierre: caballos cruzando bosque nativo, una balsa bajando el Río San Pedro y un almuerzo de campo junto al agua, en grupo de 5 a 10. La temporada va del 1 de octubre al 30 de mayo y las fechas de verano se agotan primero: elige tu programa y asegura la tuya hoy.',
      links: [
        { label: 'Ver todos los programas', href: '/programas' },
        { label: 'Reservar', href: '/reservar' },
      ],
    },
  },

  // Fuentes:
  // https://es.wikipedia.org/wiki/Feria_Fluvial_de_Valdivia
  // https://www.cocha.com/blog/que-hacer/que-hacer-en-valdivia
  // https://blog.skyairline.com/lugares-gratuitos-en-valdivia/
  {
    slug: 'feria-fluvial-valdivia-que-hacer-noviembre',
    category: 'Valdivia',
    title: 'Feria Fluvial de Valdivia: el mercado de los lobos marinos',
    metaTitle: 'Feria Fluvial de Valdivia: qué hacer en noviembre',
    metaDescription:
      'El mercado de la costanera de Valdivia, sus lobos marinos y cómo combinarlo con una cabalgata y balsa por el Río San Pedro, a 50 minutos de la ciudad.',
    excerpt:
      'El mercado más fotografiado del sur de Chile queda a 50 minutos del fundo: la excusa perfecta para combinar ciudad, campo y río en un mismo viaje.',
    date: '2026-11-13',
    dateDisplay: '13 de noviembre de 2026',
    author: AUTHOR,
    // Foto: Carlos Figueroa Rojas — CC BY-SA 4.0 — commons.wikimedia.org/wiki/File:Feria_Fluvial,_Valdivia,_20190216_-_04.jpg
    heroImage: {
      src: '/images/blog/feria-fluvial-valdivia-que-hacer-noviembre.jpg',
      alt: 'La Feria Fluvial de Valdivia vista desde el río, con sus puestos en la costanera y una embarcación turística',
    },
    lead: 'La Feria Fluvial de Valdivia es el mercado tradicional de la costanera Arturo Prat, en pleno centro de la ciudad, donde cada mañana llegan pescados, mariscos, frutas, verduras y quesos desde las comunidades ribereñas y costeras de la Región de Los Ríos. Su sello más famoso son los lobos marinos que descansan a pasos de los puestos esperando los restos de la pesca, una escena que convirtió a este mercado en símbolo de la identidad fluvial valdiviana. En noviembre, con la primavera instalada y antes del peak del verano, se recorre con calma, y la mejor variedad está temprano en la mañana. La feria queda además a unos 45 km —cerca de 50 minutos en auto— del Fundo Los Huapes, así que el mismo viaje permite combinar la ciudad con un día de campo: cabalgata por bosque nativo, picoteo junto al estero y, si quieres, una bajada en balsa por el Río San Pedro.',
    blocks: [
      { type: 'h2', text: '¿Qué se encuentra en la Feria Fluvial?' },
      {
        type: 'p',
        text: 'La feria reúne puestos de pescados y mariscos frescos, frutas y verduras de temporada, quesos artesanales y productos locales que llegan por río desde las comunidades de la cuenca y la costa. Es un mercado de verdad, no una escenografía para turistas: aquí compran los restaurantes y las familias valdivianas.',
      },
      {
        type: 'p',
        text: 'El espectáculo paralelo son los lobos marinos. Se instalan junto al mercado y en la costanera, a metros de los puestos, y son hoy uno de los símbolos de la ciudad. Conviene ir en la mañana: hay más variedad en los puestos y más movimiento en el río.',
      },
      { type: 'h2', text: '¿Qué más hay en la costanera?' },
      {
        type: 'p',
        text: 'A pasos de la feria están el Mercado Municipal y el Muelle Schuster, desde donde zarpan las embarcaciones turísticas que recorren los ríos Valdivia y Calle Calle. La costanera completa se camina en una mañana tranquila, entre cafés, kuchen de tradición alemana y vistas al río.',
      },
      {
        type: 'image',
        image: {
          src: '/images/gastronomia-picoteo.jpg',
          alt: 'Picoteo de campo con arrollado huaso, queso fresco y pan amasado en el fundo',
        },
      },
      { type: 'h2', text: '¿Por qué noviembre es un buen mes para ir?' },
      {
        type: 'p',
        text: 'Porque la primavera ya está instalada en Los Ríos y todavía no llega la multitud de enero y febrero. Se recorre la feria sin apuro, se encuentra estacionamiento y los precios de alojamiento son más amables que en pleno verano.',
      },
      {
        type: 'p',
        text: 'Y hay otra razón: la temporada del Fundo Los Huapes partió el 1 de octubre. Eso significa que el mismo viaje a Valdivia puede incluir un día de campo con caballos, picoteo de productos locales junto al estero Huillinco y río de verdad, sin multitudes.',
      },
      { type: 'h2', text: '¿Cómo completar el panorama?' },
      {
        type: 'p',
        text: 'La fórmula es simple: una mañana de feria y costanera en Valdivia, y otro día entero de campo a 50 minutos de distancia. En el fundo puedes elegir la Cabalgata y Picoteo —media jornada guiada por bosque nativo y potreros, con picoteo de campo, por $80.000 por persona— o un día completo que suma la bajada en balsa por el Río San Pedro: Del Potrero al Río o Del Río al Potrero, ambos por $180.000 con almuerzo campestre incluido.',
      },
      {
        type: 'p',
        text: 'Si el grupo quiere cerrar la jornada comiendo como en el sur se come, el asado acampado —cordero y estomaguillo al palo preparados con fuego de leña— se agrega a cualquier programa por $40.000 adicionales por persona. Y para quienes vienen por varios días, la Travesía San Pedro extiende la experiencia a 2 días y 1 noche de caballos, balsa y campamento por $280.000.',
      },
      {
        type: 'p',
        text: 'Los grupos son de 5 a 10 personas —el formato ideal para familias o amigos que viajan juntos— y la temporada va del 1 de octubre al 30 de mayo. Noviembre es el momento de reservar con fechas a elección: en enero y febrero los cupos vuelan junto con el alojamiento en Valdivia.',
      },
    ],
    cta: {
      title: 'De la feria al potrero',
      text: 'Ya conoces el mercado y sus lobos marinos. Ahora prueba el otro lado de Los Ríos: caballos, bosque nativo y el Río San Pedro, a 50 minutos de Valdivia.',
      links: [
        { label: 'Ver Cabalgata y Picoteo', href: '/programas/cabalgata-picoteo' },
        { label: 'Ver Del Potrero al Río', href: '/programas/potrero-al-rio' },
        { label: 'Reservar', href: '/reservar' },
      ],
    },
  },

  // Fuentes:
  // https://ciencias.uach.cl/jardinbotanico/
  // https://chile.travel/en/blog/botanical-gardens-in-chile-enjoy-the-beginning-of-spring/
  // https://www.blog.recorrido.cl/destinos/como-llegar-al-jardin-botanico-de-valdivia/
  {
    slug: 'jardin-botanico-uach-valdivia-diciembre',
    category: 'Valdivia',
    title: 'Jardín Botánico de la UACh: flora nativa en plena ciudad',
    metaTitle: 'Jardín Botánico de Valdivia: panorama de diciembre',
    metaDescription:
      'El Jardín Botánico de la UACh en Isla Teja: entrada liberada y flora nativa. Complétalo con una cabalgata entre copihues y bosque valdiviano real.',
    excerpt:
      'Mil especies de flora en Isla Teja con entrada liberada. Y a 50 minutos, el mismo bosque valdiviano pero vivo, salvaje y recorrido a caballo.',
    date: '2026-11-13',
    dateDisplay: '13 de noviembre de 2026',
    author: AUTHOR,
    // Foto: Albh — CC BY-SA 3.0 — commons.wikimedia.org/wiki/File:Botanic_garden_UACh.JPG
    heroImage: {
      src: '/images/blog/jardin-botanico-uach-valdivia-diciembre.jpg',
      alt: 'Rododendros y azaleas en flor en el Jardín Botánico de la Universidad Austral de Chile, en Isla Teja, Valdivia',
    },
    lead: 'El Jardín Botánico de la Universidad Austral de Chile ocupa una península del Campus Isla Teja, en Valdivia, rodeado por los ríos de la ciudad. Reúne alrededor de mil especies de plantas distribuidas en áreas demostrativas, con un foco especial en la flora nativa del sur de Chile, y la entrada es liberada, con aporte voluntario. En diciembre, cuando la primavera austral está en su punto más alto, es uno de los paseos más recomendables de la ciudad: senderos entre árboles nativos, colecciones botánicas y orilla de río, todo a minutos del centro. Es también la antesala perfecta para lo que viene después: a unos 45 km —cerca de 50 minutos en auto— está el Fundo Los Huapes, donde esa misma flora valdiviana no está etiquetada en un jardín, sino creciendo salvaje en el bosque que se cruza a caballo camino al Río San Pedro.',
    blocks: [
      { type: 'h2', text: '¿Qué tiene de especial este jardín botánico?' },
      {
        type: 'p',
        text: 'Que es universitario, gratuito y está dedicado en buena parte a la flora del sur de Chile. Sus colecciones reúnen alrededor de mil especies en áreas demostrativas, y el entorno ayuda: el jardín está rodeado de río, dentro del campus de la Universidad Austral en Isla Teja.',
      },
      {
        type: 'p',
        text: 'Se visita caminando, sin apuro, y se combina bien con el resto de la isla: el Parque Saval, los museos de la UACh y las vistas a la costanera desde la otra orilla. En diciembre los días son largos y el jardín abre todos los días, así que cabe perfecto en una mañana o una tarde.',
      },
      { type: 'h2', text: '¿Por qué ir en diciembre?' },
      {
        type: 'p',
        text: 'Porque la primavera austral está en plena floración y todavía no llega la alta temporada de enero y febrero. Diciembre en Valdivia es verde intenso, temperaturas amables y menos gente en los senderos: la mejor ventana para mirar plantas con calma. Y si viajas con niños, el jardín es un paseo sin costo que funciona para todas las edades, a minutos del centro.',
      },
      {
        type: 'image',
        image: {
          src: '/images/entorno-flora.jpg',
          alt: 'Detalle de flora nativa en el bosque del Fundo Los Huapes',
        },
      },
      { type: 'h2', text: '¿Dónde ver esa misma flora en estado salvaje?' },
      {
        type: 'p',
        text: 'A 50 minutos de Valdivia, en el Fundo Los Huapes, el bosque valdiviano no tiene letreros: tiene copihues colgando entre los árboles, helechos, musgos y el olor a tierra húmeda que ningún jardín puede replicar. La diferencia es que aquí se recorre a caballo, en una cabalgata guiada de unas 4 horas que cruza potreros y bosque nativo hasta el estero Huillinco.',
      },
      {
        type: 'p',
        text: 'En el estero, el grupo descansa con un picoteo de campo: arrollado huaso, queso fresco con aceite de oliva y ají verde, pernil, tortillas y pan amasado, acompañados de jugos naturales, cervezas y agua mineral. No se necesita experiencia previa: los caballos están adaptados a todos los niveles y el guía acompaña a cada jinete durante todo el recorrido. Hay turno de mañana y de tarde, y los niños participan acompañados por sus padres.',
      },
      { type: 'h2', text: '¿Cómo completar el panorama?' },
      {
        type: 'p',
        text: 'La Cabalgata y Picoteo es media jornada y cuesta $80.000 por persona, con turno de mañana o tarde: perfecta para sumar al día siguiente de tu visita al jardín botánico. Si quieres el día completo, Del Potrero al Río y Del Río al Potrero combinan la cabalgata con una bajada en balsa por el Río San Pedro por $180.000, y el asado acampado se agrega por $40.000 más.',
      },
      {
        type: 'p',
        text: 'Para quienes quieren sumergirse de verdad en el bosque, la Travesía San Pedro son 2 días y 1 noche de caballos, río y fuego de leña por $280.000. Los grupos son de 5 a 10 personas y la temporada corre del 1 de octubre al 30 de mayo: diciembre es ideal para asegurar fecha antes del lleno del verano.',
      },
    ],
    cta: {
      title: 'Del jardín al bosque de verdad',
      text: 'Viste la flora valdiviana etiquetada en Isla Teja. Ahora recórrela viva, a caballo, con un picoteo de campo esperando junto al estero.',
      links: [
        { label: 'Ver Cabalgata y Picoteo', href: '/programas/cabalgata-picoteo' },
        { label: 'Ver Travesía San Pedro', href: '/programas/travesia-san-pedro' },
        { label: 'Reservar', href: '/reservar' },
      ],
    },
  },

  // Fuentes:
  // https://www.biobiochile.cl/especial/panoramas-de-verano-2026/noticias/2026/01/30/bierfest-kunstmann-musica-clasica-y-festin-de-la-papa-conoce-la-programacion-de-verano-en-valdivia.shtml
  // https://www.lacuarta.com/tendencias/noticia/bierfest-kunstmann-2026-vuelve-a-valdivia-con-cuatro-dias-de-festival-y-833-barriles-de-cerveza/
  // https://www.diariodevaldivia.cl/noticia/actualidad/2025/01/bierfest-kunstmann-2025-cuatro-dias-de-celebracion-cervecera-en-valdivia
  {
    slug: 'bierfest-kunstmann-valdivia-enero',
    category: 'Valdivia',
    title: 'Bierfest Kunstmann: la fiesta cervecera más grande del sur',
    metaTitle: 'Bierfest Kunstmann: qué hacer en Valdivia en enero',
    metaDescription:
      'La fiesta cervecera más grande del sur de Chile se celebra habitualmente a fines de enero en Valdivia. Combínala con un día de campo y río a 50 minutos.',
    excerpt:
      'Cuatro días de cerveza, música y tradición alemana en el Parque Saval. Y para el día siguiente: caballos, río y asado al palo a 50 minutos.',
    date: '2026-11-13',
    dateDisplay: '13 de noviembre de 2026',
    author: AUTHOR,
    // Foto: Carlos Figueroa Rojas — CC BY-SA 4.0 — commons.wikimedia.org/wiki/File:La_Cervecería,_Valdivia,_20190216_-_03.jpg
    heroImage: {
      src: '/images/blog/bierfest-kunstmann-valdivia-enero.jpg',
      alt: 'Entrada de la Cervecería Kunstmann en Valdivia, con su letrero de madera y su barril gigante',
    },
    lead: 'La Bierfest Kunstmann es considerada la fiesta cervecera más grande del sur de Chile y se celebra habitualmente a fines de enero en el Parque Saval de Valdivia. La edición 2026 se realizó entre el jueves 29 de enero y el domingo 1 de febrero, con unos 25.000 litros de cerveza —más de 830 barriles—, un desfile inaugural por la ciudad, carpa gastronómica, música en vivo y una cerveza exclusiva del evento inspirada en el Oktoberfest de Múnich; los ingresos se destinaron a la Primera Compañía de Bomberos de Valdivia. Si planeas tu verano 2027 en Los Ríos, conviene reservar esa ventana de fines de enero. Y como el Fundo Los Huapes está a unos 45 km de Valdivia —unos 50 minutos en auto—, puedes armar el combo completo: fiesta cervecera en la ciudad y, al día siguiente, cabalgata, balsa por el Río San Pedro y asado al palo en el campo.',
    blocks: [
      { type: 'h2', text: '¿Qué es la Bierfest Kunstmann?' },
      {
        type: 'p',
        text: 'Es el festival de la cervecería Kunstmann, heredera de la tradición cervecera alemana que marcó a Valdivia desde el siglo XIX. Durante cuatro días, el Parque Saval se llena de barriles, carpas gastronómicas, música en vivo, concursos y desfiles, en un ambiente familiar que cruza la ciudad entera.',
      },
      {
        type: 'p',
        text: 'La edición 2026 partió con un desfile desde el terminal de buses hasta el parque y sirvió más de 830 barriles de cerveza, incluida una receta exclusiva del evento. Para la edición 2027 aún no hay fecha oficial confirmada, pero el festival se celebra habitualmente a fines de enero: si viajas en esas fechas, revisa la programación oficial antes de reservar.',
      },
      { type: 'h2', text: '¿Cómo cuadrar el festival con un viaje por Los Ríos?' },
      {
        type: 'p',
        text: 'Fines de enero es peak de verano en Valdivia: días largos, terrazas llenas y la ciudad en su mejor ánimo. La jugada inteligente es reservar alojamiento con anticipación y dejar al menos un día libre después del festival para salir de la ciudad y conocer el campo profundo de la región.',
      },
      {
        type: 'image',
        image: {
          src: '/images/gastronomia-asado.jpg',
          alt: 'Asado al palo sobre fuego de leña en el Fundo Los Huapes',
        },
      },
      { type: 'h2', text: '¿Dónde seguir la fiesta gastronómica al día siguiente?' },
      {
        type: 'p',
        text: 'A 50 minutos de Valdivia, el Fundo Los Huapes ofrece la otra mesa del sur: el asado acampado que prepara De la Hoguera con fuego de leña, cordero y estomaguillo al palo, precedido por un picoteo con choripán, crudo estilo valdiviano, empanaditas y sopaipillas. Se agrega a cualquier programa del fundo por $40.000 por persona y se come en mesa larga, con los potreros de fondo.',
      },
      {
        type: 'p',
        text: 'Antes del asado está la jornada que lo justifica: una cabalgata por bosque nativo o una bajada en balsa por el Río San Pedro, guiada y sin necesidad de experiencia previa. El picoteo junto al estero Huillinco —arrollado huaso, queso fresco, pernil y pan amasado— viene incluido en todos los programas con cabalgata. Después de cuatro días de festival, un día de caballos, agua verde y silencio es exactamente lo que el cuerpo agradece.',
      },
      { type: 'h2', text: '¿Cómo completar el panorama?' },
      {
        type: 'p',
        text: 'Si tienes media jornada, la Cabalgata y Picoteo cuesta $80.000 por persona e incluye el picoteo de campo junto al estero Huillinco. Con un día entero, Del Potrero al Río o Del Río al Potrero combinan caballos y 15 o 20 km de balsa por $180.000 con almuerzo campestre. Y si el grupo viene por varios días al festival, la Travesía San Pedro —2 días y 1 noche— es el plan mayor: $280.000 por persona.',
      },
      {
        type: 'p',
        text: 'Los grupos son de 5 a 10 personas, el mismo formato de una barra de amigos de Bierfest. Enero es el mes más demandado de la temporada —que va del 1 de octubre al 30 de mayo—, así que la jugada correcta es reservar el día de campo en el mismo momento en que confirmes el alojamiento para el festival.',
      },
    ],
    cta: {
      title: 'Después de la cerveza, el fuego de leña',
      text: 'Cierra tu semana de Bierfest con un día de caballos, río y asado al palo a 50 minutos de Valdivia. Grupos de 5 a 10 personas: arma el tuyo.',
      links: [
        { label: 'Ver Del Río al Potrero', href: '/programas/rio-al-potrero' },
        { label: 'Ver gastronomía de campo', href: '/gastronomia' },
        { label: 'Reservar', href: '/reservar' },
      ],
    },
  },

  // Fuentes:
  // https://www.meteored.cl/noticias/ocio/noche-valdiviana-2026-fecha-artistas-invitados-y-todo-sobre-el-corso-fluvial.html
  // https://munivaldivia.cl/2026/02/17/municipio-de-valdivia-informo-que-el-corso-fluvial-2026-contara-con-33-embarcaciones-en-competencia/
  // https://www.tvn.cl/actualidad-y-tendencias/tendencias/noche-valdiviana-2026-el-tradicional-evento-que-nuevamente-sera-transmitido-por-tvn
  {
    slug: 'noche-valdiviana-que-hacer-febrero',
    category: 'Valdivia',
    title: 'Noche Valdiviana: el corso fluvial que corona el verano',
    metaTitle: 'Noche Valdiviana: qué hacer en Valdivia en febrero',
    metaDescription:
      'El corso fluvial y los fuegos artificiales de la Noche Valdiviana cierran el verano en febrero. Súmale un día de campo y balsa a 50 minutos de la ciudad.',
    excerpt:
      'Embarcaciones alegóricas, música y fuegos artificiales sobre el río: la fiesta mayor de Valdivia. El complemento perfecto: un día de campo y río.',
    date: '2026-11-13',
    dateDisplay: '13 de noviembre de 2026',
    author: AUTHOR,
    // Foto: Marco Antonio Correa Flores — CC BY-SA 3.0 — commons.wikimedia.org/wiki/File:Carnaval_Fluvial_en_Valdivia.jpg
    heroImage: {
      src: '/images/blog/noche-valdiviana-que-hacer-febrero.jpg',
      alt: 'Embarcación alegórica iluminada desfilando de noche por el río durante el corso fluvial de Valdivia',
    },
    lead: 'La Noche Valdiviana es la fiesta mayor de Valdivia y una de las celebraciones más tradicionales del sur de Chile: un corso fluvial de embarcaciones alegóricas que desfilan iluminadas por el río, seguido de un show de fuegos artificiales frente a la costanera. Se celebra habitualmente un sábado de febrero como cierre de la Semana Valdiviana; la edición 2026 —la número 108— se realizó el sábado 28 de febrero, con actividades desde la tarde, 32 embarcaciones en competencia y pirotecnia de bajo impacto sonoro. Decenas de miles de personas copan la costanera, así que conviene llegar temprano y reservar alojamiento con meses de anticipación. Si armas ese viaje, guarda un día extra: a unos 45 km de la ciudad —50 minutos en auto— el Fundo Los Huapes ofrece el contrapunto perfecto al carnaval, con cabalgatas por bosque nativo y bajadas en balsa por el Río San Pedro en grupos pequeños.',
    blocks: [
      { type: 'h2', text: '¿Cuándo se celebra la Noche Valdiviana?' },
      {
        type: 'p',
        text: 'La Noche Valdiviana corona la Semana Valdiviana, el aniversario de la ciudad, y se celebra habitualmente un sábado de febrero. La edición 2026 fue el sábado 28 de febrero en la costanera, con una programación que partió en la tarde con murgas y música en vivo, siguió con el corso fluvial por la noche y cerró con un show de fuegos artificiales de bajo impacto sonoro. Para la fecha exacta de 2027, revisa los canales oficiales del municipio cuando se acerque el verano.',
      },
      {
        type: 'p',
        text: 'La semana previa también vale el viaje: Valdivia se llena de actividades culturales, ferias y música, con la ciudad entera volcada a sus ríos. Es el momento del año en que mejor se entiende por qué los valdivianos celebran mirando el agua.',
      },
      { type: 'h2', text: '¿Qué es el corso fluvial?' },
      {
        type: 'p',
        text: 'Es el corazón de la fiesta: embarcaciones decoradas con estructuras alegóricas e iluminación compiten desfilando por el río frente a la costanera, ante un jurado y miles de espectadores en ambas orillas. En 2026 participaron 32 embarcaciones bajo el nombre de Carnaval de las Aguas. Es un espectáculo único en Chile, posible solo en una ciudad que vive mirando sus ríos.',
      },
      {
        type: 'image',
        image: {
          src: '/images/entorno-rio.jpg',
          alt: 'El Río San Pedro visto desde el Fundo Los Huapes, con bosque en ambas orillas',
        },
      },
      { type: 'h2', text: '¿Cómo planificar el viaje para febrero?' },
      {
        type: 'p',
        text: 'Febrero es el mes más alto de la temporada en Valdivia y la Noche Valdiviana multiplica la demanda: alojamiento, restaurantes y navegaciones se llenan. La recomendación es reservar con meses de anticipación, llegar temprano a la costanera para asegurar un buen punto de vista del corso y quedarse más de una noche, para no reducir el viaje a una sola fiesta entre multitudes.',
      },
      {
        type: 'p',
        text: 'Ahí aparece el contraste que hace memorable el viaje: después de una noche de carnaval junto a decenas de miles de personas, un día de campo en grupo de 5 a 10. El mismo río que en la ciudad carga embarcaciones alegóricas, aguas arriba se llama San Pedro y corre verde y tranquilo entre bosque nativo.',
      },
      { type: 'h2', text: '¿Cómo completar el panorama?' },
      {
        type: 'p',
        text: 'En el Fundo Los Huapes puedes navegar ese río de verdad: los programas Del Potrero al Río y Del Río al Potrero combinan cabalgata y bajada en balsa guiada —15 o 20 km según el tramo— por $180.000 por persona con almuerzo campestre. Si prefieres solo caballos, la Cabalgata y Picoteo es media jornada por $80.000, y el asado acampado al palo se agrega por $40.000.',
      },
      {
        type: 'p',
        text: 'Para el viaje largo de verano, la Travesía San Pedro suma 2 días y 1 noche de caballos, balsa y campamento junto al río por $280.000 por persona. La temporada va del 1 de octubre al 30 de mayo, pero febrero es el mes que se agota primero: si vienes por la Noche Valdiviana, reserva el día de campo en cuanto fijes el alojamiento.',
      },
    ],
    cta: {
      title: 'Del carnaval al río tranquilo',
      text: 'Viviste el corso fluvial entre miles de personas. Ahora navega el mismo río aguas arriba, en balsa y en grupo chico, con caballos y almuerzo de campo.',
      links: [
        { label: 'Ver Del Potrero al Río', href: '/programas/potrero-al-rio' },
        { label: 'Ver Cabalgata y Picoteo', href: '/programas/cabalgata-picoteo' },
        { label: 'Reservar', href: '/reservar' },
      ],
    },
  },

  // Fuentes:
  // https://chile.travel/en/itineraries/heritage-route-the-castles-at-the-end-of-the-world-in-valdivia/
  // https://chileestuyo.cl/que-hacer-cerca-de-valdivia-niebla-corral-y-otros-imperdibles/
  // https://www.interpatagonia.com/valdivia/forts-castles.html
  {
    slug: 'navegacion-niebla-corral-mancera-marzo',
    category: 'Valdivia',
    title: 'Niebla, Corral y Mancera: los castillos del fin del mundo',
    metaTitle: 'Niebla y Corral: navegación desde Valdivia en marzo',
    metaDescription:
      'Navega desde Valdivia a los fuertes españoles de Niebla, Corral e Isla Mancera. En marzo, sin multitudes, y combínalo con balsa por el Río San Pedro.',
    excerpt:
      'Fuertes españoles del siglo XVII en la desembocadura del río, sin las multitudes del verano. Y aguas arriba, el San Pedro esperando tu balsa.',
    date: '2026-11-13',
    dateDisplay: '13 de noviembre de 2026',
    author: AUTHOR,
    // Foto: Daniela Silva — CC BY-SA 3.0 — commons.wikimedia.org/wiki/File:Castillo_de_Niebla,_Valdivia.JPG
    heroImage: {
      src: '/images/blog/navegacion-niebla-corral-mancera-marzo.jpg',
      alt: 'Batería de cañones del Castillo de Niebla frente al mar, en la desembocadura del río Valdivia',
    },
    lead: 'En la desembocadura del río Valdivia, la corona española construyó en el siglo XVII uno de los sistemas defensivos más grandes de América: una red de fuertes y baterías de cañones en torno a la bahía de Corral, con el Castillo de Niebla —levantado entre 1645 y 1670—, el fuerte San Sebastián de la Cruz en Corral y el castillo de la Isla Mancera entre sus piezas principales. Hoy se visitan navegando: desde el Muelle Schuster, en plena costanera de Valdivia, zarpan embarcaciones turísticas que recorren el río hasta Corral y Mancera en paseos de medio día a día completo. En marzo, cuando las multitudes del verano ya se fueron, es uno de los mejores panoramas de la región. Y se complementa con otro río: a 45 km de Valdivia, el Fundo Los Huapes baja el Río San Pedro en balsa, combinado con cabalgatas por bosque nativo, hasta el 30 de mayo.',
    blocks: [
      { type: 'h2', text: '¿Qué son los castillos del fin del mundo?' },
      {
        type: 'p',
        text: 'Para proteger Valdivia de piratas y de las armadas holandesa, inglesa y francesa, los españoles fortificaron la bahía de Corral con una red de fuertes y baterías de cañones. El Castillo de Niebla se construyó entre 1645 y 1670, y junto al fuerte San Sebastián de la Cruz en Corral y al castillo de Isla Mancera forman una ruta patrimonial única en Chile.',
      },
      {
        type: 'p',
        text: 'En verano, en Corral se realizan habitualmente recreaciones históricas de la batalla entre patriotas y realistas, con disparos de cañón de época. Los fuertes se pueden visitar por tierra —Niebla está conectada por camino desde Valdivia— o, mejor aún, navegando desde la ciudad, que es como estos muros fueron pensados para verse: desde el agua.',
      },
      { type: 'h2', text: '¿Cómo es la navegación desde Valdivia?' },
      {
        type: 'p',
        text: 'Desde el Muelle Schuster, junto al Mercado Municipal y la Feria Fluvial, zarpan catamaranes y lanchas turísticas que bajan el río hasta la desembocadura, con desembarcos en Corral y en Isla Mancera. Los paseos van de medio día a jornada completa según el operador, y varios incluyen almuerzo a bordo. Horarios y tarifas cambian por temporada: conviene confirmar directamente en el muelle o con cada operador.',
      },
      {
        type: 'image',
        image: {
          src: '/images/balsa-grupo.jpg',
          alt: 'Grupo navegando en balsa por el Río San Pedro',
        },
      },
      { type: 'h2', text: '¿Por qué marzo es el mes inteligente?' },
      {
        type: 'p',
        text: 'Porque el verano valdiviano sigue —días todavía largos, río en calma— pero las multitudes de enero y febrero ya se fueron. Los fuertes, que en pleno verano reciben miles de visitantes al día, se recorren con espacio; el alojamiento baja de precio y las navegaciones zarpan sin aglomeraciones.',
      },
      {
        type: 'p',
        text: 'Lo mismo pasa aguas arriba. En marzo, el Fundo Los Huapes sigue en plena temporada —que corre hasta el 30 de mayo— y los grupos de 5 a 10 personas encuentran fechas con más holgura que en el peak estival. El río baja tranquilo, los potreros siguen verdes y las tardes todavía dan para cerrar la jornada con un asado al aire libre.',
      },
      { type: 'h2', text: '¿Cómo completar el panorama?' },
      {
        type: 'p',
        text: 'Si la navegación a los fuertes te dejó con ganas de más río, el paso siguiente es navegarlo tú: los programas Del Potrero al Río y Del Río al Potrero combinan una cabalgata por bosque nativo con una bajada en balsa guiada por el Río San Pedro —15 o 20 km según el tramo—, por $180.000 por persona con almuerzo campestre. No se necesita experiencia previa.',
      },
      {
        type: 'p',
        text: 'Para un plan más breve está la Cabalgata y Picoteo, media jornada por $80.000, y para el cierre de temporada perfecto, la Travesía San Pedro: 2 días y 1 noche de caballos, balsa y fuego de leña por $280.000, con la opción de asado acampado al palo por $40.000 adicionales en cualquier programa. Historia en la desembocadura, naturaleza aguas arriba: ese es el viaje completo por Los Ríos.',
      },
    ],
    cta: {
      title: 'Ya navegaste hacia el mar. Ahora baja el río.',
      text: 'Conociste los fuertes de la desembocadura. Aguas arriba te espera el San Pedro: balsa guiada, cabalgata por bosque nativo y almuerzo de campo.',
      links: [
        { label: 'Ver Del Río al Potrero', href: '/programas/rio-al-potrero' },
        { label: 'Ver Travesía San Pedro', href: '/programas/travesia-san-pedro' },
        { label: 'Reservar', href: '/reservar' },
      ],
    },
  },
]
