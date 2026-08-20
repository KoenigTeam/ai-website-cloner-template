# WhoWeAre Specification

## Overview
- **Target file:** `src/components/WhoWeAre.tsx`
- **Screenshot:** `docs/design-references/full-desktop-1440.png` (Who We Are section)
- **Interaction model:** static

## DOM Structure
```
<section> (index-section, margin 60px 0)
  └── <div> (page-width feature-row-wrapper, max-width 1300px, padding 0 40px)
        └── <div> (feature-row, display flex, align-items center, justify-content space-between, margin 0 auto)
              ├── <div> (feature-row__item feature-row__images, flex 0 1 57%)
              │     └── <div> (feature-row__second-image)
              │           └── <img> (lifestyle image)
              └── <div> (feature-row__item feature-row__text, flex 0 1 57%)
                    ├── <h2> (h1 appear-delay) — "WHO WE ARE"
                    ├── <div> (rte appear-delay-1) — paragraph text
                    └── <div> (appear-delay-2)
                          └── <a> (btn btn--tertiary) — "Learn More"
```

## Computed Styles

### Section
- margin: 60px 0

### Feature row
- display: flex
- align-items: center
- justify-content: space-between
- margin: 0 auto
- max-width: 1220px (within 1300px page-width)

### Image column
- flex: 0 1 57%
- width: ~695px
- padding: 0 20px

### Text column
- flex: 0 1 57%
- width: ~525px
- padding: 0 20px 0 40px
- text-align: center

### Heading (WHO WE ARE)
- font-size: 37px
- font-family: Arapey, serif
- font-weight: 400
- letter-spacing: 0.925px (0.025em)
- color: #111
- margin: 0

### Paragraph
- font-size: 16px
- font-family: "Roboto Condensed", sans-serif
- line-height: 24px (1.5)
- color: #111

### Button (Learn More)
- background: #fff
- color: #111
- border: 2px solid #111
- border-radius: 35px
- padding: 10px 25px
- font-size: 16px
- font-family: "Roboto Condensed", sans-serif
- transition: background 0.15s

## States & Behaviors

### Scroll reveal
- Heading: `appear-delay` (0.1s/0.2s stagger)
- Paragraph: `appear-delay-1` (0.1s/0.2s stagger)
- Button: `appear-delay-2` (0.22s/0.32s stagger)

### Button hover
- **Transition:** background 0.15s
- **Hover:** Likely fills with dark bg + white text

## Text Content (adapted for Rich Mindset)
- Heading: "WHO WE ARE"
- Paragraph: "Rich Mindset is a way of life. Inspired by that young and hungry individual looking for purpose through a world of chaos, it's our lifestyle. A commitment to becoming the best version of yourself every single day."
- Button: "Learn More"
- Button href: "#about"

## Responsive Behavior
- **Desktop (1440px):** Side-by-side, image left (695px), text right (525px)
- **Mobile (390px):** Stacked vertically, image full-width (275px), text below

## Assets
- Image: `public/images/who-we-are.svg` (placeholder)
