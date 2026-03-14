import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { HeroStrip } from "@/components/HeroStrip";
import { PianoKeyNav } from "@/components/PianoKeyNav";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { RevealOnScroll } from "@/components/animation";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import heroWeddings from "@/assets/hero-weddings.jpg";

const pianoSections = [
  { id: "hero", label: "The Vigil" },
  { id: "exhale", label: "The Exhale" },
  { id: "process", label: "The Preparation", isBlackKey: true },
  { id: "vow-moment", label: "The Vow Moment" },
  { id: "invitation", label: "The Invitation", isBlackKey: true },
  { id: "transformation", label: "The Transformation" },
  { id: "witness", label: "The Witness", isBlackKey: true },
  { id: "three-paths", label: "The Offering" },
  { id: "testimonials", label: "Kind Words", isBlackKey: true },
  { id: "crossing", label: "The Crossing" },
];

export default function Weddings() {
  useEffect(() => {
    document.title = "Parker Gawryletz — Wedding Pianist, Calgary to Banff";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <PianoKeyNav sections={pianoSections} />

      <main>
        {/* ACT 1: Hero — The Vigil */}
        <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden" data-theme="death">
          <div className="absolute inset-0 bg-[hsl(var(--rich-black))]" />
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url(${heroWeddings})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              opacity: 0.1,
              filter: "brightness(0.75) contrast(1.08) saturate(0.9)",
              animation: "ken-burns 30s ease-in-out infinite alternate",
              willChange: "transform",
            }}
            aria-hidden="true"
          />
          <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.12 }} aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse at 50% 60%, hsl(var(--vow-yellow) / 0.03), transparent 60%)" }} aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse at center, transparent 25%, hsl(var(--rich-black) / 0.8) 100%)" }} aria-hidden="true" />
          <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
            <p className="overline mb-fitz-5 opacity-0 animate-fade-in" style={{ animationDelay: "2000ms", animationFillMode: "forwards" }}>Wedding Pianist</p>
            <h1 className="text-foreground mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "2800ms", animationFillMode: "forwards" }}>
              I carry your vows so they can carry your guests.
            </h1>
            <div className="chapter-rule mt-fitz-5 opacity-0 animate-fade-in" style={{ animationDelay: "3600ms", animationFillMode: "forwards" }} />
          </div>
          {/* Scroll cue */}
          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in" style={{ animationDelay: "4200ms", animationFillMode: "forwards" }}>
            <div className="w-[1px] h-8 bg-primary/30 mx-auto animate-pulse" />
          </div>
        </section>

        {/* ACT 2: The Exhale */}
        <Section id="exhale">
          <div className="max-w-2xl mx-auto text-center">
            <RevealOnScroll>
              <p className="overline mb-fitz-3">The Sacred Pause</p>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <h2 className="mx-auto">You are about to make a promise that will echo beyond your lifetime.</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={240}>
              <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
                I understand the weight of that moment. The held breath before the doors open. The silence that holds everything you're about to say. My music doesn't fill that silence — it honours it.
              </p>
            </RevealOnScroll>
          </div>
        </Section>

        {/* ACT 3: The Preparation */}
        <Section dark id="process">
          <div className="max-w-2xl mx-auto text-center">
            <RevealOnScroll>
              <p className="overline mb-fitz-3">How I Prepare</p>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <h2 className="mx-auto">Months of devotion for a single moment.</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={240}>
              <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
                Every ceremony I play receives months of collaborative preparation. I learn your story, your favourite songs, the way you met, the words you'll say. Then I compose a musical narrative that translates what your hearts feel into what your room will hear.
              </p>
            </RevealOnScroll>
          </div>
        </Section>

        {/* ACT 4: The Vow Moment — Altar Interstitial */}
        <section id="vow-moment" className="relative py-fitz-10 overflow-hidden" data-theme="death">
          <div className="absolute inset-0 bg-[hsl(var(--rich-black))]" />
          <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.06 }} aria-hidden="true" />
          <div className="relative z-10 text-center">
            <div className="h-[1px] w-16 mx-auto mb-fitz-7" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--vow-yellow) / 0.4), transparent)" }} />
            <RevealOnScroll variant="blur">
              <p className="font-display text-2xl md:text-3xl font-light italic text-foreground max-w-xl mx-auto px-6 leading-relaxed">
                "To let my music sound like what your hearts feel like."
              </p>
            </RevealOnScroll>
            <div className="h-[1px] w-16 mx-auto mt-fitz-7" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--vow-yellow) / 0.4), transparent)" }} />
          </div>
        </section>

        {/* ACT 5: The Invitation */}
        <Section id="invitation">
          <div className="max-w-2xl mx-auto text-center">
            <RevealOnScroll>
              <p className="overline mb-fitz-3">Meet the Witness</p>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <h2 className="mx-auto">I am not a vendor. I am a witness.</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={240}>
              <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
                I play only 5–10 weddings a year, each one receiving my complete attention and devotion. I don't perform at your wedding — I witness your covenant and translate it into sound.
              </p>
            </RevealOnScroll>
          </div>
        </Section>

        {/* ACT 6: The Transformation */}
        <Section dark id="transformation">
          <div className="max-w-3xl mx-auto">
            <RevealOnScroll>
              <p className="overline mb-fitz-3 text-center">Common Fears</p>
              <h2 className="mx-auto text-center">What keeps you up at night.</h2>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-fitz-6 mt-fitz-9">
              {[
                { fear: "What if the wind takes our words?", resolve: "I carry every word so it lands where it belongs. Professional SPL monitoring ensures nothing is lost." },
                { fear: "What if the music feels generic?", resolve: "I spend months learning your story. Every note is chosen as carefully as your vows." },
                { fear: "What if something goes wrong?", resolve: "Triple-redundant audio systems. Every ceremony unfolds with confidence, no matter the conditions." },
                { fear: "What if we don't know what songs to choose?", resolve: "That's what the consultation months are for. I guide you through every musical decision." },
              ].map((item, i) => (
                <RevealOnScroll key={i} delay={i * 100}>
                  <div className="p-fitz-6 border border-lines/30 rounded-lg">
                    <p className="font-display text-lg italic text-primary mb-fitz-3">"{item.fear}"</p>
                    <p className="text-muted-foreground text-sm leading-relaxed">{item.resolve}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>

        {/* ACT 7: The Witness — About Parker */}
        <Section id="witness">
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
              <Link to="/about" className="inline-flex items-center mt-fitz-5 text-sm tracking-[0.18em] uppercase text-primary story-link">
                Read my story
              </Link>
            </RevealOnScroll>
          </div>
        </Section>

        {/* ACT 8: Three Paths — Pricing Preview */}
        <Section dark id="three-paths">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="overline mb-fitz-3">The Offering</p>
              <h2 className="mx-auto">Three paths to your ceremony.</h2>
            </RevealOnScroll>
            <div className="grid md:grid-cols-3 gap-fitz-6 mt-fitz-9">
              {[
                { name: "The Prelude", price: "$1,200", desc: "Ceremony piano — processional through recessional. The essential musical witness." },
                { name: "The Covenant", price: "$2,400", desc: "Full ceremony + cocktail hour. Extended musical presence from preparation to celebration." },
                { name: "The Chronicle", price: "$4,200", desc: "Complete wedding-day coverage. Rehearsal through last dance." },
              ].map((tier, i) => (
                <RevealOnScroll key={tier.name} delay={i * 100}>
                  <div className="text-left p-fitz-6 border border-lines/30 rounded-lg hover:-translate-y-1 transition-transform duration-[180ms]">
                    <h3 className="text-foreground">{tier.name}</h3>
                    <p className="font-display text-3xl font-light text-primary mt-fitz-2">{tier.price}</p>
                    <p className="text-muted-foreground mt-fitz-3 text-sm">{tier.desc}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
            <RevealOnScroll delay={400}>
              <Link to="/weddings/pricing" className="inline-flex items-center mt-fitz-7 text-sm tracking-[0.18em] uppercase text-primary story-link">
                View full details
              </Link>
            </RevealOnScroll>
          </div>
        </Section>

        {/* ACT 9: Testimonials */}
        <Section id="testimonials">
          <div className="max-w-2xl mx-auto text-center">
            <RevealOnScroll>
              <p className="overline mb-fitz-3">Kind Words</p>
            </RevealOnScroll>
            <RevealOnScroll variant="blur" delay={120}>
              <blockquote className="font-display text-2xl md:text-3xl font-light italic text-foreground leading-relaxed">
                "Parker didn't just play our wedding — he held it. Every note was chosen as carefully as our vows."
              </blockquote>
            </RevealOnScroll>
            <RevealOnScroll delay={240}>
              <p className="text-muted-foreground mt-fitz-5 text-sm uppercase tracking-[0.18em]">— Sarah & James, Canmore 2024</p>
            </RevealOnScroll>
          </div>
        </Section>

        {/* ACT 10: The Crossing — Final CTA */}
        <Section dark id="crossing">
          <div className="max-w-2xl mx-auto text-center">
            <RevealOnScroll>
              <h2 className="mx-auto">Ready to begin?</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <p className="p-lead mt-fitz-3 mx-auto text-muted-foreground">Tell me your story. I'll tell you how I'll carry it.</p>
            </RevealOnScroll>
            <RevealOnScroll delay={240}>
              <Link
                to="/weddings/contact"
                className="inline-flex items-center mt-fitz-7 px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-fantasy-cta hover:shadow-fantasy-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.18em]"
              >
                Hold My Date.
              </Link>
            </RevealOnScroll>
          </div>
        </Section>
      </main>

      <Footer />
      <MobileStickyBar />
    </div>
  );
}
