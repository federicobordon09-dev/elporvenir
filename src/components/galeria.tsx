"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/imagenes";

const galeriaImages = [
  { img: images.carbonara, alt: "Plato servido en El Porvenir", span: "md:col-span-2 md:row-span-2" },
  { img: images.esparragos, alt: "Comida casera en El Porvenir", span: "" },
  { img: images.choripan, alt: "Preparación del día en El Porvenir", span: "" },
  { img: images.albondigas, alt: "Especialidad de la casa en El Porvenir", span: "md:col-span-2" },
  { img: images.canelones, alt: " elaboración en el bodegón El Porvenir", span: "" },
  { img: images.papas, alt: "Guarnición servida en El Porvenir", span: "" },
  { img: images.crocante, alt: "Postre casero en El Porvenir", span: "" },
  { img: images.chipirones, alt: "Plato frío preparado en El Porvenir", span: "md:col-span-2" },
  { img: images.rabas, alt: "Entrada servida en El Porvenir", span: "" },
  { img: images.sorrentinos, alt: "Pasta fresca en El Porvenir", span: "" },
  { img: images.corzetti, alt: " elaboración artesanal en El Porvenir", span: "md:col-span-2" },
  { img: images.hojaldre, alt: " masa horneada en El Porvenir", span: "" },
  { img: images.tostada, alt: "Tostada del día en El Porvenir", span: "" },
  { img: images.omelet, alt: " elaboración en El Porvenir", span: "" },
  { img: images.tiradito, alt: "Corte fino preparado en El Porvenir", span: "md:col-span-2" },
  { img: images.paleta, alt: "Corte de carne en El Porvenir", span: "" },
  { img: images.pollo, alt: "Pollo preparado en El Porvenir", span: "" },
  { img: images.sandwich, alt: "Sandwich armado en El Porvenir", span: "md:col-span-2" },
  { img: images.risotto, alt: "Risotto del día en El Porvenir", span: "md:col-span-2" },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06 },
  },
};

const easeOut = [0.25, 0.1, 0.25, 1] as const;

const itemVariants = (reduced: boolean) =>
  reduced
    ? { hidden: { opacity: 0 }, visible: { opacity: 1, transition: { duration: 0.3 } } }
    : {
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: easeOut } },
      };

export default function Galeria() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="galeria" className="relative py-12 md:py-20 px-4 bg-papel overflow-hidden">
      <div className="absolute top-0 left-0 w-64 h-64 bg-ladrillo/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-oliva/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <p className="font-serif text-oliva text-sm md:text-base tracking-[0.25em] uppercase mb-3">
            Fotos del bodegón
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
          {galeriaImages.map((item, i) => (
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
