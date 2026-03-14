import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface SectionProps {
  children: React.ReactNode;
  dark?: boolean;
  id?: string;
  className?: string;
  backgroundImage?: string;
  noPadding?: boolean;
  watermark?: string;
  glow?: boolean;
  stagger?: boolean;
}

export function Section({ children, dark = false, id, className, backgroundImage, noPadding = false, watermark, glow = false, stagger = false }: SectionProps) {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.08 });
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section
      ref={(el) => {
        (ref as React.MutableRefObject<HTMLElement | null>).current = el;
        (sectionRef as React.MutableRefObject<HTMLElement | null>).current = el;
      }}
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
            /* willChange removed — CSS animation triggers compositing */
          }}
          aria-hidden="true"
        />
      )}

      {/* Layer 1.5: Glow */}
      {glow && (
        <div
          className="absolute inset-0 z-[0] pointer-events-none"
          style={{ background: "radial-gradient(ellipse at center, hsl(var(--gold) / 0.025), transparent 60%)" }}
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

      {/* Watermark */}
      {watermark && (
        <motion.div
          className="absolute inset-0 z-[1] flex items-center justify-center pointer-events-none select-none overflow-hidden"
          style={{ y: watermarkY }}
          aria-hidden="true"
        >
          <span
            className="font-display text-[12vw] md:text-[8vw] font-light tracking-tight uppercase whitespace-nowrap"
            style={{ color: dark ? "hsl(var(--warm-white) / 0.025)" : "hsl(var(--sage-deep) / 0.03)" }}
          >
            {watermark}
          </span>
        </motion.div>
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
