const express = require('express');
const router = express.Router();
const { addToCart } = require('../controllers/productCart'); // Adjust according to file name and path

router.post('/addToCart', addToCart);

module.exports = router;
