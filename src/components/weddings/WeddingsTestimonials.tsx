import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const testimonials = [
  { quote: "He played the song I walked down the aisle to — and I forgot there were a hundred people watching.", names: "Sarah & James", venue: "Azuridge Estate Hotel, Priddis" },
  { quote: "Our guests still talk about the music. Not the food, not the flowers — the music.", names: "Emily & David", venue: "Fairmont Banff Springs" },
  { quote: "He asked what song was playing when we knew. No one had ever asked us that before.", names: "Rachel & Connor", venue: "Silvertip Resort, Canmore" },
];

export function WeddingsTestimonials() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section
      id="testimonials"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-fitz-9 md:py-fitz-10 overflow-hidden"
      style={{ background: "hsl(var(--card))" }}
      aria-label="Testimonials from couples"
    >
      {/* Vignette */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at center, transparent 40%, hsl(var(--card) / 0.8) 100%)" }} aria-hidden="true" />

      {/* Film grain */}
      <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.03 }} aria-hidden="true" />

      {/* Section fades */}
      <div className="pointer-events-none absolute top-0 left-0 right-0 h-[120px] z-[3]" style={{ background: "linear-gradient(to top, transparent, hsl(var(--background)))" }} aria-hidden="true" />

      <div className="container mx-auto px-fitz-4 relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-20">
            <p className={cn("font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}>
              THE COVENANT KEPT
            </p>
            <div className={cn("h-px w-8 mx-auto mb-6 transition-all duration-700", isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0")} style={{ background: "hsl(var(--vow-yellow))", transitionDelay: isVisible ? "100ms" : "0ms" }} aria-hidden="true" />
            <h2 className={cn("font-display font-light leading-tight text-center transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ fontSize: "clamp(30px, 4.5vw, 40px)", letterSpacing: "0.02em", transitionDelay: isVisible ? "200ms" : "0ms" }}>
              The music{" "}
              <span className="relative inline-block">
                stayed
                <span
                  className={cn("absolute left-0 right-0 -bottom-1 h-[3px] origin-left transition-transform duration-700", isVisible ? "scale-x-100" : "scale-x-0")}
                  style={{ background: "linear-gradient(90deg, hsl(var(--vow-yellow) / 0.65), hsl(var(--vow-yellow) / 0.2))", boxShadow: isVisible ? "0 0 10px hsl(var(--vow-yellow) / 0.3)" : "none", borderRadius: "1px", transitionDelay: isVisible ? "700ms" : "0ms", transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)" }}
                  aria-hidden="true"
                />
              </span>{" "}
              with them
            </h2>
          </div>

          {/* Testimonials */}
          <div className="space-y-16">
            {testimonials.map((t, i) => (
              <div key={i} className={cn("relative text-center transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? `${400 + i * 120}ms` : "0ms" }}>
                <blockquote className="font-display font-light italic leading-relaxed mb-6 text-foreground text-2xl max-w-[22ch] mx-auto" style={{ textWrap: "balance" as any }}>
                  &ldquo;{t.quote}&rdquo;
                </blockquote>
                <div className="text-center">
                  <p className="font-display font-medium italic text-muted-foreground" style={{ fontSize: "15px", letterSpacing: "0.04em" }}>{t.names}</p>
                  <span className="inline-block mx-auto my-1" style={{ width: "3px", height: "3px", transform: "rotate(45deg)", background: "hsl(var(--vow-yellow) / 0.2)" }} aria-hidden="true" />
                  <p className="font-display text-muted-foreground" style={{ fontSize: "12px", letterSpacing: "0.06em", textTransform: "uppercase" }}>{t.venue}</p>
                </div>
                {i < testimonials.length - 1 && (
                  <div className={cn("mt-16 h-px w-12 mx-auto transition-all duration-700", isVisible ? "opacity-40 scale-x-100" : "opacity-0 scale-x-0")} style={{ background: "hsl(var(--vow-yellow))", transitionDelay: isVisible ? `${600 + i * 120}ms` : "0ms" }} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>

          {/* Semicolon */}
          <div className={cn("text-center mt-16 transition-all duration-700", isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90")} style={{ transitionDelay: isVisible ? "1100ms" : "0ms" }}>
            <span className="font-display inline-block select-none" style={{ fontSize: "28px", color: "hsl(var(--vow-yellow) / 0.35)", lineHeight: 1, animation: "semicolon-heartbeat 2s ease-in-out infinite" }} aria-hidden="true">;</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[120px] z-[3]" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }} aria-hidden="true" />
    </section>
  );
}
