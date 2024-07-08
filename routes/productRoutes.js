const exp = require("express");
const router = require("express").Router();
const productControllers = require("../controllers/productController");
const { default: mongoose } = require("mongoose");

router.get("/", productControllers.sendHello);

router.post("/api/products", productControllers.createProduct);

router.get("/api/products", productControllers.getAllProducts);

router.get("/api/products/:id", productControllers.getProductById);

router.put("/api/products/:id", productControllers.updateProduct);

router.delete("/api/products/:id", productControllers.deleteProduct);

module.exports = mongoose.model("products", productSchema);
