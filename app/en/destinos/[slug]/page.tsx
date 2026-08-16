import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { destinations, getDestinationDetail } from "@/lib/destinations";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import DestinationHeader from "@/components/DestinationHeader";
import WhatsAppIcon from "@/components/WhatsAppIcon";

type Props = { params: Promise<{ slug: string }> };
const whatsapp = "https://wa.me/56935709244?text=";

export function generateStaticParams() { return destinations.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const d = destinations.find((item) => item.slug === slug);
  return d ? { title: `${d.title} | Rutas Confiables`, description: `Private trip to ${d.title} from Santiago, Chile.` } : {};
}

export default async function DestinationPageEn({ params }: Props) {
  const { slug } = await params;
  const d = destinations.find((item) => item.slug === slug);
  if (!d) notFound();
  const detail = getDestinationDetail(d, "en");
  const quote = `${whatsapp}${encodeURIComponent(`Hello, I would like a quote for a trip to ${d.title}`)}`;
  return <main className="destination-page">
    <DestinationHeader locale="en"/>
    <section className="destination-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(0,20,58,.96),rgba(0,25,65,.54),rgba(0,20,58,.1)),url(${d.image})`}}><div><p>Private experience in Chile</p><h1>{d.title}</h1><span>{detail.description}</span><a href={quote} className="destination-quote"><WhatsAppIcon/> Request a quote</a></div></section>
    <section className="destination-info"><div><p className="destination-kicker">What you can do</p><h2>An experience unique to {d.title}.</h2><p>{detail.description}</p></div><aside><h3>Featured activities</h3>{detail.activities.map((activity)=><span key={activity}><CheckCircle2 size={20}/>{activity}</span>)}<span><CheckCircle2 size={20}/>Private round-trip transportation</span><a href={quote}>Check availability →</a></aside></section>
    <section className="destination-gallery"><p className="destination-kicker">Destination images</p><h2>Discover the experience.</h2><div>{detail.gallery.map((image,index)=><img key={image} src={image} alt={`${d.title} - view ${index+1}`} loading="lazy"/>)}</div></section>
    <section className="destination-bottom"><h2>Ready to discover {d.title}?</h2><p>Tell us your group size and preferred date.</p><a href={quote}><WhatsAppIcon/> Chat on WhatsApp</a></section>
    <SiteFooter locale="en"/>
  </main>;
}
