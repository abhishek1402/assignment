
const database = require("../../lib/firebase")
class OrderControllerClass {
    constructor() {
        this.ref = database.ref("orders");
    }
    async getOrders() {
        try {
            let orders = await this.ref.once("value");
            return orders.val()
        }
        catch (e) {
            console.log("e", e)
        }
    }

}
module.exports = new OrderControllerClass();