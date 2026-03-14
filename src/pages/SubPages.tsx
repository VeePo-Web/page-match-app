import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/animation";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import { CredentialStrip } from "@/components/CredentialStrip";
import { ContactWizard } from "@/components/contact/ContactWizard";
import { Link, useLocation } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

function useSubPageMeta(meta: { title: string; description: string }) {
  const { pathname } = useLocation();
  usePageMeta({
    ...meta,
    canonical: `${window.location.origin}${pathname}`,
    ogImage: `${window.location.origin}/og-image.jpg`,
  });
}

/* ─── Shared Sub-page Shell ─── */
function SubPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main id="main-content">{children}</main>
      <Footer />
      <MobileStickyBar />
    </div>
  );
}

/* ═══════════════════════════════════════════════
   PRICING PAGES
   ═══════════════════════════════════════════════ */

export function WeddingsPricing() {
  useSubPageMeta({ title: "Wedding Pricing — Parker Gawryletz", description: "Wedding piano packages from $650. Custom arrangements, professional equipment, and travel included." });
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
              { name: "The Vow", price: "$650", items: ["Ceremony piano (processional → recessional)", "One planning consultation", "Custom arrangements included", "Professional digital piano provided"] },
              { name: "The Hour", price: "$750", items: ["Everything in The Vow", "Cocktail hour coverage (60 min)", "Extended song consultation", "On-site sound check"], isChosen: true },
              { name: "The Story", price: "$1,200", items: ["Everything in The Hour", "Rehearsal attendance", "Dinner music", "Last dance", "Full-day dedication"] },
            ].map((tier, i) => (
              <RevealOnScroll key={tier.name} delay={i * 100}>
                <div className={`p-fitz-6 rounded-md ${tier.isChosen ? 'border border-gold/20' : 'border border-lines/20'}`}>
                  {tier.isChosen && <span className="inline-block text-[10px] uppercase tracking-[0.2em] font-sans mb-fitz-3" style={{ color: "hsl(var(--gold))" }}>Most Chosen</span>}
                  <h3 className="text-foreground">{tier.name}</h3>
                  <p className="font-display text-3xl font-light mt-fitz-2" style={{ color: "hsl(var(--gold))" }}>{tier.price}</p>
                  <ul className="mt-fitz-5 space-y-fitz-2 text-muted-foreground text-sm font-light">
                    {tier.items.map((item) => <li key={item}>• {item}</li>)}
                  </ul>
                </div>
              </RevealOnScroll>
            ))}
          </div>

          {/* Add-ons */}
          <RevealOnScroll delay={400}>
            <div className="mt-fitz-9 border-t border-lines/20 pt-fitz-7">
              <p className="overline mb-fitz-5 text-center">Add-Ons</p>
              <div className="grid md:grid-cols-3 gap-fitz-5 text-center">
                {[
                  { name: "Custom Song", price: "$75–$150", desc: "A unique arrangement of any song you choose" },
                  { name: "Short-Notice Booking", price: "+$250", desc: "For bookings within 30 days" },
                  { name: "Travel Beyond Banff", price: "Quoted", desc: "Per-km rate for venues beyond the Banff corridor" },
                ].map((addon) => (
                  <div key={addon.name} className="p-fitz-4">
                    <p className="font-display text-base text-foreground">{addon.name}</p>
                    <p className="text-sm mt-1" style={{ color: "hsl(var(--gold))" }}>{addon.price}</p>
                    <p className="text-xs text-muted-foreground mt-2">{addon.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </RevealOnScroll>

          {/* Reassurance */}
          <RevealOnScroll delay={500}>
            <p className="text-center text-sm text-muted-foreground mt-fitz-7 italic font-display">
              You can switch tiers up to two weeks before your ceremony.
            </p>
          </RevealOnScroll>
        </div>
      </Section>

      {/* Investment philosophy */}
      <Section>
        <div className="max-w-2xl mx-auto">
          <RevealOnScroll>
            <p className="overline mb-fitz-3">Investment Philosophy</p>
            <p className="text-muted-foreground leading-relaxed">
              These prices reflect months of preparation, not just hours of playing. When you invest in ceremony piano, you're investing in someone who will learn your love story, arrange your songs by hand, arrive early, stay late, and carry the emotional weight of your most important day with the care it deserves.
            </p>
          </RevealOnScroll>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <BreathingDiamond className="mb-fitz-5" />
            <h2 className="mx-auto">Ready to hold your date?</h2>
            <p className="p-lead mt-fitz-3 mx-auto text-muted-foreground">I accept only 5–10 weddings per year.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <Link to="/weddings/contact" className="inline-flex items-center mt-fitz-7 px-8 py-3 bg-gold text-sage-deep rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]">
              Hold My Date.
            </Link>
          </RevealOnScroll>
        </div>
      </Section>
    </SubPageLayout>
  );
}

export function TeachingPricing() {
  useSubPageMeta({ title: "Lesson Pricing — Parker Gawryletz", description: "Piano lessons in Calgary. $60/hr. All ages. Technique, theory, and expression." });
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
        </div>
      </Section>

      <Section dark>
        <div className="max-w-2xl mx-auto">
          <RevealOnScroll>
            <p className="overline mb-fitz-3">What a Typical Lesson Looks Like</p>
            <p className="text-muted-foreground leading-relaxed">
              We begin with a brief warm-up — scales, finger exercises, or a review of last week's work. Then we move into the core of the lesson: learning new pieces, refining technique, or exploring theory. The final minutes are spent setting clear goals for the week ahead. Every lesson is tailored to you — no rigid curriculum.
            </p>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <p className="text-sm text-muted-foreground mt-fitz-5 italic font-display">
              RCM examination preparation available upon request.
            </p>
          </RevealOnScroll>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <Link to="/teaching/contact" className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]">
              Begin the Conversation.
            </Link>
          </RevealOnScroll>
        </div>
      </Section>
    </SubPageLayout>
  );
}

