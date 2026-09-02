import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col">
      <Link
        href={product.href ?? "#"}
        className="group block relative overflow-hidden"
      >
        <Image
          src={product.image.src}
          alt={product.image.alt}
          width={product.image.width}
          height={product.image.height}
          className="w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.04]"
          style={{ aspectRatio: "2/3" }}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
        {/* Add to Cart — always visible on touch, hover-reveal on desktop */}
        <button
          type="button"
          aria-label={`Add ${product.title} to cart`}
          className="absolute inset-x-0 bottom-0 py-3 text-sm tracking-[0.8px] uppercase font-medium text-[var(--color-btn-primary-text)] bg-[var(--color-btn-primary)] md:opacity-0 md:translate-y-full md:transition-all md:duration-300 md:group-hover:opacity-100 md:group-hover:translate-y-0 md:focus-visible:opacity-100 md:focus-visible:translate-y-0"
          style={{ borderRadius: "0" }}
        >
          Add to Cart
        </button>
      </Link>
      <div className="pt-[10px] text-center">
        <p className="text-[11px] tracking-[1.5px] uppercase text-[#666] font-sans">
          Rich Mindset
        </p>
        <h3 className="text-[19.52px] tracking-[0.8px] text-[#111] font-sans font-semibold uppercase mt-[2px]">
          {product.title}
        </h3>
        <p className="text-sm tracking-[0.8px] text-[#111] font-sans mt-[3px]">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}
