import { useState, useCallback, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ScrollReveal from "./ScrollReveal";

const testimonials = [
  {
    quote: "From our first call, we knew we were in the right hands. Our wedding felt exactly like us — intimate, elegant, and completely stress-free.",
    couple: "Olivia & Noah",
    venue: "Jasper Park Lodge",
    season: "Summer 2024",
    style: "Rustic-Elegant",
  },
  {
    quote: "The calm energy Hickory & Rose brought to our day was transformative. We actually got to be present for every moment.",
    couple: "Sarah & Michael",
    venue: "Fairmont Hotel Macdonald",
    season: "Winter 2024",
    style: "Classic-Romantic",
  },
  {
    quote: "Hiring Hickory & Rose was the best decision we made. The attention to detail was beyond anything we imagined.",
    couple: "Emma & James",
    venue: "The Glass House",
    season: "Autumn 2024",
    style: "Modern-Garden",
  },
];

const AboutTestimonials = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const advanceTestimonial = useCallback(() => {
    setActiveTestimonial((i) => (i + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(advanceTestimonial, 6000);
    return () => clearInterval(timer);
  }, [advanceTestimonial, isPaused]);

  return (
    <section className="py-section-mobile md:py-section-tablet bg-card relative overflow-hidden" style={{ contain: "layout style" }} role="region" aria-label="Client Testimonials">
      {/* Parallax watermark */}
      <motion.div
        className="absolute -right-8 top-1/2 -translate-y-1/2 pointer-events-none select-none"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.02 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5 }}
      >
        <span className="font-serif-wedding text-[8rem] md:text-[14rem] text-foreground leading-none tracking-tight italic whitespace-nowrap">
          Voices
        </span>
      </motion.div>

      <div className="container mx-auto px-6 lg:px-8 max-w-5xl relative">
        <ScrollReveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            {/* Left: Label */}
            <div className="lg:col-span-3">
              <span className="font-serif-wedding text-5xl font-light text-primary/10 block mb-3">03</span>
              <p className="font-overline text-brand-text-secondary mb-3">Kind Words</p>
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-10 h-px bg-primary/25 origin-left mb-4"
              />
              <p className="font-sans-wedding text-body-sm text-brand-text-secondary font-light leading-relaxed">
                Real words from real couples who trusted us with their most important day.
              </p>
            </div>

            {/* Right: Testimonial crossfade */}
            <div className="lg:col-span-9" aria-live="polite" aria-atomic="true" onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
              <div className="min-h-[220px] md:min-h-[200px] relative">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={activeTestimonial}
                    initial={{ opacity: 0, y: 16 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -16 }}
                    transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                  >
                    {/* Gold-gradient quotation mark */}
                    <motion.span
                      className="font-serif-wedding text-6xl leading-none block -mb-4"
                      style={{
                        background: "linear-gradient(135deg, hsl(var(--gold) / 0.2), hsl(var(--primary) / 0.06))",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                      animate={{ opacity: [0.4, 0.8, 0.4] }}
                      transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                      aria-hidden="true"
                    >
                      "
                    </motion.span>
                    <blockquote className="font-serif-wedding text-pull-quote italic text-foreground leading-relaxed mb-6">
                      {testimonials[activeTestimonial].quote}
                    </blockquote>
                    <div className="flex items-center gap-4">
                      <motion.div
                        initial={{ scaleY: 0 }}
                        animate={{ scaleY: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="w-px h-10 origin-top"
                        style={{ background: "linear-gradient(180deg, hsl(var(--gold) / 0.4), hsl(var(--primary) / 0.1))" }}
                      />
                      <div>
                        <p className="font-sans-wedding text-body-sm font-medium text-foreground">
                          {testimonials[activeTestimonial].couple}
                        </p>
                        <div className="flex items-center gap-2 mt-1 flex-wrap">
                          <p className="font-sans-wedding text-[0.55rem] tracking-[0.12em] uppercase text-brand-text-tertiary">
                            {testimonials[activeTestimonial].venue}
                          </p>
                          <span className="text-brand-text-decorative">·</span>
                          <p className="font-serif-wedding text-xs italic text-brand-text-tertiary">
                            {testimonials[activeTestimonial].season}
                          </p>
                          <span className="text-brand-text-decorative">·</span>
                          <p className="font-sans-wedding text-[0.55rem] tracking-[0.08em] uppercase text-brand-text-tertiary">
                            {testimonials[activeTestimonial].style}
                          </p>
                        </div>
                        <a
                          href="/portfolio"
                          className="font-serif-wedding text-xs italic text-brand-text-tertiary hover:text-gold transition-colors duration-300 mt-2 inline-block group"
                        >
                          View their gallery
                          <span className="inline-block ml-1 transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </a>
                      </div>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Progress bars with gold */}
              <div className="flex items-center gap-4 mt-10" role="tablist" aria-label="Testimonial navigation">
                <div className="flex gap-2 flex-1">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className="h-[2px] flex-1 relative overflow-hidden transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 focus-visible:ring-offset-2"
                      style={{ background: index < activeTestimonial ? "hsl(var(--gold) / 0.2)" : "hsl(var(--primary) / 0.1)" }}
                      aria-label={`View testimonial ${index + 1} from ${testimonials[index].couple}`}
                      role="tab"
                      aria-selected={index === activeTestimonial}
                    >
                      {index === activeTestimonial && (
                        <motion.div
                          className="absolute inset-0 origin-left"
                          style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.6), hsl(var(--gold) / 0.35))" }}
                          initial={{ scaleX: 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: 6, ease: "linear" }}
                          key={`progress-${activeTestimonial}`}
                        />
                      )}
                      {index < activeTestimonial && (
                        <div className="absolute inset-0" style={{ background: "hsl(var(--gold) / 0.35)" }} />
                      )}
                    </button>
                  ))}
                </div>
                <span className="font-sans-wedding text-[0.6rem] text-brand-text-tertiary tabular-nums tracking-[0.15em]">
                  {String(activeTestimonial + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
                </span>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default AboutTestimonials;
