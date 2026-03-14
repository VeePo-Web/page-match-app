import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/animation";
import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function About() {
  useEffect(() => { document.title = "About — Parker Gawryletz"; }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        <HeroStrip title="The witness behind the keys." subtitle="About" height="h-[60vh]" />

        <Section>
          <div className="max-w-2xl mx-auto">
            <RevealOnScroll>
              <p className="p-lead text-muted-foreground">
                I'm Parker Gawryletz, a ceremony pianist based in Calgary, serving couples and events across the Canadian Rockies — from Cochrane to Canmore to Banff.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <p className="mt-fitz-5 text-muted-foreground leading-relaxed">
                I don't just play music at events. I carry the emotional weight of the moment and translate it into sound. Every ceremony I play receives months of devoted preparation — learning your story, your songs, your silence — so that when the doors open, the room already knows what your hearts feel.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={240}>
              <p className="mt-fitz-5 text-muted-foreground leading-relaxed">
                I accept only 5–10 weddings per year. This isn't exclusivity for its own sake — it's a promise that your ceremony will receive my complete attention.
              </p>
            </RevealOnScroll>
          </div>
        </Section>

        <Section dark>
          <div className="max-w-2xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="mx-auto">Ready to begin?</h2>
              <p className="p-lead mt-fitz-3 mx-auto text-muted-foreground">Every story starts with a conversation.</p>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <Link to="/contact" className="inline-flex items-center mt-fitz-7 px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-fantasy-cta text-sm uppercase tracking-[0.18em]">
                Tell Me Your Story.
              </Link>
            </RevealOnScroll>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
