const exp = require("express");
require("dotenv").config();

const mongoos = require("mongoose");
const app = require("express")();

app.use(exp.json());

mongoos
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

const db = mongoos.connection;
