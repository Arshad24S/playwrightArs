const { test, expect } = require('@playwright/test');

test('codegen test',{tag:['@abc','@dcb']}, async ({ page }) => {
    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
     await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').check();
      await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').isChecked();
       await page.locator("//input[@id='autocomplete']").click();
      await page.locator("//input[@id='autocomplete']").pressSequentially('ind');
      const suggestions = await page.locator("#ui-id-1")
      await suggestions.filter({ hasText: 'India' }).click();
      await page.locator("#dropdown-class-example").selectOption('option2');
      await page.locator("//input[@id='checkBoxOption1']").click();

      const tablerows= await page.locator(".table-display tr")
      const tablecolumns= await page.locator(".table-display td")
      for (let i=0;i< await tablerows.count();i++){
        const rowtext= await tablerows.nth(i).textContent();
        if(rowtext.includes("Python")){console.log(rowtext);}

       await page.locator("#displayed-text").isVisible();
       await page.locator("hide-textbox").click();
       await page.locator("#displayed-text").isHidden();

      
    }
})