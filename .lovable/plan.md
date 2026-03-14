

# Deep Visual & UX Upgrade Plan — Phase 3

## Assessment

The current project has the correct architecture (22 routes, Sacred Sound tokens, shared components) but every page is still a simplified wireframe compared to the [Vow Architect](/projects/f66f5b11-2a6d-442e-9f0a-510bdeab85bb) source. The Vow Architect has rich atmospheric depth, multi-layered sections, golden thread ornaments, parallax effects, scroll-linked warmth shifts, glassmorphism forms with validation, and deeply composed copy. This project has flat `Section` wrappers with minimal atmospheric variation and placeholder-level content.

This plan bridges that gap across every page category.

---

## 1. Weddings Landing — Full 11-Act Atmospheric Build

**Current:** 10 sections inline in `Weddings.tsx`, each using the generic `Section` wrapper. Copy is decent but atmospheric depth is skeletal — no golden threads, no Exhale SVG, no Transformation fear/resolution split layout, no piano-key pricing, no multi-testimonial carousel, no Crossing atmospheric layers.

**Upgrade:** Extract each section into its own component under `src/components/weddings/`:

| Component | What changes |
|---|---|
| `WeddingsHero.tsx` | Add vigil sequence phases (useVigilSequence hook already exists). Ken Burns hero image, 8s held breath, staggered reveals at 2s/2.8s/3.6s. VigilFlame component (golden dot that breathes then dissolves). |
| `WeddingsExhale.tsx` | Port the golden dot anchor, recognition statement, golden thread SVG with path animation, and "To let my music sound like what your hearts feel like" declaration from Vow Architect's `TheExhale.tsx`. Add inner/outer glow layers. |
| `WeddingsProcess.tsx` | Add side-by-side layout with parallax image column (from `TheInvitation`). Frame preparation narrative with golden-thread-breathe vertical line. |
| `WeddingsVowMoment.tsx` | Already decent — add golden diamond ornament with breathing animation and dual-direction golden threads above/below. |
| `WeddingsInvitation.tsx` | Port the full 2-column layout from Vow Architect's `TheInvitation`: parallax portrait left, multi-paragraph copy right with vow underline on "Yours", credential strip at bottom (500+ events, SOCAN, $4M insured). Generate AI image for portrait. |
| `WeddingsTransformation.tsx` | Replace simple card grid with the Vow Architect's split layout: fears listed as italic serif text (top), golden thread diamond threshold divider, resolutions with golden left-border (bottom). Port exact copy. |
| `WeddingsThreePaths.tsx` | Replace card grid with Vow Architect's piano-key pricing layout: 3 white keys with black key diamonds between, "MOST CHOSEN" badge on center tier. Use Vow Architect prices ($650/$750/$1,200). |
| `WeddingsTestimonials.tsx` | Port Vow Architect's `TheWitnesses`: 3 testimonials with venue names, golden separators, semicolon closing ornament, vow underline on "stayed". |
| `WeddingsCrossing.tsx` | Port Vow Architect's `CrossOver`: tagline with semicolon heartbeat, word-level micro-stagger quote, dual-layer CTA glow pool, "Always." vow underline, closing golden dot. |

**Copy:** Port directly from Vow Architect. The fears, resolutions, testimonial quotes, pricing descriptions, and Exhale declaration are all specific to Parker's voice.

**New files:** 9 components in `src/components/weddings/` + barrel `index.ts`. `Weddings.tsx` becomes a thin orchestrator.

---

## 2. Teaching Landing — Full 8-Section Build

**Current:** 7 sections, all generic `Section` wrappers with centered text. No atmospheric variation.

**Upgrade:** Extract to `src/components/teaching/`:

| Component | Changes |
|---|---|
| `TeachingHero.tsx` | Vigil-lite: shorter delay (4s vs 8s). Hero image with Ken Burns. Staggered tagline reveal. No full vigil sequence — just timed fade-ins. |
| `TeachingExhale.tsx` | Golden dot anchor + "Music is not a skill. It is a language." + golden thread SVG (simplified version of wedding Exhale). |
| `TeachingPillars.tsx` | 3 cards with golden left-border instead of full border. Hover lift. Background warm fog. |
| `TeachingMethodology.tsx` | Side-by-side: AI image left (piano in warm room), copy right. Parallax on image. |
| `TeachingThreshold.tsx` | Same fear/resolution split as wedding Transformation (serif italic fears, golden divider, resolution with left-border). |
| `TeachingStories.tsx` | 2-3 student testimonials with golden separators (port pattern from `TheWitnesses`). |
| `TeachingOffering.tsx` | Single offering ($60/hr) with inclusions list, warm glow behind price. |
| `TeachingCrossing.tsx` | Simplified Crossing: tagline, CTA with breathe-glow, golden dot. |

---

## 3. Events Landing — Full 8-Section Build

Same extraction pattern as Teaching → `src/components/events/`. Key differences:

- Hero uses events venue image, shorter vigil
- Occasions section: 3 occasion cards (Corporate, Private, Memorial) with atmospheric depth
- Offering: 3 tiers (Ambient/Featured/Immersive) using piano-key layout
- Experience section (new): "Past Events" with 2-3 atmospheric descriptions

---

## 4. Sub-Pages — Consistent UX Templates

### All Pricing Pages
**Current:** Bare lists with bullet points. No atmospheric depth, no inclusions block, no add-ons, no FAQ, no comparison.

