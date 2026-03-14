import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import { GoldFrame } from "@/components/GoldFrame";
import heroCrossing from "@/assets/hero-crossing.jpg";

const QUOTE_WORDS = ["Let", "your", "ceremony", "sound", "like", "what", "your", "hearts", "feel", "like."];

export function WeddingsCrossing() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      id="crossing"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative overflow-hidden min-h-[50vh] md:min-h-[60vh] py-fitz-9 md:py-fitz-10 px-4 md:px-6"
      style={{ background: "hsl(var(--cream))" }}
      aria-label="Final call to action"
    >
      {/* Background image */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden="true">
        <img src={heroCrossing} alt="" aria-hidden="true" width={1920} height={1080} className="absolute inset-0 w-full h-full object-cover opacity-[0.06] pointer-events-none" style={{ animation: "ken-burns 30s ease-in-out infinite alternate", filter: "brightness(0.8) contrast(1.05) saturate(0.8)" }} loading="lazy" decoding="async" />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl text-center">
        <span className="sr-only">This is the final invitation to hold your wedding date.</span>

        {/* Breathing diamond */}
        <div className={cn("mb-fitz-6 transition-all duration-700", isVisible ? "opacity-100" : "opacity-0")} style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}>
          <BreathingDiamond />
        </div>

        {/* Sacred Quote */}
        <h2 className="max-w-[720px] mx-auto mb-12 font-display font-light text-[clamp(28px,4.5vw,44px)] leading-[1.2] text-foreground" style={{ textWrap: "balance" as any }}>
          {QUOTE_WORDS.map((word, i) => {
            const isLast = i === QUOTE_WORDS.length - 1;
            const delay = 200 + i * 50;
            return (
              <span key={i}>
                <span className={cn("inline-block transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[6px]")} style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }}>
                  {i === 0 && <span className="text-muted-foreground text-[0.8em]">"</span>}
                  {word}
                  {isLast && <span className="text-muted-foreground text-[0.8em]">"</span>}
                </span>
                {!isLast && " "}
              </span>
            );
          })}
        </h2>

        {/* CTA */}
        <div className={cn("flex flex-col items-center mb-fitz-5 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}>
          <Button size="lg" className="relative h-auto px-10 py-4 text-base rounded-sm bg-primary text-primary-foreground shadow-cta hover:shadow-cta-hover transition-all duration-[250ms] cta-glow" asChild>
            <Link to="/weddings/contact" className="uppercase tracking-[0.1em] text-sm">Hold my date.</Link>
          </Button>
        </div>

        {/* Trust */}
        <p className={cn("max-w-md mx-auto mb-fitz-6 font-sans text-sm leading-normal text-center text-muted-foreground font-light transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? "520ms" : "0ms" }}>
          Includes your bespoke ceremony arrangement, a collaborative run-of-show, and months of devoted preparation.
        </p>

        {/* Editorial rule */}
        <div className={cn("transition-all duration-700", isVisible ? "opacity-100" : "opacity-0")} style={{ transitionDelay: isVisible ? "640ms" : "0ms" }}>
          <div className="editorial-rule" />
        </div>

        {/* Always */}
        <p className={cn("font-display font-light text-lg italic text-center text-muted-foreground mt-fitz-5 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? "760ms" : "0ms" }}>
          Response within 24 hours.{" "}
          <span className="relative inline-block not-italic text-sage font-normal">
            Always.
            <span className={cn("absolute -bottom-[2px] left-0 w-full h-[1px] origin-left transition-transform duration-[450ms]", isVisible ? "scale-x-100" : "scale-x-0")} style={{ background: "hsl(var(--gold) / 0.5)", transitionDelay: isVisible ? "1400ms" : "0ms", transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)" }} aria-hidden="true" />
          </span>
        </p>
      </div>
    </section>
  );
}
