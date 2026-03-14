
# Wedding Website - Multi-Page Implementation Plan

## Overview
Creating a complete multi-page wedding website for "Alicia & Andres" with faithful recreation of the design, including 5 main pages matching the navigation structure.

## Page Structure

Based on the navigation in the design image, we'll create these pages:

| Route | Page | Content |
|-------|------|---------|
| `/` | Home | Hero section with full navigation |
| `/our-story` | Our Story | Couple's story with photos |
| `/details` | Details | Location, Wedding Party, Accommodations |
| `/schedule` | Schedule | Itinerary/Timeline for wedding weekend |
| `/registry` | Registry | Gift registry information and links |

## Design System

### Color Palette (to add to CSS variables)
```text
--wedding-sage: 65 12% 45%        (Olive/sage for hero overlay, location section)
--wedding-cream: 40 30% 97%       (Off-white background sections)
--wedding-text: 0 0% 20%          (Dark text color)
--wedding-teal: 175 50% 35%       (Accent for buttons, day labels)
```

### Typography (Google Fonts to import)
- **Great Vibes**: Script font for "Alicia & Andres" title
- **Cormorant Garamond**: Elegant serif for section headings
- **Open Sans**: Clean sans-serif for body text and navigation

## Files to Create

### Shared Components
```text
src/components/wedding/
├── Navigation.tsx         - Persistent navigation header
├── Footer.tsx             - RSVP footer section
├── BranchDecoration.tsx   - Reusable SVG branch illustration
```

### Page Components
```text
src/pages/
├── Index.tsx              - Home page (Hero + overview)
├── OurStory.tsx           - Our Story page
├── Details.tsx            - Details page (Location, Party, Hotels)
├── Schedule.tsx           - Schedule/Itinerary page
├── Registry.tsx           - Registry page
```

### Section Components
```text
src/components/wedding/
├── HeroSection.tsx        - Full-height hero with overlay
├── StorySection.tsx       - Story content with photo
├── WeddingPartySection.tsx - Groomsmen/Bridesmaids tabs
├── LocationSection.tsx    - Venue information
├── AccommodationsSection.tsx - Hotel cards
├── ItinerarySection.tsx   - Timeline with day tabs
├── RegistrySection.tsx    - Registry logos and info
```

## Files to Modify

### 1. src/index.css
Add wedding-specific CSS variables and Google Fonts import:
- Import Great Vibes, Cormorant Garamond, Open Sans from Google Fonts
- Add wedding color variables
- Add custom font-family classes

### 2. tailwind.config.ts
Extend theme with:
- Wedding color palette using CSS variables
- Font family definitions for script, serif, sans

### 3. src/App.tsx
Add routes:
- `/` - Home
- `/our-story` - Our Story
- `/details` - Details
- `/schedule` - Schedule
- `/registry` - Registry

## Detailed Component Specifications

### Navigation Component
- Fixed/sticky header on all pages
- Links: Home, Our Story, Details, Schedule, Registry
- Active state with underline accent
- On hero: transparent overlay style
- On other pages: solid cream background

### Hero Section (Home Page)
- Full viewport height (100vh)
- Background: Placeholder couple photo with sage overlay
- Centered script title "Alicia & Andres"
- Date line: "February 15, 2025 | Joshua Tree, California"
- Scroll indicator arrow at bottom

### Our Story Page
- Branch decoration SVG at top
- "Our Story" heading in serif
- Two-column layout: text left, photo right
- Cream background
- Story paragraphs with date highlights

### Details Page
Contains 3 sections:

**Wedding Party Section:**
- Tab switcher: Groomsmen | Bridesmaids
- 4 circular avatar photos per tab
- Names beneath each photo
- Groomsmen: Julian Bernard, Damien Huber, Mark Pavone, David Blaine
- Bridesmaids: Similar structure with female names

**Location Section:**
- Sage/olive background color
- "The Location" label
- "Joshua Tree Carmine Resort" large heading
- Description paragraph
- Full-width venue/couple photo

**Accommodations Section:**
- White background
- 3-column grid of hotel cards
- Each card: Name, description, "Reserve" button
- Hotels: Joshua Tree Inn, Desert Sage Lodge, Carmine Resort

### Schedule Page
- "Itinerary" heading
- 3 date tabs: Feb 14, Feb 15 (Wedding Day), Feb 16
- Each day has timeline entries:
  - Time marker
  - Event name
  - Location/venue
  - Brief description

### Registry Page
- Branch decoration SVG
- "Registry" heading
- Paragraph about gifts
- 3 registry badges/logos as styled text blocks:
  - Crate & Barrel
  - Target
  - Williams Sonoma

### Footer Component
- Simple cream background
- Centered "RSVP" text or button
- Optional: Copyright line

## Responsive Breakpoints

### Desktop (default)
- Full layouts as designed
- 3-column grids for accommodations
- 4 avatars in row for wedding party

### Tablet (md: 768px)
- 2-column grids where applicable
- Slightly reduced padding

### Mobile (sm: 640px)
- Single column layouts
- Hamburger menu for navigation
- Stacked sections
- 2x2 grid for wedding party avatars

## Image Strategy
Using placeholder images from Unsplash or similar:
- Hero: Desert/couple themed landscape
- Story: Couple portrait
- Location: Joshua Tree landscape
- Accommodations: Hotel exterior placeholders
- Wedding Party: Generic avatar placeholders

## Implementation Order

1. **Foundation** - Update design system (CSS, Tailwind config)
2. **Shared Components** - Navigation, Footer, Branch decoration
3. **Home Page** - Hero section with navigation overlay
4. **Our Story Page** - Story content and layout
5. **Details Page** - Location, Wedding Party, Accommodations
6. **Schedule Page** - Itinerary with tabs
7. **Registry Page** - Registry section
8. **App Routes** - Wire up all routes in App.tsx
9. **Polish** - Responsive adjustments, smooth scroll, hover states
