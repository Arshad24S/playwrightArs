class CartPage {
    constructor(page) {
        this.page = page;
    }

    async VerifyProcuctIsDisplayed(productName) {

        
        await this.page.locator("div li").first().waitFor();
        const bool = await this.page.locator("h3:has-text('"+productName+"')").isVisible();
    }

    async Checkout() {
        await this.page.locator("text=Checkout").click();
    }
}
module.exports = { CartPage };