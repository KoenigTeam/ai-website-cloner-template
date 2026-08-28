/**
 * Product catalogue data module.
 *
 * To add a product: append an entry to `products` below. Adding a new
 * `category` value automatically adds a filter pill — never hardcode
 * category names in components.
 *
 * `price` is a plain number in USD dollars (e.g. 45 renders as "$45.00").
 *
 * When real products land, set PLACEHOLDER_PRODUCTS to false.
 */

export interface Product {
  /** Stable unique identifier. */
  id: string;
  title: string;
  /** USD dollars. Rendered as $X.XX. */
  price: number;
  category: string;
  image: {
    src: string;
    alt: string;
    width: number;
    height: number;
  };
  href?: string;
}

export const PLACEHOLDER_PRODUCTS = true;

/** Number of products visible on initial load per category. */
export const DEFAULT_VISIBLE_COUNT = 6;

/** Number of additional products revealed per "Load more" click. */
export const LOAD_MORE_INCREMENT = 6;

export const products: Product[] = [
  // Tees (8)
  {
    id: "tee-01",
    title: "Placeholder Tee 01",
    price: 20,
    category: "Tees",
    image: {
      src: "/images/products/product-01.jpg",
      alt: "Placeholder studio photo of a folded plain t-shirt on a neutral background",
      width: 720,
      height: 1080,
    },
    href: "#tee-01",
  },
  {
    id: "tee-02",
    title: "Placeholder Tee 02",
    price: 22,
    category: "Tees",
    image: {
      src: "/images/products/product-02.jpg",
      alt: "Placeholder studio photo of a plain t-shirt on a hanger against a neutral wall",
      width: 720,
      height: 1080,
    },
    href: "#tee-02",
  },
  {
    id: "tee-03",
    title: "Placeholder Tee 03",
    price: 24,
    category: "Tees",
    image: {
      src: "/images/products/product-03.jpg",
      alt: "Placeholder studio photo of a plain long-sleeve t-shirt laid flat",
      width: 720,
      height: 1080,
    },
    href: "#tee-03",
  },
  {
    id: "tee-04",
    title: "Placeholder Tee 04",
    price: 26,
    category: "Tees",
    image: {
      src: "/images/products/product-04.jpg",
      alt: "Placeholder studio photo of a pocket t-shirt on a neutral background",
      width: 720,
      height: 1080,
    },
    href: "#tee-04",
  },
  {
    id: "tee-05",
    title: "Placeholder Tee 05",
    price: 28,
    category: "Tees",
    image: {
      src: "/images/products/product-05.jpg",
      alt: "Placeholder studio photo of a v-neck t-shirt folded on a neutral surface",
      width: 720,
      height: 1080,
    },
    href: "#tee-05",
  },
  {
    id: "tee-06",
    title: "Placeholder Tee 06",
    price: 30,
    category: "Tees",
    image: {
      src: "/images/products/product-06.jpg",
      alt: "Placeholder studio photo of a graphic-free crewneck t-shirt on a hanger",
      width: 720,
      height: 1080,
    },
    href: "#tee-06",
  },
  {
    id: "tee-07",
    title: "Placeholder Tee 07",
    price: 32,
    category: "Tees",
    image: {
      src: "/images/products/product-07.jpg",
      alt: "Placeholder studio photo of an oversized t-shirt laid flat on a neutral background",
      width: 720,
      height: 1080,
    },
    href: "#tee-07",
  },
  {
    id: "tee-08",
    title: "Placeholder Tee 08",
    price: 34,
    category: "Tees",
    image: {
      src: "/images/products/product-08.jpg",
      alt: "Placeholder studio photo of a plain white t-shirt against a neutral wall",
      width: 720,
      height: 1080,
    },
    href: "#tee-08",
  },
  // Hoodies (4)
  {
    id: "hoodie-01",
    title: "Placeholder Hoodie 01",
    price: 60,
    category: "Hoodies",
    image: {
      src: "/images/products/product-09.jpg",
      alt: "Placeholder studio photo of a pullover hoodie on a neutral background",
      width: 720,
      height: 1080,
    },
    href: "#hoodie-01",
  },
  {
    id: "hoodie-02",
    title: "Placeholder Hoodie 02",
    price: 65,
    category: "Hoodies",
    image: {
      src: "/images/products/product-10.jpg",
      alt: "Placeholder studio photo of a zip-up hoodie on a hanger",
      width: 720,
      height: 1080,
    },
    href: "#hoodie-02",
  },
  {
    id: "hoodie-03",
    title: "Placeholder Hoodie 03",
    price: 70,
    category: "Hoodies",
    image: {
      src: "/images/products/product-11.jpg",
      alt: "Placeholder studio photo of a heavyweight hoodie laid flat",
      width: 720,
      height: 1080,
    },
    href: "#hoodie-03",
  },
  {
    id: "hoodie-04",
    title: "Placeholder Hoodie 04",
    price: 75,
    category: "Hoodies",
    image: {
      src: "/images/products/product-12.jpg",
      alt: "Placeholder studio photo of a dark-colored hoodie against a neutral wall",
      width: 720,
      height: 1080,
    },
    href: "#hoodie-04",
  },
  // Headwear (2)
  {
    id: "cap-01",
    title: "Placeholder Cap 01",
    price: 30,
    category: "Headwear",
    image: {
      src: "/images/products/product-13.jpg",
      alt: "Placeholder studio photo of a plain baseball cap on a neutral background",
      width: 720,
      height: 1080,
    },
    href: "#cap-01",
  },
  {
    id: "cap-02",
    title: "Placeholder Beanie 02",
    price: 25,
    category: "Headwear",
    image: {
      src: "/images/products/product-14.jpg",
      alt: "Placeholder studio photo of a folded knit beanie on a neutral surface",
      width: 720,
      height: 1080,
    },
    href: "#cap-02",
  },
  // Accessories (1)
  {
    id: "acc-01",
    title: "Placeholder Tote 01",
    price: 35,
    category: "Accessories",
    image: {
      src: "/images/products/product-15.jpg",
      alt: "Placeholder studio photo of a canvas tote bag hanging against a neutral wall",
      width: 720,
      height: 1080,
    },
    href: "#acc-01",
  },
];

/** Deduplicated category list in stable first-appearance order. */
export const CATEGORIES: string[] = products.reduce<string[]>(
  (acc, product) => (acc.includes(product.category) ? acc : [...acc, product.category]),
  [],
);
