

# Phase 18: Performance Optimization & Runtime Efficiency

After 17 phases of visual and UX refinement, this phase focuses on measurable runtime performance — reducing bundle weight, eliminating unnecessary re-renders, cutting down on IntersectionObserver and scroll listener overhead, and improving initial load metrics.

---

## 1. Route-Level Code Splitting for All Pages

**Problem:** `App.tsx` eagerly imports Gateway, Weddings, Teaching, Events, About, Contact, FAQ, Proof, Listen, NotFound, and all SubPages/Legal pages. Only one route renders at a time, but every page's code ships in the initial bundle.

**Fix:** Lazy-load every route except Gateway (the landing page). Use `React.lazy` + `Suspense` with a minimal fallback. Gateway stays eagerly loaded as the entry point.

**File:** `src/App.tsx`

---

## 2. Consolidate Scroll Listeners

**Problem:** Multiple independent scroll listeners run simultaneously:
- `useScrollPosition` (module-level `scroll` event → rAF)
- `ScrollProgress` (framer-motion `useScroll`)
- `BackToTop` (via `useScrollPosition`)
- `PianoKeyNav` (IntersectionObserver, separate)
- `SmoothScrollProvider` (Lenis RAF loop with idle detection)
- Each `Section` component creates its own `useScroll` for watermark parallax
- `WeddingsHero` / `HeroStrip` each create their own `useScroll`

The `useScrollPosition` singleton is well-designed. The main concern is the proliferation of per-section `useScroll` hooks (framer-motion) which each attach their own scroll listeners.

**Fix:** For sections that only use `watermark` parallax (the `Section` component), conditionally create the `useScroll` hook only when `watermark` is truthy. Currently it always runs. Add a guard: extract the watermark parallax into a child component that only mounts when `watermark` is provided.

**File:** `src/components/Section.tsx`

---

## 3. Reduce IntersectionObserver Proliferation

**Problem:** Every `useScrollReveal` instance creates its own `IntersectionObserver`. On the Weddings page alone, there are ~12+ observers (Section, WeddingsExhale, WeddingsTransformation, WeddingsTestimonials, WeddingsCrossing, WeddingsThreePaths, plus RevealOnScroll children inside Process/Witness). Each observer is lightweight, but on mobile devices this can add up.

**Fix:** Create a shared `IntersectionObserver` singleton in `useScrollReveal` that observes multiple elements with the same threshold. Group observers by `threshold + rootMargin` key. This is a targeted refactor of the hook internals — the API (`ref`, `isVisible`) stays identical.

**File:** `src/hooks/useScrollReveal.ts`

---

## 4. Gateway Image Optimization

**Problem:** Gateway imports three full-resolution images (`gateway-weddings-new.jpg`, `gateway-teaching-new.jpg`, `gateway-events-new.jpg`) that are displayed at 10-12% opacity as subtle background textures inside the piano keys. Loading three full images for a background texture at 10% opacity is wasteful.

**Fix:** 
- Add `loading="lazy"` by converting the inline `backgroundImage` style to `<img>` elements with `loading="lazy"` and `decoding="async"` 
- OR compress these images to much smaller dimensions (400x600 max) since they're only used as faint textures
- The simplest approach: add CSS `image-rendering: auto` and use smaller source files. Since we can't resize files in Lovable, convert to `<img>` with lazy loading.

**File:** `src/pages/Gateway.tsx`

---

## 5. Eliminate Unnecessary `motion.div` Wrappers

**Problem:** Several components wrap static content in `motion.div` that only animate once on mount (e.g., Gateway's header, tagline, credentials, footer). After the initial animation completes, the framer-motion wrapper adds overhead tracking style changes.

**Fix:** Use framer-motion's `useAnimation` with `onAnimationComplete` to remove the motion tracking after the entrance animation finishes. Alternatively, use CSS animations with `animation-fill-mode: both` for one-shot entrance animations (no JS overhead after completion). The Gateway page is the best candidate since it's the first page users see.

**File:** `src/pages/Gateway.tsx` — convert the header, tagline, credentials, and footer `motion.*` elements to CSS `@keyframes` with `animation-delay` and `animation-fill-mode: both`.

---

## 6. Debounce `PianoKeyNav` Observer Callback

**Problem:** `PianoKeyNav`'s IntersectionObserver fires `setActiveId` on every intersection change. If multiple sections intersect simultaneously during fast scrolling, this causes multiple re-renders in quick succession.

**Fix:** Batch the state update: collect all intersecting entries, find the one closest to the viewport center, and set that as active. This reduces renders during rapid scroll.

**File:** `src/components/PianoKeyNav.tsx`

---

## 7. CSS `contain` for Performance

**Problem:** Each `Section` component has complex layered backgrounds (grain, vignette, watermark, background image, glow). The browser must recalculate layout/paint for all layers when scrolling.

**Fix:** Add `contain: content` to the `<section>` element in `Section.tsx`. This tells the browser that the section's internals don't affect outside layout, enabling paint optimizations. Also add `contain: layout style paint` to the decorative layers (grain, vignette) since they're absolutely positioned.

**File:** `src/components/Section.tsx`, `src/index.css`

---

## 8. Font Loading Strategy

**Problem:** Cormorant Garamond and Jost are loaded via Google Fonts (presumably in `index.html`). If they're render-blocking, they delay First Contentful Paint.

**Fix:** Verify `index.html` uses `<link rel="preload">` with `font-display: swap` for both fonts. If not, add `font-display: swap` to the `@import` or `<link>` tag. Add `<link rel="preconnect" href="https://fonts.googleapis.com">` and `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>` if missing.

**File:** `index.html`

---

## 9. Reduce Framer Motion Bundle Impact

**Problem:** `framer-motion` is imported in many components. The full library is ~40KB gzipped. Some components only use `motion.div` for simple opacity/transform animations that CSS can handle.

**Fix:** For components that only do entrance animations (RevealOnScroll, Section decorative layers), keep CSS animations. For components that need scroll-linked transforms (HeroStrip, WeddingsHero, Section watermark), keep framer-motion. No bundle change needed — just ensure no new framer-motion imports are added where CSS suffices.

**Audit only — no file changes needed.**

---

## Implementation Order

1. Route-level code splitting (App.tsx)
2. Section.tsx: conditional watermark scroll + CSS `contain`
3. useScrollReveal: shared observer singleton
4. Gateway: lazy images + CSS entrance animations
5. PianoKeyNav: batched observer callback
6. index.html: font preconnect/preload verification

