const { test, expect } = require('@playwright/test');

test('codegen test', { tag: ['@abc', '@dcb'] }, async ({ browser }) => {
    const context = await browser.newContext();
    const page = await context.newPage();


    await page.goto('https://rahulshettyacademy.com/AutomationPractice/');
    await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').check();
    await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').isChecked();

    page.on('dialog', async dialog => {
        console.log(dialog.message());
        await dialog.accept();
    });
    await page.locator("#alertbtn").click();


    await page.locator("//input[@id='autocomplete']").click();
    await page.locator("//input[@id='autocomplete']").pressSequentially('ind');
    const suggestions = await page.locator("#ui-id-1")
    await suggestions.filter({ hasText: 'India' }).click();

    await page.locator("#dropdown-class-example").selectOption('option2');
    await page.locator("//input[@id='checkBoxOption1']").click();



    const tablerows = await page.locator(".table-display tr")
    const tablecolumns = await page.locator(".table-display td")
    for (let i = 0; i < await tablerows.count(); i++) {
        const rowtext = await tablerows.nth(i).textContent();
        if (rowtext.includes("Python")) {
            console.log(rowtext);
        }
    }




    await page.locator("#displayed-text").isVisible();
    await page.locator("#hide-textbox").click();
    await page.locator("#displayed-text").isHidden();

    const headers = await page.locator(".tableFixHead thead tr th")

    for (let i = 0; i < await headers.count(); i++) {
        const headertext = await headers.nth(i).textContent();
        console.log(headertext);
    }
    await page.goto("https://rahulshettyacademy.com/angularpractice/");
    await page.getByLabel("Check me out if you Love IceCreams!").click();
    await page.getByLabel("Employed").check();
    await page.getByLabel("Gender").selectOption("Female");
    await page.getByPlaceholder("Password").fill("abc123");
    await page.getByRole("button", { name: 'Submit' }).click();
    await page.getByText("Success! The Form has been submitted successfully!.").isVisible();
    await page.getByRole("link", { name: "Shop" }).click();
    await page.locator("app-card").filter({ hasText: 'Nokia Edge' }).getByRole("button").click();
    await page.locator('label').filter({ hasText: 'Radio1' }).getByRole('radio').isChecked();
    page.on('dialog', async dialog => {
        console.log(dialog.message());
    });
    await page.locator("#confirmbtn").click();

    const rowdata = await page.locator(".tableFixHead tbody tr")
    for (let i = 0; i < await rowdata.count(); i++) {
        const rowdatatext = await rowdata.nth(i).textContent();
        if (rowdatatext.includes("Bengaluru")) {
            console.log(rowdatatext);
        }
    }

    page.on('dialog', async dialog => {
        console.log(dialog.message());
    });
    await page.locator("#confirmbtn").click();

    const openwindow = page.locator("#openwindow");

    const [newpage] = await Promise.all([
        context.waitForEvent('page'),
        openwindow.click(),
    ]);

    await newpage.waitForLoadState();
    const newpagetitle = await newpage.title();
    console.log(newpagetitle);
    await page.bringToFront();
    await newpage.bringToFront();
    newpage.close();




})