
# Gawryletz Music Services — Sacred Sound Wireframe

## Status: Phase 1 Complete ✅

## Completed
- Design system replaced (Sacred Sound palette: charcoal/gold/green)
- All Hickory & Rose components, config, and assets deleted
- Shared layout components created (MinimalHeader, Footer, PageTransition, SmoothScrollProvider, ThemeProvider)
- Hooks created (useScrollReveal, usePageTransition, useVigilSequence)
- All 22 routes wired in App.tsx
- Gateway page with 3 bento service cards
- Weddings landing (8 sections: hero, exhale, process, invitation, transformation, pricing preview, testimonials, CTA)
- Teaching landing (4 sections)
- Events landing (4 sections)
- All sub-pages: pricing, about, contact for each vertical
- Utility pages: About, Contact, FAQ, Proof, Listen
- Legal pages: Privacy, Terms, Accessibility
- NotFound page
- Death/Life theme system via next-themes

## Architecture
```
/                    → Gateway (3 bento cards)
/weddings            → Wedding landing (long-scroll)
/weddings/pricing    → Wedding pricing (3 tiers)
/weddings/about      → About Parker (wedding context)
/weddings/contact    → Wedding inquiry form
/teaching            → Teaching landing
/teaching/pricing    → $60/hr lesson pricing
/teaching/about      → About Parker (teaching context)
/teaching/contact    → Teaching inquiry form
/events              → Events landing
/events/pricing      → Events pricing (3 presences)
/events/about        → About Parker (events context)
/events/contact      → Events inquiry form
/listen              → Listening room (placeholder)
/proof               → Proof of craft (SPL, insurance, redundancy)
/faq                 → FAQ (6 questions)
/contact             → General contact form
/about               → General about
/privacy-policy      → Privacy policy
/terms               → Terms of service
/accessibility       → Accessibility statement
```

## Next Phase: Visual Polish
- Generate AI images for gateway cards and hero sections
- Add vigil sequence animation to wedding hero
- Build PianoKeyNav component
- Add atmospheric layers (Ken Burns, vignettes, warm fog)
- Refine typography and spacing details
- Add mobile sticky CTA bar
- Performance optimization
