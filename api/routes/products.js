const { Router } = require('express');
const productsController = require('@/controllers/products');

const router = Router();

router.get('/pizzas', productsController.getPizza);

module.exports = router;
