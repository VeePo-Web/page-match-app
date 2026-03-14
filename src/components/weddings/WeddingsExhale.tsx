import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useState } from "react";
import { BreathingDiamond } from "@/components/BreathingDiamond";

export function WeddingsExhale() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [purposeVisible, setPurposeVisible] = useState(false);

  useEffect(() => {
    if (!isVisible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPurposeVisible(true);
      return;
    }
    const timer = setTimeout(() => setPurposeVisible(true), 1400);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <section
      id="exhale"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative min-h-[60vh] flex items-center justify-center py-fitz-9 md:py-fitz-10 overflow-hidden"
      style={{ background: "hsl(var(--cream))" }}
      aria-label="My promise to you"
    >
      {/* Content */}
      <div className="relative z-10 max-w-[640px] mx-auto px-6 text-center">
        {/* Breathing Diamond */}
        <div
          className={`mb-10 md:mb-12 transition-all ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          style={{ transitionDuration: "700ms", transitionDelay: isVisible ? "200ms" : "0ms" }}
        >
          <BreathingDiamond />
        </div>

        {/* Recognition */}
        <p
          className={`font-display text-foreground transition-all ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDuration: "800ms", transitionDelay: isVisible ? "400ms" : "0ms", fontSize: "clamp(24px, 4.5vw, 36px)", lineHeight: 1.25, maxWidth: "18ch", margin: "0 auto" }}
        >
          You're about to make a promise that will echo beyond your lifetime.
        </p>

        {/* Understanding */}
        <p
          className={`font-sans leading-relaxed text-muted-foreground mt-6 md:mt-8 transition-all font-light ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDuration: "700ms", transitionDelay: isVisible ? "900ms" : "0ms", fontSize: "clamp(16px, 2.5vw, 18px)" }}
        >
          I understand the weight of that moment.
        </p>

        {/* Gold editorial rule */}
        <div className="my-12 md:my-16 flex justify-center">
          <div
            className={`editorial-rule transition-all duration-700 ${purposeVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}`}
            style={{ transitionDelay: purposeVisible ? "200ms" : "0ms" }}
          />
        </div>

        {/* Intro */}
        <p
          className={`font-sans uppercase tracking-[0.2em] text-muted-foreground transition-all ${purposeVisible ? "opacity-60 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDuration: "700ms", transitionDelay: purposeVisible ? "600ms" : "0ms", fontSize: "clamp(11px, 1.5vw, 13px)" }}
        >
          And so I have one goal:
        </p>

        {/* Declaration */}
        <p
          className={`font-display text-foreground mt-6 md:mt-8 transition-all drop-cap ${purposeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDuration: "900ms", transitionDelay: purposeVisible ? "1000ms" : "0ms", fontSize: "clamp(20px, 3.8vw, 28px)", lineHeight: 1.6, maxWidth: "24ch", margin: "0 auto", marginTop: "clamp(24px, 4vw, 32px)" }}
        >
          To let my music <span className="italic text-sage">sound</span> like
          <br />
          what your hearts feel like.
        </p>

        <span className="sr-only">
          My singular purpose is to let my music sound like what your hearts feel like.
        </span>
      </div>
    </section>
  );
}
