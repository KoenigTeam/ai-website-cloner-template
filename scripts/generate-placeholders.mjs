import { writeFileSync, mkdirSync } from "fs";
import { join } from "path";

const OUT = join(import.meta.dirname, "..", "public", "images");
mkdirSync(OUT, { recursive: true });

function svg(w, h, bg, text, textColor = "#fff", fontSize = null) {
  const fs = fontSize || Math.round(Math.min(w, h) * 0.08);
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}">
  <rect width="${w}" height="${h}" fill="${bg}"/>
  <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle"
    font-family="Georgia, serif" font-size="${fs}" fill="${textColor}"
    letter-spacing="2">${text}</text>
</svg>`;
}

const images = [
  // Hero
  { name: "hero-main.svg", w: 1920, h: 1056, bg: "#071317", text: "RICH MINDSET" },
  // Products — New Items
  { name: "product-tee-black.svg", w: 720, h: 1080, bg: "#1a1a1a", text: "TEE" },
  { name: "product-hoodie.svg", w: 720, h: 1080, bg: "#2a2a2a", text: "HOODIE" },
  { name: "product-polo.svg", w: 720, h: 1080, bg: "#1a2a2a", text: "POLO" },
  { name: "product-crewneck.svg", w: 720, h: 1080, bg: "#0a1a1a", text: "CREW" },
  // Products — Best Sellers
  { name: "product-cap.svg", w: 720, h: 1080, bg: "#1a1a2a", text: "CAP" },
  { name: "product-socks.svg", w: 720, h: 1080, bg: "#2a1a1a", text: "SOCKS" },
  { name: "product-shorts.svg", w: 720, h: 1080, bg: "#1a2a1a", text: "SHORTS" },
  { name: "product-jacket.svg", w: 720, h: 1080, bg: "#2a2a1a", text: "JACKET" },
  { name: "product-tote.svg", w: 720, h: 1080, bg: "#1a1a1a", text: "TOTE" },
  { name: "product-beanie.svg", w: 720, h: 1080, bg: "#0a0a1a", text: "BEANIE" },
  // Education banner
  { name: "education.svg", w: 460, h: 460, bg: "#02a0a0", text: "LEARN" },
  // Who We Are
  { name: "who-we-are.svg", w: 695, h: 1042, bg: "#1a1a1a", text: "LIFESTYLE" },
  // Logo placeholder
  { name: "logo.svg", w: 200, h: 52, bg: "transparent", text: "RICH MINDSET", textColor: "#111", fontSize: 18 },
];

for (const img of images) {
  const content = svg(img.w, img.h, img.bg, img.text, img.textColor, img.fontSize);
  writeFileSync(join(OUT, img.name), content);
  console.log(`✓ ${img.name}`);
}

console.log(`\n${images.length} placeholder images generated in public/images/`);
