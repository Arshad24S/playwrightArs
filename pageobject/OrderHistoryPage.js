const{expect} = require('@playwright/test');
class OrderHistoryPage {
    constructor(page) {
        this.page = page;
    }

    async searchOrderAndSelect(orderId) {
      
   await this.page.locator("tbody").waitFor();
   const rows = await this.page.locator("tbody tr");
 
 
   for (let i = 0; i < await rows.count(); ++i) {
      const rowOrderId = await rows.nth(i).locator("th").textContent();
      if (orderId.includes(rowOrderId)) {
         await rows.nth(i).locator("button").first().click();
         break;
      }
   }
    }

    async getOrderId(orderId) {
       const orderIdDetails = await this.page.locator(".col-text").textContent();
       expect(orderId.includes(orderIdDetails)).toBeTruthy();
       return orderIdDetails;
    }
}
module.exports = { OrderHistoryPage };