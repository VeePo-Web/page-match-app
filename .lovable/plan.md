

# Phase 8: Performance, Polish & Professional-Grade Refinement

## Assessment After Full Codebase Audit

The site now has strong foundations: framer-motion parallax heroes, lazy-loaded sections, ContactWizard, FAQ filters, credential strips, editorial About/Pricing pages, Listen player shells, and an enriched Footer. Comparing against the luxury standard, here is what remains:

---

## 1. Performance Optimization

### Image Strategy
- **Hero images** are imported as static assets with no `width`/`height` or `fetchPriority`. Add `fetchPriority="high"` to hero `<img>` tags and explicit dimensions to prevent CLS.
- **Below-fold images** (e.g., `invitationPortrait` in `WeddingsInvitation.tsx`, `heroCrossing` in `WeddingsCrossing.tsx`) already use `loading="lazy"` but lack `width`/`height` attributes. Add them.
- Consider converting `backgroundImage` style usage in `HeroStrip.tsx`, `WeddingsHero.tsx`, and `Gateway.tsx` card images to proper `<img>` tags with `object-fit: cover` for better browser optimization and `fetchPriority` support.

### Font Loading
- `index.html` preloads Google Fonts but uses `rel="preload" as="style"` which then needs a separate `<link rel="stylesheet">`. Combine into a single `<link>` with `font-display: swap` (already set in the Google Fonts URL). Remove the duplicate preload/stylesheet pair to reduce render-blocking.

### Lenis Smooth Scroll
- `SmoothScrollProvider.tsx` runs `requestAnimationFrame` in a continuous loop even when no scrolling is happening. Add an idle detection: if Lenis velocity is near zero for 500ms, stop the RAF loop and resume on `scroll` or `wheel` events. This saves CPU on idle pages.

### Page Transition Overhead
- `PageTransition.tsx` references CSS classes `threshold-line`, `threshold-semicolon` that are not defined in `index.css`. These are dead references causing no visual effect but adding DOM nodes. Either implement the threshold transition CSS or remove the overlay div entirely to simplify.

### Bundle Splitting
- `Weddings.tsx` already lazy-loads sections. `Teaching.tsx` and `Events.tsx` do **not** lazy-load their sections (they import `Section`, `RevealOnScroll` etc. directly). Since these pages are already small, the impact is minimal, but for consistency, consider lazy-loading the heaviest wedding-style sections if they grow.

---

## 2. Accessibility & Semantic Fixes

- **Skip-to-content link**: Missing entirely. Add a visually hidden `<a href="#main">Skip to content</a>` as the first focusable element in the DOM, visible on `:focus`.
- **Heading hierarchy**: `Gateway.tsx` jumps from `<h1>` (Parker Gawryletz) to `<h2>` per card — correct. But the Footer uses `<h3>` and `<h4>` without a parent `<h2>`, breaking the heading tree. Wrap Footer in an implied `<h2 class="sr-only">Footer</h2>` or switch to `<p>` with appropriate styling.
- **Form labels**: `ContactWizard.tsx` labels are `<label>` elements but not associated with inputs via `htmlFor`/`id`. Add matching `id` attributes to inputs.
- **Focus management**: After step transition in `ContactWizard`, focus should move to the first input of the new step for keyboard users.
- **Color contrast**: Verify `text-muted-foreground` on `bg-cream` and `bg-sage-deep` meets WCAG AA 4.5:1. The `--muted-foreground` in dark mode is `148 10% 68%` which may be borderline.

---

## 3. SEO Structured Data Enhancement

- `index.html` has `MusicGroup` schema — change to `LocalBusiness` with `@type: ["LocalBusiness", "MusicGroup"]` for better local search visibility.
- Add `hasOfferCatalog` with the three wedding tiers as `Offer` items (The Vow $650, The Hour $750, The Story $1,200).
- Add `geo` coordinates for Calgary.
- Add `sameAs` array for social profiles (Instagram, YouTube).
- Add per-page `<meta>` description via a `usePageMeta` hook that sets `document.title` + `meta[name="description"]` + `meta[property="og:title"]`.

---

## 4. Visual Polish Pass

### Gateway Cards
- The cream gradient overlay (`linear-gradient(to top, hsl(var(--cream)...`) makes cards feel washed out. Reduce bottom opacity from 0.95 to 0.85 and middle from 0.6 to 0.4 for more image presence.
- Add a subtle `border-b-2 border-gold/0 group-hover:border-gold/30` transition on cards for a luxury hover accent.

### Section Transitions
- Between adjacent sections, add a 1px gradient divider (transparent → gold/15 → transparent) for visual rhythm, matching the Footer's existing gold divider pattern. Create a `<SectionDivider />` component.

### WeddingsVowMoment
- Currently has no background layers — just flat `hsl(var(--cream))`. Add a subtle radial glow at center: `radial-gradient(ellipse at center, hsl(var(--gold) / 0.03), transparent 70%)` for warmth.

### Dark Section Consistency
- `WeddingsTestimonials` uses inline `style={{ background: "hsl(var(--sage-deep))" }}` and `data-theme="death"` while `WeddingsProcess` uses `<Section dark>`. Standardize all dark sections to use `<Section dark>` for consistent grain, vignette, and background layers.

### Mobile Sticky Bar
- Currently only shows on `lg:hidden`. Verify touch target is ≥44px (currently `py-3` = 12px + text, total ~48px — acceptable). Add `will-change: transform` for smoother show/hide animation.

---

## 5. Contact Wizard Refinements

- Add `aria-live="polite"` to the step content region so screen readers announce step changes.
- The celebration state currently shows but has no way to navigate away. Add a "Return home" or "Back to [service]" link below the thank-you message.
- Add a subtle progress percentage or "Step X of Y" text for users who miss the dot indicator.
- On the final step, change the submit button to include a subtle loading state (disabled + spinner) to prevent double-submission.

---

## 6. Missing CSS Classes & Dead Code

- `shadow-editorial-hover` is used in `Gateway.tsx` and `WeddingsThreePaths.tsx` but defined in Tailwind config as `editorial-hover`. Verify the class name matches.
- `threshold-line` and `threshold-semicolon` CSS classes referenced in `PageTransition.tsx` are not defined anywhere. Add the CSS or remove the dead DOM.
- `bg-gold` utility is used for buttons/badges but the `gold` color is defined as `hsl(var(--gold))` which resolves to the accent in light mode. Verify this doesn't conflict with `accent` in Tailwind's semantic system.

---

## 7. Footer Newsletter Functionality

- The newsletter email input currently does nothing. Either:
  - Remove it entirely (per "never use dark patterns" — an input that does nothing is misleading), or
  - Add a `mailto:` fallback that opens the user's email client with a pre-filled subject, or
  - Connect to a simple Supabase table to store email signups for future use.

---

## Implementation Order

1. **Performance**: Fix image strategy (fetchPriority, width/height, convert bg-image to img), fix font loading, optimize Lenis idle, clean PageTransition dead code
2. **Accessibility**: Add skip-to-content, fix form label associations, fix heading hierarchy, add focus management to wizard
3. **SEO**: Upgrade structured data to LocalBusiness + Offers, create usePageMeta hook, add per-page descriptions
4. **Visual polish**: Gateway card tuning, SectionDivider component, VowMoment glow, dark section standardization
5. **Contact wizard**: Aria-live, return link, loading state
6. **Dead code cleanup**: Fix shadow class names, remove threshold CSS references

