import { test } from "@playwright/test";

test("První školící test", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24"); //vložení uživatelského jména
  await page.locator("#password").fill("Playwright!2024"); //vložení hesla
  await page.locator('[type="submit"]').click(); //kliknutí na tlačítko přihlášení
});
