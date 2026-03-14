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
      <div className="absolute inset-0" style={{ background: dark ? "hsl(var(--rich-black))" : "hsl(var(--card))" }} aria-hidden="true" />

      {/* Layer 1: Ken Burns background image */}
      {backgroundImage && (
        <div
          className="absolute inset-0 z-[0]"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: dark ? 0.08 : 0.06,
            filter: "brightness(0.75) contrast(1.08) saturate(0.9)",
            animation: "ken-burns 30s ease-in-out infinite alternate",
            willChange: "transform",
          }}
          aria-hidden="true"
        />
      )}

      {/* Layer 2: Film grain */}
      <div
        className="grain pointer-events-none absolute inset-0 z-[1]"
        style={{ opacity: dark ? 0.08 : 0.03 }}
        aria-hidden="true"
      />

      {/* Layer 2b: Warm fog (dark sections only) */}
      {dark && (
        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background: "radial-gradient(ellipse at 50% 60%, hsl(var(--vow-yellow) / 0.02), transparent 70%)",
          }}
          aria-hidden="true"
        />
      )}

      {/* Layer 3: Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background: dark
            ? "radial-gradient(ellipse at center, transparent 30%, hsl(var(--rich-black) / 0.7) 100%)"
            : "radial-gradient(ellipse at center, transparent 50%, hsl(var(--card) / 0.4) 100%)",
        }}
        aria-hidden="true"
      />

      {/* Layer 4: Content */}
      <div
        className={cn(
          "relative z-[2] transition-all duration-700",
          !noPadding && "container mx-auto px-fitz-4 md:px-fitz-6 py-fitz-9 md:py-fitz-10",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
        )}
      >
        {children}
      </div>

      {/* Layer 5: Section fade edges */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-16 z-[3]" style={{ background: `linear-gradient(to bottom, ${dark ? "hsl(var(--rich-black))" : "hsl(var(--background))"}, transparent)` }} aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 z-[3]" style={{ background: `linear-gradient(to top, ${dark ? "hsl(var(--rich-black))" : "hsl(var(--background))"}, transparent)` }} aria-hidden="true" />
    </section>
  );
}
