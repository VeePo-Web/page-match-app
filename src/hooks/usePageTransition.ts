import { createContext, useContext } from 'react';
import type { Location } from 'react-router-dom';

export type TransitionPhase = 'idle' | 'exiting' | 'entering';

interface PageTransitionContextValue {
  phase: TransitionPhase;
  navigateWithTransition: (path: string) => void;
  displayLocation: Location;
}

export const PageTransitionContext = createContext<PageTransitionContextValue>({
  phase: 'idle',
  navigateWithTransition: () => {},
  displayLocation: {} as Location,
});

export function usePageTransition() {
  return useContext(PageTransitionContext);
}

export const ROUTE_TIMING: Record<string, { exit: number; enter: number }> = {
  '/weddings': { exit: 400, enter: 500 },
  '/': { exit: 350, enter: 450 },
  '/events': { exit: 350, enter: 450 },
  '/teaching': { exit: 350, enter: 450 },
};

const DEFAULT_TIMING = { exit: 350, enter: 450 };
const LEGAL_TIMING = { exit: 250, enter: 300 };

export function getRouteTiming(path: string) {
  if (['/privacy-policy', '/terms', '/accessibility'].includes(path)) return LEGAL_TIMING;
  return ROUTE_TIMING[path] ?? DEFAULT_TIMING;
}
