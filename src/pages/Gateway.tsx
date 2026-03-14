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
    isBlackKey: false,
    number: "01",
  },
  {
    title: "Teaching",
    description: "Learn the instrument that speaks when words fall short",
    href: "/teaching",
    image: gatewayTeaching,
    isBlackKey: true,
    number: "02",
  },
  {
    title: "Events",
    description: "Live piano for moments that demand presence",
    href: "/events",
    image: gatewayEvents,
    isBlackKey: false,
    number: "03",
  },
];

const credentials = [
  { stat: "5–10", label: "Weddings / Year" },
  { stat: "Calgary to Banff", label: "Service Area" },
  { stat: "Est. 2018", label: "Serving Since" },
];

function PianoKeyCard({
  service,
  index,
  reducedMotion,
}: {
  service: (typeof services)[0];
  index: number;
  reducedMotion: boolean | null;
}) {
  const isBlack = service.isBlackKey;

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
              y: isBlack ? 3 : 5,
              transition: { type: "spring", stiffness: 400, damping: 22 },
            }
      }
      className={cn(
        isBlack
          ? "absolute left-1/2 -translate-x-1/2 top-0 z-10 w-[30%] h-[68%] md:block hidden"
          : "flex-1 relative z-[1]",
        // Mobile: stacked
        !isBlack && "md:aspect-[5/9]"
      )}
      style={isBlack ? {} : {}}
    >
      <Link
        to={service.href}
        className={cn(
          "group relative overflow-hidden block h-full transition-all duration-300",
          "focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold",
          isBlack
            ? [
                "rounded-b-md",
                "border border-transparent border-b-[hsl(148_22%_38%)]",
                "shadow-[0_6px_24px_hsl(var(--charcoal)/0.25)]",
                "hover:shadow-[0_2px_10px_hsl(var(--charcoal)/0.35)]",
              ]
            : [
                "rounded-b-md",
                "border border-lines/60",
                "shadow-[0_4px_16px_hsl(var(--charcoal)/0.06),inset_-1px_0_0_hsl(var(--lines)/0.3),inset_1px_0_0_hsl(var(--lines)/0.3)]",
                "hover:shadow-[0_2px_8px_hsl(var(--charcoal)/0.12),inset_-1px_0_0_hsl(var(--lines)/0.3),inset_1px_0_0_hsl(var(--lines)/0.3)]",
              ]
        )}
        style={
          isBlack
            ? {
                background:
                  "linear-gradient(180deg, hsl(148 22% 32%) 0%, hsl(148 22% 24%) 60%, hsl(148 22% 18%) 100%)",
              }
            : {
                background:
                  "linear-gradient(180deg, hsl(40 20% 97%) 0%, hsl(40 15% 93%) 95%, hsl(40 18% 91%) 100%)",
              }
        }
      >
        {/* Background image — lazy loaded */}
        <img
          src={service.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            opacity: isBlack ? 0.1 : 0.12,
            filter: "brightness(0.8) contrast(1.05) saturate(0.6)",
          }}
          aria-hidden="true"
        />

        {/* Glossy sheen on black key */}
        {isBlack && (
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background:
                "linear-gradient(135deg, hsla(0,0%,100%,0.08) 0%, transparent 40%, transparent 60%, hsla(0,0%,100%,0.03) 100%)",
            }}
            aria-hidden="true"
          />
        )}

        {/* Gold accent line on hover */}
        <div
          className={cn(
            "absolute bottom-0 left-0 right-0 h-[2px] transition-all duration-300",
            "opacity-0 group-hover:opacity-100"
          )}
          style={{
            background:
              "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)",
          }}
          aria-hidden="true"
        />

        {/* Content */}
        <div
          className={cn(
            "relative z-10 flex flex-col items-center justify-center h-full text-center",
            isBlack ? "p-4 md:p-5" : "p-6 md:p-8"
          )}
        >
          <span
            className={cn(
              "font-sans text-[10px] tracking-[0.2em] uppercase mb-3",
              isBlack
                ? "text-[hsl(var(--warm-white)/0.35)]"
                : "text-muted-foreground/40"
            )}
          >
            {service.number}
          </span>

          <h2
            className={cn(
              "font-display uppercase tracking-[0.12em] font-light",
              isBlack
                ? "text-[18px] md:text-[20px] text-[hsl(var(--warm-white))]"
                : "text-[22px] md:text-[26px] text-foreground"
            )}
          >
            {service.title}
          </h2>

          <p
            className={cn(
              "font-sans text-[12px] md:text-[13px] mt-2 leading-relaxed font-light max-w-[18ch]",
              isBlack
                ? "text-[hsl(var(--warm-white)/0.6)]"
                : "text-muted-foreground"
            )}
          >
            {service.description}
          </p>

          <span
            className={cn(
              "mt-4 font-sans text-[11px] uppercase tracking-[0.16em] inline-flex items-center gap-1.5 font-normal",
              isBlack ? "text-[hsl(var(--gold-light))]" : "text-sage"
            )}
          >
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

