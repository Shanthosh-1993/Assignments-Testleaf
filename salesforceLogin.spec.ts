
import {test} from "@playwright/test"

  test("salesforce login ", async ({page}) => {

 await page.goto('https://login.salesforce.com/?locale=in')

 await page.locator('[type="email"]').fill('dilipkumar.rajendran@testleaf.com')

 await page.locator('[type="button"]').click();
 await page.locator('[type="password"]').fill('TestLeaf@2025');
 //await page.waitForTimeout(5000);
 await page.getByText('Log In', { exact: true }).click();

})