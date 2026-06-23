const{expect} = require('@playwright/test');
class OrderReviewPage {
      
    constructor(page) {
        this.page = page;
    }

    async searchCountryAndSelect(countryCode, countryName) {
        
        await this.page.locator("[placeholder*='Country']").pressSequentially(countryCode, { delay: 150 });
        const dropdown = this.page.locator(".ta-results");
        await dropdown.waitFor();
        const optionsCount = await dropdown.locator("button").count();
        for (let i = 0; i < optionsCount; ++i) {
            const text = await dropdown.locator("button").nth(i).textContent();
            if (text === countryName) {
                await dropdown.locator("button").nth(i).click();
                break;
            }
        }
    }

    async SubmitAndGetOrderId() {
            const email = "TestArshad@gmail.com";
         expect( await this.page.locator(".user__name [type='text']").first()).toHaveText(email);
          await this.page.locator(".action__submit").click();
          await expect(this.page.locator(".hero-primary")).toHaveText(" Thankyou for the order. ");
          const orderId = await this.page.locator(".em-spacer-1 .ng-star-inserted").textContent();
          console.log(orderId);
          return orderId;
    }
}
module.exports = { OrderReviewPage };