# Adding Products

All product data lives in **one file**: `src/data/products.ts`. Adding or editing products requires no component changes.

## How to add a product

1. Open `src/data/products.ts`.
2. Append an entry to the `products` array:

   ```ts
   {
     id: "tee-09",            // stable unique string
     title: "My Product",
     price: 45,               // plain number, USD dollars — renders as "$45.00"
     category: "Tees",
     image: {
       src: "/images/products/my-product.jpg",
       alt: "Descriptive alt text for screen readers and crawlers",
       width: 720,            // intrinsic pixel width — prevents layout shift
       height: 1080,
     },
     href: "#tee-09",         // optional link destination
   }
   ```

3. Save. The grid, filter bar, and load-more counts update automatically.

## Categories

- The filter bar is **derived from the data** — using a new `category` value on any product automatically adds a new filter pill. Never hardcode category names in components.
- Category order follows first appearance in the `products` array.

## Counts

- Legacy placeholder products were removed on 2026-09-04; only real products remain in the catalogue.
- Visible-item counts are controlled by two exported constants in the same file:
  - `DEFAULT_VISIBLE_COUNT = 6` — items visible on load per category
  - `LOAD_MORE_INCREMENT = 6` — items revealed per "Load more" click

## Rendering rule (important)

The grid renders **every product into the server-rendered DOM** and hides overflow with the `hidden` attribute — it never uses `.slice()` to cap the render output. This keeps the full catalogue crawlable on first paint. Do not reintroduce slicing.
