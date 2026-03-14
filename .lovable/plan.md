

# Phase 7: Deep Polish — Gateway Cinematic Upgrade, About/Pricing Editorial Enrichment, Contact Wizard, FAQ Filters, Listen/Proof Depth, Footer Warmth

## Current State

The foundation is solid: sage/cream/gold palette, framer-motion parallax heroes, ScrollProgress, BackToTop, lazy loading, correct pricing. But comparing page-by-page against the Hickory & Rose standard reveals these remaining gaps:

1. **Gateway** — plain CSS `animate-fade-in` cards, no credential strip, no watermark monogram, no editorial intro
2. **About pages** — 2-3 paragraphs each, no credential strip, no pull quotes, no asymmetric editorial layouts
3. **Pricing pages** — basic grid cards, no add-ons section (wedding), no investment philosophy text, no editorial image breaks
4. **Contact pages** — flat single-step forms with no validation, no step indicator, no celebration state, no editorial sidebar
5. **FAQ** — no category chip filters, no trust stack at bottom
6. **Listen** — static "Coming Soon" placeholders, no interactive audio player shell
7. **Proof** — no animated visualizations, no credential strip, no setup gallery
8. **Footer** — functional but no editorial quote, no newsletter placeholder

---

## Plan

### 1. Gateway Cinematic Upgrade
**File:** `src/pages/Gateway.tsx`

- Replace CSS `animate-fade-in` with framer-motion `motion.div` staggered entrances for header, cards, footer
- Add credential strip below cards: three stats ("5–10 Weddings/Year", "Calgary to Banff", "Est. 2018") separated by breathing diamonds
- Add watermark "PG" monogram behind cards at 2% opacity
- Add subtle editorial intro line between header and cards: *"Three paths. One devotion."* in italic serif
- Cards: add `motion.div` with `whileHover={{ y: -4 }}` for smoother lift

### 2. About Pages — Editorial Multi-Section
**Files:** `src/pages/About.tsx`, `src/pages/SubPages.tsx` (WeddingsAbout, TeachingAbout, EventsAbout)

**General About** — expand from 2 sections to 4:
- **Origin story** — asymmetric 5/7 grid (text left, editorial image placeholder right)
- **Philosophy** — sage-deep dark section with large pull quote in Cormorant italic
- **Credential strip** — "500+ Events", "SOCAN Licensed", "$4M Insured" with breathing diamond separators
- **CTA crossing** — keep existing but add breathing diamond above

**Service Abouts** — add a second paragraph, add credential strip, add philosophy pull quote section

### 3. Pricing Pages — Editorial Tier Layout
**File:** `src/pages/SubPages.tsx` (WeddingsPricing, EventsPricing, TeachingPricing)

**WeddingsPricing:**
- Add **wedding add-ons section** below tiers: Custom Song ($75–$150), Short-Notice Booking (+$250), Travel (quoted per km beyond Banff)
- Add **"You can switch tiers up to two weeks before"** reassurance text
- Add **investment philosophy** paragraph: why these prices, what they reflect

**EventsPricing:**
- Already has comparison table — add a trust reassurance below CTA

**TeachingPricing:**
- Add "What a typical lesson looks like" narrative paragraph
- Add credential mention (RCM preparation available)

### 4. Contact Form Wizard
**New files:** `src/components/contact/ContactWizard.tsx`
**Modified files:** `src/pages/Contact.tsx`, `src/pages/SubPages.tsx` (WeddingsContact, TeachingContact, EventsContact)

Build a reusable multi-step form component:
- **Step indicator** with gold progress line (step dots connected by line, current dot filled gold)
- **AnimatePresence** transitions between steps (slide left/right)
- **Step 1: About You** — name, email (required fields with basic HTML validation)
- **Step 2: Details** — varies by service type (wedding: date/venue/guest count; teaching: age/level; events: date/venue/type)
- **Step 3: Your Story** — textarea message
- **Celebration screen** on submit with breathing diamond + "Thank you" message
- **Trust stats** below form (< 24hr response, 100% reply rate, Free consultation)
- Navigation: "Back" ghost button + "Continue" / "Send" primary button
- No external dependencies (no Zod, no react-hook-form) — use controlled state + HTML5 validation

### 5. FAQ — Chip Filters + Trust Stack
**File:** `src/pages/FAQ.tsx`

- Add category tags to each FAQ item
- Add pill/chip filter bar at top: All, Ceremony, Logistics, Pricing
- Filter FAQs by selected category
- Add trust stack at bottom before CTA: three stats with breathing diamond separators ("Never missed a ceremony", "$4M insured", "< 24hr response")

### 6. Listen — Audio Player Shell
**File:** `src/pages/Listen.tsx`

- Replace "Coming Soon" with an interactive player shell per movement:
  - Play/pause button (gold border, triangle icon)
  - Progress bar (thin line, gold fill at 0%)
  - Duration placeholder "—:——"
  - Hover: subtle glow on play button
- No actual audio — shell is visual placeholder that shows intent
- Add editorial intro paragraph above movements

### 7. Proof — Credential Strip + Visual Depth
**File:** `src/pages/Proof.tsx`

- Add credential strip at top of dark section: "500+ Events", "Zero Missed", "$4M Coverage"
- Add breathing diamond between credential strip and proof cards
- Add editorial closing paragraph before CTA: "Every claim is backed by documentation"

### 8. Footer — Editorial Quote
**File:** `src/components/Footer.tsx`

- Add editorial pull quote above the grid: *"Every note crafted to honour your moment."* in Cormorant italic, centered, with editorial rule above and below
- Add subtle newsletter placeholder: email input + "Stay informed" label (non-functional, visual placeholder)

---

## Implementation Order

1. Gateway cinematic upgrade (highest impact, first impression)
2. Contact wizard component + apply to all contact pages
3. About pages editorial enrichment
4. Pricing pages add-ons and philosophy
5. FAQ chip filters + trust stack
6. Listen audio player shell
7. Proof credential strip
8. Footer editorial quote

## No New Dependencies

All changes use existing framer-motion, React state, and Tailwind utilities. No new packages needed.

