const CompareCart = require('../models/CompareCart');

const compareCart = async (req, res) => {
  const { products } = req.body;
  try {
    const carts = [
      { name: 'רמי לוי', totalPrice: 0, products: [] },
      { name: 'חצי חינם', totalPrice: 0, products: [] },
      { name: 'ויקטורי', totalPrice: 0, products: [] }
    ];

    const storeNull = [];

    for (const product of products) {
      const dbProductCategory = await CompareCart.find({ category: product.id });

      for (const cart of carts) {
        let dbProduct;
        let index = 0;

        while (index < dbProductCategory.length) {
          dbProduct = dbProductCategory.find((dbProduct, i) => {
            if (i >= index) {
              const regex = new RegExp(product.name, 'i');
              return regex.test(dbProduct.name);
            }
            return false;
          });

          if (dbProduct && dbProduct.prices[0]._doc[cart.name]) {
            break;
          }
          index++;
        }

        if (dbProduct && dbProduct.prices[0]._doc[cart.name]) {
          const priceStore = dbProduct.prices[0]._doc[cart.name];
          cart.totalPrice += priceStore;
          cart.products.push({
            name: dbProduct.name,
            price: priceStore,
          });
        } else {
          storeNull.push(product.name);
        }
      }
    }

    const reversedWords = storeNull.map(word => word.split('').reverse().join(''));
    console.log('storeNull:', reversedWords);
    const sortedCarts = carts.sort((a, b) => a.totalPrice - b.totalPrice);
    res.status(200).json(sortedCarts);

  } catch (error) {
    console.error('Error comparing products:', error);
    res.status(500).json({ message: 'Failed to compare products', error: error.message });
  }
};

module.exports = {
  compareCart,
};
