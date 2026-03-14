import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useCallback, useRef, useEffect } from "react";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import gatewayWeddings from "@/assets/gateway-weddings.jpg";
import gatewayTeaching from "@/assets/gateway-teaching.jpg";
import gatewayEvents from "@/assets/gateway-events.jpg";

const services = [
  {
    title: "Weddings",
    description: "I carry every vow so it lands where it belongs",
    href: "/weddings",
    delay: 800,
    image: gatewayWeddings,
  },
  {
    title: "Teaching",
    description: "Learn the instrument that speaks when words fall short",
    href: "/teaching",
    delay: 1000,
    image: gatewayTeaching,
  },
  {
    title: "Events",
    description: "Live piano for moments that demand presence",
    href: "/events",
    delay: 1200,
    image: gatewayEvents,
  },
];

function CardImage({ src }: { src: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const rafId = useRef(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    cancelAnimationFrame(rafId.current);
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 6;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 6;
    rafId.current = requestAnimationFrame(() => {
      if (!ref.current) return;
      ref.current.style.transform = `translate(${x}px, ${y}px) scale(1.03)`;
      ref.current.style.transition = "transform 100ms ease-out";
    });
  }, []);

  const handleMouseLeave = useCallback(() => {
    cancelAnimationFrame(rafId.current);
    if (!ref.current) return;
    ref.current.style.transform = "translate(0, 0) scale(1)";
    ref.current.style.transition = "transform 500ms ease-out";
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden" onMouseMove={handleMouseMove} onMouseLeave={handleMouseLeave} aria-hidden="true">
      <div
        ref={ref}
        className="absolute -inset-4 will-change-transform"
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.2,
          filter: "brightness(0.8) contrast(1.05) saturate(0.75)",
        }}
      />
    </div>
  );
}

export default function Gateway() {
  useEffect(() => {
    document.title = "Parker Gawryletz — Ceremony Pianist";
  }, []);

  return (
    <main className="min-h-screen w-screen overflow-hidden bg-background flex flex-col items-center py-12 md:py-0 md:justify-center relative" aria-label="Choose your path">
      {/* Wordmark */}
      <header className="text-center mb-8 md:mb-14 shrink-0 opacity-0 animate-fade-in" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
        <h1 className="font-display text-[32px] md:text-[38px] font-light tracking-tight text-foreground">Parker Gawryletz</h1>
        <p className="font-sans text-[11px] uppercase tracking-[0.22em] text-muted-foreground mt-2 opacity-0 animate-fade-in" style={{ animationDelay: "400ms", animationFillMode: "forwards" }}>
          Ceremony Pianist
        </p>
      </header>

      {/* Service Cards */}
      <div className="relative flex flex-col md:flex-row gap-4 md:gap-6 px-6 max-w-5xl w-full flex-1 md:flex-initial min-h-0">
        {services.map((s) => (
          <Link
            key={s.title}
            to={s.href}
            className={cn(
              "group relative overflow-hidden rounded-md flex-1 min-h-0 md:flex-none md:aspect-[6/7] md:flex-1",
              "border border-lines/60 bg-card transition-all duration-300 opacity-0 animate-fade-in",
              "cursor-pointer hover:-translate-y-1 hover:border-sage/30 hover:shadow-editorial-hover"
            )}
            style={{ animationDelay: `${s.delay}ms`, animationFillMode: "forwards" }}
          >
            <CardImage src={s.image} />
            {/* Gentle gradient overlay */}
            <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, hsl(var(--cream) / 0.95) 0%, hsl(var(--cream) / 0.6) 50%, hsl(var(--cream) / 0.3) 100%)' }} aria-hidden="true" />
            <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
              <h2 className="font-display text-[28px] font-light text-foreground tracking-tight">{s.title}</h2>
              <p className="font-sans text-[14px] text-muted-foreground mt-2 leading-relaxed font-light">{s.description}</p>
              <span className="mt-3 font-sans text-[12px] uppercase tracking-[0.16em] inline-flex items-center gap-1.5 text-sage font-normal">
                Step Inside
                <span className="inline-block opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[250ms] ease-out">→</span>
              </span>
            </div>
          </Link>
        ))}
      </div>

      {/* Tagline */}
      <footer className="mt-8 md:mt-14 shrink-0 text-center opacity-0 animate-fade-in" style={{ animationDelay: "1400ms", animationFillMode: "forwards" }}>
        <BreathingDiamond className="mb-4" />
        <p className="font-display text-[15px] font-light italic text-muted-foreground tracking-wide">
          Every note crafted to honour your moment.
        </p>
      </footer>
    </main>
  );
}
