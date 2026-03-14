import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function Listen() {
  useEffect(() => { document.title = "Listen — Parker Gawryletz"; }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden" data-theme="death">
          <div className="absolute inset-0 bg-[hsl(var(--rich-black))]" />
          <div className="relative z-10 text-center px-6">
            <p className="overline mb-fitz-5">The Listening Room</p>
            <h1 className="text-foreground mx-auto">Hear the ceremony.</h1>
          </div>
        </section>
        <section className="container mx-auto px-fitz-4 md:px-fitz-6 py-fitz-9 md:py-fitz-10">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-muted-foreground">Audio samples coming soon. In the meantime, reach out and I'll share recordings that match your ceremony vision.</p>
            <a href="/contact" className="inline-flex items-center mt-fitz-7 px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-fantasy-cta transition-all duration-[180ms] text-sm uppercase tracking-[0.18em]">
              Request Samples
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
