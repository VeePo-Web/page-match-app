import { cn } from "@/lib/utils";
import { GoldFrame } from "@/components/GoldFrame";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface HeroStripProps {
  title: string;
  subtitle?: string;
  height?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
  watermark?: string;
  showScrollCue?: boolean;
}

export function HeroStrip({ title, subtitle, height = "h-[50vh]", backgroundImage, children, watermark, showScrollCue = false }: HeroStripProps) {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "12%"]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className={cn("relative flex items-center justify-center overflow-hidden", height)}
      data-theme="death"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-sage-deep" aria-hidden="true" />

      {/* Parallax image */}
      {backgroundImage && (
        <motion.div
          className="absolute inset-0"
          style={{
            y: imageY,
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
            filter: "brightness(0.7) contrast(1.08) saturate(0.8)",
            willChange: "transform",
          }}
          aria-hidden="true"
        />
      )}

      {/* Grain */}
      <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.04 }} aria-hidden="true" />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--sage-deep) / 0.7) 100%)" }}
        aria-hidden="true"
      />

      {/* Watermark */}
      {watermark && (
        <motion.div
          className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none select-none"
          style={{ y: watermarkY }}
          aria-hidden="true"
        >
          <span className="font-display text-[12vw] md:text-[10vw] font-light tracking-tight uppercase" style={{ color: "hsl(var(--warm-white) / 0.03)" }}>
            {watermark}
          </span>
        </motion.div>
      )}

      {/* Gold frame corners */}
      <GoldFrame />

      {/* Content — parallax fade on scroll */}
      <motion.div
        className="relative z-10 text-center px-fitz-4 md:px-fitz-6 max-w-3xl mx-auto"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        {subtitle && (
          <motion.p
            className="overline mb-fitz-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {subtitle}
          </motion.p>
        )}
        <motion.h1
          className="text-foreground mx-auto"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease: [0.22, 0.61, 0.36, 1] }}
        >
          {title}
        </motion.h1>
        {children && (
          <motion.div
            className="mt-fitz-5"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
          >
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
