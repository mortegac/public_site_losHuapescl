import type { Post } from './posts'

/**
 * Posts estacionales: actividades en Panguipulli y los Siete Lagos (nov–mar)
 * conectadas con los programas del fundo. Datos verificados por búsqueda web;
 * fuentes citadas en comentarios por post.
 *
 * Conexión geográfica (usada en todos los posts): el lago Panguipulli desagua
 * por el río Enco hacia el lago Riñihue, y del Riñihue nace el Río San Pedro,
 * el río del fundo. Destino Sietelagos y Fundo Los Huapes comparten la cuenca.
 */

const AUTHOR = { name: 'Fundo Los Huapes', role: 'Equipo del fundo' } as const

// Fuentes: https://chile.travel/en/events/columbia-trail-challenge-huilo-huilo-2026/
//          https://welcu.com/nimbus/huilohuilo2026
//          https://www.diariofutrono.cl/noticia/turismo/2026/10/panguipulli-sietelagos-una-escapada-de-primavera-entre-lagos-bosques-y-termas
//          https://chileestuyo.cl/destino/que-hacer-en-la-reserva-biologica-huilo-huilo/
const huiloHuiloTrailPost: Post = {
  slug: 'trail-huilo-huilo-noviembre-panguipulli',
  category: 'Panguipulli',
  title: 'Huilo Huilo en noviembre: trail, cascadas y un río para cerrar el viaje',
  metaTitle: 'Huilo Huilo Trail: qué hacer en Panguipulli en noviembre',
  metaDescription:
    'El Columbia Trail Challenge Huilo Huilo 2026 se corre el 21 de noviembre en Neltume, Panguipulli. Combínalo con cabalgata y balsa en el Río San Pedro.',
  excerpt:
    'La novena edición del Columbia Trail Challenge se corre el 21 de noviembre en la Reserva Biológica Huilo Huilo. El cierre perfecto: dos días a caballo y en balsa por el Río San Pedro.',
  date: '2026-11-13',
  dateDisplay: '13 de noviembre de 2026',
  author: AUTHOR,
  heroImage: {
    src: '/images/entorno-bosque.jpg',
    alt: 'Bosque nativo del Fundo Los Huapes, el mismo tipo de selva valdiviana que rodea los senderos de la cuenca',
  },
  lead: 'El Columbia Trail Challenge Huilo Huilo es la carrera de trail running más conocida del Destino Sietelagos: su novena edición se corre el sábado 21 de noviembre de 2026 en la Reserva Biológica Huilo Huilo, en Neltume, comuna de Panguipulli, con distancias de 2, 6, 10, 20, 45 y 60 km entre bosque valdiviano, ríos y cascadas. El fin de semana del 19 al 21 de noviembre la reserva —famosa por el Salto Huilo Huilo, una caída de 37 metros del río Fuy— recibe a corredores y familias que aprovechan de recorrer senderos, pasarelas y miradores. Y el panorama puede seguir aguas abajo: el lago Panguipulli desagua hacia el lago Riñihue, y del Riñihue nace el Río San Pedro, donde el Fundo Los Huapes combina cabalgatas por bosque nativo con bajadas en balsa guiadas, de octubre a mayo y en grupos de 5 a 10 personas.',
  blocks: [
    { type: 'h2', text: '¿Qué es el Columbia Trail Challenge Huilo Huilo?' },
    {
      type: 'p',
      text: 'Es una carrera de trail running organizada por Nimbus Outdoor dentro de la Reserva Biológica Huilo Huilo, a unos 55 km de Panguipulli por la ruta hacia Choshuenco y Neltume. La edición 2026 —la novena— está programada para el sábado 21 de noviembre, con distancias de 2, 6, 10, 20, 45 y 60 km. Los circuitos cruzan selva patagónica húmeda, con el volcán Mocho-Choshuenco como telón de fondo.',
    },
    {
      type: 'p',
      text: 'La gracia del evento es que hay distancia para todos: desde los 2 km familiares hasta los 60 km para ultramaratonistas. Por eso muchos viajan en grupo, corren distintas distancias y se quedan el fin de semana completo en la zona. Las inscripciones se gestionan en línea a través de la plataforma oficial del organizador, y conviene resolver el alojamiento con tiempo: entre Neltume, Puerto Fuy y Choshuenco la oferta es acotada y el fin de semana de carrera se llena.',
    },
    { type: 'h2', text: '¿Qué más se puede hacer en la reserva?' },
    {
      type: 'p',
      text: 'Aunque no corras, Huilo Huilo vale el viaje. El sendero al Salto Huilo Huilo —37 metros de caída del río Fuy— toma entre 1 y 1,5 horas, y hay rutas más cortas que bordean el río entre raulíes y helechos. La reserva forma parte de una Reserva de la Biosfera declarada por UNESCO en 2007, y en Neltume están además el Museo de los Volcanes y los accesos a los Saltos del Puma.',
    },
    {
      type: 'p',
      text: 'En noviembre el bosque está en su punto: días largos, vertientes cargadas con los deshielos de primavera y menos visitantes que en pleno verano. Ese mismo fin de semana la comuna suma otros panoramas, como el Traro Fest (21 y 22 de noviembre), según el calendario de primavera difundido por el destino.',
    },
    {
      type: 'image',
      image: {
        src: '/images/cabalgata-bosque.jpg',
        alt: 'Caballos a la sombra de árboles nativos en el Fundo Los Huapes',
      },
    },
    { type: 'h2', text: '¿Cómo seguir el viaje hasta el Río San Pedro?' },
    {
      type: 'p',
      text: 'Panguipulli y el Fundo Los Huapes comparten la misma agua. El lago Panguipulli desagua por el río Enco hacia el lago Riñihue, y del Riñihue nace el Río San Pedro, que pasa frente al fundo camino a Valdivia. Después de un fin de semana de piernas cansadas, el plan natural es dejar que el río haga el trabajo: la Travesía San Pedro son 2 días y 1 noche de cabalgata, balsa, asado de campo y noche junto al fuego, por $280.000 por persona.',
    },
    {
      type: 'p',
      text: 'Si el tiempo no alcanza, el programa Del Potrero al Río condensa todo en una jornada: cabalgata por bosque nativo en la mañana, almuerzo campestre y 15 km de balsa por la tarde, por $180.000. La temporada del fundo va del 1 de octubre al 30 de mayo, en grupos de 5 a 10 personas, así que noviembre —con el río cargado de primavera— es uno de los mejores momentos para reservar.',
    },
  ],
  cta: {
    title: 'Corre el bosque, navega el río',
    text: 'Después del trail en Huilo Huilo, baja la cuenca hasta el Río San Pedro: dos días de caballos, balsa y fuego de leña en el Fundo Los Huapes. Grupos de 5 a 10 personas, de octubre a mayo.',
    links: [
      { label: 'Ver Travesía San Pedro', href: '/programas/travesia-san-pedro' },
      { label: 'Ver Del Potrero al Río', href: '/programas/potrero-al-rio' },
      { label: 'Reservar', href: '/reservar' },
    ],
  },
}

