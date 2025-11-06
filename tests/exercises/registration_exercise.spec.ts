import { test } from "@playwright/test";

test("User Registration", async ({ page }) => {
  await page.goto("https://tredgate.com/eshop/ ");
  await page.locator('//a[@title="My Account"]').click();
  await page.locator("//a[contains(@href, 'route=account/register')]").click();
  await page.locator('[id="input-firstname"]').fill("Jiří");
  await page.locator('[id="input-lastname"]').fill("Zuna");
  await page.locator('[id="input-email"]').fill("jiri.zuna@example.com");
  await page.locator('[id="input-telephone"]').fill("+420737908029");
  await page.locator('[id="input-password"]').fill("Heslo123");
  await page.locator('[id="input-confirm"]').fill("Heslo123");
  await page.locator("//input[@name='agree']").check();
  await page.locator("//input[@type='submit']").click();
});
