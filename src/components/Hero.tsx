"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const timer = requestAnimationFrame(() => setLoaded(true));
    return () => cancelAnimationFrame(timer);
  }, []);

  return (
    <section className="relative w-full">
      {/* Hero image */}
      <div className="relative w-full" style={{ paddingBottom: "55%" }}>
        <Image
          src="/images/hero-main.webp"
          alt="Rich Mindset hero"
          fill
          className={`object-cover ${loaded ? "img-fade-in" : "opacity-0"}`}
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>

      {/* Text overlay */}
      <div
        className={`absolute inset-0 w-full h-full transition-opacity duration-[400ms] ${loaded ? "opacity-100" : "opacity-0 translate-y-[10px]"
          }`}
      >
        <div className="mx-auto max-w-[1300px] px-10 h-full flex items-center justify-center">
          {/* One unambiguous text hierarchy: subtitle → title → CTA, flex column with
              defined gaps (≥16px) — no absolute positioning between the elements. */}
          <div className="text-center flex flex-col items-center gap-4 md:gap-5">
            <p
              className={`font-sans text-sm md:text-base uppercase tracking-[0.3em] text-white ${loaded ? "appear-visible" : "appear-hidden"
                }`}
            >
              BUILD YOUR LEGACY
            </p>
            <h1
              className={`text-[40px] md:text-[90px] leading-[1.05] text-white tracking-[0.1em] font-semibold uppercase ${loaded ? "appear-visible" : "appear-hidden"
                }`}
              style={{ fontFamily: "'Clash Display', 'Archivo', sans-serif" }}
            >
              RICH MINDSET
            </h1>
            <div className={`mt-4 ${loaded ? "appear-visible" : "appear-hidden"}`}>
              <Link
                href="#products"
                className="inline-block border-2 border-white text-white px-[25px] py-[10px] rounded-[35px] text-base tracking-[0.8px] font-sans transition-colors duration-150 hover:bg-white hover:text-[#111]"
              >
                SHOP NOW
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
