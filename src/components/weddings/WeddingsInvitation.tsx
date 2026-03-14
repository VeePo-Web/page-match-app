import { useRef, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { GoldFrame } from "@/components/GoldFrame";
import invitationPortrait from "@/assets/invitation-portrait.jpg";

export function WeddingsInvitation() {
  const { ref: sectionRef, isVisible } = useScrollReveal({ threshold: 0.1 });
  const imageColRef = useRef<HTMLDivElement>(null);
  const rafRef = useRef<number | null>(null);
  const sectionElRef = useRef<HTMLElement | null>(null);

  const setCombinedRef = useCallback(
    (node: HTMLElement | null) => {
      sectionElRef.current = node;
      (sectionRef as React.MutableRefObject<HTMLElement | null>).current = node;
    },
    [sectionRef]
  );

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const section = sectionElRef.current;
    if (!section) return;
    const onScroll = () => {
      if (rafRef.current) return;
      rafRef.current = requestAnimationFrame(() => {
        rafRef.current = null;
        const rect = section.getBoundingClientRect();
        const vh = window.innerHeight;
        const progress = Math.max(0, Math.min(1, (vh - rect.top) / (rect.height + vh)));
        if (imageColRef.current) {
          imageColRef.current.style.transform = `translateY(${(progress - 0.5) * 20}px)`;
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); if (rafRef.current) cancelAnimationFrame(rafRef.current); };
  }, []);

  return (
    <section
      id="invitation"
      ref={setCombinedRef}
      className="relative py-fitz-9 md:py-fitz-10 overflow-hidden"
      data-theme="death"
      style={{ background: "hsl(var(--sage-deep))" }}
      aria-labelledby="invitation-heading"
    >
      {/* Grain */}
      <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.04 }} aria-hidden="true" />

      <div className="container mx-auto px-fitz-4 md:px-fitz-6 relative z-20">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 md:gap-20 items-center">
          {/* Left: Portrait */}
          <div
            ref={imageColRef}
            className={cn("transition-all duration-[900ms]", isVisible ? "opacity-100" : "opacity-0 translate-y-6")}
            style={{ transitionDelay: isVisible ? "300ms" : "0ms", willChange: "transform" }}
          >
            <div className="aspect-[3/4] overflow-hidden relative rounded-sm" style={{ border: "1px solid hsl(var(--gold) / 0.15)", boxShadow: "0 20px 60px -12px hsl(var(--sage-deep) / 0.3)" }}>
              <GoldFrame animate={false} />
              <img
                src={invitationPortrait}
                alt="Grand piano keys stretching into soft bokeh with a single candle flame reflected in polished black lacquer"
                className="w-full h-full object-cover"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>

          {/* Right: Copy */}
          <div className="text-center md:text-left">
            <p className={cn("overline mb-8 transition-all duration-500", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
              The Invitation
            </p>

            <p
              className={cn("font-display italic text-foreground/60 max-w-xl transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}
              style={{ transitionDelay: isVisible ? "120ms" : "0ms", fontSize: "clamp(17px, 2.5vw, 20px)", lineHeight: 1.8 }}
            >
              "You deserve someone who has stood where you are about to stand — and knows what it takes."
            </p>

            {/* Gold rule */}
            <span
              className={cn("block w-12 h-px my-10 mx-auto md:mx-0 transition-all duration-500", isVisible ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0")}
              style={{ background: "hsl(var(--gold) / 0.4)", transitionDelay: isVisible ? "200ms" : "0ms", transformOrigin: "left" }}
              aria-hidden="true"
            />

            <h2
              id="invitation-heading"
              className={cn("text-[clamp(26px,4vw,40px)] font-display font-light leading-tight text-foreground max-w-lg transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")}
              style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}
            >
              I play five weddings a year.{" "}
              <span className="relative inline-block italic">
                Yours
                <span
                  className={cn("absolute bottom-0 left-0 h-[1px] bg-gold origin-left transition-all duration-700", isVisible ? "scale-x-100" : "scale-x-0")}
                  style={{ transitionDelay: isVisible ? "1000ms" : "0ms", transitionTimingFunction: "cubic-bezier(0.22, 0.61, 0.36, 1)", width: "100%" }}
                />
              </span>{" "}
              could be one of them.
            </h2>

            <p className={cn("text-lg font-sans font-light leading-[1.8] text-muted-foreground max-w-lg mt-8 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")} style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}>
              Each ceremony I take on begins months before the day itself — with a conversation about the song that was playing when you knew, the silence you want to protect, and the words you need every guest to hear.
            </p>

            <p className={cn("text-lg font-sans font-light leading-[1.8] text-muted-foreground max-w-lg mt-6 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")} style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}>
              I limit my calendar so that every couple receives the preparation their ceremony deserves — not a template, but a score written for the two of you alone.
            </p>

            <div className={cn("mt-10 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")} style={{ transitionDelay: isVisible ? "800ms" : "0ms" }}>
              <Link to="/about" className="inline-flex items-center text-sm tracking-[0.16em] uppercase story-link" style={{ color: "hsl(var(--gold))" }}>
                Hear my story
              </Link>
            </div>

            <p className={cn("text-xs uppercase tracking-[0.2em] text-muted-foreground mt-10 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6")} style={{ transitionDelay: isVisible ? "900ms" : "0ms" }}>
              500+ events <span className="opacity-30">·</span> SOCAN licensed <span className="opacity-30">·</span> $4M insured
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
