/*import { test, expect } from "@playwright/test" // test function is a named import

test("Products Page Add To basket", async ({ page }) => {
     await page.goto("localhost:2221");
     const button = page.getByRole(["data-qa='product-button'"]).first();
     await button.waitFor();
     await button.click();
     await expect(button).toHaveText("Remove from Basket"); 
     await page.pause();
})

*/