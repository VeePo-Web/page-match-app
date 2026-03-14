import { useState, useEffect, useCallback } from "react";
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
  const [activeId, setActiveId] = useState<string>("");
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const handleObserver = useCallback(() => {
    const observers: IntersectionObserver[] = [];
    sections.forEach((section) => {
      const el = document.getElementById(section.id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveId(section.id);
        },
        { threshold: 0.3, rootMargin: "-20% 0px -60% 0px" }
      );
      observer.observe(el);
      observers.push(observer);
    });
    return () => observers.forEach((o) => o.disconnect());
  }, [sections]);

  useEffect(() => {
    return handleObserver();
  }, [handleObserver]);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <nav
      className="fixed right-4 top-1/2 -translate-y-1/2 z-40 hidden lg:flex flex-col items-end gap-1"
      aria-label="Section navigation"
    >
      {sections.map((section) => {
        const isActive = activeId === section.id;
        const isHovered = hoveredId === section.id;

        return (
          <div key={section.id} className="relative flex items-center justify-end">
            {/* Tooltip */}
            <span
              className={cn(
                "absolute right-full mr-3 whitespace-nowrap font-sans text-xs tracking-[0.08em] uppercase transition-all duration-[180ms]",
                isHovered || isActive ? "opacity-100 translate-x-0" : "opacity-0 translate-x-2 pointer-events-none",
                isActive ? "text-primary" : "text-muted-foreground"
              )}
            >
              {section.label}
            </span>

            {/* Key */}
            <button
              onClick={() => scrollTo(section.id)}
              onMouseEnter={() => setHoveredId(section.id)}
              onMouseLeave={() => setHoveredId(null)}
              className={cn(
                "transition-all duration-[180ms] rounded-sm",
                section.isBlackKey
                  ? cn("w-3 h-5", isActive ? "bg-primary" : "bg-muted-foreground/30 hover:bg-muted-foreground/50")
                  : cn("w-4 h-7", isActive ? "bg-primary" : "bg-foreground/20 hover:bg-foreground/35"),
              )}
              aria-label={`Navigate to ${section.label}`}
              aria-current={isActive ? "true" : undefined}
            />
          </div>
        );
      })}

      {/* Golden thread */}
      <div
        className="absolute right-[7px] top-0 bottom-0 w-[1px] -z-10"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(var(--vow-yellow) / 0.15), transparent)",
          animation: "golden-thread-breathe 4s ease-in-out infinite",
        }}
        aria-hidden="true"
      />
    </nav>
  );
}
