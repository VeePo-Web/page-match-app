import { useState, useEffect, useRef, useCallback, useMemo } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { PageTransitionContext, TransitionPhase, getRouteTiming } from '@/hooks/usePageTransition';

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [phase, setPhase] = useState<TransitionPhase>('idle');
  const [displayLocation, setDisplayLocation] = useState(location);
  const pendingPathRef = useRef<string | null>(null);
  const isTransitioningRef = useRef(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const navigateWithTransition = useCallback((path: string) => {
    if (path === location.pathname || isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    pendingPathRef.current = path;
    const exitDuration = prefersReducedMotion.current ? 150 : getRouteTiming(path).exit;
    setPhase('exiting');
    setTimeout(() => { navigate(path); pendingPathRef.current = null; }, exitDuration);
  }, [location.pathname, navigate]);

  useEffect(() => {
    if (location.pathname === displayLocation.pathname && location.key === displayLocation.key) return;
    const enterDuration = prefersReducedMotion.current ? 150 : getRouteTiming(location.pathname).enter;

    if (phase === 'exiting') {
      setDisplayLocation(location);
      setPhase('entering');
      setTimeout(() => { setPhase('idle'); isTransitioningRef.current = false; }, enterDuration);
    } else {
      isTransitioningRef.current = true;
      setPhase('exiting');
      setTimeout(() => {
        setDisplayLocation(location);
        setPhase('entering');
        setTimeout(() => { setPhase('idle'); isTransitioningRef.current = false; }, enterDuration);
      }, prefersReducedMotion.current ? 100 : 250);
    }
  }, [location]);

  const contextValue = useMemo(() => ({ phase, navigateWithTransition, displayLocation }), [phase, navigateWithTransition, displayLocation]);

  return (
    <PageTransitionContext.Provider value={contextValue}>
      <div className={cn('page-transition-content', phase === 'exiting' && 'page-transition-content--exit', phase === 'entering' && 'page-transition-content--enter', phase === 'idle' && 'page-transition-content--idle')}>
        {children}
      </div>
    </PageTransitionContext.Provider>
  );
}
