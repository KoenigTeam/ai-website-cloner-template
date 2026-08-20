# CategoryTiles Specification

## Overview
- **Target file:** `src/components/CategoryTiles.tsx`
- **Screenshot:** `docs/design-references/full-desktop-1440.png` (category tiles section)
- **Interaction model:** hover (scale + overlay)

## DOM Structure
```
<section> (index-section, margin 60px 0)
  └── <div> (page-width, max-width 1300px, padding 0 40px)
        └── <div> (skrim-grid, display flex, justify-content center, margin 0 -20px -40px)
              └── <a> (skrim__link) × 4
                    └── <div> (skrim__overlay, relative, overflow hidden)
                          └── <img> (category image, object-fit cover)
                          └── <div> (skrim__title, absolute inset 0, flex centered) — category name
```

## Computed Styles

### Section
- margin: 60px 0

### Grid container
- display: flex
- justify-content: center
- margin: 0 -20px -40px (negative margins for tile spacing)

### Tile (skrim__link)
- width: 275px, height: 275px (desktop)
- position: relative
- display: block

### Tile image
- width: 100%, height: 100%
- object-fit: cover

### Tile overlay (skrim__overlay)
- position: relative
- overflow: hidden
- transition: transform 0.5s
- `::before` pseudo: `background: #000; opacity: 0.15; inset: 0; position: absolute; transition: opacity 0.2s`
- `::after` pseudo: `background-color: var(--colorImageOverlay); opacity: 0.03; inset: 0; position: absolute; transition: 0.5s`

### Tile label (skrim__title)
- position: absolute, inset 0
- display: flex, align-items: center, justify-content: center
- color: #fff
- font-size: 21.09px (calc(37px * 0.57 * 0.85))
- font-family: Arapey, serif
- font-weight: 400
- letter-spacing: 0.527px
- text-align: center
- margin: 0 12.5px
- `::before` pseudo: radial-gradient text shadow

## States & Behaviors

### Hover — scale + overlay
- **Trigger:** Hover on tile link
- **Image:** `transform: scale(1.03); transition-duration: 0.8s`
- **Overlay:** `::before` opacity 0.15 → 0.3, `transition-duration: 0.5s`
- **Implementation:** CSS hover on `.skrim-link:hover .skrim-overlay`

### Scroll reveal
- Tiles use `appear-delay-2` for staggered fade-in

## Category Data (adapted for Rich Mindset)
| Title | Image | Href |
|-------|-------|------|
| Shirts | cat-shirts.svg | #shirts |
| Hats | cat-hats.svg | #hats |
| Socks | cat-socks.svg | #socks |
| Polos | cat-polos.svg | #polos |

## Responsive Behavior
- **Desktop (1440px):** 4 tiles in a row, 275×275px each
- **Mobile (390px):** 2×2 grid, 158×158px each, flex-wrap: wrap

## Assets
- Category images: `public/images/cat-*.svg` (placeholders)
