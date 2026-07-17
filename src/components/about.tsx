"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { negocio } from "@/content/negocio";
import { images } from "@/lib/imagenes";

const highlights = [
  "Productos de estación y productores locales",
  "Cocina sincera, platos abundantes",
  "Platitos vermuteros para picoteo",
  "Espacio interior + área exterior con vista a la plaza",
  "Buena selección de vinos y cervezas",
  "Servicio de rotisería para llevar (takeout)",
];

export default function About() {
  const prefersReduced = useReducedMotion();
  const { descripcion, ubicacion } = negocio;
  const part = descripcion.split("—")[0] || "";

  const ease = [0.25, 0.1, 0.25, 1] as const;

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: prefersReduced ? 0 : 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: "-80px" },
    transition: { duration: 0.45, delay, ease },
  });

  return (
    <section id="about" className="relative py-12 md:py-20 px-4 bg-papel overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-ladrillo/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-oliva/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-start">
          <motion.div {...fadeUp(0)} suppressHydrationWarning className="relative">
            <div className="relative z-10 rounded-sm overflow-hidden border-4 border-papel shadow-2xl shadow-texto/10">
              <Image
                src={images.carbonara}
                alt="Feruccini a la carbonara con guanciale - plato de El Porvenir"
                width={600}
                height={750}
                className="w-full h-auto object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-mostaza/10 rounded-full blur-2xl pointer-events-none" />
            <div className="absolute -top-4 -left-4 w-32 h-32 border-2 border-mostaza/20 rounded-full pointer-events-none" />
          </motion.div>

          <motion.div {...fadeUp(0.1)} suppressHydrationWarning>
            <p className="font-serif text-oliva text-sm md:text-base tracking-[0.25em] uppercase mb-3">
              El lugar
            </p>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ladrillo leading-none mb-6">
              Un bodegón con historia
            </h2>
            <div className="w-16 h-0.5 bg-mostaza mb-6" />

            <p className="font-serif text-texto/85 text-lg leading-relaxed mb-6">
              {part}
            </p>

            <div className="bg-papel-oscuro p-6 md:p-8 rounded-sm border-l-4 border-mostaza space-y-3">
              {highlights.map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span
                    className="text-ladrillo mt-1 flex-shrink-0 text-lg leading-none"
                    aria-hidden="true"
                  >
                    ✦
                  </span>
                  <p className="font-serif text-texto/80 leading-relaxed text-base">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
