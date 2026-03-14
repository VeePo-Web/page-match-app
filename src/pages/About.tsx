import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function About() {
  useEffect(() => { document.title = "About — Parker Gawryletz"; }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        <section className="relative h-[60vh] flex items-center justify-center overflow-hidden" data-theme="death">
          <div className="absolute inset-0 bg-[hsl(var(--rich-black))]" />
          <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.12 }} aria-hidden="true" />
          <div className="relative z-10 text-center px-6">
            <p className="overline mb-fitz-5">About</p>
            <h1 className="text-foreground mx-auto">The witness behind the keys.</h1>
          </div>
        </section>
        <section className="container mx-auto px-fitz-4 md:px-fitz-6 py-fitz-9 md:py-fitz-10">
          <div className="max-w-2xl mx-auto">
            <p className="p-lead text-muted-foreground">
              I'm Parker Gawryletz, a ceremony pianist based in Calgary, serving couples and events across the Canadian Rockies — from Cochrane to Canmore to Banff.
            </p>
            <p className="mt-fitz-5 text-muted-foreground">
              I don't just play music at events. I carry the emotional weight of the moment and translate it into sound. Every ceremony I play receives months of devoted preparation — learning your story, your songs, your silence — so that when the doors open, the room already knows what your hearts feel.
            </p>
            <p className="mt-fitz-5 text-muted-foreground">
              I accept only 5–10 weddings per year. This isn't exclusivity for its own sake — it's a promise that your ceremony will receive my complete attention.
            </p>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
