const CompareCart = require('../models/CompareCart');

const compareCart = async (req, res) => {
  const { products } = req.body;
  console.log(' My products:', products);
  try {
    const carts = [
      { name: 'רמי לוי', totalPrice: 0, products: [] },
      { name: 'חצי חינם', totalPrice: 0, products: [] },
      { name: 'ויקטורי', totalPrice: 0, products: [] },
      { name: 'טיב טעם', totalPrice: 0, products: [] }
    ];

    const storeNull = [];

    const getCategoryById = {
      1: "ירקות ופירות טריים",
      2: "פירות יבשים פיצוחים ואגוזים",
      3: "תבלינים",
      4: "חלב ביצים ותחליפים ומשקאות צמחיים",
      5: "סלטים רטבים ממרחים",
      6: "עוף בשר נקניקים ודגים",
      7: "אורגני ובריאות",
      8: "קפואים",
      9: "שימורים",
      10: "אפיה ובישול",
      11: "אסיאתי",
      12: "קטניות ודגנים",
      13: "מתוקים וחטיפים",
      14: "אחזקת הבית ובעלי חיים (אביזרי ניקיון, ניקוי כללי, אחסון קופסאות וכו׳)",
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
          cart.totalPrice += (priceStore * product.quantity);
          cart.products.push({
            name: dbProduct.name,
            price: priceStore.toFixed(2),
            quantity: product.quantity,
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
