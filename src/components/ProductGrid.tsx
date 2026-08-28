import { ProductGridClient } from "@/components/ProductGridClient";

export function ProductGrid() {
  return (
    <section className="my-[60px]">
      <div className="mx-auto max-w-[1300px] px-10">
        <header className="mb-8">
          <h2
            className="text-[37px] tracking-[0.08em] text-center text-[#111] font-semibold uppercase"
            style={{ fontFamily: "'Clash Display', 'Archivo', sans-serif" }}
          >
            Shop All
          </h2>
        </header>
        <ProductGridClient />
      </div>
    </section>
  );
}
