import { useEffect, useState } from 'react';

interface VigilPhase {
  isStillness: boolean;
  isKindling: boolean;
  isRevealing: boolean;
  isComplete: boolean;
}

export function useVigilSequence(): VigilPhase {
  const hasPlayed = typeof window !== 'undefined' && sessionStorage.getItem('vigil-complete') === 'true';

  const [phase, setPhase] = useState<VigilPhase>({
    isStillness: !hasPlayed,
    isKindling: false,
    isRevealing: false,
    isComplete: hasPlayed,
  });

  useEffect(() => {
    if (hasPlayed) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setPhase({ isStillness: false, isKindling: false, isRevealing: false, isComplete: true });
      sessionStorage.setItem('vigil-complete', 'true');
      return;
    }

    const t1 = setTimeout(() => setPhase({ isStillness: false, isKindling: true, isRevealing: false, isComplete: false }), 2000);
    const t2 = setTimeout(() => setPhase({ isStillness: false, isKindling: false, isRevealing: true, isComplete: false }), 4000);
    const t3 = setTimeout(() => {
      setPhase({ isStillness: false, isKindling: false, isRevealing: false, isComplete: true });
      sessionStorage.setItem('vigil-complete', 'true');
    }, 6000);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [hasPlayed]);

  return phase;
}
