import { cn } from "@/lib/utils";
import { GoldFrame } from "@/components/GoldFrame";
import { useRef, useEffect } from "react";
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

  // Preload background image for fast LCP
  useEffect(() => {
    if (!backgroundImage) return;
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = backgroundImage;
    link.setAttribute("fetchpriority", "high");
    document.head.appendChild(link);
    return () => { document.head.removeChild(link); };
  }, [backgroundImage]);

  return (
    <section
      ref={sectionRef}
      className={cn("relative flex items-center justify-center overflow-hidden", height)}
      data-theme="death"
    >
      <div className="absolute inset-0 bg-sage-deep" aria-hidden="true" />

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
          }}
          aria-hidden="true"
        />
      )}

      <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.04 }} aria-hidden="true" />

      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--sage-deep) / 0.7) 100%)" }}
        aria-hidden="true"
      />

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

      <GoldFrame />

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

      {showScrollCue && (
        <motion.div
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2 pointer-events-none"
          style={{ opacity: scrollCueOpacity }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
        >
          <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground">Scroll</span>
          <motion.div
            className="w-[1px] h-6"
            style={{ background: "hsl(var(--gold) / 0.4)" }}
            animate={{ scaleY: [0.4, 1, 0.4] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <svg width="10" height="6" viewBox="0 0 10 6" fill="none" className="text-gold/40">
            <path d="M1 1L5 5L9 1" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </motion.div>
      )}
    </section>
  );
}
