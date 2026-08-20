"use client";

import { useRef, useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeftIcon, ChevronRightIcon } from "./icons";
import type { Product } from "@/types/content";

interface ProductSliderProps {
  title: string;
  products: Product[];
}

export function ProductSlider({ title, products }: ProductSliderProps) {
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    const el = scrollerRef.current;
    if (!el) return;
    setCanScrollLeft(el.scrollLeft > 0);
    setCanScrollRight(el.scrollLeft < el.scrollWidth - el.clientWidth - 10);
  };

  useEffect(() => {
    checkScroll();
    const el = scrollerRef.current;
    if (el) {
      el.addEventListener("scroll", checkScroll, { passive: true });
      return () => el.removeEventListener("scroll", checkScroll);
    }
  }, []);

  const scroll = (direction: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const cardWidth = 396;
    el.scrollBy({
      left: direction === "left" ? -cardWidth : cardWidth,
      behavior: "smooth",
    });
  };

  return (
    <section className="my-[60px]">
      <div className="mx-auto max-w-[1300px] px-10">
        <header className="mb-8">
          <h2
            className="text-[37px] tracking-[0.08em] text-center text-[#111] font-semibold uppercase"
            style={{ fontFamily: "'Clash Display', 'Archivo', sans-serif" }}
          >
            {title}
          </h2>
        </header>

        <div className="relative">
          {/* Left arrow */}
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`absolute left-[-70px] top-1/2 -translate-y-1/2 z-[3] w-[60px] h-[60px] rounded-full bg-white border-2 border-[#111] flex items-center justify-center transition-opacity ${
              canScrollLeft ? "opacity-100" : "opacity-30 cursor-default"
            }`}
            aria-label="Scroll left"
          >
            <ChevronLeftIcon className="w-5 h-5" />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`absolute right-[-70px] top-1/2 -translate-y-1/2 z-[3] w-[60px] h-[60px] rounded-full bg-white border-2 border-[#111] flex items-center justify-center transition-opacity ${
              canScrollRight ? "opacity-100" : "opacity-30 cursor-default"
            }`}
            aria-label="Scroll right"
          >
            <ChevronRightIcon className="w-5 h-5" />
          </button>

          {/* Scroller */}
          <div
            ref={scrollerRef}
            className="overflow-x-scroll overflow-scroller-hidden pb-5"
          >
            <div className="flex flex-nowrap">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="flex-shrink-0 pl-5"
                  style={{ flexBasis: "27%", width: "396px" }}
                >
                  <Link href={product.href} className="block group">
                    {/* Image */}
                    <div className="relative">
                      <Image
                        src={product.image}
                        alt={product.imageAlt || product.title}
                        width={360}
                        height={539}
                        className="w-full object-cover"
                        style={{ aspectRatio: "2/3" }}
                      />
                      {product.tag && (
                        <span className="absolute top-0 right-0 bg-[#010101] text-white text-sm px-[9px] py-[7px] pl-[11px] tracking-[0.8px]">
                          {product.tag}
                        </span>
                      )}
                    </div>

                    {/* Meta */}
                    <div className="pt-[10px] text-center">
                      <div className="text-[19.52px] tracking-[0.8px] text-[#111] font-sans">
                        {product.title}
                      </div>
                      <div className="text-sm tracking-[0.8px] text-[#111] font-sans mt-[3px]">
                        {product.price}
                      </div>
                    </div>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
