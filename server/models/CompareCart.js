const mongoose = require('mongoose');

const compareCartSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  prices: [
        {
        store: {
        type: Number,
         required: true
         }
     }
    ]
});

const CompareCart = mongoose.model('Product', compareCartSchema);

module.exports = CompareCart;