export function EventsPricing() {
  useSubPageMeta({ title: "Event Pricing — Parker Gawryletz", description: "Live piano for corporate galas, private dinners, and memorial services. Custom quotes." });
  return (
    <SubPageLayout>
      <HeroStrip title="Three presences." subtitle="Event Investment" height="h-[40vh]" />
      <Section dark>
        <div className="max-w-4xl mx-auto">
          <RevealOnScroll>
            <p className="overline mb-fitz-3 text-center">Every Presence Includes</p>
            <ul className="text-muted-foreground space-y-fitz-2 mt-fitz-5 text-sm font-light text-center max-w-lg mx-auto mb-fitz-9">
              {["Pre-event consultation & repertoire curation", "Professional digital piano & sound system", "Real-time room-reading & dynamic adjustment", "Setup and teardown handled seamlessly"].map((item) => (
                <li key={item}>• {item}</li>
              ))}
            </ul>
          </RevealOnScroll>
          <div className="grid md:grid-cols-3 gap-fitz-6">
            {[
              { name: "The Moment", duration: "1 hour", desc: "A single set for the defining moment of your event — an opening, a toast, a tribute." },
              { name: "The Evening", duration: "2–3 hours", desc: "Curated sets that shape the arc of your evening — from arrival through dinner.", isChosen: true },
              { name: "The Full Occasion", duration: "4+ hours", desc: "Complete musical presence from first guest to final farewell." },
            ].map((tier, i) => (
              <RevealOnScroll key={tier.name} delay={i * 100}>
                <div className={`p-fitz-6 border rounded-md ${tier.isChosen ? 'border-gold/20' : 'border-lines/20'}`}>
                  <h3 className="text-foreground">{tier.name}</h3>
                  <p className="font-display text-2xl font-light mt-fitz-2" style={{ color: "hsl(var(--gold))" }}>{tier.duration}</p>
                  <p className="text-muted-foreground mt-fitz-3 text-sm font-light">{tier.desc}</p>
                  {tier.isChosen && <span className="inline-block mt-fitz-3 text-xs uppercase tracking-[0.16em]" style={{ color: "hsl(var(--gold))" }}>Most Selected</span>}
                </div>
              </RevealOnScroll>
            ))}
          </div>
          <RevealOnScroll delay={400}>
            <p className="text-center text-sm text-muted-foreground mt-fitz-7 max-w-md mx-auto">After our conversation, I provide a clear quote tailored to your event's specific needs.</p>
          </RevealOnScroll>
        </div>
      </Section>

      {/* Comparison */}
      <Section>
        <div className="max-w-3xl mx-auto">
          <RevealOnScroll>
            <p className="overline mb-fitz-3 text-center">The Difference</p>
            <h2 className="text-center mx-auto mb-fitz-7">Why live piano?</h2>
          </RevealOnScroll>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-lines/30">
                  <th className="text-left py-fitz-3 font-sans font-normal text-muted-foreground uppercase tracking-[0.12em] text-xs" />
                  <th className="text-center py-fitz-3 font-sans font-normal text-muted-foreground uppercase tracking-[0.12em] text-xs">Playlist</th>
                  <th className="text-center py-fitz-3 font-sans font-normal text-muted-foreground uppercase tracking-[0.12em] text-xs">DJ</th>
                  <th className="text-center py-fitz-3 font-sans font-normal uppercase tracking-[0.12em] text-xs" style={{ color: "hsl(var(--sage))" }}>Live Piano</th>
                </tr>
              </thead>
              <tbody className="text-muted-foreground">
                {[
                  ["Reads the room", "✗", "~", "✓"],
                  ["Adjusts in real time", "✗", "~", "✓"],
                  ["Elegant atmosphere", "~", "✗", "✓"],
                  ["No equipment clutter", "✓", "✗", "✓"],
                  ["Ceremony appropriate", "~", "✗", "✓"],
                ].map(([label, ...vals]) => (
                  <tr key={label} className="border-b border-lines/15">
                    <td className="py-fitz-3 text-foreground">{label}</td>
                    {vals.map((v, i) => (
                      <td key={i} className="text-center py-fitz-3">{v}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Trust reassurance */}
          <RevealOnScroll delay={200}>
            <p className="text-center text-sm text-muted-foreground mt-fitz-7 italic font-display">
              Every quote is transparent. No hidden fees, no surprises.
            </p>
          </RevealOnScroll>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <BreathingDiamond className="mb-fitz-5" />
            <h2 className="mx-auto">Let's discuss your event.</h2>
            <p className="p-lead mt-fitz-3 mx-auto text-muted-foreground">Every great event starts with a conversation.</p>
          </RevealOnScroll>
          <RevealOnScroll delay={120}>
            <Link to="/events/contact" className="inline-flex items-center mt-fitz-7 px-8 py-3 bg-gold text-sage-deep rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]">
              Request a Proposal.
            </Link>
          </RevealOnScroll>
        </div>
      </Section>
    </SubPageLayout>
  );
}

/* ═══════════════════════════════════════════════
   ABOUT PAGES
   ═══════════════════════════════════════════════ */

export function WeddingsAbout() {
  useSubPageMeta({ title: "About (Weddings) — Parker Gawryletz", description: "The witness behind your ceremony. 5–10 weddings per year, Calgary to Banff." });
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

      {/* Philosophy pull quote */}
      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <RevealOnScroll>
            <div className="editorial-rule mb-fitz-7" />
            <blockquote className="font-display text-xl md:text-2xl font-light italic leading-snug" style={{ color: "hsl(var(--warm-white) / 0.85)" }}>
              "Your ceremony is not a performance. It is a covenant — and the music must honour that distinction."
            </blockquote>
            <div className="editorial-rule mt-fitz-7" />
          </RevealOnScroll>
        </div>
      </Section>

      <Section>
        <CredentialStrip />
        <div className="max-w-2xl mx-auto text-center mt-fitz-7">
          <RevealOnScroll>
            <Link to="/weddings/contact" className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]">Hold My Date.</Link>
          </RevealOnScroll>
        </div>
      </Section>
    </SubPageLayout>
  );
}

export function TeachingAbout() {
  useSubPageMeta({ title: "About (Teaching) — Parker Gawryletz", description: "Piano instruction with intention, patience, and respect for each student's voice." });
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
          <RevealOnScroll delay={240}>
            <p className="text-muted-foreground leading-relaxed mt-fitz-5 font-light">Whether you're a complete beginner or preparing for RCM examinations, I adapt every lesson to meet you where you are — and take you where you want to go.</p>
          </RevealOnScroll>
        </div>
      </Section>

      <Section dark>
        <div className="max-w-3xl mx-auto text-center">
          <RevealOnScroll>
            <div className="editorial-rule mb-fitz-7" />
            <blockquote className="font-display text-xl md:text-2xl font-light italic leading-snug" style={{ color: "hsl(var(--warm-white) / 0.85)" }}>
              "The goal isn't perfection. It's expression."
            </blockquote>
            <div className="editorial-rule mt-fitz-7" />
          </RevealOnScroll>
        </div>
      </Section>

      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <RevealOnScroll>
            <Link to="/teaching/contact" className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]">Begin the Conversation.</Link>
          </RevealOnScroll>
        </div>
      </Section>
    </SubPageLayout>
  );
}

export function EventsAbout() {
  useSubPageMeta({ title: "About (Events) — Parker Gawryletz", description: "Presence, not performance. Live piano for every gathered room." });
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
        <div className="max-w-3xl mx-auto text-center">
          <RevealOnScroll>
            <div className="editorial-rule mb-fitz-7" />
            <blockquote className="font-display text-xl md:text-2xl font-light italic leading-snug" style={{ color: "hsl(var(--warm-white) / 0.85)" }}>
              "I read the room before I play a note."
            </blockquote>
            <div className="editorial-rule mt-fitz-7" />
          </RevealOnScroll>
        </div>
      </Section>

      <Section>
        <CredentialStrip />
        <div className="max-w-2xl mx-auto text-center mt-fitz-7">
          <RevealOnScroll>
            <Link to="/events/contact" className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.12em]">Discuss Your Event.</Link>
          </RevealOnScroll>
        </div>
      </Section>
    </SubPageLayout>
  );
}

