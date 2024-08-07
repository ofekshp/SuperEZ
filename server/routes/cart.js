const express = require('express');
const router = express.Router();
const CartController = require('../controllers/cartController'); 

router.get('/:userId', CartController.getCart);
router.post('/add/:userId', CartController.addToCart);
router.post('/remove/:userId', CartController.removeFromCart);

module.exports = router;
