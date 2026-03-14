import { Link } from "react-router-dom";
import { useEffect } from "react";

export default function NotFound() {
  useEffect(() => { document.title = "Not Found — Parker Gawryletz"; }, []);
  return (
    <main className="h-screen flex flex-col items-center justify-center bg-background text-center px-6" data-theme="death">
      <div className="grain pointer-events-none absolute inset-0" style={{ opacity: 0.08 }} aria-hidden="true" />
      <p className="overline mb-fitz-5">404</p>
      <h1 className="text-foreground">This page doesn't exist.</h1>
      <p className="text-muted-foreground mt-fitz-5">The page you're looking for has moved or never was.</p>
      <Link to="/" className="mt-fitz-7 inline-flex items-center px-8 py-3 bg-primary text-primary-foreground rounded-sm shadow-fantasy-cta text-sm uppercase tracking-[0.18em]">
        Return Home
      </Link>
    </main>
  );
}
