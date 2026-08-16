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
