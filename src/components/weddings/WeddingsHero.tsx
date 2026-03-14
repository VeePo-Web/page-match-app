import heroWeddings from "@/assets/hero-weddings.jpg";
import { GoldFrame } from "@/components/GoldFrame";
import { BreathingDiamond } from "@/components/BreathingDiamond";

export function WeddingsHero() {
  return (
    <section id="hero" className="relative h-screen flex items-center justify-center overflow-hidden" data-theme="death">
      {/* Background */}
      <div className="absolute inset-0 bg-sage-deep" />

      {/* Ken Burns image */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${heroWeddings})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.12,
          filter: "brightness(0.7) contrast(1.08) saturate(0.8)",
          animation: "ken-burns 30s ease-in-out infinite alternate",
          willChange: "transform",
        }}
        aria-hidden="true"
      />

      {/* Grain */}
      <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.04 }} aria-hidden="true" />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--sage-deep) / 0.7) 100%)" }}
        aria-hidden="true"
      />

      {/* Gold frame */}
      <GoldFrame />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        <p
          className="overline mb-fitz-5 opacity-0 animate-fade-in"
          style={{ animationDelay: "600ms", animationFillMode: "forwards" }}
        >
          Wedding Pianist
        </p>
        <h1
          className="text-foreground mx-auto opacity-0 animate-fade-in"
          style={{ animationDelay: "900ms", animationFillMode: "forwards" }}
        >
          I carry your vows so they can carry your guests.
        </h1>
        <div
          className="mt-fitz-5 opacity-0 animate-fade-in"
          style={{ animationDelay: "1200ms", animationFillMode: "forwards" }}
        >
          <div className="editorial-rule" />
        </div>
      </div>

      {/* Scroll cue */}
      <div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in"
        style={{ animationDelay: "1600ms", animationFillMode: "forwards" }}
      >
        <div className="w-[1px] h-8 bg-gold/25 mx-auto animate-pulse" />
      </div>

      <span className="sr-only">
        Parker Gawryletz, wedding pianist serving Calgary to Banff.
      </span>
    </section>
  );
}
