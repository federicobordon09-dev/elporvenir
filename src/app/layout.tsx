import type { Metadata, Viewport } from "next";
import { Bangers, Lora } from "next/font/google";
import Header from "@/components/header";
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
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://elporvemza.com";
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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={`${bangers.variable} ${lora.variable}`}>
      <body className="min-h-screen flex flex-col antialiased selection:bg-mostaza/30">
        <Header />
        <main className="flex-1">{children}</main>
      </body>
    </html>
  );
}
