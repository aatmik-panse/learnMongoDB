const exp = require("express");
require("dotenv").config();

const mongoos = require("mongoose");
const app = require("express")();

mongoos
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

// Rest of your code...

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
  //working
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

app.get("/api/products", async (req, res) => {
  //working
  try {
    const products = await ProductModel.find({});
    res.send(products);
  } catch (err) {
    console;
    res.send(err);
  }
});

app.get("/api/products/:id", async (req, res) => {
  //working
  try {
    // const product = await ProductModel.findById(req.params.id);
    // product.product_name = req.body.product_name;
    // product.price = req.body.price;
    // product.isInStock = req.body.isInStock;
    // product.imageUrl = req.body.imageUrl;
    // product.category = req.body.category;
    const product = await ProductModel.findById(req.params.id);
    const result = await product.save();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.put("/api/products/:id", async (req, res) => {
  //working
  try {
    const product = await ProductModel.findById(req.params.id);
    product.product_name = req.body.product_name || product.product_name;
    product.price = req.body.price || product.price;
    product.isInStock = req.body.isInStock || product.isInStock;
    product.imageUrl = req.body.imageUrl || product.imageUrl;
    product.category = req.body.category || product.category;

    // const product = await ProductModel.findByIdAndUpdate(req.params.id, {
    //   product: req.body,
    // });

    const result = await product.save();
    res.send(result);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});

app.delete("/api/products/:id", async (req, res) => {
  // working
  try {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    console.log(product + "Deleted");
    res.send("Deleted");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
});
