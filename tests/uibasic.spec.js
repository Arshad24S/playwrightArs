const {test,expect} = require('@playwright/test');

test('first playwright test', async ({browser})=>
{
//chrome - pulgins/cookies
const context = await browser.newContext();
const page = await context.newPage();
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
console.log(await page.title);
const usern = '#username';
await page.locator(usern).fill("rahulshettyacademy");
const pass ='#password'
await page.locator(pass).fill("Learning@830$3mK21");
    const newLocal = '#signInBtn';
await page.locator(newLocal).click();
console.log(await page.locator("[style*='block']").textContent());
await expect(page.locator("[style*='block']")).toContainText('Incorrect');
await page.locator(usern).fill("rahulshettyacademy");
await page.locator(pass).fill("Learning@830$3mK2");
await page.locator(newLocal).click();
const phone = page.locator(".card-body a");
console.log(await phone.first().textContent());
console.log(await phone.nth(1).textContent());
const phonevalue = await phone.allTextContents;
console.log(phonevalue);


});

test('first1 playwright test', async ({page})=>
{
//chrome - pulgins/cookies
// const context = await browser.newContext();
// const page = await context.newPage();
await page.goto("https://google.com/");
//get the title - assertion
console.log (await page.title());
await expect(page).toHaveTitle("Google");

})