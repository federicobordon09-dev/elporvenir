"use client";

import { motion, useReducedMotion } from "framer-motion";
import { negocio } from "@/content/negocio";

export default function Resenas() {
  const prefersReduced = useReducedMotion();
  const { reputacion } = negocio;

  return (
    <section className="relative py-24 md:py-32 px-4 bg-papel-oscuro overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-mostaza/5 rounded-full blur-3xl pointer-events-none" />

      <motion.div
        suppressHydrationWarning
        initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.4 }}
        className="max-w-4xl mx-auto text-center relative"
      >
        <p className="font-serif text-oliva text-sm md:text-base tracking-[0.25em] uppercase mb-3">
          Lo que dicen
        </p>
        <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ladrillo leading-none mb-6">
          Reputación
        </h2>
        <div className="w-16 h-0.5 bg-mostaza mx-auto mb-12" />

        <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 mb-12">
          <div className="flex flex-col items-center">
            <span className="font-display text-7xl md:text-8xl text-ladrillo leading-none tracking-tight">
              {reputacion.puntuacion}
            </span>
            <span className="font-display text-xl text-mostaza tracking-wider">/ {reputacion.maximo}</span>
            <div className="flex gap-1 mt-3" aria-label={`${reputacion.puntuacion} de ${reputacion.maximo} estrellas`}>
              {Array.from({ length: 5 }, (_, i) => (
                <svg
                  key={i}
                  className={`w-5 h-5 ${i < Math.floor(reputacion.puntuacion) ? "text-mostaza" : "text-texto/10"}`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  aria-hidden="true"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {reputacion.reseñas.map((r, i) => (
              <div key={i} className="flex items-center gap-4 bg-papel px-6 py-3 rounded-sm border border-papel-oscuro shadow-sm">
                <span className="font-display text-oliva text-sm tracking-wider">{r.fuente}</span>
                <div className="w-px h-5 bg-papel-oscuro" />
                <span className="font-serif text-texto/60 text-sm">{r.cantidad.toLocaleString()} valoraciones</span>
              </div>
            ))}
          </div>
        </div>

        <blockquote className="font-serif text-texto/70 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto relative px-8 md:px-12">
          <div className="absolute left-0 top-0 text-mostaza/20 text-6xl font-display leading-none" aria-hidden="true">
            &ldquo;
          </div>
          <p className="italic">
            {reputacion.percepcion}
          </p>
          <div className="absolute right-0 bottom-0 text-mostaza/20 text-6xl font-display leading-none" aria-hidden="true">
            &rdquo;
          </div>
        </blockquote>
      </motion.div>
    </section>
  );
}
