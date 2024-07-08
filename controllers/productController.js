const ProductModel = require("../models/product");

exports.sendHello = (req, res) => {
  res.send("Hello World");
};

exports.createProduct = async (req, res) => {
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
};

//get all
exports.getAllProducts = async (req, res) => {
  //working
  try {
    const products = await ProductModel.find({});
    res.send(products);
  } catch (err) {
    console;
    res.send(err);
  }
};

// get by id
exports.getProductById = async (req, res) => {
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
};

// put by id

exports.updateProduct = async (req, res) => {
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
};

// delete by id
exports.deleteProduct = async (req, res) => {
  // working
  try {
    const product = await ProductModel.findByIdAndDelete(req.params.id);
    console.log(product + "Deleted");
    res.send("Deleted");
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};