// Fuentes: https://www.diariofutrono.cl/noticia/turismo/2026/10/panguipulli-sietelagos-una-escapada-de-primavera-entre-lagos-bosques-y-termas
//          https://www.diariofutrono.cl/noticia/panoramas-y-cultura/2026/11/invitan-a-participar-en-una-nueva-edicion-de-la-travesia-nautica-de-panguipulli
const playasDiciembrePost: Post = {
  slug: 'temporada-playas-panguipulli-diciembre',
  category: 'Panguipulli',
  title: 'Diciembre en los Siete Lagos: parte la temporada de playas',
  metaTitle: 'Temporada de playas en Panguipulli: diciembre Siete Lagos',
  metaDescription:
    'El 18 de diciembre abre la temporada de playas en Panguipulli con siete zonas habilitadas. Aguas abajo, el Río San Pedro suma balsa y caballos.',
  excerpt:
    'Siete zonas de playa habilitadas desde el 18 de diciembre y una carrera de trail el 19: así parte el verano en Panguipulli. Aguas abajo, el Río San Pedro suma balsa y cabalgata.',
  date: '2026-11-13',
  dateDisplay: '13 de noviembre de 2026',
  author: AUTHOR,
  heroImage: {
    src: '/images/entorno-rio-verde.jpg',
    alt: 'Aguas verdes del Río San Pedro entre riberas de bosque, aguas abajo del sistema Siete Lagos',
  },
  lead: 'La temporada de playas de Panguipulli comienza el viernes 18 de diciembre de 2026, con siete zonas habilitadas en distintos puntos de la comuna, según el calendario difundido por el destino. Es la señal de partida del verano en los Siete Lagos: orillas de arena volcánica en el lago Calafquén, la Playa Grande de Panguipulli sobre el lago homónimo, y aguas templadas para nadar, remar en kayak o salir en stand up paddle. Al día siguiente, el sábado 19, se corre la segunda edición del Lagunas Andinas Trail, para quienes prefieren estrenar el verano trotando entre bosques. Y la misma agua que entibia esas playas sigue viaje: del lago Riñihue —donde desagua todo el sistema— nace el Río San Pedro, el río del Fundo Los Huapes, que en diciembre ya está en plena temporada de cabalgatas y bajadas en balsa, en grupos de 5 a 10 personas.',
  blocks: [
    { type: 'h2', text: '¿Cuándo y dónde parte la temporada de playas?' },
    {
      type: 'p',
      text: 'El inicio oficial es el 18 de diciembre de 2026, con siete zonas de playa habilitadas en distintos puntos de la comuna de Panguipulli, según el calendario de panoramas difundido por el destino. Las más conocidas son la Playa Grande de Panguipulli, a pasos del centro y con la isla Curilen al frente, y las playas de Coñaripe y Calafquén sobre el lago Calafquén, de arena oscura de origen volcánico y aguas que se entibian rápido con el sol de diciembre.',
    },
    {
      type: 'p',
      text: 'Diciembre tiene una ventaja silenciosa: las playas recién abiertas todavía no reciben la multitud de enero y febrero. Días largos, agua que empieza a templarse y pueblos funcionando a ritmo de verano, pero sin filas. Para quien arma vacaciones con fechas flexibles, la quincena entre el 18 de diciembre y Año Nuevo es la ventana que los locales se guardan para ellos: los mismos lagos, la mitad de la gente.',
    },
    { type: 'h2', text: '¿Qué actividades acompañan el inicio del verano?' },
    {
      type: 'p',
      text: 'El sábado 19 de diciembre se corre la segunda edición del Lagunas Andinas Trail, una carrera pensada para conocer el territorio y extender la estadía más allá de la competencia. Y la cultura náutica local viene de antes: en noviembre, la Travesía Náutica de Panguipulli reúne kayaks, botes a remo y tablas de SUP alrededor de la isla Curilen, frente a la Playa Grande, con chaleco salvavidas obligatorio y consomé caliente al regreso. Es la señal de que aquí el agua no es solo paisaje: se navega, se rema y se vive.',
    },
    {
      type: 'image',
      image: {
        src: '/images/balsa-grupo.jpg',
        alt: 'Grupo navegando en balsa por el Río San Pedro, en el Fundo Los Huapes',
      },
    },
    { type: 'h2', text: '¿Y si en vez de orilla quieres río? Sigue el agua hasta el San Pedro' },
    {
      type: 'p',
      text: 'Toda el agua de los Siete Lagos termina juntándose: el lago Panguipulli desagua por el río Enco al lago Riñihue, y del Riñihue nace el Río San Pedro. Ahí, camino a Valdivia, el Fundo Los Huapes ofrece lo que ninguna playa: navegar el río en balsa guiada, sin experiencia previa, combinado con cabalgata por bosque nativo y potreros.',
    },
    {
      type: 'p',
      text: 'El programa Del Río al Potrero es ideal para familias que estrenan el verano: 20 km de balsa en la mañana —niños desde 5 años, acompañados por sus padres—, almuerzo campestre y cabalgata por la tarde, por $180.000 por persona. Si prefieres el orden inverso, Del Potrero al Río parte a caballo y cierra con 15 km de río. Y al final de cualquiera de los dos se puede sumar el asado acampado —cordero y estomaguillo al palo— por $40.000 adicionales.',
    },
    {
      type: 'p',
      text: 'Diciembre es de los meses más pedidos de la temporada, que va del 1 de octubre al 30 de mayo en grupos de 5 a 10 personas. Si el plan es combinar playas y río en un mismo viaje, conviene reservar la fecha del fundo antes de armar el resto del itinerario.',
    },
  ],
  cta: {
    title: 'Estrena el verano en el agua',
    text: 'Playas en los Siete Lagos y, aguas abajo, un día completo de balsa y caballos en el Río San Pedro. Niños desde 5 años en Del Río al Potrero.',
    links: [
      { label: 'Ver Del Río al Potrero', href: '/programas/rio-al-potrero' },
      { label: 'Reservar', href: '/reservar' },
    ],
  },
}

