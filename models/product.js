const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  product_name: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  isInStock: {
    type: Boolean,
    required: true,
  },
  imageUrl: String,
  category: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("product", productSchema);
