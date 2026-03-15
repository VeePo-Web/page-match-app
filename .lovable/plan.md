

# Phase 24: Teaching, Events & About Pages — Visual Depth with Atmospheric Backgrounds

The Weddings page now has rich atmospheric backgrounds on every section. Teaching, Events, and About remain visually flat — solid cream or sage-deep backgrounds with no imagery. This creates an inconsistent experience across the site. Each section needs a subtle, contextually appropriate background image to match the luxury editorial standard.

---

## Teaching Page (`src/components/teaching/TeachingSections.tsx`)

### Section: "The Language" (`#exhale`) — Light section
Generate: *"Open sheet music book on a wooden piano music stand, soft natural window light, shallow depth of field, no faces, no text, warm desaturated tones"*
Save as `src/assets/teaching-language-bg.jpg`. Pass via `backgroundImage` prop on `<Section>`.

### Section: "Three Pillars" (`#pillars`) — Dark section
Generate: *"Close-up of piano hammers and strings inside a grand piano, warm amber light from above, shallow depth of field, no faces, no text, moody cinematic tones"*
Save as `src/assets/teaching-pillars-bg.jpg`. Pass via `backgroundImage` prop on `<Section dark>`.

### Section: "Methodology" (`#methodology`) — Light section
Generate: *"Handwritten music notation on aged cream paper, warm natural light, shallow depth of field, no faces, no text, soft ivory and gold tones"*
Save as `src/assets/teaching-methodology-bg.jpg`. Pass via `backgroundImage` prop.

### Section: "Common Concerns" (`#threshold`) — Dark section
Generate: *"Piano keys from above with soft shadows, moody low-key lighting, shallow depth of field, no faces, no text, warm desaturated cinematic"*
Save as `src/assets/teaching-threshold-bg.jpg`. Pass via `backgroundImage` prop.

### Section: "Crossing" (`#crossing`) — Dark section
Generate: *"Silhouette of an upright piano in a room with warm window light streaming in, no faces, no text, moody atmospheric"*
Save as `src/assets/teaching-crossing-bg.jpg`. Pass via `backgroundImage` prop.

---

## Events Page (`src/components/events/EventsSections.tsx`)

### Section: "Why Live Piano" (`#exhale`) — Light section
Generate: *"Grand piano in an empty elegant ballroom with crystal chandeliers, soft golden light, no faces, no text, warm desaturated luxury"*
Save as `src/assets/events-exhale-bg.jpg`. Pass via `backgroundImage` prop.

### Section: "Occasions" (`#occasions`) — Dark section
Generate: *"Elegant table setting at a formal dinner event with candlelight reflections on crystal glasses, no faces, no text, warm bokeh, moody luxury"*
Save as `src/assets/events-occasions-bg.jpg`. Pass via `backgroundImage` prop.

### Section: "The Approach" (`#approach`) — Light section
Generate: *"Close-up of a grand piano lid reflecting warm ambient light in an event space, no faces, no text, shallow depth of field"*
Save as `src/assets/events-approach-bg.jpg`. Pass via `backgroundImage` prop.

### Section: "Common Concerns" (`#threshold`) — Dark section
Generate: *"Abstract warm bokeh lights in a dark event venue, golden and amber tones, no faces, no text, out of focus luxury atmosphere"*
Save as `src/assets/events-threshold-bg.jpg`. Pass via `backgroundImage` prop.

### Section: "Crossing" (`#crossing`) — Dark section
Generate: *"Grand piano on a stage in a dimly lit venue, single warm spotlight, no faces, no text, cinematic atmosphere"*
Save as `src/assets/events-crossing-bg.jpg`. Pass via `backgroundImage` prop.

---

## About Page (`src/pages/About.tsx`)

### Dark quote section (blockquote)
Generate: *"Soft focus piano keys stretching into darkness with warm golden side lighting, no faces, no text, cinematic shallow depth of field"*
Save as `src/assets/about-quote-bg.jpg`. Pass via `backgroundImage` prop on `<Section dark>`.

### Dark CTA section (bottom)
Generate: *"Abstract warm light patterns on dark polished wood surface, no faces, no text, luxury texture photography"*
Save as `src/assets/about-cta-bg.jpg`. Pass via `backgroundImage` prop on `<Section dark>`.

---

## Implementation

All backgrounds use the existing `<Section backgroundImage={...}>` prop which already handles:
- `opacity: 0.04-0.06` with `brightness(0.8) contrast(1.05) saturate(0.85)`
- Ken Burns animation at 30s
- Grain overlay on dark sections
- Vignette on dark sections
- `contain: layout style paint` for performance

Total: 12 new AI-generated images, 3 files modified. No new components needed — just imports and prop additions.

---

## Files Modified

| File | Change |
|------|--------|
| `src/components/teaching/TeachingSections.tsx` | Add 5 background images to sections |
| `src/components/events/EventsSections.tsx` | Add 5 background images to sections |
| `src/pages/About.tsx` | Add 2 background images to dark sections |

