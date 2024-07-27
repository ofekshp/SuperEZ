const mongoose = require('mongoose');

const PriceSchema = new mongoose.Schema({
  name: String,
  "רמי לוי": Number,
  "שופרסל": Number,
  "ויקטורי": Number,
  "חצי חינם": Number,
  "יינות ביתן": Number,
  "טיב טעם": Number,
  updatedAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Price', PriceSchema);
