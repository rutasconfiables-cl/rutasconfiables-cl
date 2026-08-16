export const destinationImages = {
  snow: "https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=1600&q=88",
  mountain: "https://images.unsplash.com/photo-1704304343233-492236e5f34b?auto=format&fit=crop&w=1600&q=88",
  colorado: "https://images.unsplash.com/photo-1529669851596-ba9a5549af95?auto=format&fit=crop&w=1600&q=88",
  parva: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=1600&q=88",
  lion: "https://images.unsplash.com/photo-1649724264150-50dbfdc606c5?auto=format&fit=crop&w=1600&q=88",
  vineyard: "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=1600&q=88",
  coast: "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=1600&q=88",
  reservoir: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=1600&q=88",
  thermal: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=1600&q=88",
};

export function destinationSlug(title: string) {
  return title.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase().replace(/&/g, " ").replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "");
}

const base = [
  ["Snow Park Farellones", "/destinations/snow-park-farellones.jpg", "Nieve y diversión en familia", "Disfruta Farellones con traslado privado, cómodo y coordinado desde Santiago."],
  ["Valle Nevado", "/destinations/valle-nevado.jpg", "Una jornada en la alta cordillera", "Viaja a uno de los centros de montaña más reconocidos de Chile con seguridad y comodidad."],
  ["El Colorado", "/destinations/el-colorado.jpg", "Nieve a pasos de Santiago", "Planifica tu día de ski o paseo panorámico con un traslado adaptado a tu grupo."],
  ["La Parva", "/destinations/la-parva.jpg", "Montaña, nieve y vistas únicas", "Llega sin preocupaciones y disfruta una experiencia cordillerana personalizada."],
  ["Parque Safari", "/destinations/parque-safari.jpg", "Una aventura para toda la familia", "Vive una jornada inolvidable en Parque Safari con traslado de ida y regreso."],
  ["Portillo & Laguna del Inca", "/destinations/portillo-laguna-del-inca.webp", "Postales inolvidables de los Andes", "Conoce Portillo y la Laguna del Inca en un recorrido privado desde Santiago."],
  ["Viña Concha y Toro", "/destinations/vina-concha-y-toro.jpg", "Tradición vitivinícola chilena", "Descubre sus jardines, bodegas e historia con transporte privado coordinado."],
  ["Viña Alyan", "/destinations/vina-alyan.jpg", "Vino y atardecer entre viñedos", "Una experiencia boutique con traslado cómodo para disfrutar sin preocupaciones."],
  ["Viña Vik", "/destinations/vina-vik.jpg", "Arquitectura, arte y vinos premium", "Conoce uno de los proyectos vitivinícolas más singulares de Chile en un viaje a tu medida."],
  ["Viña Santa Rita", "/destinations/vina-santa-rita.jpg", "Historia y vinos en el Valle del Maipo", "Recorre viñedos, jardines y patrimonio con traslado privado desde Santiago."],
  ["Viña del Mar & Valparaíso", "/destinations/vina-del-mar-valparaiso.jpg", "Dos ciudades, una gran experiencia", "Descubre el litoral, los cerros y los principales atractivos de ambas ciudades."],
  ["Algarrobo & Isla Negra", "/destinations/algarrobo-isla-negra.jpg", "Costa, cultura y descanso", "Recorre playas y paisajes del litoral central en una jornada personalizada."],
  ["Cajón del Maipo", "/destinations/cajon-del-maipo.jpg", "Naturaleza cerca de Santiago", "Explora montañas, miradores y rincones cordilleranos con un itinerario flexible."],
  ["Embalse del Yeso", "/destinations/embalse-del-yeso.jpg", "Paisajes de alta montaña", "Conoce sus aguas turquesa y el entorno andino con transporte seguro y planificado."],
  ["Termas de Colina", "/destinations/termas-de-colina.jpg", "Relajación en plena cordillera", "Disfruta piscinas termales naturales y paisajes únicos con traslado privado."],
  ["Tours personalizados", "/destinations/tours-personalizados.jpg", "Tu ruta, a tu manera", "Creamos un recorrido exclusivo según tus intereses, tiempos y tamaño de grupo."],
] as const;

