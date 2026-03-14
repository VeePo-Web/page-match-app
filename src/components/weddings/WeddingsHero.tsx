import heroWeddings from "@/assets/hero-weddings.jpg";
import { GoldFrame } from "@/components/GoldFrame";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export function WeddingsHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0]);
  const contentY = useTransform(scrollYProgress, [0, 0.6], ["0%", "15%"]);
  const watermarkY = useTransform(scrollYProgress, [0, 1], ["0%", "12%"]);
  const scrollCueOpacity = useTransform(scrollYProgress, [0, 0.15], [1, 0]);

  return (
    <section ref={sectionRef} id="hero" className="relative h-screen flex items-center justify-center overflow-hidden" data-theme="death">
      {/* Background */}
      <div className="absolute inset-0 bg-sage-deep" />

      {/* Parallax image */}
      <motion.div
        className="absolute inset-0"
        style={{
          y: imageY,
          backgroundImage: `url(${heroWeddings})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
          filter: "brightness(0.7) contrast(1.08) saturate(0.8)",
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      {/* Grain */}
      <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.04 }} aria-hidden="true" />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--sage-deep) / 0.7) 100%)" }}
        aria-hidden="true"
      />

      {/* Watermark */}
      <motion.div
        className="absolute inset-0 z-[2] flex items-center justify-center pointer-events-none select-none"
        style={{ y: watermarkY }}
        aria-hidden="true"
      >
        <span className="font-display text-[14vw] md:text-[10vw] font-light tracking-tight uppercase" style={{ color: "hsl(var(--warm-white) / 0.03)" }}>
          Vows
        </span>
      </motion.div>

      {/* Gold frame */}
      <GoldFrame />

      {/* Content */}
      <motion.div
        className="relative z-10 text-center px-6 max-w-3xl mx-auto"
        style={{ opacity: contentOpacity, y: contentY }}
      >
        <motion.p
          className="overline mb-fitz-5"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
        >
          Wedding Pianist
        </motion.p>
        <motion.h1
          className="text-foreground mx-auto"
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9, ease: [0.22, 0.61, 0.36, 1] }}
        >
          I carry your vows so they can carry your guests.
        </motion.h1>
        <motion.div
          className="mt-fitz-5"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.2, ease: [0.22, 0.61, 0.36, 1] }}
        >
          <div className="editorial-rule" />
        </motion.div>
      </motion.div>

      {/* Scroll cue — fades on scroll */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        style={{ opacity: scrollCueOpacity }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.6 }}
      >
        <span className="font-sans text-[10px] uppercase tracking-[0.2em] text-muted-foreground/50">Scroll</span>
        <div className="w-[1px] h-6 bg-gold/25 animate-pulse" />
        <svg width="10" height="6" viewBox="0 0 10 6" className="text-gold/30 animate-bounce" style={{ animationDuration: "2s" }}>
          <path d="M1 1l4 4 4-4" stroke="currentColor" strokeWidth="1" fill="none" />
        </svg>
      </motion.div>

      <span className="sr-only">
        Parker Gawryletz, wedding pianist serving Calgary to Banff.
      </span>
    </section>
  );
}
