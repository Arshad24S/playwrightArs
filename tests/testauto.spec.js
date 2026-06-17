const{test, expect} = require('@playwright/test');

test('test user registration', async ({page}) => {

    await page.goto("https://rahulshettyacademy.com/client/#/auth/login");
    const reister = page.locator(".btn1");
    await reister.click();
    const firstname = page.locator('#firstName');
    await firstname.fill("Arshad");
    const lastname = page.locator('#lastName');
    await lastname.fill("Yaklur");
    const email = page.locator('#userEmail');
    await email.fill("yaklur786@gmail.com");
    const phone = page.locator('#userEmail');
    await phone.fill("8583721536");
    const occupation = page.locator(".custom-select.ng-untouched.ng-pristine.ng-valid");
    await occupation.click();


})