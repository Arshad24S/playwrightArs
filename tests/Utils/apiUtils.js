class ApiUtils {
  
   
    constructor(apiContext,loginpayload) {
        this.apiContext = apiContext;
        this.loginpayload = loginpayload;
    }

    async getToken() {
        const loginResponse = await this.apiContext.post
            ("https://rahulshettyacademy.com/api/ecom/auth/login",
                {
                    data: this.loginpayload
                })
        const loginResonseJson = await loginResponse.json();
        const token = loginResonseJson.token;
        console.log(token);
        return token;
    }

    async createOrder(orderpayload) {
        let response={};
        response.token = await this.getToken();
        const orderResponse = await this.apiContext.post("https://rahulshettyacademy.com/api/ecom/order/create-order", {
            data: orderpayload,
            headers: {
                'Authorization': response.token,
                'content-type': 'application/json'
            }
        })
        const orderResponseJson = await orderResponse.json();
        console.log(orderResponseJson);
        //const orderId = orderResponseJson.orders[0];
        const orderId = orderResponseJson.orders;
        response.orderId = orderId;
        console.log(orderId);
        return response;
    }

}
module.exports = { ApiUtils };