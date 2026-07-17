"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/imagenes";

const platoImages = [
  { img: images.esparragos, alt: "Espárragos frescos con salsa huancaína", span: "md:col-span-2 md:row-span-2" },
  { img: images.choripan, alt: "Chori del Porve", span: "" },
  { img: images.albondigas, alt: "Albóndigas con puré y mix de verdes", span: "" },
  { img: images.canelones, alt: "Canelones caseros gratinados al horno", span: "md:col-span-2" },
  { img: images.sorrentinos, alt: "Sorrentinos de zapallo y pera", span: "" },
  { img: images.papas, alt: "Papas clásicas del Porve", span: "" },
  { img: images.crocante, alt: "Crocante de naranjas y frutillas", span: "" },
  { img: images.chipirones, alt: "Escabeche de chipirones", span: "" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08 },
  },
};

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const itemVariants = (reduced: boolean) =>
  reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
      };

export default function Platos() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="platos" className="relative py-24 md:py-32 px-4 bg-papel-oscuro overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-oliva/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ladrillo/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-14"
        >
          <p className="font-serif text-oliva text-sm md:text-base tracking-[0.25em] uppercase mb-3">
            Para comer y compartir
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ladrillo leading-none mb-4">
            Galería
          </h2>
          <div className="w-16 h-0.5 bg-mostaza mx-auto" />
        </motion.div>

        <motion.div
          suppressHydrationWarning
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] sm:auto-rows-[220px] md:auto-rows-[280px] gap-3 md:gap-4"
        >
          {platoImages.map((item, i) => (
            <motion.div
              key={i}
              suppressHydrationWarning
              variants={itemVariants(!!prefersReduced)}
              className={`relative overflow-hidden rounded-sm group ${item.span || ""}`}
            >
              <Image
                src={item.img}
                alt={item.alt}
                fill
                className="object-cover transition-all duration-700 group-hover:scale-105"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
