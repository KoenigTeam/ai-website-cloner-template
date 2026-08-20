# AnnouncementBar Specification

## Overview
- **Target file:** `src/components/AnnouncementBar.tsx`
- **Screenshot:** `docs/design-references/full-desktop-1440.png` (top strip)
- **Interaction model:** time-driven (CSS marquee animation)

## DOM Structure
```
<div> (black bg, overflow hidden, relative, z-index 24)
  └── <div> (wrapper, padding 0, margin 0)
        └── <div> (announcement text, inline-block, padding-left 100%, marquee animation)
```

## Computed Styles

### Container
- background: #000 (rgb(0,0,0))
- padding: 12px 0
- overflow: hidden
- position: relative
- z-index: 24

### Text
- color: #fff (rgb(255,255,255))
- font-size: 16px
- font-family: "Roboto Condensed", sans-serif
- font-weight: 400
- letter-spacing: 3.2px (0.2em)
- text-transform: uppercase
- text-align: center
- display: inline-block
- padding-left: 100%
- animation: fc-marquee 20s linear infinite

## States & Behaviors

### Marquee scroll
- **Trigger:** Automatic, infinite loop
- **Animation:** `@keyframes fc-marquee { 0% { transform: translateX(0); } 100% { transform: translateX(-100%); } }`
- **Duration:** 20s linear infinite
- **Implementation:** CSS animation on the text element

## Text Content (verbatim — adapted for Rich Mindset)
"Free Shipping On All U.S Orders Over $125"

## Responsive Behavior
- **Desktop (1440px):** Full width, centered text
- **Mobile (390px):** Same, text may be smaller or same size
- **Breakpoint:** No layout change, just full-width strip

## Assets
- None (pure CSS/text)
