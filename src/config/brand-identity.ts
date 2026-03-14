/**
 * HICKORY & ROSE — Brand Identity Reference
 * 
 * This file is a DECISION-MAKING REFERENCE ONLY. It does not render anything.
 * All UI/UX decisions (navigation, footer, visuals, layout, copy, interactions)
 * should be filtered through these brand constants.
 * 
 * STATUS: Populated from discovery framework. Update with client responses.
 */

export const BRAND_IDENTITY = {
  name: {
    full: "Hickory & Rose Wedding and Event Planning",
    short: "Hickory & Rose",
    tagline: "", // TODO: Confirm from discovery form responses (Section 1.5/1.6)
  },

  positioning: {
    oneSentence: "", // TODO: From Section 1.4 — client-friendly one-sentence description
    namedPromise: "Hickory & Rose exists to protect presence.", // From Section 1.7 framing
    positioningOptions: [
      "Refined rustic weddings, run with quiet luxury precision",
      "Elevated design. Calm execution. A day that feels like you.",
      "A beautifully personal wedding—protected by expert logistics.",
    ],
    differentiators: [
      "Calm leadership under pressure",
      "Luxury that still feels personal",
      "Seamless logistics + elevated design",
      "Trusted vendor collaboration",
      "Tailored planning support",
    ],
    knownFor: "", // TODO: From Section 1.13 — what the Edmonton market says verbatim
    refinedRusticEleganceIs: "", // TODO: From Section 1.10 — textures, palette, mood, restraint
    refinedRusticEleganceIsNot: "", // TODO: From Section 1.11 — what to avoid (DIY rustic, Pinterest collage, performative luxury)
  },

  voice: {
    tone: ["calm", "editorial", "warm", "refined"], // From Section 1.15 options
    boundaries: [], // TODO: From Section 1.16 — never snarky, never overly trendy, etc.
    repeatWords: ["calm", "presence", "intentional", "cohesive", "elevated", "protected", "refined"], // From Section 1.17 examples
    avoidWords: [], // TODO: From Section 1.18 — cheap, budget, DIY, "just," "simple," "stress-free"
    manifesto: "", // TODO: From Section 1.19 — brand manifesto in natural voice
    personaIfGuest: "", // TODO: From Section 1.20 — how Hickory & Rose shows up at a wedding
  },

  visual: {
    palette: {
      primary: "", // TODO: HSL value from style guide
      secondary: "",
      accent: "",
      background: "",
      text: "",
    },
    typography: {
      display: "", // TODO: Font for headings from style guide
      body: "", // TODO: Font for body text
      accent: "", // TODO: Optional accent font
    },
    photographyStyle: ["warm", "true-to-life", "editorial", "polished", "candid documentary", "detail-forward"], // From Section 9.13 options
    motionLevel: 3, // 1-5 scale: refined motion — from Section 9.14
    nonNegotiables: [], // TODO: From Section 9.4 — warm neutrals, natural textures, candlelight, refined florals, restraint, editorial whitespace
    avoid: [], // TODO: From Section 9.5 — clutter, overly trendy fonts, loud colors, heavy patterns, "Pinterest collage"
  },

  industry: {
    sector: "Wedding and Event Planning",
    services: [
      "Day-of coordination",
      "Partial planning",
      "Full-service planning",
      "Event planning (non-wedding)",
    ], // From Section 3.1
    serviceArea: "Edmonton and surrounding areas, Alberta, Canada", // From Section 1.3 framing
  },

  idealClient: {
    archetype: "Polished Paige",
    description: "Design-forward, detail-driven, strong taste, wants calm leadership without losing creative involvement",
    pressures: [
      "Loss aversion — she'll remember mistakes forever",
      "Social evaluation pressure — people who know taste",
      "Decision fatigue — too many choices",
      "Control paradox — wants involvement but not operational weight",
      "Family dynamics/opinions",
      "Budget ambiguity/hidden costs",
      "Vendor uncertainty — who's actually good?",
      "Timeline stress — how does a day flow?",
    ],
    firstFiveSeconds: "", // TODO: From Section 2.8 — reassurance line for homepage
    firstThirtySeconds: "", // TODO: From Section 2.9 — proof elements she needs to see
    byInquiry: "", // TODO: From Section 2.10 — relief, clarity, excitement, safety
  },
} as const;
