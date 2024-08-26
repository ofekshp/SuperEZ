const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController'); 

router.get('/carts', CartController.getUserCarts);
router.get('/:userId', CartController.getCart);
router.post('/add', CartController.addToCart);
router.post('/remove/:userId', CartController.removeFromCart);

module.exports = router;
