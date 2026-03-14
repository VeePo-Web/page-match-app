import { useEffect, useRef, useCallback } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import heroCrossing from "@/assets/hero-crossing.jpg";

const QUOTE_WORDS = ["Let", "your", "ceremony", "sound", "like", "what", "your", "hearts", "feel", "like."];

export function WeddingsCrossing() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });
  const sectionElRef = useRef<HTMLElement | null>(null);

  const setCombinedRef = useCallback(
    (node: HTMLElement | null) => {
      sectionElRef.current = node;
      (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
    },
    [sectionRef]
  );

  useEffect(() => {
    const el = sectionElRef.current;
    if (!el || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el?.style.setProperty("--crossing-warmth", "0.04");
      return;
    }
    const thresholds = [0, 0.25, 0.5, 0.75, 1.0];
    const warmthMap: Record<number, string> = { 0: "0.02", 0.25: "0.03", 0.5: "0.04", 0.75: "0.05", 1.0: "0.06" };
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        let closest = 0;
        for (const t of thresholds) if (e.intersectionRatio >= t) closest = t;
        el.style.setProperty("--crossing-warmth", warmthMap[closest]);
      }),
      { threshold: thresholds }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="crossing"
      ref={setCombinedRef}
      className="relative overflow-hidden min-h-[50vh] md:min-h-[60vh] py-fitz-9 md:py-fitz-10 px-4 md:px-6"
      data-theme="death"
      style={{ background: "radial-gradient(ellipse at center, hsl(var(--deep-graphite)) 0%, hsl(var(--rich-black)) 100%)", "--crossing-warmth": "0.02" } as React.CSSProperties}
      aria-label="Final call to action"
    >
      {/* Ken Burns background */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <img src={heroCrossing} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-[0.10] pointer-events-none" style={{ animation: "ken-burns 30s ease-in-out infinite alternate", filter: "brightness(0.75) contrast(1.08) saturate(0.9)" }} loading="lazy" decoding="async" />
      </div>

      {/* Film grain */}
      <div className="absolute inset-0 z-[1] grain opacity-[0.08] pointer-events-none" aria-hidden="true" />

      {/* Vignette */}
      <div className="absolute inset-0 z-[1] pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--rich-black) / 0.75) 100%)" }} aria-hidden="true" />

      {/* Scroll-linked warm fog */}
      <div className="absolute inset-0 z-[1] pointer-events-none transition-opacity duration-500" style={{ background: "radial-gradient(ellipse 60% 60% at 50% 60%, hsl(var(--vow-yellow) / var(--crossing-warmth)) 0%, transparent 100%)" }} aria-hidden="true" />

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="sr-only">This is the final invitation to hold your wedding date. Parker responds within 24 hours.</span>

        {/* Vertical golden thread */}
        <div className={cn("mx-auto mb-fitz-6 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ width: "1px", height: "40px" }} aria-hidden="true">
          <div className="w-full h-full" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--vow-yellow) / 0.3), transparent)", opacity: 0.25, animation: "golden-thread-breathe 4s ease-in-out infinite" }} />
        </div>

        {/* Tagline */}
        <div className={cn("mb-fitz-8 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}>
          <p className="font-display font-light text-[28px] md:text-[34px] uppercase tracking-[0.22em] text-foreground opacity-70">
            {"\u2018"}TIL DEATH{" "}
            <span className="inline-block text-[34px] md:text-[40px] text-primary" style={{ animation: isVisible ? "semicolon-heartbeat 2s ease-in-out infinite" : undefined }}>;</span>
            {" "}UNTO LIFE
          </p>
        </div>

        {/* Sacred Quote */}
        <h2 className="max-w-[720px] mx-auto mb-14 font-display font-light text-[clamp(32px,5vw,48px)] leading-[1.2] tracking-[0.02em] text-foreground" style={{ textWrap: "balance" as any }}>
          {QUOTE_WORDS.map((word, i) => {
            const isLast = i === QUOTE_WORDS.length - 1;
            const delay = 150 + i * 60;
            return (
              <span key={i}>
                <span className={cn("inline-block transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[6px]")} style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}>
                  {i === 0 && <span className="font-light text-muted-foreground text-[0.8em] align-top -mr-[0.05em]">{"\u201C"}</span>}
                  {word}
                  {isLast && <span className="font-light text-muted-foreground text-[0.8em]">{"\u201D"}</span>}
                </span>
                {!isLast && " "}
              </span>
            );
          })}
        </h2>

        {/* CTA */}
        <div className={cn("flex flex-col items-center mb-fitz-5 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}>
          <div className="relative">
            <div className="absolute -inset-x-16 -inset-y-8 rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse at center, hsl(var(--vow-yellow) / 0.05) 0%, transparent 80%)" }} aria-hidden="true" />
            <div className="absolute -inset-x-10 -inset-y-5 rounded-full pointer-events-none" style={{ background: "radial-gradient(ellipse at center, hsl(var(--vow-yellow) / 0.12) 0%, transparent 40%)" }} aria-hidden="true" />
            <Button size="lg" className="relative h-auto px-10 py-5 text-base rounded-[6px] font-sans font-medium cta-commitment cta-breathe-glow crossing-cta-hover breathe-glow" asChild>
              <Link to="/weddings/contact" className="tracking-[0.02em]">Hold my date.</Link>
            </Button>
          </div>
        </div>

        {/* Trust */}
        <p className={cn("max-w-md mx-auto mb-fitz-6 font-sans text-sm leading-normal text-center text-muted-foreground transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? "420ms" : "0ms" }}>
          Includes your bespoke ceremony arrangement, a collaborative run-of-show, and months of devoted preparation.
        </p>

        {/* Golden thread */}
        <div className={cn("h-[1px] w-12 mx-auto mb-fitz-5 transition-all duration-700", isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0")} style={{ background: "linear-gradient(90deg, transparent, hsl(var(--vow-yellow) / 0.3), transparent)", transitionDelay: isVisible ? "560ms" : "0ms" }} aria-hidden="true" />

        {/* Always */}
        <p className={cn("font-display font-light text-lg italic tracking-[0.02em] text-center text-muted-foreground transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}>
          Response within 24 hours.{" "}
          <span className="relative inline-block font-normal not-italic tracking-[0.03em] text-primary">
            Always.
            <span className={cn("absolute -bottom-[3px] left-0 w-full h-[1px] origin-left transition-transform duration-[450ms]", isVisible ? "scale-x-100" : "scale-x-0")} style={{ background: "hsl(var(--vow-yellow) / 0.5)", transitionDelay: isVisible ? "1400ms" : "0ms", transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)" }} aria-hidden="true" />
          </span>
        </p>

        {/* Closing golden dot */}
        <div className={cn("mt-fitz-7 flex justify-center transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[6px]")} style={{ transitionDelay: isVisible ? "900ms" : "0ms" }} aria-hidden="true">
          <div className="crossing-golden-dot" style={{ width: "4px", height: "4px", borderRadius: "50%", background: "hsl(var(--vow-yellow) / 0.3)", boxShadow: "0 0 6px hsl(var(--vow-yellow) / 0.15), 0 0 16px hsl(var(--vow-yellow) / 0.08)" }} />
        </div>
      </div>
    </section>
  );
}
