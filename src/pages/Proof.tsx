import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function Proof() {
  useEffect(() => { document.title = "Proof of Craft — Parker Gawryletz"; }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden" data-theme="death">
          <div className="absolute inset-0 bg-[hsl(var(--rich-black))]" />
          <div className="relative z-10 text-center px-6">
            <p className="overline mb-fitz-5">Proof of Craft</p>
            <h1 className="text-foreground mx-auto">The details that protect your moment.</h1>
          </div>
        </section>
        <section className="container mx-auto px-fitz-4 md:px-fitz-6 py-fitz-9 md:py-fitz-10">
          <div className="max-w-3xl mx-auto grid md:grid-cols-3 gap-fitz-7">
            {[
              { title: "SPL Monitoring", desc: "Real-time sound pressure level logging ensures your ceremony meets venue requirements and sounds perfect from every seat." },
              { title: "Triple Redundancy", desc: "Three independent power sources, backup audio routing, and a secondary instrument. Your ceremony never stops." },
              { title: "Full Insurance", desc: "Comprehensive liability and equipment insurance. Every venue requirement met before you ask." },
            ].map((item) => (
              <div key={item.title} className="text-center">
                <h3 className="text-foreground">{item.title}</h3>
                <p className="text-muted-foreground mt-fitz-3">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
