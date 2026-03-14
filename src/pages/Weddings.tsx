import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

function Section({ children, className, dark = false, id }: { children: React.ReactNode; className?: string; dark?: boolean; id?: string }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id={id}
      className={cn(
        "relative overflow-hidden",
        dark ? "section--dark" : "",
        className
      )}
      data-theme={dark ? "death" : undefined}
    >
      {dark && <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.08 }} aria-hidden="true" />}
      {dark && <div className="pointer-events-none absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse at center, transparent 40%, hsl(var(--rich-black) / 0.6) 100%)" }} aria-hidden="true" />}
      <div className={cn("container mx-auto px-fitz-4 md:px-fitz-6 py-fitz-9 md:py-fitz-10 relative z-[2] transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
        {children}
      </div>
    </section>
  );
}

export default function Weddings() {
  useEffect(() => {
    document.title = "Parker Gawryletz — Wedding Pianist, Calgary to Banff";
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        {/* Hero */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden" data-theme="death">
          <div className="absolute inset-0 bg-[hsl(var(--rich-black))]" />
          <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.12 }} aria-hidden="true" />
          <div className="pointer-events-none absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--rich-black) / 0.8) 100%)" }} aria-hidden="true" />
          <div className="relative z-10 text-center px-6">
            <p className="overline mb-fitz-5 opacity-0 animate-fade-in" style={{ animationDelay: "2000ms", animationFillMode: "forwards" }}>Wedding Pianist</p>
            <h1 className="text-foreground mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "2400ms", animationFillMode: "forwards" }}>
              I carry your vows so they can carry your guests.
            </h1>
            <div className="chapter-rule mt-fitz-5 opacity-0 animate-fade-in" style={{ animationDelay: "3000ms", animationFillMode: "forwards" }} />
          </div>
        </section>

        {/* The Exhale */}
        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <p className="overline mb-fitz-3">The Sacred Pause</p>
            <h2 className="mx-auto">You are about to make a promise that will echo beyond your lifetime.</h2>
            <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
              I understand the weight of that moment. The held breath before the doors open. The silence that holds everything you're about to say. My music doesn't fill that silence — it honours it.
            </p>
          </div>
        </Section>

        {/* Process */}
        <Section dark id="process">
          <div className="max-w-2xl mx-auto text-center">
            <p className="overline mb-fitz-3">How I Prepare</p>
            <h2 className="mx-auto">Months of devotion for a single moment.</h2>
            <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
              Every ceremony I play receives months of collaborative preparation. I learn your story, your favourite songs, the way you met, the words you'll say. Then I compose a musical narrative that translates what your hearts feel into what your room will hear.
            </p>
          </div>
        </Section>

        {/* The Invitation */}
        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <p className="overline mb-fitz-3">Meet the Witness</p>
            <h2 className="mx-auto">I am not a vendor. I am a witness.</h2>
            <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
              I play only 5–10 weddings a year, each one receiving my complete attention and devotion. I don't perform at your wedding — I witness your covenant and translate it into sound.
            </p>
          </div>
        </Section>

        {/* Transformation */}
        <Section dark>
          <div className="max-w-3xl mx-auto text-center">
            <p className="overline mb-fitz-3">Before & After</p>
            <h2 className="mx-auto">What if the wind takes our words?</h2>
            <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
              I carry every word so it lands where it belongs. With professional SPL monitoring and triple-redundant audio systems, your ceremony unfolds with confidence — no matter the conditions.
            </p>
          </div>
        </Section>

        {/* Three Paths */}
        <Section id="three-paths">
          <div className="max-w-4xl mx-auto text-center">
            <p className="overline mb-fitz-3">The Offering</p>
            <h2 className="mx-auto">Three paths to your ceremony.</h2>
            <div className="grid md:grid-cols-3 gap-fitz-6 mt-fitz-9">
              {[
                { name: "The Prelude", price: "$1,200", desc: "Ceremony piano — processional through recessional. The essential musical witness." },
                { name: "The Covenant", price: "$2,400", desc: "Full ceremony + cocktail hour. Extended musical presence from preparation to celebration." },
                { name: "The Chronicle", price: "$4,200", desc: "Complete wedding-day coverage. Rehearsal through last dance." },
              ].map((tier) => (
                <div key={tier.name} className="text-left p-fitz-6 border border-lines rounded-lg">
                  <h3 className="text-foreground">{tier.name}</h3>
                  <p className="font-display text-3xl font-light text-primary mt-fitz-2">{tier.price}</p>
                  <p className="text-muted-foreground mt-fitz-3">{tier.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* Testimonials */}
        <Section dark>
          <div className="max-w-2xl mx-auto text-center">
            <p className="overline mb-fitz-3">Kind Words</p>
            <blockquote className="font-display text-2xl font-light italic text-foreground leading-relaxed">
              "Parker didn't just play our wedding — he held it. Every note was chosen as carefully as our vows."
            </blockquote>
            <p className="text-muted-foreground mt-fitz-5 text-sm uppercase tracking-[0.18em]">— Sarah & James, Canmore 2024</p>
          </div>
        </Section>

        {/* CTA */}
        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mx-auto">Ready to begin?</h2>
            <p className="p-lead mt-fitz-3 mx-auto text-muted-foreground">Tell me your story. I'll tell you how I'll carry it.</p>
            <a href="/contact" className="inline-flex items-center mt-fitz-7 px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-fantasy-cta hover:shadow-fantasy-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.18em]">
              Hold My Date
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
