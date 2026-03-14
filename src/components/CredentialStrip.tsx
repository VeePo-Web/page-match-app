import { BreathingDiamond } from "@/components/BreathingDiamond";
import { RevealOnScroll } from "@/components/animation";

const defaultCredentials = [
  { stat: "500+", label: "Events Played" },
  { stat: "SOCAN", label: "Licensed" },
  { stat: "$4M", label: "Insured" },
];

export function CredentialStrip({ items = defaultCredentials }: { items?: { stat: string; label: string }[] }) {
  return (
    <RevealOnScroll>
      <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 py-fitz-5">
        {items.map((c, i) => (
          <div key={c.label} className="flex items-center gap-4 md:gap-6">
            <div className="text-center">
              <p className="font-display text-lg md:text-xl font-light" style={{ color: "hsl(var(--gold))" }}>{c.stat}</p>
              <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-muted-foreground mt-0.5">{c.label}</p>
            </div>
            {i < items.length - 1 && <BreathingDiamond />}
          </div>
        ))}
      </div>
    </RevealOnScroll>
  );
}
