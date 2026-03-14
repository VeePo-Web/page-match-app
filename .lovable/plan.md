

# Performance Optimization & Visual Upgrade Plan

## Current State

The site has a solid foundation: 22 routes, Sacred Sound design tokens, shared components (Section, HeroStrip, PianoKeyNav, MobileStickyBar, RevealOnScroll), 6 AI-generated images, and atmospheric depth on the main landing pages. However, several areas need performance work and visual enrichment.

## Performance Issues to Fix

### 1. SemicolonBreathing — requestAnimationFrame causing React re-renders
The Gateway's `SemicolonBreathing` component calls `setState` on every animation frame (~60/s). This triggers full React reconciliation cycles for a cosmetic opacity change. **Fix:** Replace with a CSS animation or use a ref to manipulate the DOM directly instead of `useState`.

### 2. CardImage mousemove — inline style mutations on every pixel
The parallax card images set `style.transform` on every `mousemove` event. **Fix:** Add `will-change: transform` to the element CSS and throttle/debounce the handler, or use CSS `@property` with custom properties.

### 3. Image loading — no lazy loading, no srcset, no preloading
All 6 images are imported as static assets and load eagerly. The hero images (1920×1080) load even when the user is on the Gateway page. **Fix:** 
- Preload only the Gateway card images on `/`
- Preload only `hero-weddings.jpg` on `/weddings` via `<link rel="preload">`
- Add `loading="lazy"` to all below-fold background images
- Convert to WebP if Vite's image pipeline supports it

### 4. Font loading — no preconnect, no font-display control
Google Fonts are loaded but without `preconnect` hints. **Fix:** Add `<link rel="preconnect">` to `index.html` and verify `font-display` values.

### 5. Lenis smooth scroll — rAF loop runs indefinitely
The `SmoothScrollProvider` runs `requestAnimationFrame` in a permanent loop. This is expected for Lenis, but should use `lenis.on('scroll')` pattern and stop when the page is inactive. **Fix:** Add visibility change detection to pause the rAF loop when the tab is hidden.

### 6. Multiple IntersectionObservers — one per RevealOnScroll instance
Each `RevealOnScroll` and `Section` creates its own IntersectionObserver. On the Weddings page, that's 20+ observers. **Fix:** Consider a shared observer pattern (single observer managing multiple entries via a WeakMap), but this is a lower priority since modern browsers handle multiple observers well.

### 7. PianoKeyNav — creates N observers (one per section)
Each section gets its own observer. **Fix:** Consolidate into a single observer watching all sections.

## Visual Upgrades

### 8. Listen page — bare skeleton
Currently just a hero + "coming soon" text. **Fix:** Build a proper listening room with 4 audio movement placeholders, a now-playing visual state, atmospheric section wrapper, and warm fog.

### 9. Proof page — bare skeleton
Just 3 cards with no atmospheric depth. **Fix:** Upgrade to use `Section` and `HeroStrip` components, add atmospheric depth, and frame each capability as a first-person promise.

### 10. Legal pages — no atmospheric depth
Plain text with no Section wrappers, no grain, no vignette. **Fix:** Wrap in `HeroStrip` + `Section` for consistency.

### 11. NotFound page — minimal atmospheric depth
Has grain but no vignette, no warm fog, no HeroStrip. **Fix:** Add full atmospheric layers.

### 12. CTA buttons — no breathe-glow animation
The `breathe-glow` keyframe exists in CSS but no CTA button uses it. **Fix:** Add `animation: breathe-glow 3.5s ease-in-out infinite` to primary CTA buttons.

### 13. MinimalHeader — no mobile hamburger menu
The header shows nav links but has no mobile overlay menu with staggered reveals. **Fix:** Add a hamburger trigger on mobile that opens a full-screen overlay with display serif links.

## Implementation Order

1. **Fix SemicolonBreathing** — replace useState with CSS animation
2. **Fix SmoothScrollProvider** — add visibility change pausing  
3. **Add font preconnect** to index.html
4. **Consolidate PianoKeyNav** observers into one
5. **Add breathe-glow** to all primary CTA buttons
6. **Upgrade Listen page** — audio movements, atmospheric depth
7. **Upgrade Proof page** — Section wrappers, first-person framing
8. **Upgrade Legal pages** — HeroStrip + Section wrappers
9. **Upgrade NotFound** — full atmospheric layers
10. **Add mobile hamburger menu** to MinimalHeader

## Files Modified

- `src/pages/Gateway.tsx` — SemicolonBreathing CSS refactor, CardImage throttle
- `src/components/SmoothScrollProvider.tsx` — visibility change detection
- `index.html` — font preconnect links
- `src/components/PianoKeyNav.tsx` — single observer
- `src/pages/Listen.tsx` — full rebuild with Section/HeroStrip
- `src/pages/Proof.tsx` — full rebuild with Section/HeroStrip
- `src/pages/Legal.tsx` — add HeroStrip + Section
- `src/pages/NotFound.tsx` — atmospheric layers
- `src/components/MinimalHeader.tsx` — mobile menu overlay
- `src/index.css` — breathe-glow utility class for CTAs

