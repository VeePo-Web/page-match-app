import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/animation";

export function WeddingsProcess() {
  return (
    <Section dark id="process">
      <div className="max-w-2xl mx-auto text-center">
        <RevealOnScroll>
          <p className="overline mb-fitz-3">How I Prepare</p>
        </RevealOnScroll>
        <RevealOnScroll delay={120}>
          <h2 className="mx-auto">Months of devotion for a single moment.</h2>
        </RevealOnScroll>
        <RevealOnScroll delay={240}>
          <p className="p-lead mt-fitz-5 mx-auto text-muted-foreground">
            Every ceremony I play receives months of collaborative preparation. I learn your story, your favourite songs, the way you met, the words you'll say. Then I compose a musical narrative that translates what your hearts feel into what your room will hear.
          </p>
        </RevealOnScroll>

        {/* Golden thread vertical */}
        <div className="mx-auto mt-fitz-7" style={{ width: "1px", height: "60px" }} aria-hidden="true">
          <div className="w-full h-full" style={{ background: "linear-gradient(to bottom, hsl(var(--vow-yellow) / 0.3), transparent)", animation: "golden-thread-breathe 4s ease-in-out infinite" }} />
        </div>
      </div>
    </Section>
  );
}
