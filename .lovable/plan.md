

# Phase 21: Uniform Section Navigation (PianoKeyNav) Across All Service Pages

The right-side section navigation currently uses a "piano key" metaphor with two visual variants (`isBlackKey` and regular) creating inconsistent sizing. The user wants all nav indicators to be **uniform** — same size, same shape — while preserving the elegant scroll-tracking and label-reveal behavior.

---

## Current State

Each service page (Weddings, Teaching, Events) defines `pianoSections` with an `isBlackKey` boolean that renders smaller keys (w-3 h-5) vs larger keys (w-4 h-7). This creates visual inconsistency across pages and an uneven rhythm in the nav rail.

---

## Changes

### 1. Remove `isBlackKey` Differentiation

**File:** `src/components/PianoKeyNav.tsx`

- Remove the `isBlackKey` conditional sizing from the button className
- Make all indicators uniform: `w-[3px] h-6` — thin vertical bars (like a minimal scroll-position indicator, not chunky rectangles)
- Active state: `bg-gold` (matches brand accent, more visible than `bg-sage`)
- Inactive state: `bg-foreground/12 hover:bg-foreground/25`
- Active indicator gets a subtle width expansion: `w-[3px]` inactive → `w-[4px]` active with `transition-all duration-200`
- Keep the `isBlackKey` property in the interface (backward compat) but ignore it visually

### 2. Refine the Label Reveal

- Change active label color from `text-sage` to `text-gold` for better contrast and brand alignment
- Add a thin gold dot (2px circle) between the label text and the bar indicator when active, acting as a visual connector

### 3. Golden Thread Line

- Keep the existing breathing gold thread behind the indicators
- Adjust `right` position to align with the new thinner bars

### 4. Update Section Arrays (Remove `isBlackKey`)

**Files:** `src/pages/Weddings.tsx`, `src/pages/Teaching.tsx`, `src/pages/Events.tsx`

- Remove all `isBlackKey: true` entries from the `pianoSections` arrays since they no longer affect rendering
- This keeps the data clean and avoids confusion

---

## Summary of File Changes

| File | Change |
|------|--------|
| `src/components/PianoKeyNav.tsx` | Uniform bar sizing, gold active state, dot connector |
| `src/pages/Weddings.tsx` | Remove `isBlackKey` from pianoSections |
| `src/pages/Teaching.tsx` | Remove `isBlackKey` from pianoSections |
| `src/pages/Events.tsx` | Remove `isBlackKey` from pianoSections |

