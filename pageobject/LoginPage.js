class LoginPage {
    constructor(page) {
        this.page = page;
        this.usernameInput = page.locator('#userEmail');
        this.passwordInput = page.locator('#userPassword');
        this.loginButton = page.locator("[value='Login']");
    }

    async login(email, password) {
        await this.usernameInput.fill(email);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await this.page.waitForLoadState('networkidle');
    }

    async goTo(){
        await this.page.goto("https://rahulshettyacademy.com/client");
    }
}
module.exports = {LoginPage};