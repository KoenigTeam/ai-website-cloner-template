"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import {
  CartIcon,
  MenuIcon,
  CloseIcon,
  ChevronDownIcon,
} from "./icons";
import { SiteContainer } from "./SiteContainer";

const NAV_LINKS = [
  { label: "Shop All", href: "#shop", children: [
    { label: "Shirts", href: "#shirts" },
    { label: "Hats", href: "#hats" },
    { label: "Socks", href: "#socks" },
    { label: "Polos", href: "#polos" },
  ]},
  { label: "Top Sellers", href: "#top-sellers" },
  { label: "About Us", href: "#about" },
];

export function Header() {
  const [isStuck, setIsStuck] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const sentinelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const sentinel = sentinelRef.current;
    if (!sentinel) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsStuck(!entry.isIntersecting),
      { threshold: 0 }
    );
    observer.observe(sentinel);
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      {/* Zero-height sentinel: when it scrolls out of view, the header sticks */}
      <div ref={sentinelRef} aria-hidden="true" />
      <header
        data-stuck={isStuck}
        className="site-header sticky top-0 z-20"
      >
        <SiteContainer>
          <div
            className={`grid grid-cols-[minmax(0,1fr)_auto_minmax(0,1fr)] items-center transition-[height] duration-300 ${
              isStuck ? "h-14" : "h-20"
            }`}
          >
            {/* Wordmark */}
            <div className="flex items-center">
              <Link href="/" className="site-wordmark text-[#010101]">
                Rich Mindset
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav aria-label="Primary" className="hidden md:flex items-center justify-center">
              <ul className="flex items-center gap-1 list-none m-0 p-0">
                {NAV_LINKS.map((link) => (
                  <li key={link.label} className="relative">
                    {link.children ? (
                      <div
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        <button
                          aria-expanded={isDropdownOpen}
                          className="nav-link-underline text-sm font-normal tracking-[0.8px] text-[#111] flex items-center gap-1"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                          {link.label}
                          <ChevronDownIcon aria-hidden="true" className="w-3 h-3" />
                        </button>
                        {isDropdownOpen && (
                          <div className="absolute top-full left-0 bg-white shadow-[0_10px_20px_rgba(0,0,0,0.09)] py-[13px] pb-[5px] min-w-full grid">
                            {link.children.map((child) => (
                              <Link
                                key={child.label}
                                href={child.href}
                                className="block px-[15px] py-[7.5px] text-base tracking-[0.8px] text-[#111] hover:bg-gray-50 whitespace-nowrap"
                              >
                                {child.label}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={link.href}
                        className="nav-link-underline text-sm font-normal tracking-[0.8px] text-[#010101]"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </nav>

            {/* Desktop Icons */}
            <div className="hidden md:flex items-center justify-end gap-4">
              <Link
                href="#cart"
                aria-label="Cart"
                className="flex items-center justify-center p-2 text-[#010101]"
              >
                <CartIcon aria-hidden="true" className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="flex md:hidden items-center justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2"
                aria-label="Open menu"
              >
                <MenuIcon aria-hidden="true" className="w-6 h-6" />
              </button>
            </div>
          </div>
        </SiteContainer>
      </header>

      {/* Mobile slide-in menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div className="absolute left-0 top-0 h-full w-[300px] bg-white shadow-xl">
            <div className="flex items-center justify-between p-4 border-b">
              <span className="font-heading text-lg">Menu</span>
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <CloseIcon className="w-6 h-6" />
              </button>
            </div>
            <nav aria-label="Mobile" className="p-4">
              <ul className="list-none m-0 p-0 space-y-2">
                <li>
                  <Link
                    href="/"
                    className="block py-2 text-base tracking-[0.8px]"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    Home
                  </Link>
                </li>
                {NAV_LINKS.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="block py-2 text-base tracking-[0.8px]"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                    {link.children && (
                      <ul className="pl-4 mt-1 space-y-1">
                        {link.children.map((child) => (
                          <li key={child.label}>
                            <Link
                              href={child.href}
                              className="block py-1 text-sm tracking-[0.8px] text-gray-600"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {child.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
