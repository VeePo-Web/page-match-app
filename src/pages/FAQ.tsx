import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/animation";
import { CredentialStrip } from "@/components/CredentialStrip";
import { ScrollProgress } from "@/components/ScrollProgress";
import { BackToTop } from "@/components/BackToTop";
import { MobileStickyBar } from "@/components/MobileStickyBar";
import { usePageMeta } from "@/hooks/usePageMeta";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import faqHeroBg from "@/assets/faq-hero-bg.jpg";
import faqTrustBg from "@/assets/faq-trust-bg.jpg";

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

function AccordionItem({ faq, isOpen, onToggle, onKeyNav }: { faq: typeof faqs[0]; isOpen: boolean; onToggle: () => void; onKeyNav: (e: React.KeyboardEvent) => void }) {
  return (
    <div className="py-fitz-5 border-b border-lines/30">
      <button
        onClick={onToggle}
        onKeyDown={onKeyNav}
        className="w-full font-display text-lg text-left flex justify-between items-center text-foreground accordion-trigger"
        aria-expanded={isOpen}
      >
        {faq.q}
        <motion.span
          className="text-sage ml-4 shrink-0 text-xl"
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2, ease: [0.22, 0.61, 0.36, 1] }}
        >
          +
        </motion.span>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
            className="overflow-hidden"
          >
            <p className="mt-fitz-3 text-muted-foreground leading-relaxed">{faq.a}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQ() {
  const { pathname } = useLocation();

  usePageMeta({
    title: "FAQ — Parker Gawryletz | Wedding Pianist",
    description: "Common questions about wedding piano services, booking, pricing, and logistics. Calgary to Banff.",
    canonical: `${window.location.origin}${pathname}`,
    ogImage: `${window.location.origin}/og-image.jpg`,
  });

  const [active, setActive] = useState<Category>("All");
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const filtered = active === "All" ? faqs : faqs.filter((f) => f.cat === active);

  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <MinimalHeader />
      <BackToTop />
      <main id="main-content">
        <HeroStrip title="Common Questions" subtitle="FAQ" height="h-[40vh]" />

        <Section>
          <div className="max-w-2xl mx-auto">
            {/* Chip filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-fitz-7">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => { setActive(cat); setOpenIndex(null); }}
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

            <div>
              {filtered.map((faq, i) => (
                <RevealOnScroll key={faq.q} delay={i * 40}>
                  <AccordionItem
                    faq={faq}
                    isOpen={openIndex === i}
                    onToggle={() => setOpenIndex(openIndex === i ? null : i)}
                    onKeyNav={(e) => {
                      const triggers = document.querySelectorAll<HTMLButtonElement>('.accordion-trigger');
                      const arr = Array.from(triggers);
                      const idx = arr.indexOf(e.currentTarget as HTMLButtonElement);
                      if (e.key === 'ArrowDown') { e.preventDefault(); arr[(idx + 1) % arr.length]?.focus(); }
                      else if (e.key === 'ArrowUp') { e.preventDefault(); arr[(idx - 1 + arr.length) % arr.length]?.focus(); }
                      else if (e.key === 'Home') { e.preventDefault(); arr[0]?.focus(); }
                      else if (e.key === 'End') { e.preventDefault(); arr[arr.length - 1]?.focus(); }
                    }}
                  />
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
              <Link to="/contact" className="inline-flex items-center mt-fitz-5 text-sm tracking-[0.18em] uppercase text-primary story-link">
                Get in touch
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