// Fuentes: https://sietelagos.cl/event/ferias-costumbristas-verano-panguipulli-sietelagos-2026/
//          https://descubrelosrios.cl/event/ferias-costumbristas-en-localidades-de-panguipulli/
//          https://municipalidadpanguipulli.cl/archivos/45833
const feriasCostumbristasPost: Post = {
  slug: 'ferias-costumbristas-panguipulli-siete-lagos',
  category: 'Panguipulli',
  title: 'Ferias costumbristas de los Siete Lagos: el verano se come en el sur',
  metaTitle: 'Ferias costumbristas en Panguipulli: verano Siete Lagos',
  metaDescription:
    'Ferias costumbristas de Neltume, Coñaripe, Liquiñe y Choshuenco en enero y febrero: una ruta de sabores que cierra con asado al palo en el Río San Pedro.',
  excerpt:
    'Gastronomía campesina, artesanía y cocina a fuego lento en Neltume, Coñaripe, Liquiñe y Choshuenco. La ruta de sabores del verano se cierra con cordero al palo en el fundo.',
  date: '2026-11-13',
  dateDisplay: '13 de noviembre de 2026',
  author: AUTHOR,
  heroImage: {
    src: '/images/gastronomia-spread.jpg',
    alt: 'Mesa de comida de campo del Fundo Los Huapes, con preparaciones tradicionales del sur de Chile',
  },
  lead: 'Las ferias costumbristas son el corazón gastronómico del verano en Panguipulli: entre enero y febrero, localidades como Neltume, Coñaripe, Liquiñe, Choshuenco y Calafquén montan ferias de cocina tradicional, producción campesina y artesanía local. En el verano 2026 funcionaron, entre otras, la feria Sabores del Parque en Neltume, la Feria Artesanal del Parque Kumün, la feria gastronómica AMA y la Feria de Artesanos en Coñaripe, con fechas que cubrieron desde el 1 de enero hasta fines de febrero; para la temporada 2027 el municipio difunde el calendario en sus canales oficiales. Es la forma más directa de probar el territorio: empanadas, tortillas de rescoldo, cocina mapuche y cerveza local. Y la ruta de sabores tiene un cierre natural aguas abajo, en la misma cuenca: el asado acampado del Fundo Los Huapes, cordero y estomaguillo al palo junto al Río San Pedro, disponible de octubre a mayo.',
  blocks: [
    { type: 'h2', text: '¿Dónde están las ferias costumbristas del verano?' },
    {
      type: 'p',
      text: 'Repartidas por toda la comuna. En el verano 2026, Neltume tuvo la feria gastronómica Sabores del Parque y la Feria Artesanal del Parque Kumün; Coñaripe sumó la feria AMA, la Feria de Artesanos y la feria costumbrista Paillalafquén; y hubo actividades en Liquiñe, Choshuenco y Calafquén, incluida la tradicional feria de las mujeres de Choshuenco. Las fechas exactas cambian cada temporada y se anuncian pocas semanas antes —habitualmente entre la primera semana de enero y fines de febrero—, por lo que conviene revisar los canales de la Municipalidad de Panguipulli y del Destino Sietelagos antes de viajar.',
    },
    { type: 'h2', text: '¿Qué se encuentra en una feria costumbrista?' },
    {
      type: 'p',
      text: 'Cocina hecha por las mismas familias del territorio: empanadas, asados, tortillas de rescoldo, preparaciones mapuche, mermeladas y licores caseros. También artesanía en madera y lana, hortalizas de huerta y música en vivo. No son escenografía para turistas: son la economía real de las localidades cordilleranas, y cada almuerzo queda en manos locales. El formato invita a quedarse: mesas largas, humo de leña y conversación con quien cocinó lo que tienes en el plato.',
    },
    {
      type: 'p',
      text: 'La estrategia del buen comensal es simple: recorrer de a poco. Un día Coñaripe y el lago Calafquén, otro día Neltume camino a Huilo Huilo, y Liquiñe para combinar feria con termas. Entre una y otra, los Siete Lagos hacen de paisaje. Dos consejos prácticos: llega con hambre y temprano —los platos más pedidos se agotan— y lleva algo de efectivo, porque en las localidades más pequeñas la señal para pagar con tarjeta puede fallar. Comprar ahí no es solo un buen almuerzo: es la temporada que sostiene a decenas de familias cordilleranas durante el resto del año.',
    },
    {
      type: 'image',
      image: {
        src: '/images/gastronomia-alpalo.jpg',
        alt: 'Cordero al palo cocinándose a fuego de leña en el Fundo Los Huapes',
      },
    },
    { type: 'h2', text: '¿Cómo cerrar la ruta de sabores en el Río San Pedro?' },
    {
      type: 'p',
      text: 'La cuenca que alimenta esas ferias es la misma del fundo: los Siete Lagos desaguan en el lago Riñihue y de ahí nace el Río San Pedro, que pasa frente al Fundo Los Huapes camino a Valdivia. Y la cocina de campo del fundo juega en la misma liga costumbrista: el programa Cabalgata y Picoteo ($80.000 por persona, media jornada) incluye un alto en el estero Huillinco con arrollado huaso, pernil, queso fresco, tortillas y pan amasado.',
    },
    {
      type: 'p',
      text: 'Para el final del viaje, el asado acampado es la feria costumbrista en versión privada: cordero y estomaguillo al palo preparados a fuego de leña por De la Hoguera, con picoteo valdiviano, ensaladas y mote con huesillos, por $40.000 adicionales sobre cualquier programa. Los cupos son acotados —grupos de 5 a 10 personas, del 1 de octubre al 30 de mayo—, así que si el viaje es en enero o febrero, cuando la demanda es más alta, conviene reservar con anticipación.',
    },
  ],
  cta: {
    title: 'Termina la ruta con cordero al palo',
    text: 'Media jornada a caballo con picoteo de campo en el estero Huillinco, y asado acampado a fuego de leña para cerrar. La mesa costumbrista, pero junto al Río San Pedro.',
    links: [
      { label: 'Ver Cabalgata y Picoteo', href: '/programas/cabalgata-picoteo' },
      { label: 'Reservar', href: '/reservar' },
    ],
  },
}

