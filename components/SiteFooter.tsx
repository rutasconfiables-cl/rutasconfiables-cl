import Link from "next/link";
import { Camera, MessageCircle, ThumbsUp } from "lucide-react";

const whatsapp = "https://wa.me/56935709244?text=Hola%2C%20quiero%20cotizar%20un%20viaje";

export default function SiteFooter() {
  return <footer className="site-footer">
    <Link className="brand" href="/" aria-label="Rutas Confiables, inicio">
      <img className="brand-logo" src="/favicon.png" alt="Logo oficial de Rutas Confiables"/>
    </Link>
    <i className="footer-divider"/>
    <span>© 2026 Rutas Confiables</span>
    <i className="footer-divider"/>
    <nav aria-label="Enlaces del pie de página"><span>Transporte de pasajeros</span><b>·</b><Link href="/#experiencias">Tours</Link><b>·</b><Link href="/#experiencias">Experiencias</Link></nav>
    <div className="footer-socials"><span title="Instagram"><Camera aria-hidden="true"/></span><span title="Facebook"><ThumbsUp aria-hidden="true"/></span><a href={whatsapp} target="_blank" rel="noreferrer" aria-label="WhatsApp"><MessageCircle aria-hidden="true"/></a></div>
  </footer>;
}
