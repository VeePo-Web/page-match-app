import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: ["./pages/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./app/**/*.{ts,tsx}", "./src/**/*.{ts,tsx}"],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: "1rem", sm: "1.5rem", lg: "2rem" },
      screens: { sm: "640px", md: "768px", lg: "1000px", xl: "1200px", "2xl": "1200px" },
    },
    extend: {
      fontFamily: {
        display: ['"Cormorant Garamond"', '"Times New Roman"', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        "surface-dark-band": "hsl(var(--surface-dark-band))",
        "ink-primary": "hsl(var(--ink-primary))",
        "ink-soft": "hsl(var(--ink-soft))",
        "ink-inverse": "hsl(var(--ink-inverse))",
        lines: "hsl(var(--lines))",
        "lines-soft": "hsl(var(--lines-soft))",
        primary: { DEFAULT: "hsl(var(--primary))", foreground: "hsl(var(--primary-foreground))" },
        secondary: { DEFAULT: "hsl(var(--secondary))", foreground: "hsl(var(--secondary-foreground))" },
        destructive: { DEFAULT: "hsl(var(--destructive))", foreground: "hsl(var(--destructive-foreground))" },
        muted: { DEFAULT: "hsl(var(--muted))", foreground: "hsl(var(--muted-foreground))" },
        accent: { DEFAULT: "hsl(var(--accent))", foreground: "hsl(var(--accent-foreground))" },
        popover: { DEFAULT: "hsl(var(--popover))", foreground: "hsl(var(--popover-foreground))" },
        card: { DEFAULT: "hsl(var(--card))", foreground: "hsl(var(--card-foreground))" },
        "vow-yellow": "hsl(var(--vow-yellow))",
        "vine-green": "hsl(var(--vine-green))",
        "rich-black": "hsl(var(--rich-black))",
        "ebon-charcoal": "hsl(var(--ebon-charcoal))",
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      spacing: {
        'fitz-1': '4px',
        'fitz-2': '8px',
        'fitz-3': '12px',
        'fitz-4': '16px',
        'fitz-5': '24px',
        'fitz-6': '32px',
        'fitz-7': '40px',
        'fitz-8': '56px',
        'fitz-9': '80px',
        'fitz-10': '120px',
      },
      boxShadow: {
        'fantasy-card': '0 6px 30px hsl(var(--rich-black) / 0.35)',
        'fantasy-cta': '0 8px 24px hsl(var(--vow-yellow) / 0.18)',
        'fantasy-cta-hover': '0 12px 32px hsl(var(--vow-yellow) / 0.24)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0", opacity: "0" },
          to: { height: "var(--radix-accordion-content-height)", opacity: "1" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)", opacity: "1" },
          to: { height: "0", opacity: "0" },
        },
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.22s ease-out",
        "accordion-up": "accordion-up 0.22s ease-out",
        "fade-in": "fade-in 0.22s ease-out",
      },
      transitionDuration: {
        fast: '150ms',
        default: '250ms',
        slow: '400ms',
      },
      transitionTimingFunction: {
        mood: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
