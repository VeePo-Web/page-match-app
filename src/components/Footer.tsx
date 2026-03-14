import { NavLink } from "react-router-dom";
import { Mail, Phone, Instagram, Youtube } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { cn } from "@/lib/utils";
import { BreathingDiamond } from "@/components/BreathingDiamond";

export function Footer() {
  const { ref: footerRef, isVisible } = useScrollReveal({ threshold: 0.15 });

  return (
    <footer
      ref={footerRef as React.RefObject<HTMLElement>}
      className="relative overflow-hidden bg-sage-deep text-warm-white"
      aria-label="Site footer"
    >
      <div className="grain pointer-events-none absolute inset-0 z-[1]" style={{ opacity: 0.03 }} aria-hidden="true" />

      <div className="container mx-auto py-fitz-9 md:py-fitz-10 px-fitz-4 md:px-fitz-5 lg:px-fitz-6 relative z-[2]">
        {/* Editorial pull quote */}
        <div className={cn("text-center mb-fitz-9 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
          <div className="editorial-rule mb-fitz-5" />
          <blockquote className="font-display text-lg md:text-xl font-light italic max-w-lg mx-auto" style={{ color: "hsl(var(--warm-white) / 0.7)" }}>
            "Every note crafted to honour your moment."
          </blockquote>
          <div className="editorial-rule mt-fitz-5" />
        </div>

        <BreathingDiamond className="mb-fitz-9" />

        <div className="grid grid-cols-1 md:grid-cols-4 gap-fitz-9">
          {/* Name */}
          <div className={cn("col-span-1 md:col-span-2 transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")}>
            <h3 className="font-display font-light tracking-[0.04em]" style={{ fontSize: "clamp(24px, 3vw, 32px)", color: "hsl(var(--warm-white))" }}>
              Parker Gawryletz
            </h3>
            <p className="font-display italic text-sm mt-1 mb-4" style={{ color: "hsl(var(--warm-white) / 0.6)" }}>Ceremony Pianist</p>
            <p className="mb-8 max-w-md leading-relaxed" style={{ color: "hsl(var(--warm-white) / 0.7)" }}>I carry your vows so they can carry your guests.</p>
            <div className="flex items-center gap-4">
              {[
                { href: "mailto:parker@parkergawryletz.com", icon: Mail, label: "Email" },
                { href: "tel:+14038308930", icon: Phone, label: "Phone" },
                { href: "https://instagram.com", icon: Instagram, label: "Instagram" },
                { href: "https://youtube.com", icon: Youtube, label: "YouTube" },
              ].map((s, i) => (
                <a key={i} href={s.href} className="p-2 -m-2 transition-all duration-[180ms] hover:text-gold" style={{ color: "hsl(var(--warm-white) / 0.6)" }} aria-label={s.label} target={s.href.startsWith('http') ? '_blank' : undefined} rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}>
                  <s.icon size={18} />
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: isVisible ? "150ms" : "0ms" }}>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-6" style={{ color: "hsl(var(--gold))" }}>Navigate</h4>
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
                  <NavLink to={link.to} className="transition-all duration-[180ms] hover:text-gold" style={{ color: "hsl(var(--warm-white) / 0.6)" }}>{link.label}</NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Newsletter */}
          <div className={cn("transition-all duration-700", isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4")} style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}>
            <h4 className="font-sans text-xs uppercase tracking-[0.2em] mb-6" style={{ color: "hsl(var(--gold))" }}>Reach Me</h4>
            <ul className="space-y-3" style={{ color: "hsl(var(--warm-white) / 0.6)" }}>
              <li>Calgary, Cochrane, Canmore & Banff</li>
              <li><a href="mailto:parker@parkergawryletz.com" className="hover:text-gold transition-colors">parker@parkergawryletz.com</a></li>
              <li><a href="tel:+14038308930" className="hover:text-gold transition-colors">+1-403-830-8930</a></li>
            </ul>

            {/* Newsletter placeholder */}
            <div className="mt-8">
              <label className="font-sans text-[10px] uppercase tracking-[0.2em] block mb-3" style={{ color: "hsl(var(--gold))" }}>Stay Informed</label>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 bg-transparent border-b border-lines/30 focus:border-gold outline-none py-2 text-sm transition-colors duration-default"
                  style={{ color: "hsl(var(--warm-white) / 0.8)" }}
                />
                <button className="text-xs uppercase tracking-[0.12em] px-3 py-2 border border-gold/30 rounded-sm hover:bg-gold/10 transition-all duration-fast" style={{ color: "hsl(var(--gold))" }}>
                  →
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] w-full mt-fitz-10 mb-fitz-7" style={{ background: "linear-gradient(90deg, transparent, hsl(var(--gold) / 0.2), transparent)" }} aria-hidden="true" />

        <div className={cn("flex flex-col md:flex-row justify-between items-center gap-4 transition-all duration-700", isVisible ? "opacity-100" : "opacity-0")} style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}>
          <p className="text-sm" style={{ color: "hsl(var(--warm-white) / 0.4)" }}>© {new Date().getFullYear()} Parker Gawryletz. All rights reserved.</p>
          <div className="flex gap-6 text-sm">
            {[
              { to: "/privacy-policy", label: "Privacy" },
              { to: "/terms", label: "Terms" },
              { to: "/accessibility", label: "Accessibility" },
            ].map((link) => (
              <NavLink key={link.to} to={link.to} className="transition-all duration-[180ms] hover:text-gold" style={{ color: "hsl(var(--warm-white) / 0.4)" }}>{link.label}</NavLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
