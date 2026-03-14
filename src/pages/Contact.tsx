import { MinimalHeader } from "@/components/MinimalHeader";
import { Footer } from "@/components/Footer";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => { document.title = "Contact — Parker Gawryletz"; }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <MinimalHeader />
      <main>
        <section className="relative h-[40vh] flex items-center justify-center overflow-hidden" data-theme="death">
          <div className="absolute inset-0 bg-[hsl(var(--rich-black))]" />
          <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.12 }} aria-hidden="true" />
          <div className="relative z-10 text-center px-6">
            <p className="overline mb-fitz-5">Get in Touch</p>
            <h1 className="text-foreground mx-auto">Tell me your story.</h1>
          </div>
        </section>
        <section className="container mx-auto px-fitz-4 md:px-fitz-6 py-fitz-9 md:py-fitz-10">
          <div className="max-w-xl mx-auto">
            <form className="space-y-fitz-5">
              {[
                { label: "Your Name", type: "text", name: "name" },
                { label: "Email Address", type: "email", name: "email" },
                { label: "Phone", type: "tel", name: "phone" },
                { label: "Wedding Date (if applicable)", type: "date", name: "date" },
              ].map((field) => (
                <div key={field.name}>
                  <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground mb-fitz-2">{field.label}</label>
                  <input type={field.type} name={field.name} className="w-full bg-transparent border-b border-lines focus:border-primary outline-none py-fitz-3 text-foreground transition-colors duration-[250ms]" />
                </div>
              ))}
              <div>
                <label className="block text-xs uppercase tracking-[0.22em] text-muted-foreground mb-fitz-2">Tell me about your moment</label>
                <textarea name="message" rows={5} className="w-full bg-transparent border-b border-lines focus:border-primary outline-none py-fitz-3 text-foreground transition-colors duration-[250ms] resize-none" />
              </div>
              <button type="submit" className="inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-fantasy-cta hover:shadow-fantasy-cta-hover transition-all duration-[180ms] text-sm uppercase tracking-[0.18em]">
                Hold My Date.
              </button>
            </form>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
