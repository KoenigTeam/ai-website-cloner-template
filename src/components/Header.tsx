"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CartIcon,
  MenuIcon,
  CloseIcon,
  ChevronDownIcon,
} from "./icons";

const NAV_LINKS = [
  { label: "Shop All", href: "#shop", children: [
    { label: "Shirts", href: "#shirts" },
    { label: "Hats", href: "#hats" },
    { label: "Socks", href: "#socks" },
    { label: "Polos", href: "#polos" },
  ]},
  { label: "Top sellers", href: "#top-sellers" },
  { label: "About Us", href: "#about" },
];

export function Header() {
  const [isSticky, setIsSticky] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 62);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div style={{ height: isSticky ? 64 : 0 }} />
      <header
        className={`bg-white transition-all duration-[400ms] ease-[cubic-bezier(0.165,0.84,0.44,1)] ${
          isSticky
            ? "fixed top-0 left-0 right-0 z-20 py-[5px]"
            : "relative py-[10px]"
        }`}
      >
        <div className="mx-auto max-w-[1300px] px-10">
          <div className="grid grid-cols-[minmax(0,450px)_auto_minmax(0,450px)] items-center h-11">
            {/* Logo */}
            <div className="flex items-center">
              <Link href="/" className="block">
                <Image
                  src="/images/logo.svg"
                  alt="Rich Mindset"
                  width={150}
                  height={39}
                  className="h-[39px] w-[150px]"
                  priority
                />
              </Link>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center justify-center">
              <ul className="flex items-center list-none m-0 p-0">
                {NAV_LINKS.map((link) => (
                  <li key={link.label} className="relative">
                    {link.children ? (
                      <div
                        className="relative"
                        onMouseEnter={() => setIsDropdownOpen(true)}
                        onMouseLeave={() => setIsDropdownOpen(false)}
                      >
                        <button
                          className="nav-link-underline text-[16.52px] font-normal tracking-[0.8px] text-[#111] flex items-center gap-1"
                          onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                        >
                          {link.label}
                          <ChevronDownIcon className="w-3 h-3" />
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
                        className="nav-link-underline text-[19.52px] font-normal tracking-[0.8px] text-[#010101]"
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
                <CartIcon className="w-5 h-5" />
              </Link>
            </div>

            {/* Mobile hamburger */}
            <div className="flex md:hidden items-center justify-end">
              <button
                onClick={() => setIsMobileMenuOpen(true)}
                className="p-2"
                aria-label="Open menu"
              >
                <MenuIcon className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
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
            <nav className="p-4">
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
