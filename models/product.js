const productSchema = new mongoos.Schema({
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

const ProductModel = mongoos.model("Product", productSchema);
