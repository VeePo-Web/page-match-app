import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
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
    number: "01",
  },
  {
    title: "Teaching",
    description: "Learn the instrument that speaks when words fall short",
    href: "/teaching",
    image: gatewayTeaching,
    number: "02",
  },
  {
    title: "Events",
    description: "Live piano for moments that demand presence",
    href: "/events",
    image: gatewayEvents,
    number: "03",
  },
];

const credentials = [
  { stat: "5–10", label: "Weddings / Year" },
  { stat: "Calgary to Banff", label: "Service Area" },
  { stat: "Est. 2018", label: "Serving Since" },
];

function ServiceCard({
  service,
  index,
  reducedMotion,
}: {
  service: (typeof services)[0];
  index: number;
  reducedMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.6 + index * 0.15,
        duration: 0.7,
        ease: [0.22, 0.61, 0.36, 1],
      }}
      whileHover={
        reducedMotion
          ? undefined
          : {
              y: 5,
              transition: { type: "spring", stiffness: 400, damping: 22 },
            }
      }
      className="relative"
    >
      <Link
        to={service.href}
        className={cn(
          "group relative overflow-hidden block h-full transition-all duration-300",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
          "rounded-b-md",
          "border border-lines/60",
          "shadow-[0_4px_16px_hsl(var(--charcoal)/0.06),inset_-1px_0_0_hsl(var(--lines)/0.3),inset_1px_0_0_hsl(var(--lines)/0.3)]",
          "hover:shadow-[0_2px_8px_hsl(var(--charcoal)/0.12),inset_-1px_0_0_hsl(var(--lines)/0.3),inset_1px_0_0_hsl(var(--lines)/0.3)]"
        )}
        style={{
          background:
            "linear-gradient(180deg, hsl(40 20% 97%) 0%, hsl(40 15% 93%) 95%, hsl(40 18% 91%) 100%)",
        }}
      >
        <img
          src={service.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            opacity: 0.12,
            filter: "brightness(0.8) contrast(1.05) saturate(0.6)",
          }}
          aria-hidden="true"
        />

        {/* Gold accent line on hover */}
        <div
          className="absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300 opacity-0 group-hover:opacity-100"
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6 md:p-8">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase mb-3 text-muted-foreground/40">
            {service.number}
          </span>

          <h2 className="font-display text-[22px] md:text-[26px] uppercase tracking-[0.12em] font-light text-foreground">
            {service.title}
          </h2>

          <p className="font-sans text-[12px] md:text-[13px] mt-2 leading-relaxed font-light max-w-[18ch] text-muted-foreground">
            {service.description}
          </p>

          <span className="mt-4 font-sans text-[11px] uppercase tracking-[0.16em] inline-flex items-center gap-1.5 font-normal text-sage">
            Step Inside
            <span className="inline-block opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[250ms] ease-out">
              →
            </span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}

export default function Gateway() {
  const reducedMotion = useReducedMotion();

  usePageMeta({
    title: "Parker Gawryletz — Ceremony Pianist",
    description:
      "Ceremony pianist serving Calgary to Banff. Weddings, teaching, and live events.",
    canonical: `${window.location.origin}/`,
    ogImage: `${window.location.origin}/og-image.jpg`,
  });

  const initial = reducedMotion ? false : { opacity: 0, y: 16 };

  return (
    <main
      id="main-content"
      className="min-h-screen w-screen overflow-hidden bg-background flex flex-col items-center py-12 md:py-0 md:justify-center relative"
      aria-label="Choose your path"
    >
      {/* Watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden="true"
      >
        <span
          className="font-display font-light"
          style={{
            fontSize: "clamp(200px, 30vw, 400px)",
            opacity: 0.02,
            color: "hsl(var(--sage))",
          }}
        >
          PG
        </span>
      </div>

      {/* Header */}
      <motion.header
        className="text-center mb-4 md:mb-8 shrink-0"
        initial={initial}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      >
        <h1 className="font-display text-[32px] md:text-[38px] font-light tracking-tight text-foreground">
          Parker Gawryletz
        </h1>
        <motion.p
          className="font-sans text-[11px] uppercase tracking-[0.22em] text-muted-foreground mt-2"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Ceremony Pianist
        </motion.p>
      </motion.header>

      {/* Tagline */}
      <motion.p
        className="font-display text-[15px] italic text-muted-foreground tracking-wide mb-6 md:mb-10 text-center"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
      >
        Three paths. One devotion.
      </motion.p>

      {/* Service Cards — Uniform Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-3 gap-3 md:gap-4 max-w-[900px] w-full px-4 md:px-6"
        aria-label="Choose a service"
        role="navigation"
      >
        {services.map((service, index) => (
          <div key={service.href} className="min-h-[160px] md:aspect-[5/9]">
            <ServiceCard
              service={service}
              index={index}
              reducedMotion={reducedMotion}
            />
          </div>
        ))}
      </div>

      {/* Credentials */}
      <motion.div
        className="mt-8 md:mt-10 flex items-center gap-4 md:gap-6"
        initial={reducedMotion ? false : { opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
      >
        {credentials.map((c, i) => (
          <div key={c.label} className="flex items-center gap-4 md:gap-6">
            <div className="text-center">
              <p className="font-display text-sm md:text-base font-light text-foreground">
                {c.stat}
              </p>
              <p className="font-sans text-[10px] uppercase tracking-[0.16em] text-muted-foreground mt-0.5">
                {c.label}
              </p>
            </div>
            {i < credentials.length - 1 && <BreathingDiamond />}
          </div>
        ))}
      </motion.div>

      {/* Footer */}
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
