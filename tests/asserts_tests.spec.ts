import { test, expect } from "@playwright/test";

test("toContainTest assert", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24"); //vložení uživatelského jména
  await page.locator("#password").fill("Playwright!2024"); //vložení hesla
  await page.locator('[type="submit"]').click(); //kliknutí na tlačítko přihlášení
  await expect(page.locator("#welcome-page-header")).toContainText(
    "Vítej v testovací aplikaci "
  );

  // * Alternativní zápisy expectů (lokátor mimo expect v const a vlastní zpráva)
  const welcomeHeader = page.locator("#welcome-page-header");
  await expect(
    welcomeHeader,
    "Vlastní expect zpráva: expect Welcome Page Header to Contain Text"
  ).toContainText("Vítej v testovací aplikaci ");
});

test("toHaveTextTest assert", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("playwright_jaro24"); //vložení uživatelského jména
  await page.locator("#password").fill("Playwright!2024"); //vložení hesla
  await page.locator('[type="submit"]').click(); //kliknutí na tlačítko přihlášení
  await expect(page.locator("#welcome-page-header")).toHaveText(
    "Vítej v testovací aplikaci Tredgate Projekct"
  );
});

test("toBeVisible assert", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  const logo = page.locator(".login-page-logo img");
  await expect(logo).toBeVisible();
});

test("toHaveValue assert", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  const usernameInput = page.locator("#username");
  const valueText = "Test";
  await usernameInput.fill(valueText);
  await expect(usernameInput).toHaveValue(valueText);
});

test.skip(
  "Soft Assert Test",
  {
    annotation: {
      type: "bug",
      description: "BUG_123D - login title is not correct",
    },
  },
  async ({ page }) => {
    await page.goto("https://tredgate.com/pmtool/");
    await expect.soft(page.locator(".form-title")).toHaveText("Login PMTOOL");
    await page.locator("#username").fill("playwright_jaro24");
    await page.locator("#password").fill("Playwright!2024");
    await page.locator(".btn").click();
  }
);

test("Negativní testy", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await expect(page.locator(".login-page-logo img")).toBeVisible(); // ? Zajištění načtení aplikace pro negativní test
  await expect(page.locator(".alert")).not.toBeVisible(); // ? Kontrola prvku, že není viditelný
  await expect(page.locator("#username-error")).not.toBeVisible();
  await expect(page.locator("#password-error")).not.toBeVisible();
});
