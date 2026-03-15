import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "@/lib/utils";

interface PianoSection {
  id: string;
  label: string;
  isBlackKey?: boolean;
}

interface PianoKeyNavProps {
  sections: PianoSection[];
}

export function PianoKeyNav({ sections }: PianoKeyNavProps) {
  const [activeId, setActiveId] = useState<string>(sections[0]?.id ?? "");
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  const setupObserver = useCallback(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        // Batch: find the entry closest to viewport center
        let best: IntersectionObserverEntry | null = null;
        for (const entry of entries) {
          if (entry.isIntersecting) {
            if (!best || entry.intersectionRatio > best.intersectionRatio) {
              best = entry;
            }
          }
        }
        if (best) setActiveId(best.target.id);
      },
      { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" }
    );

    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (el) observerRef.current!.observe(el);
    });
  }, [sections]);

  useEffect(() => {
    setupObserver();
    return () => { observerRef.current?.disconnect(); };
  }, [setupObserver]);

  const scrollTo = (id: string) => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth", block: "start" });
  };

  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-[6px]"
      aria-label="Section navigation"
    >
      {sections.map((section) => {
        const isActive = activeId === section.id;
        const isHovered = hoveredId === section.id;

        return (
          <div key={section.id} className="relative flex items-center justify-end">
            <span
              className={cn(
                "absolute right-full mr-3 whitespace-nowrap font-sans text-xs tracking-[0.06em] uppercase transition-all duration-[180ms]",
                isHovered || isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none",
                isActive ? "text-gold" : "text-muted-foreground"
              )}
            >
              {section.label}
            </span>

            {isActive && (
              <span className="absolute right-[10px] w-[2px] h-[2px] rounded-full bg-gold" aria-hidden="true" />
            )}

            <button
              onClick={() => scrollTo(section.id)}
              onMouseEnter={() => setHoveredId(section.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={cn(
                "rounded-full transition-all duration-200",
                isActive
                  ? "w-[4px] h-6 bg-gold"
                  : "w-[3px] h-6 bg-foreground/12 hover:bg-foreground/25"
              )}
              aria-label={`Navigate to ${section.label}`}
              aria-current={isActive ? "true" : undefined}
            />
          </div>
        );
      })}

      <div
        className="absolute right-[5px] top-0 bottom-0 w-[1px] -z-10"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(var(--gold) / 0.15), transparent)",
          animation: "golden-thread-breathe 4s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
    </nav>
  );
}
