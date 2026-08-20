# Hero Specification

## Overview
- **Target file:** `src/components/Hero.tsx`
- **Screenshot:** `docs/design-references/full-desktop-1440.png` (hero area)
- **Interaction model:** static + load animation

## DOM Structure
```
<section> (full-bleed, relative)
  └── <div> (hero image container, aspect ratio ~55% padding-bottom)
        └── <img> (full-width, object-fit cover)
  └── <div> (hero__text-wrap, absolute inset 0)
        └── <div> (page-width, display table, height 100%)
              └── <div> (hero__text-content, display table-cell, vertical-center, text-center)
                    └── <div> (hero__text-shadow)
                          ├── <div> (hero__title, appear-delay) — "Welcome To The Culture"
                          └── <div> (hero__link, appear-delay-2)
                                └── <a> (btn btn--inverse) — "SHOP NOW"
```

## Computed Styles

### Section
- Full width, no max-width constraint
- Height: ~784px at 1440px (55% of viewport width via padding-bottom trick)
- Mobile: ~461px at 390px (123% padding-bottom)

### Hero image
- width: 100% (1425px at 1440 viewport)
- height: 784px
- object-fit: cover
- position: relative

### Text wrap (overlay)
- position: absolute, inset 0
- width: 100%, height: 100%
- color: #fff

### Text content (centering)
- display: table-cell
- vertical-align: middle
- text-align: center
- height: 100%

### Title
- font-size: 40px (desktop), 24px (mobile)
- font-family: Arapey, serif
- font-weight: 400
- letter-spacing: 1px
- color: #fff
- text-align: center

### Button (SHOP NOW)
- background: transparent
- color: #fff
- border: 2px solid #fff
- border-radius: 35px
- padding: 10px 25px
- font-size: 16px
- font-family: "Roboto Condensed", sans-serif
- letter-spacing: 0.8px
- margin-top: 20px
- transition: background 0.15s

## States & Behaviors

### Load animation
- **Trigger:** Page load
- **Text wrap:** `opacity: 0; transform: translateY(10px)` → `opacity: 1; transform: translateY(0)` with `transition: opacity 0.4s`
- **Image:** `fade-in` keyframes — `opacity 0.2, scale(0.98)` → `opacity 1, scale(1)`, 0.5s cubic-bezier(0.29, 0.65, 0.58, 1)
- **Stagger:** Title has `appear-delay`, button has `appear-delay-2`

### Button hover
- **Transition:** background 0.15s
- **Hover:** Likely fills with white bg + dark text (standard inverse button pattern)

## Text Content (adapted for Rich Mindset)
- Title: "Welcome To The Mindset"
- Button: "SHOP NOW"
- Button href: "#products" (scroll to products section)

## Responsive Behavior
- **Desktop (1440px):** Title 40px, full-bleed image ~784px tall
- **Mobile (390px):** Title 24px, image ~461px tall (taller aspect ratio)

## Assets
- Hero image: `public/images/hero-main.svg` (placeholder)