export const destinations = base.map(([title, image, eyebrow, description]) => ({
  slug: destinationSlug(title), title, image, eyebrow, description,
  benefits: ["Traslado privado de ida y regreso", "Coordinación personalizada del itinerario", "Atención directa antes y durante el viaje"],
}));

export type Destination = (typeof destinations)[number];

type Locale = "es" | "pt" | "en";
type LocalizedDetail = { description: string; activities: string[] };

const destinationGalleries: Record<string, string[]> = {
  "snow-park-farellones": ["/destinations/snow-park-farellones.jpg", "/destinations/gallery/snow-park-farellones-2.jpg"],
  "valle-nevado": ["/destinations/valle-nevado.jpg", "/destinations/gallery/valle-nevado-2.jpg"],
  "la-parva": ["/destinations/la-parva.jpg", "/destinations/gallery/la-parva-2.jpg"],
  "parque-safari": ["/destinations/parque-safari.jpg", "/destinations/gallery/parque-safari-2.jpg"],
  "portillo-laguna-del-inca": ["/destinations/portillo-laguna-del-inca.webp", "/destinations/gallery/portillo-laguna-del-inca-2.jpg"],
  "vina-vik": ["/destinations/vina-vik.jpg", "/destinations/gallery/vina-vik-2.jpg"],
  "vina-del-mar-valparaiso": ["/destinations/vina-del-mar-valparaiso.jpg", "/destinations/gallery/valparaiso-2.jpg"],
  "cajon-del-maipo": ["/destinations/cajon-del-maipo.jpg", "/destinations/gallery/embalse-del-yeso-2.jpg"],
  "embalse-del-yeso": ["/destinations/embalse-del-yeso.jpg", "/destinations/gallery/embalse-del-yeso-2.jpg"],
  "termas-de-colina": ["/destinations/termas-de-colina.jpg", "/destinations/gallery/termas-de-colina-2.webp"],
  "tours-personalizados": ["/destinations/tours-personalizados.jpg", "/destinations/cajon-del-maipo.jpg", "/destinations/vina-concha-y-toro.jpg"],
};

