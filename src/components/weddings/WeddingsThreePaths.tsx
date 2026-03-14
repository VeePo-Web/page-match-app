import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface KeyTier {
  name: string;
  price: string;
  description: string;
  sentence: string;
  ctaText: string;
  isChosen?: boolean;
}

const tiers: KeyTier[] = [
  { name: "The Prelude", price: "$1,200", description: "Ceremony piano — processional through recessional. The essential musical witness.", sentence: "Your vows, carried by piano. Nothing more, nothing less.", ctaText: "Hold my date" },
  { name: "The Covenant", price: "$2,400", description: "Full ceremony + cocktail hour. Extended musical presence from preparation to celebration.", sentence: "The room is already sacred before the first word is spoken.", ctaText: "Hold my date", isChosen: true },
  { name: "The Chronicle", price: "$4,200", description: "Complete wedding-day coverage. Rehearsal through last dance.", sentence: "From the first guest to the last glass raised — I am there.", ctaText: "Hold my date" },
];

const whiteKeyDelays = [530, 450, 610];

function GoldenDiamond() {
  return <span className="inline-block" style={{ width: 6, height: 6, transform: "rotate(45deg)", background: "hsl(var(--vow-yellow) / 0.55)", borderRadius: 1 }} aria-hidden="true" />;
}