// Fuentes: https://www.petitfute.es/v46692-panguipulli/c1170-manifestation-evenement/c1250-fetes/c251-fete-traditionnelle-folklore-kermesse/511760-semana-de-las-rosas.html
//          https://www.diarioemprende.cl/noticia/eventos/2026/01/boulevard-paseo-las-rosas-de-panguipulli-regresa-para-apoyar-el-emprendimiento-local
//          https://municipalidadpanguipulli.cl/archivos/36585
const semanaRosasPost: Post = {
  slug: 'semana-de-las-rosas-panguipulli-febrero',
  category: 'Panguipulli',
  title: 'Semana de las Rosas: la fiesta grande de Panguipulli',
  metaTitle: 'Semana de las Rosas: qué hacer en Panguipulli en febrero',
  metaDescription:
    'La Semana de las Rosas, fiesta tradicional de Panguipulli, se celebra habitualmente en febrero. Guía del panorama y cómo sumarle un día de río y caballos.',
  excerpt:
    'La ciudad de las rosas celebra su fiesta tradicional en pleno verano: música, gastronomía y artesanía frente al lago. Y a una misma cuenca de distancia, el Río San Pedro.',
  date: '2026-11-13',
  dateDisplay: '13 de noviembre de 2026',
  author: AUTHOR,
  heroImage: {
    src: '/images/entorno-flores.jpg',
    alt: 'Flores en plena temporada en los jardines del Fundo Los Huapes',
  },
  lead: 'La Semana de las Rosas es la fiesta tradicional de Panguipulli, la ciudad del sur de Chile famosa por los miles de rosales que adornan sus calles. Se celebra habitualmente en febrero, en plena temporada alta, y concentra lo mejor del verano lacustre: música en vivo, gastronomía, artesanía y actividades frente al lago Panguipulli. En los últimos veranos la fiesta ha convivido con el Boulevard Paseo Las Rosas, que transforma la calle Martínez de Rozas en un paseo de emprendedores locales entre las 19:00 y la medianoche, con ediciones en enero y febrero. Las fechas exactas de cada temporada las confirma la Municipalidad de Panguipulli en sus canales oficiales. Si vienes a la fiesta, el panorama se completa aguas abajo: del lago Riñihue —donde desagua el sistema de los Siete Lagos— nace el Río San Pedro, donde el Fundo Los Huapes opera cabalgatas y bajadas en balsa de octubre a mayo.',
  blocks: [
    { type: 'h2', text: '¿Qué es la Semana de las Rosas?' },
    {
      type: 'p',
      text: 'Es la celebración anual de Panguipulli y una de las fiestas de verano con más tradición del Destino Sietelagos: una semana de costumbres locales, gastronomía y artesanía que toma la ciudad en plena temporada alta. Se celebra habitualmente en febrero; el programa y las fechas de cada edición los difunde la Municipalidad de Panguipulli.',
    },
    {
      type: 'p',
      text: 'El apodo no es decorativo: Panguipulli cultiva rosales en sus calles desde hace décadas, y en febrero la ciudad está literalmente en flor. Es el mejor telón posible para una fiesta costumbrista con el lago de fondo, y la razón de que muchas familias del sur repitan el viaje cada verano como un rito propio.',
    },
    { type: 'h2', text: '¿Qué es el Boulevard Paseo Las Rosas?' },
    {
      type: 'p',
      text: 'Un paseo nocturno de verano que la municipalidad monta en la calle Martínez de Rozas: emprendedores y artesanos locales, cocina y música en vivo, entre las 19:00 y la medianoche. En el verano 2026 tuvo varias ediciones entre enero y febrero, y volvió a confirmarse como el plan urbano del verano panguipullense: caminar, picar algo y comprar directo a quien lo hace.',
    },
    {
      type: 'p',
      text: 'La fiesta, además, llega con la comuna entera en modo verano: temporada de playas en los lagos Panguipulli y Calafquén, ferias costumbristas en las localidades cordilleranas y termas a menos de una hora. Pocos destinos del sur concentran tantos panoramas en un radio tan corto, y por eso febrero es también el mes en que todo se reserva antes.',
    },
    {
      type: 'image',
      image: {
        src: '/images/cabalgata-verano.jpg',
        alt: 'Cabalgata de verano por los potreros del Fundo Los Huapes',
      },
    },
    { type: 'h2', text: 'De la fiesta al fundo: completa el verano en el Río San Pedro' },
    {
      type: 'p',
      text: 'Panguipulli y el Fundo Los Huapes comparten una misma ruta de agua: el lago Panguipulli desagua hacia el lago Riñihue y de ahí nace el Río San Pedro, que corre frente al fundo camino a Valdivia. Por eso el panorama se arma solo: la fiesta y las playas en los Siete Lagos, y un día de campo auténtico río abajo, sin devolverse por el mismo camino.',
    },
    {
      type: 'p',
      text: 'Para un grupo de amigos o una familia que anda de vacaciones, la Cabalgata y Picoteo es la dosis justa: media jornada a caballo por bosque nativo con picoteo en el estero Huillinco, por $80.000 por persona, en turno de mañana o tarde. Quienes quieran el día completo pueden sumar el río con Del Potrero al Río o Del Río al Potrero ($180.000, balsa guiada incluida), y cerrar con asado acampado por $40.000 más.',
    },
    {
      type: 'p',
      text: 'Ojo con el calendario: febrero es el mes de mayor demanda y los grupos del fundo son de 5 a 10 personas, dentro de una temporada que va del 1 de octubre al 30 de mayo. Si la Semana de las Rosas ya está en tu itinerario, reserva el día de río con anticipación.',
    },
  ],
  cta: {
    title: 'Fiesta en el lago, campo en el río',
    text: 'Suma a tu semana en Panguipulli una cabalgata con picoteo o un día completo con balsa en el Río San Pedro. Grupos de 5 a 10 personas; febrero se agota primero.',
    links: [
      { label: 'Ver Cabalgata y Picoteo', href: '/programas/cabalgata-picoteo' },
      { label: 'Ver Del Potrero al Río', href: '/programas/potrero-al-rio' },
      { label: 'Reservar', href: '/reservar' },
    ],
  },
}

