import {chromium, test, webkit} from "@playwright/test"

test ('chromium webkit', async ({page}) => {

    const edgeBrowser = await chromium.launch({channel: 'msedge',headless: false});
    const edgePage = await edgeBrowser.newPage();
    await edgePage.goto('https://www.redbus.in');

    console.log("----- REDBUS (EDGE) -----");
    console.log("Page Title: ", await edgePage.title());
    console.log("Current URL: ", edgePage.url());

    const webkitBrowser = await webkit.launch({headless: false});
    const webkitPage = await webkitBrowser.newPage();
    await webkitPage.goto('https://www.flipkart.com');

    console.log("----- FLIPKART (WEBKIT) -----");
    console.log("Page Title: ", await webkitPage.title());
    console.log("Current URL: ", webkitPage.url());

    //await edgeBrowser.close();
    //await webkitBrowser.close();

});