import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductSlider } from "@/components/ProductSlider";
import { CategoryTiles } from "@/components/CategoryTiles";
import { EducationBanner } from "@/components/EducationBanner";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Footer } from "@/components/Footer";
import type { Product, CategoryTile } from "@/types/content";

const NEW_ITEMS: Product[] = [
  { id: "1", title: "Essential Tee", price: "$45.00", image: "/images/product-tee-black.svg", href: "#product-1" },
  { id: "2", title: "Mindset Hoodie", price: "$85.00", image: "/images/product-hoodie.svg", href: "#product-2" },
  { id: "3", title: "Legacy Polo", price: "$65.00", image: "/images/product-polo.svg", href: "#product-3" },
  { id: "4", title: "Daily Crewneck", price: "$75.00", tag: "Sold Out", image: "/images/product-crewneck.svg", href: "#product-4" },
];

const BEST_SELLERS: Product[] = [
  { id: "5", title: "Classic Cap", price: "$40.00", image: "/images/product-cap.svg", href: "#product-5" },
  { id: "6", title: "Mindset Socks", price: "$18.00", image: "/images/product-socks.svg", href: "#product-6" },
  { id: "7", title: "Legacy Shorts", price: "$55.00", image: "/images/product-shorts.svg", href: "#product-7" },
  { id: "8", title: "Vision Jacket", price: "$120.00", tag: "Sold Out", image: "/images/product-jacket.svg", href: "#product-8" },
  { id: "9", title: "Daily Tote", price: "$35.00", image: "/images/product-tote.svg", href: "#product-9" },
  { id: "10", title: "Mindset Beanie", price: "$32.00", image: "/images/product-beanie.svg", href: "#product-10" },
];

const CATEGORIES: CategoryTile[] = [
  { title: "Shirts", image: "/images/cat-shirts.svg", href: "#shirts" },
  { title: "Hats", image: "/images/cat-hats.svg", href: "#hats" },
  { title: "Socks", image: "/images/cat-socks.svg", href: "#socks" },
  { title: "Polos", image: "/images/cat-polos.svg", href: "#polos" },
];

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main>
        <Hero />
        <ProductSlider title="New Items" products={NEW_ITEMS} />
        <ProductSlider title="Best Sellers" products={BEST_SELLERS} />
        <CategoryTiles tiles={CATEGORIES} />
        <EducationBanner />
        <WhoWeAre />
      </main>
      <Footer />
    </>
  );
}
