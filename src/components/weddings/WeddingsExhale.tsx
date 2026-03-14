import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useEffect, useId, useState } from "react";

export function WeddingsExhale() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.3 });
  const [purposeVisible, setPurposeVisible] = useState(false);
  const uid = useId();
  const gradientId = `threadGradient${uid}`;
  const glowId = `threadGlow${uid}`;

  useEffect(() => {
    if (!isVisible) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setPurposeVisible(true);
      return;
    }
    const timer = setTimeout(() => setPurposeVisible(true), 1600);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <section
      id="exhale"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative min-h-[70vh] flex items-center justify-center py-fitz-9 md:py-fitz-10 overflow-hidden"
      style={{ background: "hsl(var(--background))" }}
      aria-label="My promise to you"
    >
      {/* Subtle warm depth */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "linear-gradient(180deg, hsl(var(--background)) 0%, hsl(var(--card)) 50%, hsl(var(--background)) 100%)" }} />

      {/* Warm fog */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(var(--vow-yellow) / 0.04) 0%, transparent 70%)", zIndex: 1 }} aria-hidden="true" />

      {/* Inner glow */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity exhale-glow-breathe-layer ${isVisible ? "opacity-100" : "opacity-0"}`}
        style={{ background: "radial-gradient(ellipse 40% 35% at 50% 55%, hsl(var(--vow-yellow) / 0.06) 0%, transparent 70%)", transitionDuration: "800ms" }}
      />

      {/* Outer bloom */}
      <div
        className={`absolute inset-0 pointer-events-none transition-opacity ${purposeVisible ? "opacity-100" : "opacity-0"}`}
        style={{ background: "radial-gradient(ellipse 70% 50% at 50% 55%, hsl(var(--vow-yellow) / 0.08) 0%, transparent 70%)", transitionDuration: "1400ms", transitionDelay: purposeVisible ? "400ms" : "0ms" }}
      />

      {/* Film grain */}
      <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.03 }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-[680px] mx-auto px-6 text-center">
        {/* Golden Dot Anchor */}
        <div
          className={`exhale-anchor mx-auto mb-10 md:mb-12 transition-all ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
          style={{ transitionDuration: "700ms", transitionDelay: isVisible ? "200ms" : "0ms" }}
          aria-hidden="true"
        />

        {/* Recognition */}
        <p
          className={`font-display text-foreground transition-all ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDuration: "800ms", transitionDelay: isVisible ? "500ms" : "0ms", fontSize: "clamp(24px, 4.5vw, 36px)", lineHeight: 1.25, maxWidth: "18ch", margin: "0 auto" }}
        >
          You're about to make a promise that will echo beyond your lifetime.
        </p>

        {/* Understanding */}
        <p
          className={`font-sans leading-relaxed text-muted-foreground mt-6 md:mt-8 transition-all ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDuration: "700ms", transitionDelay: isVisible ? "1000ms" : "0ms", fontSize: "clamp(16px, 2.5vw, 18px)" }}
        >
          I understand the weight of that moment.
        </p>

        {/* Golden Thread SVG */}
        <div className="my-12 md:my-16" style={{ width: "clamp(120px, 25vw, 200px)", margin: "48px auto" }} aria-hidden="true">
          <svg viewBox="0 0 200 6" className={`exhale-thread-svg w-full h-[6px] overflow-visible ${purposeVisible ? "exhale-thread-svg--visible" : ""}`} preserveAspectRatio="none">
            <defs>
              <linearGradient id={gradientId} x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--vow-yellow))" stopOpacity="0" />
                <stop offset="15%" stopColor="hsl(var(--vow-yellow))" stopOpacity="0.6" />
                <stop offset="50%" stopColor="hsl(var(--vow-yellow))" stopOpacity="0.8" />
                <stop offset="85%" stopColor="hsl(var(--vow-yellow))" stopOpacity="0.6" />
                <stop offset="100%" stopColor="hsl(var(--vow-yellow))" stopOpacity="0" />
              </linearGradient>
              <filter id={glowId} x="-20%" y="-100%" width="140%" height="300%">
                <feGaussianBlur in="SourceGraphic" stdDeviation="1.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path d="M 0,3 Q 50,1 100,3 Q 150,5 200,3" fill="none" stroke={`url(#${gradientId})`} strokeWidth="1.8" strokeLinecap="round" className="exhale-thread-path" filter={`url(#${glowId})`} />
          </svg>
        </div>

        {/* Declaration */}
        <p
          className={`font-sans uppercase tracking-[0.22em] text-muted-foreground transition-all ${purposeVisible ? "opacity-70 translate-y-0" : "opacity-0 translate-y-3"}`}
          style={{ transitionDuration: "700ms", transitionDelay: purposeVisible ? "1000ms" : "0ms", fontSize: "clamp(11px, 1.5vw, 13px)" }}
        >
          And so I have one goal:
        </p>

        <p
          className={`font-display text-foreground mt-6 md:mt-8 transition-all ${purposeVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          style={{ transitionDuration: "900ms", transitionDelay: purposeVisible ? "1400ms" : "0ms", fontSize: "clamp(20px, 3.8vw, 28px)", lineHeight: 1.6, maxWidth: "24ch", margin: "0 auto", marginTop: "clamp(24px, 4vw, 32px)" }}
        >
          To let my music{" "}
          <span className={`exhale-emphasis ${purposeVisible ? "exhale-emphasis--visible" : ""}`}>sound</span>{" "}
          like
          <br />
          what your hearts feel like.
        </p>

        <span className="sr-only">
          This section acknowledges the sacred significance of your upcoming wedding ceremony.
          My singular purpose is to let my music sound like what your hearts feel like.
        </span>
      </div>

      {/* Section fades */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[120px] z-[3]" style={{ background: "linear-gradient(to top, transparent, hsl(var(--background)))" }} aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[120px] z-[3]" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }} aria-hidden="true" />
    </section>
  );
}
