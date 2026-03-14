import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";

export function MobileStickyBar() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Hide on gateway and contact pages
  const hidden = pathname === "/" || pathname.endsWith("/contact");

  useEffect(() => {
    if (hidden) return;
    const onScroll = () => {
      const y = window.scrollY;
      setIsVisible(y > 400);
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docHeight > 0 ? y / docHeight : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [hidden]);

  if (hidden) return null;

  const ctaLabel = pathname.startsWith("/teaching")
    ? "Begin the Conversation"
    : pathname.startsWith("/events")
    ? "Discuss Your Event"
    : "Hold My Date";

  const ctaHref = pathname.startsWith("/teaching")
    ? "/teaching/contact"
    : pathname.startsWith("/events")
    ? "/events/contact"
    : "/weddings/contact";

  return (
    <div
      className={cn(
        "fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-300",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}
    >
      {/* Golden progress thread */}
      <div className="h-[2px] w-full bg-muted/20">
        <div
          className="h-full bg-primary transition-[width] duration-100"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>

      {/* Bar */}
      <div className="bg-card/95 backdrop-blur-md border-t border-lines/30 px-fitz-4 py-fitz-3 safe-area-bottom">
        <Link
          to={ctaHref}
          className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground rounded-sm shadow-fantasy-cta text-sm uppercase tracking-[0.18em] font-sans"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
