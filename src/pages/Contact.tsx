import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { HeroStrip } from "@/components/HeroStrip";
import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/animation";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => { document.title = "Contact — Parker Gawryletz"; }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        <HeroStrip title="Tell me your story." subtitle="Get in Touch" height="h-[40vh]" />

        <Section>
          <div className="max-w-xl mx-auto">
            <div className="p-fitz-6 md:p-fitz-7 rounded-lg border border-lines/20 bg-card/50 backdrop-blur-sm">
              <form className="space-y-fitz-5">
                {[
                  { label: "Your Name", type: "text" },
                  { label: "Email Address", type: "email" },
                  { label: "Phone", type: "tel" },
                  { label: "Wedding Date (if applicable)", type: "date" },
                ].map((field) => (
                  <RevealOnScroll key={field.label}>
                    <div>
                      <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground mb-fitz-2">{field.label}</label>
                      <input type={field.type} className="w-full bg-transparent border-b border-lines/50 focus:border-primary outline-none py-fitz-3 text-foreground transition-colors duration-[250ms]" />
                    </div>
                  </RevealOnScroll>
                ))}
                <RevealOnScroll>
                  <div>
                    <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground mb-fitz-2">Tell me about your moment</label>
                    <textarea rows={5} className="w-full bg-transparent border-b border-lines/50 focus:border-primary outline-none py-fitz-3 text-foreground transition-colors duration-[250ms] resize-none" />
                  </div>
                </RevealOnScroll>
                <RevealOnScroll>
                  <button type="submit" className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-fantasy-cta hover:shadow-fantasy-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.18em]">
                    Hold My Date.
                  </button>
                </RevealOnScroll>
              </form>
            </div>

            <RevealOnScroll delay={200}>
              <div className="flex justify-center gap-fitz-7 mt-fitz-7 text-center">
                {[
                  { stat: "< 24hr", label: "Response time" },
                  { stat: "100%", label: "Reply rate" },
                  { stat: "Free", label: "Initial consultation" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="font-display text-xl text-primary">{s.stat}</p>
                    <p className="text-xs text-muted-foreground uppercase tracking-[0.12em] mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
            </RevealOnScroll>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