function BlackKey({ delay, isVisible }: { delay: number; isVisible: boolean }) {
  return (
    <div className={cn("piano-black-key hidden md:flex items-start justify-center pt-12 -mx-5 lg:-mx-6 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: isVisible ? `${delay}ms` : "0ms" }} aria-hidden="true">
      <GoldenDiamond />
    </div>
  );
}

export function WeddingsThreePaths() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="three-paths"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative py-fitz-9 md:py-fitz-10 px-4 min-h-[500px]"
      style={{ background: "hsl(var(--background))" }}
      aria-label="Pricing options"
    >
      {/* Warm glow */}
      <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse at 50% 45%, hsl(var(--vow-yellow) / 0.05) 0%, transparent 55%)" }} aria-hidden="true" />

      {/* Film grain */}
      <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.03 }} aria-hidden="true" />

      <div className="container mx-auto relative z-10">
        {/* Header */}
        <div className="flex flex-col items-center mb-16">
          <p className={cn("font-sans text-xs uppercase tracking-[0.22em] text-muted-foreground mb-4 text-center transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}>
            THREE KEYS
          </p>
          <h2 className={cn("text-[clamp(30px,4.5vw,40px)] font-display font-light leading-tight tracking-[0.02em] text-foreground text-center transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? "120ms" : "0ms", maxWidth: "18ch", margin: "0 auto" }}>
            Choose the presence that fits your day.
          </h2>
          <div className={cn("h-[1px] w-16 mx-auto mt-10 transition-all duration-700", isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0")} style={{ background: "linear-gradient(90deg, transparent, hsl(var(--vow-yellow)), transparent)", transitionDelay: isVisible ? "300ms" : "0ms" }} aria-hidden="true" />
        </div>

        {/* Desktop Piano Keys */}
        <div className="hidden md:flex items-end max-w-5xl mx-auto mb-12 piano-keys-container overflow-visible">
          {tiers.map((tier, i) => (
            <div key={tier.name} className="contents">
              <div
                className={cn("piano-white-key flex-1 flex flex-col transition-all duration-700", tier.isChosen && "piano-white-key--chosen", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}
                style={{ transitionDelay: isVisible ? `${whiteKeyDelays[i]}ms` : "0ms", paddingBottom: 40 }}
              >
                {tier.isChosen && (
                  <div className="relative z-10 flex flex-col items-center -mt-6 mb-2">
                    <div className="paths-chosen-badge">
                      <span className="inline-block" style={{ width: 5, height: 5, transform: "rotate(45deg)", background: "hsl(var(--vow-yellow))", borderRadius: 1 }} aria-hidden="true" />
                      <span className="text-xs font-medium tracking-[0.18em] text-primary">MOST CHOSEN</span>
                      <span className="inline-block" style={{ width: 5, height: 5, transform: "rotate(45deg)", background: "hsl(var(--vow-yellow))", borderRadius: 1 }} aria-hidden="true" />
                    </div>
                    <div className="w-[1px] h-3" style={{ background: "hsl(var(--vow-yellow) / 0.3)" }} aria-hidden="true" />
                  </div>
                )}
                <div className="flex-grow min-h-[120px] max-h-[180px]" />
                <h3 className="piano-key__name">{tier.name}</h3>
                <div className="h-[3px] w-12 mt-2 mb-6" style={{ background: `linear-gradient(90deg, hsl(var(--vow-yellow) / ${tier.isChosen ? 0.75 : 0.65}), hsl(var(--vow-yellow) / 0.2), transparent)` }} aria-hidden="true" />
                <span className="piano-key__price">{tier.price}</span>
                <p className="piano-key__description" style={{ minHeight: "2.8em" }}>{tier.description}</p>
                <p className="piano-key__sentence" style={{ minHeight: "3em" }}>{tier.sentence}</p>
                <Button className={cn("w-full mt-auto", tier.isChosen ? "piano-key__cta--chosen" : "piano-key__cta--flanking")} variant={tier.isChosen ? "default" : "outline"} asChild>
                  <Link to="/weddings/contact">{tier.ctaText}</Link>
                </Button>
              </div>
              {i < tiers.length - 1 && <BlackKey delay={[480, 560][i]} isVisible={isVisible} />}
            </div>
          ))}
        </div>

        {/* Mobile: Stacked */}
        <div className="md:hidden flex flex-col gap-0 max-w-sm mx-auto mb-12">
          {tiers.map((tier, i) => (
            <div key={tier.name}>
              <div className={cn("piano-white-key piano-white-key--mobile flex flex-col justify-end transition-all duration-700", tier.isChosen && "piano-white-key--chosen", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? `${whiteKeyDelays[i]}ms` : "0ms", paddingBottom: 40 }}>
                {tier.isChosen && (
                  <div className="relative z-10 flex flex-col items-center -mt-2 mb-3">
                    <div className="paths-chosen-badge">
                      <span className="inline-block" style={{ width: 5, height: 5, transform: "rotate(45deg)", background: "hsl(var(--vow-yellow))", borderRadius: 1 }} aria-hidden="true" />
                      <span className="text-xs font-medium tracking-[0.18em] text-primary">MOST CHOSEN</span>
                      <span className="inline-block" style={{ width: 5, height: 5, transform: "rotate(45deg)", background: "hsl(var(--vow-yellow))", borderRadius: 1 }} aria-hidden="true" />
                    </div>
                  </div>
                )}
                <h3 className="piano-key__name">{tier.name}</h3>
                <div className="h-[3px] w-12 mt-2 mb-4" style={{ background: `linear-gradient(90deg, hsl(var(--vow-yellow) / ${tier.isChosen ? 0.75 : 0.65}), hsl(var(--vow-yellow) / 0.2), transparent)` }} aria-hidden="true" />
                <span className="piano-key__price">{tier.price}</span>
                <p className="piano-key__description">{tier.description}</p>
                <p className="piano-key__sentence">{tier.sentence}</p>
                <Button className={cn("w-full mt-auto", tier.isChosen ? "piano-key__cta--chosen" : "piano-key__cta--flanking")} variant={tier.isChosen ? "default" : "outline"} asChild>
                  <Link to="/weddings/contact">{tier.ctaText}</Link>
                </Button>
              </div>
              {i < tiers.length - 1 && (
                <div className="md:hidden h-[1px] w-12 mx-auto my-4" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--vow-yellow) / 0.25), transparent)" }} aria-hidden="true" />
              )}
            </div>
          ))}
        </div>

        {/* Reassurance */}
        <div className={cn("flex justify-center mb-4 mt-12 transition-all duration-700", isVisible ? "opacity-100" : "opacity-0")} style={{ transitionDelay: isVisible ? "800ms" : "0ms" }} aria-hidden="true">
          <GoldenDiamond />
        </div>
        <p className={cn("text-center text-sm text-muted-foreground max-w-lg mx-auto transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? "880ms" : "0ms" }}>
          You can move between these at any time — no penalty until two weeks before your ceremony.
        </p>

        <div className={cn("text-center mt-fitz-7 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")} style={{ transitionDelay: isVisible ? "960ms" : "0ms" }}>
          <Link to="/weddings/pricing" className="inline-flex items-center text-sm tracking-[0.18em] uppercase text-primary story-link">View full details</Link>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-[120px] z-[3]" style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--background)))" }} aria-hidden="true" />
    </section>
  );
}
