

# Phase 25: Contact, Listen, Proof & FAQ Pages — Visual Polish and Background Imagery

These four utility pages currently use flat, unadorned `<Section>` blocks with no background imagery. They feel visually thinner than the Weddings, Teaching, Events, and About pages which now all have rich atmospheric depth. This phase brings them to the same standard.

---

## 1. Contact Page (`src/pages/Contact.tsx`)

**Current state:** A `<HeroStrip>` with no background image, and a bare `<Section>` containing the form.

**Changes:**
- Generate a hero background image: *"Close-up of piano keys with warm golden side lighting, shallow depth of field, soft bokeh, no faces, no text, cinematic luxury"*. Save as `src/assets/contact-hero-bg.jpg`. Pass to `<HeroStrip backgroundImage={...}>`.
- Add a second background image for the form section: *"Abstract soft golden light on cream linen surface, warm neutral tones, no faces, no text, luxury texture"*. Save as `src/assets/contact-form-bg.jpg`. Pass to `<Section backgroundImage={...}>`.

---

## 2. Listen Page (`src/pages/Listen.tsx`)

**Current state:** Uses `heroWeddings` as the `<HeroStrip>` background (reused from weddings). The intro `<Section>` and dark movements `<Section dark>` have no backgrounds. The CTA section is bare.

**Changes:**
- Generate a unique hero image: *"Grand piano with lid open in a softly lit concert hall, warm amber tones, shallow depth of field, no faces, no text, cinematic atmosphere"*. Save as `src/assets/listen-hero-bg.jpg`. Replace `heroWeddings` usage with this new image.
- Dark movements section: Generate *"Close-up of piano strings and hammers with dramatic warm side lighting, moody cinematic atmosphere, no faces, no text"*. Save as `src/assets/listen-movements-bg.jpg`. Pass via `<Section dark backgroundImage={...}>`.

---

## 3. Proof Page (`src/pages/Proof.tsx`)

**Current state:** `<HeroStrip>` with no background image. Dark credentials section and light CTA section both bare.

**Changes:**
- Generate a hero image: *"Professional audio equipment and cables on a dark surface with warm amber accent lighting, shallow depth of field, no faces, no text, cinematic technical"*. Save as `src/assets/proof-hero-bg.jpg`. Pass to `<HeroStrip backgroundImage={...}>`.
- Dark credentials section: Generate *"Close-up of sound level meter display with warm ambient glow, technical precision, no faces, no text, moody cinematic"*. Save as `src/assets/proof-credentials-bg.jpg`. Pass via `<Section dark backgroundImage={...}>`.

---

## 4. FAQ Page (`src/pages/FAQ.tsx`)

**Current state:** `<HeroStrip>` with no background. Light accordion section and dark trust stack section both bare.

**Changes:**
- Generate a hero image: *"Open book on a dark wooden surface with warm golden light from above, shallow depth of field, no faces, no text, editorial luxury"*. Save as `src/assets/faq-hero-bg.jpg`. Pass to `<HeroStrip backgroundImage={...}>`.
- Dark trust section: Generate *"Abstract warm light on dark polished surface, soft gold bokeh, no faces, no text, moody luxury"*. Save as `src/assets/faq-trust-bg.jpg`. Pass via `<Section dark backgroundImage={...}>`.

---

## Implementation

All changes follow the established pattern:
- `<HeroStrip>` already supports `backgroundImage` prop with parallax, grain, and vignette
- `<Section>` already supports `backgroundImage` prop with opacity 0.04-0.06, Ken Burns, grain, and vignette
- Each file just needs an import and a prop addition — no component changes required

Total: 8 new AI-generated images, 4 files modified.

---

## Files Modified

| File | Change |
|------|--------|
| `src/pages/Contact.tsx` | Add 2 background images (hero + form section) |
| `src/pages/Listen.tsx` | Replace hero image, add movements background |
| `src/pages/Proof.tsx` | Add 2 background images (hero + credentials) |
| `src/pages/FAQ.tsx` | Add 2 background images (hero + trust section) |

