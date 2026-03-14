import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState } from "react";
import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import editorialFloralsImage from "@/assets/editorial-florals.jpg";

const pillars = [
  { label: "Calm Leadership", detail: "Quiet confidence under pressure, so you never have to wonder what happens next.", emphasis: "Confidence" },
  { label: "Elevated Design", detail: "Cohesive, intentional aesthetics that feel like you — never cookie-cutter.", emphasis: "Intentional" },
  { label: "Protected Presence", detail: "Your day, fully felt. We handle the logistics so you can hold the moments.", emphasis: "Presence" },
];

const BrandPromiseSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [activePillar, setActivePillar] = useState<number | null>(null);
  
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });
  const bgTextY = useTransform(scrollYProgress, [0, 1], ["12%", "-12%"]);
  const floatingImgY = useTransform(scrollYProgress, [0, 1], ["18%", "-18%"]);
  const accentLineHeight = useTransform(scrollYProgress, [0.1, 0.6], [0, 1]);

  return (
    <section
      ref={sectionRef}
      className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-background relative overflow-hidden"
    >
      {/* Large decorative watermark */}
      <motion.div
        className="absolute -right-10 top-1/2 pointer-events-none select-none"
        style={{ y: bgTextY }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.015 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-serif-wedding text-[14rem] md:text-[20rem] font-light text-foreground leading-none tracking-tight whitespace-nowrap">
          Philosophy
        </span>
      </motion.div>

      {/* Left scroll-linked accent line */}
      <motion.div
        className="absolute left-0 top-1/2 -translate-y-1/2 w-px h-64 hidden lg:block origin-center"
        style={{
          scaleY: accentLineHeight,
          background: "linear-gradient(180deg, transparent, hsl(var(--primary) / 0.15), transparent)",
        }}
      />

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-start mb-20 md:mb-28">
            {/* Left: Overline + editorial drop-cap quote */}
            <div className="lg:col-span-7">
              {/* Section index */}
              <motion.span
                className="font-serif-wedding text-6xl font-light text-primary/8 block mb-5"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                02
              </motion.span>
              
              <div className="flex items-center gap-4 mb-6">
                <p className="font-overline text-muted-foreground">
                  Our Philosophy
                </p>
                <motion.span
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-12 h-px bg-primary/15 origin-left"
                />
              </div>
              
              <p className="font-serif-wedding text-pull-quote text-foreground leading-[1.6] first-letter:font-script first-letter:text-7xl first-letter:float-left first-letter:mr-4 first-letter:mt-1 first-letter:leading-none first-letter:text-primary/50">
                Calm becomes a luxury. We protect what matters most on your wedding
                day: your presence, your peace of mind, and the freedom to fully
                feel every moment as it unfolds around you.
              </p>

              {/* Trust metric strip with gold separators */}
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="flex items-center gap-6 mt-8 pt-6 border-t border-border/20 relative"
              >
                {/* Ambient gold glow behind metrics */}
                <motion.div
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[80px] pointer-events-none"
                  animate={{ opacity: [0.03, 0.08, 0.03] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                  style={{ background: "radial-gradient(ellipse, hsl(var(--gold) / 0.2), transparent 70%)" }}
                  aria-hidden="true"
                />
                {[
                  { value: "100+", label: "Weddings" },
                  { value: "7+", label: "Years" },
                  { value: "100%", label: "Calm Days" },
                ].map((stat, i) => (
                  <div key={stat.label} className="flex items-center gap-6">
                    {i > 0 && (
                      <span
                        className="w-1 h-1 rotate-45 shrink-0"
                        style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.3), hsl(var(--gold) / 0.08))" }}
                      />
                    )}
                    <div className="text-center relative">
                      <p className="font-serif-wedding text-lg text-foreground/40 font-light">{stat.value}</p>
                      <p className="font-sans-wedding text-caption tracking-[0.2em] uppercase text-muted-foreground mt-0.5">{stat.label}</p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Right: Floating editorial image + quote */}
            <div className="lg:col-span-5 lg:pt-10">
              <motion.div style={{ y: floatingImgY }}>
                <ImageReveal direction="right">
                  <div className="aspect-[4/5] overflow-hidden mb-6 relative group">
                    <img
                      src={editorialFloralsImage}
                      alt="Sage eucalyptus and ivory garden rose arrangement"
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-[1.2s]"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/5 transition-colors duration-700" />
                    
                    {/* Gold-gradient corner accents */}
                    <div className="absolute top-3 right-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                      <span className="absolute top-0 right-0 w-full h-px" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.35), transparent)" }} />
                      <span className="absolute top-0 right-0 h-full w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.35), transparent)" }} />
                    </div>
                    <div className="absolute bottom-3 left-3 w-6 h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true">
                      <span className="absolute bottom-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.35), transparent)" }} />
                      <span className="absolute bottom-0 left-0 h-full w-px" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.35), transparent)" }} />
                    </div>
                    
                    {/* Ambient gold glow on hover */}
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                      style={{ background: "radial-gradient(ellipse at 50% 80%, hsl(var(--gold) / 0.06), transparent 60%)" }}
                    />
                  </div>
                </ImageReveal>
                
                {/* Gradient rule */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="w-12 h-px mb-5 origin-left"
                  style={{ background: "linear-gradient(90deg, hsl(var(--primary) / 0.3), transparent)" }}
                />
                
                <p className="font-sans-wedding text-body-sm text-muted-foreground leading-relaxed font-light italic">
                  "Our approach isn't just about logistics — it's about creating
                  space for you to be fully present on the most important day of
                  your life."
                </p>
                <p className="font-overline text-primary/60 mt-4 text-caption">
                  — Founder, Hickory & Rose
                </p>
              </motion.div>
            </div>
          </div>
        </ScrollReveal>

        {/* Brand pillars — editorial ruled rows with hover states */}
        <div className="border-t border-border/30">
          {pillars.map((pillar, index) => (
            <ScrollReveal key={pillar.label} delay={index * 0.08}>
              <div
                className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-baseline py-9 md:py-12 border-b border-border/25 group cursor-default hover:bg-muted/10 transition-all duration-500 -mx-2 px-2 relative"
                onMouseEnter={() => setActivePillar(index)}
                onMouseLeave={() => setActivePillar(null)}
              >
                {/* Gold accent left border on hover */}
                <motion.div
                  className="absolute left-0 top-0 bottom-0 w-[2px] origin-top"
                  style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.5), hsl(var(--gold) / 0.15), transparent)" }}
                  initial={{ scaleY: 0 }}
                  animate={{ scaleY: activePillar === index ? 1 : 0 }}
                  transition={{ duration: 0.4, ease: [0.25, 0.1, 0.25, 1] }}
                />
                <div className="md:col-span-1">
                  <span className="font-serif-wedding text-3xl font-light text-primary/8 group-hover:text-primary/25 transition-colors duration-700">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="md:col-span-1 flex items-center">
                  <motion.span
                    className="w-2.5 h-2.5 rotate-45 block"
                    style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.3), hsl(var(--gold) / 0.08))" }}
                    animate={activePillar === index ? { scale: 1.3 } : { scale: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <div className="md:col-span-3 relative">
                  <p className="font-overline text-primary/70 group-hover:tracking-[0.25em] transition-all duration-500">
                    {pillar.label}
                  </p>
                  <motion.div
                    className="h-px mt-2 origin-left"
                    style={{ background: "linear-gradient(90deg, hsl(var(--primary) / 0.25), transparent)" }}
                    initial={{ scaleX: 0 }}
                    whileInView={{ scaleX: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: 0.2 + index * 0.1 }}
                  />
                </div>
                <div className="md:col-span-7">
                  <p className="font-sans-wedding text-body-sm text-muted-foreground font-light leading-relaxed group-hover:text-muted-foreground transition-colors duration-500">
                    {pillar.detail}
                  </p>
                  {/* Hover keyword emphasis */}
                  <p className="font-script text-sm text-primary/0 group-hover:text-primary/20 transition-all duration-500 mt-2">
                    {pillar.emphasis}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Editorial manifesto micro-line */}
        <ScrollReveal delay={0.3}>
          <div className="mt-16 md:mt-24 flex items-center justify-center gap-6">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-10 h-px origin-right hidden md:block"
              style={{ background: "linear-gradient(90deg, transparent, hsl(var(--border) / 0.3))" }}
            />
            <span className="w-1.5 h-1.5 rotate-45" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.25), hsl(var(--gold) / 0.08))" }} />
            <p className="font-serif-wedding text-sm italic text-muted-foreground">
              Refined rustic elegance — run with quiet luxury precision.
            </p>
            <span className="w-1.5 h-1.5 rotate-45" style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.25), hsl(var(--gold) / 0.08))" }} />
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="w-10 h-px origin-left hidden md:block"
              style={{ background: "linear-gradient(90deg, hsl(var(--border) / 0.3), transparent)" }}
            />
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default BrandPromiseSection;
