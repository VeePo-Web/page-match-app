import { useEffect, useRef, useState, useCallback } from 'react';

interface UseScrollRevealOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
  delay?: number;
}

// ── Shared IntersectionObserver pool ──
// One observer per unique threshold+rootMargin combo
type ObserverCallback = (isIntersecting: boolean) => void;

interface ObserverEntry {
  observer: IntersectionObserver;
  elements: Map<Element, ObserverCallback>;
}

const observerPool = new Map<string, ObserverEntry>();

function getObserverKey(threshold: number, rootMargin: string) {
  return `${threshold}|${rootMargin}`;
}

function getSharedObserver(threshold: number, rootMargin: string): ObserverEntry {
  const key = getObserverKey(threshold, rootMargin);
  let entry = observerPool.get(key);
  if (entry) return entry;

  const elements = new Map<Element, ObserverCallback>();
  const observer = new IntersectionObserver(
    (entries) => {
      for (const ioEntry of entries) {
        const cb = elements.get(ioEntry.target);
        if (cb) cb(ioEntry.isIntersecting);
      }
    },
    { threshold, rootMargin }
  );

  entry = { observer, elements };
  observerPool.set(key, entry);
  return entry;
}

function observeElement(
  el: Element,
  threshold: number,
  rootMargin: string,
  callback: ObserverCallback
) {
  const entry = getSharedObserver(threshold, rootMargin);
  entry.elements.set(el, callback);
  entry.observer.observe(el);

  return () => {
    entry.observer.unobserve(el);
    entry.elements.delete(el);
    // Clean up empty observers
    if (entry.elements.size === 0) {
      entry.observer.disconnect();
      observerPool.delete(getObserverKey(threshold, rootMargin));
    }
  };
}

export function useScrollReveal({
  threshold = 0.15,
  rootMargin = '-60px 0px',
  triggerOnce = true,
  delay = 0,
}: UseScrollRevealOptions = {}) {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasTriggered, setHasTriggered] = useState(false);

  const handleIntersection = useCallback(
    (isIntersecting: boolean) => {
      if (isIntersecting) {
        if (delay > 0) {
          setTimeout(() => { setIsVisible(true); setHasTriggered(true); }, delay);
        } else {
          setIsVisible(true);
          setHasTriggered(true);
        }
      } else if (!triggerOnce) {
        setIsVisible(false);
      }
    },
    [delay, triggerOnce]
  );

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setIsVisible(true);
      setHasTriggered(true);
      return;
    }

    const unobserve = observeElement(element, threshold, rootMargin, (isIntersecting) => {
      handleIntersection(isIntersecting);
      if (isIntersecting && triggerOnce) {
        unobserve();
      }
    });

    return unobserve;
  }, [threshold, rootMargin, triggerOnce, handleIntersection]);

  return { ref: ref as React.RefObject<HTMLElement>, isVisible, hasTriggered };
}
