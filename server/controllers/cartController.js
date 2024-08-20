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
    const userId = req.headers.userid; // מקבלים את userId מכותרות הבקשה
    const userCarts = await Cart.find({ userId: userId }); // חיפוש העגלות לפי userId
    res.status(200).json(userCarts);
  } catch (error) {
    console.error('Error fetching user carts:', error);
    res.status(500).json({ message: 'Error fetching user carts' });
  }
};


// const getUserCarts = async (req, res) => {
//   try {
//     const userId = req.params.userId; // Extract userId from URL parameter
//     console.log('Fetching carts for user:', userId);

//     // Fetch carts for the user
//     const carts = await Cart.find({ userId: userId });

//     // Transform carts to match frontend expectations
//     const formattedCarts = carts.map(cart => ({
//       date: cart.date.toISOString().split('T')[0], // Format date as YYYY-MM-DD
//       products: cart.products // Return products array directly
//     }));

//     console.log('Carts found:', formattedCarts);

//     // Send the response
//     res.status(200).json(formattedCarts);
//   } catch (error) {
//     console.error('Error in getUserCarts:', error);
//     res.status(500).json({ message: error.message });
//   }
// };

const addToCart = async (req, res) => {
    const { userId, products } = req.body;
    try {
        const cart = new Cart({ userId, products, date: new Date() });
        await cart.save();
        res.status(200).json(cart.products);
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
        res.status(200).json(cart.products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
  getUserCarts,
    getCart,
    addToCart,
    removeFromCart,
};
