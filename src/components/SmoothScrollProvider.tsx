import { useEffect, useRef, ReactNode } from 'react';
import Lenis from 'lenis';

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    const lenis = new Lenis({ duration: 1.2, easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)) });
    lenisRef.current = lenis;
    let running = true;
    let idleTimer: ReturnType<typeof setTimeout> | null = null;
    let isIdle = false;

    function raf(time: number) {
      if (!running) return;
      lenis.raf(time);

      // Idle detection: stop RAF loop when velocity is near zero
      if (Math.abs(lenis.velocity) < 0.01) {
        if (!idleTimer) {
          idleTimer = setTimeout(() => {
            isIdle = true;
          }, 500);
        }
      } else {
        if (idleTimer) { clearTimeout(idleTimer); idleTimer = null; }
        isIdle = false;
      }

      if (!isIdle) {
        requestAnimationFrame(raf);
      }
    }
    requestAnimationFrame(raf);

    // Resume RAF on user interaction
    const resume = () => {
      if (!running) return;
      if (isIdle) {
        isIdle = false;
        if (idleTimer) { clearTimeout(idleTimer); idleTimer = null; }
        requestAnimationFrame(raf);
      }
    };

    window.addEventListener('scroll', resume, { passive: true });
    window.addEventListener('wheel', resume, { passive: true });
    window.addEventListener('touchstart', resume, { passive: true });
    window.addEventListener('keydown', resume, { passive: true });

    // Pause when tab is hidden
    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        isIdle = true;
      } else {
        running = true;
        isIdle = false;
        requestAnimationFrame(raf);
      }
    };
    document.addEventListener('visibilitychange', onVisibility);

    return () => {
      running = false;
      if (idleTimer) clearTimeout(idleTimer);
      window.removeEventListener('scroll', resume);
      window.removeEventListener('wheel', resume);
      window.removeEventListener('touchstart', resume);
      window.removeEventListener('keydown', resume);
      document.removeEventListener('visibilitychange', onVisibility);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
