const { test, expect, request } = require('@playwright/test');
const { ApiUtils } = require('./Utils/apiUtils');
const loginpayload = { userEmail: "TestArshad@gmail.com", userPassword: "Test@123" };
const orderpayload = { orders: [{ country: "India", productOrderedId: "6960eac0c941646b7a8b3e68" }] };

let response;

test.beforeAll('API testing', async () => {
    const apiContext = await request.newContext();

    // new request
    const apiUtils1 = new ApiUtils(apiContext, loginpayload);
    response = await apiUtils1.createOrder(orderpayload);
})


test('API test Ab', async ({ page }) => {
    await page.addInitScript(value => {
        window.localStorage.setItem('token', value);
    }, response.token);

    await page.goto("https://rahulshettyacademy.com/client/");
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();
    const rows = await page.locator("tbody tr");


    for (let i = 0; i < await rows.count(); ++i) {
        const rowOrderId = await rows.nth(i).locator("th").textContent();
        console.log(rowOrderId + " this is for checking");
        if (response.orderId.includes(rowOrderId)) {
            await rows.nth(i).locator("button").first().click();
            break;
        }
    }
    const orderIdDetails = await page.locator(".col-text").textContent();
    expect(response.orderId.includes(orderIdDetails)).toBeTruthy();

    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();


    const rows1 = await page.locator("tbody tr");
    await page.locator("button[routerlink*='myorders']").click();
    await page.locator("tbody").waitFor();

    for (let i = 0; i < await rows1.count(); ++i) {
        const rowOrderId = await rows1.nth(i).locator("th").textContent();
        console.log(rowOrderId + " this is for checking");
        if (response.orderId.includes(rowOrderId)) {
            console.log("deleting order id " + rowOrderId);
            await rows1.nth(i).locator("button").nth(1).click();
            console.log("deleted order id " + rowOrderId);
            break;
            //testing changes
        }
    }

    await page.pause();

})

