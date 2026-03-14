

# Phase 11: Scroll-to-Top, Content Richness, Interaction Depth & Final Polish

After a thorough audit of the full codebase post-Phases 8-10, here are the remaining refinements to bring this site to true Awwwards-submission quality.

---

## 1. Scroll-to-Top on Page Navigation

**Problem:** When navigating between pages, the new page appears at the previous scroll position instead of the top. The framer-motion `AnimatePresence` in `PageTransition.tsx` handles visual transitions but never calls `window.scrollTo(0, 0)`.

**Fix:** In `PageTransition.tsx`, add a `useEffect` keyed on `location.pathname` that scrolls to top on route change. Place it inside the component before the `AnimatePresence` block.

---

## 2. Dead CSS Cleanup

**File:** `index.css`
- Remove the `semicolon-breathe` keyframes and `.semicolon-breathe` class (lines ~430-435) -- confirmed unused anywhere in the codebase.
- The `page-transition-content` CSS was already replaced in Phase 10. Verify no remnants remain.

---

## 3. HeroStrip Scroll Cue Activation

**Problem:** The `showScrollCue` prop was added to `HeroStrip.tsx` but is never passed `true` by any page. Teaching and Events pages both use `HeroStrip` with `height="h-[70vh]"` (tall enough to warrant a cue) but don't pass the prop.

**Fix:** In `Teaching.tsx` and `Events.tsx`, add `showScrollCue` to the `<HeroStrip>` call. Also add it to the Listen page and Proof page where height >= 50vh.

---

## 4. Image Dimensions for CLS Prevention

**Problem:** Several images still lack `width`/`height` attributes, causing cumulative layout shift:
- `WeddingsHero.tsx` uses `backgroundImage` (no img tag) -- acceptable, no CLS
- `WeddingsCrossing.tsx` line 24: `<img>` has no `width`/`height`
- `WeddingsInvitation.tsx` line 64-69: `<img>` has no `width`/`height`
- Gateway `CardImage` uses `backgroundImage` via div -- acceptable

**Fix:** Add explicit `width` and `height` attributes to the `<img>` tags in `WeddingsCrossing.tsx` and `WeddingsInvitation.tsx`.

---

## 5. Proof Page & Listen Page CTA Consistency

**Problem:** Proof page (`Proof.tsx` line 80-83) and Listen page (`Listen.tsx` line 100-103) use raw `<a href="/contact">` instead of `<Link to="/contact">`. This bypasses React Router and causes a full page reload.

**Fix:** Replace `<a href="/contact">` with `<Link to="/contact">` in both files (imports already available in Listen; needs import in Proof).

---

## 6. Teaching & Events Hero Images

**Problem:** `hero-teaching.jpg` and `hero-events.jpg` are the original Vow Architect assets. They don't match the new AI-generated editorial style of the Gateway and About images.

**Fix:** Generate two new AI images:
- **Teaching hero:** Piano keys from above with warm side-light, sheet music partially visible, shallow depth of field. No faces, no text.
- **Events hero:** Grand piano in a softly lit room, wide angle, warm ambient chandelier light. No faces, no text.

---

## 7. Weddings Hero Image Upgrade

The current `hero-weddings.jpg` is also from the original project. Generate a replacement:
- **Weddings hero:** Close-up of piano hammers and strings inside a grand piano, warm golden light filtering through, shallow depth of field. No faces, no text.

---

## 8. Mobile Menu Scroll Lock

**Problem:** When the mobile menu overlay opens in `MinimalHeader.tsx`, the background page can still scroll. This is a usability issue.

**Fix:** Toggle `document.body.style.overflow = 'hidden'` when `isMenuOpen` is true, and restore on close/unmount.

---

## 9. Gateway Card Responsive Height

**Problem:** On mobile, Gateway cards use `flex-1 min-h-0` which can make them very short on smaller screens, leaving insufficient space for the card content.

**Fix:** Add `min-h-[160px]` to mobile cards so they always have enough vertical presence, while keeping `md:aspect-[6/7]` for desktop.

---

## 10. Footer Legal Links — Use `Link` not `NavLink`

**Problem:** Footer legal links (`Privacy`, `Terms`, `Accessibility`) use `NavLink` which adds active styling. These are utility links that don't need active state highlighting.

**Fix:** Change from `NavLink` to `Link` for the three legal links in the footer bottom bar.

---

## Implementation Order

1. Scroll-to-top on route change (critical UX fix)
2. Dead CSS cleanup (semicolon-breathe)
3. HeroStrip `showScrollCue` activation on Teaching, Events, Listen, Proof
4. Image dimensions for CLS prevention
5. Fix `<a>` to `<Link>` on Proof and Listen CTAs
6. Mobile menu scroll lock
7. Gateway card min-height on mobile
8. Footer legal link cleanup
9. Generate 3 AI hero images (Teaching, Events, Weddings)

