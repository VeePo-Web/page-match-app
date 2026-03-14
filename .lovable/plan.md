

# Phase 10: AI Image Generation, Page Transition Upgrade & Cinematic Detail Pass

## What This Phase Covers

The site's structure, motion choreography, accessibility, SEO, and editorial content are now solid. This phase targets the remaining gaps that separate the site from true Awwwards-level craft: **real imagery** (replacing monogram placeholders), **smoother page transitions**, and **granular interaction polish**.

---

## 1. AI-Generated Editorial Images

Generate 4 images using Nano banana 2 (`google/gemini-3.1-flash-image-preview`) and save to `src/assets/`. All images: warm desaturated tones, shallow depth of field, no faces, no text.

| Image | Description | Used In |
|-------|-------------|---------|
| `about-keys.jpg` | Close-up piano keys, golden hour side-light, creamy bokeh background | `About.tsx` right column (replace PG monogram placeholder) |
| `gateway-weddings-new.jpg` | Piano keys with a single wedding band resting on white key, soft warm light | `Gateway.tsx` Weddings card |
| `gateway-teaching-new.jpg` | Open sheet music on a stand, selective focus on notation, warm ambient light | `Gateway.tsx` Teaching card |
| `gateway-events-new.jpg` | Grand piano in an elegant ballroom, wide shot, warm chandelier light, no people | `Gateway.tsx` Events card |

**Implementation:**
- Create a server action or build-time script using the Nano banana 2 API to generate images
- Save base64 output as `.jpg` files in `src/assets/`
- Update imports in `Gateway.tsx` and `About.tsx`
- Add `width`/`height` attributes and descriptive `alt` text
- Gateway card images: keep at `opacity: 0.2` with existing filter treatment
- About image: display at full opacity in the 5-column right slot with `object-fit: cover`

---

## 2. Page Transition Upgrade to framer-motion

**Current:** `PageTransition.tsx` uses CSS classes (`page-transition-content--exit/enter`) with `setTimeout` orchestration. This creates occasional flicker and doesn't synchronize with React's render cycle.

**Upgrade:** Replace with `framer-motion` `AnimatePresence` keyed by `location.key`:

**File:** `PageTransition.tsx`
- Wrap children in `<AnimatePresence mode="wait">`
- Key the inner `<motion.div>` by `location.key`
- Entry: `opacity: 0, y: 8, filter: "blur(3px)"` → `opacity: 1, y: 0, filter: "blur(0)"`
- Exit: reverse with 250ms duration
- Remove the `setTimeout` orchestration and CSS transition classes from `index.css`
- Keep `PageTransitionContext` for `navigateWithTransition` (used by mobile menu)
- Remove dead CSS: `.page-transition-content--exit`, `--enter`, `--idle`

---

## 3. HeroStrip Scroll Cue

**Current:** `HeroStrip.tsx` has no scroll cue. `WeddingsHero.tsx` has one (added in Phase 9).

**Change:** Add the same scroll-cue pattern to `HeroStrip.tsx`:
- "Scroll" text label + 1px breathing line + small chevron SVG
- Tie opacity to `scrollYProgress` so it fades out as user scrolls
- Only render when `height` includes `70vh` or taller (skip for short 35-40vh strips)

---

## 4. WeddingsInvitation GoldFrame

**Current:** `WeddingsInvitation.tsx` uses inline dark styling but no `<GoldFrame>`. The portrait image box has a gold border but no corner accents.

**Change:** Add `<GoldFrame animate={false} />` inside the portrait container for visual hierarchy consistency with `WeddingsVowMoment` and `WeddingsHero`.

---

## 5. WeddingsThreePaths CTA Link Fix

**Current:** "Hold my date" buttons link to `/contact` (general contact). They should link to `/weddings/contact` (wedding-specific inquiry form).

**Fix:** Change `<Link to="/contact">` → `<Link to="/weddings/contact">` in all three tier CTAs.

---

## 6. Mobile Menu Overlay Animation

**Current:** `MinimalHeader.tsx` mobile menu uses conditional rendering with no enter/exit animation. Links use `animate-fade-in` CSS.

**Upgrade:**
- Wrap in `<AnimatePresence>` with `motion.div` for the overlay
- Entry: `opacity: 0` → `opacity: 1` with 300ms
- Exit: `opacity: 1` → `opacity: 0` with 200ms
- Keep existing staggered link animation

---

## 7. Pricing Tier Hover on Dark Cards

**Current:** `WeddingsThreePaths` — the "Most Chosen" dark card (`bg-sage-deep`) has no hover effect because it already has a distinct background.

**Change:** Add `hover:shadow-[0_8px_32px_hsl(var(--gold)/0.12)]` to the chosen tier for a subtle gold glow on hover, matching the editorial hover pattern.

---

## 8. Footer Mobile Spacing Tweak

**Current:** Footer grid uses `gap-fitz-6 md:gap-fitz-9`. On very small screens (320px), the stacked columns still feel tight with the newsletter section.

**Change:** Add `gap-fitz-7` at `sm:` breakpoint: `gap-fitz-6 sm:gap-fitz-7 md:gap-fitz-9`

---

## 9. Dead CSS Cleanup

Remove from `index.css`:
- `.page-transition-content`, `.page-transition-content--exit`, `--enter`, `--idle` (replaced by framer-motion)
- Verify `semicolon-breathe` animation is still used (it's legacy from Vow Architect — if unused, remove)

---

## Implementation Order

1. Generate AI images (highest visual impact)
2. Page transition upgrade to framer-motion
3. HeroStrip scroll cue
4. WeddingsInvitation GoldFrame + WeddingsThreePaths CTA fix
5. Mobile menu animation
6. Pricing hover + Footer spacing
7. Dead CSS cleanup

