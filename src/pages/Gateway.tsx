import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useCallback, useRef } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { BreathingDiamond } from "@/components/BreathingDiamond";
import { usePageMeta } from "@/hooks/usePageMeta";
import gatewayWeddings from "@/assets/gateway-weddings-new.jpg";
import gatewayTeaching from "@/assets/gateway-teaching-new.jpg";
import gatewayEvents from "@/assets/gateway-events-new.jpg";

const services = [
  {
    title: "Weddings",
    description: "I carry every vow so it lands where it belongs",
    href: "/weddings",
    image: gatewayWeddings,
  },
  {
    title: "Teaching",
    description: "Learn the instrument that speaks when words fall short",
    href: "/teaching",
    image: gatewayTeaching,
  },
  {
    title: "Events",
    description: "Live piano for moments that demand presence",
    href: "/events",
    image: gatewayEvents,
  },
];

const credentials = [
  { stat: "5–10", label: "Weddings / Year" },
  { stat: "Calgary to Banff", label: "Service Area" },
  { stat: "Est. 2018", label: "Serving Since" },
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
  const reducedMotion = useReducedMotion();

  usePageMeta({
    title: "Parker Gawryletz — Ceremony Pianist",
    description: "Ceremony pianist serving Calgary to Banff. Weddings, teaching, and live events.",
  });

  const initial = reducedMotion ? false : { opacity: 0, y: 16 };
  const cardInitial = reducedMotion ? false : { opacity: 0, y: 24 };

  return (
    <main id="main-content" className="min-h-screen w-screen overflow-hidden bg-background flex flex-col items-center py-12 md:py-0 md:justify-center relative" aria-label="Choose your path">
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" aria-hidden="true">
        <span className="font-display font-light" style={{ fontSize: "clamp(200px, 30vw, 400px)", opacity: 0.02, color: "hsl(var(--sage))" }}>PG</span>
      </div>

      <motion.header
        className="text-center mb-4 md:mb-8 shrink-0"
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <h1 className="font-display text-[32px] md:text-[38px] font-light tracking-tight text-foreground">Parker Gawryletz</h1>
        <motion.p
          className="font-sans text-[11px] uppercase tracking-[0.22em] text-muted-foreground mt-2"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Ceremony Pianist
        </motion.p>
      </motion.header>

      <motion.p
        className="font-display text-[15px] italic text-muted-foreground tracking-wide mb-6 md:mb-10 text-center"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Three paths. One devotion.
      </motion.p>

      <div className="relative flex flex-col md:flex-row gap-4 md:gap-6 px-6 max-w-5xl w-full flex-1 md:flex-initial min-h-0">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={cardInitial}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 + i * 0.15, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
            whileHover={reducedMotion ? undefined : { y: -6, scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 20 } }}
            className="flex-1 min-h-[160px] md:flex-none md:aspect-[6/7] md:flex-1"
          >
            <Link
              to={s.href}
              className={cn(
                "group relative overflow-hidden rounded-md block h-full",
                "border border-lines/60 bg-card transition-all duration-300",
                "cursor-pointer hover:border-sage/30 hover:shadow-editorial-hover",
                "border-b-2 border-b-transparent hover:border-b-gold/30"
              )}
            >
              <CardImage src={s.image} />
              <div className="absolute inset-0 z-[1]" style={{ background: 'linear-gradient(to top, hsl(var(--cream) / 0.85) 0%, hsl(var(--cream) / 0.4) 50%, hsl(var(--cream) / 0.2) 100%)' }} aria-hidden="true" />
              <div className="relative z-10 flex flex-col justify-end h-full p-6 md:p-8">
                <h2 className="font-display text-[28px] font-light text-foreground tracking-tight">{s.title}</h2>
                <p className="font-sans text-[14px] text-muted-foreground mt-2 leading-relaxed font-light">{s.description}</p>
                <span className="mt-3 font-sans text-[12px] uppercase tracking-[0.16em] inline-flex items-center gap-1.5 text-sage font-normal">
                  Step Inside
                  <span className="inline-block opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[250ms] ease-out">→</span>
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      <motion.div
        className="mt-8 md:mt-10 flex items-center gap-4 md:gap-6"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {credentials.map((c, i) => (
          <div key={c.label} className="flex items-center gap-4 md:gap-6">
            <div className="text-center">
              <p className="font-display text-sm md:text-base font-light text-foreground">{c.stat}</p>
              <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-muted-foreground mt-0.5">{c.label}</p>
            </div>
            {i < credentials.length - 1 && <BreathingDiamond />}
          </div>
        ))}
      </motion.div>

      <motion.footer
        className="mt-6 md:mt-10 shrink-0 text-center"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 0.8 }}
      >
        <div className="editorial-rule mb-4" />
        <p className="font-display text-[15px] font-light italic text-muted-foreground tracking-wide">
          Every note crafted to honour your moment.
        </p>
      </motion.footer>
    </main>
  );
}
