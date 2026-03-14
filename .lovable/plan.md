

# Phase 9: Micro-Craft, Motion Choreography & Content Depth

The site now has a solid luxury foundation. This phase focuses on the refinements that separate "good" from "world-class" -- the level of detail visible in Hickory & Rose and Fantasy.co projects.

---

## 1. Motion Choreography Refinement

### Gateway Card Hover Depth
**File:** `Gateway.tsx`
- Cards currently only lift `y: -4`. Add a coordinated hover: card lifts + gold bottom-border fades in + subtle `scale(1.01)` on the image behind. This creates a layered, dimensional hover.
- Add `transition={{ type: "spring", stiffness: 300, damping: 20 }}` to `whileHover` for organic feel vs linear.

### Hero Scroll Cue Animation
**Files:** `WeddingsHero.tsx`, `HeroStrip.tsx`
- The scroll cue in `WeddingsHero` is a pulsing `w-[1px] h-8` line. Upgrade to a more polished cue: a small animated chevron or breathing vertical line that fades out as you scroll (tied to `scrollYProgress`). Apply same to `HeroStrip`.

### Page Entry Choreography
**File:** `PageTransition.tsx`
- Currently uses CSS classes for enter/exit. Migrate to `framer-motion` `AnimatePresence` wrapping routes with `motion.div` for smoother cross-page transitions (opacity + subtle y-shift + blur).

---

## 2. Typography & Spacing Precision

### Drop Cap on Key Narrative Sections
**Files:** `About.tsx`, `WeddingsExhale.tsx`, wedding About sub-pages
- Apply the existing `.drop-cap` utility to the first paragraph of origin story / exhale sections. This is a classic editorial touch that's defined in CSS but never used.

### Pull Quote Sizing Consistency
**Files:** All dark sections with `<blockquote>` (About, WeddingsAbout, TeachingAbout, EventsAbout)
- Standardize blockquote sizing: `text-xl md:text-2xl` on sub-pages, `text-2xl md:text-3xl` on the main About page. Currently inconsistent.

### Body Copy `max-width` Enforcement
- Several `p-lead` and body `<p>` tags lack `mx-auto` centering when inside `text-center` parents. Audit and fix for consistent line lengths.

---

## 3. Visual Layer Depth

### Vignette on All Dark Sections
**File:** `WeddingsTestimonials.tsx`
- Currently uses inline `style={{ background: "hsl(var(--sage-deep))" }}` instead of `<Section dark>`, missing grain and vignette layers. Refactor to use `<Section dark>` for consistency.

### Gold Corner Frames on Key Sections
**Files:** `WeddingsVowMoment.tsx`, `WeddingsInvitation.tsx`, pricing tier cards
- Add `<GoldFrame />` to the Vow Moment section and the invitation section for visual hierarchy. Currently only heroes have gold frames.

### Subtle Radial Glow on Light Sections
**File:** `Section.tsx`
- Add an optional `glow` prop. When `true`, render a subtle `radial-gradient(ellipse at center, hsl(var(--gold) / 0.025), transparent 60%)` behind content. Apply to Vow Moment, About origin story, and pricing investment philosophy sections.

---

## 4. Interaction & Feedback Polish

### CTA Button Micro-Interactions
**Files:** All pages with CTA buttons
- Primary CTAs (gold bg) currently have `shadow-cta` but no hover scale. Add `hover:scale-[1.02]` and `active:scale-[0.98]` for tactile feedback.
- Add `cta-glow` class (already defined in CSS but unused) to the main "Hold My Date" CTA on wedding pages.

### FAQ Accordion Animation
**File:** `FAQ.tsx`
- The `<details>` element has no smooth open/close animation. Replace with a controlled accordion using `AnimatePresence` for height transitions and the `+` to `×` rotation.

### Form Input Focus States
**File:** `ContactWizard.tsx`
- Inputs use `.input-gold-focus` for bottom border. Add a subtle `box-shadow: 0 2px 8px hsl(var(--gold) / 0.08)` on focus for more depth.

---

## 5. Content & Copy Enrichment

### usePageMeta Integration
**Files:** All page components
- The `usePageMeta` hook exists but is unused. Integrate it into every page with service-specific descriptions:
  - Gateway: "Ceremony pianist serving Calgary to Banff. Weddings, teaching, and live events."
  - Weddings: "Wedding pianist for ceremonies in Calgary, Cochrane, Canmore & Banff. Packages from $650."
  - Teaching: "Piano lessons in Calgary. $60/hr. All ages and levels."
  - Events: "Live piano for corporate galas, private dinners, and memorial services."
  - About/FAQ/Proof/Listen: Appropriate descriptions.

### Service Cross-Links
**Files:** `Teaching.tsx`, `Events.tsx`
- At the bottom of Teaching and Events pages, add a subtle "Other services" section with links to the other two verticals. This aids navigation and SEO internal linking.

---

## 6. Image Strategy & Generation

### AI-Generated Editorial Images
Generate 3-4 images using the Nano banana model to replace placeholder monogram blocks:
1. **About page** (right column): Close-up of piano keys with warm bokeh, shallow depth of field, golden hour light. No faces, no text.
2. **Gateway Weddings card**: Piano keys with a wedding ring resting on them, soft focus, warm desaturated tones.
3. **Gateway Teaching card**: Sheet music on a music stand, selective focus, creamy background.
4. **Gateway Events card**: Grand piano in an elegant room, wide shot, warm ambient light, no people.

Store in `src/assets/` and use as background images or `<img>` tags with `loading="lazy"`, `width`/`height` attributes, and descriptive `alt` text.

---

## 7. Mobile Responsiveness Audit

### Gateway Cards on Mobile
- Cards currently stack vertically with `flex-col`. At `py-12` top padding, the three cards + credential strip + footer may not fit on shorter phones. Add `md:aspect-[6/7]` only on desktop; on mobile, allow natural height with minimum `min-h-[140px]`.

### Contact Wizard on Small Screens
- The pill selectors may wrap awkwardly on 320px screens. Add `justify-start` fallback and ensure pills are at least 44px tall for touch targets.

### Footer Column Collapse
- Footer grid is `grid-cols-1 md:grid-cols-4`. On mobile, the four columns stack but the spacing between them is `gap-fitz-9` (80px) which is excessive. Reduce to `gap-fitz-6` (32px) on mobile.

---

## Implementation Order

1. **usePageMeta integration** (quick, high SEO value)
2. **WeddingsTestimonials refactor** to `<Section dark>` (consistency fix)
3. **Motion choreography** -- Gateway hover, hero scroll cue, page transitions
4. **Typography precision** -- drop caps, blockquote sizing, max-width audit
5. **CTA micro-interactions** -- hover scale, cta-glow, form focus depth
6. **FAQ accordion animation** with framer-motion
7. **AI image generation** and integration
8. **Mobile responsiveness audit** fixes
9. **Service cross-links** at bottom of Teaching/Events
10. **Gold frames and glow** on key sections

