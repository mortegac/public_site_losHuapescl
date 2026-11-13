import type { Post } from './posts'

/**
 * Posts estacionales: actividades en Futrono y el Lago Ranco (nov–mar)
 * conectadas con los programas del fundo. Datos verificados por búsqueda web;
 * fuentes citadas en comentarios por post.
 */

const AUTHOR = { name: 'Fundo Los Huapes', role: 'Equipo del fundo' } as const

export const futronoPosts: Post[] = [
  // Fuentes: https://termasenchile.cl/termas/termas-de-chihuio-38
  //          https://www.rancoexplora.cl/termas-de-chihuio/
  //          https://www.interpatagonia.com/futrono/termas-chihuio_i.html
  //          https://www.turismopewma.cl/guia/que-hacer-en-futrono.html
  {
    slug: 'termas-de-chihuio-desde-futrono',
    category: 'Futrono',
    title: 'Termas de Chihuío desde Futrono: el panorama de primavera',
    metaTitle: 'Termas de Chihuío desde Futrono: guía noviembre',
    metaDescription:
      'Piscinas termales a unos 38 °C en plena cordillera, a unos 70 km de Futrono. Cómo llegar, qué llevar y cómo sumar una cabalgata en el valle del San Pedro.',
    excerpt:
      'Aguas que brotan a unos 38 °C entre bosque valdiviano, abiertas todo el año. En noviembre, sin el flujo del verano, el viaje se disfruta el doble.',
    date: '2026-11-13',
    dateDisplay: '13 de noviembre de 2026',
    author: AUTHOR,
    heroImage: {
      src: '/images/entorno-bosque.jpg',
      alt: 'Bosque nativo del Fundo Los Huapes, similar al paisaje valdiviano que rodea el camino a las termas',
    },
    lead: 'Las Termas de Chihuío están en plena cordillera, al oriente del Lago Ranco, a unos 70 kilómetros de Futrono por la ruta que pasa por Llifén. Son piscinas al aire libre de aguas que brotan a unos 38 °C, rodeadas de bosque valdiviano, con rústicas tinas de coihue ahuecado, zona de pícnic, baños y vestidores. Abren todo el año, de 9:00 a 20:00 horas, y noviembre es uno de los mejores meses para ir: la cordillera está verde, los días ya son largos y todavía no llega el flujo de visitantes de enero y febrero. Si vienes desde Valdivia o vuelves hacia la ciudad, el valle del Río San Pedro queda en la ruta: en el Fundo Los Huapes, a unos 45 km de Valdivia, puedes sumar una cabalgata con picoteo de campo o una bajada en balsa y convertir el viaje a las termas en una ruta completa por la Región de Los Ríos.',
    blocks: [
      { type: 'h2', text: '¿Cómo se llega a las Termas de Chihuío?' },
      {
        type: 'p',
        text: 'Desde Futrono se toma la Ruta T-551 hacia el oriente, bordeando el Lago Ranco hasta Llifén, y desde ahí el desvío por la T-559 y luego la T-713 hacia la cordillera. El camino está pavimentado casi en su totalidad; solo los últimos kilómetros son de ripio bien mantenido, transitables en auto normal con calma.',
      },
      {
        type: 'p',
        text: 'El trayecto completo desde Futrono ronda los 70 kilómetros y es parte del panorama: se pasa junto al lago, se cruza el valle del río Calcurrupe y se entra en el bosque valdiviano que envuelve las termas. Conviene salir temprano para aprovechar el día completo.',
      },
      { type: 'h2', text: '¿Qué ofrecen las termas?' },
      {
        type: 'p',
        text: 'El recinto tiene piscinas al aire libre de aguas minerales que brotan de la tierra a unos 38 °C, a las que se atribuyen propiedades para problemas reumáticos y de la piel. También hay rústicas tinas de coihue ahuecado para baños individuales, una tradición del sur de Chile que vale la pena probar al menos una vez.',
      },
      {
        type: 'p',
        text: 'Las termas abren a público todo el año, de 9:00 a 20:00 horas, y cuentan con baños, vestidores y una amplia zona de pícnic. Lleva traje de baño, toalla, agua y algo para comer; y confirma las condiciones del camino antes de salir, especialmente si ha llovido.',
      },
      {
        type: 'image',
        image: {
          src: '/images/entorno-flora.jpg',
          alt: 'Vegetación nativa en el Fundo Los Huapes, Región de Los Ríos',
        },
      },
      { type: 'h2', text: '¿Por qué ir en noviembre?' },
      {
        type: 'p',
        text: 'Porque es el punto dulce de la temporada: la primavera ya instaló los días largos, el bosque está en su verde más intenso y el flujo de visitantes de enero y febrero aún no llega. El contraste entre el agua a 38 °C y el aire fresco de la cordillera es, sencillamente, otra experiencia cuando no hay que compartir la piscina con medio Chile.',
      },
      { type: 'h2', text: 'Completa la ruta: caballos y río en el valle del San Pedro' },
      {
        type: 'p',
        text: 'La ruta de las termas combina de forma natural con una parada en el Fundo Los Huapes, en la ribera del Río San Pedro —el desagüe del lago Riñihue—, a unos 45 km de Valdivia. Camino a Futrono o de regreso a la ciudad, puedes dedicar media jornada a la Cabalgata y Picoteo ($80.000 por persona, con alto gastronómico en el estero Huillinco) o un día completo a los programas Del Potrero al Río o Del Río al Potrero ($180.000), que suman una bajada en balsa guiada por el río.',
      },
      {
        type: 'p',
        text: 'La temporada del fundo va del 1 de octubre al 30 de mayo, con grupos de 5 a 10 personas, así que noviembre es un momento ideal para reservar: la misma lógica de las termas aplica al río, menos gente y el campo en plena primavera. Si quieres cerrar la jornada junto al fuego, el asado acampado se agrega por $40.000 adicionales por persona.',
      },
    ],
    cta: {
      title: 'Termas, caballos y río en un solo viaje',
      text: 'Agua termal en la cordillera y, de ida o de vuelta, una cabalgata con picoteo de campo o una bajada en balsa por el Río San Pedro. Noviembre es el mes tranquilo: asegura tu grupo.',
      links: [
        { label: 'Ver Cabalgata y Picoteo', href: '/programas/cabalgata-picoteo' },
        { label: 'Ver Del Potrero al Río', href: '/programas/potrero-al-rio' },
        { label: 'Reservar', href: '/reservar' },
      ],
    },
  },

  // Fuentes: https://www.turismopewma.cl/guia/que-hacer-en-futrono.html
  //          https://www.turismopewma.cl/guia/playa-coique.html
  //          https://www.camaraturismofutrono.cl/que-visitar/
  {
    slug: 'playas-lago-ranco-futrono-diciembre',
    category: 'Futrono',
    title: 'Playas del Lago Ranco: el diciembre perfecto en Futrono',
    metaTitle: 'Playas del Lago Ranco: qué hacer en Futrono en diciembre',
    metaDescription:
      'Playa Coique, Galdámez y Huequecura: arena fina y aguas sobre 15 °C de diciembre a febrero. Guía de playas en Futrono y Lago Ranco, con panorama de río.',
    excerpt:
      'Dos kilómetros de arena fina en Coique, aguas turquesa y lago tibio desde diciembre. La guía para adelantarse al verano en Futrono.',
    date: '2026-11-13',
    dateDisplay: '13 de noviembre de 2026',
    author: AUTHOR,
    heroImage: {
      src: '/images/entorno-rio-verde.jpg',
      alt: 'Aguas verdes del Río San Pedro junto al Fundo Los Huapes, en la Región de Los Ríos',
    },
    lead: 'Entre diciembre y febrero, las playas del Lago Ranco concentran el verano de Futrono. Playa Coique, a 7 kilómetros del pueblo, despliega unos 2 kilómetros de arena fina frente a aguas de color turquesa; Playa Galdámez queda a pasos del centro, con orilla suave ideal para niños; y Playa Huequecura, a 20 kilómetros en Llifén, suma servicios y salvavidas en temporada. El agua del lago supera los 15 °C en los meses de verano: suficiente para nadar, remar en kayak o probar el stand up paddle con operadores locales. Diciembre es el mes para adelantarse, con días largos, lago ya tibio y mucha menos gente que en enero. Y si armas la ruta desde o hacia Valdivia, el valle del Río San Pedro —donde el Fundo Los Huapes ofrece cabalgatas y bajadas en balsa de octubre a mayo— queda a unos 45 kilómetros de la ciudad, perfecto para una parada de día completo.',
    blocks: [
      { type: 'h2', text: '¿Cuáles son las mejores playas cerca de Futrono?' },
      {
        type: 'p',
        text: 'Playa Coique es la postal clásica: a 7 kilómetros de Futrono, en la ribera nororiental del Lago Ranco, con unos 2 kilómetros de arena fina, aguas transparentes y sectores de sombra bajo los pinos con mesas públicas para pícnic. Es el punto de partida natural para kayak y stand up paddle.',
      },
      {
        type: 'p',
        text: 'Playa Galdámez está en el propio centro de Futrono, con acceso a pie y olas suaves que la hacen cómoda para familias con niños chicos. Y a 20 kilómetros, en Llifén, Playa Huequecura es para muchos la más espectacular de la cuenca: arena fina respaldada por el cerro Huequecura, con equipamiento y salvavidas en verano.',
      },
      { type: 'h2', text: '¿Cuándo conviene ir y qué se puede hacer?' },
      {
        type: 'p',
        text: 'La temporada de baño va de diciembre a febrero, cuando la temperatura del agua supera los 15 °C. Diciembre tiene una ventaja concreta: los días más largos del año y las playas todavía tranquilas, antes del peak de visitantes de enero y febrero. Además del baño, hay kayak, stand up paddle, pesca deportiva en los ríos cercanos —con licencia al día— y atardeceres que justifican quedarse hasta la última luz.',
      },
      {
        type: 'image',
        image: {
          src: '/images/entorno-atardecer.jpg',
          alt: 'Atardecer sobre los potreros del Fundo Los Huapes',
        },
      },
      { type: 'h2', text: 'Del lago al río: suma una jornada en el Fundo Los Huapes' },
      {
        type: 'p',
        text: 'Si el lago es el plan de playa, el Río San Pedro es el plan de aventura. El Fundo Los Huapes está en la ribera del San Pedro —el desagüe del lago Riñihue—, a unos 45 km de Valdivia, en la ruta natural de quien combina Futrono con la ciudad. El programa Del Río al Potrero ($180.000 por persona) está pensado justo para familias: 20 km de balsa guiada en la mañana, almuerzo campestre y cabalgata por bosque nativo en la tarde, con niños desde los 5 años acompañados por sus padres.',
      },
      {
        type: 'p',
        text: 'Si prefieres algo más corto, la Cabalgata y Picoteo ($80.000) resuelve media jornada con caballos mansos, guía y un picoteo de campo en el estero Huillinco. Los grupos son de 5 a 10 personas y la temporada corre del 1 de octubre al 30 de mayo: en diciembre, igual que en las playas, se viaja mejor antes de que llegue la ola de enero. El asado acampado —cordero al palo con fuego de leña— se puede sumar por $40.000 por persona para cerrar el día.',
      },
    ],
    cta: {
      title: 'Lago de día, río de aventura',
      text: 'Playa en el Ranco y balsa más caballos en el San Pedro: el combo de diciembre en Los Ríos. Grupos de 5 a 10 personas, ideal para familias con niños desde 5 años.',
      links: [
        { label: 'Ver Del Río al Potrero', href: '/programas/rio-al-potrero' },
        { label: 'Reservar', href: '/reservar' },
      ],
    },
  },

  // Fuentes: https://www.diariodevaldivia.cl/noticia/panoramas-y-cultura/2026/01/awka-lafken-fest-6-futrono-se-prepara-para-la-fiesta-multicultural-del-verano
  //          https://www.rioenlinea.cl/xiii-festival-internacional-de-folclor-de-futrono-contara-con-conjuntos-de-ecuador-peru-y-colombia/
  //          https://www.fiestascostumbristas.cl/2026/01/08/actividades-verano-2026-lago-ranco/
  {
    slug: 'festivales-verano-futrono-enero',
    category: 'Futrono',
    title: 'Festivales de verano en Futrono: la agenda de enero',
    metaTitle: 'Qué hacer en Futrono en enero: festivales de verano',
    metaDescription:
      'Awka Lafken Fest y Festival Internacional de Folclor: en 2026 se vivieron a fines de enero en Futrono. Guía para armar tu verano en el Lago Ranco.',
    excerpt:
      'Música en vivo en la Plaza de la República, folclor latinoamericano y ferias costumbristas: enero convierte a Futrono en el escenario del Ranco.',
    date: '2026-11-13',
    dateDisplay: '13 de noviembre de 2026',
    author: AUTHOR,
    heroImage: {
      src: '/images/fundo-campo.jpg',
      alt: 'Campo del Fundo Los Huapes en verano, Región de Los Ríos',
    },
    lead: 'En enero, Futrono se convierte en escenario. El Awka Lafken Fest —la fiesta multicultural del verano, que en su edición 2026 se realizó el sábado 31 de enero desde las 12:00 en la Plaza de la República— reúne música en vivo, cultura y emprendimiento local, con estilos que van de la cumbia tropical al rock alternativo. Esos mismos días se celebra habitualmente el Festival Internacional de Folclor de Futrono, que en su XIII versión trajo conjuntos de Ecuador, Perú y Colombia. Y en paralelo, las ferias costumbristas de la cuenca del Ranco funcionan durante todo enero y febrero. Si vienes al verano de Los Ríos, conviene armar la ruta completa: entre Valdivia y Futrono, el valle del Río San Pedro ofrece el contrapunto perfecto a la fiesta —una cabalgata por bosque nativo o una bajada en balsa en el Fundo Los Huapes, a unos 45 km de Valdivia.',
    blocks: [
      { type: 'h2', text: '¿Qué festivales hay en Futrono en enero?' },
      {
        type: 'p',
        text: 'El Awka Lafken Fest es la cita multicultural del verano futronino: música en vivo, cultura, emprendimiento local y ambiente familiar en la Plaza de la República. La edición 2026 —la sexta— se realizó el sábado 31 de enero desde el mediodía, con un cartel que mezcló cumbia tropical, ranchera, música electrónica y rock alternativo. Las fechas de cada edición se confirman en enero, así que conviene revisar los canales municipales antes de viajar.',
      },
      {
        type: 'p',
        text: 'El Festival Internacional de Folclor de Futrono se celebra habitualmente también a fines de enero. Su XIII versión contó con el grupo Renacer Folklórico de Ecuador, el Ballet Folklórico Iroko de Colombia y la Academia Corazón Peruano de Perú: una noche de danza y música latinoamericana en pleno Lago Ranco.',
      },
      { type: 'h2', text: '¿Qué más hacer esos días en la cuenca del Ranco?' },
      {
        type: 'p',
        text: 'Durante enero y febrero funciona el circuito de ferias costumbristas de la cuenca: Delicias de Caunahue cerca de Llifén, Piuke Lafquen en Isla Huapi, La Chascona de Neruda, la feria de Maihue y otras, generalmente entre las 10:00 y las 19:00 o 20:00 horas. Son la mejor forma de probar cocina de campo —papas nativas, pan amasado, asados— directamente de manos de las familias que la preparan.',
      },
      {
        type: 'image',
        image: {
          src: '/images/gastronomia-picoteo.jpg',
          alt: 'Picoteo de campo servido en el Fundo Los Huapes: arrollado, queso fresco y pan amasado',
        },
      },
      { type: 'h2', text: 'El contrapunto a la fiesta: una jornada de campo en el San Pedro' },
      {
        type: 'p',
        text: 'Después de un fin de semana de festivales, el cuerpo pide campo abierto. El Fundo Los Huapes, en la ribera del Río San Pedro a unos 45 km de Valdivia, queda en la ruta natural entre la ciudad y Futrono y ofrece exactamente eso: la Cabalgata y Picoteo ($80.000 por persona) recorre bosque nativo y potreros en media jornada, con un alto gastronómico en el estero Huillinco; los programas de día completo ($180.000) suman una bajada en balsa guiada por el río.',
      },
      {
        type: 'p',
        text: 'Y si quieres que el verano tenga un capítulo mayor, la Travesía San Pedro ($280.000 por persona) son dos días y una noche de caballos, río y fuego de leña. Enero es el mes de mayor demanda de la temporada —que va del 1 de octubre al 30 de mayo, con grupos de 5 a 10 personas—, así que si el plan es combinar festivales con campo, reserva con anticipación.',
      },
    ],
    cta: {
      title: 'Festivales en Futrono, campo en el San Pedro',
      text: 'Arma el verano completo: música y folclor en el lago, y una jornada a caballo con bajada en balsa en la ruta a Valdivia. En enero los cupos vuelan: grupos de 5 a 10 personas.',
      links: [
        { label: 'Ver Cabalgata y Picoteo', href: '/programas/cabalgata-picoteo' },
        { label: 'Ver Travesía San Pedro', href: '/programas/travesia-san-pedro' },
        { label: 'Reservar', href: '/reservar' },
      ],
    },
  },

  // Fuentes: https://www.ed.cl/event/expo-futrono-2026/
  //          https://diarioelranco.cl/2026/02/13/municipalidad-y-corporacion-futrono-dan-vida-a-la-expo-2026-el-gran-encuentro-del-verano-en-la-comuna/
  //          https://somosfutrono.cl/2025/02/07/expo-futrono-2025-mas-de-100-expositores-y-nutrida-programacion-cultural-daran-vida-a-la-xiii-version-durante-los-dias-6-7-8-y-9-de-febrero/
  //          https://www.turismopewma.cl/guia/que-hacer-en-futrono.html
  {
    slug: 'expo-futrono-ferias-costumbristas-febrero',
    category: 'Futrono',
    title: 'Expo Futrono y ferias costumbristas: el febrero del Ranco',
    metaTitle: 'Expo Futrono y ferias costumbristas en febrero',
    metaDescription:
      'La Expo Futrono reúne a más de 90 artesanos; la edición 2026 fue del 12 al 15 de febrero. Suma el circuito de ferias costumbristas del Lago Ranco.',
    excerpt:
      'Artesanía en madera y lana, cocina campesina y música en vivo frente a la municipalidad: febrero es el mes de las manos del Ranco.',
    date: '2026-11-13',
    dateDisplay: '13 de noviembre de 2026',
    author: AUTHOR,
    heroImage: {
      src: '/images/entorno-ovejas.jpg',
      alt: 'Ovejas pastando en los potreros del Fundo Los Huapes',
    },
    lead: 'La Expo Futrono es la feria de artesanía y oficios más importante del verano en la comuna, organizada por la Corporación Futrono junto a la municipalidad. Se celebra habitualmente en la primera quincena de febrero: la edición 2026 se realizó del 12 al 15 de febrero en calle Alessandri, frente a la Municipalidad de Futrono, de 10:00 a 21:00 horas, con más de 90 expositores de madera, fibras vegetales, fieltro, alfarería, talabartería y productos gourmet, además de música en vivo y actividades familiares. En paralelo, el circuito de ferias costumbristas de la cuenca del Ranco sigue activo durante todo febrero. Si viajas desde Valdivia, la ruta pasa cerca del valle del Río San Pedro, donde el Fundo Los Huapes —a unos 45 km de la ciudad— ofrece cabalgatas con picoteo de campo y bajadas en balsa: la parada ideal para estirar el viaje un día más.',
    blocks: [
      { type: 'h2', text: '¿Qué es la Expo Futrono y cuándo se celebra?' },
      {
        type: 'p',
        text: 'Es el gran encuentro del verano futronino: una feria que reúne artesanía y oficios de la Región de Los Ríos —madera, fibras vegetales, fieltro, alfarería, cantería, talabartería— junto a productos gourmet, viveros, un mercado campesino y programación cultural con música en vivo. La edición 2026, la decimocuarta, se realizó del 12 al 15 de febrero de 10:00 a 21:00 horas, en calle Alessandri frente a la municipalidad, con foco especial en el desarrollo textil.',
      },
      {
        type: 'p',
        text: 'La feria se celebra habitualmente en la primera quincena de febrero —en 2025 fue del 6 al 9— y las fechas exactas de cada edición se anuncian al inicio del verano, por lo que conviene confirmar en los canales de la Corporación Futrono antes de viajar.',
      },
      { type: 'h2', text: '¿Qué ferias costumbristas se pueden recorrer en febrero?' },
      {
        type: 'p',
        text: 'El circuito de la cuenca del Ranco funciona durante enero y febrero, generalmente de 10:00 a 19:00 o 20:00 horas: Delicias de Caunahue a 3 km de Llifén —famosa por sus papas nativas—, Piuke Lafquen en Isla Huapi, La Chascona de Neruda, la feria Llifén-Chollinco, Estación Hueinahue y la feria de Maihue, la más remota del circuito. Juntas arman una ruta gastronómica y artesanal que puede llenar dos o tres días de viaje alrededor del lago.',
      },
      {
        type: 'image',
        image: {
          src: '/images/gastronomia-spread.jpg',
          alt: 'Mesa de gastronomía de campo en el Fundo Los Huapes',
        },
      },
      { type: 'h2', text: 'De la feria a la mesa de campo: el cierre en el San Pedro' },
      {
        type: 'p',
        text: 'Si lo que te trae al Ranco son los oficios y la cocina campesina, el Fundo Los Huapes es la continuación natural del viaje. En la ribera del Río San Pedro, a unos 45 km de Valdivia y en la ruta entre la ciudad y Futrono, el fundo ofrece el programa Del Potrero al Río ($180.000 por persona): cabalgata por bosque nativo en la mañana, almuerzo campestre y 15 km de balsa guiada por el río en la tarde.',
      },
      {
        type: 'p',
        text: 'El picoteo del estero Huillinco —arrollado huaso, queso fresco, pernil, tortillas y pan amasado— está incluido en todos los programas con cabalgata, y el asado acampado al palo, preparado con fuego de leña, se suma por $40.000 por persona: la misma cocina de campo de las ferias, pero servida en una mesa larga junto al río. Febrero es plena temporada alta —la temporada va del 1 de octubre al 30 de mayo, en grupos de 5 a 10 personas—, así que reserva tu fecha antes de armar la maleta.',
      },
    ],
    cta: {
      title: 'Artesanía en el lago, asado junto al río',
      text: 'Recorre la Expo Futrono y las ferias del Ranco, y cierra el viaje con cabalgata, balsa y cocina de campo en el San Pedro. Febrero se agenda rápido: asegura tu grupo.',
      links: [
        { label: 'Ver Del Potrero al Río', href: '/programas/potrero-al-rio' },
        { label: 'Ver gastronomía de campo', href: '/gastronomia' },
        { label: 'Reservar', href: '/reservar' },
      ],
    },
  },

  // Fuentes: https://es.wikipedia.org/wiki/Isla_Huapi
  //          https://www.diariofutrono.cl/noticia/turismo/2025/01/epu-huapi-horarios-y-tarifa-de-barcaza-que-une-a-futrono-con-isla-huapi
  //          https://www.turismopewma.cl/guia/que-hacer-en-futrono.html
  //          https://chileestuyo.cl/destino/lago-ranco/
  {
    slug: 'isla-huapi-lago-ranco-como-visitarla',
    category: 'Futrono',
    title: 'Isla Huapi: cruzar el Lago Ranco hacia territorio mapuche',
    metaTitle: 'Isla Huapi, Lago Ranco: cómo visitarla desde Futrono',
    metaDescription:
      'Barcaza desde Puerto Futrono, una hora de navegación y 826 hectáreas de cultura mapuche huilliche. Cómo visitar Isla Huapi y cuándo conviene el cruce.',
    excerpt:
      'Una hora de navegación por el Lago Ranco hasta la mayor de sus islas: 826 hectáreas habitadas por comunidades mapuche huilliche.',
    date: '2026-11-13',
    dateDisplay: '13 de noviembre de 2026',
    author: AUTHOR,
    heroImage: {
      src: '/images/entorno-aereo.jpg',
      alt: 'Vista aérea del Río San Pedro y los campos del Fundo Los Huapes',
    },
    lead: 'Isla Huapi es la mayor de las trece islas del Lago Ranco: 826 hectáreas en el centro-norte del lago, habitadas por más de 600 personas, cerca del 90% de origen mapuche y huilliche. Se llega en la barcaza Epu Huapi, un servicio subsidiado que zarpa desde Puerto Futrono y recorre las 8 millas náuticas del cruce en torno a una hora de navegación. En la isla hay senderos, miradores como el cerro Treng-Treng, lugares cargados de relatos como la Piedra Bruja y, en verano, la feria costumbrista Piuke Lafquen, donde las propias comunidades comparten su cocina y artesanía. Es una visita que se hace con calma y respeto: la isla es territorio habitado, no un parque temático. Y si tu ruta al Ranco parte o termina en Valdivia, el valle del Río San Pedro —con el Fundo Los Huapes a unos 45 km de la ciudad— es la parada de campo ideal del recorrido.',
    blocks: [
      { type: 'h2', text: '¿Cómo se llega a Isla Huapi?' },
      {
        type: 'p',
        text: 'La barcaza Epu Huapi conecta Puerto Futrono con la isla durante todo el año: es un servicio subsidiado por el Estado, pensado primero para los habitantes de la isla y abierto también a visitantes, con tarifas diferenciadas. El cruce cubre 8 millas náuticas y toma alrededor de una hora de navegación por el lago.',
      },
      {
        type: 'p',
        text: 'Los horarios varían según el día —los jueves suele haber mantención sin servicio— y están sujetos a cambios definidos por la propia Comunidad de Isla Huapi, así que la regla de oro es confirmar los zarpes antes de viajar, en la oficina de turismo de Futrono o por los canales de la barcaza. En verano los fines de semana ofrecen más frecuencias, lo que facilita ir y volver en el día.',
      },
      { type: 'h2', text: '¿Qué se puede hacer en la isla?' },
      {
        type: 'p',
        text: 'La isla es considerada una reserva del pueblo mapuche y concentra buena parte del patrimonio cultural del Lago Ranco. Entre sus atractivos están el cerro Treng-Treng, la Piedra Bruja y las cuevas del sector Fucha Winka, además de playas como Puerto Sur y senderos que se recorren a pie, a caballo o en carreta. En temporada estival se realizan actividades tradicionales y funciona la feria costumbrista Piuke Lafquen, parte del circuito de ferias de la cuenca.',
      },
      {
        type: 'p',
        text: 'Visitar Huapi es entrar en territorio habitado por comunidades que están construyendo su propio circuito turístico: se viaja con respeto, se pregunta antes de fotografiar y se compra directo a las familias. Esa es, precisamente, la gracia del cruce.',
      },
      {
        type: 'image',
        image: {
          src: '/images/experiencia-caballos.jpg',
          alt: 'Caballos del Fundo Los Huapes listos para una cabalgata guiada',
        },
      },
      { type: 'h2', text: 'Antes o después del cruce: dos días de río en el San Pedro' },
      {
        type: 'p',
        text: 'Si Isla Huapi es el capítulo cultural del viaje, el Río San Pedro puede ser el capítulo de aventura. El Fundo Los Huapes está en la ribera del San Pedro —el desagüe del lago Riñihue—, a unos 45 km de Valdivia, en la ruta natural de quien combina la ciudad con el Lago Ranco. La Travesía San Pedro ($280.000 por persona) son dos días y una noche: cabalgatas por bosque nativo, bajada en balsa guiada y noche de fuego junto al río.',
      },
      {
        type: 'p',
        text: 'Para una versión de un día, los programas Del Potrero al Río y Del Río al Potrero ($180.000) combinan caballos y balsa con almuerzo campestre, y la Cabalgata y Picoteo ($80.000) resuelve media jornada. La temporada va del 1 de octubre al 30 de mayo, con grupos de 5 a 10 personas: el mismo espíritu de la isla —poca gente, territorio real, cocina de campo—, a escala de un fundo familiar.',
      },
    ],
    cta: {
      title: 'Del lago a la balsa: arma tu ruta por Los Ríos',
      text: 'Cruza a Isla Huapi con la barcaza y suma dos días de caballos y río en el San Pedro, camino a o desde Valdivia. Grupos reducidos de 5 a 10 personas, de octubre a mayo.',
      links: [
        { label: 'Ver Travesía San Pedro', href: '/programas/travesia-san-pedro' },
        { label: 'Ver Del Río al Potrero', href: '/programas/rio-al-potrero' },
        { label: 'Reservar', href: '/reservar' },
      ],
    },
  },
]
