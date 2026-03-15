

# Phase 22: Uniform Service Cards on Gateway Page

The Gateway page currently uses a piano-keyboard metaphor with two "white keys" flanking an absolute-positioned "black key" (Teaching). This creates visual asymmetry — the Teaching card is narrower, shorter, and styled differently. The user wants all three cards to be **uniform**: same size, same styling, equal visual weight.

---

## Changes to `src/pages/Gateway.tsx`

### 1. Replace Piano Keyboard Layout with Uniform Three-Column Grid

- Remove the `isBlackKey` differentiation from the `services` array
- Remove the `whiteKeys` / `blackKey` split logic
- Replace the desktop layout from `relative flex` with absolute positioning to a simple `grid grid-cols-3 gap-4` (max-width 900px)
- All three cards get equal `aspect-[5/9]` ratio
- Remove the fallboard (`h-2` dark bar above) and keyboard shelf (`h-3` dark bar below) — these are piano-specific UI elements that no longer apply

### 2. Unify Card Styling

All three cards get the same treatment:
- Background: `linear-gradient(180deg, hsl(40 20% 97%) 0%, hsl(40 15% 93%) 95%)` (the current white-key cream gradient)
- Border: `border border-lines/60` with the same shadow
- Image overlay at `opacity: 0.12` with same filter
- Same text colors: `text-foreground` for title, `text-muted-foreground` for description, `text-sage` for CTA
- Same padding: `p-6 md:p-8`
- Same font sizes: title `text-[22px] md:text-[26px]`, description `text-[12px] md:text-[13px]`
- Remove the glossy sheen overlay (was black-key only)
- Keep the gold accent line on hover

### 3. Simplify `PianoKeyCard` Component

- Remove all `isBlack` conditional branches — single code path
- Remove the `isBlackKey` property from the services array
- Delete the `MobileBlackKey` component entirely

### 4. Mobile Layout

- Replace the current stacked layout (which renders `MobileBlackKey` separately) with a simple `flex flex-col gap-3 mx-4`
- All three cards render identically in a vertical stack with `min-h-[160px]`
- Remove the mobile shelf

### 5. Keep Everything Else

- Header, tagline, credentials strip, footer — unchanged
- Animation stagger timing stays the same (0.6 + index * 0.15)
- Hover lift animation stays (`y: 5` for all cards now)
- PG watermark stays

---

## Files Modified

| File | Change |
|------|--------|
| `src/pages/Gateway.tsx` | Remove isBlackKey logic, unify card grid, delete MobileBlackKey |

