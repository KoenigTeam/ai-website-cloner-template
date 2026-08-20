# Header Specification

## Overview
- **Target file:** `src/components/Header.tsx`
- **Screenshot:** `docs/design-references/full-desktop-1440.png` (top nav area)
- **Interaction model:** scroll-driven (sticky) + click-driven (dropdown, mobile menu)

## DOM Structure
```
<header> (site-header, white bg, relative → fixed on scroll)
  └── <div> (page-width, max-width 1300px, padding 0 40px)
        └── <div> (header-layout, 3-col grid: logo | nav | icons)
              ├── <div> (header-item--logo) — logo image 150×39px
              ├── <nav> (header-item--navigation, hidden on mobile)
              │     └── <ul> (site-nav)
              │           ├── <li> "Shop All" (has dropdown)
              │           │     └── <div> (dropdown: Apparel, Barber Essentials, Hair Products, Hats/Accessories)
              │           ├── <li> "Top sellers"
              │           ├── <li> "Education"
              │           ├── <li> "About Us"
              │           └── <li> "Cart"
              └── <div> (header-item--icons, hidden on mobile)
                    ├── Search icon + "Search"
                    ├── Account icon + "Log in"
                    └── Cart icon + "Cart"
        └── <button> (hamburger, visible only on mobile)
```

## Computed Styles

### Header container
- background: #fff (rgb(255,255,255))
- padding: 10px 0 (initial), 5px 0 (scrolled)
- position: relative → fixed on scroll
- height: 62px (initial) → 54px (scrolled)
- z-index: 20 (when fixed)

### Header layout (grid)
- display: grid
- grid-template-columns: 450.75px 483.492px 450.758px (desktop)
- align-items: center
- height: 44px

### Logo
- Image: 150×39px rendered (200×52 natural)
- Font fallback: Arapey serif, 25px, letter-spacing 0.625px

### Nav links
- font-size: 16px (dropdown items), 19.52px (top-level)
- font-family: "Roboto Condensed", sans-serif
- font-weight: 400
- letter-spacing: 0.8px (0.05em)
- color: #111 (rgb(17,17,17))
- padding: 7.5px 15px
- text-decoration: none
- white-space: nowrap

### Nav link hover — animated underline
- `::before` pseudo: `border-bottom: 2px solid; bottom: 0; left: 15px; right: 100%; transition: right 0.3s`
- On hover: `right: 15px` (underline expands left→right)

### Dropdown
- position: absolute
- display: grid
- visibility: hidden → visible on hover/click
- background: #fff
- box-shadow: 0 10px 20px rgba(0,0,0,0.09)
- padding: 13.33px 0 5px
- min-width: 100%

### Icons (right side)
- Search, Account, Cart icons with text labels
- font-size: 19.52px
- color: rgb(1,1,1)

## States & Behaviors

### Sticky header on scroll
- **Trigger:** Scroll past ~62px
- **State A (top):** `position: relative; padding: 10px 0; height: 62px`
- **State B (scrolled):** `position: fixed; top: 0; left: 0; right: 0; transform: translate3d(0,-100%,0); z-index: 20; padding: 5px 0; height: 54px`
- **Transition:** `.site-header--opening` adds `transform: translateZ(0); transition: transform 0.4s cubic-bezier(0.165, 0.84, 0.44, 1)` — slides down into view
- **Implementation:** JS scroll listener toggles classes

### Mobile menu
- **Trigger:** Click hamburger icon (< 768px)
- **Behavior:** Off-canvas slide-in drawer with nav links
- **Links:** Home, Shop All (expandable), Apparel, Barber Essentials, Hair Products, Hats/Accessories, Top sellers, Education, About Us, Cart, Log in, Search

## Text Content (adapted for Rich Mindset)
- Logo: "RICH MINDSET" (image placeholder)
- Nav: Shop All, Top sellers, Education, About Us, Cart
- Dropdown: Shirts, Hats, Socks, Polos
- Icons: Search, Log in, Cart

## Responsive Behavior
- **Desktop (1440px):** 3-col grid, full nav visible, icons visible
- **Tablet (768px):** Nav may compress, hamburger appears
- **Mobile (390px):** Hamburger only, logo centered, nav hidden, slide-in drawer

## Assets
- Logo: `public/images/logo.svg`
- Icons: SearchIcon, CartIcon, AccountIcon, MenuIcon from `icons.tsx`
