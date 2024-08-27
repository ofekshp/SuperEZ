const CompareCart = require('../models/CompareCart');

const compareCart = async (req, res) => {
  const { products } = req.body;
  try {
    const carts = [
      { name: 'רמי לוי', totalPrice: 0, products: [] },
      { name: 'חצי חינם', totalPrice: 0, products: [] },
      { name: 'ויקטורי', totalPrice: 0, products: [] },
      { name: 'טיב טעם', totalPrice: 0, products: [] }
    ];

    const storeNull = [
      { name: 'רמי לוי', products: [] },
      { name: 'חצי חינם', products: [] },
      { name: 'ויקטורי', products: [] },
      { name: 'טיב טעם', products: [] }
    ];

    const getCategoryById = {
      1: "ירקות ופירות טריים",
      2: "פירות יבשים, פיצוחים ואגוזים",
      3: "תבלינים",
      4: "מוצרי חלב, תחליפים וביצים",
      5: "סלטים רטבים וממרחים",
      6: "עוף, בשר, נקניקים ודגים",
      7: "אורגני ובריאות",
      8: "קפואים",
      9: "שימורים",
      10: "אפייה ובישול",
      11: "אסיאתי",
      12: "קטניות ודגנים",
      13: "מתוקים וחטיפים",
      14: "אחזקת הבית ובעלי חיים",
      15: "משקאות",
      16: "חד פעמי",
      17: "פארם ותינוקות"
    };

    for (const product of products) {
      const categoryName = getCategoryById[product.id];
      const dbProductCategory = await CompareCart.find({ category: categoryName });
    
      for (const cart of carts) {
        let dbProduct;
        let index = 0;

        while (index < dbProductCategory.length) {
          dbProduct = dbProductCategory.find((dbProduct, i) => {
            if (i >= index) {
              const regexPattern = product.name
                .split(/\s+/)
                .map(word => word.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
                .join('.*');
              
              const regex = new RegExp(regexPattern, 'i');
              
              const match = regex.test(dbProduct.name);
              return match;
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
          cart.totalPrice += (priceStore * product.quantity);
          cart.products.push({
            name: dbProduct.name,
            price: priceStore.toFixed(2),
            quantity: product.quantity,
          });
        } else {
          storeNull.find(store => store.name === cart.name).products.push(product);
        }
      }
    }

    console.log('storeNull:', storeNull);
    const sortedCarts = carts.sort((a, b) => a.totalPrice - b.totalPrice);
    res.status(200).json({sortedCarts , storeNull});

  } catch (error) {
    console.error('Error comparing products:', error);
    res.status(500).json({ message: 'Failed to compare products', error: error.message });
  }
};

module.exports = {
  compareCart,
};