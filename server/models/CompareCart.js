const mongoose = require('mongoose');

const compareCartSchema = new mongoose.Schema({
  id:{
    type: String,
    required: true
  },
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

const CompareCart = mongoose.model('Categorized_product', compareCartSchema);

module.exports = CompareCart;