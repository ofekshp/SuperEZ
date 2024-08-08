const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController'); 

router.get('/cart', CartController.getCart);
router.post('/addCart', CartController.addToCart);
router.post('/removeCart', CartController.removeFromCart);

module.exports = router;
