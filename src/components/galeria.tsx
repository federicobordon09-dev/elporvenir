"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, useReducedMotion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { images } from "@/lib/imagenes";

const galeriaImages = [
  { img: images.esparragos, alt: "Comida casera en El Porvenir", span: "md:col-span-2 md:row-span-2", aspect: "aspect-[4/3] md:aspect-video", pos: "object-center" },
  { img: images.choripan, alt: "Preparación del día en El Porvenir", span: "", aspect: "aspect-square", pos: "object-center" },
  { img: images.albondigas, alt: "Especialidad de la casa en El Porvenir", span: "", aspect: "aspect-[4/3]", pos: "object-center" },
  { img: images.canelones, alt: " elaboración en el bodegón El Porvenir", span: "md:col-span-2", aspect: "aspect-[4/3]", pos: "object-center" },
  { img: images.sorrentinos, alt: "Pasta fresca en El Porvenir", span: "", aspect: "aspect-[4/3]", pos: "object-center" },
  { img: images.papas, alt: "Guarnición servida en El Porvenir", span: "", aspect: "aspect-square", pos: "object-center" },
  { img: images.crocante, alt: "Postre casero en El Porvenir", span: "", aspect: "aspect-[3/4]", pos: "object-[center_60%]" },
  { img: images.chipirones, alt: "Plato frío preparado en El Porvenir", span: "", aspect: "aspect-square", pos: "object-center" },
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
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const closeLightbox = useCallback(() => setLightboxIndex(null), []);

  useEffect(() => {
    if (lightboxIndex === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeLightbox();
      if (e.key === "ArrowRight") setLightboxIndex((i) => (i! + 1) % galeriaImages.length);
      if (e.key === "ArrowLeft") setLightboxIndex((i) => (i! - 1 + galeriaImages.length) % galeriaImages.length);
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [lightboxIndex, closeLightbox]);

  return (
    <>
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
            className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4"
          >
            {galeriaImages.map((item, i) => (
              <motion.button
                key={i}
                suppressHydrationWarning
                variants={itemVariants(!!prefersReduced)}
                onClick={() => setLightboxIndex(i)}
                className={`relative overflow-hidden rounded-sm group cursor-pointer text-left w-full ${item.span || ""} ${item.aspect || "aspect-square"} focus:outline-none focus-visible:ring-2 focus-visible:ring-mostaza focus-visible:ring-offset-2 focus-visible:ring-offset-papel`}
              >
                <Image
                  src={item.img}
                  alt={item.alt}
                  fill
                  className={`object-cover transition-all duration-700 group-hover:scale-110 ${item.pos}`}
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-ladrillo/0 group-hover:bg-ladrillo/10 transition-colors duration-400" />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </section>

      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-texto/95 backdrop-blur-sm"
            onClick={closeLightbox}
          >
            <button
              onClick={closeLightbox}
              className="absolute top-4 right-4 z-10 w-12 h-12 flex items-center justify-center text-papel hover:text-mostaza transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mostaza rounded-full"
              aria-label="Cerrar galería"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex - 1 + galeriaImages.length) % galeriaImages.length); }}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-papel/70 hover:text-papel transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mostaza rounded-full"
              aria-label="Imagen anterior"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            <motion.div
              key={lightboxIndex}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full h-full max-w-5xl max-h-[85vh] mx-16"
              onClick={(e) => e.stopPropagation()}
            >
              <Image
                src={galeriaImages[lightboxIndex].img}
                alt={galeriaImages[lightboxIndex].alt}
                fill
                className="object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>

            <button
              onClick={(e) => { e.stopPropagation(); setLightboxIndex((lightboxIndex + 1) % galeriaImages.length); }}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-12 h-12 flex items-center justify-center text-papel/70 hover:text-papel transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mostaza rounded-full"
              aria-label="Imagen siguiente"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>

            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 font-serif text-papel/50 text-sm">
              {lightboxIndex + 1} / {galeriaImages.length}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
