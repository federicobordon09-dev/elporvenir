import type { Metadata, Viewport } from "next";
import { Bangers, Lora } from "next/font/google";
import Script from "next/script";
import Header from "@/components/header";
import { negocio } from "@/content/negocio";
import "./globals.css";

const bangers = Bangers({
  weight: "400",
  variable: "--font-display",
  subsets: ["latin"],
  display: "swap",
});

const lora = Lora({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
});

const siteTitle = "El Porvenir - La Consulta, Mendoza";
const siteDescription =
  "Bodegón renovado en el corazón de La Consulta. Cocina sincera, platos abundantes, productos de estación y productores locales.";
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://elporvemza.vercel.app";
const ogImage = "/images/gastronomia.jpg";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s | El Porvenir",
  },
  description: siteDescription,
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: siteUrl,
    siteName: "El Porvenir",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: ogImage,
        width: 1200,
        height: 630,
        alt: "El Porvenir - platos caseros en La Consulta, Mendoza",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [ogImage],
  },
  metadataBase: new URL(siteUrl),
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

const diasEN: Record<string, string> = {
  Lunes: "Monday",
  Martes: "Tuesday",
  Miércoles: "Wednesday",
  Jueves: "Thursday",
  Viernes: "Friday",
  Sábado: "Saturday",
  Domingo: "Sunday",
};

function parseHora(rango: string): string {
  const m = rango.match(/(\d{2}):(\d{2})/);
  return m ? `${m[1]}:${m[2]}` : "00:00";
}

function jsonLd() {
  const ratingTotal =
    negocio.reputacion.reseñas.reduce((a, r) => a + r.cantidad, 0);

  const openingHours = negocio.horarios
    .filter((d) => d.mediodia || d.cena)
    .flatMap((d) => {
      const day = diasEN[d.dia];
      const specs: { "@type": "OpeningHoursSpecification"; dayOfWeek: string[]; opens: string; closes: string }[] = [];
      if (typeof d.mediodia === "string") {
        const [opens, closes] = d.mediodia.split(" a ");
        specs.push({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [day],
          opens: parseHora(opens),
          closes: parseHora(closes),
        });
      }
      if (typeof d.cena === "string") {
        const [opens, closes] = d.cena.split(" a ");
        specs.push({
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [day],
          opens: parseHora(opens),
          closes: parseHora(closes),
        });
      }
      return specs;
    });

  return {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: negocio.nombre,
    image: `${siteUrl}${ogImage}`,
    url: siteUrl,
    telephone: negocio.contacto.telefonoLink.startsWith("+")
      ? negocio.contacto.telefonoLink
      : `+${negocio.contacto.telefonoLink}`,
    servesCuisine: "Argentina",
    address: {
      "@type": "PostalAddress",
      streetAddress: `${negocio.ubicacion.direccion}, esq. ${negocio.ubicacion.esquina}`,
      addressLocality: negocio.ubicacion.localidad,
      addressRegion: negocio.ubicacion.provincia,
      addressCountry: "AR",
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: negocio.ubicacion.coordenadas.lat,
      longitude: negocio.ubicacion.coordenadas.lng,
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: negocio.reputacion.puntuacion.toString(),
      bestRating: negocio.reputacion.maximo.toString(),
      ratingCount: ratingTotal.toString(),
    },
    openingHoursSpecification: openingHours,
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bangers.variable} ${lora.variable}`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-mostaza/30">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />
        <Script
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{ __html: "history.scrollRestoration='manual';window.scrollTo(0,0)" }}
        />
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
