import { expect, test } from "@playwright/test";

test("createProject", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24"); //vložení uživatelského jména
  await page.locator("#password").fill("Playwright!2024"); //vložení hesla
  await page.locator('[type="submit"]').click(); //kliknutí na tlačítko přihlášení
  await expect(page.locator("#welcome-page-header")).toHaveText(
    "Vítej v testovací aplikaci Tredgate Project"
  );

  await page.locator("#Projects").click();
  const table = page.locator(".table-scrollable table");
  await expect(table).toBeVisible();
  await page.locator('[test_id="Add Project"]').click();
  await page.locator('div[id="fields_158"]').fill("Testovací projekt");

  await page.locator('[type="submit"]').click();
});

test("Cvičení Asserty: Kontrola vytváření profilu", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator(".btn").click();
  await page.locator("#Projects").click();
  await expect(page.locator(".table-scrollable table")).toBeVisible(); // ? Explicitní čekání na prvek
  await page.locator('[test_id="Add Project"]').click();
  await expect(page.locator('[data-testid="Name"] input')).toBeVisible();
  await expect(page.locator('[type="submit"]')).toHaveText("Save");
});
