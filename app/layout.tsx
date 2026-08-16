import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://rutasconfiables.cl"),
  title: "Rutas Confiables | Transporte privado y tours en Chile",
  description: "Traslados privados y experiencias a la nieve, viñedos, costa y montaña desde Santiago.",
  openGraph: { title: "Rutas Confiables", description: "Tu próxima ruta comienza aquí.", images: ["/og.png"] },
  twitter: { card: "summary_large_image", images: ["/og.png"] },
  icons: {
    icon: { url: "/favicon.png", type: "image/png" },
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <nav className="global-language-switcher" aria-label="Seleccionar idioma">
          <Link href="/" hrefLang="es" title="Español" aria-label="Español"><span aria-hidden="true">🇨🇱</span></Link>
          <Link href="/pt" hrefLang="pt-BR" title="Português" aria-label="Português"><span aria-hidden="true">🇧🇷</span></Link>
          <Link href="/en" hrefLang="en-US" title="English" aria-label="English"><span aria-hidden="true">🇺🇸</span></Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
