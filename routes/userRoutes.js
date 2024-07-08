const exp = require("express");
const router = require("express").Router();
const { default: mongoose } = require("mongoose");
const userControllers = require("../controllers/userControllers");

router.get("/", userControllers.getAllUser);

router.post("/", userControllers.createUser);

router.get("/:id", userControllers.getUserById);

router.put("/:id", userControllers.updateUser);

router.delete("/:id", userControllers.deleteUser);

module.exports = router;
