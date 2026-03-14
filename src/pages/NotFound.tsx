import { Link } from "react-router-dom";
import { usePageMeta } from "@/hooks/usePageMeta";

export default function NotFound() {
  usePageMeta({ title: "Not Found — Parker Gawryletz" });
  return (
    <main id="main-content" className="h-screen flex flex-col items-center justify-center bg-background text-center px-6 relative overflow-hidden" data-theme="death">
      {/* Grain */}
      <div className="grain pointer-events-none absolute inset-0" style={{ opacity: 0.08 }} aria-hidden="true" />
      {/* Warm fog */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at 50% 60%, hsl(var(--vow-yellow) / 0.02), transparent 60%)" }} aria-hidden="true" />
      {/* Vignette */}
      <div className="pointer-events-none absolute inset-0" style={{ background: "radial-gradient(ellipse at center, transparent 30%, hsl(var(--rich-black) / 0.8) 100%)" }} aria-hidden="true" />

      <div className="relative z-10">
        <p className="overline mb-fitz-5">404</p>
        <h1 className="text-foreground">This page doesn't exist.</h1>
        <p className="text-muted-foreground mt-fitz-5">The page you're looking for has moved or never was.</p>
        <Link
          to="/"
          className="mt-fitz-7 inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-cta hover:shadow-cta-hover hover:scale-[1.02] active:scale-[0.98] transition-all duration-[180ms] text-sm uppercase tracking-[0.18em]"
        >
          Return Home
        </Link>
      </div>
    </main>
  );
}
