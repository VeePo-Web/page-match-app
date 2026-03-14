import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/animation";
import { CredentialStrip } from "@/components/CredentialStrip";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import aboutKeys from "@/assets/about-keys.jpg";

export default function About() {
  usePageMeta({
    title: "About — Parker Gawryletz | Ceremony Pianist",
    description: "Ceremony pianist based in Calgary, serving couples and events across the Canadian Rockies. 5–10 weddings per year.",
  });

  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <ScrollProgress />
      <BackToTop />
      <main id="main-content">
        <HeroStrip title="The witness behind the keys." subtitle="About" height="h-[60vh]" />

        <Section>
          <div className="max-w-4xl mx-auto grid md:grid-cols-12 gap-fitz-7 items-start">
            <div className="md:col-span-7">
              <RevealOnScroll>
                <p className="p-lead text-muted-foreground drop-cap">
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
            <div className="md:col-span-5 hidden md:block">
              <RevealOnScroll delay={200}>
                <div className="aspect-[4/5] rounded-md overflow-hidden border border-lines/20">
                  <img
                    src={aboutKeys}
                    alt="Close-up of grand piano keys in warm golden hour light"
                    className="w-full h-full object-cover"
                    loading="lazy"
                    decoding="async"
                    width={1024}
                    height={1280}
                  />
                </div>
              </RevealOnScroll>
            </div>
          </div>
        </Section>

        <Section dark>
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <div className="editorial-rule mb-fitz-7" />
              <blockquote className="font-display text-2xl md:text-3xl font-light italic leading-snug" style={{ color: "hsl(var(--warm-white) / 0.85)" }}>
                "I don't perform at your wedding. I witness it — and translate what I feel into what everyone hears."
              </blockquote>
              <div className="editorial-rule mt-fitz-7" />
            </RevealOnScroll>
          </div>
        </Section>

        <Section>
          <CredentialStrip />
        </Section>

        <Section dark>
          <div className="max-w-2xl mx-auto text-center">
            <RevealOnScroll>
              <BreathingDiamond className="mb-fitz-5" />
              <h2 className="mx-auto">Ready to begin?</h2>
              <p className="p-lead mt-fitz-3 mx-auto text-muted-foreground">Every story starts with a conversation.</p>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <Link to="/contact" className="inline-flex items-center mt-fitz-7 px-8 py-3 bg-gold text-sage-deep rounded-sm shadow-cta hover:shadow-cta-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]">
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
