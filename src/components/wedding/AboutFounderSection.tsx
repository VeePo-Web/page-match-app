import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import ScrollReveal from "./ScrollReveal";
import ImageReveal from "./ImageReveal";
import MagneticButton from "./MagneticButton";
import founderImage from "@/assets/founder-portrait.jpg";

const credentials = [
  { value: "WPIC", label: "Certified" },
  { value: "7+", label: "Years" },
  { value: "80+", label: "Vendor Partners" },
];

const philosophy = [
  "Your calm is my responsibility — not yours.",
  "Every detail serves the story, or it doesn't belong.",
  "The best planning is invisible on the day.",
];

const AboutFounderSection = () => {
  const founderRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress: founderScroll } = useScroll({
    target: founderRef,
    offset: ["start end", "end start"],
  });
  const founderImgY = useTransform(founderScroll, [0, 1], ["4%", "-4%"]);
  const founderImgScale = useTransform(founderScroll, [0, 0.5, 1], [1.05, 1, 0.98]);

  return (
    <section className="py-section-mobile md:py-section-tablet lg:py-section-desktop bg-card" role="region" aria-label="Meet the Founder">
      <div ref={founderRef} className="container mx-auto px-6 lg:px-8 max-w-5xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <ScrollReveal>
            <ImageReveal direction="left" delay={0.1}>
              <div className="aspect-[3/4] overflow-hidden sticky top-28 relative group">
                {/* Cinematic letterbox bars */}
                <div className="absolute top-0 left-0 right-0 z-20 h-[6%] bg-foreground/90 -translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none" />
                <div className="absolute bottom-0 left-0 right-0 z-20 h-[6%] bg-foreground/90 translate-y-full group-hover:translate-y-0 transition-transform duration-700 ease-[cubic-bezier(0.25,0.1,0.25,1)] pointer-events-none" />

                {/* Gold shimmer sweep on hover */}
                <div
                  className="absolute inset-0 z-10 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out pointer-events-none"
                  style={{ background: "linear-gradient(90deg, transparent 0%, hsl(var(--gold) / 0.08) 40%, hsl(var(--gold) / 0.12) 50%, hsl(var(--gold) / 0.08) 60%, transparent 100%)" }}
                />

                <motion.img
                  src={founderImage}
                  alt="Alexandra Rose, founder of Hickory & Rose, in an editorial portrait"
                  className="w-full h-[110%] object-cover transition-transform duration-700 group-hover:scale-[1.03]"
                  style={{ y: founderImgY, scale: founderImgScale }}
                  loading="lazy"
                />

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-foreground/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                {/* Gold corner reveals — all 4 corners */}
                <div className="absolute top-3 left-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                  <span className="absolute top-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.4), transparent)" }} />
                  <span className="absolute top-0 left-0 h-full w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.4), transparent)" }} />
                </div>
                <div className="absolute top-3 right-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                  <span className="absolute top-0 right-0 w-full h-px" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.4), transparent)" }} />
                  <span className="absolute top-0 right-0 h-full w-px" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.4), transparent)" }} />
                </div>
                <div className="absolute bottom-3 left-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                  <span className="absolute bottom-0 left-0 w-full h-px" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.4), transparent)" }} />
                  <span className="absolute bottom-0 left-0 h-full w-px" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.4), transparent)" }} />
                </div>
                <div className="absolute bottom-3 right-3 w-8 h-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" aria-hidden="true">
                  <span className="absolute bottom-0 right-0 w-full h-px" style={{ background: "linear-gradient(270deg, hsl(var(--gold) / 0.4), transparent)" }} />
                  <span className="absolute bottom-0 right-0 h-full w-px" style={{ background: "linear-gradient(0deg, hsl(var(--gold) / 0.4), transparent)" }} />
                </div>

                {/* Frame index mark */}
                <div className="absolute top-4 right-4 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                  <span className="font-sans-wedding text-[0.5rem] tracking-[0.15em] uppercase text-white/60">FR01</span>
                </div>

                {/* Caption reveal */}
                <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-3 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 z-10 pointer-events-none">
                  <span className="block w-6 h-px mb-2" style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.5), transparent)" }} />
                  <span className="font-sans-wedding text-[0.55rem] tracking-[0.15em] uppercase text-white/70">Alexandra Rose, Founder</span>
                </div>
              </div>
            </ImageReveal>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <div>
              <motion.span
                className="font-serif-wedding text-5xl font-light block mb-3"
                style={{ color: "hsl(var(--gold) / 0.12)" }}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, ease: [0.25, 0.1, 0.25, 1] }}
              >01</motion.span>
              <p className="font-sans-wedding text-label uppercase text-brand-text-tertiary mb-3">
                <span className="inline-flex items-center gap-3">
                  <span className="w-5 h-px bg-primary/30" />
                  The Founder
                </span>
              </p>
              <h2 className="font-serif-wedding text-display-lg text-foreground mb-4">
                Alexandra Rose
              </h2>
              <p className="font-sans-wedding text-body-sm text-brand-text-secondary mb-8 font-light italic">
                WPIC Certified Wedding Planner
              </p>

              <div className="space-y-5 font-sans-wedding text-body-sm text-muted-foreground leading-[1.85] font-light">
                <p className="drop-cap">
                  I started Hickory & Rose because too many brides told me the same thing:
                  "I was so stressed I barely remember my own wedding." That shouldn't happen to you.
                </p>
                <p>
                  After years in the events industry, I noticed something
                  troubling — too many couples were exhausted on
                  what should have been their most joyful day. I knew there had
                  to be a better way.
                </p>
                <p>
                  Hickory & Rose exists to be that better way. We bring quiet
                  confidence, meticulous planning, and genuine warmth to every
                  wedding we touch.
                </p>
              </div>

              {/* Credential row */}
              <div className="flex items-center gap-6 mt-8 mb-10">
                {credentials.map((cred, i) => (
                  <div key={cred.label} className="flex items-center gap-6">
                    {i > 0 && (
                      <span className="w-px h-8" style={{ background: "linear-gradient(180deg, transparent, hsl(var(--gold) / 0.25), transparent)" }} />
                    )}
                    <div className="text-center">
                      <span className="font-serif-wedding text-xl text-foreground block leading-tight">{cred.value}</span>
                      <span className="font-sans-wedding text-[0.55rem] tracking-[0.15em] uppercase text-brand-text-tertiary">{cred.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Pull quote */}
              <div className="pl-5 my-10 relative">
                <div className="absolute left-0 top-0 bottom-0 w-[2px]" style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.5), hsl(var(--gold) / 0.15), transparent)" }} />
                <motion.p
                  className="font-serif-wedding text-base text-foreground italic leading-relaxed"
                  initial={{ opacity: 0, x: -8 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.6, delay: 0.2, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  "Calm is not the absence of planning — it's the presence of it."
                </motion.p>
                <motion.span
                  className="block mt-3 font-script-wedding text-sm tracking-wide"
                  style={{ color: "hsl(var(--gold) / 0.65)" }}
                  initial={{ opacity: 0, y: 6 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.5, delay: 0.45, ease: [0.25, 0.1, 0.25, 1] }}
                >
                  — Alexandra Rose
                </motion.span>
              </div>

              {/* Personal Philosophy */}
              <div className="mb-10">
                <p className="font-sans-wedding text-[0.55rem] tracking-[0.2em] uppercase text-brand-text-tertiary mb-4">
                  Personal Philosophy
                </p>
                <ul className="space-y-3">
                  {philosophy.map((item, i) => (
                    <motion.li
                      key={i}
                      className="flex items-start gap-3 font-sans-wedding text-body-sm text-muted-foreground font-light leading-relaxed"
                      initial={{ opacity: 0, x: -8 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.1 * i }}
                    >
                      <span
                        className="w-1.5 h-1.5 rotate-45 shrink-0 mt-2"
                        style={{ background: "linear-gradient(135deg, hsl(var(--gold) / 0.4), hsl(var(--gold) / 0.1))" }}
                      />
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              <MagneticButton to="/inquire" variant="outline">
                Work With Us
              </MagneticButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default AboutFounderSection;
