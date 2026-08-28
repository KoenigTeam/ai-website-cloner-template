import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { CategoryTiles } from "@/components/CategoryTiles";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Footer } from "@/components/Footer";
import type { CategoryTile } from "@/types/content";

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
        <ProductGrid />
        <CategoryTiles tiles={CATEGORIES} />
        <WhoWeAre />
      </main>
      <Footer />
    </>
  );
}
