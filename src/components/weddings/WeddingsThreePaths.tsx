import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BreathingDiamond } from "@/components/BreathingDiamond";

interface KeyTier {
  name: string;
  price: string;
  description: string;
  sentence: string;
  ctaText: string;
  isChosen?: boolean;
}

const tiers: KeyTier[] = [
  { name: "The Vow", price: "$650", description: "Ceremony piano — processional through recessional. The essential musical witness.", sentence: "Your vows, carried by piano. Nothing more, nothing less.", ctaText: "Hold my date" },
  { name: "The Hour", price: "$750", description: "Full ceremony + cocktail hour. Extended musical presence from preparation to celebration.", sentence: "The room is already sacred before the first word is spoken.", ctaText: "Hold my date", isChosen: true },
  { name: "The Story", price: "$1,200", description: "Complete wedding-day coverage. Rehearsal through last dance.", sentence: "From the first guest to the last glass raised — I am there.", ctaText: "Hold my date" },
];

export function WeddingsThreePaths() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="three-paths"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-fitz-9 md:py-fitz-10 px-4"
      style={{ background: "hsl(var(--cream))" }}
      aria-label="Pricing options"
    >
      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <p className={cn("overline mb-4 text-center transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}>
            Three Keys
          </p>
          <h2 className={cn("text-[clamp(28px,4vw,38px)] font-display font-light leading-tight text-foreground text-center transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? "120ms" : "0ms", maxWidth: "18ch", margin: "0 auto" }}>
            Choose the presence that fits your day.
          </h2>
          <div className={cn("mt-8 transition-all duration-700", isVisible ? "opacity-100" : "opacity-0")} style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}>
            <BreathingDiamond />
          </div>
        </div>

        {/* Tiers */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6 md:gap-8 mb-12">
          {tiers.map((tier, i) => (
            <div
              key={tier.name}
              className={cn(
                "relative p-fitz-6 md:p-fitz-7 rounded-md border transition-all duration-700 flex flex-col",
                tier.isChosen
                  ? "bg-sage-deep text-warm-white border-gold/20 hover:shadow-[0_8px_32px_hsl(var(--gold)/0.12)]"
                  : "bg-card border-lines/40 hover:-translate-y-1 hover:shadow-editorial-hover",
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              )}
              style={{ transitionDelay: isVisible ? `${400 + i * 120}ms` : "0ms" }}
            >
              {tier.isChosen && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 bg-gold text-sage-deep text-xs uppercase tracking-[0.16em] rounded-sm font-sans">
                  Most Chosen
                </div>
              )}
              <h3 className={cn("font-display text-xl font-light", tier.isChosen ? "text-warm-white" : "text-foreground")}>{tier.name}</h3>
              <div className="h-[1px] w-10 mt-3 mb-5" style={{ background: `hsl(var(--gold) / ${tier.isChosen ? 0.4 : 0.25})` }} aria-hidden="true" />
              <span className={cn("font-display text-[clamp(32px,4vw,44px)] font-light mb-4", tier.isChosen ? "text-gold-light" : "text-foreground")}>{tier.price}</span>
              <p className={cn("text-sm leading-relaxed mb-4 font-light", tier.isChosen ? "text-warm-white/70" : "text-muted-foreground")}>{tier.description}</p>
              <p className={cn("font-display text-sm font-light italic mb-6 pb-5 border-b", tier.isChosen ? "text-warm-white/50 border-warm-white/10" : "text-muted-foreground/60 border-lines/30")}>{tier.sentence}</p>
              <Button
                className={cn("w-full mt-auto", tier.isChosen ? "bg-gold text-sage-deep hover:bg-gold-light" : "bg-transparent border border-sage/30 text-foreground hover:bg-sage/5")}
                asChild
              >
                <Link to="/weddings/contact" className="uppercase tracking-[0.1em] text-sm">{tier.ctaText}</Link>
              </Button>
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <p className={cn("text-center text-sm text-muted-foreground max-w-lg mx-auto transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? "880ms" : "0ms" }}>
          You can move between these at any time — no penalty until two weeks before your ceremony.
        </p>

        <div className={cn("text-center mt-fitz-7 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? "960ms" : "0ms" }}>
          <Link to="/weddings/pricing" className="inline-flex items-center text-sm tracking-[0.16em] uppercase text-sage story-link">View full details</Link>
        </div>
      </div>
    </section>
  );
}
