import { useMemo, useCallback, useRef, useEffect, useState, useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { PageTransitionContext, TransitionPhase, getRouteTiming } from '@/hooks/usePageTransition';
const pageVariants = {
  initial: { opacity: 0, y: 8, filter: 'blur(3px)' },
  enter: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -4, filter: 'blur(3px)' },
};

export function PageTransition({ children }: { children: React.ReactNode }) {
  const location = useLocation();
  const navigate = useNavigate();
  const [phase, setPhase] = useState<TransitionPhase>('idle');
  const isTransitioningRef = useRef(false);
  const prefersReducedMotion = useRef(false);

  useEffect(() => {
    prefersReducedMotion.current = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  }, []);

  const navigateWithTransition = useCallback((path: string) => {
    if (path === location.pathname || isTransitioningRef.current) return;
    isTransitioningRef.current = true;
    setPhase('exiting');
    navigate(path);
  }, [location.pathname, navigate]);

  const timing = getRouteTiming(location.pathname);
  const duration = prefersReducedMotion.current ? 0.1 : timing.enter / 1000;
  const exitDuration = prefersReducedMotion.current ? 0.1 : timing.exit / 1000;

  const contextValue = useMemo(() => ({
    phase,
    navigateWithTransition,
    displayLocation: location,
  }), [phase, navigateWithTransition, location]);

  return (
    <PageTransitionContext.Provider value={contextValue}>
      <AnimatePresence mode="wait" onExitComplete={() => {
        window.scrollTo(0, 0);
        setPhase('entering');
        isTransitioningRef.current = false;
      }}>
        <motion.div
          key={location.pathname}
          variants={pageVariants}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{ duration, ease: [0.22, 0.61, 0.36, 1] }}
          onAnimationComplete={() => setPhase('idle')}
          onAnimationStart={() => {
            if (phase !== 'exiting') setPhase('entering');
          }}
        >
          {children}
        </motion.div>
      </AnimatePresence>
    </PageTransitionContext.Provider>
  );
}
