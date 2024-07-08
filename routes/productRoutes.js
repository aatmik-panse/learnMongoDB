const exp = require("express");
const router = require("express").Router();
const productControllers = require("../controllers/productController");
const { default: mongoose } = require("mongoose");

router.post("/", productControllers.createProduct);

router.get("/", productControllers.getAllProducts);

router.get("/:id", productControllers.getProductById);

router.put("/:id", productControllers.updateProduct);

router.delete("/:id", productControllers.deleteProduct);

module.exports = router;
