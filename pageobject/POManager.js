const {LoginPage}= require('./LoginPage');
const {DashboardPage} =  require('./DashboardPage');
const {CartPage} = require('./CartPage');
const {OrderHistoryPage} = require('./OrderHistoryPage');
const {OrderReviewPage} = require('./OrderReviewPage');

class POManager {
    constructor(page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.dashboardPage = new DashboardPage(page);
        this.cartPage = new CartPage(page);
        this.orderHistoryPage = new OrderHistoryPage(page);
        this.orderReviewPage = new OrderReviewPage(page);       
    }

    getLoginPage() {
        return this.loginPage;
    }

    getDashboardPage() {
        return this.dashboardPage;
    }

    getCartPage() {
        return this.cartPage;
    }

    getOrderHistoryPage() {
        return this.orderHistoryPage;
    }

    getOrderReviewPage() {
        return this.orderReviewPage;
    }
} 
module.exports={POManager}; 