import { test, expect } from "@playwright/test";

const VIEWPORTS = [
  { name: "mobile-375", width: 375, height: 667 },
  { name: "tablet-768", width: 768, height: 1024 },
  { name: "desktop-1280", width: 1280, height: 800 },
  { name: "desktop-1920", width: 1920, height: 1080 },
];

for (const vp of VIEWPORTS) {
  test(`announcement bar is a single line and within height budget @ ${vp.name}`, async ({ page }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto("/");

    const marquee = page.locator(".announcement-marquee");
    await expect(marquee).toBeVisible();

    // The bar container (black strip) height budget: ≤44px desktop, ≤56px mobile
    const barBox = await page
      .locator("div.bg-black")
      .filter({ has: page.locator(".announcement-marquee") })
      .first()
      .boundingBox();
    expect(barBox).not.toBeNull();
    const budget = vp.width < 768 ? 56 : 44;
    expect(barBox!.height).toBeLessThanOrEqual(budget);

    // Single line: the text span's rendered height must be one line-height (~24px), not stacked words
    const spanBox = await page.locator(".announcement-marquee span").first().boundingBox();
    expect(spanBox!.height).toBeLessThanOrEqual(30);

    // No wrapping: span width equals its scrollWidth (nowrap holds)
    const noWrap = await page.locator(".announcement-marquee span").first().evaluate((el) => {
      return el.scrollWidth <= Math.ceil(el.getBoundingClientRect().width) + 1;
    });
    expect(noWrap).toBe(true);
  });

  test(`hero subtitle clears title and button with ≥16px gaps @ ${vp.name}`, async ({ page }) => {
    await page.setViewportSize({ width: vp.width, height: vp.height });
    await page.goto("/");

    const subtitle = page.locator("section p", { hasText: "Welcome To The Mindset" });
    await expect(subtitle).toBeVisible();
    // wait for entrance animation to settle
    await page.waitForTimeout(900);

    const subtitleBox = await subtitle.boundingBox();
    const h1Box = await page.locator("section h1", { hasText: "RICH MINDSET" }).boundingBox();
    // Scope to the hero's pill button (exact uppercase text inside the hero section)
    const buttonBox = await page
      .locator("section a.rounded-\\[35px\\]", { hasText: "SHOP NOW" })
      .first()
      .boundingBox();

    expect(subtitleBox).not.toBeNull();
    expect(h1Box).not.toBeNull();
    expect(buttonBox).not.toBeNull();

    // Subtitle sits above the title with ≥16px gap
    const subtitleToTitle = h1Box!.y - (subtitleBox!.y + subtitleBox!.height);
    expect(subtitleToTitle).toBeGreaterThanOrEqual(16);

    // Title sits above the button with ≥16px gap — no overlapping type
    const titleToButton = buttonBox!.y - (h1Box!.y + h1Box!.height);
    expect(titleToButton).toBeGreaterThanOrEqual(16);
  });
}

test("save verification screenshots", async ({ page }) => {
  // Desktop
  await page.setViewportSize({ width: 1280, height: 800 });
  await page.goto("/");
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: "docs/design-references/verify-hero-desktop.png",
    fullPage: false,
  });

  // Mobile
  await page.setViewportSize({ width: 375, height: 667 });
  await page.goto("/");
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: "docs/design-references/verify-hero-mobile.png",
    fullPage: false,
  });
});
