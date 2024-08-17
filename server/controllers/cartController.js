const Cart = require('../models/Cart');

const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        const products = cart.products;
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const addToCart = async (req, res) => {
    const { userId, product } = req.body;
    try {
      let cart = await Cart.findOne({ userId });
      if (!cart) {
        cart = new Cart({ userId, products: [product] });
      } else {
        const existingProductIndex = cart.products.findIndex(p => p.name === product.name);
        if (existingProductIndex > -1) {
          cart.products[existingProductIndex].quantity += product.quantity;
        } else {
          cart.products.push(product);
        }
      } 
      await cart.save();
      const products = cart.products;
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };

const removeFromCart = async (req, res) => {
    const { userId, productName } = req.body;
    try {
      const cart = await Cart.findOne({ userId });
      if (!cart) {
        return res.status(404).json({ message: 'Cart not found' });
      }
      const productIndex = cart.products.findIndex(p => p.name === productName);
      if (productIndex > -1) {
        cart.products.splice(productIndex, 1);
        await cart.save();
      }
      const products = cart.products;
      res.json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }


  
  module.exports = {
    getCart,
    addToCart,
    removeFromCart,
  };
  