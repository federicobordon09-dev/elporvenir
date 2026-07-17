import Hero from "@/components/hero";
import About from "@/components/about";
import PlatosDestacados from "@/components/platos-destacados";
import Galeria from "@/components/galeria";
import PhotoDivider from "@/components/photo-divider";
import Horarios from "@/components/horarios";
import Resenas from "@/components/resenas";
import Contacto from "@/components/contacto";
import Footer from "@/components/footer";
import { images } from "@/lib/imagenes";

export default function Home() {
  return (
    <>
      <Hero />

      <About />

      <PhotoDivider
        src={images.rabas}
        alt="Servicio de takeout y delivery de El Porvenir - rabas para llevar"
        overlay="bg-gradient-to-r from-texto/70 via-texto/50 to-texto/70"
        priority
      >
        <div className="text-center">
          <p className="font-serif text-mostaza text-sm tracking-[0.25em] uppercase mb-3 drop-shadow-sm">
            Rotisería
          </p>
          <h3 className="font-display text-4xl md:text-5xl text-papel leading-none mb-4">
            También para llevar
          </h3>
          <p className="font-serif text-papel/90 text-lg max-w-md mx-auto drop-shadow-sm">
            Servicio de takeout. Pedinos por WhatsApp y pasá a retirar.
          </p>
        </div>
      </PhotoDivider>

      <PlatosDestacados />

      <Galeria />

      <PhotoDivider
        src={images.gastronomia}
        alt="Platos de estación de El Porvenir - cocina sincera con productos locales"
        overlay="bg-gradient-to-l from-texto/60 via-texto/40 to-texto/60"
      >
        <div className="text-center">
          <p className="font-serif text-mostaza text-sm tracking-[0.25em] uppercase mb-3 drop-shadow-sm">
            Cocina sincera
          </p>
          <h3 className="font-display text-4xl md:text-5xl text-papel leading-none mb-4">
            Productos de estación
          </h3>
          <p className="font-serif text-papel/90 text-lg max-w-md mx-auto drop-shadow-sm">
            Valoramos a los productores locales y los sabores de la tierra mendocina.
          </p>
        </div>
      </PhotoDivider>

      <Horarios />

      <Resenas />

      <Contacto />

      <Footer />
    </>
  );
}
