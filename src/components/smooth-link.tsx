"use client";

import { ReactNode } from "react";

interface SmoothLinkProps {
  href: string;
  label: string;
  className?: string;
  children?: ReactNode;
}

export default function SmoothLink({ href, label, className, children }: SmoothLinkProps) {
  const handleClick = () => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button type="button" onClick={handleClick} className={className}>
      {children || label}
    </button>
  );
}
