

# Phase 19: Simplify All Contact Forms

Replace the multi-step wizard pattern with a single-screen form across all four contact pages. Each form gets just four fields: Name, Email, Phone (optional), and Message. The existing `ContactWizard` component is replaced with a new `ContactForm` component.

---

## 1. Create New `ContactForm` Component

**File:** `src/components/contact/ContactForm.tsx`

A single-screen form with:
- **Name** (text, required)
- **Email** (email, required)
- **Phone** (tel, optional)
- **Message** (textarea, required)
- Submit button that opens `mailto:parker@parkergawryletz.com` with form data
- Success state with `BreathingDiamond`, thank-you message, and return link
- Keep the trust stats strip below the form (< 24hr, 100%, Free)
- Same luxury styling: `border border-lines/30 bg-card/80 backdrop-blur-sm`, gold-focus inputs, uppercase tracking labels
- Props: `ctaLabel`, `successTitle`, `successMessage`, `returnPath`, `returnLabel`, `serviceContext` (string for mailto subject line, e.g. "Wedding", "Teaching", "Event", "General")

No steps, no step indicator, no AnimatePresence, no direction state. Just a clean single form.

---

## 2. Update General Contact Page

**File:** `src/pages/Contact.tsx`

- Replace `ContactWizard` import with `ContactForm`
- Remove the `generalSteps` array
- Render `<ContactForm serviceContext="General" ctaLabel="Send Message" />`

---

## 3. Update All Service Contact Pages

**File:** `src/pages/SubPages.tsx`

- Replace `ContactWizard` import with `ContactForm`
- Remove `weddingSteps`, `teachingSteps`, `eventsSteps` arrays (~70 lines deleted)
- `WeddingsContact`: `<ContactForm serviceContext="Wedding" ctaLabel="Hold My Date" />`
- `TeachingContact`: `<ContactForm serviceContext="Teaching" ctaLabel="Begin the Conversation" />`
- `EventsContact`: `<ContactForm serviceContext="Event" ctaLabel="Discuss Your Event" />`

---

## 4. Remove Old `ContactWizard`

**File:** `src/components/contact/ContactWizard.tsx` — delete or replace entirely with the new `ContactForm`.

---

## Implementation Order

1. Create `ContactForm` component
2. Update `Contact.tsx` to use it
3. Update `SubPages.tsx` to use it and remove step arrays
4. Delete `ContactWizard.tsx`

