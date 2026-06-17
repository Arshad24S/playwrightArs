const{test, expect} = require ('@playwright/test');

test('@Child windows hadl', async ({browser})=>
 {
    const context = await browser.newContext();
    const page =  await context.newPage();
    const userName = page.locator('#username');
    await page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    const documentLink = page.locator("[href*='documents-request']");
 
    const [newPage]=await Promise.all(
   [
      context.waitForEvent('page'),//listen for any new page pending,rejected,fulfilled
      documentLink.click(),
   
   ])//new page is opened
   
 
   const  text = await newPage.locator(".red").textContent();
    const arrayText = text.split("@")
    const domain =  arrayText[1].split(" ")[0]
    //console.log(domain);
    await page.locator("#username").fill(domain);
    console.log(await page.locator("#username").inputValue());
    await page.pause();

//     In the previous lecture, we used the following step to enter characters into an edit dropbox:

// // await page.locator("[placeholder*='Country']").pressSequentially("ind");
// // This step may occasionally fail if the application server is slow due to heavy traffic. In such cases, you can introduce a delay and rewrite the step as:

// // await page.locator("[placeholder*='Country']").pressSequentially("ind", { delay: 150 });
// // Here, a delay of 150 milliseconds is introduced between each key press.
// // That means it enters  i → (delay 150 ms) → enters n → (delay 150 ms) → enters d

// // By doing this, you give the application enough time to respond with the relevant options.
 
 })