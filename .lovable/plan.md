

# Phase 17: Micro-Craft, Narrative Pacing & Cross-Page Cohesion

---

## 1. Gateway: Keyboard Lid & Fallboard Detail

The piano keyboard metaphor lacks the top edge that grounds a real keyboard. Above the keys on a real piano sits the fallboard (key cover) — a thin strip of wood.

**Fix:** Add a thin `h-2` bar above the three keys (desktop only) with a reversed wood gradient (lighter on bottom, darker on top) to simulate the fallboard. This mirrors the shelf below and frames the keys as sitting inside a real instrument.

**File:** `src/pages/Gateway.tsx`

---

## 2. Gateway: Mobile Key Aspect Ratio Fix

On mobile, white keys render with no explicit `min-height`, causing them to collapse to content height. Black key has `minHeight: 140px` but white keys don't. This creates inconsistent heights.

**Fix:** Add `min-h-[160px]` to mobile white keys (the `PianoKeyCard` component when not `isBlack` and on mobile) and ensure all three mobile keys have equal height for visual rhythm.

**File:** `src/pages/Gateway.tsx`

---

## 3. WeddingsHero: Scroll Cue Parity with HeroStrip

`WeddingsHero` uses `animate-bounce` (Tailwind default) on the chevron, while `HeroStrip` uses a refined framer-motion `scaleY` breathing line. This inconsistency makes the Weddings page feel less polished than Teaching/Events.

**Fix:** Replace the `animate-bounce` / `animate-pulse` approach in `WeddingsHero` with the same framer-motion breathing pattern used in `HeroStrip` (lines 129-137): a `motion.div` with `animate={{ scaleY: [0.4, 1, 0.4] }}` and a static SVG chevron without bounce.

**File:** `src/components/weddings/WeddingsHero.tsx`

---

## 4. Section Component: Stagger Content Entrance

Currently `Section` fades the entire content block as one unit (`opacity-0 translate-y-4`). This feels flat compared to the per-element stagger used in `WeddingsTransformation` and `WeddingsTestimonials`.

**Fix:** Add an optional `stagger` prop (default `false`). When true, apply `stagger-reveal` class to the content container so child `.reveal` elements animate with the CSS stagger system. This lets pages opt-in without changing existing behavior.

**File:** `src/components/Section.tsx`

---

## 5. ContactWizard: Missing Keyboard Trap for Accessibility

The wizard form doesn't trap focus within the active step. When a user tabs past the last field, focus escapes to the browser chrome. This is an accessibility gap for keyboard-only users.

**Fix:** Add focus wrapping: when the user tabs past the submit button, cycle focus back to the first field of the current step. Implement via a `keydown` listener on the form that detects `Tab` on the last focusable element and redirects to the first.

**File:** `src/components/contact/ContactWizard.tsx`

---

## 6. FAQ: Accordion Keyboard Navigation

The FAQ accordion items are `<button>` elements (good), but pressing `ArrowDown`/`ArrowUp` doesn't move focus between questions. ARIA accordion pattern recommends this.

**Fix:** Add `onKeyDown` handler to each accordion button: `ArrowDown` focuses next sibling button, `ArrowUp` focuses previous, `Home` focuses first, `End` focuses last.

**File:** `src/pages/FAQ.tsx`

---

## 7. MinimalHeader: Active Route Highlight Missing

Desktop nav links use `NavLink` but only show `text-accent` when active. The CTA button in the header doesn't visually change when the user is on a contact page (it says "You're here" but uses identical styling). This misses the opportunity to reinforce wayfinding.

**Fix:** When `ctaLabel === "You're here"`, render the CTA as a disabled-looking span with `opacity-50 cursor-default` instead of a clickable link. This prevents confusion and reinforces the user's location.

**File:** `src/components/MinimalHeader.tsx`

---

## 8. Footer: Missing Listen Page Link

The footer navigation includes Weddings, Teaching, Events, About, Proof, FAQ, Contact — but omits Listen. Users who discover the Listen page have no footer path back to it.

**Fix:** Add `{ to: "/listen", label: "Listen" }` to the footer nav array, positioned after Proof.

**File:** `src/components/Footer.tsx`

---

## 9. SubPages: About Pages Missing CredentialStrip on Teaching

`WeddingsAbout` and `EventsAbout` include `<CredentialStrip />` but `TeachingAbout` does not. This creates an inconsistency across the three verticals.

**Fix:** Add `<CredentialStrip />` to `TeachingAbout` in a new `<Section>` before the final CTA section.

**File:** `src/pages/SubPages.tsx`

---

## 10. Global: `BackToTop` Missing on SubPages

`SubPageLayout` includes `MinimalHeader`, `Footer`, and `MobileStickyBar` but not `BackToTop` or `ScrollProgress`. Long sub-pages (WeddingsPricing, EventsPricing) lack a way to return to top.

**Fix:** Add `<BackToTop />` and `<ScrollProgress />` to `SubPageLayout`.

**File:** `src/pages/SubPages.tsx`

---

## 11. CredentialStrip: Gold Stat Color Inconsistent in Light Sections

`CredentialStrip` uses `color: hsl(var(--gold))` for stat values. On cream backgrounds, this gold can appear washed out. The `--gold-text` variable was defined specifically for text legibility on light backgrounds.

**Fix:** Change stat color from `hsl(var(--gold))` to `hsl(var(--gold-text))` for better contrast on light sections while remaining gold on dark sections (where `--gold-text` still reads well).

**File:** `src/components/CredentialStrip.tsx`

---

## Implementation Order

1. Gateway fallboard + mobile key height
2. WeddingsHero scroll cue parity
3. Section stagger prop
4. ContactWizard focus trap
5. FAQ arrow key navigation
6. MinimalHeader disabled CTA state
7. Footer: add Listen link
8. TeachingAbout: add CredentialStrip
9. SubPageLayout: add BackToTop + ScrollProgress
10. CredentialStrip: gold-text color fix

