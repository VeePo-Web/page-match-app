import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/animation";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import { Link } from "react-router-dom";
import { useEffect } from "react";

/* ─── Shared Sub-page Shell ─── */
function SubPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>{children}</main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

/* ─── PRICING PAGES ─── */

export function WeddingsPricing() {
  useEffect(() => { document.title = "Wedding Pricing — Parker Gawryletz"; }, []);
  return (
    <SubPageLayout>
      <HeroStrip title="Wedding Services & Pricing" subtitle="Investment" height="h-[40vh]" />

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <RevealOnScroll>
            <p className="overline mb-fitz-3">Every Package Includes</p>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <ul className="text-muted-foreground space-y-fitz-2 mt-fitz-5 text-sm font-light">
              {["Professional digital piano & sound system", "Custom song arrangements", "Pre-ceremony sound check", "Planning consultation(s)", "Travel within Calgary, Cochrane, Canmore & Banff"].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </RevealOnScroll>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-fitz-6">
            {[
              { name: "The Prelude", price: "$1,200", items: ["Ceremony piano (processional → recessional)", "One planning consultation", "Custom arrangements included", "Professional digital piano provided"] },
              { name: "The Covenant", price: "$2,400", items: ["Everything in The Prelude", "Cocktail hour coverage (60 min)", "Extended song consultation", "On-site sound check"], isChosen: true },
              { name: "The Chronicle", price: "$4,200", items: ["Everything in The Covenant", "Rehearsal attendance", "Dinner music", "Last dance", "Full-day dedication"] },
            ].map((tier, i) => (
              <RevealOnScroll key={tier.name} delay={i * 100}>
                <div className={`p-fitz-6 rounded-md ${tier.isChosen ? 'border border-gold/20' : 'border border-lines/20'}`}>
                  <h3 className="text-foreground">{tier.name}</h3>
                  <p className="font-display text-3xl font-light mt-fitz-2" style={{ color: "hsl(var(--gold))" }}>{tier.price}</p>
                  <ul className="mt-fitz-5 space-y-fitz-2 text-muted-foreground text-sm font-light">
                    {tier.items.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <BreathingDiamond className="mb-fitz-5" />
            <h2 className="mx-auto">Ready to hold your date?</h2>
            <p className="p-lead mt-fitz-3 mx-auto text-muted-foreground">I accept only 5–10 weddings per year.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <Link to="/weddings/contact" className="inline-flex items-center mt-fitz-7 px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]">
              Hold My Date.
            </Link>
          </RevealOnScroll>
        </div>
      </Section>
    </SubPageLayout>
  );
}

export function TeachingPricing() {
  useEffect(() => { document.title = "Lesson Pricing — Parker Gawryletz"; }, []);
  return (
    <SubPageLayout>
      <HeroStrip title="$60 per hour." subtitle="Lesson Investment" height="h-[40vh]" />
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <p className="overline mb-fitz-3">What's Included</p>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <ul className="text-muted-foreground space-y-fitz-2 mt-fitz-5 text-sm font-light">
              {["Weekly one-hour sessions in Calgary", "All ages and levels welcome", "Technique foundations & theory", "Repertoire development", "Expressive musicality coaching", "Practice guidance between sessions"].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </RevealOnScroll>
          <RevealOnScroll delay={240}>
            <Link to="/teaching/contact" className="inline-flex items-center mt-fitz-7 px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]">
              Begin the Conversation.
            </Link>
          </RevealOnScroll>
        </div>
      </Section>
    </SubPageLayout>
  );
}

export function EventsPricing() {
  useEffect(() => { document.title = "Event Pricing — Parker Gawryletz"; }, []);
  return (
    <SubPageLayout>
      <HeroStrip title="Three presences." subtitle="Event Investment" height="h-[40vh]" />
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-fitz-6">
            {[
              { name: "Ambient", price: "From $800", desc: "Background piano for cocktails, dinners, and receptions. 1-2 hours." },
              { name: "Featured", price: "From $1,500", desc: "Curated performance integrated into your programme. 2-3 hours." },
              { name: "Immersive", price: "From $3,000", desc: "Full evening coverage from arrival to farewell. 4+ hours." },
            ].map((tier, i) => (
              <RevealOnScroll key={tier.name} delay={i * 100}>
                <div className="p-fitz-6 border border-lines/20 rounded-md">
                  <h3 className="text-foreground">{tier.name}</h3>
                  <p className="font-display text-3xl font-light mt-fitz-2" style={{ color: "hsl(var(--gold))" }}>{tier.price}</p>
                  <p className="text-muted-foreground mt-fitz-3 text-sm font-light">{tier.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </Section>
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <Link to="/events/contact" className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]">
              Discuss Your Event.
            </Link>
          </RevealOnScroll>
        </div>
      </Section>
    </SubPageLayout>
  );
}

/* ─── ABOUT PAGES ─── */

export function WeddingsAbout() {
  useEffect(() => { document.title = "About (Weddings) — Parker Gawryletz"; }, []);
  return (
    <SubPageLayout>
      <HeroStrip title="The witness behind your ceremony." subtitle="About Parker" height="h-[40vh]" />
      <Section>
        <div className="max-w-2xl mx-auto">
          <RevealOnScroll>
            <p className="text-muted-foreground leading-relaxed font-light">I am not a performer. I am a witness who translates what two hearts feel into what an entire room hears.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <p className="text-muted-foreground leading-relaxed mt-fitz-5 font-light">Every ceremony I play receives months of collaborative preparation. I learn your story — how you met, the songs that matter, the words you'll say — and compose a musical narrative that carries the emotional weight of your covenant.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={240}>
            <p className="text-muted-foreground leading-relaxed mt-fitz-5 font-light">I serve Calgary, Cochrane, Canmore, and Banff — and I accept only 5–10 weddings per year, because every ceremony deserves my undivided devotion.</p>
          </RevealOnScroll>
        </div>
      </Section>
      <Section dark>
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <Link to="/weddings/contact" className="inline-flex items-center px-8 py-3 bg-gold text-sage-deep rounded-sm shadow-cta text-sm uppercase tracking-[0.12em]">Hold My Date.</Link>
          </RevealOnScroll>
        </div>
      </Section>
    </SubPageLayout>
  );
}

export function TeachingAbout() {
  useEffect(() => { document.title = "About (Teaching) — Parker Gawryletz"; }, []);
  return (
    <SubPageLayout>
      <HeroStrip title="Music is a language." subtitle="About Parker" height="h-[40vh]" />
      <Section>
        <div className="max-w-2xl mx-auto">
          <RevealOnScroll>
            <p className="text-muted-foreground leading-relaxed font-light">I teach piano the way I play ceremonies — with intention, patience, and deep respect for each student's own musical voice.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <p className="text-muted-foreground leading-relaxed mt-fitz-5 font-light">My approach balances strong technical foundations with expressive freedom, helping students develop not just the ability to play, but the ability to communicate through music.</p>
          </RevealOnScroll>
        </div>
      </Section>
      <Section dark>
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <Link to="/teaching/contact" className="inline-flex items-center px-8 py-3 bg-gold text-sage-deep rounded-sm shadow-cta text-sm uppercase tracking-[0.12em]">Begin the Conversation.</Link>
          </RevealOnScroll>
        </div>
      </Section>
    </SubPageLayout>
  );
}

export function EventsAbout() {
  useEffect(() => { document.title = "About (Events) — Parker Gawryletz"; }, []);
  return (
    <SubPageLayout>
      <HeroStrip title="Presence, not performance." subtitle="About Parker" height="h-[40vh]" />
      <Section>
        <div className="max-w-2xl mx-auto">
          <RevealOnScroll>
            <p className="text-muted-foreground leading-relaxed font-light">Every gathered room carries its own emotional weight. Whether it's a corporate gala, a private dinner, or a memorial service, I bring the same devotion to your event that I bring to a wedding ceremony.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <p className="text-muted-foreground leading-relaxed mt-fitz-5 font-light">I don't play background music. I listen to the room and respond to its energy — creating a musical conversation between the instrument and the moment.</p>
          </RevealOnScroll>
        </div>
      </Section>
      <Section dark>
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <Link to="/events/contact" className="inline-flex items-center px-8 py-3 bg-gold text-sage-deep rounded-sm shadow-cta text-sm uppercase tracking-[0.12em]">Discuss Your Event.</Link>
          </RevealOnScroll>
        </div>
      </Section>
    </SubPageLayout>
  );
}

/* ─── CONTACT PAGES ─── */

function ContactForm({ fields, ctaLabel, textareaLabel }: { fields: string[]; ctaLabel: string; textareaLabel: string }) {
  return (
    <div className="max-w-xl mx-auto">
      <div className="p-fitz-6 md:p-fitz-7 rounded-md border border-lines/30 bg-card/80 backdrop-blur-sm">
        <form className="space-y-fitz-5">
          {fields.map((label) => (
            <RevealOnScroll key={label}>
              <div>
                <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-fitz-2 font-sans">{label}</label>
                <input
                  type={label.toLowerCase().includes('email') ? 'email' : label.toLowerCase().includes('phone') ? 'tel' : 'text'}
                  className="w-full bg-transparent input-gold-focus py-fitz-3 text-foreground"
                />
              </div>
            </RevealOnScroll>
          ))}
          <RevealOnScroll>
            <div>
              <label className="block text-xs uppercase tracking-[0.2em] text-muted-foreground mb-fitz-2 font-sans">{textareaLabel}</label>
              <textarea rows={4} className="w-full bg-transparent input-gold-focus py-fitz-3 text-foreground resize-none" />
            </div>
          </RevealOnScroll>
          <RevealOnScroll>
            <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]">
              {ctaLabel}
            </button>
          </RevealOnScroll>
        </form>
      </div>

      {/* Trust stats */}
      <RevealOnScroll delay={200}>
        <div className="flex justify-center gap-fitz-7 mt-fitz-7 text-center">
          {[
            { stat: "< 24hr", label: "Response time" },
            { stat: "100%", label: "Reply rate" },
            { stat: "Free", label: "Initial consultation" },
          ].map((s) => (
            <div key={s.label}>
              <p className="font-display text-xl" style={{ color: "hsl(var(--sage))" }}>{s.stat}</p>
              <p className="text-xs text-muted-foreground uppercase tracking-[0.1em] mt-1 font-sans">{s.label}</p>
            </div>
          ))}
        </div>
      </RevealOnScroll>
    </div>
  );
}

export function WeddingsContact() {
  useEffect(() => { document.title = "Wedding Inquiry — Parker Gawryletz"; }, []);
  return (
    <SubPageLayout>
      <HeroStrip title="Hold my date." subtitle="Wedding Inquiry" height="h-[40vh]" />
      <Section>
        <ContactForm
          fields={["Your Name", "Partner's Name", "Email", "Phone", "Wedding Date", "Venue"]}
          ctaLabel="Hold My Date."
          textareaLabel="Tell me about your ceremony"
        />
      </Section>
    </SubPageLayout>
  );
}

export function TeachingContact() {
  useEffect(() => { document.title = "Teaching Inquiry — Parker Gawryletz"; }, []);
  return (
    <SubPageLayout>
      <HeroStrip title="Begin the conversation." subtitle="Teaching Inquiry" height="h-[40vh]" />
      <Section>
        <ContactForm
          fields={["Your Name", "Email", "Phone", "Student Age", "Experience Level"]}
          ctaLabel="Begin the Conversation."
          textareaLabel="What are your goals?"
        />
      </Section>
    </SubPageLayout>
  );
}

export function EventsContact() {
  useEffect(() => { document.title = "Event Inquiry — Parker Gawryletz"; }, []);
  return (
    <SubPageLayout>
      <HeroStrip title="Discuss your event." subtitle="Event Inquiry" height="h-[40vh]" />
      <Section>
        <ContactForm
          fields={["Your Name", "Organization", "Email", "Phone", "Event Date", "Venue / Location"]}
          ctaLabel="Discuss Your Event."
          textareaLabel="Tell me about your event"
        />
      </Section>
    </SubPageLayout>
  );
}