// Fuentes: https://www.emol.com/noticias/Economia/2026/09/16/1211620/termas-geometricas-cierre.html
//          https://duplos.cl/actualidad/panguipulli-termas-geometricas-termas-martini-terrenos-99/279317/2026/09/17/
//          https://laderasur.com/articulo/iconicas-termas-geometricas-dejaran-conaripe-pero-el-recinto-seguira-funcionando-bajo-una-nueva-administracion/
const termasMarzoPost: Post = {
  slug: 'termas-conaripe-marzo-siete-lagos',
  category: 'Panguipulli',
  title: 'Termas en Coñaripe en marzo: agua caliente sin multitudes',
  metaTitle: 'Termas de Coñaripe en marzo: panorama Siete Lagos',
  metaDescription:
    'En marzo las termas de Coñaripe (hoy Termas Martini) se disfrutan sin multitudes. Y río abajo, el Río San Pedro sigue en temporada hasta fines de mayo.',
  excerpt:
    'Pasó el gentío de febrero y las termas de Coñaripe quedan para los que saben. Marzo es el mes secreto de los Siete Lagos, y el Río San Pedro sigue en temporada.',
  date: '2026-11-13',
  dateDisplay: '13 de noviembre de 2026',
  author: AUTHOR,
  heroImage: {
    src: '/images/entorno-atardecer.jpg',
    alt: 'Atardecer sobre los potreros del Fundo Los Huapes, aguas abajo de los Siete Lagos',
  },
  lead: 'Marzo es el mes secreto de los Siete Lagos: el gentío de vacaciones se retira, los precios bajan y las termas de Coñaripe —el gran panorama de agua caliente de la comuna de Panguipulli— se disfrutan con calma. El recinto más famoso es el del estero Cajón Negro, camino al volcán Villarrica: las pozas que durante más de dos décadas operaron como Termas Geométricas funcionan desde el 1 de octubre de 2026 bajo el nombre Termas Martini, administradas por la familia dueña del terreno, y siguen abiertas todo el año según sus nuevos administradores. El valle de Liquiñe, en la misma comuna, suma otro polo termal. Y la temporada del Fundo Los Huapes, río abajo en la misma cuenca, se extiende hasta el 30 de mayo: en marzo el Río San Pedro todavía regala tardes largas para cabalgar y navegar en balsa, en grupos de 5 a 10 personas.',
  blocks: [
    { type: 'h2', text: '¿Qué pasó con las Termas Geométricas?' },
    {
      type: 'p',
      text: 'Un cambio de administración, no un cierre. Tras el fin del vínculo contractual entre la familia Martini —dueña del predio del estero Cajón Negro— y la sociedad ligada al arquitecto Germán del Sol, dueño de la marca, el recinto de Coñaripe pasó a operar desde el 1 de octubre de 2026 como Termas Martini. Las pozas, pasarelas y quinchos siguen ahí, y los nuevos administradores informaron que el servicio continúa funcionando con normalidad.',
    },
    {
      type: 'p',
      text: 'La marca Termas Geométricas, por su parte, anunció un proyecto nuevo en una ubicación aún por confirmar. Antes de ir, conviene revisar horarios y tarifas en los canales oficiales del recinto, porque pueden cambiar con la nueva administración. Lo que no cambia es el escenario: pozas de agua caliente escalonadas por la quebrada del Cajón Negro, en medio de la selva valdiviana.',
    },
    { type: 'h2', text: '¿Por qué marzo es el mejor mes para ir?' },
    {
      type: 'p',
      text: 'Porque combina lo mejor de las dos estaciones: días todavía templados, el bosque empezando a dorarse y una fracción de los visitantes de enero y febrero. Flotar en agua caliente mirando la quebrada sin esperar turno para la poza es un lujo que el verano alto no ofrece. Liquiñe, con su valle de termas más pequeñas y familiares, completa la ruta termal de la comuna. Desde Coñaripe, además, el lago Calafquén queda a pasos: un chapuzón frío después de las pozas es el contraste que los termeros de ley no perdonan.',
    },
    {
      type: 'image',
      image: {
        src: '/images/entorno-rio.jpg',
        alt: 'El Río San Pedro corriendo tranquilo frente al Fundo Los Huapes',
      },
    },
    { type: 'h2', text: 'Termas arriba, río abajo: la misma cuenca' },
    {
      type: 'p',
      text: 'El agua conecta todo el viaje: los lagos de la comuna de Panguipulli desaguan hacia el lago Riñihue, y del Riñihue nace el Río San Pedro, que pasa frente al Fundo Los Huapes camino a Valdivia. En marzo el fundo está en plena temporada —opera del 1 de octubre al 30 de mayo— y con la misma lógica tranquila del mes: ríos sin apuro, potreros dorados, tardes largas y la primera luz de otoño sobre el bosque nativo.',
    },
    {
      type: 'p',
      text: 'La fórmula de fin de verano: una mañana de termas en Coñaripe y, al día siguiente, la Cabalgata y Picoteo del fundo ($80.000, media jornada con picoteo en el estero Huillinco). Si el grupo quiere más, los programas de día completo con balsa —Del Potrero al Río y Del Río al Potrero, $180.000— o la Travesía San Pedro, con sus 2 días y 1 noche de caballos, río y fuego por $280.000, son la despedida grande de la temporada. El asado acampado se suma a cualquiera por $40.000 por persona.',
    },
    {
      type: 'p',
      text: 'Los grupos son de 5 a 10 personas y en marzo las fechas de fin de semana se toman rápido entre quienes estiran el verano. Si tu plan es termas más río, amarra primero la fecha del fundo.',
    },
  ],
  cta: {
    title: 'Estira el verano en la cuenca del San Pedro',
    text: 'Agua caliente en Coñaripe y, río abajo, caballos, balsa y asado al palo en el Fundo Los Huapes. La temporada sigue abierta hasta el 30 de mayo.',
    links: [
      { label: 'Ver Travesía San Pedro', href: '/programas/travesia-san-pedro' },
      { label: 'Ver Cabalgata y Picoteo', href: '/programas/cabalgata-picoteo' },
      { label: 'Reservar', href: '/reservar' },
    ],
  },
}

export const panguipulliPosts: Post[] = [
  huiloHuiloTrailPost,
  playasDiciembrePost,
  feriasCostumbristasPost,
  semanaRosasPost,
  termasMarzoPost,
]
