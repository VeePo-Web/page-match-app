

# Phase 16: Visual Depth, Typographic Refinement & Interaction Polish

A thorough audit of every component, page, and style after Phase 15 reveals the following opportunities to elevate craft, cohesion, and perceived quality.

---

## 1. Gateway Piano Keys: Visual Fidelity Upgrade

**Problem:** The current piano key cards lack the physical presence of real piano keys. The white keys have no side shadow to suggest depth, and the gap between white keys doesn't convincingly read as the natural spacing between real piano keys.

**Fix:**
- Add a subtle `box-shadow: inset -1px 0 0 hsl(var(--lines)/0.3)` on the left white key's right edge and `inset 1px 0 0 hsl(var(--lines)/0.3)` on the right white key's left edge to suggest physical separation
- Add a 1px bottom border on the black key in a slightly lighter shade to suggest the felt strip beneath real black keys
- On hover-press, shift the background gradient slightly (brighten the bottom 10%) to simulate light catching the depressed key
- On mobile, add a subtle left-border accent (2px gold) to the black key card to visually distinguish it from white keys

**File:** `src/pages/Gateway.tsx`

---

## 2. WeddingsVowMoment: Typographic Scale Refinement

**Problem:** The pull quote uses `clamp(42px,5.5vw,64px)` which can feel overwhelming on mid-size tablets (~900px). The line breaks between "Every vow spoken" / "becomes sacred" / "the moment it's heard" create awkward orphans at certain widths.

**Fix:**
- Adjust clamp to `clamp(36px,5vw,58px)` for better proportional scaling
- Add `text-wrap: balance` to the blockquote for more even line distribution
- Increase the transition delay stagger between lines from 400ms to 500ms for a more deliberate reveal

**File:** `src/components/weddings/WeddingsVowMoment.tsx`

---

## 3. WeddingsInvitation: Image `willChange` Cleanup

**Problem:** Line 61 has `willChange: "transform"` on the image column div. This was identified in Phase 13 as a pattern to avoid (promotes GPU layer permanently).

**Fix:** Remove `willChange: "transform"` from the image column's inline style. The rAF-based scroll handler already handles performance.

**File:** `src/components/weddings/WeddingsInvitation.tsx`

---

## 4. Footer: Newsletter CTA Hierarchy

**Problem:** The "Subscribe via Email" link in the footer looks identical in weight to the navigation links above it. It should feel like a distinct, inviting action.

**Fix:**
- Add a subtle `hover:bg-gold/15` and increase border opacity on hover to `border-gold/50`
- Add an arrow (`→`) that slides in on hover, matching the Gateway card CTA pattern

**File:** `src/components/Footer.tsx`

---

## 5. Teaching & Events: Missing Scroll Cue on Hero

**Problem:** Both Teaching and Events pages pass `showScrollCue` to `HeroStrip`, but the scroll cue animates with a bouncing chevron that uses generic Tailwind `animate-bounce`. The Weddings hero has a more refined custom scroll cue with a breathing gold line and subtle SVG chevron.

**Fix:** The `HeroStrip` scroll cue already has the refined version (breathing scaleY line + SVG). Verify Teaching/Events render it correctly. No code change needed — this was already addressed.

---

## 6. Proof Page: Missing `ScrollProgress` and `MobileStickyBar`

**Problem:** Proof page has `BackToTop` but lacks `ScrollProgress` for orientation and `MobileStickyBar` for mobile CTA access.

**Fix:** Add `<ScrollProgress />` and `<MobileStickyBar />` to `Proof.tsx`.

**File:** `src/pages/Proof.tsx`

---

## 7. Listen Page: Missing `ScrollProgress` and `MobileStickyBar`

**Problem:** Same as Proof — Listen has `BackToTop` but no progress bar or mobile CTA.

**Fix:** Add `<ScrollProgress />` and `<MobileStickyBar />` to `Listen.tsx`.

**File:** `src/pages/Listen.tsx`

---

## 8. Contact Page: Remove Redundant `MobileStickyBar`

**Problem:** `Contact.tsx` includes `MobileStickyBar`, but `MobileStickyBar` already filters itself out when `pathname.endsWith("/contact")`. This means it renders `null` but still mounts the component and its scroll hook. Removing it from the Contact page avoids the unnecessary hook execution.

**Fix:** Remove `<MobileStickyBar />` from `Contact.tsx`.

**File:** `src/pages/Contact.tsx`

---

## 9. WeddingsCrossing: Missing Component

**Problem:** `WeddingsCrossing` is imported and rendered but I haven't reviewed its content.

**Fix:** Read and verify `WeddingsCrossing.tsx` exists and renders correctly. *(Already confirmed in file list — no action needed.)*

---

## 10. CSS: Hover Scale Consistency

**Problem:** Some CTAs use `hover:scale-[1.02] active:scale-[0.98]` (Teaching crossing, Events crossing, About, Listen) while others don't (Gateway credentials, SubPages CTAs). This inconsistency in micro-interaction creates an unpolished feel.

**Fix:** Standardize all primary CTA buttons (the `bg-gold text-sage-deep` and `bg-primary text-primary-foreground` variants) to include `hover:scale-[1.02] active:scale-[0.98]` transition. Update:
- `SubPages.tsx`: WeddingsPricing CTA (line 129), EventsPricing CTA (line 278)
- Any other CTA buttons that lack this pattern

**Files:** `src/pages/SubPages.tsx`

---

## 11. WeddingsThreePaths: Tier Cards Hover Inconsistency

**Problem:** White tier cards have `hover:-translate-y-1 hover:shadow-editorial-hover` but the green (chosen) card only has `hover:shadow-[0_8px_32px_hsl(var(--gold)/0.12)]`. The chosen card should also lift slightly on hover.

**Fix:** Add `hover:-translate-y-0.5` to the chosen tier card class for subtle lift feedback.

**File:** `src/components/weddings/WeddingsThreePaths.tsx`

---

## 12. Global: `<img>` Width/Height Attributes

**Problem:** `WeddingsInvitation.tsx` correctly sets `width` and `height` on its `<img>` to prevent CLS. But `About.tsx` image (line 58-62) also has it. Verify all lazy-loaded images across the site have explicit `width`/`height` attributes.

**Fix:** Audit complete — both images have width/height. No action needed.

---

## Implementation Order

1. Gateway piano key visual depth (inset shadows, mobile accent)
2. WeddingsVowMoment typographic scale fix
3. WeddingsInvitation remove `willChange`
4. Footer newsletter CTA polish
5. Proof page: add ScrollProgress + MobileStickyBar
6. Listen page: add ScrollProgress + MobileStickyBar
7. Contact page: remove MobileStickyBar
8. SubPages CTA hover scale standardization
9. WeddingsThreePaths chosen card hover lift

