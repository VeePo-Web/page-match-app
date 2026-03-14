

# Phase 12: Performance Optimization, Accessibility Hardening & Final Craft

---

## 1. Performance: Reduce Bundle & Runtime Cost

### 1a. Tree-shake Unused Radix Packages
The `package.json` includes 20+ Radix UI packages (accordion, alert-dialog, avatar, calendar, carousel, chart, checkbox, collapsible, command, context-menu, dialog, drawer, hover-card, input-otp, menubar, navigation-menu, pagination, radio-group, resizable, scroll-area, select, separator, slider, switch, table, tabs, toggle, toggle-group). The site only uses `tooltip` and `toast`. The unused packages inflate the bundle.

**Action:** Remove unused Radix packages from `package.json` and delete their corresponding barrel-export files from `src/components/ui/` (accordion.tsx, alert-dialog.tsx, avatar.tsx, calendar.tsx, carousel.tsx, chart.tsx, checkbox.tsx, collapsible.tsx, command.tsx, context-menu.tsx, dialog.tsx, drawer.tsx, hover-card.tsx, input-otp.tsx, menubar.tsx, navigation-menu.tsx, pagination.tsx, radio-group.tsx, resizable.tsx, scroll-area.tsx, select.tsx, slider.tsx, switch.tsx, table.tsx, tabs.tsx, toggle.tsx, toggle-group.tsx). Keep: button, form, input, label, separator, sonner, toast, toaster, tooltip, badge, breadcrumb, card, popover, progress, skeleton, textarea, sheet, sidebar, dropdown-menu.

Also remove unused top-level deps: `recharts`, `embla-carousel-react`, `react-resizable-panels`, `cmdk`, `input-otp`, `react-day-picker`, `date-fns`, `vaul`, `next-themes`, `react-hook-form`, `@hookform/resolvers`, `zod` — verify none are imported first.

### 1b. Lazy-load Framer Motion per Route
Currently `framer-motion` is imported eagerly in Gateway, every hero, every section. Since it's the largest dependency (~45KB gzipped), ensure it's only in the critical path for the current route via the existing lazy-loading in Weddings.tsx. Verify Teaching.tsx and Events.tsx also lazy-load their section components.

### 1c. Image Optimization
All AI-generated images are full-resolution JPGs stored in `src/assets/` and bundled by Vite. At build time these get base64-inlined or hashed. For images >100KB:
- Convert to WebP format with quality 80 using a Vite plugin or manual conversion
- Add `fetchPriority="high"` to above-fold hero images (`WeddingsHero`, `HeroStrip` backgrounds, Gateway card images)
- Ensure all below-fold images have `loading="lazy"` and `decoding="async"` (already done for most)

### 1d. CSS `will-change` Audit
`will-change: opacity, transform` on every `.reveal` element (potentially dozens per page) creates excessive GPU layer promotion. 
**Action:** Remove `will-change` from the `.reveal` base class in `index.css`. The CSS animations already trigger compositing. Keep `will-change-transform` only on the Gateway CardImage (active mouse tracking) and MobileStickyBar (active translate animation).

### 1e. Reduce Scroll Event Listeners
Multiple components attach independent scroll listeners: `MinimalHeader`, `BackToTop`, `MobileStickyBar`, `ScrollProgress`, `PianoKeyNav` (IntersectionObserver — fine), plus Lenis. The header also recalculates scroll progress inline on every render when `isScrolled` is true (line 84 of MinimalHeader reads `window.scrollY` during render).

