const CompareCart = require('../models/CompareCart');

//  function reverseString(str) {
//   return str.split('').reverse().join('');
// }

const compareCart = async (req, res) => {
    const { products } = req.body;
    try {
      const carts = [
        { name: 'שופרסל', totalPrice: 0, products: [] },
        { name: 'רמי לוי', totalPrice: 0, products: [] },
        { name: 'חצי חינם', totalPrice: 0, products: [] }
      ];
  
      const cartMap = carts.reduce((map, cart) => {
        map[cart.name] = cart;
        return map;
      }, {});
  
      for (const product of products) {
        //const reverseName = reverseString(product.name);
        const dbProduct = await CompareCart.findOne({ name: product.name });
        if (dbProduct) {
          for (const store in dbProduct.prices) {
            if (cartMap[store]) {
              const cart = cartMap[store];
              cart.totalPrice += dbProduct.prices[store];
              cart.products.push({
                name: dbProduct.name,
                price: dbProduct.prices[store]
              });
            }
          }
        }
      }
  
      const cheapestCart = carts.reduce((cheapest, current) => {
        return current.totalPrice < cheapest.totalPrice ? current : cheapest;
      }, carts[0]);
  
      console.log("MY CHEAP CART : ",cheapestCart);
  
      res.status(200).json({
        name: cheapestCart.name,
        totalPrice: cheapestCart.totalPrice,
        products: cheapestCart.products
      });
  
    } catch (error) {
      console.error('Error comparing products:', error);
      res.status(500).json({ message: 'Failed to compare products', error: error.message });
    }
  };
module.exports = {
    compareCart,
  };
  