import { test, expect } from "@playwright/test";

/**
 * "All" filter visual validation (post placeholder removal).
 *
 * Verifies the master aggregate view renders every active product — including
 * the new Headwear (RM Logo Cap - Black) and Accessories (Sea Salt Spray,
 * Hair Spray) lines — with zero grid regression after the legacy placeholder
 * catalogue was deleted. Saves a confirmation screenshot locally.
 */

const ALL_PRODUCT_TITLES = [
  "RM Large Logo",
  "RM Large Logo - Green",
  "RM Large Logo - Beige",
  "RM Large Logo - Blue",
  "Faith, Wisdom & Discipline Tee",
  "RM Logo Cap - Black",
  "Sea Salt Spray",
  "Hair Spray",
];

const heading = (page: import("@playwright/test").Page, name: string) =>
  page.getByRole("heading", {
    name: new RegExp(`^${name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`, "i"),
  });

test('"All" renders every active product with intact grid layout', async ({
  page,
}) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => pageErrors.push(String(err)));

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  // Click the master "All" filter
  await page.getByRole("button", { name: "All", exact: true }).click();
  await page.waitForTimeout(400);
  await expect(page.getByRole("button", { name: "All", exact: true })).toHaveAttribute(
    "aria-pressed",
    "true",
  );

  const grid = page.locator("div.grid.gap-5");
  await grid.scrollIntoViewIfNeeded();

  // Every active product is rendered into the DOM (render-all-then-hide)
  const allCards = grid.locator("article");
  await expect(allCards).toHaveCount(ALL_PRODUCT_TITLES.length);

  // Reveal everything via Load more so the aggregate view shows all lines
  const loadMore = page.getByRole("button", { name: /load more/i });
  while (await loadMore.isVisible()) {
    await loadMore.click();
    await page.waitForTimeout(300);
  }

  const visibleCards = grid.locator("> div:not([hidden]) article");
  await expect(visibleCards).toHaveCount(ALL_PRODUCT_TITLES.length);

  // New headwear + accessories lines are present in the All view
  for (const title of ALL_PRODUCT_TITLES) {
    await expect(heading(page, title)).toBeVisible();
  }

  // --- Grid integrity: 2:3 images, row alignment, columns, no overflow ---
  await page.waitForLoadState("networkidle");
  await page.waitForTimeout(500);

  const boxes: { x: number; y: number; width: number; height: number }[] = [];
  const count = await visibleCards.count();
  for (let i = 0; i < count; i++) {
    const img = visibleCards.nth(i).locator("img");
    await img.scrollIntoViewIfNeeded();
    const box = await img.boundingBox();
    expect(box).not.toBeNull();
    boxes.push(box!);
  }

  for (const box of boxes) {
    const ratio = box.height / box.width;
    expect(ratio).toBeGreaterThan(1.47);
    expect(ratio).toBeLessThan(1.53);
  }

  const distinctX = [...new Set(boxes.map((b) => Math.round(b.x)))];
  expect(distinctX.length).toBe(3); // desktop = 3 columns

  const rows = new Map<number, typeof boxes>();
  for (const box of boxes) {
    const key = [...rows.keys()].find((y) => Math.abs(y - box.y) <= 2) ?? box.y;
    rows.set(key, [...(rows.get(key) ?? []), box]);
  }
  for (const row of rows.values()) {
    if (row.length < 2) continue;
    const widths = row.map((b) => b.width);
    expect(Math.max(...widths) - Math.min(...widths)).toBeLessThanOrEqual(2);
    const tops = row.map((b) => b.y);
    expect(Math.max(...tops) - Math.min(...tops)).toBeLessThanOrEqual(2);
  }

  const noOverflow = await page.evaluate(
    () => document.documentElement.scrollWidth <= window.innerWidth,
  );
  expect(noOverflow).toBe(true);

  // Confirmation screenshot saved locally for review
  await grid.scrollIntoViewIfNeeded();
  await page.evaluate(() => window.scrollBy(0, -80));
  await page.waitForTimeout(400);
  await page.screenshot({
    path: "screenshots/all-filter-grid.png",
    fullPage: false,
  });

  expect(pageErrors).toEqual([]);
  expect(consoleErrors).toEqual([]);
});
