import { test } from "@playwright/test";

test("Ovládání iframe", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  // await page.locator("#name").fill("toto bude easy"); // ! Toto nebude fungovat, prvek je v iframe
  const frame = page.frameLocator('[data-testid="test-automation-iframe"]');
  await frame.locator("#name").fill("Píšeme v iframe");
});
