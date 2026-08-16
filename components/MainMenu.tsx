"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { destinationSlug } from "@/lib/destinations";

type Locale = "es" | "pt" | "en";
const groups = [
  { key: "snow", items: ["Snow Park Farellones", "Valle Nevado", "El Colorado", "La Parva", "Portillo & Laguna del Inca", "Cajón del Maipo", "Embalse del Yeso", "Termas de Colina"] },
  { key: "wine", items: ["Viña Concha y Toro", "Viña Alyan", "Viña Vik", "Viña Santa Rita"] },
  { key: "beach", items: ["Viña del Mar & Valparaíso", "Algarrobo & Isla Negra"] },
  { key: "tours", items: ["Parque Safari", "Tours personalizados"] },
] as const;
const labels = {
  es: { snow: "Nieve", wine: "Viñas", beach: "Playa", tours: "Tours", custom: "Tours personalizados" },
  pt: { snow: "Neve", wine: "Vinícolas", beach: "Praia", tours: "Passeios", custom: "Passeios personalizados" },
  en: { snow: "Snow", wine: "Wineries", beach: "Beach", tours: "Tours", custom: "Custom tours" },
};
const menuLabels = { es: "Abrir menú", pt: "Abrir menu", en: "Open menu" };

export default function MainMenu({ locale = "es" }: { locale?: Locale }) {
  const menuRef = useRef<HTMLDivElement>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const base = locale === "es" ? "" : `/${locale}`;

  useEffect(() => {
    const closeMenus = (event: PointerEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        menuRef.current?.querySelectorAll("details[open]").forEach((item) => item.removeAttribute("open"));
        setMobileOpen(false);
      }
    };
    const closeWithEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    document.addEventListener("pointerdown", closeMenus);
    document.addEventListener("keydown", closeWithEscape);
    return () => {
      document.removeEventListener("pointerdown", closeMenus);
      document.removeEventListener("keydown", closeWithEscape);
    };
  }, []);

  const keepOneOpen = (current: HTMLDetailsElement) => {
    if (!current.open) return;
    menuRef.current?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach((item) => { if (item !== current) item.open = false; });
  };

  return <div className={`main-menu${mobileOpen ? " mobile-open" : ""}`} role="navigation" aria-label="Destinos" ref={menuRef}>
    <button className="menu-toggle" type="button" aria-label={menuLabels[locale]} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>
      <span></span><span></span><span></span>
    </button>
    <div className="menu-panel">{groups.map((group) =>
      <details className="menu-group" key={group.key} onToggle={(event) => keepOneOpen(event.currentTarget)}>
        <summary>{labels[locale][group.key]}</summary>
        <div className="menu-dropdown">{group.items.map((title) =>
          <Link key={title} href={`${base}/destinos/${destinationSlug(title)}`} onClick={(event) => { event.currentTarget.closest("details")?.removeAttribute("open"); setMobileOpen(false); }}>{title === "Tours personalizados" ? labels[locale].custom : title}</Link>
        )}</div>
      </details>
    )}</div>
  </div>;
}
