const { test, expect } = require('@playwright/test');
const {POManager} = require('../pageobject/POManager')

const dataset = JSON.parse(JSON.stringify(require('../Utils/placeOrderTestData')));

 
for (const data of dataset) {
test(`@TestApi Client App login ${data.productName}`, async ({ page }) => {
   const poManager = new POManager(page);
   //js file- Login js, DashboardPage
 
   const products = page.locator(".card-body");
   const loginPage = poManager.getLoginPage();
   await loginPage.goTo();
   await loginPage.login(data.email, data.password);
   
  
   const dashboardPage = poManager.getDashboardPage();
   await dashboardPage.searchProduct(data.productName);
   await dashboardPage.NavigateToCart();

   const cartPage = poManager.getCartPage();
   await cartPage.VerifyProcuctIsDisplayed(data.productName);
   await cartPage.Checkout();

   const orderReviewPage = poManager.getOrderReviewPage();
   await orderReviewPage.searchCountryAndSelect("ind", " India");
   const orderId = await orderReviewPage.SubmitAndGetOrderId();
   console.log(orderId);

   await dashboardPage.NavigateToOrderHistory();
   const orderHistoryPage = poManager.getOrderHistoryPage();  
   await orderHistoryPage.searchOrderAndSelect(orderId);
   expect(orderId.includes(await orderHistoryPage.getOrderId(orderId))).toBeTruthy();
  
 
});
}