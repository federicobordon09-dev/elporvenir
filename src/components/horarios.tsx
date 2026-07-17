"use client";

import { motion, useReducedMotion } from "framer-motion";
import { negocio } from "@/content/negocio";

const dias = ["Domingo", "Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado"];

function DiaFila({ dia, index }: { dia: (typeof negocio.horarios)[0]; index: number }) {
  const hoy = new Date().getDay();
  const esHoy = dias[hoy] === dia.dia;

  return (
    <motion.tr
      suppressHydrationWarning
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.1, ease: "easeOut" }}
      className={`group transition-all duration-300 ${
        esHoy ? "bg-ladrillo/10 font-bold" : "hover:bg-papel/40"
      } border-b border-papel-oscuro/40 last:border-0`}
    >
      <td className="py-3 pr-4">
        <span className="font-display text-ladrillo text-lg md:text-xl transition-colors group-hover:text-ladrillo-claro">
          {dia.dia}
        </span>
      </td>
      <td className="py-3 text-texto/80 font-serif">
        {dia.mediodia && dia.cena ? (
          <div className="text-sm md:text-base leading-snug space-y-0.5">
            <span>{dia.mediodia}</span>
            <motion.span
              suppressHydrationWarning
              initial={{ width: 0 }}
              whileInView={{ width: "auto" }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 + 0.15 }}
              className="text-mostaza block text-xs tracking-widest overflow-hidden"
              aria-hidden="true"
            >
              ────
            </motion.span>
            <span>{dia.cena}</span>
          </div>
        ) : dia.mediodia ? (
          <span className="text-sm md:text-base">{dia.mediodia}</span>
        ) : (
          <span className="font-display text-ladrillo/40 tracking-widest text-sm">✕ CERRADO</span>
        )}
      </td>
    </motion.tr>
  );
}

function DiaCard({ dia, index }: { dia: (typeof negocio.horarios)[0]; index: number }) {
  const hoy = new Date().getDay();
  const esHoy = dias[hoy] === dia.dia;

  return (
    <motion.div
      suppressHydrationWarning
      initial={{ opacity: 0, x: -16 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.1, ease: "easeOut" }}
      className={`flex items-center justify-between px-4 py-3 rounded-sm transition-all duration-300 ${
        esHoy
          ? "bg-ladrillo/10 border-l-4 border-mostaza font-bold"
          : "bg-papel border-l-4 border-transparent"
      }`}
    >
      <span className="font-display text-ladrillo text-base">{dia.dia}</span>
      {dia.mediodia && dia.cena ? (
        <div className="text-right text-texto/80 font-serif text-xs leading-snug">
          <span>{dia.mediodia}</span>
          <span className="text-mostaza block text-[10px] tracking-widest">────</span>
          <span>{dia.cena}</span>
        </div>
      ) : dia.mediodia ? (
        <span className="text-texto/80 font-serif text-xs">{dia.mediodia}</span>
      ) : (
        <span className="font-display text-ladrillo/40 tracking-widest text-xs">✕ CERRADO</span>
      )}
    </motion.div>
  );
}

export default function Horarios() {
  const prefersReduced = useReducedMotion();
  const { horarios, ubicacion, mapaLink, mapaEmbedUrl } = negocio;
  const orden = [1, 2, 3, 4, 5, 6, 0];

  return (
    <section id="horarios" className="relative py-12 md:py-20 px-4 bg-papel overflow-hidden">
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(circle_at_50%_50%,_#6B3A2E_1px,transparent_1px)] bg-[length:32px_32px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: prefersReduced ? 0 : 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12 md:mb-16"
        >
          <p className="font-serif text-oliva text-sm md:text-base tracking-[0.25em] uppercase mb-3">
            Visitanos
          </p>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-ladrillo leading-none mb-4">
            Horarios &amp; ubicación
          </h2>
          <div className="w-16 h-0.5 bg-mostaza mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-5 gap-8 md:gap-12">
          <div className="md:col-span-2">
            <div className="bg-papel-oscuro border-2 border-texto/10 p-4 md:p-8 rounded-sm relative transition-shadow duration-300 hover:shadow-lg">
              <div className="absolute -top-3 left-6 bg-papel-oscuro px-3 flex items-center gap-2 text-ladrillo/60">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="font-display text-xs tracking-wider">HORARIOS</span>
              </div>

              <div className="flex flex-col gap-2 mt-2 md:hidden">
                {orden.map((i) => (
                  <DiaCard key={horarios[i].dia} dia={horarios[i]} index={i} />
                ))}
              </div>

              <table className="w-full mt-2 hidden md:table">
                <tbody>
                  {orden.map((i) => (
                    <DiaFila key={horarios[i].dia} dia={horarios[i]} index={i} />
                  ))}
                </tbody>
              </table>
            </div>

            <motion.p
              suppressHydrationWarning
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.7 }}
              className="font-serif text-texto/60 text-sm mt-4 flex items-center gap-2"
            >
              <svg className="w-4 h-4 text-oliva flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>Lunes cerrado &middot; Martes y domingo solo mediodía</span>
            </motion.p>
          </div>

          <div className="md:col-span-3 flex flex-col">
            <div className="rounded-sm overflow-hidden border-2 border-papel-oscuro mb-4 aspect-[16/9] md:min-h-[280px] shadow-lg shadow-texto/5 transition-shadow duration-300 hover:shadow-xl">
              <iframe
                title="Ubicación de El Porvenir - San Martín 102, La Consulta"
                src={mapaEmbedUrl}
                width="100%"
                height="100%"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
            <div className="flex items-start justify-between gap-4 flex-wrap">
              <div>
                <p className="font-serif text-texto/80 text-sm md:text-base leading-relaxed">
                  <span className="font-bold text-ladrillo">{ubicacion.direccion}</span>
                  {", esq. "}{ubicacion.esquina}
                </p>
                <p className="font-serif text-texto/60 text-sm">
                  {ubicacion.localidad}, {ubicacion.departamento} &middot; {ubicacion.provincia}
                </p>
              </div>
              <a
                href={mapaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center min-h-[44px] gap-1.5 font-display text-oliva hover:text-oliva-claro text-sm tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-mostaza focus-visible:ring-offset-2 focus-visible:ring-offset-papel"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                Abrir en Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
