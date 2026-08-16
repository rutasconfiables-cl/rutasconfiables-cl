import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { destinations } from "@/lib/destinations";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";

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
  const quote = `${whatsapp}${encodeURIComponent(`Hola, quiero cotizar un viaje a ${destination.title}`)}`;
  return <main className="destination-page">
    <header className="destination-nav"><Link href="/" className="destination-brand"><img src="/favicon.png" alt=""/><span><b>RUTAS CONFIABLES</b><small>TRANSPORTE & TOURS</small></span></Link><Link href="/#experiencias" className="back-link"><ArrowLeft size={18}/> Todos los destinos</Link></header>
    <section className="destination-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(0,20,58,.96),rgba(0,25,65,.54),rgba(0,20,58,.1)),url(${destination.image})`}}><div><p>{destination.eyebrow}</p><h1>{destination.title}</h1><span>{destination.description}</span><a href={quote} className="destination-quote" target="_blank" rel="noreferrer"><MessageCircle size={21}/> Cotizar este viaje</a></div></section>
    <section className="destination-info"><div><p className="destination-kicker">Una experiencia Rutas Confiables</p><h2>Viaja cómodo, seguro y a tu ritmo.</h2><p>Organizamos cada detalle del traslado para que tú y tu grupo solo tengan que disfrutar. Coordinamos horarios, puntos de recogida y paradas según las características del destino.</p></div><aside><h3>Tu viaje incluye</h3>{destination.benefits.map((benefit)=><span key={benefit}><CheckCircle2 size={20}/>{benefit}</span>)}<a href={quote} target="_blank" rel="noreferrer">Consultar disponibilidad →</a></aside></section>
    <section className="destination-bottom"><h2>¿Listo para conocer {destination.title}?</h2><p>Cuéntanos cuántas personas viajan y la fecha que tienes en mente.</p><a href={quote} target="_blank" rel="noreferrer"><MessageCircle size={22}/> Hablar por WhatsApp</a></section>
    <SiteFooter/>
  </main>;
}
