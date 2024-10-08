const Cart = require('../models/Cart');

const getCart = async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId });
        const products = cart.products;
        res.status(200).json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

const getUserCarts = async (req, res) => {
  try {
    const userId = req.headers.userid; 
        const userCarts = await Cart.find({ userId: userId }); 
    res.status(200).json(userCarts);
  } catch (error) {
    console.error('Error fetching user carts:', error);
    res.status(500).json({ message: 'Error fetching user carts' });
  }
};


const addToCart = async (req, res) => {
    const { userId, products } = req.body;
    try {
      const cart = new Cart({ userId, products});
      await cart.save();
      //const products = cart.products;
      res.status(200).json(products);
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
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  }
module.exports = {
  getUserCarts,
    getCart,
    addToCart,
    removeFromCart,
};
   