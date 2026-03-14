import { useState, useEffect, useRef, useCallback } from "react";
import { NavLink, useLocation, Link } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

function getNavLinks(pathname: string) {
  const aboutTo = pathname.startsWith('/events') ? '/events/about'
    : pathname.startsWith('/teaching') ? '/teaching/about'
    : '/about';
  const pricingTo = pathname.startsWith('/events') ? '/events/pricing'
    : pathname.startsWith('/teaching') ? '/teaching/pricing'
    : '/weddings/pricing';
  return [
    { to: pricingTo, label: "Services" },
    { to: aboutTo, label: "About" },
    { to: "/proof", label: "Proof" },
  ];
}

export function MinimalHeader() {
  const { pathname } = useLocation();
  const navLinks = getNavLinks(pathname);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const lastScrollY = useRef(0);
  const rafRef = useRef(0);
  const isGateway = pathname === '/';

  const ctaLabel = (() => {
    if (pathname === '/contact') return "You're here";
    if (pathname.startsWith('/teaching')) return 'Begin the Conversation';
    if (pathname.startsWith('/events')) return 'Discuss Your Event';
    return 'Hold My Date';
  })();

  const updateScroll = useCallback(() => {
    const y = window.scrollY;
    setIsScrolled(y > 80);
    if (y > 300) {
      setIsHeaderHidden(y > lastScrollY.current);
    } else {
      setIsHeaderHidden(false);
    }
    lastScrollY.current = y;
  }, []);

  useEffect(() => {
    const onScroll = () => { cancelAnimationFrame(rafRef.current); rafRef.current = requestAnimationFrame(updateScroll); };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(rafRef.current); };
  }, [updateScroll]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [isMenuOpen]);

  if (isGateway) return null;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-[400ms]",
          isScrolled ? "backdrop-blur-md bg-background/95 border-b border-lines/40" : "bg-transparent"
        )}
        style={{
          height: isScrolled ? "56px" : "auto",
          transform: isHeaderHidden ? 'translateY(-100%)' : 'translateY(0)',
        }}
      >
        {/* Gold scroll progress */}
        {isScrolled && (
          <div className="absolute bottom-0 left-0 right-0 h-[1px]">
            <div
              className="h-full bg-gold/40 transition-[width] duration-100"
              style={{ width: `${typeof window !== 'undefined' ? Math.min((window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100, 100) : 0}%` }}
            />
          </div>
        )}

        <div className="flex items-center h-full px-[var(--hero-space-edge,24px)] md:px-[var(--hero-space-edge,48px)] py-5 relative justify-between">
          {/* Logo */}
          <NavLink
            to="/"
            className="font-display text-base text-foreground hover:text-accent transition-colors duration-[180ms] tracking-[0.06em] font-light"
          >
            Parker Gawryletz
          </NavLink>

          {/* Desktop Nav */}
          {isScrolled && (
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={({ isActive }) => cn(
                    "font-display text-sm tracking-[0.06em] transition-colors duration-[180ms] font-light",
                    isActive ? "text-accent" : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {link.label}
                </NavLink>
              ))}
            </nav>
          )}

          {/* CTA + Menu */}
          <div className="flex items-center gap-4">
            {pathname !== '/contact' && !pathname.endsWith('/contact') && (
              <Link
                to={pathname.startsWith('/weddings') ? '/weddings/contact' : pathname.startsWith('/teaching') ? '/teaching/contact' : pathname.startsWith('/events') ? '/events/contact' : '/contact'}
                className="hidden md:inline-flex items-center px-5 py-2 text-sm font-sans tracking-[0.06em] uppercase bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover transition-all duration-[180ms]"
              >
                {ctaLabel}
              </Link>
            )}
            <button
              className="md:hidden text-foreground p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-[55] bg-background flex flex-col items-center justify-center gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 0.61, 0.36, 1] }}
          >
            <button className="absolute top-6 right-6 text-foreground" onClick={() => setIsMenuOpen(false)} aria-label="Close menu">
              <X size={24} />
            </button>
            {[
              { to: "/weddings", label: "Weddings" },
              { to: "/teaching", label: "Teaching" },
              { to: "/events", label: "Events" },
              { to: "/about", label: "About" },
              { to: "/proof", label: "Proof" },
              { to: "/contact", label: "Contact" },
            ].map((link, i) => (
              <motion.div
                key={link.to}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.4, ease: [0.22, 0.61, 0.36, 1] }}
              >
                <NavLink
                  to={link.to}
                  onClick={() => setIsMenuOpen(false)}
                  className="font-display text-3xl font-light text-foreground hover:text-accent transition-colors"
                >
                  {link.label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
