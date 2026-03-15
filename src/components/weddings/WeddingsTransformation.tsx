import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import transformationBg from "@/assets/weddings-transformation-bg.jpg";

const fears = [
  "What if the music sounds like every other ceremony your guests have sat through",
  "What if the back row never hears the song you chose for your walk down",
  "What if no one asks what was playing when you knew",
  "What if the person behind the piano treats your ceremony like another Saturday",
];

const resolutions = [
  "I ask what was playing when you knew — and I build your ceremony from there",
  "Your walk-down arrangement is written note by note — for the two of you, and no one else",
  "A printed ceremony plan lands in your inbox before you think to ask for one",
  "I stay until the last guest has gone and the final note has found its silence",
];

export function WeddingsTransformation() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <section
      id="transformation"
      ref={sectionRef as React.RefObject<HTMLElement>}
      className="relative overflow-hidden"
      aria-label="The Transformation — fears honoured, promises made"
      style={{ background: "hsl(var(--cream))" }}
    >
      {/* Background image */}
      <img
        src={transformationBg}
        alt=""
        aria-hidden="true"
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover pointer-events-none"
        style={{ opacity: 0.04, filter: "brightness(0.8) saturate(0.7)", animation: "ken-burns 35s ease-in-out infinite alternate" }}
        loading="lazy"
        decoding="async"
      />

      <div className="relative z-10 mx-auto px-6 md:px-8 py-fitz-9 md:py-fitz-10">
        {/* Fears */}
        <div className="max-w-[640px] mx-auto mb-16 md:mb-24">
          <p className={cn("overline mb-8 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}>
            The Transformation
          </p>
          <h2 className={cn("font-display text-2xl md:text-3xl font-light tracking-tight text-foreground mb-8 md:mb-12 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: isVisible ? "120ms" : "0ms" }}>
            The questions no one else thinks to ask
          </h2>
          <div className="space-y-8 md:space-y-10">
            {fears.map((fear, i) => (
              <p
                key={i}
                className={cn("font-display text-lg md:text-xl font-light italic leading-relaxed text-muted-foreground transition-all duration-700", isVisible ? "opacity-[0.7] translate-y-0" : "opacity-0 translate-y-3")}
                style={{ transitionDelay: isVisible ? `${280 + i * 120}ms` : "0ms" }}
              >
                {fear}
              </p>
            ))}
          </div>
        </div>

        {/* Diamond Threshold */}
        <div className="relative flex flex-col items-center my-12 md:my-16" aria-hidden="true">
          <div className={cn("w-[1px] h-[40px] mb-2 transition-all duration-700", isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0")} style={{ background: "linear-gradient(to bottom, transparent, hsl(var(--gold) / 0.3))", transformOrigin: "top", transitionDelay: isVisible ? "750ms" : "0ms" }} />
          <div className="flex items-center justify-center w-full">
            <div className={cn("h-[1px] flex-1 max-w-[160px] origin-right transition-transform duration-700", isVisible ? "scale-x-100" : "scale-x-0")} style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.4))", transitionDelay: isVisible ? "800ms" : "0ms" }} />
            <div className="mx-4">
              <BreathingDiamond />
            </div>
            <div className={cn("h-[1px] flex-1 max-w-[160px] origin-left transition-transform duration-700", isVisible ? "scale-x-100" : "scale-x-0")} style={{ background: "linear-gradient(90deg, hsl(var(--gold) / 0.4), transparent)", transitionDelay: isVisible ? "800ms" : "0ms" }} />
          </div>
          <div className={cn("w-[1px] h-[40px] mt-2 transition-all duration-700", isVisible ? "opacity-100 scale-y-100" : "opacity-0 scale-y-0")} style={{ background: "linear-gradient(to top, transparent, hsl(var(--gold) / 0.3))", transformOrigin: "bottom", transitionDelay: isVisible ? "750ms" : "0ms" }} />
        </div>

        {/* Resolutions */}
        <div className="max-w-[600px] mx-auto mt-16 md:mt-24">
          <h3 className={cn("font-display text-2xl md:text-3xl font-light tracking-tight text-foreground mb-8 md:mb-12 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: isVisible ? "1000ms" : "0ms" }}>
            So here is what I do about it
          </h3>
          <div className="space-y-6 md:space-y-8">
            {resolutions.map((resolution, i) => (
              <div
                key={i}
                className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3")}
                style={{ borderLeft: "2px solid hsl(var(--gold) / 0.3)", padding: "0 0 0 24px", transitionDelay: isVisible ? `${1100 + i * 120}ms` : "0ms" }}
              >
                <p className="font-sans text-base md:text-lg leading-relaxed text-foreground font-light">
                  <span className="inline-block mr-2" style={{ color: "hsl(var(--gold) / 0.6)" }} aria-hidden="true">—</span>
                  {resolution}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
