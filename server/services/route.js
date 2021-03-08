const clientController = require('./orders/orders.controller')
const router = require('express').Router();
router.get('/orders', async (req, res) => {
  let clients = await clientController.getOrders()
  res.json(clients)
});

router.get('/orders/:id', async (req, res) => {
  let id = req.params.id
  let clients = await clientController.getOrderById(id)
  res.json(clients)
});

router.put('/orders/:id', async (req, res) => {
  let id = req.params.id
  let body = req.body;
  let clients = await clientController.updateOrderById(body, id)
  res.json(clients)
});

module.exports = router;
