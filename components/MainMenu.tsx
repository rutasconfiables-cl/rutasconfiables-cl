"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { destinationSlug } from "@/lib/destinations";

type Locale = "es" | "pt" | "en";
const groups = [
  { key: "snow", items: ["Snow Park Farellones", "Valle Nevado", "El Colorado", "La Parva", "Portillo & Laguna del Inca", "Cajón del Maipo", "Embalse del Yeso", "Termas de Colina"] },
  { key: "wine", items: ["Viña Concha y Toro", "Viña Alyan", "Viña Vik", "Viña Santa Rita"] },
  { key: "beach", items: ["Viña del Mar & Valparaíso", "Algarrobo & Isla Negra"] },
  { key: "tours", items: ["City Tour Santiago", "Parque Safari", "Tours personalizados"] },
] as const;
const labels = {
  es: { snow: "Nieve", wine: "Viñas", beach: "Playa", tours: "Tours", custom: "Tours personalizados", city: "City Tour Santiago" },
  pt: { snow: "Neve", wine: "Vinícolas", beach: "Praia", tours: "Passeios", custom: "Passeios personalizados", city: "City Tour Santiago" },
  en: { snow: "Snow", wine: "Wineries", beach: "Beach", tours: "Tours", custom: "Custom tours", city: "Santiago City Tour" },
};
const menuLabels = {
  es: { open: "Abrir menú", close: "Cerrar menú" },
  pt: { open: "Abrir menu", close: "Fechar menu" },
  en: { open: "Open menu", close: "Close menu" },
};

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

  useEffect(() => {
    if (!mobileOpen) return;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = previousOverflow; };
  }, [mobileOpen]);

  const keepOneOpen = (current: HTMLDetailsElement) => {
    if (!current.open) return;
    menuRef.current?.querySelectorAll<HTMLDetailsElement>("details[open]").forEach((item) => { if (item !== current) item.open = false; });
  };

  return <div className={`main-menu${mobileOpen ? " mobile-open" : ""}`} role="navigation" aria-label="Destinos" ref={menuRef}>
    <button className="menu-toggle" type="button" aria-label={mobileOpen ? menuLabels[locale].close : menuLabels[locale].open} aria-expanded={mobileOpen} onClick={() => setMobileOpen((open) => !open)}>
      <span></span><span></span><span></span>
    </button>
    <div className="menu-panel">{groups.map((group) =>
      <details
        className="menu-group"
        key={group.key}
        onToggle={(event) => keepOneOpen(event.currentTarget)}
        onPointerEnter={(event) => {
          if (window.matchMedia("(min-width: 851px) and (hover: hover)").matches) event.currentTarget.open = true;
        }}
        onPointerLeave={(event) => {
          if (window.matchMedia("(min-width: 851px) and (hover: hover)").matches) event.currentTarget.open = false;
        }}
      >
        <summary>{labels[locale][group.key]}</summary>
        <div className="menu-dropdown">{group.items.map((title) =>
          <Link key={title} href={`${base}/destinos/${destinationSlug(title)}`} onClick={(event) => { event.currentTarget.closest("details")?.removeAttribute("open"); setMobileOpen(false); }}>{title === "Tours personalizados" ? labels[locale].custom : title === "City Tour Santiago" ? labels[locale].city : title}</Link>
        )}</div>
      </details>
    )}</div>
  </div>;
}
