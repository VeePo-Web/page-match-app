import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { Section } from "@/components/Section";
import { HeroStrip } from "@/components/HeroStrip";
import { PianoKeyNav } from "@/components/PianoKeyNav";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { RevealOnScroll } from "@/components/animation";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import { SectionDivider } from "@/components/SectionDivider";
import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";
import heroEvents from "@/assets/hero-events.jpg";

const pianoSections = [
  { id: "hero", label: "The Atmosphere" },
  { id: "exhale", label: "Why Live Piano" },
  { id: "occasions", label: "Occasions", isBlackKey: true },
  { id: "approach", label: "The Approach" },
  { id: "threshold", label: "Concerns", isBlackKey: true },
  { id: "offering", label: "Three Presences" },
  { id: "crossing", label: "Begin" },
];

export default function Events() {
  usePageMeta({
    title: "Live Events — Parker Gawryletz | Calgary & Banff",
    description: "Live piano for corporate galas, private dinners, and memorial services. Calgary to Banff.",
  });

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <MinimalHeader />
      <PianoKeyNav sections={pianoSections} />

      <main id="main-content">
        <HeroStrip
          title="Live piano for moments that demand presence."
          subtitle="Live Events"
          height="h-[70vh]"
          backgroundImage={heroEvents}
          watermark="Events"
          showScrollCue
        />

        {/* Why Live Piano */}
        <Section id="exhale">
          <div className="max-w-2xl mx-auto text-center">
            <RevealOnScroll>
              <p className="overline mb-fitz-3">The Difference</p>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <h2 className="mx-auto">A playlist fills silence. A pianist reads the room.</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={240}>
              <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
                Live piano responds to the energy of your event in real time — adjusting tempo, volume, and mood to match what the room needs in each moment. It's the difference between background noise and a living, breathing atmosphere.
              </p>
            </RevealOnScroll>
            <RevealOnScroll delay={360}>
              <BreathingDiamond className="mt-fitz-7" />
            </RevealOnScroll>
          </div>
        </Section>

        {/* Occasions */}
        <Section dark id="occasions">
          <div className="max-w-3xl mx-auto text-center">
            <RevealOnScroll>
              <p className="overline mb-fitz-3">The Occasions</p>
              <h2 className="mx-auto">Corporate galas. Private dinners. Memorial services.</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={200}>
              <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
                Every event carries its own emotional weight. I bring the same devotion to a corporate gala that I bring to a wedding — because every gathered room deserves music that understands the moment.
              </p>
            </RevealOnScroll>
          </div>
        </Section>

        {/* Approach */}
        <Section id="approach">
          <div className="max-w-2xl mx-auto text-center">
            <RevealOnScroll>
              <p className="overline mb-fitz-3">How I Work</p>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <h2 className="mx-auto">I collaborate with your event team.</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={240}>
              <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
                I work directly with your event planner, venue coordinator, and AV team to ensure seamless integration. From cue sheets to sound checks, every detail is handled before your first guest arrives.
              </p>
            </RevealOnScroll>
          </div>
        </Section>

        {/* Threshold */}
        <Section dark id="threshold">
          <div className="max-w-3xl mx-auto">
            <RevealOnScroll>
              <p className="overline mb-fitz-3 text-center">Common Concerns</p>
              <h2 className="mx-auto text-center">You might be wondering.</h2>
            </RevealOnScroll>
            <div className="grid md:grid-cols-2 gap-fitz-6 mt-fitz-9">
              {[
                { q: "Do you bring your own instrument?", a: "Yes. I bring a professional digital piano with full sound system, or I can play a venue grand piano if one is available." },
                { q: "Can you learn specific songs?", a: "Absolutely. I prepare custom repertoire for every event based on your preferences and the atmosphere you want to create." },
                { q: "How much space do you need?", a: "A 6×6 foot area near a power outlet. I handle all setup and teardown — you won't notice the logistics." },
                { q: "Do you take requests during the event?", a: "I can, or I can maintain a curated setlist. We decide together during planning." },
              ].map((item, i) => (
                <RevealOnScroll key={i} delay={i * 100}>
                  <div className="p-fitz-6 rounded-md" style={{ borderLeft: "2px solid hsl(var(--gold) / 0.3)" }}>
                    <p className="font-display text-lg italic mb-fitz-3" style={{ color: "hsl(var(--gold))" }}>"{item.q}"</p>
                    <p className="text-muted-foreground text-sm leading-relaxed font-light">{item.a}</p>
                  </div>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>

        {/* Three Presences */}
        <Section id="offering">
          <div className="max-w-4xl mx-auto text-center">
            <RevealOnScroll>
              <p className="overline mb-fitz-3">Three Presences</p>
              <h2 className="mx-auto">Choose your level of musical presence.</h2>
            </RevealOnScroll>
            <div className="grid md:grid-cols-3 gap-fitz-6 mt-fitz-9">
              {[
                { name: "The Moment", duration: "1 hour", desc: "A single set for the defining moment of your event — an opening, a toast, a tribute." },
                { name: "The Evening", duration: "2–3 hours", desc: "Curated sets that shape the arc of your evening — from arrival through dinner.", isChosen: true },
                { name: "The Full Occasion", duration: "4+ hours", desc: "Complete musical presence from first guest to final farewell." },
              ].map((tier, i) => (
                <RevealOnScroll key={tier.name} delay={i * 100}>
                  <div className={`text-left p-fitz-6 border rounded-md hover:-translate-y-1 hover:scale-[1.01] transition-all duration-[180ms] bg-card ${tier.isChosen ? 'border-gold/20' : 'border-lines/40'}`}>
                    <h3 className="text-foreground">{tier.name}</h3>
                    <p className="font-display text-2xl font-light mt-fitz-2" style={{ color: "hsl(var(--sage))" }}>{tier.duration}</p>
                    <p className="text-muted-foreground mt-fitz-3 text-sm font-light">{tier.desc}</p>
                    {tier.isChosen && <span className="inline-block mt-fitz-3 text-xs uppercase tracking-[0.16em]" style={{ color: "hsl(var(--gold))" }}>Most Selected</span>}
                  </div>
                </RevealOnScroll>
              ))}
            </div>
            <RevealOnScroll delay={400}>
              <p className="text-center text-sm text-muted-foreground mt-fitz-5 max-w-md mx-auto">After our conversation, I provide a clear quote tailored to your event.</p>
              <Link to="/events/contact" className="inline-flex items-center mt-fitz-5 text-sm tracking-[0.16em] uppercase text-sage story-link">
                Request a proposal
              </Link>
            </RevealOnScroll>
          </div>
        </Section>

        <SectionDivider />

        {/* Other Services */}
        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <RevealOnScroll>
              <p className="overline mb-fitz-3">Other Services</p>
            </RevealOnScroll>
            <div className="flex justify-center gap-fitz-7 mt-fitz-5">
              <RevealOnScroll delay={100}>
                <Link to="/weddings" className="text-sm tracking-[0.16em] uppercase text-sage story-link">Weddings</Link>
              </RevealOnScroll>
              <RevealOnScroll delay={200}>
                <Link to="/teaching" className="text-sm tracking-[0.16em] uppercase text-sage story-link">Teaching</Link>
              </RevealOnScroll>
            </div>
          </div>
        </Section>

        {/* The Crossing */}
        <Section dark id="crossing">
          <div className="max-w-2xl mx-auto text-center">
            <RevealOnScroll>
              <BreathingDiamond className="mb-fitz-5" />
            </RevealOnScroll>
            <RevealOnScroll>
              <h2 className="mx-auto">Let's discuss your event.</h2>
            </RevealOnScroll>
            <RevealOnScroll delay={120}>
              <p className="p-lead mt-fitz-3 mx-auto text-muted-foreground">Every great event starts with a conversation.</p>
            </RevealOnScroll>
            <RevealOnScroll delay={240}>
              <Link
                to="/events/contact"
                className="inline-flex items-center mt-fitz-7 px-8 py-3 bg-gold text-sage-deep rounded-sm shadow-cta hover:shadow-cta-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]"
              >
                Discuss Your Event.
              </Link>
            </RevealOnScroll>
          </div>
        </Section>
      </main>

      <Footer />
      <MobileStickyBar />
      <BackToTop />
    </div>
  );
}
