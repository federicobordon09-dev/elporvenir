import Image from "next/image";
import { negocio } from "@/content/negocio";
import { images } from "@/lib/imagenes";

const contactItems = [
  {
    label: "WhatsApp",
    value: negocio.contacto.telefono,
    href: `https://wa.me/${negocio.contacto.telefonoLink}`,
    icon: "whatsapp",
  },
  {
    label: "Instagram",
    value: negocio.contacto.instagram,
    href: negocio.contacto.instagramUrl,
    icon: "instagram",
  },
  {
    label: "Facebook",
    value: "El Porvenir Mza",
    href: negocio.contacto.facebookUrl,
    icon: "facebook",
  },
];

function Icon({ name }: { name: string }) {
  switch (name) {
    case "whatsapp":
      return (
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
      );
    case "instagram":
      return (
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
      );
    case "facebook":
      return (
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      );
    default:
      return null;
  }
}

export default function Contacto() {
  const { contacto, ubicacion } = negocio;
  return (
    <section id="contacto" className="relative py-12 md:py-20 px-4 bg-papel overflow-hidden">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-oliva/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto text-center relative">
        <p className="font-serif text-oliva text-sm md:text-base tracking-[0.25em] uppercase mb-3">
          Hacé tu reserva
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ladrillo leading-none mb-4">
          Contacto
        </h2>
        <div className="w-16 h-0.5 bg-mostaza mx-auto mb-12" />

        <div className="grid md:grid-cols-3 gap-5 mb-12">
          {contactItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-papel-oscuro hover:bg-ladrillo p-6 md:p-8 rounded-sm border border-texto/10 transition-all duration-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-mostaza focus-visible:ring-offset-2 focus-visible:ring-offset-papel"
            >
              <div className="flex flex-col items-center gap-3">
                <div className="w-14 h-14 rounded-full bg-ladrillo/10 group-hover:bg-papel/20 flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                  <svg
                    className="w-6 h-6 text-ladrillo group-hover:text-papel transition-colors duration-500"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <Icon name={item.icon} />
                  </svg>
                </div>
                <div>
                  <p className="font-display text-ladrillo group-hover:text-papel text-lg transition-colors duration-500">
                    {item.label}
                  </p>
                  <p className="font-serif text-texto/60 group-hover:text-papel/80 text-sm transition-colors duration-500">
                    {item.value}
                  </p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-3 md:gap-6 mb-10">
          <a
            href={`tel:${contacto.telefono}`}
            className="inline-flex items-center justify-center min-h-[44px] gap-2 font-serif text-texto/70 hover:text-ladrillo text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mostaza focus-visible:ring-offset-2 focus-visible:ring-offset-papel"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
            </svg>
            {contacto.telefono}
          </a>
          <span className="hidden md:inline text-texto/20" aria-hidden="true">|</span>
          <a
            href={contacto.instagramUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] gap-2 font-serif text-texto/70 hover:text-ladrillo text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mostaza focus-visible:ring-offset-2 focus-visible:ring-offset-papel"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
            </svg>
            {contacto.instagram}
          </a>
          <span className="hidden md:inline text-texto/20" aria-hidden="true">|</span>
          <a
            href={contacto.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] gap-2 font-serif text-texto/70 hover:text-ladrillo text-base transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mostaza focus-visible:ring-offset-2 focus-visible:ring-offset-papel"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
            </svg>
            /elporvenirmza
          </a>
        </div>

        <div className="border-t border-papel-oscuro pt-8 mt-8">
          <div className="relative w-16 h-16 mx-auto mb-4 rounded-full overflow-hidden border-2 border-mostaza/20 opacity-60">
            <Image
              src={images.logo}
              alt={`Logo de ${negocio.nombre}`}
              fill
              className="object-cover"
              sizes="64px"
            />
          </div>
          <p className="font-serif text-texto/50 text-sm max-w-md mx-auto">
            {ubicacion.direccion}, esq. {ubicacion.esquina} &middot; {ubicacion.localidad}, {ubicacion.provincia}
          </p>
        </div>
      </div>
    </section>
  );
}
