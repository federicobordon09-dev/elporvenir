"use client";

import { motion, useReducedMotion } from "framer-motion";
import { negocio } from "@/content/negocio";

const divider = [0.1, 0.2, 0.25, 0.3, 0.35, 0.4, 0.45, 0.5] as const;

export default function PlatosDestacados() {
  const prefersReduced = useReducedMotion();

  return (
    <section id="platos" className="relative py-12 md:py-20 px-4 bg-papel-oscuro overflow-hidden">
      <div className="absolute top-0 right-0 w-72 h-72 bg-oliva/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-ladrillo/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-14"
        >
          <p className="font-serif text-oliva text-sm md:text-base tracking-[0.25em] uppercase mb-3">
            Recomendados por la crítica
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ladrillo leading-none mb-4">
            Platos destacados
          </h2>
          <div className="w-16 h-0.5 bg-mostaza mx-auto" />
        </motion.div>

        <div className="max-w-3xl mx-auto">
          <div className="grid gap-4 md:gap-5">
            {negocio.platosDestacados.map((plato, i) => (
              <motion.div
                key={plato}
                suppressHydrationWarning
                initial={{ opacity: 0, x: prefersReduced ? 0 : -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.35, delay: divider[i] ?? 0.5, ease: "easeOut" }}
                className="bg-papel border-l-4 border-mostaza px-5 py-4 md:px-6 md:py-5 rounded-sm shadow-sm hover:shadow-md transition-shadow"
              >
                <p className="font-serif text-texto text-base md:text-lg leading-relaxed">
                  {plato}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
