import type { Metadata } from "next";
import { CheckCircle2, MessageCircle } from "lucide-react";
import { destinations, getDestinationDetail } from "@/lib/destinations";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";
import DestinationHeader from "@/components/DestinationHeader";

type Props={params:Promise<{slug:string}>};
const whatsapp="https://wa.me/56935709244?text=";
export function generateStaticParams(){return destinations.map(({slug})=>({slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const d=destinations.find(x=>x.slug===slug);return d?{title:`${d.title} | Rutas Confiables`,description:`Viagem privativa para ${d.title} saindo de Santiago do Chile.`}:{}}

export default async function DestinationPagePt({params}:Props){const {slug}=await params;const d=destinations.find(x=>x.slug===slug);if(!d)notFound();const detail=getDestinationDetail(d,"pt");const quote=`${whatsapp}${encodeURIComponent(`Olá, quero solicitar um orçamento de viagem para ${d.title}`)}`;return <main className="destination-page">
  <DestinationHeader locale="pt"/>
  <section className="destination-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(0,20,58,.96),rgba(0,25,65,.54),rgba(0,20,58,.1)),url(${d.image})`}}><div><p>Experiência privativa no Chile</p><h1>{d.title}</h1><span>{detail.description}</span><a href={quote} className="destination-quote" target="_blank" rel="noreferrer"><MessageCircle size={21}/> Solicitar orçamento</a></div></section>
  <section className="destination-info"><div><p className="destination-kicker">O que fazer</p><h2>Uma experiência própria de {d.title}.</h2><p>{detail.description}</p></div><aside><h3>Atividades em destaque</h3>{detail.activities.map(activity=><span key={activity}><CheckCircle2 size={20}/>{activity}</span>)}<span><CheckCircle2 size={20}/>Transporte privativo de ida e volta</span><a href={quote} target="_blank" rel="noreferrer">Consultar disponibilidade →</a></aside></section>
  <section className="destination-gallery"><p className="destination-kicker">Imagens do destino</p><h2>Conheça a experiência.</h2><div>{detail.gallery.map((image,index)=><img key={image} src={image} alt={`${d.title} - vista ${index+1}`} loading="lazy"/>)}</div></section>
  <section className="destination-bottom"><h2>Pronto para conhecer {d.title}?</h2><p>Conte quantas pessoas vão viajar e a data que você tem em mente.</p><a href={quote} target="_blank" rel="noreferrer"><MessageCircle size={22}/> Falar pelo WhatsApp</a></section><SiteFooter locale="pt"/>
</main>}
