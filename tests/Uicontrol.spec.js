const{test, expect} = require('@playwright/test');

test('testing ui controls', async ({page}) => {
await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
const usern = '#username';
await page.locator(usern).fill("rahulshettyacademy");
const pass ='#password'
await page.locator(pass).fill("Learning@830$3mK21");

const selectdrop = page.locator(".form-control[data-style='btn-info']");
await selectdrop.selectOption("consult");    



const selectradio = page.locator("label:nth-child(2) span:nth-child(1)") .click();
await expect (page.locator("label:nth-child(2) span:nth-child(1)").isChecked);
await expect (page.locator("label:nth-child(2) span:nth-child(1)")).toBeChecked();


const checkbox = page.locator(".text-white.termsText").click();
await expect(page.locator(".text-white.termsText")).toBeChecked();
await page.locator(".text-white.termsText").uncheck();
expect(await page.locator(".text-white.termsText").isChecked()).toBeFalsy();

await selectdrop.click;
const newLocal = '#signInBtn';
await page.locator(newLocal).click();
//await page.pause();

})