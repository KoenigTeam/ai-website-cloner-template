# Page Topology — fadedculture.com

> Extracted 2026-08-19 via Playwright MCP at 1440px / 768px / 390px.
> Reviews/testimonials section (`testimonials_W8mqPM`) is **omitted** per client intake.

## Section Order (top → bottom)

| # | Section | Shopify ID | Interaction Model | Notes |
|---|---------|-----------|-------------------|-------|
| 1 | Announcement Bar | `announcement-bar` | time-driven (marquee) | Black bg, scrolling text |
| 2 | Header / Nav | `header` | scroll-driven (sticky) + click (dropdown, mobile menu) | 3-col grid, sticky on scroll |
| 3 | Hero | `hero-animated` | static + load animation | Full-bleed image, centered title + CTA |
| 4 | New Items Slider | `featured_collection_slider_jfqAtx` | click-driven (arrow scroll) | Horizontal overflow-scroll, 4 products |
| 5 | Best Sellers Slider | `featured_collection_slider_YBGVk3` | click-driven (arrow scroll) | Horizontal overflow-scroll, 6 products |
| 6 | Category Tiles | `featured_collections_AWcgff` | hover (scale + overlay) | 4 tiles, flex row |
| 7 | Education Banner | `17742750717d92dd06` | static (link) | 230×230 rounded image, centered label |
| ~~8~~ | ~~Slideshow~~ | ~~`slideshow_tNrrry`~~ | — | **REMOVED** per phase 2 scope |
| 9 | Who We Are | `text_and_image_hca6qW` | static | Flex row: image left, text right |
| ~~10~~ | ~~Testimonials~~ | ~~`testimonials_W8mqPM`~~ | — | **OMITTED** per intake |
| 10 | Footer | `footer` | static + click (links) | Black bg, 4-col grid + newsletter + socials |

## Layout Architecture

- **Page container:** No global scroll wrapper; native document scroll
- **Content max-width:** `.page-width` = 1300px, padding 0 40px
- **Section spacing:** `margin: 60px 0` on most index sections
- **Z-index layers:** announcement (z-24) > header sticky (z-20) > content
- **Sticky elements:** Header becomes `position: fixed` on scroll with slide-down animation
- **No smooth-scroll library** (no Lenis, no Locomotive)

## Responsive Breakpoints

| Breakpoint | Changes |
|-----------|---------|
| ≥1440px | Full layout: 3-col header grid, 4 product cards visible, 4 category tiles in row |
| 768–1439px | Header grid compresses, tiles may wrap |
| <768px (`small--hide` / `medium-up--hide`) | Hamburger menu replaces nav, hero title 24px, tiles 2×2 grid (158px each), Who We Are stacks vertically, product cards 255px wide |

## Fixed/Sticky Overlays

- **Announcement bar:** Static at top (not sticky), z-index 24
- **Header:** `position: relative` initially → `position: fixed; top: 0; transform: translate3d(0,-100%,0)` → slides in with `translateZ(0)` + 0.4s transition when scrolled past threshold
- **Mobile slide-nav:** Off-canvas drawer triggered by hamburger icon

## Dependencies

- Header overlays hero content when sticky
- Product sliders depend on shared `ProductCard` component
- Category tiles use the `skrim` overlay pattern (hover scale + dark overlay)
