

# Phase 4: Full Visual UI/UX Overhaul — Hickory & Rose Luxury Standard

## The Problem

The current site still looks and feels like the Vow Architect — dark, heavy charcoal with gold accents, atmospheric grain everywhere, and a "vigil/death" aesthetic. The user explicitly wants to **move away from this look entirely** and toward the warm, refined, editorial luxury of [Hickory & Rose](/projects/7f1ad5b8-2dd7-4239-9f44-54c33d440e80) — sage greens, warm cream, editorial typography, gold-traced frames, breathing diamonds, cinematic parallax heroes, asymmetric layouts, and a feeling of calm sophistication rather than dark ceremony.

This is a **complete color, typography, interaction, and visual identity overhaul** while keeping the same wireframe structure (Gateway → 3 services → sub-pages).

---

## 1. New Color System — Warm Sage/Cream/Gold (Replace Charcoal/Gold)

Replace the entire CSS variable system in `index.css`:

| Token | Current (Vow Architect) | New (Luxury Sage) |
|---|---|---|
| `--background` | `40 20% 98%` (barely warm) | `40 20% 98%` (warm white — keep) |
| `--card` | `40 30% 95%` | `40 30% 95%` (cream — keep) |
| `--primary` | `45 100% 76%` (vow-yellow) | `140 25% 35%` (sage deep green) |
| `--primary-foreground` | dark text | `40 20% 98%` (warm white) |
| `--accent` | `88 76% 62%` (vine-green) | `40 50% 55%` (gold) |
| Dark sections | `--rich-black` charcoal | `140 25% 35%` (sage deep) — rich, warm, not black |
| `--muted-foreground` | `30 12% 42%` | `30 12% 32%` (darker for better contrast) |

New brand tokens:
- `--sage-deep: 140 25% 35%` — primary, nav, CTAs, dark sections
- `--sage: 140 20% 45%` — secondary accents
- `--sage-light: 140 25% 90%` — light backgrounds
- `--cream: 40 30% 95%` — card backgrounds
- `--gold: 40 50% 55%` — decorative accents (breathing diamonds, frames, separators)
- `--warm-white: 40 20% 98%` — page background

Remove: `--vow-yellow`, `--vine-green`, `--flame-core`, `--rich-black`, `--ebon-charcoal` as primary drivers. Keep them as legacy aliases but repurpose all usage.

**Files:** `src/index.css` (complete `:root` and `[data-theme="death"]` rewrite)

---

## 2. Typography — Add Jost, Refine Hierarchy

Port Hickory & Rose's typography system:
- **Display:** Cormorant Garamond (keep) — weight 400, not 600
- **Body:** Replace Inter with **Jost** — lighter, more editorial
- Add `font-display: swap` for both in `index.html`
- Add font overline utility: `.font-overline` (Jost, 0.8125rem, 400, 0.2em tracking, uppercase)
- Reduce heading weights: h1 from 600→400, h2 from 500→400
- Add `text-wrap: balance` on headings, `text-wrap: pretty` on paragraphs

**Files:** `index.html` (font links), `src/index.css` (typography rules), `tailwind.config.ts` (fontFamily)

---

## 3. Gateway Page — Warm Editorial Redesign

