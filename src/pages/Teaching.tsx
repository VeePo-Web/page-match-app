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

export default function Teaching() {
  useEffect(() => { document.title = "Piano Lessons — Parker Gawryletz"; }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        <section className="relative h-[70vh] flex items-center justify-center overflow-hidden" data-theme="death">
          <div className="absolute inset-0 bg-[hsl(var(--rich-black))]" />
          <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.12 }} aria-hidden="true" />
          <div className="relative z-10 text-center px-6">
            <p className="overline mb-fitz-5">Piano Lessons</p>
            <h1 className="text-foreground mx-auto">Learn the instrument that speaks when words fall short.</h1>
          </div>
        </section>

        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <p className="overline mb-fitz-3">The Approach</p>
            <h2 className="mx-auto">Music is not a skill. It is a language.</h2>
            <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
              I teach piano the way I play it — with intention, patience, and deep respect for the student's own musical voice. Whether you're a complete beginner or a returning player, my lessons are built around who you are and what you want to say through music.
            </p>
          </div>
        </Section>

        <Section dark>
          <div className="max-w-2xl mx-auto text-center">
            <p className="overline mb-fitz-3">Three Pillars</p>
            <h2 className="mx-auto">Technique. Expression. Devotion.</h2>
            <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
              Every lesson balances technical foundations with expressive musicality. You'll develop strong fingers and a stronger ear — learning not just how to play, but how to listen.
            </p>
          </div>
        </Section>

        <Section>
          <div className="max-w-2xl mx-auto text-center">
            <p className="overline mb-fitz-3">Investment</p>
            <h2 className="mx-auto">$60 per hour.</h2>
            <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
              Weekly lessons in Calgary. All ages, all levels. Each session is tailored to your goals and progress.
            </p>
            <a href="/teaching/contact" className="inline-flex items-center mt-fitz-7 px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-fantasy-cta hover:shadow-fantasy-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.18em]">
              Begin the Conversation
            </a>
          </div>
        </Section>
      </main>
      <Footer />
    </div>
  );
}
