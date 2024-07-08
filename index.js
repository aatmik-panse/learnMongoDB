const exp = require("express");
require("dotenv").config();

const mongoose = require("mongoose");

const app = require("express")();

const productRoutes = require("./routes/productRoutes");
const userRoutes = require("./routes/userRoutes");
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(1010, () => {
  console.log("Server started at port 1010");
});

const db = mongoose.connection;

app.use(exp.json());
app.use("/api/product", productRoutes);
app.use("/api/user", userRoutes);
