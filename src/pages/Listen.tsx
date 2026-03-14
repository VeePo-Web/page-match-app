import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/animation/RevealOnScroll";
import { useEffect } from "react";
import heroWeddings from "@/assets/hero-weddings.jpg";

const movements = [
  { number: "I", title: "The Vigil", description: "What plays while the room holds its breath. Prelude selections that honour the weight of anticipation." },
  { number: "II", title: "The Processional", description: "The music that carries you down the aisle. Arrangements crafted to match the pace of your heartbeat." },
  { number: "III", title: "The Covenant", description: "What surrounds the vows. Gentle, present, holding the silence between sacred words." },
  { number: "IV", title: "The Recessional", description: "The exhale. The celebration. The music that sends you into your new life together." },
];

export default function Listen() {
  useEffect(() => { document.title = "Listen — Parker Gawryletz"; }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        <HeroStrip
          title="Hear the ceremony."
          subtitle="The Listening Room"
          backgroundImage={heroWeddings}
          height="h-[50vh]"
        />

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
                    <div className="border-l border-primary/10 pl-fitz-5">
                      <h3 className="text-foreground mb-fitz-2">{m.title}</h3>
                      <p className="text-muted-foreground">{m.description}</p>
                      <div className="mt-fitz-4 flex items-center gap-3 opacity-50">
                      <div className="w-8 h-8 rounded-sm border border-gold/20 flex items-center justify-center">
                          <div className="w-0 h-0 border-t-[5px] border-b-[5px] border-l-[8px] border-transparent border-l-gold/40 ml-0.5" />
                        </div>
                        <span className="font-sans text-xs text-muted-foreground tracking-[0.08em] uppercase">Coming Soon</span>
                      </div>
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
              <p className="text-muted-foreground mb-fitz-7">In the meantime, reach out and I'll share recordings that match your ceremony vision.</p>
              <a
                href="/contact"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]"
              >
                Request Samples
              </a>
            </RevealOnScroll>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
