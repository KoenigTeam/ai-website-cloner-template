import { AnnouncementBar } from "@/components/AnnouncementBar";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { ProductGrid } from "@/components/ProductGrid";
import { WhoWeAre } from "@/components/WhoWeAre";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <Header />
      <main id="main-content">
        <Hero />
        <ProductGrid />
        <WhoWeAre />
      </main>
      <Footer />
    </>
  );
}
