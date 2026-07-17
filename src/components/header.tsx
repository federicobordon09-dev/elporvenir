"use client";

import { useState, useEffect } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import { negocio } from "@/content/negocio";
import { images } from "@/lib/imagenes";

const nav = [
  { label: "El lugar", href: "#about" },
  { label: "Galería", href: "#galeria" },
  { label: "Horarios", href: "#horarios" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const prefersReduced = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={prefersReduced ? {} : { y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      suppressHydrationWarning
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-papel/95 backdrop-blur-sm shadow-lg shadow-texto/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-16 md:h-20">
        <a href="/" aria-label="Ir al inicio" className="flex items-center gap-3 group min-h-[44px] py-1">
          <div className="relative w-10 h-10 md:w-12 md:h-12 rounded-full overflow-hidden border-2 border-mostaza/30 group-hover:border-mostaza transition-colors flex-shrink-0">
            <Image
              src={images.logo}
              alt=""
              fill
              className="object-cover"
              sizes="48px"
            />
          </div>
          <span
            className={`font-display text-xl md:text-2xl tracking-tight transition-colors ${
              scrolled ? "text-ladrillo" : "text-papel"
            }`}
          >
            {negocio.nombre}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-6" aria-label="Navegación principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`inline-flex items-center min-h-[44px] font-display text-sm tracking-wider transition-colors hover:text-mostaza focus:outline-none focus-visible:text-mostaza focus-visible:underline ${
                scrolled ? "text-texto/70" : "text-papel/80"
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href={`https://wa.me/${negocio.contacto.telefonoLink}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center min-h-[44px] font-display text-sm tracking-wider bg-mostaza hover:bg-mostaza-claro text-texto px-5 py-2 rounded-sm transition-all focus:outline-none focus-visible:ring-2 focus-visible:ring-mostaza focus-visible:ring-offset-2 focus-visible:ring-offset-papel"
          >
            Reservar
          </a>
        </nav>

        <a
          href={`https://wa.me/${negocio.contacto.telefonoLink}`}
          target="_blank"
          rel="noopener noreferrer"
          className={`md:hidden inline-flex items-center justify-center min-h-[44px] min-w-[44px] font-display text-sm tracking-wider px-4 py-2 rounded-sm transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 ${
            scrolled
              ? "bg-ladrillo text-papel hover:bg-ladrillo-claro focus-visible:ring-mostaza focus-visible:ring-offset-papel"
              : "bg-mostaza text-texto hover:bg-mostaza-claro focus-visible:ring-papel focus-visible:ring-offset-transparent"
          }`}
        >
          Reservar
        </a>
      </div>
    </motion.header>
  );
}
