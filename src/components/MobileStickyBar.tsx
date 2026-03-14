import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useScrollPosition } from "@/hooks/useScrollPosition";

export function MobileStickyBar() {
  const { pathname } = useLocation();
  const { scrollY, scrollPercent } = useScrollPosition();

  const hidden = pathname === "/" || pathname.endsWith("/contact");
  if (hidden) return null;

  const isVisible = scrollY > 400;

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
        "fixed bottom-0 left-0 right-0 z-50 lg:hidden transition-all duration-300 will-change-transform",
        isVisible ? "translate-y-0 opacity-100" : "translate-y-full opacity-0"
      )}
    >
      {/* Gold progress thread */}
      <div className="h-[1px] w-full bg-muted/20">
        <div
          className="h-full bg-gold/50 transition-[width] duration-100"
          style={{ width: `${scrollPercent * 100}%` }}
        />
      </div>

      {/* Bar */}
      <div className="bg-background/95 backdrop-blur-md border-t border-lines/30 px-fitz-4 py-fitz-3 safe-area-bottom">
        <Link
          to={ctaHref}
          className="block w-full text-center px-6 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta text-sm uppercase tracking-[0.12em] font-sans font-normal"
        >
          {ctaLabel}
        </Link>
      </div>
    </div>
  );
}
