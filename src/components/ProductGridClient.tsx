"use client";

import { useState, useRef } from "react";
import { ProductCard } from "@/components/ProductCard";
import {
  products,
  CATEGORIES,
  DEFAULT_VISIBLE_COUNT,
  LOAD_MORE_INCREMENT,
} from "@/data/products";

const ALL_CATEGORY = "All";

export function ProductGridClient() {
  const [activeCategory, setActiveCategory] = useState(ALL_CATEGORY);
  const [visibleCount, setVisibleCount] = useState(DEFAULT_VISIBLE_COUNT);
  const pillRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const categories = [ALL_CATEGORY, ...CATEGORIES];

  const matches = products.filter(
    (p) => activeCategory === ALL_CATEGORY || p.category === activeCategory,
  );
  const remaining = matches.length - visibleCount;

  const selectCategory = (category: string) => {
    setActiveCategory(category);
    setVisibleCount(DEFAULT_VISIBLE_COUNT);
  };

  const handleKeyDown = (event: React.KeyboardEvent, index: number) => {
    let next: number | null = null;
    if (event.key === "ArrowRight") next = (index + 1) % categories.length;
    if (event.key === "ArrowLeft")
      next = (index - 1 + categories.length) % categories.length;
    if (next === null) return;
    event.preventDefault();
    pillRefs.current[next]?.focus();
    selectCategory(categories[next]);
  };

  return (
    <div>
      {/* Filter bar — single line, horizontal scroll-snap on mobile */}
      <div
        role="group"
        aria-label="Filter products by category"
        className="flex gap-2 overflow-x-auto snap-x snap-mandatory mb-8 py-1 min-h-[48px] items-center"
      >
        {categories.map((category, index) => {
          const isActive = category === activeCategory;
          return (
            <button
              key={category}
              ref={(el) => {
                pillRefs.current[index] = el;
              }}
              type="button"
              aria-pressed={isActive}
              onClick={() => selectCategory(category)}
              onKeyDown={(event) => handleKeyDown(event, index)}
              className={`snap-start shrink-0 whitespace-nowrap px-5 h-9 text-sm tracking-[0.8px] border border-[#111] transition-colors ${
                isActive
                  ? "bg-[var(--color-btn-primary)] text-[var(--color-btn-primary-text)]"
                  : "bg-white text-[#111] hover:bg-[#f5f5f5]"
              }`}
              style={{ borderRadius: "var(--button-radius)" }}
            >
              {category}
            </button>
          );
        })}
      </div>

      {/* Grid — every product stays in the DOM; overflow is hidden, not sliced */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {products.map((product) => {
          const categoryMatch =
            activeCategory === ALL_CATEGORY || product.category === activeCategory;
          const indexInCategory = matches.indexOf(product);
          const isVisible = categoryMatch && indexInCategory < visibleCount;
          return (
            <div key={product.id} hidden={!isVisible}>
              <ProductCard product={product} />
            </div>
          );
        })}
      </div>

      {/* Load more — removed from the DOM when nothing remains hidden */}
      {remaining > 0 && (
        <div className="mt-10 flex justify-center">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => count + LOAD_MORE_INCREMENT)}
            className="px-10 py-3 bg-[var(--color-btn-primary)] text-[var(--color-btn-primary-text)] text-sm tracking-[0.8px] uppercase"
            style={{ borderRadius: "var(--button-radius)" }}
          >
            Load more ({remaining})
          </button>
        </div>
      )}
    </div>
  );
}
