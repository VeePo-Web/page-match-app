import { useVigilSequence } from "@/hooks/useVigilSequence";
import heroWeddings from "@/assets/hero-weddings.jpg";

export function WeddingsHero() {
  const { isStillness, isKindling, isRevealing, isComplete } = useVigilSequence();

  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden" data-theme="death">
      {/* Layer 0: Void */}
      <div className="absolute inset-0 bg-rich-black" />

      {/* Layer 1: Ken Burns image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroWeddings})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: (isRevealing || isComplete) ? 0.1 : 0,
          filter: "brightness(0.75) contrast(1.08) saturate(0.9)",
          animation: "ken-burns 30s ease-in-out infinite alternate",
          willChange: "transform",
          transition: "opacity 1200ms cubic-bezier(0.22, 0.61, 0.36, 1)",
        }}
        aria-hidden="true"
      />

      {/* Layer 2: Film grain */}
      <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.12 }} aria-hidden="true" />

      {/* Layer 2b: Warm fog */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse at 50% 60%, hsl(var(--vow-yellow) / 0.03), transparent 60%)" }}
        aria-hidden="true"
      />

      {/* Layer 3: Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse at center, transparent 25%, hsl(var(--rich-black) / 0.8) 100%)" }}
        aria-hidden="true"
      />

      {/* Vigil Flame */}
      <div
        className={`absolute inset-0 flex items-center justify-center pointer-events-none z-[5] transition-opacity duration-1000 ${
          isStillness || isKindling ? "opacity-100" : "opacity-0"
        }`}
        aria-hidden="true"
      >
        <div
          className="w-1.5 h-2.5 rounded-full"
          style={{
            background: "radial-gradient(circle at center, hsl(var(--vow-yellow)) 0%, hsl(var(--flame-core)) 50%, transparent 100%)",
            boxShadow: "0 0 24px hsl(var(--vow-yellow) / 0.7), 0 0 48px hsl(var(--flame-core) / 0.35)",
            animation: (isStillness || isKindling) ? "flame-breathe 4s ease-in-out infinite" : undefined,
          }}
        />
      </div>

      {/* Layer 4: Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p
          className="overline mb-fitz-5"
          style={{
            opacity: (isRevealing || isComplete) ? 1 : 0,
            transform: (isRevealing || isComplete) ? "translateY(0)" : "translateY(12px)",
            transition: "opacity 800ms cubic-bezier(0.22, 0.61, 0.36, 1), transform 800ms cubic-bezier(0.22, 0.61, 0.36, 1)",
            transitionDelay: (isRevealing || isComplete) ? "0ms" : "0ms",
          }}
        >
          Wedding Pianist
        </p>
        <h1
          className="text-foreground mx-auto"
          style={{
            opacity: (isRevealing || isComplete) ? 1 : 0,
            transform: (isRevealing || isComplete) ? "translateY(0)" : "translateY(16px)",
            transition: "opacity 900ms cubic-bezier(0.22, 0.61, 0.36, 1), transform 900ms cubic-bezier(0.22, 0.61, 0.36, 1)",
            transitionDelay: (isRevealing || isComplete) ? "400ms" : "0ms",
          }}
        >
          I carry your vows so they can carry your guests.
        </h1>
        <div
          className="chapter-rule mt-fitz-5"
          style={{
            opacity: (isRevealing || isComplete) ? 1 : 0,
            transform: (isRevealing || isComplete) ? "scaleX(1)" : "scaleX(0)",
            transition: "opacity 700ms ease, transform 700ms cubic-bezier(0.22, 0.61, 0.36, 1)",
            transitionDelay: (isRevealing || isComplete) ? "800ms" : "0ms",
          }}
        />
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        style={{
          opacity: isComplete ? 1 : 0,
          transition: "opacity 700ms ease",
          transitionDelay: isComplete ? "1200ms" : "0ms",
        }}
      >
        <div className="w-[1px] h-8 bg-primary/30 mx-auto animate-pulse" />
      </div>

      <span className="sr-only">
        The vigil — a held breath before the ceremony begins. Parker Gawryletz, wedding pianist serving Calgary to Banff.
      </span>
    </section>
  );
}
