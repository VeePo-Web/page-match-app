

# Phase 6: Deep Visual & UX Upgrade — Hickory & Rose Luxury Standard

## Current State Assessment

The site has the correct **sage/cream/gold palette** and **wireframe structure** (Gateway → 3 services → sub-pages), but comparing it side-by-side with Hickory & Rose reveals significant gaps in depth, polish, and professional sophistication:

1. **No framer-motion parallax** — H&R uses `useScroll`/`useTransform` for cinematic hero parallax, watermark text drift, and section reveals. Current site uses CSS-only animations.
2. **No lazy loading** — H&R lazy-loads all below-fold sections. Current site loads everything synchronously.
3. **Contact forms are basic** — H&R has a multi-step wizard with step indicators, validation, animated transitions, editorial sidebar image, and celebration state. Current site has flat single-page forms with no validation.
4. **Sub-pages are skeletal** — About pages are 2-3 paragraphs. Pricing pages are basic grids. No editorial asymmetric layouts, no pull quotes, no credential strips, no comparison tables.
5. **No SEO infrastructure** — H&R has JSON-LD structured data, dynamic `setPageMeta`, and full alt text. Current site only sets `document.title`.
6. **No performance features** — No `ScrollProgress`, no `BackToTop`, no `SectionIndicator`, no `fetchPriority`, no image `width`/`height` attributes for CLS prevention.
7. **Gateway page is plain** — compared to H&R's hero with `GoldFrame`, credential strip, parallax watermark, and editorial intro section.
8. **Footer lacks warmth** — H&R footer has editorial quote, Instagram grid, newsletter signup. Current footer is functional but sparse.

---

## Implementation Plan

### 1. Add framer-motion Parallax System

**Files:** `src/components/HeroStrip.tsx`, `src/components/weddings/WeddingsHero.tsx`

Replace CSS Ken Burns with framer-motion parallax:
- `useScroll` + `useTransform` for hero image Y offset (`["0%", "30%"]`)
- Hero opacity fades on scroll (`[0, 0.8] → [1, 0]`)
- Add parallax watermark text (page title at 3% opacity, offset `["0%", "15%"]`)
- Add `motion.div` entrance animations for overline, title, subtitle with staggered delays
- Add `fetchPriority="high"` and explicit `width`/`height` on hero images

### 2. Multi-Step Contact Form Wizard

**Files:** Create `src/components/contact/InquireStepIndicator.tsx`, `src/components/contact/InquireFormSteps.tsx`, `src/components/contact/InquireCelebration.tsx`. Modify `src/pages/Contact.tsx`, `src/pages/SubPages.tsx` (WeddingsContact, TeachingContact, EventsContact).

Port H&R's form architecture:
- 3-4 step wizard with `AnimatePresence` step transitions
- Step indicator with gold progress line
- Zod validation schema for name + email (required), all else optional
- Wedding form steps: (1) About You — name, email, partner (2) Details — date, venue, guest count (3) Preferences — ceremony vibe pill selector, song requests (4) Your Story — message textarea
- Teaching form steps: (1) About You (2) Student Details — age, level pill selector (3) Goals — message
- Events form steps: (1) About You (2) Event Details — date, venue, type pill selector (3) Vision — message
- Left editorial image sidebar (sticky on desktop, hidden on mobile)
- Celebration screen on submit with breathing diamond animation
- Trust stats below form (< 24hr response, 100% rate, Free consultation)

### 3. Enrich About Pages — Editorial Multi-Section

**Files:** `src/pages/About.tsx`, `src/pages/SubPages.tsx` (WeddingsAbout, TeachingAbout, EventsAbout)

Transform from 2-paragraph pages into 4-5 section editorial layouts:
- **About (General):** Origin story section (asymmetric 5/7 grid), Philosophy section (sage-deep background with pull quote), Experience section (credential strip: 500+ events, SOCAN, $4M insured), Promise section with breathing diamond, CTA crossing
- **Service-specific Abouts:** Same pattern but with service-focused narrative
- Add editorial image in asymmetric column with hover gold-corner reveal
- Add parallax watermark text behind sections

### 4. Enrich Pricing Pages — H&R ServiceTierCard Pattern

**Files:** `src/pages/SubPages.tsx` (WeddingsPricing, EventsPricing, TeachingPricing)

