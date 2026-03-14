

# Wireframe Plan: Gawryletz Music Services — Full Visual Overhaul

## What We Are Building

A complete rebuild of this project to match the Vow Architect's site architecture (Gateway → three service verticals, each with sub-pages) but with the design system described in your Sacred Sound prompt — dark, cinematic, ceremony-paced, built on charcoal/gold/green palette with Cormorant Garamond + Inter typography.

This first phase is the **wireframe**: establishing routes, page shells, layout skeletons, design tokens, shared components, and navigation — without final polish or imagery.

---

## Site Architecture (Matching Vow Architect)

```text
/                    → Gateway (3 service cards)
/weddings            → Wedding landing (long-scroll, 11 acts)
/weddings/pricing    → Wedding pricing (3 tiers + add-ons + FAQ)
/weddings/about      → About Parker (wedding context)
/weddings/contact    → Wedding inquiry form
/teaching            → Teaching landing (8 sections)
/teaching/pricing    → Teaching pricing ($60/hr)
/teaching/about      → About Parker (teaching context)
/teaching/contact    → Teaching inquiry form
/events              → Events landing (8 sections)
/events/pricing      → Events pricing (3 presences)
/events/about        → About Parker (events context)
/events/contact      → Events inquiry form
/listen              → Listening room (audio player)
/proof               → Proof of craft (SPL, insurance, gear)
/faq                 → FAQ (chips + top 10 fears)
/contact             → General contact (wedding-focused)
/about               → General about Parker
/privacy-policy      → Privacy policy
/terms               → Terms of service
/accessibility       → Accessibility statement
```

---

## Phase 1 Tasks (Wireframe)

### 1. Replace Design System (index.css + tailwind.config.ts)

Strip all Hickory & Rose tokens. Replace with the Sacred Sound system:

- **Colors**: `--rich-black` (240 9% 4%), `--ebon-charcoal` (222 10% 7%), `--deep-graphite` (218 11% 11%), `--vow-yellow` (45 100% 76%), `--vine-green` (88 76% 62%), `--porcelain` (210 17% 95%)
- **Semantic tokens**: background = rich-black, foreground = porcelain, primary = vow-yellow, accent = vine-green, card = ebon-charcoal
- **Typography**: `font-display` = Cormorant Garamond (300-400), `font-sans` = Inter (400-500)
- **Spacing**: Fitzgerald scale (fitz-1 through fitz-10)
- **Shadows**: fantasy-card, fantasy-cta
- **Transitions**: --transition-fast (150ms), --transition-default (250ms), --transition-slow (400ms)
- **Radius**: 0.5rem max (8px, never larger)
- **Utility classes**: `.overline`, `.h1`–`.h4`, `.p-lead`, `.p-body`, `.chapter-rule`, `.grain`, `.section-padding`, `.section--dark`, `.section--surface`

### 2. Remove All Hickory & Rose Components

Delete the entire `src/components/wedding/` directory (130+ files) and all Hickory & Rose pages. These are for a wedding planner brand and have no relevance.

Delete the `src/config/` brand identity/persona files.

### 3. Create Shared Layout Components

Port and adapt from Vow Architect:

- **MinimalHeader** — Fixed header, logo left, nav center (Cormorant Garamond light), CTA right. Collapses on scroll with backdrop-blur.
- **Footer** — Dark, minimal. Tagline, nav links, legal links, copyright.
- **MobileStickyBar** — Bottom CTA bar on mobile.
- **PianoKeyNav** — Vertical section navigation (screen edge).
- **PageTransition** — Fade transitions between routes.
- **RevealOnScroll** — IntersectionObserver reveal (up/scale/blur variants).
- **StaggerChildren** — Staggered child animations.
- **ThemeProvider** — Death/Life theme context.
- **SmoothScrollProvider** — Lenis smooth scroll (already exists, keep).

### 4. Create Gateway Page (`/`)

Three bento cards: Weddings, Teaching, Events. Each with:
- Background image (AI-generated, no faces/text — piano keys, candlelight, hands on keys)
- Gradient overlay
- Title, one-line description, "Step Inside →"
- Parallax mouse-follow on hover
- Footer tagline: "'Til Death ; Unto Life."

### 5. Create Wedding Landing Page (`/weddings`)

11 acts, matching Vow Architect structure:
1. **Hero** — Vigil sequence (8s pause, flame, Ken Burns drift, tagline reveal)
2. **The Exhale** — Sacred pause, 3 text elements
3. **Process Section** — Composer's journal (months of preparation)
4. **Vow Moment** — Altar interstitial
5. **The Invitation** — Meet the witness (Parker intro)
6. **The Sound** — Dark listening environment
7. **The Transformation** — Fear→resolution cards
8. **The Witness** — About Parker (exhale surface)
9. **Three Paths** — Pricing preview (3 tiers)
10. **The Witnesses** — Testimonials
11. **The Crossing** — Final CTA

### 6. Create Teaching Landing Page (`/teaching`)

8 sections: Hero, Exhale, Pillars, Methodology, Threshold (fears), Stories, Offering, Crossing.

### 7. Create Events Landing Page (`/events`)

8 sections: Hero, Exhale, Occasions, Approach, Threshold, Experience, Offering, Crossing.

### 8. Create Sub-Pages (Pricing, About, Contact per vertical)

Each follows the Vow Architect pattern:
- **Pricing pages**: Hero + inclusions + tiers + comparison + FAQ + CTA
- **About pages**: Hero + origin + sustain + presence + covenant + crossing
- **Contact pages**: Cinematic hero strip + form card (glassmorphism) + trust stats

### 9. Create Shared Utility Pages

- **Listen** — Audio player with 4 movements, now-playing bar
- **Proof** — SPL triptych, setup gallery, insurance, redundancy, downloads
- **FAQ** — Chips + top 10 fears + policy download + trust stack
- **About** — General (witness pattern)
- **Contact** — General wedding contact form
- **Legal pages** — Privacy, Terms, Accessibility (simple policy layouts)

### 10. Set Up Routing (App.tsx)

Replace current routing with the full route tree above. Wrap in ThemeProvider, SmoothScrollProvider, PageTransition.

### 11. Update index.html

- Load Cormorant Garamond + Inter via Google Fonts `<link>`
- Preload hero image for LCP
- Update meta tags, title, favicon
- Add film grain CSS (`@keyframes grain`)
- Add Ken Burns CSS (`@keyframes ken-burns`)

---

## Copy Approach

- **Wedding pages**: Keep copy very close to Vow Architect (Parker's voice, first-person, sacred framing)
- **Teaching pages**: Keep similar structure, adapt slightly
- **Events pages**: Keep similar structure
- **All CTA text**: Verb-forward ("Hold my date.", "Begin the conversation.", "Tell me your story.")

## Image Approach

- AI-generated images where needed (piano keys, candlelight, ceremony venues, hands on keys)
- No faces, no text on images
- Warm, desaturated, shallow DOF, cinematic
- All at 6-15% opacity as backgrounds with Ken Burns drift

---

## Technical Details

- All pages are wireframe shells with placeholder content and correct structure
- Design tokens fully functional from day one
- Shared components (Header, Footer, PianoKeyNav, RevealOnScroll) built once, used everywhere
- Responsive: mobile-first, single column on mobile, full atmospheric on desktop
- `prefers-reduced-motion` respected on all animations
- Film grain, vignettes, and warm fog overlays on every section

