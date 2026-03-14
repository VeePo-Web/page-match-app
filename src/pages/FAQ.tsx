import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function FAQ() {
  useEffect(() => { document.title = "FAQ — Parker Gawryletz"; }, []);
  const faqs = [
    { q: "How far in advance should I book?", a: "I accept only 5–10 weddings per year. Most couples reach out 8–12 months in advance, though I've accommodated shorter timelines when my calendar allows." },
    { q: "Do you play at outdoor ceremonies?", a: "Absolutely. I bring professional-grade equipment designed for outdoor settings, including weather protection and battery backup. Wind, sun, or shade — your ceremony will sound beautiful." },
    { q: "What if it rains?", a: "I carry comprehensive gear for all conditions. If we need to move indoors, I adapt seamlessly. Your ceremony doesn't skip a beat." },
    { q: "Can you learn a specific song?", a: "Yes. Custom arrangements are included in every package. If it can be played on piano, I will learn it and make it yours." },
    { q: "Do you provide your own piano?", a: "I bring a professional digital piano with premium sound. If your venue has a grand piano, I'm happy to play it — I'll arrive early to familiarize myself with the instrument." },
    { q: "What areas do you serve?", a: "Calgary, Cochrane, Canmore, Banff, and the surrounding Canadian Rockies. Travel fees may apply for venues beyond Banff." },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden" data-theme="death">
          <div className="absolute inset-0 bg-[hsl(var(--rich-black))]" />
          <div className="relative z-10 text-center px-6">
            <p className="overline mb-fitz-5">Common Questions</p>
            <h1 className="text-foreground mx-auto">FAQ</h1>
          </div>
        </section>
        <section className="container mx-auto px-fitz-4 md:px-fitz-6 py-fitz-9 md:py-fitz-10">
          <div className="max-w-2xl mx-auto divide-y divide-lines">
            {faqs.map((faq) => (
              <details key={faq.q} className="py-fitz-5 group">
                <summary className="font-display text-lg cursor-pointer list-none flex justify-between items-center text-foreground">
                  {faq.q}
                  <span className="text-primary transition-transform duration-[250ms] group-open:rotate-45">+</span>
                </summary>
                <p className="mt-fitz-3 text-muted-foreground">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
