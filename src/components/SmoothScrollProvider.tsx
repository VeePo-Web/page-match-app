import { useEffect, useRef, ReactNode } from 'react';
import Lenis from 'lenis';

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenisRef.current = lenis;
    let running = true;

    function raf(time: number) {
      if (!running) return;
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Pause when tab is hidden
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
      } else {
        running = true;
        requestAnimationFrame(raf);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      document.removeEventListener('visibilitychange', onVisibility);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