/* Mobile-only black key card (rendered separately in mobile layout) */
function MobileBlackKey({
  service,
  reducedMotion,
}: {
  service: (typeof services)[0];
  reducedMotion: boolean | null;
}) {
  return (
    <motion.div
      initial={reducedMotion ? false : { opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.75, duration: 0.7, ease: [0.22, 0.61, 0.36, 1] }}
      whileHover={
        reducedMotion
          ? undefined
          : { scale: 1.01, transition: { type: "spring", stiffness: 300, damping: 20 } }
      }
      className="md:hidden mx-4"
    >
      <Link
        to={service.href}
        className="group relative overflow-hidden block rounded-md border-l-2 border-l-gold/40 border border-transparent shadow-[0_4px_20px_hsl(var(--charcoal)/0.2)] hover:shadow-[0_2px_10px_hsl(var(--charcoal)/0.3)] transition-all duration-300"
        style={{
          background:
            "linear-gradient(180deg, hsl(148 22% 32%) 0%, hsl(148 22% 24%) 60%, hsl(148 22% 18%) 100%)",
          minHeight: "140px",
        }}
      >
        <img
          src={service.image}
          alt=""
          loading="lazy"
          decoding="async"
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          style={{
            opacity: 0.1,
            filter: "brightness(0.8) contrast(1.05) saturate(0.6)",
          }}
          aria-hidden="true"
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "linear-gradient(135deg, hsla(0,0%,100%,0.08) 0%, transparent 40%, transparent 60%, hsla(0,0%,100%,0.03) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="absolute bottom-0 left-0 right-0 h-[2px] opacity-0 group-hover:opacity-100 transition-all duration-300" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold)), transparent)" }} aria-hidden="true" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center p-6">
          <span className="font-sans text-[10px] tracking-[0.2em] uppercase mb-2 text-[hsl(var(--warm-white)/0.35)]">
            {service.number}
          </span>
          <h2 className="font-display text-[22px] uppercase tracking-[0.12em] font-light text-[hsl(var(--warm-white))]">
            {service.title}
          </h2>
          <p className="font-sans text-[12px] mt-2 leading-relaxed font-light text-[hsl(var(--warm-white)/0.6)]">
            {service.description}
          </p>
          <span className="mt-3 font-sans text-[11px] uppercase tracking-[0.16em] inline-flex items-center gap-1.5 font-normal text-[hsl(var(--gold-light))]">
            Step Inside
            <span className="inline-block opacity-0 -translate-x-3 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-[250ms] ease-out">→</span>
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
  const whiteKeys = services.filter((s) => !s.isBlackKey);
  const blackKey = services.find((s) => s.isBlackKey)!;

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

      {/* ═══ Piano Keyboard ═══ */}
      {/* Desktop: relative container with white keys + absolute black key */}
      <div
        className="hidden md:block relative max-w-[900px] w-full px-6"
        aria-label="Choose a service"
        role="navigation"
      >
        {/* Fallboard (key cover) */}
        <motion.div
          className="h-2 rounded-t-sm overflow-hidden"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          style={{
            background: "linear-gradient(180deg, hsl(30 8% 14%) 0%, hsl(var(--charcoal)) 100%)",
          }}
          aria-hidden="true"
        />
        <div className="relative flex gap-3" style={{ height: "420px" }}>
          {/* Left white key */}
          <PianoKeyCard
            service={whiteKeys[0]}
            index={0}
            reducedMotion={reducedMotion}
          />

          {/* Spacer for black key */}
          <div className="w-[18%] shrink-0" aria-hidden="true" />

          {/* Right white key */}
          <PianoKeyCard
            service={whiteKeys[1]}
            index={2}
            reducedMotion={reducedMotion}
          />

          {/* Black key (absolute, overlapping) */}
          <PianoKeyCard
            service={blackKey}
            index={1}
            reducedMotion={reducedMotion}
          />
        </div>

        {/* Keyboard shelf */}
        <motion.div
          className="relative mt-0 rounded-b-sm overflow-hidden"
          initial={reducedMotion ? false : { opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.0, duration: 0.6 }}
        >
          <div
            className="h-3"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--charcoal)) 0%, hsl(30 8% 14%) 100%)",
            }}
          />
          {/* Reflection */}
          <div
            className="h-6"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--charcoal) / 0.03) 0%, transparent 100%)",
            }}
            aria-hidden="true"
          />
        </motion.div>
      </div>

      {/* Mobile: stacked keys */}
      <div
        className="md:hidden flex flex-col gap-3 w-full"
        aria-label="Choose a service"
        role="navigation"
      >
        <div className="mx-4 min-h-[160px]">
          <PianoKeyCard
            service={whiteKeys[0]}
            index={0}
            reducedMotion={reducedMotion}
          />
        </div>
        <MobileBlackKey service={blackKey} reducedMotion={reducedMotion} />
        <div className="mx-4 min-h-[160px]">
          <PianoKeyCard
            service={whiteKeys[1]}
            index={2}
            reducedMotion={reducedMotion}
          />
        </div>

        {/* Mobile shelf */}
        <div className="mx-6 mt-1">
          <div
            className="h-2 rounded-b-sm"
            style={{
              background:
                "linear-gradient(180deg, hsl(var(--charcoal)) 0%, hsl(30 8% 14%) 100%)",
            }}
          />
        </div>
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
