
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

    async getOrderById(id) {
        try {
            let orders = await (await this.ref.once("value")).child(id)
            return orders.val()
        }
        catch (e) {
            console.log("e", e)
        }
    }

    async updateOrderById(body, id) {
        try {
            await (await this.ref.child(id).set(body))
            return "success"
        }
        catch (e) {
            console.log("e", e)
        }
    }

}
module.exports = new OrderControllerClass();