import { NavLink } from "react-router-dom";
import { Mail, Phone, Instagram, Youtube } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";

export function Footer() {
  const { ref: footerRef, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <footer
      ref={footerRef as React.RefObject<HTMLElement>}
      className="section--dark relative overflow-hidden"
      data-theme="death"
      aria-label="Site footer"
    >
      <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.06 }} aria-hidden="true" />
      <div className="pointer-events-none absolute inset-0 z-[1]" style={{ background: "radial-gradient(ellipse at center, transparent 40%, hsl(var(--rich-black)) 100%)" }} aria-hidden="true" />

      <div className="container mx-auto py-fitz-9 md:py-fitz-10 px-fitz-4 md:px-fitz-5 lg:px-fitz-6 relative z-[2]">
        <div className="h-[1px] w-20 mx-auto mb-fitz-9" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--vow-yellow) / 0.25), transparent)" }} aria-hidden="true" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-fitz-9">
          {/* Name */}
          <div className={cn("col-span-1 md:col-span-2 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            <h3 className="font-display font-light tracking-[0.04em] text-foreground" style={{ fontSize: "clamp(24px, 3vw, 32px)" }}>
              Parker Gawryletz
            </h3>
            <p className="font-display italic text-sm text-muted-foreground mt-1 mb-4">Ceremony Pianist</p>
            <p className="text-foreground mb-8 max-w-md leading-relaxed opacity-70">I carry your vows so they can carry your guests.</p>
            <div className="flex items-center gap-4">
              {[
                { href: "mailto:parker@parkergawryletz.com", icon: Mail, label: "Email" },
                { href: "tel:+14038308930", icon: Phone, label: "Phone" },
                { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
                { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
              ].map((s, i) => (
                <a key={i} href={s.href} className="text-muted-foreground hover:text-primary transition-all duration-[180ms] p-2 -m-2" aria-label={s.label} target={s.href.startsWith('http') ? '_blank' : undefined} rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}>
            <h4 className="font-display text-xs uppercase tracking-[0.22em] mb-6 text-foreground opacity-80">Navigate</h4>
            <ul className="space-y-3">
              {[
                { to: "/weddings", label: "Weddings" },
                { to: "/teaching", label: "Teaching" },
                { to: "/events", label: "Events" },
                { to: "/about", label: "About" },
                { to: "/proof", label: "Proof" },
                { to: "/faq", label: "FAQ" },
                { to: "/contact", label: "Contact" },
              ].map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className="text-muted-foreground hover:text-primary transition-all duration-[180ms] story-link">{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}>
            <h4 className="font-display text-xs uppercase tracking-[0.22em] mb-6 text-foreground opacity-80">Reach Me</h4>
            <ul className="space-y-3 text-muted-foreground">
              <li>Calgary, Cochrane, Canmore & Banff</li>
              <li><a href="mailto:parker@parkergawryletz.com" className="hover:text-primary transition-colors">parker@parkergawryletz.com</a></li>
              <li><a href="tel:+14038308930" className="hover:text-primary transition-colors">+1-403-830-8930</a></li>
            </ul>
          </div>
        </div>

        <div className="h-[1px] w-full mt-fitz-10 mb-fitz-7" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--vow-yellow) / 0.15), transparent)" }} aria-hidden="true" />

        <div className={cn("flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700", isVisible ? "opacity-100" : "opacity-0")} style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}>
          <p className="text-sm text-muted-foreground opacity-60">© {new Date().getFullYear()} Parker Gawryletz. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            {[
              { to: "/privacy-policy", label: "Privacy" },
              { to: "/terms", label: "Terms" },
              { to: "/accessibility", label: "Accessibility" },
            ].map((link) => (
              <NavLink key={link.to} to={link.to} className="text-muted-foreground opacity-60 hover:text-primary hover:opacity-100 transition-all duration-[180ms]">{link.label}</NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
