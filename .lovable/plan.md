

# Phase 23: Weddings Page Visual & UX Upgrade — Backgrounds, Imagery, and Section Polish

The Weddings page currently relies on flat solid-color sections with minimal visual texture. Several sections (Exhale, Process, Transformation, Witness, Testimonials) have no background imagery at all — they feel empty compared to luxury wedding sites like Hickory & Rose. The user also wants the `invitation-portrait.jpg` (piano with candle) replaced because it looks unrealistic.

---

## Section-by-Section Changes

### 1. Replace `invitation-portrait.jpg` with AI-generated image

**Current:** A piano-with-candle photo that looks unrealistic.
**New:** Generate a new image using `google/gemini-3.1-flash-image-preview` — prompt: *"Close-up of grand piano keys in warm golden light, shallow depth of field, soft bokeh background, no faces, no text, no candle, warm desaturated tones, cinematic luxury photography"*

Save as `src/assets/invitation-portrait.jpg` (overwrite).

### 2. WeddingsExhale — Add subtle background image

**File:** `src/components/weddings/WeddingsExhale.tsx`

Add a background image layer behind the content — generate an AI image: *"Soft-focus white rose petals scattered on ivory linen fabric, warm golden light, shallow depth of field, no faces, no text, desaturated luxury wedding photography"*

Save as `src/assets/weddings-exhale-bg.jpg`. Render as an `<img>` at `opacity: 0.05` with `object-cover`, Ken Burns animation, and `filter: brightness(0.8) saturate(0.7)`. Add a grain overlay matching other dark sections.

### 3. WeddingsProcess — Add background image and visual depth

**File:** `src/components/weddings/WeddingsProcess.tsx`

Currently uses `<Section dark>` with no `backgroundImage`. Generate: *"Sheet music pages fanned out on a dark wooden surface, warm amber side-lighting, shallow depth of field, no faces, no text, cinematic moody tones"*

Save as `src/assets/weddings-process-bg.jpg`. Pass via `backgroundImage` prop on `<Section>`.

### 4. WeddingsVowMoment — Add warm atmospheric background

**File:** `src/components/weddings/WeddingsVowMoment.tsx`

Generate: *"Soft golden light filtering through sheer white curtains in a wedding venue, abstract bokeh, no faces, no text, warm ethereal atmosphere"*

Save as `src/assets/weddings-vow-bg.jpg`. Render at `opacity: 0.06` behind the blockquote with Ken Burns drift.

### 5. WeddingsTransformation — Add texture background

**File:** `src/components/weddings/WeddingsTransformation.tsx`

Generate: *"Abstract close-up of aged ivory paper with subtle gold leaf fragments, warm muted tones, no faces, no text, luxury texture photography"*

Save as `src/assets/weddings-transformation-bg.jpg`. Render at `opacity: 0.04` with subtle Ken Burns.

### 6. WeddingsWitness — Add background image

**File:** `src/components/weddings/WeddingsWitness.tsx`

Currently uses `<Section dark>` with no background. Generate: *"Grand piano silhouette in a dimly lit ballroom with warm amber light, shallow depth of field, no faces, no text, cinematic luxury atmosphere"*

Save as `src/assets/weddings-witness-bg.jpg`. Pass via `backgroundImage` prop.

### 7. WeddingsTestimonials — Add atmospheric background

Currently `<Section dark>` with no image. Generate: *"Soft candlelight reflections on polished dark wood surface, warm bokeh, no faces, no text, moody luxury atmosphere"*

Save as `src/assets/weddings-testimonials-bg.jpg`. Pass via `backgroundImage` prop.

### 8. WeddingsCrossing — Already has background, enhance it

The crossing section already has `hero-crossing.jpg`. Keep as-is but increase opacity from `0.06` to `0.08` for slightly more presence.

---

## Implementation Details

- All new background images use the established pattern: `opacity: 0.04-0.06`, `filter: brightness(0.8) contrast(1.05) saturate(0.7-0.85)`, Ken Burns animation at 25-35s
- For sections using `<Section>` component, pass `backgroundImage={importedImage}` — the component already handles opacity, Ken Burns, grain, and vignette
- For custom sections (Exhale, VowMoment, Transformation), add the background `<img>` layer manually following the same pattern as WeddingsHero
- All images generated at roughly 1920x1080 or 1200x800 landscape for backgrounds, 800x1067 portrait for invitation

---

## Files Modified

| File | Change |
|------|--------|
| `src/assets/invitation-portrait.jpg` | Replace with AI-generated piano keys image |
| `src/assets/weddings-exhale-bg.jpg` | New AI background |
| `src/assets/weddings-process-bg.jpg` | New AI background |
| `src/assets/weddings-vow-bg.jpg` | New AI background |
| `src/assets/weddings-transformation-bg.jpg` | New AI background |
| `src/assets/weddings-witness-bg.jpg` | New AI background |
| `src/assets/weddings-testimonials-bg.jpg` | New AI background |
| `src/components/weddings/WeddingsExhale.tsx` | Add background image layer |
| `src/components/weddings/WeddingsProcess.tsx` | Add `backgroundImage` prop |
| `src/components/weddings/WeddingsVowMoment.tsx` | Add background image layer |
| `src/components/weddings/WeddingsTransformation.tsx` | Add background image layer |
| `src/components/weddings/WeddingsWitness.tsx` | Add `backgroundImage` prop |
| `src/components/weddings/WeddingsTestimonials.tsx` | Add background image layer |
| `src/components/weddings/WeddingsCrossing.tsx` | Increase bg opacity to 0.08 |
| `src/components/weddings/WeddingsInvitation.tsx` | Update alt text for new image |

