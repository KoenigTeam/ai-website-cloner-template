import { test, expect } from "@playwright/test";

const LEGAL_LINKS = [
  "Contact Us",
  "Refund Policy",
  "Shipping Policy",
  "Terms of Service",
  "Privacy Policy",
];

test("phase 3: header cleanup + footer About/Information restructure", async ({ page }) => {
  const consoleErrors: string[] = [];
  const pageErrors: string[] = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") consoleErrors.push(msg.text());
  });
  page.on("pageerror", (err) => pageErrors.push(String(err)));

  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  // --- Header: removed controls must be gone ---
  // Use the banner role: ProductSlider sections render their own <header> tags
  const header = page.getByRole("banner");
  await expect(header).toBeAttached();
  await expect(header.getByText(/education/i)).toHaveCount(0);
  await expect(header.getByText(/search/i)).toHaveCount(0);
  await expect(header.getByText(/log ?in/i)).toHaveCount(0);
  await expect(header.locator('a[href="#search"]')).toHaveCount(0);
  await expect(header.locator('a[href="#account"]')).toHaveCount(0);

  // --- Footer: exactly two section headings, About and Information ---
  const footer = page.getByRole("contentinfo");
  const headings = footer.locator("h2");
  await expect(headings).toHaveCount(2);
  await expect(headings.nth(0)).toHaveText("About");
  await expect(headings.nth(1)).toHaveText("Information");

  // Removed sections must not linger
  await expect(footer.getByText(/store pages/i)).toHaveCount(0);
  await expect(footer.getByText(/lab hours/i)).toHaveCount(0);
  await expect(footer.getByText(/join the club/i)).toHaveCount(0);
  await expect(footer.getByText(/education/i)).toHaveCount(0);

  // Every legal link still resolves to a real element in the footer
  for (const label of LEGAL_LINKS) {
    await expect(
      footer.getByRole("link", { name: label, exact: true })
    ).toHaveCount(1);
  }

  // --- Screenshots @ 1440x900 ---
  // Sticky header reveals after scrolling past 62px
  await page.evaluate(() => window.scrollTo(0, 120));
  await page.waitForTimeout(700); // let the 400ms reveal transition settle
  await header.screenshot({ path: "screenshots/phase3-header.png" });

  await footer.scrollIntoViewIfNeeded();
  await page.waitForTimeout(400);
  await footer.screenshot({ path: "screenshots/phase3-footer.png" });

  // --- Zero uncaught errors on page load ---
  expect(pageErrors).toEqual([]);
  expect(consoleErrors).toEqual([]);
});
