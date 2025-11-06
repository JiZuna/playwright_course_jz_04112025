import { test, expect } from "@playwright/test";

test("API exercise", async ({ request }) => {
  const response = await request.patch(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train"
  );
  const responseBody = await response.json();
  expect(response.status(), "Response status is 200").toBe(200);
  expect(typeof responseBody.timestamp, "body.timestamp is a string").toBe(
    "string"
  );
  expect(responseBody.id, "body.id have value").toBe(1);
});

test.skip("API exercise pokemon", async ({ request }) => {
  const response = await request.get(
    "https://api.pokemontcg.io/v2/cards/xy1-1"
  );
  const responseBody = await response.json();
  expect(response.status(), "Response status is 200").toBe(200);
});
