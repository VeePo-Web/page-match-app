import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import { Section } from "@/components/Section";

const testimonials = [
  { quote: "He played the song I walked down the aisle to — and I forgot there were a hundred people watching.", names: "Sarah & James", venue: "Azuridge Estate Hotel, Priddis" },
  { quote: "Our guests still talk about the music. Not the food, not the flowers — the music.", names: "Emily & David", venue: "Fairmont Banff Springs" },
  { quote: "He asked what song was playing when we knew. No one had ever asked us that before.", names: "Rachel & Connor", venue: "Silvertip Resort, Canmore" },
];

export function WeddingsTestimonials() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <Section dark id="testimonials" className="!py-0">
      <div
        ref={sectionRef as React.RefObject<HTMLDivElement>}
        className="py-fitz-9 md:py-fitz-10"
        aria-label="Testimonials from couples"
      >
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <p className={cn("overline mb-4 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}>
              Kind Words
            </p>
            <h2 className={cn("font-display font-light leading-tight text-center text-foreground transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ fontSize: "clamp(28px, 4vw, 38px)", transitionDelay: isVisible ? "200ms" : "0ms" }}>
              The music{" "}
              <span className="relative inline-block italic">
                stayed
                <span
                  className={cn("absolute left-0 right-0 -bottom-1 h-[1px] origin-left transition-transform duration-700", isVisible ? "scale-x-100" : "scale-x-0")}
                  style={{ background: "hsl(var(--gold) / 0.5)", transitionDelay: isVisible ? "700ms" : "0ms", transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)" }}
                  aria-hidden="true"
                />
              </span>{" "}
              with them
            </h2>
          </div>

          {/* Testimonials */}
          <div className="space-y-14">
            {testimonials.map((t, i) => (
              <div key={i} className={cn("relative text-center transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? `${400 + i * 120}ms` : "0ms" }}>
                <span className="font-display text-4xl leading-none block mb-4" style={{ color: "hsl(var(--gold) / 0.3)" }} aria-hidden="true">"</span>
                <blockquote className="font-display font-light italic leading-relaxed mb-6 text-foreground text-xl md:text-2xl max-w-[22ch] mx-auto" style={{ textWrap: "balance" as any }}>
                  {t.quote}
                </blockquote>
                <div className="text-center">
                  <p className="font-display italic text-muted-foreground" style={{ fontSize: "15px", letterSpacing: "0.04em" }}>{t.names}</p>
                  <BreathingDiamond className="my-2" />
                  <p className="font-sans text-muted-foreground" style={{ fontSize: "11px", letterSpacing: "0.12em", textTransform: "uppercase" }}>{t.venue}</p>
                </div>
                {i < testimonials.length - 1 && (
                  <div className={cn("mt-14 h-px w-12 mx-auto transition-all duration-700", isVisible ? "opacity-30 scale-x-100" : "opacity-0 scale-x-0")} style={{ background: "hsl(var(--gold))", transitionDelay: isVisible ? `${600 + i * 120}ms` : "0ms" }} aria-hidden="true" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
