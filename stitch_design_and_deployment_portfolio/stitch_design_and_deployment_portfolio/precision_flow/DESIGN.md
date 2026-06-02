---
name: Precision & Flow
colors:
  surface: '#f7f9fb'
  surface-dim: '#d8dadc'
  surface-bright: '#f7f9fb'
  surface-container-lowest: '#ffffff'
  surface-container-low: '#f2f4f6'
  surface-container: '#eceef0'
  surface-container-high: '#e6e8ea'
  surface-container-highest: '#e0e3e5'
  on-surface: '#191c1e'
  on-surface-variant: '#45464d'
  inverse-surface: '#2d3133'
  inverse-on-surface: '#eff1f3'
  outline: '#76777d'
  outline-variant: '#c6c6cd'
  surface-tint: '#565e74'
  primary: '#000000'
  on-primary: '#ffffff'
  primary-container: '#131b2e'
  on-primary-container: '#7c839b'
  inverse-primary: '#bec6e0'
  secondary: '#515f74'
  on-secondary: '#ffffff'
  secondary-container: '#d5e3fd'
  on-secondary-container: '#57657b'
  tertiary: '#000000'
  on-tertiary: '#ffffff'
  tertiary-container: '#001f26'
  on-tertiary-container: '#0090a9'
  error: '#ba1a1a'
  on-error: '#ffffff'
  error-container: '#ffdad6'
  on-error-container: '#93000a'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#d5e3fd'
  secondary-fixed-dim: '#b9c7e0'
  on-secondary-fixed: '#0d1c2f'
  on-secondary-fixed-variant: '#3a485c'
  tertiary-fixed: '#acedff'
  tertiary-fixed-dim: '#4cd7f6'
  on-tertiary-fixed: '#001f26'
  on-tertiary-fixed-variant: '#004e5c'
  background: '#f7f9fb'
  on-background: '#191c1e'
  surface-variant: '#e0e3e5'
typography:
  display:
    fontFamily: Inter
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Inter
    fontSize: 40px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-lg-mobile:
    fontFamily: Inter
    fontSize: 32px
    fontWeight: '600'
    lineHeight: '1.2'
    letterSpacing: -0.01em
  headline-md:
    fontFamily: Inter
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.5'
  label-caps:
    fontFamily: JetBrains Mono
    fontSize: 12px
    fontWeight: '500'
    lineHeight: '1.0'
    letterSpacing: 0.1em
  label-md:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '500'
    lineHeight: '1.4'
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  unit: 8px
  container-max: 1280px
  gutter: 24px
  margin-desktop: 64px
  margin-mobile: 24px
---

## Brand & Style

This design system is built for a professional design portfolio that balances technical mastery with creative intuition. The brand personality is **Expert, Reliable, Creative, and Technical**. 

The visual style follows a **Modern Minimalist** approach with a technical edge. It prioritizes clarity and intentionality, using generous whitespace to allow portfolio work to breathe. Elements are defined by high-end finishes: subtle borders, controlled depth, and a typography-first hierarchy. The emotional response should be one of trust and sophistication, signaling a designer who understands both the "how" and the "why" of digital product construction.

## Colors

The palette is anchored in professional stability with a high-energy technical accent.

- **Primary (Deep Charcoal):** Used for primary text, headings, and high-emphasis backgrounds. It provides the grounding force of the UI.
- **Secondary (Slate Blue):** Used for secondary text, icons, and subtle UI borders. It bridges the gap between the dark primary and light neutral.
- **Tertiary (Electric Cyan):** The "Technical Spark." Reserved strictly for interactive elements (CTAs), focus states, and key highlights.
- **Neutral (Crisp White/Slate 50):** The base of the interface, providing a clean canvas that emphasizes content and imagery.

Success, warning, and error states should utilize desaturated versions of green, amber, and red to maintain the professional tone without breaking the minimalist aesthetic.

## Typography

The system utilizes **Inter** for its systematic, utilitarian, and highly legible characteristics. To reinforce the "Technical" aspect of the brand, **JetBrains Mono** is introduced for labels, metadata, and overlines to provide a developer-friendly, precise aesthetic.

- **Headlines:** Use tight letter-spacing and heavy weights to create a strong visual anchor.
- **Body:** Prioritize readability with a generous line height (1.5-1.6x).
- **Technical Labels:** Small-caps mono-spaced text should be used for categories, tags, or "In Progress" indicators.

## Layout & Spacing

This design system employs a **Fixed Grid** layout for desktop (12 columns) and a **Fluid Grid** for mobile (4 columns).

- **Rhythm:** All spacing must be a multiple of 8px. Use 16px/24px for component internals and 64px/128px for sectional padding to maintain a high-end, airy feel.
- **Breakpoints:**
  - **Desktop (1280px+):** Max-width container with 64px margins.
  - **Tablet (768px - 1279px):** Fluid container with 40px margins.
  - **Mobile (Up to 767px):** Fluid container with 24px margins; typography scales down for display roles.
- **Alignment:** Consistent left-alignment for all text blocks to maintain a clean, architectural vertical axis.

## Elevation & Depth

Visual hierarchy is achieved through **Tonal Layers** and **Ambient Shadows**.

- **Surfaces:** Use a subtle 1px border (#E2E8F0) for most cards and containers rather than heavy shadows.
- **Shadows:** When depth is required (e.g., elevated cards on hover), use a "Long & Soft" shadow: `0 20px 25px -5px rgba(15, 23, 42, 0.05)`. The shadow should feel like a soft glow rather than a dark stain.
- **Interaction:** On hover, elements should translate -4px on the Y-axis to provide tactile feedback, reinforcing the "App Designer" expertise.

## Shapes

The shape language is **Refined and Modern**. 

- **Base Radius:** 8px (0.5rem) is the standard for buttons, inputs, and small cards.
- **Large Radius:** 16px (1rem) for main project cards and container sections.
- **Buttons:** Maintain the 8px radius; do not use pills, as the geometric squareness feels more "technical" and "structured."

## Components

- **Buttons:** 
  - *Primary:* Electric Cyan background, Primary (Deep Charcoal) text. High contrast, bold.
  - *Secondary:* Transparent background, 1px Primary border, Primary text.
- **Project Cards:** Full-width or half-width. Large 16px radius. Subtle 1px border. Images should have a 100% width and utilize a 'zoom' transition on hover.
- **Chips/Tags:** Using JetBrains Mono. Light slate background with secondary text. 4px radius (Soft).
- **Input Fields:** 1px Slate-200 border, 8px radius. On focus, the border transitions to Electric Cyan with a 3px soft outer glow.
- **Navigation:** Fixed top bar with a glassmorphism effect (Backdrop blur: 12px, 80% opacity white) to maintain context while scrolling.
- **Lists:** Clean dividers (1px Slate-100) with generous vertical padding (24px) for case study outlines.