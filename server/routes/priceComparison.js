const express = require('express');
const router = express.Router();
const Price = require('../models/Price');

router.post('/compare-prices', async (req, res) => {
  try {
    const { items } = req.body;
    const prices = await Price.find({ name: { $in: items } });
    
    const comparison = items.map(item => {
      const itemPrices = prices.find(p => p.name === item);
      return {
        name: item,
        prices: itemPrices ? {
          "רמי לוי": itemPrices["רמי לוי"],
          "שופרסל": itemPrices["שופרסל"],
          "ויקטורי": itemPrices["ויקטורי"],
          "חצי חינם": itemPrices["חצי חינם"],
          "יינות ביתן": itemPrices["יינות ביתן"],
          "טיב טעם": itemPrices["טיב טעם"]
        } : null
      };
    });
    
    res.json(comparison);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while comparing prices' });
  }
});

module.exports = router;