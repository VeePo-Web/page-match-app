import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/animation";
import { CredentialStrip } from "@/components/CredentialStrip";
import { useEffect, useState } from "react";

type Category = "All" | "Ceremony" | "Logistics" | "Pricing";

const faqs: { q: string; a: string; cat: Category }[] = [
  { q: "How far in advance should I book?", a: "I accept only 5–10 weddings per year. Most couples reach out 8–12 months in advance, though I've accommodated shorter timelines when my calendar allows.", cat: "Logistics" },
  { q: "Do you play at outdoor ceremonies?", a: "Absolutely. I bring professional-grade equipment designed for outdoor settings, including weather protection and battery backup. Wind, sun, or shade — your ceremony will sound beautiful.", cat: "Ceremony" },
  { q: "What if it rains?", a: "I carry comprehensive gear for all conditions. If we need to move indoors, I adapt seamlessly. Your ceremony doesn't skip a beat.", cat: "Logistics" },
  { q: "Can you learn a specific song?", a: "Yes. Custom arrangements are included in every package. If it can be played on piano, I will learn it and make it yours.", cat: "Ceremony" },
  { q: "Do you provide your own piano?", a: "I bring a professional digital piano with premium sound. If your venue has a grand piano, I'm happy to play it — I'll arrive early to familiarize myself with the instrument.", cat: "Logistics" },
  { q: "What areas do you serve?", a: "Calgary, Cochrane, Canmore, Banff, and the surrounding Canadian Rockies. Travel fees may apply for venues beyond Banff.", cat: "Logistics" },
  { q: "How long is a typical ceremony set?", a: "Ceremony piano typically covers 30-45 minutes — from guest seating through recessional. Cocktail hour adds another 60 minutes.", cat: "Ceremony" },
  { q: "Do you offer rehearsal attendance?", a: "Yes, included in The Story package. For other packages, rehearsal attendance can be added.", cat: "Pricing" },
  { q: "What happens if you get sick?", a: "In my career, I have never missed a ceremony. However, I maintain a network of trusted pianists who could step in if an emergency arose.", cat: "Logistics" },
  { q: "Do you play during the reception too?", a: "Yes — The Story package covers your full wedding day, from rehearsal through last dance. Dinner music and reception piano are included.", cat: "Pricing" },
];

const categories: Category[] = ["All", "Ceremony", "Logistics", "Pricing"];

export default function FAQ() {
  useEffect(() => { document.title = "FAQ — Parker Gawryletz"; }, []);
  const [active, setActive] = useState<Category>("All");

  const filtered = active === "All" ? faqs : faqs.filter((f) => f.cat === active);

  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        <HeroStrip title="Common Questions" subtitle="FAQ" height="h-[40vh]" />

        <Section>
          <div className="max-w-2xl mx-auto">
            {/* Chip filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-fitz-7">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActive(cat)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-[0.12em] font-sans border transition-all duration-fast ${
                    active === cat
                      ? "bg-sage-deep text-warm-white border-sage-deep"
                      : "bg-transparent text-muted-foreground border-lines/40 hover:border-sage/40"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            <div className="divide-y divide-lines/30">
              {filtered.map((faq, i) => (
                <RevealOnScroll key={faq.q} delay={i * 40}>
                  <details className="py-fitz-5 group">
                    <summary className="font-display text-lg cursor-pointer list-none flex justify-between items-center text-foreground">
                      {faq.q}
                      <span className="text-sage transition-transform duration-[250ms] group-open:rotate-45 ml-4 shrink-0">+</span>
                    </summary>
                    <p className="mt-fitz-3 text-muted-foreground leading-relaxed">{faq.a}</p>
                  </details>
                </RevealOnScroll>
              ))}
            </div>
          </div>
        </Section>

        {/* Trust stack */}
        <Section dark>
          <CredentialStrip items={[
            { stat: "Zero", label: "Missed Ceremonies" },
            { stat: "$4M", label: "Insured" },
            { stat: "< 24hr", label: "Response Time" },
          ]} />
          <div className="max-w-2xl mx-auto text-center mt-fitz-7">
            <RevealOnScroll>
              <p className="text-muted-foreground">Still have questions?</p>
              <a href="/contact" className="inline-flex items-center mt-fitz-5 text-sm tracking-[0.18em] uppercase text-primary story-link">
                Get in touch
              </a>
            </RevealOnScroll>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
