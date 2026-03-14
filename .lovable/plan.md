

# Phase 5: Pricing Correction + Polish Pass

## Critical Fix: Wrong Pricing

The current site has **incorrect pricing** that doesn't match the [Vow Architect](/projects/f66f5b11-2a6d-442e-9f0a-510bdeab85bb) source of truth.

### Wedding Pricing — Wrong Names & Prices

| Current (WRONG) | Vow Architect (CORRECT) |
|---|---|
| The Prelude — $1,200 | **The Vow — $650** |
| The Covenant — $2,400 | **The Hour — $750** (Most Chosen) |
| The Chronicle — $4,200 | **The Story — $1,200** |

Descriptions and sentences are also wrong. Must port exact copy from Vow Architect's `ThreePaths.tsx`.

### Events Pricing — Wrong Structure

Current site shows fixed prices ($800/$1,500/$3,000 for Ambient/Featured/Immersive). Vow Architect uses **quote-based presences with no fixed prices**:

| Current (WRONG) | Vow Architect (CORRECT) |
|---|---|
| Ambient — From $800 | **The Moment — 1 hour** |
| Featured — From $1,500 | **The Evening — 2–3 hours** (Most Selected) |
| Immersive — From $3,000 | **The Full Occasion — 4+ hours** |

CTA should be "Request a proposal" not "Hold my date". No dollar amounts — just "After our conversation, I provide a clear quote."

### Teaching — Correct
$60/hr, no tiers. Already correct.

## Files to Fix

### 1. `src/components/weddings/WeddingsThreePaths.tsx`
- Change tier names: The Vow ($650), The Hour ($750, Most Chosen), The Story ($1,200)
- Port exact descriptions and sentences from Vow Architect
- Update CTA links to `/contact` (not `/weddings/contact`)

### 2. `src/pages/Events.tsx` — "Three Presences" section
- Replace Ambient/Featured/Immersive with The Moment/The Evening/The Full Occasion
- Remove dollar prices, show duration instead
- CTA: "Request a proposal" linking to `/events/contact`
- Add sub-text: "After our conversation, I provide a clear quote."

### 3. `src/pages/SubPages.tsx` — WeddingsPricing
- Fix tier names and prices to match (The Vow $650, The Hour $750, The Story $1,200)
- Add add-ons section from Vow Architect: Custom Song ($75–$150), Short-Notice (+$250), Travel (quoted per km)

### 4. `src/pages/SubPages.tsx` — EventsPricing
- Remove fixed prices
- Show The Moment / The Evening / The Full Occasion with durations
- Add inclusions list from Vow Architect (pre-event consultation, repertoire curation, real-time room-reading, etc.)
- Add comparison table (Parker vs Playlist vs DJ vs Band)
- Add FAQ section

### 5. `src/pages/FAQ.tsx`
- Fix reference to "The Chronicle" → "The Story" in FAQ answers

## Secondary Polish

### 6. Remaining `shadow-fantasy-cta` references
Several pages still reference `shadow-fantasy-cta` (old class). Replace with `shadow-cta`:
- `src/pages/About.tsx` (line 44)
- `src/pages/Contact.tsx` (line 40)
- `src/pages/Listen.tsx` (line 66)
- `src/pages/Proof.tsx` (line 67)

### 7. `border-primary/[0.08]` and `rounded-lg`
- `src/pages/Proof.tsx` line 50: `rounded-lg` → `rounded-md` (max 8px per design system)
- `src/pages/Contact.tsx` line 18: `rounded-lg` → `rounded-md`

### 8. Old `text-primary` accent color
Several pages use `text-primary` for accent text (sage green). Some should use `text-sage` or `text-gold` for consistency:
- Listen page: movement numbers `text-primary/40` → `text-gold/40`
- Proof page: promise quotes `text-primary` → `text-gold`
- FAQ page: expand icon `text-primary` → `text-sage`

## Implementation Order

1. Fix wedding pricing (WeddingsThreePaths + SubPages WeddingsPricing)
2. Fix events pricing (Events.tsx + SubPages EventsPricing)
3. Fix FAQ reference
4. Shadow/border-radius polish pass across About, Contact, Listen, Proof, FAQ
5. Accent color consistency pass

