

# Phase 20: Contact Form UX Upgrade

The current `ContactForm` is functionally correct but visually flat — bare inputs with only bottom borders, no placeholder guidance, no field grouping, and no animated feedback. This phase elevates it to match the luxury editorial standard of the rest of the site.

---

## Changes to `src/components/contact/ContactForm.tsx`

### 1. Floating Label Pattern
Replace static labels above inputs with floating labels that sit inside the field and animate up on focus/fill. This is cleaner, more modern, and reduces visual clutter:
- Label starts as placeholder-size text inside the input area
- On focus or when field has value, label scales to `text-[10px]` and translates up above the input line
- Use CSS `peer` pattern (Tailwind) — no extra JS needed
- Remove the explicit `<label>` + separate `<input>` structure; use a wrapper `<div className="relative">` with `<input className="peer" placeholder=" " />` and `<label className="peer-placeholder-shown:... peer-focus:...">` 

### 2. Inline Validation Feedback
- Add subtle error states: when a required field is submitted empty, show a red bottom border (`border-error`) and a small error message below
- Add a green checkmark icon (inline SVG, 12px) that appears when a field passes validation on blur
- Track per-field `touched` state so errors only show after the user has interacted

### 3. Field Grouping: Name & Email Side-by-Side on Desktop
- On `md:` breakpoint, render Name and Email in a `grid grid-cols-2 gap-fitz-5` row
- Phone stays full-width below
- Message stays full-width below Phone
- This reduces perceived form length and feels more editorial

### 4. Character Counter on Message
- Show a subtle `text-[10px] text-muted-foreground` character counter below the textarea: `0 / 1000`
- Add `maxLength={1000}` to the textarea
- Counter text turns gold when approaching limit (>900)

### 5. Submit Button Micro-interaction
- On hover: slight `translateY(-1px)` lift with shadow increase
- On press: `translateY(0)` with shadow decrease (tactile press feel)
- Keep existing spinner for submitting state

### 6. Success State Enhancement
- Add a subtle confetti-like particle burst using CSS `@keyframes` (3-4 small gold diamonds that scatter outward and fade) — no library needed, pure CSS animation on mount
- Increase the breathing diamond size slightly in success state

### 7. Trust Stats Strip Polish
- Add thin gold divider lines between the three stats (vertical `border-r border-gold/20`)
- Use `hsl(var(--gold-text))` for stat values instead of `hsl(var(--sage))` to match the CredentialStrip fix from Phase 17

---

## Changes to `src/index.css`

### 8. Floating Label Styles
Add the floating label transition utilities:
- `.form-field` wrapper with `relative` positioning
- Transition for label position using Tailwind's `peer` variants (no custom CSS needed — handled in component)

### 9. Gold Diamond Burst Keyframes
Add `@keyframes diamond-burst` for the success state particle effect — 4 small absolute-positioned diamonds that translate outward in different directions and fade to `opacity: 0` over 800ms.

---

## Files Modified
1. `src/components/contact/ContactForm.tsx` — full rewrite of form markup and UX
2. `src/index.css` — add diamond-burst keyframes

No changes needed to `Contact.tsx` or `SubPages.tsx` — the API (`serviceContext`, `ctaLabel`, etc.) stays identical.

