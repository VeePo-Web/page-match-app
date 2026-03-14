

# Phase 15: Bespoke Piano-Key Service Cards for Gateway

## Concept

Replace the current rectangular service cards on the Gateway page with a custom piano keyboard metaphor. Three service cards rendered as piano keys — two white keys flanking a raised black key — creating an instantly recognizable, brand-authentic navigation element. Similar in spirit to Karl Salingua's bass fretboard approach, but completely bespoke to a pianist's identity.

## Visual Design

```text
Desktop Layout (side by side, ~1000px max-width):

  ┌─────────────┐ ┌────────┐ ┌─────────────┐
  │             │ │████████│ │             │
  │  WEDDINGS   │ │████████│ │   EVENTS    │
  │             │ │TEACHING│ │             │
  │             │ │████████│ │             │
  │  White Key  │ │Black Ky│ │  White Key  │
  │             │ │████████│ │             │
  │             │ │  (taller│ │             │
  │             │ │  raised)│ │             │
  │             │ └────────┘ │             │
  │             │            │             │
  └─────────────┘            └─────────────┘

Mobile Layout (stacked, full width):
  Keys rotate to horizontal orientation — 
  each key is a horizontal bar, black key 
  is narrower width + darker background.
```

## Technical Specification

### 1. Card Structure (PianoKeyCard component)

Each card will be a `<Link>` styled to look like a physical piano key:

**White keys (Weddings, Events):**
- Background: `hsl(var(--warm-white))` with subtle ivory gradient (`linear-gradient(180deg, hsl(40 20% 97%) 0%, hsl(40 15% 93%) 100%)`)
- Border: `1px solid hsl(var(--lines) / 0.6)` with rounded bottom corners only (`border-radius: 0 0 6px 6px`)
- Shadow on hover: `0 8px 32px hsl(var(--charcoal) / 0.12)` — like a key being pressed
- Height: taller than black key — `aspect-ratio: 5/9` on desktop
- Hover state: translateY(4px) + deeper shadow to simulate key press

**Black key (Teaching):**
- Background: `hsl(var(--sage-deep))` with gloss gradient (`linear-gradient(180deg, hsl(148 22% 32%) 0%, hsl(148 22% 24%) 60%, hsl(148 22% 20%) 100%)`)
- Text: `hsl(var(--warm-white))`
- Narrower width (about 65% of white key width)
- Shorter height (about 65% of white key height)
- Raised via `z-index: 10` and positioned to overlap the gap between white keys
- Rounded bottom corners only
- Subtle glossy sheen via `::after` pseudo-element gradient
- Hover: translateY(3px) + shadow change

### 2. Desktop Layout

- Flexbox container with `position: relative`
- White keys: `flex: 1` each
- Black key: `position: absolute`, centered horizontally, overlapping both white keys by ~20% on each side
- Gap between white keys: enough to accommodate the black key width

### 3. Interactive Details

- **Hover press animation:** Keys depress 4-6px with spring physics (framer-motion `whileHover`)
- **Shadow shift:** On press, shadow moves from `0 6px 24px` to `0 2px 8px` (closer to surface)
- **Gold accent line:** A 2px gold line appears at the bottom of a key on hover, like a light reflection from below the keyboard
- **Parallax image:** Keep the existing `CardImage` parallax effect within each key, but at lower opacity (10-15%)
- **Reduced motion:** Skip translateY animation, just show border/shadow change

### 4. Mobile Layout

- Stack vertically
- All three keys rendered as horizontal bars
- Black key (Teaching) has darker background + slightly narrower left/right padding
- No absolute positioning on mobile — simple flex column
- Each key has min-height of 140px

### 5. Content Layout Within Each Key

```text
  ┌───────────────────────┐
  │                       │
  │      [number 01]      │  ← small, faded
  │                       │
  │      W E D D I N G S  │  ← display font, tracked
  │    description text   │  ← small muted
  │                       │
  │    Step Inside →      │  ← CTA at bottom
  └───────────────────────┘
```

- Content centered vertically and horizontally
- Title: `font-display`, uppercase, `tracking-[0.12em]`
- Description: `font-sans`, 13-14px, muted color
- CTA: appears on hover with arrow slide-in (existing pattern)

### 6. Decorative Elements

- **Keyboard shelf:** A thin horizontal bar below the three keys (`h-3`, dark wood gradient using `hsl(var(--charcoal))`) to ground the keyboard visually — like the front rail of a piano
- **Subtle reflection:** Below the shelf, a faint mirrored gradient fading to transparent (2-3% opacity) for a polished surface feel

### 7. Files to Modify

- **`src/pages/Gateway.tsx`:** Replace the current card grid with the new `PianoKeyCard` layout. Remove `CardImage` parallax mouse tracking (replace with simpler hover). Restructure the flex container for the piano key arrangement.

### 8. Responsive Breakpoints

- `md+` (768px+): Side-by-side piano key layout with absolute-positioned black key
- Below `md`: Stacked vertical layout, each key full-width, black key distinguished by dark background only

### 9. Accessibility

- Each key is a `<Link>` with clear accessible name
- Sufficient color contrast: white keys use dark text, black key uses light text
- Focus-visible ring styled per global `:focus-visible` (gold outline)
- `aria-label` on the container: "Choose a service"

