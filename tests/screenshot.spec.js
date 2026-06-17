const { test, expect } = require('@playwright/test');
  
test('@Screenshot App login', async ({ page }) => {
   //js file- Login js, DashboardPage
   const email = "TestArshad@gmail.com";
   const productName = 'zara coat 3';
   const products = page.locator(".card-body");
   await page.goto("https://rahulshettyacademy.com/client");
   await page.locator("#userEmail").fill(email);
   await page.screenshot({ path: 'screenshot.png', fullPage: true });
   await page.locator("#userPassword").screenshot({ path: 'screenshot_password.png'});
   await page.locator("#userPassword").type("Test@123");
   await page.locator("[value='Login']").click();
   await page.waitForLoadState('networkidle');
   await page.locator(".card-body b").first().waitFor();
   const titles = await page.locator(".card-body b").allTextContents();
   console.log(titles);
   
   await page.goto("https://accounts.google.com/v3/signin/identifier?continue=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fu%2F0%2Fmy-drive%3Fpli%3D1&dsh=S-1455856255%3A1781570816136626&followup=https%3A%2F%2Fdrive.google.com%2Fdrive%2Fu%2F0%2Fmy-drive%3Fpli%3D1&osid=1&passive=1209600&service=wise&flowName=GlifWebSignIn&flowEntry=ServiceLogin&ifkv=AcDsRvw4KXA86g4LWh8uPhyRFtKRu43XReKejq6iZAc1_OxKKq2SHwyRXmkoJUs5yNyZ_fLPxEez");
   expect(await page.screenshot()).toMatchSnapshot('google.png');
 
})