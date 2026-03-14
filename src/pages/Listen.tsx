import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/animation/RevealOnScroll";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useState } from "react";
import heroWeddings from "@/assets/hero-weddings.jpg";

const movements = [
  { number: "I", title: "The Vigil", description: "What plays while the room holds its breath. Prelude selections that honour the weight of anticipation.", duration: "4:32" },
  { number: "II", title: "The Processional", description: "The music that carries you down the aisle. Arrangements crafted to match the pace of your heartbeat.", duration: "3:18" },
  { number: "III", title: "The Covenant", description: "What surrounds the vows. Gentle, present, holding the silence between sacred words.", duration: "5:47" },
  { number: "IV", title: "The Recessional", description: "The exhale. The celebration. The music that sends you into your new life together.", duration: "2:54" },
];

function PlayerShell({ movement }: { movement: typeof movements[0] }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="flex items-center gap-3 mt-fitz-4">
      <button
        type="button"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`w-9 h-9 rounded-sm border flex items-center justify-center transition-all duration-default shrink-0 ${
          isHovered ? "border-gold/50 shadow-[0_0_12px_hsl(var(--gold)/0.15)]" : "border-gold/20"
        }`}
        aria-label={`Play ${movement.title} (coming soon)`}
      >
        <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[8px] border-transparent border-l-gold/50 ml-0.5" />
      </button>
      <div className="flex-1 flex items-center gap-3">
        <div className="flex-1 h-[2px] bg-lines/20 rounded-full overflow-hidden">
          <div className="h-full w-0 bg-gold/40 rounded-full" />
        </div>
        <span className="font-sans text-xs text-muted-foreground/50 tabular-nums w-10 text-right">{movement.duration}</span>
      </div>
    </div>
  );
}

export default function Listen() {
  usePageMeta({
    title: "Listen — Parker Gawryletz | Ceremony Music",
    description: "Hear the ceremony. Four movements that follow the emotional arc of a wedding day.",
  });

  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main id="main-content">
        <HeroStrip
          title="Hear the ceremony."
          subtitle="The Listening Room"
          backgroundImage={heroWeddings}
          height="h-[50vh]"
          showScrollCue
        />

        <Section>
          <div className="max-w-2xl mx-auto">
            <RevealOnScroll>
              <p className="p-lead text-muted-foreground text-center mx-auto mb-fitz-9">
                Every ceremony has a shape — a rise and fall of emotion that moves through the room. These four movements follow that arc.
              </p>
            </RevealOnScroll>
          </div>
        </Section>

        <Section dark>
          <div className="max-w-3xl mx-auto">
            <RevealOnScroll variant="up">
              <p className="overline mb-fitz-5">Four Movements</p>
              <h2 className="text-foreground mb-fitz-7">Every ceremony has a shape. Here is its sound.</h2>
            </RevealOnScroll>

            <div className="grid gap-fitz-7 mt-fitz-8">
              {movements.map((m, i) => (
                <RevealOnScroll key={m.number} variant="up" delay={i * 100}>
                  <div className="flex gap-fitz-5 items-start group">
                    <span className="font-display text-[36px] font-light text-gold/40 leading-none shrink-0 w-12 text-right">
                      {m.number}
                    </span>
                    <div className="border-l border-gold/10 pl-fitz-5 flex-1">
                      <h3 className="text-foreground mb-fitz-2">{m.title}</h3>
                      <p className="text-muted-foreground">{m.description}</p>
                      <PlayerShell movement={m} />
                    </div>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <RevealOnScroll variant="up">
              <p className="text-muted-foreground mb-fitz-7">Audio samples coming soon. In the meantime, reach out and I'll share recordings that match your ceremony vision.</p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]"
              >
                Request Samples
              </Link>
            </RevealOnScroll>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