**Upgrade pattern (shared across Weddings/Teaching/Events pricing):**
1. HeroStrip with Ken Burns background image
2. "What every package includes" inclusion block (grid of inclusions with golden check marks)
3. Pricing tiers using divider-separated columns (not bordered cards)
4. Add-ons section (Weddings only: rehearsal, reception, custom arrangements)
5. Pricing FAQ (3-4 accordion questions)
6. CTA with warm glow pool

**Wedding pricing** uses Vow Architect's exact prices ($650/$750/$1,200) and copy. Teaching uses $60/hr. Events uses From $800/$1,500/$3,000.

### All About Pages
**Current:** 2-3 paragraphs, no atmospheric depth.

**Upgrade pattern:**
1. HeroStrip with atmospheric portrait image (AI-generated)
2. Origin story section (dark, golden thread ornament)
3. Philosophy/beliefs section (light, warm fog)
4. Covenant/promise section (dark, vow underline emphasis)
5. Credential strip (500+ events, SOCAN, $4M insured)
6. CTA crossing

### All Contact Pages
**Current:** Basic form with `border-b` inputs. No validation, no pill selectors, no celebration state.

**Upgrade pattern (port from Vow Architect's `Contact.tsx`):**
1. Cinematic hero strip with Ken Burns image and gradient fade
2. Glassmorphism form card (`backdrop-blur(12px)`, subtle border, inset glow)
3. Form organized into sections with overline labels and golden dividers between sections
4. Pill selectors for multi-choice (ceremony vibe, guest count on weddings; experience level on teaching; event type on events)
5. Expandable "Add more details" section
6. Full-width CTA button with gradient hover sheen
7. Trust stats below (24hr response, 100% rate, Free consultation)
8. Zod + react-hook-form validation with error states
9. Success celebration state (`ContactCelebration` component)

**New shared components:**
- `src/components/ui/luxury-input.tsx` — Input with floating label, bottom-border focus, error state
- `src/components/ui/pill-selector.tsx` — Multi-choice pill buttons with vow-yellow active state
- `src/components/ContactCelebration.tsx` — Success screen with golden confetti-like elements

---

## 5. Utility Pages

### About (General)
**Current:** 3 paragraphs + CTA. No sections.

**Upgrade:** Multi-section (Origin, Beliefs, Experience, Promise, Crossing) matching the Vow Architect's witness page pattern. 6 sections with PianoKeyNav.

### FAQ
**Current:** 10 accordion items, no chips.

**Upgrade:** Add chip filter tabs at top (Ceremony, Logistics, Pricing, Technical). Group FAQs by category. Add trust stack at bottom (response time, insurance, guarantees).

### Listen
**Current:** Recently upgraded with 4 movements. Good structure.

**Upgrade:** Add actual audio player shell (play/pause buttons with state, progress bar, waveform placeholder). Add "now playing" visual state with warm glow.

### Proof
**Current:** Recently upgraded with 3 cards. Reasonable.

**Upgrade:** Add SPL monitoring visual (animated meter mockup), setup photo gallery placeholder, insurance document download section, redundancy stack diagram.

---

## 6. CSS & Animation Additions

Add to `index.css`:
- `.exhale-anchor` — golden dot (6px, breathing glow)
- `.exhale-thread-svg` — path draw animation (stroke-dasharray/dashoffset)
- `.exhale-emphasis` — vow underline reveal on "sound"
- `.invitation-texture` — paper-like warm background
- `.piano-white-key` / `.piano-black-key` — piano pricing layout styles
- `.paths-chosen-badge` — "MOST CHOSEN" pill
- `@keyframes semicolon-heartbeat` — scale pulse for semicolon
- `@keyframes invitation-rule-breathe` — golden thread breathing in invitation
- `.crossing-golden-dot` — breathing closing dot
- `.cta-breathe-glow` — CTA breathing shadow (alias for existing breathe-glow)

---

## 7. AI Image Generation

Generate using Nano banana 2 (no faces, no text, warm desaturated, shallow DOF):
- **Invitation portrait:** Grand piano keys in warm candlelight, shallow DOF, intimate close-up
- **Teaching methodology:** Piano in a warm sunlit room, soft natural light through window
- **Events occasions:** Elegant venue with candlelit tables, empty before guests arrive
- **Contact hero:** Hands above piano keys (no face), warm side lighting
- **About portrait:** Piano from behind, warm room, single candle, atmospheric depth

---

## Implementation Order

1. Wedding component extraction (9 files) — highest visual impact
2. CSS additions for new component styles
3. Teaching component extraction (8 files)
4. Events component extraction (8 files)
5. Contact page overhaul (shared form components, validation, celebration)
6. Pricing pages enrichment
7. About pages enrichment
8. Utility page upgrades (FAQ chips, Listen player, Proof depth)
9. AI image generation throughout

---

## Files Created/Modified

**New files (~30):**
- `src/components/weddings/` — 9 components + index.ts
- `src/components/teaching/` — 8 components + index.ts
- `src/components/events/` — 8 components + index.ts
- `src/components/ui/luxury-input.tsx`
- `src/components/ui/pill-selector.tsx`
- `src/components/ContactCelebration.tsx`

**Modified files (~15):**
- `src/pages/Weddings.tsx` — thin orchestrator
- `src/pages/Teaching.tsx` — thin orchestrator
- `src/pages/Events.tsx` — thin orchestrator
- `src/pages/SubPages.tsx` — enriched pricing/about/contact
- `src/pages/Contact.tsx` — glassmorphism + validation
- `src/pages/About.tsx` — multi-section
- `src/pages/FAQ.tsx` — chip filters + trust stack
- `src/pages/Listen.tsx` — audio player shell
- `src/pages/Proof.tsx` — extended sections
- `src/index.css` — new component styles

