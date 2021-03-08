const clientController = require('./orders/orders.controller')
const router = require('express').Router();
router.get('/orders', async (req, res) => {
  let clients = await clientController.getOrders()
  res.json(clients)
});

module.exports = router;
