"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import Image from "next/image";

interface PhotoDividerProps {
  src: string;
  alt: string;
  overlay?: string;
  children?: React.ReactNode;
  priority?: boolean;
}

export default function PhotoDivider({ src, alt, overlay, children, priority }: PhotoDividerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReduced = useReducedMotion();

  const isDesktop = typeof window !== "undefined" && window.innerWidth >= 768;
  const shouldParallax = !prefersReduced && isDesktop;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], shouldParallax ? ["-12%", "12%"] : ["0%", "0%"]);

  return (
    <section ref={ref} className="relative h-[40vh] sm:h-[50vh] md:h-[55vh] overflow-hidden">
      <motion.div
        suppressHydrationWarning
        style={{ y }}
        className="absolute inset-0 will-change-transform"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover"
          sizes="100vw"
          priority={priority}
          fetchPriority={priority ? "high" : "auto"}
        />
      </motion.div>

      <motion.div
        suppressHydrationWarning
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className={`absolute inset-0 ${overlay || "bg-texto/60"}`}
      />

      {children && (
        <motion.div
          suppressHydrationWarning
          initial={{ opacity: 0, y: prefersReduced ? 0 : 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.45, delay: 0.1, ease: "easeOut" }}
          className="absolute inset-0 flex items-center justify-center px-6"
        >
          {children}
        </motion.div>
      )}
    </section>
  );
}
