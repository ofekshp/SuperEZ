const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  quantity: { type: Number, required: true },
});

const cartSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  products: [productSchema],
});

const Cart = mongoose.model('Cart', cartSchema);

module.exports = Cart;
