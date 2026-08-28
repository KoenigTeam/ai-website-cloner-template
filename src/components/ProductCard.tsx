import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex flex-col">
      <Link href={product.href ?? "#"} className="block group">
        <Image
          src={product.image.src}
          alt={product.image.alt}
          width={product.image.width}
          height={product.image.height}
          className="w-full object-cover"
          style={{ aspectRatio: "2/3" }}
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
        />
      </Link>
      <div className="pt-[10px] text-center">
        <h3 className="text-[19.52px] tracking-[0.8px] text-[#111] font-sans">
          {product.title}
        </h3>
        <p className="text-sm tracking-[0.8px] text-[#111] font-sans mt-[3px]">
          ${product.price.toFixed(2)}
        </p>
      </div>
    </article>
  );
}
