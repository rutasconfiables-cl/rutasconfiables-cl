import Link from "next/link";
import MainMenu from "@/components/MainMenu";

type Locale = "es" | "pt" | "en";

const copy = {
  es: { home: "/", label: "TRANSPORTE DE PASAJEROS Y TOURS", quote: "Cotizar viaje", message: "Hola, quiero cotizar un viaje" },
  pt: { home: "/pt", label: "TRANSPORTE DE PASSAGEIROS E PASSEIOS", quote: "Solicitar orçamento", message: "Olá, quero solicitar um orçamento de viagem" },
  en: { home: "/en", label: "PASSENGER TRANSPORTATION AND TOURS", quote: "Request a quote", message: "Hello, I would like a travel quote" },
};

export default function DestinationHeader({ locale = "es" }: { locale?: Locale }) {
  const text = copy[locale];
  const whatsapp = `https://wa.me/56935709244?text=${encodeURIComponent(text.message)}`;
  return <header className="destination-nav full-destination-nav">
    <Link href={text.home} className="destination-brand" aria-label="Rutas Confiables">
      <img src="/favicon.png" alt="Logo Rutas Confiables"/>
      <span><b>RUTAS CONFIABLES</b><small>{text.label}</small></span>
    </Link>
    <MainMenu locale={locale}/>
  </header>;
}
