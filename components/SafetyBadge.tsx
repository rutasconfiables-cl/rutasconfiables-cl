import { ShieldCheck } from "lucide-react";

export default function SafetyBadge({ locale = "es" }: { locale?: "es" | "pt" | "en" }) {
  const text = locale === "pt"
    ? "Seguro para passageiros e veículos autorizados pelo Ministério dos Transportes"
    : locale === "en"
      ? "Passenger insurance and vehicles authorized by the Ministry of Transport"
      : "Seguro para pasajeros y vehículos autorizados por el Ministerio de Transportes";

  return <div className="safety-badge">
    <ShieldCheck aria-hidden="true"/>
    <strong>{text}</strong>
  </div>;
}