Replace the dark/vigil aesthetic with Hickory & Rose's warm editorial approach:
- **Background:** Warm white (`--warm-white`) instead of `data-theme="death"`
- **Cards:** Remove dark overlay gradients. Use cream cards with sage border on hover, subtle lift shadow. Image at ~20% opacity with warm color grading
- **Header:** Show brand name in Cormorant Garamond, light weight, with gold shimmer on load
- **Tagline:** Replace semicolon-breathe with a simple editorial rule + tagline in italic serif
- **Interaction:** Cards get a gold-traced corner reveal on hover (port from H&R's `GoldFrame` pattern)
- **CTA text:** "Step Inside →" is good — keep it

**Files:** `src/pages/Gateway.tsx`

---

## 4. Navigation — Port Hickory & Rose's Editorial Nav

Replace `MinimalHeader.tsx` with a proper luxury nav:
- Full-width nav with logo left, links center, CTA right
- Desktop: Cormorant Garamond links with gold underline on active (using `layoutId` for smooth transition)
- On scroll: condenses to monogram "PG" with page context label
- Gold scroll progress bar at bottom of nav
- Mobile: Full-screen overlay with staggered serif link reveals
- CTA button: Sage green with gold shimmer sweep on hover

**Files:** `src/components/MinimalHeader.tsx` (major rewrite)

---

## 5. Section Component — Warm Editorial, Not Dark Vigil

Replace the heavy atmospheric `Section.tsx`:
- Remove: Film grain, warm fog, heavy vignettes on light sections
- Keep grain + vignette only on hero sections and dark (sage-deep) sections at low opacity
- Light sections: Clean cream background, subtle border-top/bottom separators
- Dark sections: Use `sage-deep` (green) instead of `rich-black` (charcoal)
- Add: Gold editorial rule separator between sections (48px wide, 1px, centered)
- Add: Breathing diamond ornaments between major sections

**Files:** `src/components/Section.tsx`

---

## 6. HeroStrip — Cinematic Parallax (Port from H&R)

Replace the flat gradient hero with H&R's parallax hero:
- Full background image with parallax scroll (`useScroll` + `useTransform`)
- Gradient overlays: `from-black/35 via-black/15 to-black/50`
- Grain overlay + vignette (CSS classes)
- Large watermark text behind content (page title at 3% opacity)
- Gold-traced frame corners (port `GoldFrame` component)
- Credential strip at bottom with breathing diamond separators
- Section index number (bottom-right, 15% opacity)

**Files:** `src/components/HeroStrip.tsx` (major rewrite), create `src/components/GoldFrame.tsx`, create `src/components/BreathingDiamond.tsx`

---

## 7. Weddings Page — Editorial Luxury

Replace vigil sequence with warm editorial:
- **Hero:** Cinematic parallax (not vigil sequence). Remove `useVigilSequence`. Use H&R hero pattern with animated headline, gold frame, credential strip
- **Exhale:** Keep golden dot but change to breathing diamond. Use gold/sage colors instead of vow-yellow
- **Process/Invitation:** Asymmetric 2-column layout (editorial image left, copy right) — port from H&R's editorial split
- **Transformation:** Keep fear/resolution but use sage-deep background, gold left-borders
- **Three Paths:** Keep piano-key pricing but update colors (sage/cream instead of charcoal/ivory)
- **Testimonials:** Add gold quote marks, attribution with gold separator, sage-deep background
- **Crossing:** Sage-deep CTA section with breathing diamond, gold shimmer on button

**Files:** All files in `src/components/weddings/`

---

## 8. Teaching & Events Pages — Same Editorial Treatment

Apply the same warm editorial patterns:
- Replace flat `Section` dark sections with sage-deep backgrounds
- Add asymmetric layouts where currently centered
- Add gold editorial rules between sections
- Cards: cream background, sage border, gold accents
- CTAs: sage green buttons with gold shimmer

**Files:** `src/pages/Teaching.tsx`, `src/pages/Events.tsx`

---

## 9. Sub-Pages — Consistent Luxury Templates

**Pricing pages:** Port H&R's `ServiceTierCard` pattern — each tier gets an editorial image, includes list with gold animated checkmarks, asymmetric layout

**Contact pages:** Port H&R's multi-step form wizard with:
- Step indicator with gold progress
- Pill selectors for ceremony type/guest count
- Editorial image sidebar (sticky on desktop)
- Gold input focus effect (`.input-gold-focus`)
- Celebration state on submit

**About pages:** Multi-section editorial with asymmetric layouts, pull quotes, editorial rules

**Files:** `src/pages/SubPages.tsx` (major enrichment), `src/pages/Contact.tsx`, `src/pages/About.tsx`

---

## 10. Shared Components to Create

| Component | Purpose |
|---|---|
| `GoldFrame.tsx` | Gold-traced corner lines that animate in on hero sections |
| `BreathingDiamond.tsx` | Small rotating diamond with breathing glow — section separators |
| `ScrollReveal.tsx` | Replace `RevealOnScroll` naming for consistency with H&R |
| `EditorialRule.tsx` | 48px gold gradient horizontal rule |
| `EditorialQuoteRibbon.tsx` | Full-width quote section with parallax |

---

## 11. CSS Overhaul

Remove from `index.css`:
- All "death theme" references → rename to "dark" using sage-deep
- Remove `--vow-yellow` as primary accent → replace with `--gold`
- Remove vigil-specific animations (`flame-breathe`, `semicolon-heartbeat`, `semicolon-breathe`)
- Remove piano-key pricing charcoal colors → use sage/cream

Add to `index.css`:
- `.grain-overlay` and `.vignette` (from H&R — cleaner implementation)
- `.input-gold-focus` (gold underline on form focus)
- `.shimmer-gold` (text shimmer for editorial accents)
- `.drop-cap` (editorial first-letter styling)
- `.editorial-rule` (3rem gold line)
- Breathing diamond keyframes
- Gold frame line animations

---

## 12. Footer — Warm Editorial

Replace dark charcoal footer with sage-deep background:
- Sage green background instead of rich-black
- Gold separators instead of vow-yellow
- Warm white text
- Editorial rule above footer
- Breathing diamond ornament between sections

**Files:** `src/components/Footer.tsx`

---

## Implementation Order

1. **Color system + typography** (`index.css`, `tailwind.config.ts`, `index.html`) — everything downstream depends on this
2. **Shared components** (GoldFrame, BreathingDiamond, EditorialRule)
3. **Section.tsx + HeroStrip.tsx** — warm editorial wrappers
4. **MinimalHeader + Footer** — navigation + footer in new palette
5. **Gateway page** — warm editorial redesign
6. **Weddings page** — all 10 components updated to sage/cream/gold
7. **Teaching + Events** — editorial treatment
8. **Sub-pages** — pricing/about/contact enrichment
9. **Utility pages** (About, Contact, FAQ, Listen, Proof)

This is a fundamental visual identity change affecting every file in the project. The wireframe structure stays identical — only the colors, typography weight, atmospheric treatment, and interaction patterns change from "dark ceremony vigil" to "warm editorial luxury."

