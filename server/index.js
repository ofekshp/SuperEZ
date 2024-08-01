const express = require('express');
const path = require('path');
var connectDB = require('./db');
var dotenv = require('dotenv');
const priceComparisonRoutes = require('./routes/priceComparison');

const app = express();
const PORT = process.env.PORT || 3001;

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'build')));

// Handle GET requests to the API
app.get('/api', (req, res) => {
  res.json({ message: 'Hello from the server!' });
});

app.use('/api', priceComparisonRoutes);

app.post('/api/compare-prices', async (req, res) => {
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

// Connect to the database
connectDB();

// All other GET requests not handled before will return the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
