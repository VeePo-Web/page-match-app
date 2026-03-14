import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useCallback, useRef, useEffect, useState } from "react";
import gatewayWeddings from "@/assets/gateway-weddings.jpg";
import gatewayTeaching from "@/assets/gateway-teaching.jpg";
import gatewayEvents from "@/assets/gateway-events.jpg";

const services = [
  {
    title: "Weddings",
    description: "I carry every vow so it lands where it belongs",
    href: "/weddings",
    delay: 1000,
    image: gatewayWeddings,
  },
  {
    title: "Teaching",
    description: "Learn the instrument that speaks when words fall short",
    href: "/teaching",
    delay: 1200,
    image: gatewayTeaching,
  },
  {
    title: "Events",
    description: "Live piano for moments that demand presence",
    href: "/events",
    delay: 1400,
    image: gatewayEvents,
  },
];

function CardImage({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 8;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 8;
    ref.current.style.transform = `translate(${x}px, ${y}px) scale(1.05)`;
    ref.current.style.transition = "transform 100ms ease-out";
  }, []);
  const handleMouseLeave = useCallback(() => {
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0) scale(1)";
    ref.current.style.transition = "transform 500ms ease-out";
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} aria-hidden="true">
      <div
        ref={ref}
        className="absolute -inset-4"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.35,
          filter: "brightness(0.7) contrast(1.1) saturate(0.85)",
          animation: "ken-burns 30s ease-in-out infinite alternate",
          willChange: "transform",
        }}
      />
    </div>
  );
}

function SemicolonBreathing() {
  const [opacity, setOpacity] = useState(0.4);

  useEffect(() => {
    let frame: number;
    const breathe = () => {
      const t = Date.now() / 3500;
      setOpacity(0.4 + Math.sin(t) * 0.4);
      frame = requestAnimationFrame(breathe);
    };
    frame = requestAnimationFrame(breathe);
    return () => cancelAnimationFrame(frame);
  }, []);

  return (
    <span className="text-primary inline-block" style={{ opacity }}>
      {" ; "}
    </span>
  );
}

export default function Gateway() {
  useEffect(() => {
    document.title = "Parker Gawryletz — Ceremony Pianist";
  }, []);

  return (
    <main className="h-screen w-screen overflow-hidden bg-background flex flex-col items-center py-8 md:py-0 md:justify-center relative" data-theme="death" aria-label="Choose your path">
      {/* Grain */}
      <div className="grain pointer-events-none absolute inset-0" style={{ opacity: 0.08 }} aria-hidden="true" />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--rich-black) / 0.8) 100%)" }} aria-hidden="true" />

      {/* Wordmark */}
      <header className="text-center mb-6 md:mb-14 shrink-0 opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
        <h1 className="font-display text-[28px] font-light tracking-tight text-foreground">Parker Gawryletz</h1>
        <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-muted-foreground mt-1.5 opacity-0 animate-fade-in" style={{ animationDelay: "600ms", animationFillMode: "forwards" }}>
          Ceremony Pianist
        </p>
      </header>

      {/* Bento Cards */}
      <div className="relative flex flex-col md:flex-row gap-3 md:gap-6 px-6 max-w-5xl w-full flex-1 md:flex-initial min-h-0">
        {services.map((s) => (
          <Link
            key={s.title}
            to={s.href}
            className={cn(
              "group relative overflow-hidden rounded-lg flex-1 min-h-0 md:flex-none md:aspect-[6/7] md:flex-1",
              "border border-primary/[0.08] transition-all duration-300 opacity-0 animate-fade-in",
              "cursor-pointer hover:-translate-y-2 hover:border-primary/25 hover:shadow-[0_16px_48px_hsl(var(--primary)/0.08)]"
            )}
            style={{ animationDelay: `${s.delay}ms`, animationFillMode: "forwards" }}
          >
            <CardImage src={s.image} />
            <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, hsl(var(--rich-black) / 0.85) 0%, hsl(var(--rich-black) / 0.4) 50%, hsl(var(--rich-black) / 0.2) 100%)' }} aria-hidden="true" />
            <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
              <h2 className="font-display text-[30px] font-normal text-foreground tracking-tight">{s.title}</h2>
              <p className="font-sans text-[14px] text-muted-foreground mt-2 leading-relaxed">{s.description}</p>
              <span className="mt-3 font-sans text-[12px] uppercase tracking-[0.18em] inline-flex items-center gap-1.5 text-primary">
                Step Inside
                <span className="inline-block opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[180ms] ease-out">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Tagline */}
      <footer className="mt-6 md:mt-14 shrink-0 text-center opacity-0 animate-fade-in" style={{ animationDelay: "1600ms", animationFillMode: "forwards" }}>
        <p className="font-display text-[16px] font-light text-muted-foreground tracking-tight">
          'Til Death<SemicolonBreathing />Unto Life<span className="text-primary">.</span>
        </p>
      </footer>
    </main>
  );
}
