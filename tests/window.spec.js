const {test, expect} = require('@playwright/test')

test('windows testing', async({browser}) => { 
    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const username = page.locator('#username');
    const documentLink = page.locator("[href*='documents-request']");

   const [newpage] = await Promise.all([

    context.waitForEvent('page'),
    documentLink.click(),

])
const text = await newpage.locator(".red").textContent();
console.log(text);

})