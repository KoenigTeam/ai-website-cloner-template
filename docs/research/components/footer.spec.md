# Footer Specification

## Overview
- **Target file:** `src/components/Footer.tsx`
- **Screenshot:** `docs/design-references/full-desktop-1440.png` (footer section)
- **Interaction model:** static + click (links, newsletter)

## DOM Structure
```
<footer> (site-footer, black bg, text-center)
  └── <div> (custom-pg page-width, padding 50px 40px)
        └── <div> (custom-footer-block, display grid, 4 columns)
              ├── <div> (column: About)
              │     ├── <h2> "About"
              │     ├── <p> brand description
              │     └── <a> "Read more..."
              ├── <div> (column: Information)
              │     ├── <h2> "Information"
              │     └── <ul> links: Shop All, Top sellers, Education, About Us, Cart
              ├── <div> (column: Store Pages)
              │     ├── <h2> "Store Pages"
              │     └── <ul> links: Search, Contact Us, Size Chart, Refund Policy, Shipping Policy, Terms, Privacy
              ├── <div> (column: THE LAB HOURS)
              │     ├── <h2> "THE LAB HOURS"
              │     ├── <p> hours text
              │     ├── <p> email
              │     └── <p> address
              └── <div> (column: Join the club)
                    ├── <h2> "Join the club"
                    ├── <form> (newsletter: email input + subscribe button)
                    └── <div> (social icons: Instagram, Facebook, Twitter, TikTok, YouTube)
        └── <div> (payment icons row)
        └── <div> (currency selector)
```

## Computed Styles

### Footer container
- background: #010101 (rgb(1,1,1))
- color: #fff
- padding: 0 (inner .custom-pg has padding 50px 40px)
- text-align: center

### Footer grid
- display: grid
- grid-template-columns: 448.328px 298.891px 298.891px 298.883px (desktop)
- padding-bottom: 32px
- margin-bottom: 32px

### Column headings (h2)
- font-size: 24.42px
- font-family: "Roboto Condensed", sans-serif
- font-weight: 400
- color: #fff
- letter-spacing: 1.221px (0.05em)

### Footer links
- font-size: 14px
- color: #fff
- line-height: 21px

### Newsletter input
- background: transparent
- border: none (or subtle)
- border-radius: 0
- padding: 8px 45px 8px 0
- height: 42px
- color: #fff
- width: 400px

### Payment icons
- 18 SVG icons in a row
- display: block

## States & Behaviors
- Static layout, no scroll animations
- Newsletter form: email input + submit
- Social icons: links to external profiles
- Currency selector: dropdown (non-functional in clone)

## Text Content (adapted for Rich Mindset)

### About column
- Heading: "About"
- Text: "Rich Mindset... a brand that represents who you are and the legacy you building. A commitment to becoming the best version of yourself every single day."
- Link: "Read more..."

### Information column
- Heading: "Information"
- Links: Shop All, Top sellers, Education, About Us, Cart

### Store Pages column
- Heading: "Store Pages"
- Links: Search, Contact Us, Size Chart, Refund Policy, Shipping Policy, Terms of Service, Privacy Policy

### Lab Hours column
- Heading: "THE LAB HOURS"
- Hours: "1-4pm (Tues - Fri) / 11-2pm (Sat) / Closed (Sun-Mon)"
- Email: "support@richmindset.com"
- Address: "San Antonio, TX"

### Join the club column
- Heading: "Join the club"
- Newsletter placeholder: "Enter your email"
- Social links: Instagram (@rich_mindset210), Facebook, Twitter, TikTok, YouTube

## Responsive Behavior
- **Desktop (1440px):** 4-column grid
- **Mobile (390px):** Stacked columns, full-width

## Assets
- Social icons: InstagramIcon, FacebookIcon, TwitterIcon, TikTokIcon, YouTubeIcon from `icons.tsx`
- Email icon: EmailIcon from `icons.tsx`
