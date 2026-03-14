import { cn } from "@/lib/utils";
import { GoldFrame } from "@/components/GoldFrame";

interface HeroStripProps {
  title: string;
  subtitle?: string;
  height?: string;
  backgroundImage?: string;
  children?: React.ReactNode;
}

export function HeroStrip({ title, subtitle, height = "h-[50vh]", backgroundImage, children }: HeroStripProps) {
  return (
    <section
      className={cn("relative flex items-center justify-center overflow-hidden", height)}
      data-theme="death"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-sage-deep" aria-hidden="true" />

      {/* Ken Burns image */}
      {backgroundImage && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.12,
            filter: "brightness(0.7) contrast(1.08) saturate(0.8)",
            animation: "ken-burns 30s ease-in-out infinite alternate",
            willChange: "transform",
          }}
          aria-hidden="true"
        />
      )}

      {/* Grain */}
      <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.04 }} aria-hidden="true" />

      {/* Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--sage-deep) / 0.7) 100%)" }}
        aria-hidden="true"
      />

      {/* Gold frame corners */}
      <GoldFrame />

      {/* Content */}
      <div className="relative z-10 text-center px-fitz-4 md:px-fitz-6 max-w-3xl mx-auto">
        {subtitle && (
          <p className="overline mb-fitz-5 opacity-0 animate-fade-in" style={{ animationDelay: "300ms", animationFillMode: "forwards" }}>
            {subtitle}
          </p>
        )}
        <h1 className="text-foreground mx-auto opacity-0 animate-fade-in" style={{ animationDelay: "500ms", animationFillMode: "forwards" }}>
          {title}
        </h1>
        {children && (
          <div className="mt-fitz-5 opacity-0 animate-fade-in" style={{ animationDelay: "700ms", animationFillMode: "forwards" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
