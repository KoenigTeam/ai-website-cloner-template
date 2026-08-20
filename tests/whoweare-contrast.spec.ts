import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";

test("WhoWeAre section has zero color-contrast violations on dark background", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");

  const section = page.getByTestId("who-we-are");
  await expect(section).toBeVisible();
  await section.scrollIntoViewIfNeeded();

  const results = await new AxeBuilder({ page })
    .include('[data-testid="who-we-are"]')
    .withRules(["color-contrast"])
    .analyze();

  if (results.violations.length > 0) {
    const detail = results.violations
      .map(
        (v) =>
          `${v.id}: ${v.nodes
            .map((n) => `${n.html} (ratio ${n.any?.[0]?.data?.contrastRatio ?? "?"})`)
            .join(" | ")}`
      )
      .join("\n");
    console.error(detail);
  }

  expect(results.violations).toHaveLength(0);
});

test("save phase 2 desktop screenshot", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.goto("/");
  await page.waitForTimeout(1200);
  await page.screenshot({
    path: "screenshots/phase2-desktop.png",
    fullPage: true,
  });
});
