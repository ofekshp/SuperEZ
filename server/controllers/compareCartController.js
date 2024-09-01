const CompareCart = require('../models/CompareCart');

function filterIrrelevantWords(words, irrelevantWords) {
  return words.filter(word => !irrelevantWords.includes(word));
}
function extractSearchTerms(productName) {
  return productName.split(/\s+/).filter(word => word.length > 0);
}

function calculateMatchScore(productName, dbProductName) {
  const irrelevantWordsInSite = ['קפוא','בטעם','ניקוי','ותמצית','תמצית','בתמצית','בתוספת','מועשר','בריח','בניחוח','וניחוח','עם','&','-','/','+','מארז','ממרח', 'קלאסי', 'איטלקי', 'טרי', 'מהדרין']; // website
  const irrelevantWordsInDb = ['קפוא','להקפצה','יטבתה','רמי לוי','תנובה','של','עם','אריאל', 'מיכל', 'קלאסי', 'אנסקי','בניחוח','בריח']; // database

  const productWords = filterIrrelevantWords(extractSearchTerms(productName), irrelevantWordsInSite);
  const dbProductWords = filterIrrelevantWords(extractSearchTerms(dbProductName), irrelevantWordsInDb);

  const commonWords = productWords.filter(word => dbProductWords.includes(word));
  return commonWords.length / productWords.length;
}

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

    for (const product of products) {
      const searchTerms = extractSearchTerms(product.name);

      const query = {
        $and: searchTerms.map(term => ({
          name: { $regex: term, $options: 'i' }
        }))
      };

      const dbProducts = await CompareCart.find(query);

      for (const cart of carts) {
        let bestMatch = null;
        let lowestPrice = Number.MAX_VALUE;

        dbProducts.forEach(dbProduct => {
          const score = calculateMatchScore(product.name, dbProduct.name);
          if (score > 0) {
            const priceStore = dbProduct.prices[0]._doc[cart.name];
            if (priceStore < lowestPrice) {
              lowestPrice = priceStore;
              bestMatch = dbProduct;
            }
          }
        });

        if (bestMatch && lowestPrice < Number.MAX_VALUE) {
          cart.totalPrice += lowestPrice * product.quantity;
          cart.products.push({
            name: bestMatch.name,
            price: lowestPrice.toFixed(2),
            quantity: product.quantity,
          });
        } else {
          storeNull.find(store => store.name === cart.name).products.push(product);
        }
      }
    }

    console.log('storeNull:', storeNull);
    const sortedCarts = carts.sort((a, b) => a.totalPrice - b.totalPrice);
    res.status(200).json({ sortedCarts, storeNull });

  } catch (error) {
    console.error('Error comparing products:', error);
    res.status(500).json({ message: 'Failed to compare products', error: error.message });
  }
};

module.exports = {
  compareCart,
};
