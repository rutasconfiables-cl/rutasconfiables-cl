import Link from "next/link";

export default function SiteFooter({ locale = "es" }: { locale?: "es" | "pt" | "en" }) {
  const pt = locale === "pt";
  const en = locale === "en";
  const base = pt ? "/pt" : en ? "/en" : "";
  const assurance = pt
    ? "Contamos com seguro para passageiros e veículos autorizados pelo Ministério dos Transportes."
    : en
      ? "Passenger insurance and vehicles authorized by the Ministry of Transport."
      : "Contamos con seguro para pasajeros y vehículos autorizados por el Ministerio de Transportes.";
  return <>
  <section className="transport-assurance" aria-label={pt ? "Segurança do transporte" : en ? "Transport safety" : "Seguridad del transporte"}>
    <span className="transport-assurance-icon" aria-hidden="true">✓</span>
    <p>{assurance}</p>
  </section>
  <footer className="site-footer">
    <Link className="brand" href="/" aria-label="Rutas Confiables, inicio">
      <img className="brand-logo" src="/favicon.png" alt="Logo oficial de Rutas Confiables"/>
    </Link>
    <i className="footer-divider"/>
    <span>© 2026 Rutas Confiables</span>
    <i className="footer-divider"/>
    <nav aria-label={pt?"Links do rodapé":en?"Footer links":"Enlaces del pie de página"}><span>{pt?"Transporte de passageiros":en?"Passenger transportation":"Transporte de pasajeros"}</span><b>·</b><Link href={`${base}/#experiencias`}>{pt?"Passeios":"Tours"}</Link><b>·</b><Link href={`${base}/#experiencias`}>{pt?"Experiências":en?"Experiences":"Experiencias"}</Link></nav>
  </footer>
  </>;
}