/* ═══════════════════════════════════════════════
   CONTACT PAGES — Multi-Step Wizard
   ═══════════════════════════════════════════════ */

const weddingSteps = [
  {
    title: "About You",
    fields: [
      { label: "Your Name", type: "text" as const, required: true },
      { label: "Partner's Name", type: "text" as const },
      { label: "Email", type: "email" as const, required: true },
      { label: "Phone", type: "tel" as const },
    ],
  },
  {
    title: "Ceremony Details",
    fields: [
      { label: "Wedding Date", type: "date" as const },
      { label: "Venue", type: "text" as const },
      { label: "Guest Count", type: "text" as const, placeholder: "Approximate" },
      { label: "Ceremony Vibe", options: ["Intimate", "Grand", "Joyful", "Reflective"] },
    ],
  },
  {
    title: "Your Story",
    fields: [
      { label: "Song Requests", type: "text" as const, placeholder: "Any songs that are meaningful to you" },
      { label: "Tell me about your ceremony", type: "textarea" as const },
    ],
  },
];

const teachingSteps = [
  {
    title: "About You",
    fields: [
      { label: "Your Name", type: "text" as const, required: true },
      { label: "Email", type: "email" as const, required: true },
      { label: "Phone", type: "tel" as const },
    ],
  },
  {
    title: "Student Details",
    fields: [
      { label: "Student Age", type: "text" as const },
      { label: "Experience Level", options: ["Beginner", "Intermediate", "Advanced", "RCM Prep"] },
    ],
  },
  {
    title: "Your Goals",
    fields: [
      { label: "What are your goals?", type: "textarea" as const },
    ],
  },
];

