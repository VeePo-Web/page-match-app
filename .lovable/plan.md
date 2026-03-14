

# Performance Optimization & Visual Upgrade Plan

## Current State Assessment

The wireframe is structurally complete with 22 routes, design tokens, shared components, and the Sacred Sound palette. However, every page is a bare skeleton — flat sections with no atmospheric depth, no imagery, no Ken Burns drifts, no vigil sequence, no PianoKeyNav, no MobileStickyBar, and minimal animation choreography. The Vow Architect project has all of these built out in full.

## Plan: Phase 2 — Full Visual & Performance Overhaul

This plan covers every file that needs work, organized by priority and dependency.

---

### 1. Performance Infrastructure (Do First)

**Create `src/components/animation/RevealOnScroll.tsx` and `StaggerChildren.tsx`**
- Port from Vow Architect's `src/components/animation/` directory
- IntersectionObserver-based with `up`, `scale`, `blur` variants
- GPU-composited (`will-change: transform, opacity`)
- `prefers-reduced-motion` fallback to instant opacity

**Create `src/components/animation/index.ts`** barrel export

**Lazy-load below-fold sections on all landing pages**
- Use `React.lazy()` + `Suspense` for sections below the hero (mirroring Hickory & Rose's pattern)
- This prevents loading all 8-11 section components on initial paint

**Add font preloading to `index.html`**
- `<link rel="preconnect" href="https://fonts.googleapis.com">`
- `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`
- `font-display: swap` for Inter, `font-display: optional` for Cormorant Garamond

---

### 2. Shared Components (Build Once, Use Everywhere)

**Create `src/components/PianoKeyNav.tsx`**
- Port from Vow Architect — vertical piano keys on right edge (desktop), compact dots (mobile)
- IntersectionObserver tracks active section
- Golden thread progress indicator
- Tooltip on hover, vow-yellow active state
- Accepts `sections: { id, label, isBlackKey }[]` prop

**Create `src/components/MobileStickyBar.tsx`**
- Port from Vow Architect — bottom CTA bar on mobile
- Vertical-aware (different CTA text per service)
- Golden scroll progress thread at top
- Fades out when footer CTA enters viewport
- Hidden on contact pages

**Create `src/components/Section.tsx`** (reusable section wrapper)
- Encapsulates the 5-layer section anatomy: background, image (Ken Burns), grain, vignette, content
- Props: `dark`, `id`, `backgroundImage`, `className`
- Every section gets atmospheric depth by default — no flat sections

**Create `src/components/HeroStrip.tsx`** (reusable sub-page hero)
- Replace the repeated `h-[40vh]` hero pattern in SubPages, Listen, Proof, FAQ, About, Contact
- Includes grain, vignette, optional Ken Burns background image
- Props: `title`, `subtitle`, `height`, `backgroundImage`

**Add PianoKeyNav CSS to `index.css`**
- Piano key styles, tooltip positioning, enter/exit animations, golden thread
- Port from Vow Architect's CSS

---

### 3. Gateway Page Upgrade

**Generate 3 AI images** (piano keys in warm light, candlelight on dark surface, hands on keys)
- Use Nano banana 2 model for quality + speed
- No faces, no text, warm desaturated tones, shallow DOF
- Save to `public/images/gateway-weddings.webp`, `gateway-teaching.webp`, `gateway-events.webp`

**Update `src/pages/Gateway.tsx`**
- Replace `CardBg` gradient with actual images at 35% opacity (45% on hover)
- Add semicolon breathing animation to tagline (port from Vow Architect)
- Add Ken Burns drift to card images
- Ensure `prefers-reduced-motion` disables all motion

---

### 4. Wedding Landing Page — Full 11-Act Build

**Refactor `src/pages/Weddings.tsx`** into component-per-section architecture:

Create `src/components/weddings/` directory with:
1. **WeddingsHero.tsx** — Vigil sequence: 8s held breath, grain at 12%, vignette, Ken Burns background, tagline reveal with staggered timing
2. **WeddingsExhale.tsx** — Port TheExhale from Vow Architect (golden dot anchor, recognition statement, golden thread SVG, declaration)
3. **WeddingsProcess.tsx** — Composer's journal section (months of preparation narrative)
4. **WeddingsVowMoment.tsx** — Altar interstitial (dark, minimal, semicolon threshold)
5. **WeddingsInvitation.tsx** — Meet the witness (Parker intro with warm glow)
6. **WeddingsSound.tsx** — Dark listening environment section
7. **WeddingsTransformation.tsx** — Fear→resolution cards ("What if the wind takes our words?")
8. **WeddingsWitness.tsx** — About Parker (exhale/light surface)
9. **WeddingsThreePaths.tsx** — Pricing preview (3 tiers with correct prices from Vow Architect: $650/$750/$1,200)
10. **WeddingsTestimonials.tsx** — Testimonials with atmospheric depth
11. **WeddingsCrossing.tsx** — Final CTA with warm glow pool

**Add PianoKeyNav** with 11 sections defined

**Generate 2-3 AI images** for hero and atmospheric backgrounds

---

### 5. Teaching Landing Page — Full 8-Section Build

**Refactor `src/pages/Teaching.tsx`** and create `src/components/teaching/`:
1. **TeachingHero** — Vigil-lite (shorter pause, piano keys image)
2. **TeachingExhale** — "Music is not a skill. It is a language."
3. **TeachingPillars** — Technique, Expression, Devotion (3 cards)
4. **TeachingMethodology** — First conversation / how lessons work
5. **TeachingThreshold** — Common concerns (fear→resolution)
6. **TeachingStories** — Student testimonials
7. **TeachingOffering** — $60/hr with inclusions
8. **TeachingCrossing** — CTA

**Add PianoKeyNav** with 8 sections

---

### 6. Events Landing Page — Full 8-Section Build

**Refactor `src/pages/Events.tsx`** and create `src/components/events/`:
1. **EventsHero** — Atmospheric hero (gala/dinner imagery)
2. **EventsExhale** — Why live piano matters
3. **EventsOccasions** — Corporate galas, private dinners, memorials
4. **EventsApproach** — How I work with event planners
5. **EventsThreshold** — Common event concerns
6. **EventsExperience** — Past event descriptions
7. **EventsOffering** — 3 presences (Ambient/Featured/Immersive)
8. **EventsCrossing** — CTA

**Add PianoKeyNav** with 8 sections

---

### 7. Sub-Pages Upgrade (Pricing, About, Contact per vertical)

**Refactor `src/pages/SubPages.tsx`** — split into dedicated files or significantly enrich the `SubPageShell`:

**All Pricing Pages** (consistent UX):
- Hero strip with Ken Burns background
- "What every package includes" block
- Pricing tiers (3-column, divider-separated, not bordered cards)
- Add-ons section
- Pricing FAQ (3-4 questions)
- CTA with warm glow

**All About Pages** (consistent UX):
- Hero strip with atmospheric depth
- Origin story section
- Philosophy/approach section
- Covenant/promise section
- CTA

**All Contact Pages** (consistent UX):
- Cinematic hero strip (Ken Burns image, gradient fade)
- Glassmorphism form card (backdrop-blur, subtle border)
- Form sections with overline labels
- Pill selectors for multi-choice (vibe, guest count)
- Trust stats below form (24hr response, 100% rate, Free plan)
- Form validation with zod + react-hook-form

---

### 8. Utility Pages Upgrade

**Listen page**: Add 4 placeholder audio movements with visual now-playing state
**Proof page**: SPL triptych layout, redundancy stack, insurance section with atmospheric depth
**FAQ page**: Add chip filters, expand to 10 questions, add trust stack at bottom
**About page**: Multi-section (origin, sustain, presence, covenant, crossing)
**Contact page**: Port the full Vow Architect contact form (glassmorphism card, pill selectors, trust stats)

---

### 9. CSS & Animation Polish

**Add to `index.css`**:
- Piano key styles (`.piano-key`, `.piano-key--black`, `.piano-key--active`, tooltips)
- Exhale section styles (`.exhale-anchor`, `.exhale-thread-svg`, `.exhale-emphasis`)
- Ken Burns keyframes already exist — verify they're applied everywhere
- Section fade utilities (`.section-fade-top`, `.section-fade-bottom`)
- Breathing glow for CTAs (`.breathe-glow`)
- Mobile sticky bar safe-area padding

**Verify `prefers-reduced-motion`** covers all new animations

---

### 10. Image Generation

Generate AI images using Nano banana 2 for:
- Gateway: 3 card backgrounds (piano keys, candlelight, hands on keys)
- Weddings hero: ceremony venue in warm light, empty chairs, atmospheric
- Teaching hero: piano in a warm room, soft light
- Events hero: elegant venue/gala setting, candlelight
- Contact hero: intimate piano detail shot
- Sub-page heroes: 2-3 atmospheric shots for reuse

All images: no faces, no text, warm desaturated tones, shallow DOF, cinematic

---

### Implementation Order

1. Performance infrastructure (RevealOnScroll, lazy loading, font preload)
2. Shared components (PianoKeyNav, MobileStickyBar, Section, HeroStrip)
3. CSS additions (piano keys, exhale, section fades, breathing glow)
4. Gateway upgrade (images + semicolon breathing)
5. Weddings full build (11 sections)
6. Teaching full build (8 sections)
7. Events full build (8 sections)
8. Sub-pages upgrade (pricing/about/contact consistency)
9. Utility pages upgrade
10. Image generation throughout

This is a large scope — implementation will proceed in batches, starting with infrastructure and shared components, then page-by-page builds.

