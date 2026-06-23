const{test, expect} = require('@playwright/test')

test('test everything', async({browser})=>{
const context = await browser.newContext();
const page = await context.newPage();
await page.goto('https://rahulshettyacademy.com/loginpagePractise/')
await page.getByRole('textbox', { name: 'Username' }).fill('rahulshetty');
await page.getByRole('textbox', { name: 'Password' }).fill('Learning@830$3mK2');
await page.getByRole('button', { name: 'Sign In' }).click();
await page.context().storageState({ path: 'auth.json' });
    
})