

# Phase 14: Bundle Finalization, SEO Structured Data & Lazy-Loading Parity

---

## 1. Remove Unused Dependencies from `package.json`

`@radix-ui/react-label` and `@radix-ui/react-separator` are listed in dependencies but imported nowhere in the codebase. `@tailwindcss/typography` is in devDependencies but not listed in `tailwind.config.ts` plugins.

**Action:** Remove `@radix-ui/react-label`, `@radix-ui/react-separator`, and `@tailwindcss/typography` from `package.json`.

---

## 2. Fix Unused Imports in `useScrollPosition.ts`

The hook imports `useEffect` and `useRef` from React but only uses `useSyncExternalStore`. Dead imports inflate the module graph.

**Action:** Change the import to `import { useSyncExternalStore } from "react"`.

---

## 3. Lazy-Load Teaching & Events Section Components

Weddings page lazy-loads all 9 below-fold sections via `React.lazy` + `Suspense`. Teaching and Events pages eagerly import all sections, increasing initial bundle size for those routes.

**Action:** In `Teaching.tsx` and `Events.tsx`, convert below-fold `Section`-based content blocks into lazy-loaded components. Extract the section groups (everything after the hero) into separate files (`TeachingSections.tsx`, `EventsSections.tsx`) and lazy-import them with `Suspense` fallback matching the Weddings pattern.

---

## 4. JSON-LD Structured Data for Local Business SEO

No structured data exists. Adding `LocalBusiness` schema helps Google surface the site for "wedding pianist Calgary" and similar queries.

**Action:** Create a `StructuredData` component that injects a `<script type="application/ld+json">` into the page head. Include:
- `@type: LocalBusiness` with name, address (Calgary, AB), telephone, url, priceRange
- `@type: Service` entries for Weddings, Teaching, Events
- `areaServed`: Calgary, Cochrane, Canmore, Banff

Add it to `App.tsx` so it renders on every page.

---

## 5. Canonical URL + OG Tags on All Pages

`usePageMeta` was extended in Phase 12 to support `canonical` and `ogImage`, but no page actually passes these values.

**Action:** Add `canonical` (derived from `window.location.origin + pathname`) and `ogImage` (pointing to `/og-image.jpg`) to every `usePageMeta` call across Gateway, Weddings, Teaching, Events, About, Contact, FAQ, Proof, Listen, Legal pages, and SubPages.

---

## 6. `prefers-reduced-motion` in PianoKeyNav Scroll Animation

`PianoKeyNav` uses `scrollIntoView({ behavior: 'smooth' })` which doesn't respect `prefers-reduced-motion`. Users who prefer reduced motion should get instant scrolling.

**Action:** Check `window.matchMedia('(prefers-reduced-motion: reduce)').matches` before calling `scrollIntoView` and pass `behavior: 'auto'` if true.

---

## 7. MobileStickyBar Missing on Contact, FAQ, Legal Pages

The `MobileStickyBar` component only appears on Weddings, Teaching, Events, and SubPages. Contact, FAQ, and general About pages lack it, leaving mobile users without a persistent CTA.

**Action:** Add `<MobileStickyBar />` to `Contact.tsx`, `FAQ.tsx`, and `About.tsx`. Legal pages (Privacy, Terms, Accessibility) can omit it since they're utility pages.

---

## 8. `ScrollProgress` Missing on FAQ & Contact Pages

FAQ and Contact pages are long enough to warrant a scroll progress indicator for orientation.

**Action:** Add `<ScrollProgress />` to `FAQ.tsx` and `Contact.tsx`.

---

## Implementation Order

1. Remove unused deps (`@radix-ui/react-label`, `@radix-ui/react-separator`, `@tailwindcss/typography`)
2. Fix `useScrollPosition.ts` unused imports
3. Lazy-load Teaching & Events below-fold sections
4. Add JSON-LD structured data component
5. Add canonical + OG tags to all `usePageMeta` calls
6. PianoKeyNav reduced-motion scroll fix
7. Add MobileStickyBar to Contact, FAQ, About
8. Add ScrollProgress to FAQ, Contact

