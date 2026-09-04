/**
 * Product catalogue data module.
 *
 * To add a product: append an entry to `products` below. Adding a new
 * `category` value automatically adds a filter pill — never hardcode
 * category names in components.
 *
 * `price` is a plain number in USD dollars (e.g. 45 renders as "$45.00").
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

/** Number of products visible on initial load per category. */
export const DEFAULT_VISIBLE_COUNT = 6;

/** Number of additional products revealed per "Load more" click. */
export const LOAD_MORE_INCREMENT = 6;

export const products: Product[] = [
  // Tees (5)
  {
    id: "tee-01",
    title: "RM Large Logo",
    price: 40,
    category: "Tees",
    image: {
      src: "/images/products/tees-01-rm-black.jpg",
      alt: "Black oversized crewneck t-shirt with a white gothic RM large logo on the chest, RICH MINDSET text on the collar, and a red side tag",
      width: 1080,
      height: 1620,
    },
    href: "#tee-01",
  },
  {
    id: "tee-02",
    title: "RM Large Logo - Green",
    price: 40,
    category: "Tees",
    image: {
      src: "/images/products/tees-01-rm-green.jpg",
      alt: "Olive green oversized crewneck t-shirt with a white gothic RM large logo on the chest, RICH MINDSET text on the collar, and a red side tag",
      width: 1080,
      height: 1620,
    },
    href: "#tee-02",
  },
  {
    id: "tee-03",
    title: "RM Large Logo - Beige",
    price: 40,
    category: "Tees",
    image: {
      src: "/images/products/tees-01-rm-beige.jpg",
      alt: "Beige oversized crewneck t-shirt with a white gothic RM large logo on the chest, RICH MINDSET text on the collar, and a red side tag",
      width: 1080,
      height: 1620,
    },
    href: "#tee-03",
  },
  {
    id: "tee-04",
    title: "RM Large Logo - Blue",
    price: 40,
    category: "Tees",
    image: {
      src: "/images/products/tee-02-richmindset-blue.jpg",
      alt: "Royal blue oversized crewneck t-shirt shown front and back with a white gothic RM logo and Rich Mindset text on the chest and a vertical Rich Mindset back print",
      width: 1080,
      height: 1620,
    },
    href: "#tee-04",
  },
  {
    id: "tee-05",
    title: "Faith, Wisdom & Discipline Tee",
    price: 40,
    category: "Tees",
    image: {
      src: "/images/products/tee-03-discipline-black.jpg",
      alt: "Black oversized crewneck t-shirt shown front and back with a small Rich Mindset chest print and a large Rich Mindset Faith, Wisdom & Discipline back graphic",
      width: 1080,
      height: 1620,
    },
    href: "#tee-05",
  },
  // Headwear (1)
  {
    id: "cap-01",
    title: "RM Logo Cap - Black",
    price: 30,
    category: "Headwear",
    image: {
      src: "/images/products/cap-01-rm-black.jpg",
      alt: "Black trucker cap with white gothic Rich Mindset embroidery on the front, Faith Wisdom Discipline text on the mesh side, and a red underbrim",
      width: 1080,
      height: 1620,
    },
    href: "#cap-01",
  },
  // Accessories (2)
  {
    id: "acc-01",
    title: "Sea Salt Spray",
    price: 20,
    category: "Accessories",
    image: {
      src: "/images/products/acc-01-seasalt.jpg",
      alt: "White Rich Mindset sea salt spray bottle with a black trigger sprayer on a blue studio background",
      width: 1080,
      height: 1620,
    },
    href: "#acc-01",
  },
  {
    id: "acc-02",
    title: "Hair Spray",
    price: 20,
    category: "Accessories",
    image: {
      src: "/images/products/acc-02-hairspray.jpg",
      alt: "White Rich Mindset hair spray bottle with a black mist sprayer and clear cap on a blue studio background",
      width: 1080,
      height: 1620,
    },
    href: "#acc-02",
  },
];

/** Deduplicated category list in stable first-appearance order. */
export const CATEGORIES: string[] = products.reduce<string[]>(
  (acc, product) => (acc.includes(product.category) ? acc : [...acc, product.category]),
  [],
);
