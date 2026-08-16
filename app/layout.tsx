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
          <Link href="/?lang=es" hrefLang="es" title="Español" aria-label="Español"><img src="https://flagcdn.com/w40/cl.png" alt="" aria-hidden="true" /></Link>
          <Link href="/pt?lang=pt" hrefLang="pt-BR" title="Português" aria-label="Português"><img src="https://flagcdn.com/w40/br.png" alt="" aria-hidden="true" /></Link>
          <Link href="/en?lang=en" hrefLang="en-US" title="English" aria-label="English"><img src="https://flagcdn.com/w40/us.png" alt="" aria-hidden="true" /></Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
