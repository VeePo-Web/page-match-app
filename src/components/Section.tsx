import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import React from "react";

interface SectionProps {
  children: React.ReactNode;
  dark?: boolean;
  id?: string;
  className?: string;
  backgroundImage?: string;
  noPadding?: boolean;
}

export function Section({ children, dark = false, id, className, backgroundImage, noPadding = false }: SectionProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={cn("relative overflow-hidden", dark ? "section--dark" : "section--surface", className)}
      data-theme={dark ? "death" : undefined}
    >
      {/* Layer 0: Background */}
      <div className="absolute inset-0" style={{ background: dark ? "hsl(var(--sage-deep))" : "hsl(var(--cream))" }} aria-hidden="true" />

      {/* Layer 1: Background image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-[0]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: dark ? 0.06 : 0.04,
            filter: "brightness(0.8) contrast(1.05) saturate(0.85)",
            animation: "ken-burns 30s ease-in-out infinite alternate",
            willChange: "transform",
          }}
          aria-hidden="true"
        />
      )}

      {/* Layer 2: Subtle grain on dark sections only */}
      {dark && (
        <div
          className="grain pointer-events-none absolute inset-0 z-[1]"
          style={{ opacity: 0.04 }}
          aria-hidden="true"
        />
      )}

      {/* Layer 3: Vignette — dark sections only */}
      {dark && (
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background: "radial-gradient(ellipse at center, transparent 40%, hsl(var(--sage-deep) / 0.6) 100%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Layer 4: Content */}
      <div
        className={cn(
          "relative z-[2] transition-all duration-700",
          !noPadding && "container mx-auto px-fitz-4 md:px-fitz-6 py-fitz-9 md:py-fitz-10",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
        )}
      >
        {children}
      </div>
    </section>
  );
}