const eventsSteps = [
  {
    title: "About You",
    fields: [
      { label: "Your Name", type: "text" as const, required: true },
      { label: "Organization", type: "text" as const },
      { label: "Email", type: "email" as const, required: true },
      { label: "Phone", type: "tel" as const },
    ],
  },
  {
    title: "Event Details",
    fields: [
      { label: "Event Date", type: "date" as const },
      { label: "Venue / Location", type: "text" as const },
      { label: "Event Type", options: ["Corporate", "Private Dinner", "Memorial", "Other"] },
    ],
  },
  {
    title: "Your Vision",
    fields: [
      { label: "Tell me about your event", type: "textarea" as const },
    ],
  },
];

export function WeddingsContact() {
  useSubPageMeta({ title: "Wedding Inquiry — Parker Gawryletz", description: "Hold your wedding date. Inquire about ceremony piano for your Calgary or Banff wedding." });
  return (
    <SubPageLayout>
      <HeroStrip title="Hold my date." subtitle="Wedding Inquiry" height="h-[40vh]" />
      <Section>
        <ContactWizard steps={weddingSteps} ctaLabel="Hold My Date." />
      </Section>
    </SubPageLayout>
  );
}

export function TeachingContact() {
  useSubPageMeta({ title: "Teaching Inquiry — Parker Gawryletz", description: "Begin piano lessons in Calgary. All ages and levels welcome." });
  return (
    <SubPageLayout>
      <HeroStrip title="Begin the conversation." subtitle="Teaching Inquiry" height="h-[40vh]" />
      <Section>
        <ContactWizard steps={teachingSteps} ctaLabel="Begin the Conversation." />
      </Section>
    </SubPageLayout>
  );
}

export function EventsContact() {
  usePageMeta({ title: "Event Inquiry — Parker Gawryletz", description: "Discuss live piano for your corporate event, private dinner, or memorial service." });
  return (
    <SubPageLayout>
      <HeroStrip title="Discuss your event." subtitle="Event Inquiry" height="h-[40vh]" />
      <Section>
        <ContactWizard steps={eventsSteps} ctaLabel="Discuss Your Event." />
      </Section>
    </SubPageLayout>
  );
}