const detailCopy: Record<string, Record<Locale, LocalizedDetail>> = {
  "snow-park-farellones": {
    es:{description:"Parque Farellones es una alternativa familiar para disfrutar la nieve sin necesidad de ser esquiador. Durante la temporada funcionan actividades como tubing, trineos y canopy, sujetas a condiciones de nieve y operación.",activities:["Deslizarse en tubing y trineos","Disfrutar juegos de nieve y vistas de los Andes"]},
    pt:{description:"O Parque Farellones é uma opção familiar para aproveitar a neve sem precisar esquiar. Na temporada há atividades como tubing, trenós e tirolesa, sujeitas às condições da neve e da operação.",activities:["Descer de tubing e trenó","Curtir a neve e as vistas dos Andes"]},
    en:{description:"Farellones Park is a family-friendly way to enjoy the snow without needing to ski. Seasonal activities include tubing, sledding and ziplining, subject to snow and operating conditions.",activities:["Ride tubing lanes and sleds","Enjoy snow play and Andean views"]}},
  "valle-nevado": {
    es:{description:"Valle Nevado es un centro de montaña de gran altitud con pistas para distintos niveles, escuela de ski, arriendo de equipos, restaurantes y amplias panorámicas de la cordillera.",activities:["Practicar ski o snowboard","Tomar clases y disfrutar la gastronomía de montaña"]},
    pt:{description:"Valle Nevado é um centro de alta montanha com pistas para diferentes níveis, escola de esqui, aluguel de equipamentos, restaurantes e amplas vistas da cordilheira.",activities:["Esquiar ou praticar snowboard","Fazer aulas e aproveitar a gastronomia da montanha"]},
    en:{description:"Valle Nevado is a high-altitude mountain resort with terrain for different ability levels, ski school, equipment rental, restaurants and sweeping Andean views.",activities:["Ski or snowboard","Take lessons and enjoy mountain dining"]}},
  "el-colorado": {
    es:{description:"El Colorado combina pistas para principiantes y esquiadores experimentados con servicios de escuela, arriendo y restaurantes. También es una excelente parada para contemplar la cordillera nevada.",activities:["Esquiar en pistas de distintos niveles","Visitar miradores y disfrutar la nieve"]},
    pt:{description:"El Colorado reúne pistas para iniciantes e experientes, escola, aluguel e restaurantes. Também é uma excelente parada para contemplar a cordilheira nevada.",activities:["Esquiar em pistas de vários níveis","Visitar mirantes e aproveitar a neve"]},
    en:{description:"El Colorado combines beginner and advanced ski terrain with lessons, rentals and restaurants. It is also a rewarding stop for panoramic views of the snow-covered Andes.",activities:["Ski terrain for several ability levels","Visit viewpoints and enjoy the snow"]}},
  "la-parva": {
    es:{description:"La Parva es un pueblo y centro de ski integrado a la montaña, conocido por sus vistas de Santiago, pistas variadas y ambiente cordillerano más residencial.",activities:["Practicar ski y snowboard","Fotografiar la cordillera y el valle de Santiago"]},
    pt:{description:"La Parva é uma vila e estação de esqui integrada à montanha, conhecida pelas vistas de Santiago, pistas variadas e ambiente alpino residencial.",activities:["Esquiar e praticar snowboard","Fotografar os Andes e o vale de Santiago"]},
    en:{description:"La Parva is a mountain village and ski resort known for views toward Santiago, varied terrain and a more residential alpine atmosphere.",activities:["Ski and snowboard","Photograph the Andes and Santiago valley"]}},
  "portillo-laguna-del-inca": {
    es:{description:"Portillo se encuentra junto a la Laguna del Inca, un lago andino de aguas turquesa rodeado por altas cumbres. El recorrido permite conocer la ruta internacional y sus miradores de montaña.",activities:["Contemplar la Laguna del Inca","Recorrer miradores de la ruta Los Libertadores"]},
    pt:{description:"Portillo fica junto à Laguna del Inca, um lago andino de águas turquesa cercado por altos picos. O passeio percorre a rota internacional e seus mirantes.",activities:["Contemplar a Laguna del Inca","Conhecer mirantes da rota Los Libertadores"]},
    en:{description:"Portillo sits beside Laguna del Inca, a turquoise Andean lake surrounded by high peaks. The journey follows the international highway and its dramatic mountain viewpoints.",activities:["See Laguna del Inca","Explore viewpoints along Los Libertadores road"]}},
  "cajon-del-maipo": {
    es:{description:"Cajón del Maipo reúne pueblos cordilleranos, ríos, miradores y áreas naturales al sureste de Santiago. La ruta puede adaptarse con paradas panorámicas y gastronomía local.",activities:["Recorrer pueblos y miradores cordilleranos","Disfrutar gastronomía y naturaleza local"]},
    pt:{description:"Cajón del Maipo reúne povoados andinos, rios, mirantes e áreas naturais ao sudeste de Santiago. A rota pode incluir paradas panorâmicas e gastronomia local.",activities:["Conhecer povoados e mirantes andinos","Aproveitar gastronomia e natureza local"]},
    en:{description:"Cajón del Maipo brings together Andean villages, rivers, viewpoints and natural areas southeast of Santiago. The route can include scenic stops and local food.",activities:["Explore mountain villages and viewpoints","Enjoy local food and nature"]}},
  "embalse-del-yeso": {
    es:{description:"Embalse del Yeso es una reserva de agua de alta montaña famosa por su color turquesa y paisaje rocoso. El acceso depende del clima, la ruta y las restricciones vigentes.",activities:["Fotografiar el embalse y las montañas","Realizar paradas panorámicas en Cajón del Maipo"]},
    pt:{description:"Embalse del Yeso é um reservatório de alta montanha conhecido pela água turquesa e paisagem rochosa. O acesso depende do clima, da estrada e das restrições vigentes.",activities:["Fotografar o reservatório e as montanhas","Fazer paradas panorâmicas no Cajón del Maipo"]},
    en:{description:"Embalse del Yeso is a high-mountain reservoir known for turquoise water and rugged scenery. Access depends on weather, road conditions and current restrictions.",activities:["Photograph the reservoir and mountains","Make scenic stops through Cajón del Maipo"]}},
  "termas-de-colina": {
    es:{description:"Baños Colina ofrece pozones termales escalonados en un entorno remoto de la cordillera. Es una experiencia de relajación y paisaje cuyo acceso exige buena planificación vial y climática.",activities:["Relajarse en pozones de agua termal","Contemplar el valle y las montañas"]},
    pt:{description:"Baños Colina oferece piscinas termais em níveis num cenário remoto dos Andes. É uma experiência de relaxamento e paisagem que exige planejamento de estrada e clima.",activities:["Relaxar nas piscinas termais","Contemplar o vale e as montanhas"]},
    en:{description:"Baños Colina features tiered thermal pools in a remote Andean setting. It combines relaxation and mountain scenery, with access requiring careful road and weather planning.",activities:["Relax in natural thermal pools","Take in the valley and mountain scenery"]}},
  "vina-concha-y-toro": {
    es:{description:"En Pirque, Concha y Toro ofrece recorridos por jardines del siglo XIX, viñedos y bodegas históricas, incluida la célebre leyenda del Casillero del Diablo, con degustaciones según el tour reservado.",activities:["Recorrer jardines, viñedos y bodegas","Participar en degustaciones guiadas"]},
    pt:{description:"Em Pirque, a Concha y Toro oferece visitas aos jardins do século XIX, vinhedos e adegas históricas, incluindo a lenda de Casillero del Diablo, com degustações conforme o tour reservado.",activities:["Visitar jardins, vinhedos e adegas","Participar de degustações guiadas"]},
    en:{description:"In Pirque, Concha y Toro offers tours through 19th-century gardens, vineyards and historic cellars, including the Casillero del Diablo legend, with tastings depending on the booked tour.",activities:["Tour gardens, vineyards and cellars","Join a guided wine tasting"]}},
  "vina-alyan": {
    es:{description:"Alyan Family Wines ofrece una experiencia boutique en Pirque, especialmente conocida por su recorrido al atardecer entre viñedos y degustaciones de vinos seleccionados.",activities:["Recorrer el viñedo al atardecer","Degustar vinos en una experiencia boutique"]},
    pt:{description:"A Alyan Family Wines oferece uma experiência boutique em Pirque, especialmente conhecida pelo passeio ao pôr do sol entre vinhedos e degustações selecionadas.",activities:["Passear pelo vinhedo ao pôr do sol","Degustar vinhos em uma experiência boutique"]},
    en:{description:"Alyan Family Wines offers a boutique experience in Pirque, best known for sunset visits among the vines and tastings of selected wines.",activities:["Walk through the vineyard at sunset","Taste wines in a boutique setting"]}},
  "vina-vik": {
    es:{description:"VIK combina arquitectura contemporánea, arte, viñedos y vinos de alta gama en el Valle de Millahue. Las experiencias pueden incluir recorrido de bodega, degustación y gastronomía.",activities:["Conocer su arquitectura y bodega","Degustar vinos y disfrutar gastronomía"]},
    pt:{description:"A VIK combina arquitetura contemporânea, arte, vinhedos e vinhos premium no Vale de Millahue. As experiências podem incluir adega, degustação e gastronomia.",activities:["Conhecer a arquitetura e a adega","Degustar vinhos e aproveitar a gastronomia"]},
    en:{description:"VIK combines contemporary architecture, art, vineyards and premium wines in the Millahue Valley. Experiences may include winery tours, tastings and dining.",activities:["Explore its architecture and winery","Taste wines and enjoy the cuisine"]}},
  "vina-santa-rita": {
    es:{description:"Santa Rita une en Alto Jahuel la tradición del vino con patrimonio chileno. Sus visitas pueden recorrer bodegas, el Parque Centenario y el Museo Andino, además de incluir degustaciones.",activities:["Recorrer bodegas y el Parque Centenario","Visitar el Museo Andino y degustar vinos"]},
    pt:{description:"A Santa Rita reúne em Alto Jahuel tradição vinícola e patrimônio chileno. As visitas podem incluir adegas, Parque Centenário, Museu Andino e degustações.",activities:["Conhecer as adegas e o Parque Centenário","Visitar o Museu Andino e degustar vinhos"]},
    en:{description:"At Alto Jahuel, Santa Rita combines winemaking tradition with Chilean heritage. Visits may cover the cellars, Centenario Park and Andean Museum, plus wine tastings.",activities:["Tour the cellars and Centenario Park","Visit the Andean Museum and taste wines"]}},
  "vina-del-mar-valparaiso": {
    es:{description:"Este recorrido combina los jardines y el borde costero de Viña del Mar con los cerros, ascensores, miradores y arte urbano patrimonial de Valparaíso.",activities:["Pasear por el litoral de Viña del Mar","Explorar miradores y cerros de Valparaíso"]},
    pt:{description:"O passeio combina jardins e orla de Viña del Mar com morros, elevadores, mirantes e arte urbana patrimonial de Valparaíso.",activities:["Passear pela orla de Viña del Mar","Explorar mirantes e morros de Valparaíso"]},
    en:{description:"This route combines Viña del Mar's gardens and waterfront with Valparaíso's hills, funiculars, viewpoints and heritage street art.",activities:["Walk Viña del Mar's waterfront","Explore Valparaíso's hills and viewpoints"]}},
  "algarrobo-isla-negra": {
    es:{description:"Algarrobo ofrece playas y ambiente costero; Isla Negra suma el paisaje del Litoral de los Poetas y la Casa Museo de Pablo Neruda, cuya entrada conviene reservar.",activities:["Recorrer playas y caletas de Algarrobo","Visitar la Casa Museo de Pablo Neruda"]},
    pt:{description:"Algarrobo oferece praias e ambiente litorâneo; Isla Negra acrescenta a paisagem do Litoral dos Poetas e a Casa Museu de Pablo Neruda, que convém reservar.",activities:["Conhecer praias e enseadas de Algarrobo","Visitar a Casa Museu de Pablo Neruda"]},
    en:{description:"Algarrobo offers beaches and a relaxed coastal atmosphere; Isla Negra adds the Poets' Coast scenery and Pablo Neruda's House Museum, for which advance booking is advisable.",activities:["Explore Algarrobo's beaches and coves","Visit Pablo Neruda's House Museum"]}},
  "parque-safari": {
    es:{description:"Parque Safari Chile, en Rancagua, cuenta con zoológico y experiencias opcionales como safaris de herbívoros, grandes felinos y circuitos temáticos. Los cupos y horarios deben reservarse con anticipación.",activities:["Realizar safaris fotográficos de animales","Disfrutar atracciones y áreas familiares"]},
    pt:{description:"O Parque Safari Chile, em Rancagua, possui zoológico e experiências opcionais como safáris de herbívoros, grandes felinos e circuitos temáticos. Horários devem ser reservados.",activities:["Fazer safáris fotográficos de animais","Aproveitar atrações e áreas familiares"]},
    en:{description:"Parque Safari Chile in Rancagua has a zoo and optional experiences such as herbivore, big-cat and themed safaris. Times and limited spaces should be booked in advance.",activities:["Take photographic wildlife safaris","Enjoy attractions and family areas"]}},
  "tours-personalizados": {
    es:{description:"Diseñamos una ruta privada según los intereses, horarios y ritmo del grupo. Se pueden combinar miradores, gastronomía, viñedos, costa o montaña, considerando tiempos reales de traslado.",activities:["Crear un itinerario a medida","Combinar destinos, paradas y experiencias"]},
    pt:{description:"Criamos uma rota privativa conforme interesses, horários e ritmo do grupo. É possível combinar mirantes, gastronomia, vinícolas, litoral ou montanha.",activities:["Criar um roteiro sob medida","Combinar destinos, paradas e experiências"]},
    en:{description:"We design a private route around your group's interests, schedule and pace. Viewpoints, food, wineries, coast or mountains can be combined with realistic travel times.",activities:["Build a custom itinerary","Combine destinations, stops and experiences"]}},
};

export function getDestinationDetail(destination: Destination, locale: Locale) {
  const slug = destination.slug;
  const copy = detailCopy[slug]?.[locale] ?? detailCopy[slug]?.es;
  return { ...copy, gallery: destinationGalleries[slug] ?? [destination.image] };
}
