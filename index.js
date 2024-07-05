const exp = require("express");
const mongoos = require("mongoose");

mongoos
  .connect("")
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

const app = exp();

app.use(exp.json());
app.listen(1010, () => {
  console.log("Server started at port 1010");
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

const db = mongoos.connection;

//Product Schema

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

// console.log(ProductModel);
// console.log(db);
// console.log(mongoos.connection);
// console.log(productSchema);

app.post("/api/products", async (req, res) => {
  try {
    // const product = new ProductModel(req.body);
    const product = new ProductModel({
      product_name: req.body.product_name,
      price: req.body.price,
      isInStock: req.body.isInStock,
      imageUrl: req.body.imageUrl,
      category: req.body.category,
    });
    const result = await product.save();
    console.log(result);
    res.status(201).send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
