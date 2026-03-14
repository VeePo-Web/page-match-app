import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { useEffect } from "react";

function Section({ children, className, dark = false }: { children: React.ReactNode; className?: string; dark?: boolean }) {
  const { ref, isVisible } = useScrollReveal();
  return (
    <section ref={ref as React.RefObject<HTMLElement>} className={cn("relative overflow-hidden", dark ? "section--dark" : "", className)} data-theme={dark ? "death" : undefined}>
      {dark && <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.08 }} aria-hidden="true" />}
      <div className={cn("container mx-auto px-fitz-4 md:px-fitz-6 py-fitz-9 md:py-fitz-10 relative z-[2] transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}>
        {children}
      </div>
    </section>
  );
}

export default function Events() {
  useEffect(() => { document.title = "Live Events — Parker Gawryletz"; }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden" data-theme="death">
          <div className="absolute inset-0 bg-[hsl(var(--rich-black))]" />
          <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.12 }} aria-hidden="true" />
          <div className="relative z-10 text-center px-6">
            <p className="overline mb-fitz-5">Live Events</p>
            <h1 className="text-foreground mx-auto">Live piano for moments that demand presence.</h1>
          </div>
        </section>

        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <p className="overline mb-fitz-3">The Occasions</p>
            <h2 className="mx-auto">Corporate galas. Private dinners. Memorial services.</h2>
            <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
              Every event carries its own emotional weight. I bring the same devotion to a corporate gala that I bring to a wedding — because every gathered room deserves music that understands the moment.
            </p>
          </div>
        </Section>

        <Section dark>
          <div className="max-w-3xl mx-auto text-center">
            <p className="overline mb-fitz-3">Three Presences</p>
            <div className="grid md:grid-cols-3 gap-fitz-6 mt-fitz-7">
              {[
                { name: "Ambient", price: "From $800", desc: "Background piano that elevates without interrupting. Perfect for cocktails and dinners." },
                { name: "Featured", price: "From $1,500", desc: "Curated performance integrated into your event's programme. Sets and transitions designed for your agenda." },
                { name: "Immersive", price: "From $3,000", desc: "Full evening coverage. I become part of your event's fabric — from guest arrival to final farewell." },
              ].map((tier) => (
                <div key={tier.name} className="text-left p-fitz-6 border border-lines rounded-lg">
                  <h3 className="text-foreground">{tier.name}</h3>
                  <p className="font-display text-2xl font-light text-primary mt-fitz-2">{tier.price}</p>
                  <p className="text-muted-foreground mt-fitz-3">{tier.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </Section>

        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="mx-auto">Let's discuss your event.</h2>
            <a href="/events/contact" className="inline-flex items-center mt-fitz-7 px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-fantasy-cta hover:shadow-fantasy-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.18em]">
              Discuss Your Event
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
