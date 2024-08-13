const CompareCart = require('../models/CompareCart');

const compareCart = async (req, res) => {
    const { products } = req.body;
    try {
      const carts = [
        { name: 'שופרסל', totalPrice: 0, products: [] },
        { name: 'רמי לוי', totalPrice: 0, products: [] },
        { name: 'חצי חינם', totalPrice: 0, products: [] },
        { name: 'ויקטורי', totalPrice: 0, products: [] }
      ];
  
      const cartMap = carts.reduce((map, cart) => {
        map[cart.name] = cart;
        return map;
      }, {});
  
      for (const product of products) {
        const dbProduct = await CompareCart.find({ name: { $regex: `^${product.name}`, $options: 'i' } });
        console.log('dbProduct:', dbProduct);
        for(const dbP of dbProduct){
          const storeNameArr = dbP.prices[0]._doc;
          const storeKeys = Object.keys(storeNameArr).filter(key => key !== '_id');
          storeKeys.forEach(storeName => {
            const priceStore = storeNameArr[storeName];
            if (cartMap[storeName]) {
              const cart = cartMap[storeName];
              cart.totalPrice += priceStore;
              cart.products.push({
                name: dbP.name,
                price: priceStore,
              });
            }
          })
        }
      }
  
      const sortedCarts = carts.sort((a, b) => a.totalPrice - b.totalPrice);
      res.status(200).json(sortedCarts);

      // const cheapestCart = carts.reduce((cheapest, current) => {
      //   if (current.totalPrice === 0)
      //     return cheapest;
      //   return current.totalPrice < cheapest.totalPrice ? current : cheapest;
      // }, { totalPrice: Infinity });
      //res.status(200).json(cheapestCart);
  
    } catch (error) {
      console.error('Error comparing products:', error);
      res.status(500).json({ message: 'Failed to compare products', error: error.message });
    }
  };
module.exports = {
    compareCart,
  };
