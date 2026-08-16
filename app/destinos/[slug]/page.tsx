import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { destinations, getDestinationDetail } from "@/lib/destinations";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import DestinationHeader from "@/components/DestinationHeader";
import WhatsAppIcon from "@/components/WhatsAppIcon";

type Props = { params: Promise<{ slug: string }> };
const whatsapp = "https://wa.me/56935709244?text=";

export function generateStaticParams() {
  return destinations.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) return {};
  return { title: `${destination.title} | Rutas Confiables`, description: destination.description, openGraph: { title: destination.title, description: destination.description, images: [destination.image] } };
}

export default async function DestinationPage({ params }: Props) {
  const { slug } = await params;
  const destination = destinations.find((item) => item.slug === slug);
  if (!destination) notFound();
  const detail = getDestinationDetail(destination, "es");
  const quote = `${whatsapp}${encodeURIComponent(`Hola, quiero cotizar un viaje a ${destination.title}`)}`;
  return <main className="destination-page">
    <DestinationHeader/>
    <section className="destination-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(0,20,58,.96),rgba(0,25,65,.54),rgba(0,20,58,.1)),url(${destination.image})`}}><div><p>{destination.eyebrow}</p><h1>{destination.title}</h1><span>{detail.description}</span><a href={quote} className="destination-quote" target="_blank" rel="noreferrer"><WhatsAppIcon/> Cotizar este viaje</a></div></section>
    <section className="destination-info"><div><p className="destination-kicker">Qué puedes hacer</p><h2>Una experiencia propia de {destination.title}.</h2><p>{detail.description}</p></div><aside><h3>Actividades destacadas</h3>{detail.activities.map((activity)=><span key={activity}><CheckCircle2 size={20}/>{activity}</span>)}<span><CheckCircle2 size={20}/>Traslado privado de ida y regreso</span><a href={quote} target="_blank" rel="noreferrer">Consultar disponibilidad →</a></aside></section>
    <section className="destination-gallery"><p className="destination-kicker">Imágenes del destino</p><h2>Conoce la experiencia.</h2><div>{detail.gallery.map((image,index)=><img key={image} src={image} alt={`${destination.title} - vista ${index+1}`} loading="lazy"/>)}</div></section>
    <section className="destination-bottom"><h2>¿Listo para conocer {destination.title}?</h2><p>Cuéntanos cuántas personas viajan y la fecha que tienes en mente.</p><a href={quote} target="_blank" rel="noreferrer"><WhatsAppIcon/> Hablar por WhatsApp</a></section>
    <SiteFooter/>
  </main>;
}
