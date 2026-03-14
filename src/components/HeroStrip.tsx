import { cn } from "@/lib/utils";

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
      {/* Layer 0: Background */}
      <div className="absolute inset-0 bg-[hsl(var(--rich-black))]" aria-hidden="true" />

      {/* Layer 1: Ken Burns image */}
      {backgroundImage && (
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.1,
            filter: "brightness(0.75) contrast(1.08) saturate(0.9)",
            animation: "ken-burns 30s ease-in-out infinite alternate",
            willChange: "transform",
          }}
          aria-hidden="true"
        />
      )}

      {/* Layer 2: Grain */}
      <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.1 }} aria-hidden="true" />

      {/* Layer 2b: Warm fog */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse at 50% 70%, hsl(var(--vow-yellow) / 0.03), transparent 60%)" }}
        aria-hidden="true"
      />

      {/* Layer 3: Vignette */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{ background: "radial-gradient(ellipse at center, transparent 25%, hsl(var(--rich-black) / 0.75) 100%)" }}
        aria-hidden="true"
      />

      {/* Layer 4: Content */}
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
