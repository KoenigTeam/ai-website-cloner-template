# ProductSlider Specification

## Overview
- **Target file:** `src/components/ProductSlider.tsx`
- **Screenshot:** `docs/design-references/full-desktop-1440.png` (New Items / Best Sellers sections)
- **Interaction model:** click-driven (arrow buttons scroll horizontally)

## DOM Structure
```
<section> (index-section, margin 60px 0)
  └── <div> (page-width, max-width 1300px, padding 0 40px)
        ├── <header> (section-header)
        │     └── <h2> (section-header__title, appear-delay) — "New Items" / "Best Sellers"
        └── <div> (overflow-scroll-wrap, position relative)
              ├── <button> (left arrow, absolute, 60×60, circular)
              ├── <button> (right arrow, absolute, 60×60, circular)
              └── <div> (overflow-scroller, overflow-x scroll, scrollbar hidden)
                    └── <div> (grid, display flex, flex-wrap nowrap)
                          └── <div> (grid__item grid-product) × N
                                ├── <a> (grid-product__link)
                                │     └── <div> (image-wrap, relative)
                                │           └── <img> (product image)
                                │           └── <span> (sold-out tag, absolute top-right)
                                └── <div> (grid-product__meta)
                                      ├── <div> (grid-product__title) — product name
                                      └── <div> (grid-product__price) — price
```

## Computed Styles

### Section
- margin: 60px 0

### Section heading
- font-size: 37px
- font-family: Arapey, serif
- font-weight: 400
- letter-spacing: 0.925px (0.025em)
- text-align: center
- color: #111
- margin: 0

### Scroller
- overflow-x: scroll
- scrollbar-width: none (hidden)
- padding-bottom: 20px

### Grid (flex row)
- display: flex
- flex-wrap: nowrap
- gap: 0 (gap created by card padding)

### Product card
- flex: 0 0 27% (flex-basis 27%, flex-shrink 0)
- padding-left: 20px
- width: ~396px at 1440px

### Product image
- width: ~360px
- aspect-ratio: 2:3 (360×539)
- object-fit: cover

### Sold Out tag
- position: absolute, top: 0, right: 0
- background: #010101
- color: #fff
- font-size: 14px
- padding: 7px 9px 7px 11px
- letter-spacing: 0.8px

### Product title
- font-size: 19.52px (calc(16px * 1.22 * 0.85))
- font-family: "Roboto Condensed", sans-serif
- font-weight: 400
- color: #111
- text-align: center
- margin: 0

### Product price
- font-size: 14px (calc((16px - 2px) * 0.85))
- font-family: "Roboto Condensed", sans-serif
- font-weight: 400
- color: #111
- text-align: center
- margin-top: 3px

### Meta container
- padding-top: 10px

### Arrow buttons
- width: 60px, height: 60px
- border-radius: 100% (circular)
- background: #fff
- border: 2px solid #111
- color: #111
- position: absolute
- z-index: 3
- Vertically centered on the card images

## States & Behaviors

### Arrow click scroll
- **Trigger:** Click left/right arrow
- **Behavior:** Scrolls the overflow container horizontally
- **Implementation:** JS scrollBy or scrollTo on the scroller element

### Scroll reveal
- Cards use `appear-delay` classes for staggered fade-in on scroll into view

## Product Data (adapted for Rich Mindset)

### New Items
| Title | Price | Tag | Image |
|-------|-------|-----|-------|
| Essential Tee | $45.00 | — | product-tee-black.svg |
| Mindset Hoodie | $85.00 | — | product-hoodie.svg |
| Legacy Polo | $65.00 | — | product-polo.svg |
| Daily Crewneck | $75.00 | Sold Out | product-crewneck.svg |

### Best Sellers
| Title | Price | Tag | Image |
|-------|-------|-----|-------|
| Classic Cap | $40.00 | — | product-cap.svg |
| Mindset Socks | $18.00 | — | product-socks.svg |
| Legacy Shorts | $55.00 | — | product-shorts.svg |
| Vision Jacket | $120.00 | Sold Out | product-jacket.svg |
| Daily Tote | $35.00 | — | product-tote.svg |
| Mindset Beanie | $32.00 | — | product-beanie.svg |

## Responsive Behavior
- **Desktop (1440px):** 4 cards visible, 396px each
- **Mobile (390px):** Cards 255px wide, horizontal scroll

## Assets
- Product images: `public/images/product-*.svg` (placeholders)
- Arrow icons: ChevronLeftIcon, ChevronRightIcon from `icons.tsx`
