import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

function SubPageShell({ title, subtitle, children }: { title: string; subtitle: string; children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden" data-theme="death">
          <div className="absolute inset-0 bg-[hsl(var(--rich-black))]" />
          <div className="relative z-10 text-center px-6">
            <p className="overline mb-fitz-5">{subtitle}</p>
            <h1 className="text-foreground mx-auto">{title}</h1>
          </div>
        </section>
        <section className="container mx-auto px-fitz-4 md:px-fitz-6 py-fitz-9 md:py-fitz-10">
          {children}
        </section>
      </main>
      <Footer />
    </div>
  );
}

export function WeddingsPricing() {
  useEffect(() => { document.title = "Wedding Pricing — Parker Gawryletz"; }, []);
  return (
    <SubPageShell title="Wedding Services & Pricing" subtitle="Investment">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-fitz-6">
        {[
          { name: "The Prelude", price: "$1,200", items: ["Ceremony piano (processional → recessional)", "One planning consultation", "Custom arrangements included", "Professional digital piano provided"] },
          { name: "The Covenant", price: "$2,400", items: ["Everything in The Prelude", "Cocktail hour coverage (60 min)", "Extended song consultation", "On-site sound check"] },
          { name: "The Chronicle", price: "$4,200", items: ["Everything in The Covenant", "Rehearsal attendance", "Dinner music", "Last dance", "Full-day dedication"] },
        ].map((tier) => (
          <div key={tier.name} className="p-fitz-6 border border-lines rounded-lg">
            <h3 className="text-foreground">{tier.name}</h3>
            <p className="font-display text-3xl font-light text-primary mt-fitz-2">{tier.price}</p>
            <ul className="mt-fitz-5 space-y-fitz-2 text-muted-foreground text-sm">
              {tier.items.map((item) => <li key={item}>• {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </SubPageShell>
  );
}

export function WeddingsAbout() {
  useEffect(() => { document.title = "About (Weddings) — Parker Gawryletz"; }, []);
  return (
    <SubPageShell title="The witness behind your ceremony." subtitle="About Parker">
      <div className="max-w-2xl mx-auto text-muted-foreground space-y-fitz-5">
        <p>I am not a performer. I am a witness who translates what two hearts feel into what an entire room hears.</p>
        <p>Every ceremony I play receives months of collaborative preparation. I learn your story — how you met, the songs that matter, the words you'll say — and compose a musical narrative that carries the emotional weight of your covenant.</p>
      </div>
    </SubPageShell>
  );
}

export function WeddingsContact() {
  useEffect(() => { document.title = "Wedding Inquiry — Parker Gawryletz"; }, []);
  return (
    <SubPageShell title="Hold my date." subtitle="Wedding Inquiry">
      <div className="max-w-xl mx-auto">
        <form className="space-y-fitz-5">
          {["Your Name", "Partner's Name", "Email", "Phone", "Wedding Date", "Venue"].map((label) => (
            <div key={label}>
              <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground mb-fitz-2">{label}</label>
              <input type="text" className="w-full bg-transparent border-b border-lines focus:border-primary outline-none py-fitz-3 text-foreground transition-colors" />
            </div>
          ))}
          <div>
            <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground mb-fitz-2">Tell me about your ceremony</label>
            <textarea rows={4} className="w-full bg-transparent border-b border-lines focus:border-primary outline-none py-fitz-3 text-foreground transition-colors resize-none" />
          </div>
          <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-fantasy-cta text-sm uppercase tracking-[0.18em]">Hold My Date.</button>
        </form>
      </div>
    </SubPageShell>
  );
}

export function TeachingPricing() {
  useEffect(() => { document.title = "Lesson Pricing — Parker Gawryletz"; }, []);
  return (
    <SubPageShell title="$60 per hour." subtitle="Lesson Investment">
      <div className="max-w-2xl mx-auto text-muted-foreground space-y-fitz-5">
        <p>Weekly one-hour lessons in Calgary. All ages and levels welcome.</p>
        <p>Each session includes technique foundations, repertoire development, and expressive musicality — tailored entirely to your goals.</p>
        <a href="/teaching/contact" className="inline-flex items-center mt-fitz-5 px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-fantasy-cta text-sm uppercase tracking-[0.18em]">Begin the Conversation</a>
      </div>
    </SubPageShell>
  );
}

export function TeachingAbout() {
  useEffect(() => { document.title = "About (Teaching) — Parker Gawryletz"; }, []);
  return (
    <SubPageShell title="Music is a language." subtitle="About Parker">
      <div className="max-w-2xl mx-auto text-muted-foreground space-y-fitz-5">
        <p>I teach piano the way I play ceremonies — with intention, patience, and deep respect for each student's own musical voice.</p>
        <p>My approach balances strong technical foundations with expressive freedom, helping students develop not just the ability to play, but the ability to communicate through music.</p>
      </div>
    </SubPageShell>
  );
}

export function TeachingContact() {
  useEffect(() => { document.title = "Teaching Inquiry — Parker Gawryletz"; }, []);
  return (
    <SubPageShell title="Begin the conversation." subtitle="Teaching Inquiry">
      <div className="max-w-xl mx-auto">
        <form className="space-y-fitz-5">
          {["Your Name", "Email", "Phone", "Student Age", "Experience Level"].map((label) => (
            <div key={label}>
              <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground mb-fitz-2">{label}</label>
              <input type="text" className="w-full bg-transparent border-b border-lines focus:border-primary outline-none py-fitz-3 text-foreground transition-colors" />
            </div>
          ))}
          <div>
            <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground mb-fitz-2">What are your goals?</label>
            <textarea rows={4} className="w-full bg-transparent border-b border-lines focus:border-primary outline-none py-fitz-3 text-foreground transition-colors resize-none" />
          </div>
          <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-fantasy-cta text-sm uppercase tracking-[0.18em]">Begin the Conversation.</button>
        </form>
      </div>
    </SubPageShell>
  );
}

export function EventsAbout() {
  useEffect(() => { document.title = "About (Events) — Parker Gawryletz"; }, []);
  return (
    <SubPageShell title="Presence, not performance." subtitle="About Parker">
      <div className="max-w-2xl mx-auto text-muted-foreground space-y-fitz-5">
        <p>Every gathered room carries its own emotional weight. Whether it's a corporate gala, a private dinner, or a memorial service, I bring the same devotion to your event that I bring to a wedding ceremony.</p>
        <p>I don't play background music. I listen to the room and respond to its energy — creating a musical conversation between the instrument and the moment.</p>
      </div>
    </SubPageShell>
  );
}

export function EventsPricing() {
  useEffect(() => { document.title = "Event Pricing — Parker Gawryletz"; }, []);
  return (
    <SubPageShell title="Three presences." subtitle="Event Investment">
      <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-fitz-6">
        {[
          { name: "Ambient", price: "From $800", desc: "Background piano for cocktails, dinners, and receptions." },
          { name: "Featured", price: "From $1,500", desc: "Curated performance integrated into your programme." },
          { name: "Immersive", price: "From $3,000", desc: "Full evening coverage from arrival to farewell." },
        ].map((tier) => (
          <div key={tier.name} className="p-fitz-6 border border-lines rounded-lg">
            <h3 className="text-foreground">{tier.name}</h3>
            <p className="font-display text-3xl font-light text-primary mt-fitz-2">{tier.price}</p>
            <p className="text-muted-foreground mt-fitz-3">{tier.desc}</p>
          </div>
        ))}
      </div>
    </SubPageShell>
  );
}

export function EventsContact() {
  useEffect(() => { document.title = "Event Inquiry — Parker Gawryletz"; }, []);
  return (
    <SubPageShell title="Discuss your event." subtitle="Event Inquiry">
      <div className="max-w-xl mx-auto">
        <form className="space-y-fitz-5">
          {["Your Name", "Organization", "Email", "Phone", "Event Date", "Venue / Location"].map((label) => (
            <div key={label}>
              <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground mb-fitz-2">{label}</label>
              <input type="text" className="w-full bg-transparent border-b border-lines focus:border-primary outline-none py-fitz-3 text-foreground transition-colors" />
            </div>
          ))}
          <div>
            <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground mb-fitz-2">Tell me about your event</label>
            <textarea rows={4} className="w-full bg-transparent border-b border-lines focus:border-primary outline-none py-fitz-3 text-foreground transition-colors resize-none" />
          </div>
          <button type="submit" className="px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-fantasy-cta text-sm uppercase tracking-[0.18em]">Discuss Your Event.</button>
        </form>
      </div>
    </SubPageShell>
  );
}
