import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, MessageCircle } from "lucide-react";
import { destinations } from "@/lib/destinations";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/SiteFooter";

type Props={params:Promise<{slug:string}>};
const whatsapp="https://wa.me/56935709244?text=";
export function generateStaticParams(){return destinations.map(({slug})=>({slug}))}
export async function generateMetadata({params}:Props):Promise<Metadata>{const {slug}=await params;const d=destinations.find(x=>x.slug===slug);return d?{title:`${d.title} | Rutas Confiables`,description:`Viagem privativa para ${d.title} saindo de Santiago do Chile.`}:{}}

export default async function DestinationPagePt({params}:Props){const {slug}=await params;const d=destinations.find(x=>x.slug===slug);if(!d)notFound();const quote=`${whatsapp}${encodeURIComponent(`Olá, quero solicitar um orçamento de viagem para ${d.title}`)}`;return <main className="destination-page">
  <header className="destination-nav"><Link href="/pt" className="destination-brand"><img src="/favicon.png" alt="Logo Rutas Confiables"/><span><b>RUTAS CONFIABLES</b><small>TRANSPORTE & PASSEIOS</small></span></Link><div className="destination-actions"><Link className="language-link" href={`/destinos/${slug}`} hrefLang="es">ES</Link><Link href="/pt#experiencias" className="back-link"><ArrowLeft size={18}/> Todos os destinos</Link></div></header>
  <section className="destination-hero" style={{backgroundImage:`linear-gradient(90deg,rgba(0,20,58,.96),rgba(0,25,65,.54),rgba(0,20,58,.1)),url(${d.image})`}}><div><p>Experiência privativa no Chile</p><h1>{d.title}</h1><span>Conheça este destino com transporte confortável, seguro e personalizado saindo de Santiago.</span><a href={quote} className="destination-quote" target="_blank" rel="noreferrer"><MessageCircle size={21}/> Solicitar orçamento</a></div></section>
  <section className="destination-info"><div><p className="destination-kicker">Uma experiência Rutas Confiables</p><h2>Viaje com conforto, segurança e no seu ritmo.</h2><p>Organizamos todos os detalhes do traslado para que você e seu grupo só precisem aproveitar. Coordenamos horários, pontos de embarque e paradas conforme as características do destino.</p></div><aside><h3>Sua viagem inclui</h3><span><CheckCircle2 size={20}/> Transporte privativo</span><span><CheckCircle2 size={20}/> Coordenação personalizada</span><span><CheckCircle2 size={20}/> Ida e volta</span><a href={quote} target="_blank" rel="noreferrer">Consultar disponibilidade →</a></aside></section>
  <section className="destination-bottom"><h2>Pronto para conhecer {d.title}?</h2><p>Conte quantas pessoas vão viajar e a data que você tem em mente.</p><a href={quote} target="_blank" rel="noreferrer"><MessageCircle size={22}/> Falar pelo WhatsApp</a></section><SiteFooter locale="pt"/>
</main>}
