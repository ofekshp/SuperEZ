const CompareCart = require('../models/CompareCart');

function filterIrrelevantWords(words, irrelevantWords) {
  return words.filter(word => !irrelevantWords.includes(word));
}

function extractSearchTerms(productName) {
  return productName.split(/\s+/).filter(word => word.length > 0);
}

function calculateMatchScore(productName, dbProductName, irrelevantWordsInSite, irrelevantWordsInDb) {
  const productWords = filterIrrelevantWords(extractSearchTerms(productName), irrelevantWordsInSite);
  const dbProductWords = filterIrrelevantWords(extractSearchTerms(dbProductName), irrelevantWordsInDb);

  const commonWords = productWords.filter(word => dbProductWords.includes(word));
  const matchRatio = commonWords.length / productWords.length;
  
  return matchRatio;
}
const compareCart = async (req, res) => {
  const { products } = req.body;

  try {
    const irrelevantWordsInSite = ['regular','קפוא','וניחוח','&','-','/','+','מארז','מועשר', 'בפאלו', 'קפוא','מים', 'ניקוי','בתמצית', 'ותמצית', 'תמצית', 'בתוספת', 'בריח', 'בניחוח', 'עם', 'ממרח', 'קלאסי', 'איטלקי', 'טרי', 'מהדרין','על']; // website

    const irrelevantWordsInDb = ['תוספת','ווילי פוד','מקסימה','פיירי','אסם','שטראוס','טיב טעם','קפוא', 'להקפצה', 'יטבתה', 'רמי לוי', 'תנובה', 'של', 'עם', 'אריאל', 'מיכל', 'קלאסי', 'אנסקי', 'בניחוח', 'בריח']; // database

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
      // סינון מילים לא רלוונטיות לפני החיפוש
      const searchTerms = filterIrrelevantWords(extractSearchTerms(product.name), irrelevantWordsInSite);

      // חיפוש בבסיס הנתונים עם המילים המסוננות
      const query = {
        $or: searchTerms.map(term => ({
          name: { $regex: term, $options: 'i' }
        }))
      };

      const dbProducts = await CompareCart.find(query);

      for (const cart of carts) {
        let bestMatch = null;
        let lowestPrice = Number.MAX_VALUE;
        let bestMatchScore = 0.5; // הגדרת ציון מינימלי לקבלת התאמה

        dbProducts.forEach(dbProduct => {
          const score = calculateMatchScore(product.name, dbProduct.name, irrelevantWordsInSite, irrelevantWordsInDb);
          if (score > bestMatchScore) {
            const priceStore = dbProduct.prices[0]._doc[cart.name];
            if (priceStore < lowestPrice) {
              lowestPrice = priceStore;
              bestMatch = dbProduct;
              bestMatchScore = score; // עדכון ציון ההתאמה הכי טוב
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
