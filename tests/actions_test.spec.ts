import { test, expect } from "@playwright/test";
import path from "path";

test("Fill and pressSequantially", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool/");
  await page.locator("#username").fill("Start"); //vložení uživatelského jména 1
  await page.locator("#username").fill("End"); //fill vždy nahrazuje stávající hodnotu ubvnitř pole
  await page.locator("#username").pressSequentially("Kde toto bude??"); //pressSequentially nepřepisuje původní hodnotu v poli, píše na konec stávající hodnoty
  await page.locator("#username").clear(); //vyčištění pole
  await page
    .locator("#username")
    .pressSequentially("Dlouhý text zadán pomocí pressSequentially", {
      delay: 500,
    }); //zadání dlouhého textu pomocí pressSequentially, zpomalení zápisu znaků (500 ms mezi znaky, 2 znaky za sekundu)
});

test("selectOptions - výběr z dropdown", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#gender").selectOption("other"); //výběr možnosti z dropdownu podle viditelného textu, nelze použít pro div (aneb jako to máme v ČSOB :-D )

  await page.locator("#gender").selectOption({ label: "Male" });
});

test("check - zakliknutí radio buttonů a checkboxů", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#contact-phone").check();
  await page.locator("#interests-sports").check();
  await page.locator("#interests-travel").check();
  await page.locator("#interests-sports").uncheck();
});

test("Date - vyplnění pole s datumem", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  await page.locator("#date-of-birth").fill("1990-11-04");
});

test("Upload souboru do formuláře", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/registration.html");
  const filePath = path.resolve(__dirname, "../assets/upload_file.txt");
  //Výpomocná funkcionalita require (napovídá dynamicky cestu)
  //require("../assets/upload_file.txt"); // ? require pouze napovídá cestu, není potřeba
  const fileChooserPromise = page.waitForEvent("filechooser");
  await page.locator("#file-upload").click();
  const fileChooser = await fileChooserPromise;
  await fileChooser.setFiles(filePath);

  // ? čekání tu máme, abychom v logu viděli, že se soubor vybere
  await page.waitForTimeout(2000); // ! Zastaví test na 2 sec (2 * 1000 ms) - snažíme se nepoužívat
});

test("hover - najetí myší na prvek", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/web-actions.html");
  await page.locator("#hover-box").hover();
  // ? čekání tu máme, abychom v logu viděli, že se myší najedu
  await page.waitForTimeout(2000); // ! Zastaví test na 2 sec (2 * 1000 ms) - snažíme se nepoužívat
});
