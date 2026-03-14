import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/animation/RevealOnScroll";
import { CredentialStrip } from "@/components/CredentialStrip";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import { usePageMeta } from "@/hooks/usePageMeta";
import { Link } from "react-router-dom";

const proofs = [
  {
    title: "SPL Monitoring",
    promise: "I log every decibel so your venue never questions a thing.",
    desc: "Real-time sound pressure level monitoring ensures your ceremony meets every venue requirement — and sounds perfect from every seat. After your day, I send you the full SPL report.",
  },
  {
    title: "Triple Redundancy",
    promise: "Your ceremony never stops. I guarantee it.",
    desc: "Three independent power sources. Backup audio routing. A secondary instrument on standby. Every failure point has been anticipated and resolved before you arrive.",
  },
  {
    title: "Full Insurance",
    promise: "Every requirement met before you ask.",
    desc: "Comprehensive liability and equipment insurance. Every venue requirement satisfied. Every coordinator's checklist completed. You will never need to follow up.",
  },
];

export default function Proof() {
  usePageMeta({
    title: "Proof of Craft — Parker Gawryletz",
    description: "SPL monitoring, triple redundancy, full insurance. The details that protect your ceremony.",
  });

  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        <HeroStrip
          title="The details that protect your moment."
          subtitle="Proof of Craft"
          height="h-[50vh]"
          showScrollCue
        />

        <Section dark>
          <div className="max-w-4xl mx-auto">
            <CredentialStrip items={[
              { stat: "500+", label: "Events Played" },
              { stat: "Zero", label: "Missed Ceremonies" },
              { stat: "$4M", label: "Coverage" },
            ]} />

            <BreathingDiamond className="my-fitz-7" />

            <RevealOnScroll variant="up">
              <p className="overline mb-fitz-3">Why This Matters</p>
              <h2 className="text-foreground mb-fitz-8 max-w-2xl">
                Devotion without discipline is just sentiment. Here is the discipline.
              </h2>
            </RevealOnScroll>

            <div className="grid md:grid-cols-3 gap-fitz-7">
              {proofs.map((item, i) => (
                <RevealOnScroll key={item.title} variant="up" delay={i * 120}>
                  <div className="border border-lines/20 rounded-md p-fitz-6 bg-card/30 backdrop-blur-sm">
                    <h3 className="text-foreground mb-fitz-3">{item.title}</h3>
                    <p className="text-gold font-display text-sm italic mb-fitz-4">"{item.promise}"</p>
                    <p className="text-muted-foreground text-sm">{item.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <RevealOnScroll variant="up">
              <p className="text-muted-foreground mb-fitz-3">Every claim on this website is backed by documentation.</p>
              <p className="text-muted-foreground mb-fitz-7 text-sm">Ask me for SPL reports, insurance certificates, or references — I'll send them within 24 hours.</p>
              <Link
                to="/contact"
                className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]"
              >
                Ask Me Anything
              </Link>
            </RevealOnScroll>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
