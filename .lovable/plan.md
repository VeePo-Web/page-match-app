

# Phase 13: Micro-Interaction Depth, Content Architecture & Cross-Page Cohesion

After a thorough audit of every component, page, and style file post-Phase 12, here are the remaining refinements.

---

## 1. Consolidated Scroll Hook for BackToTop + MobileStickyBar

**Problem:** `BackToTop.tsx` and `MobileStickyBar.tsx` each attach independent scroll listeners calculating nearly identical values (scroll position, scroll percentage). This creates redundant work on every scroll frame.

**Fix:** Create `src/hooks/useScrollPosition.ts` that returns `{ scrollY, scrollPercent, isScrolled }` via a single listener with `requestAnimationFrame` throttling. Refactor both components to consume this hook instead of their own `useEffect` + `addEventListener`.

---

## 2. Section.tsx: Remove Redundant `will-change` on Ken Burns Background

**Current:** `Section.tsx` line 51 has `willChange: "transform"` on the background image div that uses `animation: ken-burns`. This promotes the element to a GPU layer permanently, even when the section is off-screen.

**Fix:** Remove `willChange: "transform"` from the background image div in `Section.tsx`. The CSS animation already triggers compositing when needed.

---

## 3. Tailwind Config: Remove Unused Sidebar & Accordion Tokens

**Current:** `tailwind.config.ts` still contains sidebar color tokens (lines 44-53) and accordion keyframes/animations (lines 79-95) that were part of the deleted Radix components. These inflate the generated CSS.

**Fix:** Remove the `sidebar` color block and `accordion-down`/`accordion-up` keyframes and animations from tailwind.config.ts.

---

## 4. CSS Variable Cleanup: Sidebar Variables

**Current:** `index.css` lines 119-126 define `--sidebar-*` CSS variables that are no longer used anywhere (sidebar component was deleted in Phase 12).

**Fix:** Remove the six `--sidebar-*` variable declarations from `:root` in `index.css`.

---

## 5. Gateway: `prefers-reduced-motion` Respect

**Problem:** Gateway page uses multiple `motion.div` elements with staggered entrance animations. Users with `prefers-reduced-motion` still see all animations because framer-motion doesn't automatically respect this preference for `initial`/`animate` transitions.

**Fix:** Add `const reducedMotion = useReducedMotion()` from framer-motion at the top of the Gateway component. Pass `initial={reducedMotion ? false : { opacity: 0, y: 24 }}` to disable entrance animations for accessibility.

---

## 6. WeddingsHero: `fetchPriority` for Above-Fold Image

**Problem:** The hero background image in `WeddingsHero.tsx` is set via CSS `backgroundImage`, which doesn't support `fetchPriority="high"`. This means the browser discovers it late.

**Fix:** Add a hidden `<link rel="preload" as="image" href={heroWeddings} fetchPriority="high" />` in `WeddingsHero` (or better, in `index.html` as a static preload hint). Since the image is imported via Vite, inject a preload `<link>` in the component's `useEffect` on mount.

---

## 7. HeroStrip: Same Preload Treatment

Apply the same image preload pattern to `HeroStrip.tsx` when `backgroundImage` is provided, injecting a `<link rel="preload">` for the background image on mount.

---

## 8. Footer: Unused `motion` Import

**Current:** Footer imports `motion` from framer-motion but doesn't use any motion components — it relies on CSS transitions via `useScrollReveal`. This adds framer-motion to the Footer's chunk unnecessarily.

**Fix:** Remove the `import { motion } from "framer-motion"` line from `Footer.tsx`.

---

## 9. ContactWizard: Form Submission Integration

**Current:** The ContactWizard simulates submission with `setTimeout` (line 95). For a real production site, this needs actual form handling.

**Fix:** Integrate with a `mailto:` link (matching the existing pattern in the footer newsletter) or a Formspree/Netlify Forms endpoint. Since there's no backend, use `mailto:` with pre-filled subject/body from form data as a pragmatic solution, or add a `fetch` to a configurable endpoint URL.

---

## 10. Proof Page: Missing BackToTop & MobileStickyBar

**Current:** `Proof.tsx` doesn't include `BackToTop` or `MobileStickyBar` components, unlike Weddings, Teaching, and Events pages. Users on long scroll pages can't easily return to top or access the CTA.

**Fix:** Add `<BackToTop />` to Proof page. `MobileStickyBar` is less relevant here since Proof is a utility page, but `BackToTop` is warranted.

---

## 11. Listen Page: Same Missing BackToTop

Check and add `<BackToTop />` to `Listen.tsx` if missing.

---

## 12. About Page: Missing ScrollProgress & BackToTop

**Current:** `About.tsx` doesn't include `ScrollProgress` or `BackToTop`, making it inconsistent with the three main service pages.

**Fix:** Add `<ScrollProgress />` and `<BackToTop />` to the About page layout.

---

## Implementation Order

1. Create `useScrollPosition` hook & refactor BackToTop + MobileStickyBar
2. Remove `willChange` from Section.tsx background
3. Clean tailwind.config.ts (sidebar tokens, accordion keyframes)
4. Clean index.css (sidebar variables)
5. Gateway reduced-motion support
6. Hero image preload for WeddingsHero + HeroStrip
7. Remove unused motion import from Footer
8. ContactWizard form submission (mailto integration)
9. Add BackToTop to Proof, Listen, About pages
10. Add ScrollProgress to About page

