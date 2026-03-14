import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/animation";
import { Link } from "react-router-dom";

export function WeddingsWitness() {
  return (
    <Section dark id="witness">
      <div className="max-w-2xl mx-auto text-center">
        <RevealOnScroll>
          <p className="overline mb-fitz-3">The Witness</p>
        </RevealOnScroll>
        <RevealOnScroll delay={120}>
          <h2 className="mx-auto">Devoted to the ceremony of sound.</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={240}>
          <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
            I am Parker Gawryletz — a ceremony pianist serving Calgary, Cochrane, Canmore, and Banff. Every wedding I play is a privilege I carry with reverence. I bring months of preparation, professional-grade equipment, and a deep belief that your ceremony deserves music as intentional as your vows.
          </p>
        </RevealOnScroll>
        <RevealOnScroll delay={360}>
          <Link to="/about" className="inline-flex items-center mt-fitz-5 text-sm tracking-[0.16em] uppercase story-link" style={{ color: "hsl(var(--gold))" }}>
            Read my story
          </Link>
        </RevealOnScroll>
      </div>
    </Section>
  );
}