Transform from basic grid to editorial tier layout:
- Each tier gets full-width alternating layout (image left/right, content opposite)
- "What's Included" grid with animated gold checkmarks
- Wedding add-ons section: Custom Song ($75-$150), Short-Notice (+$250), Travel (quoted per km)
- "You can switch tiers up to two weeks before" reassurance
- Editorial image breaks between tiers
- Investment philosophy section (why these prices, what they reflect)

### 5. Gateway Page — Cinematic Upgrade

**Files:** `src/pages/Gateway.tsx`

Add H&R-level sophistication:
- Add framer-motion parallax to card images
- Add credential strip at bottom ("5-10 Weddings/Year", "Calgary to Banff", "Est. 2018")
- Add editorial intro text between header and cards (asymmetric 5/7 grid)
- Stagger card entrance with `motion.div` instead of CSS `animate-fade-in`
- Add watermark "PG" monogram at 2% opacity behind cards

### 6. Performance Optimization

**Files:** `src/pages/Weddings.tsx`, `src/pages/Teaching.tsx`, `src/pages/Events.tsx`, `src/App.tsx`, `index.html`

- Lazy-load all below-fold sections with `React.lazy` + `Suspense` (matching H&R pattern)
- Add `ScrollProgress` component (gold progress bar at top of page)
- Add `BackToTop` button (appears after 50% scroll)
- Add `fetchPriority="high"` on hero images, `loading="lazy"` on all others
- Add explicit `width`/`height` attributes on images for CLS prevention
- Add JSON-LD structured data in `index.html` for LocalBusiness schema

### 7. FAQ Page — Chip Filters + Trust Stack

**Files:** `src/pages/FAQ.tsx`

- Add pill/chip filter tabs at top (All, Ceremony, Logistics, Pricing, Technical)
- Group FAQs by category
- Add trust stack at bottom (response time, insurance, guarantees) with breathing diamond separators
- Add editorial intro section with asymmetric layout

### 8. Listen & Proof Pages — Depth Pass

**Files:** `src/pages/Listen.tsx`, `src/pages/Proof.tsx`

**Listen:**
- Add waveform placeholder visualization per movement
- Add "Now Playing" glow state on hover
- Replace "Coming Soon" with interactive audio player shell (play/pause, progress bar)

**Proof:**
- Add animated SPL meter visualization
- Add setup photo gallery placeholder section
- Add insurance/redundancy diagram
- Add credential strip

### 9. Shared Component Enhancements

**New files:**
- `src/components/ScrollProgress.tsx` — gold progress bar at top
- `src/components/BackToTop.tsx` — scroll-to-top button
- `src/components/EditorialQuoteRibbon.tsx` — full-width parallax quote section
- `src/components/FullWidthImage.tsx` — editorial image break with caption
- `src/components/contact/InquireStepIndicator.tsx`
- `src/components/contact/InquireFormSteps.tsx`
- `src/components/contact/InquireCelebration.tsx`
- `src/components/ui/pill-selector.tsx` — multi-choice pill buttons

**Modified files:**
- `src/components/HeroStrip.tsx` — framer-motion parallax
- `src/components/Section.tsx` — add watermark text prop
- `src/components/Footer.tsx` — add editorial quote, newsletter placeholder

### 10. SEO & Structured Data

**Files:** `index.html`, all page files

- Add JSON-LD `LocalBusiness` schema with correct pricing offers
- Add `setPageMeta` utility for dynamic title/description/canonical
- Add OpenGraph meta tags per page
- Add proper `alt` text audit across all images

---

## Implementation Order

1. **framer-motion parallax + HeroStrip rewrite** (highest visual impact)
2. **Performance: lazy loading, ScrollProgress, BackToTop** (foundation)
3. **Multi-step contact form wizard** (conversion-critical)
4. **Gateway page cinematic upgrade** (first impression)
5. **About pages editorial enrichment** (depth)
6. **Pricing pages editorial enrichment** (conversion)
7. **FAQ chip filters + trust stack** (UX)
8. **Listen & Proof depth pass** (completeness)
9. **SEO + structured data** (discoverability)
10. **Footer enrichment** (polish)

---

## Pricing Verification (Vow Architect Source of Truth)

Already correct in current build:
- Wedding: The Vow $650, The Hour $750 (Most Chosen), The Story $1,200
- Teaching: $60/hr
- Events: Quote-based presences (The Moment, The Evening, The Full Occasion) — no fixed prices

## Dependencies

- `framer-motion` — already in project via Radix/shadcn. Verify it's in `package.json`, add if missing.
- `zod` — needed for form validation. Add to `package.json`.
- `react-hook-form` — optional, can use controlled state like H&R does.

