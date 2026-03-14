import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GoldFrame } from "@/components/GoldFrame";

export function WeddingsVowMoment() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.3 });

  return (
    <section
      id="vow-moment"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative min-h-[80vh] flex items-center justify-center px-4 overflow-hidden"
      style={{ background: "hsl(var(--cream))" }}
      aria-label="The sacred vow"
    >
      {/* Radial warmth glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "radial-gradient(ellipse at center, hsl(var(--gold) / 0.03), transparent 70%)" }}
        aria-hidden="true"
      />

      {/* Gold corner frame */}
      <GoldFrame animate={false} />

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <blockquote className="text-[clamp(36px,5vw,58px)] font-display font-light italic leading-[1.2] text-foreground" style={{ textWrap: "balance" }}>
          <span className={cn("block transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            Every vow spoken
          </span>
          <span className={cn("relative inline-block transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}>
            <span className="relative z-10">becomes sacred</span>
            <span
              className={cn("absolute -bottom-2 left-0 right-0 h-[1px] rounded-full origin-center transition-transform", isVisible ? "scale-x-100" : "scale-x-0")}
              style={{
                background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.6), transparent)",
                transitionDuration: "450ms",
                transitionDelay: isVisible ? "800ms" : "0ms",
                transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)",
              }}
              aria-hidden="true"
            />
          </span>
          <span className={cn("block transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}>
            the moment it's heard.
          </span>
        </blockquote>
      </div>
    </section>
  );
}
