import { Section } from "@/components/Section";
import { RevealOnScroll } from "@/components/animation";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import processBg from "@/assets/weddings-process-bg.jpg";

export function WeddingsProcess() {
  return (
    <Section dark id="process" backgroundImage={processBg}>
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

        <RevealOnScroll delay={360}>
          <BreathingDiamond className="mt-fitz-7" />
        </RevealOnScroll>
      </div>
    </Section>
  );
}
