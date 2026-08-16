const mountain = "https://images.unsplash.com/photo-1704304343233-492236e5f34b?auto=format&fit=crop&w=1400&q=85";
const lion = "https://images.unsplash.com/photo-1649724264150-50dbfdc606c5?auto=format&fit=crop&w=900&q=85";
const vineyard = "https://images.unsplash.com/photo-1506377247377-2a5b3b417ebb?auto=format&fit=crop&w=900&q=85";
const coast = "https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=85";
const highlights = [{Icon:MountainSnow,title:"Viajes a la nieve",text:"Disfruta los mejores centros de ski con transporte cómodo y seguro."},{Icon:PawPrint,title:"Parque Safari",text:"Vive una experiencia inolvidable en el Parque Safari Chile."},{Icon:Grape,title:"Rutas del vino",text:"Descubre viñedos exclusivos con traslados y opciones con entrada incluida."},{Icon:Mountain,title:"Portillo y Laguna del Inca",text:"Paisajes únicos en la cordillera y la famosa Laguna del Inca."},{Icon:Waves,title:"Costa y litoral",text:"Recorre las mejores playas y ciudades costeras de Chile."},{Icon:Map,title:"Cajón del Maipo",text:"Naturaleza, aventura y relajación a pocos kilómetros de Santiago."}];
const trips = [
  {title:"Snow Park Farellones",img:"https://images.unsplash.com/photo-1551524559-8af4e6624178?auto=format&fit=crop&w=900&q=85"},
  {title:"Valle Nevado",img:mountain},
  {title:"El Colorado",img:"https://images.unsplash.com/photo-1529669851596-ba9a5549af95?auto=format&fit=crop&w=900&q=85"},
  {title:"La Parva",img:"https://images.unsplash.com/photo-1454496522488-7a8e488e8606?auto=format&fit=crop&w=900&q=85"},
  {title:"Portillo & Laguna del Inca",img:mountain},
  {title:"Cajón del Maipo",img:mountain},
  {title:"Embalse del Yeso",img:"https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=900&q=85"},
  {title:"Termas de Colina",img:"https://images.unsplash.com/photo-1540555700478-4be289fbecef?auto=format&fit=crop&w=900&q=85"},
  {title:"Viña Concha y Toro",img:vineyard},
  {title:"Viña Alyan",img:vineyard},
  {title:"Parque Safari",img:lion},
  {title:"Viña Vik",img:vineyard},
  {title:"Viña Santa Rita",img:vineyard},
  {title:"Viña del Mar & Valparaíso",img:coast},
  {title:"Algarrobo & Isla Negra",img:coast},
  {title:"Tours personalizados",img:mountain}
];
const whatsapp = "https://wa.me/56935709244?text=Hola%2C%20quiero%20cotizar%20un%20viaje";

function Brand(){return <a className="brand" href="#inicio" aria-label="Rutas Confiables, inicio"><img className="brand-logo" src="/favicon.png" alt="Logo oficial de Rutas Confiables"/></a>}
export default function Home(){return <main>
  <section className="hero" id="inicio"><nav><Brand/><div className="nav-links"><a href="#experiencias">Tours</a><a href="#reserva">Opciones completas</a><a className="button light" href={whatsapp}>Cotizar viaje <span>→</span></a></div></nav><div className="hero-content"><p className="eyebrow">Transporte privado · Santiago de Chile</p><h1>Tu próxima ruta<br/>comienza aquí.</h1><p className="hero-copy">Descubre la nieve, viñedos, costa, montaña y experiencias únicas de Chile con un servicio cómodo, seguro y personalizado.</p><div className="actions"><a className="button light" href="#experiencias">Ver destinos <span>→</span></a><a className="button ghost" href={whatsapp}>Solicitar cotización <span>→</span></a></div></div><div className="trust"><span>◇ <b>Transporte seguro</b><small>y confiable</small></span><span>♡ <b>Comodidad</b><small>en cada viaje</small></span><span>☆ <b>Experiencias</b><small>memorables</small></span></div></section>
  <section className="section intro"><h2>Mucho más que transporte.</h2><div className="highlight-grid">{highlights.map(({Icon,title,text})=><article key={title}><Icon className="highlight-icon" strokeWidth={1.7} aria-hidden="true"/><h3>{title}</h3><p>{text}</p></article>)}</div></section>
  <section className="section trips" id="experiencias"><h2>Elige tu próxima experiencia.</h2><div className="trip-grid">{trips.map(({title,img},i)=><Link href={`/destinos/${destinationSlug(title)}`} className="trip" key={title} style={{backgroundImage:`linear-gradient(0deg, rgba(0,16,50,.88), rgba(0,16,50,.04) 75%), url(${img})`,backgroundPosition:`${i%4*11}% center`}}><span>{title}</span></Link>)}<article className="custom"><Users className="custom-icon" strokeWidth={1.7} aria-hidden="true"/><div><b>¿No encuentras tu destino?</b><p>Creamos experiencias a medida para ti y tu grupo.</p><a href={whatsapp}>Contáctanos →</a></div></article></div></section>
  <section className="section steps" id="reserva"><h2>Reserva en 3 pasos.</h2><div className="steps-grid"><article className="step-card"><i>1</i><span className="step-icon"><MapPin aria-hidden="true"/></span><div><b>Elige el destino</b><p>Explora nuestras opciones y selecciona tu experiencia favorita.</p></div></article><ChevronRight className="step-arrow" aria-hidden="true"/><article className="step-card"><i>2</i><span className="step-icon"><Users aria-hidden="true"/></span><div><b>Cuéntanos cuántos viajan</b><p>Indícanos la fecha, número de pasajeros y cualquier requerimiento especial.</p></div></article><ChevronRight className="step-arrow" aria-hidden="true"/><article className="step-card"><i>3</i><span className="step-icon"><CalendarCheck2 aria-hidden="true"/></span><div><b>Confirma tu viaje</b><p>Te enviamos la propuesta y aseguramos tu reserva de forma rápida y segura.</p></div></article></div></section>
  <section className="section combo"><div className="interior"/><div className="combo-copy"><h2>Transporte + experiencia<br/>en una sola reserva.</h2><p>En destinos seleccionados puedes combinar tu traslado con entradas, actividades y experiencias únicas.</p></div><ul><li>✓ Traslado ida y regreso</li><li>✓ Coordinación del itinerario</li><li>✓ Opciones con entrada incluida</li><li>✓ Atención personalizada</li><li><a className="button light" href={whatsapp}>Consultar disponibilidad →</a></li></ul></section>
  <section className="cta"><div><b>¿Dónde quieres ir?</b><span>Nosotros te llevamos.</span></div><a className="button light" href={whatsapp}>◉ Cotizar por WhatsApp →</a></section><SiteFooter/>
  <a className="whatsapp-float" href={whatsapp} target="_blank" rel="noreferrer" aria-label="Cotizar viaje por WhatsApp al +56 9 3570 9244"><img src="/whatsapp.svg" alt="" aria-hidden="true"/></a>
</main>}
import { CalendarCheck2, ChevronRight, Grape, Map, MapPin, Mountain, MountainSnow, PawPrint, Users, Waves } from "lucide-react";
import Link from "next/link";
import { destinationSlug } from "@/lib/destinations";
import SiteFooter from "@/components/SiteFooter";
