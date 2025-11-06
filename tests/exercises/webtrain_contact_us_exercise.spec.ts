import { test } from "@playwright/test";

test("Druhý úkol", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/contact.html");
  await page.locator("#full-name").pressSequentially("Jiří Zuna"); //vložení uživatelského jména
  await page.locator("#email").pressSequentially("jzuna@example.com"); //vložení emailu
  await page.locator("#contact-date").fill("2025-11-04"); //vložení data kontaktování
  await page.locator("#role").selectOption("other"); //výběr role
  await page.locator("#comments").pressSequentially("testovácí komentář"); //vložení komentáře
  await page.locator("#newsletter").check(); //zaškrtnutí newsletteru
  await page.locator('[data-testid="button-submit"]').click(); //odeslání formuláře
});
