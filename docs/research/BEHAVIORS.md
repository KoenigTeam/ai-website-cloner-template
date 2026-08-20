# Behaviors — fadedculture.com

> All behaviors extracted via Playwright MCP on 2026-08-19.

## 1. Announcement Bar — Marquee Scroll

- **Trigger:** Automatic (time-driven, infinite loop)
- **Mechanism:** CSS animation `fcMarquee` — `translateX(0)` → `translateX(-100%)`, 20s linear infinite
- **Element:** `.announcement__text` — `display: inline-block; padding-left: 100%`
- **Text:** "Free Shipping On All U.S Orders Over $125"
- **Style:** Black bg (#000), white text, 16px, Roboto Condensed, letter-spacing 3.2px (0.2em), uppercase, centered, padding 12px 0

## 2. Header — Sticky on Scroll

- **Trigger:** Scroll past ~62px (header height)
- **State A (top):** `position: relative; padding: 10px 0; background: #fff`
- **State B (scrolled):** `position: fixed; top: 0; left: 0; right: 0; transform: translate3d(0,-100%,0); z-index: 20` → then `.site-header--opening` class adds `transform: translateZ(0); transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)`
- **Effect:** Header slides down from above viewport into fixed position
- **Height change:** 62px → 54px (padding reduces)

## 3. Header Nav — Animated Underline Hover

- **Trigger:** Hover on `.site-nav__item > a`
- **Mechanism:** `::before` pseudo-element with `border-bottom: 2px solid; bottom: 0; left: 15px; right: 100%` → on hover `right: 15px`
- **Transition:** `right 0.3s`
- **Result:** Underline expands from left to right under the link text

## 4. Header Nav — "Shop All" Dropdown

- **Trigger:** Click/hover on "Shop All" nav item
- **Dropdown:** `position: absolute; display: grid; visibility: hidden` → visible on trigger
- **Style:** White bg, `box-shadow: 0 10px 20px rgba(0,0,0,0.09)`, padding 13.33px 0 5px, min-width 100%
- **Links:** Apparel, Barber Essentials, Hair Products, Hats/Accessories

## 5. Hero — Load Animation

- **Trigger:** Page load
- **Mechanism:** `.hero__text-wrap` starts `opacity: 0; transform: translateY(10px)` → animates to `opacity: 1; transform: translateY(0)` with `transition: opacity 0.4s`
- **Image:** `data-aos="image-fade-in"` → `fade-in` keyframes: `opacity 0.2, scale(0.98)` → `opacity 1, scale(1)`, 0.5s cubic-bezier(0.29, 0.65, 0.58, 1)

## 6. Scroll Reveal — AOS-style (appear-delay)

- **Trigger:** Element enters viewport (IntersectionObserver)
- **Hidden state:** `opacity: 0; transform: translate3d(0, 15px, 0)`
- **Visible state:** `opacity: 1; transform: translateZ(0)`
- **Transition:** `opacity 0.6s cubic-bezier(0.04, 0, 0.2, 1), transform 0.6s cubic-bezier(0.04, 0, 0.2, 1)`
- **Stagger delays:**
  - `.appear-delay-1`: transform delay 0.1s, opacity delay 0.2s
  - `.appear-delay-2`: transform delay 0.22s, opacity delay 0.32s
- **Applied to:** Section headings, product cards, category tiles, Who We Are text/buttons

## 7. Product Slider — Horizontal Scroll with Arrows

- **Trigger:** Click left/right arrow buttons
- **Mechanism:** `overflow-x: scroll` on `.overflow-scroller`, `scrollbar-width: none`, flex row with `flex-wrap: nowrap`
- **Arrows:** 60×60px circular buttons, white bg, 2px solid #111 border, positioned absolute at vertical center, z-index 3
- **Cards:** 396px wide (flex-basis 27%), image 360×539 (aspect 2:3), title 19.52px centered, price 14px centered
- **Sold Out tag:** Absolute top-right, black bg (#010101), white text, 14px, padding 7px 9px 7px 11px

## 8. Category Tiles — Hover Scale + Overlay

- **Trigger:** Hover on `.skrim__link`
- **Image:** `transform: scale(1.03); transition-duration: 0.8s`
- **Overlay:** `::before` pseudo — `background: #000; opacity: 0.15` → on hover `opacity: 0.3; transition-duration: 0.5s`
- **Label:** Centered white text, Arapey serif, ~21px, absolute positioned inset 0, flex centered
- **Additional overlay:** `::after` with `background-color: var(--colorImageOverlay); opacity: 0.03`

## 9. Buttons — Hover State

- **Tertiary buttons** (Learn More, slider arrows): `background: #fff; color: #111; border: 2px solid #111; border-radius: 35px; padding: 10px 25px; transition: background 0.15s`
- **Inverse buttons** (Hero SHOP NOW): `background: transparent; color: #fff; border: 2px solid #fff; border-radius: 35px; padding: 10px 25px; transition: background 0.15s`

## 10. Mobile Menu — Slide-in Drawer

- **Trigger:** Click hamburger icon (visible < 768px)
- **Mechanism:** Off-canvas `.slide-nav` drawer
- **Links:** Home, Shop All (expandable), Apparel, Barber Essentials, Hair Products, Hats/Accessories, Top sellers, Education, About Us, Cart, Log in, Search

## 11. Footer — Static

- **Background:** #010101 (near-black)
- **Layout:** 4-column grid (448px / 299px / 299px / 299px), padding 50px 40px
- **Headings:** 24.42px Roboto Condensed, white, letter-spacing 1.221px
- **Links:** 14px, white, line-height 21px
- **Newsletter:** "Join the club" heading, email input (transparent bg, white text, 42px height, padding 8px 45px 8px 0), subscribe button
- **Social icons:** Instagram, Facebook, Twitter, TikTok, YouTube
- **Payment icons:** 18 SVG icons (Amex, Apple Pay, etc.)
- **Currency selector:** Dropdown with country/currency list

## Global Patterns

- **No smooth-scroll library** — native browser scroll
- **No scroll-snap** on any container
- **Image fade-in:** All images use `data-aos="image-fade-in"` with `fade-in` keyframes (0.5s)
- **Font loading:** Google Fonts — Arapey (serif, headings), Roboto Condensed (sans-serif, body), Assistant (fallback)