**Action:** 
- Remove the inline scroll progress calculation from MinimalHeader (the `ScrollProgress` component already provides this via framer-motion's `useScroll` — no need for a duplicate progress bar in the header)
- Consolidate `BackToTop` and `MobileStickyBar` scroll listeners into a single shared hook that broadcasts scroll position

---

## 2. Accessibility Hardening

### 2a. FAQ Page: `<a href>` to `<Link to>`
`FAQ.tsx` line 122 still uses `<a href="/contact">` — the last remaining raw anchor. Fix to `<Link to="/contact">`.

### 2b. Keyboard Focus Visible Styles
No `:focus-visible` ring is defined globally. Keyboard users see no focus indicator on buttons, links, or form inputs.
**Action:** Add to `index.css`:
```css
:focus-visible {
  outline: 2px solid hsl(var(--gold));
  outline-offset: 2px;
}
```

### 2c. Skip-to-Content Target
`SkipToContent` component exists but may not have a matching `id="main-content"` on the `<main>` element across all pages.
**Action:** Add `id="main-content"` to the `<main>` tag in every page layout (Weddings, Teaching, Events, About, FAQ, Proof, Listen, Contact, SubPages, Legal, NotFound, Gateway).

### 2d. ARIA Landmarks
- Gateway page lacks `role="main"` — it uses `<main aria-label>` which is correct
- Footer uses `aria-label="Site footer"` — correct
- MinimalHeader mobile menu overlay lacks `role="dialog"` and `aria-modal="true"`

**Action:** Add `role="dialog"` and `aria-modal="true"` to the mobile menu `motion.div` in MinimalHeader.

### 2e. Color Contrast Audit
The `overline` class uses `hsl(var(--gold))` which is `hsl(40 45% 52%)` — approximately #B99A4D on cream `hsl(40 30% 95%)`. This yields a contrast ratio of ~2.8:1, below the 4.5:1 WCAG AA minimum for normal text (13px, which is the overline size).

**Action:** Darken the gold for text usage: add `--gold-text: 40 45% 38%` to `:root` and use it in the `.overline` class. Keep `--gold` for decorative elements (borders, frames, diamonds).

---

## 3. Interaction & UX Polish

### 3a. Header CTA Routing
The header CTA always links to `/contact` (general contact). It should route to the service-specific contact page based on the current route context (same logic as MobileStickyBar).

**Action:** In `MinimalHeader.tsx`, change the CTA `<Link to="/contact">` to use the same service-aware routing:
- `/weddings/*` → `/weddings/contact`
- `/teaching/*` → `/teaching/contact`  
- `/events/*` → `/events/contact`
- default → `/contact`

### 3b. Scroll-to-Top Flash Fix
The current `useLayoutEffect` with `window.scrollTo(0, 0)` fires before the exit animation completes in `AnimatePresence mode="wait"`. This causes a visual jump.

**Action:** Move scroll-to-top into the `onExitComplete` callback of `AnimatePresence` instead of a layout effect. This ensures the old page fades out first, then scroll resets, then new page fades in.

### 3c. PianoKeyNav Active State on Page Load
When landing directly on `/weddings` (not scrolling), the PianoKeyNav shows no active section until the user scrolls. The IntersectionObserver requires scrolling to trigger.

**Action:** In `PianoKeyNav`, set `activeId` to `sections[0].id` as the default state, so the hero section is highlighted on initial load.

---

## 4. Typography & Content Precision

### 4a. Body Copy `mx-auto` Consistency
Several `<p>` tags with `max-width` constraints (from the base CSS `max-width: 66ch`) sit inside left-aligned containers without `mx-auto`, causing them to hug the left edge instead of centering when the parent is `text-center`.

**Action:** Audit `WeddingsAbout`, `TeachingAbout`, `EventsAbout` in SubPages.tsx — add `mx-auto` to body `<p>` tags inside centered sections.

### 4b. Blockquote Sizing Standardization
Main About page uses `text-2xl md:text-3xl` for blockquotes. Sub-page About pages use `text-xl md:text-2xl`. This is correct hierarchy. Verify Events About and Teaching About match.

---

## 5. Meta & SEO

### 5a. Canonical URLs
No `<link rel="canonical">` is set. This is important for SEO to prevent duplicate content issues.

**Action:** Extend `usePageMeta` to accept an optional `canonical` param and inject `<link rel="canonical" href="...">` into the document head.

### 5b. Open Graph Image
`public/og-image.jpg` exists but `usePageMeta` doesn't set `og:image`. 

**Action:** Add `og:image`, `og:type`, `og:url`, and `twitter:card` meta tags in `usePageMeta`.

---

## Implementation Order

1. Remove unused packages & UI components (largest bundle impact)
2. Fix scroll-to-top timing (move to `onExitComplete`)
3. FAQ `<a>` → `<Link>` fix
4. Add `:focus-visible` global styles
5. Add `id="main-content"` to all pages
6. Header CTA service-aware routing
7. PianoKeyNav default active state
8. Mobile menu ARIA attributes
9. Remove `will-change` from `.reveal`
10. Gold text contrast fix (`--gold-text`)
11. Remove header duplicate scroll progress bar
12. Add OG meta tags to `usePageMeta`

