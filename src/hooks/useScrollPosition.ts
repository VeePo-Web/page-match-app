import { useEffect, useRef, useSyncExternalStore } from "react";

interface ScrollState {
  scrollY: number;
  scrollPercent: number;
}

let state: ScrollState = { scrollY: 0, scrollPercent: 0 };
const listeners = new Set<() => void>();
let ticking = false;

function update() {
  const y = window.scrollY;
  const docHeight = document.documentElement.scrollHeight - window.innerHeight;
  state = { scrollY: y, scrollPercent: docHeight > 0 ? y / docHeight : 0 };
  listeners.forEach((l) => l());
  ticking = false;
}

function onScroll() {
  if (!ticking) {
    ticking = true;
    requestAnimationFrame(update);
  }
}

let listening = false;
function ensureListener() {
  if (!listening) {
    listening = true;
    window.addEventListener("scroll", onScroll, { passive: true });
  }
}

function subscribe(cb: () => void) {
  ensureListener();
  listeners.add(cb);
  return () => {
    listeners.delete(cb);
  };
}

function getSnapshot() {
  return state;
}

function getServerSnapshot() {
  return { scrollY: 0, scrollPercent: 0 };
}

export function useScrollPosition() {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
