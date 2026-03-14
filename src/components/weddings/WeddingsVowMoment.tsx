import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function WeddingsVowMoment() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <section
      id="vow-moment"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden"
      data-theme="death"
      style={{ background: "radial-gradient(ellipse at center, hsl(var(--deep-graphite)) 0%, hsl(var(--rich-black)) 100%)" }}
      aria-label="The sacred vow"
    >
      {/* Warm fog */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at 50% 40%, hsl(var(--vow-yellow) / 0.025) 0%, transparent 60%)" }} aria-hidden="true" />

      {/* Breathing glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(circle at center, hsl(var(--vow-yellow) / 0.05) 0%, transparent 50%)", animation: "vow-glow-breathe 6s ease-in-out infinite alternate" }} aria-hidden="true" />

      {/* Film grain */}
      <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.06 }} aria-hidden="true" />

      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse at center, transparent 25%, hsl(var(--rich-black) / 0.8) 100%)" }} aria-hidden="true" />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <blockquote className="text-[clamp(48px,6vw,72px)] font-display font-light italic leading-[1.2] text-foreground">
          <span className={cn("block transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: isVisible ? "0ms" : "0ms" }}>
            Every vow spoken
          </span>
          <span className={cn("relative inline-block transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}>
            <span className="relative z-10">becomes sacred</span>
            <span
              className={cn("absolute -bottom-2 left-0 right-0 h-[2px] rounded-full origin-center transition-transform", isVisible ? "scale-x-100" : "scale-x-0")}
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--vow-yellow) / 0.6), transparent)",
                boxShadow: "0 0 12px hsl(var(--vow-yellow) / 0.3)",
                transitionDuration: "450ms",
                transitionDelay: isVisible ? "800ms" : "0ms",
                transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
              }}
              aria-hidden="true"
            />
          </span>
          <span className={cn("block transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}>
            the moment it's heard.
          </span>
        </blockquote>
      </div>

      {/* Section fades */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[120px] z-[3]" style={{ background: "linear-gradient(to top, transparent, hsl(var(--rich-black)))" }} aria-hidden="true" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[120px] z-[3]" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }} aria-hidden="true" />
    </section>
  );
}
