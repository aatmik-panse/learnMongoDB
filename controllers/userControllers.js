const userModel = require("../models/user");

exports.createUser = async (req, res) => {
  try {
    const user = new userModel(req.body);
    const result = await user.save();
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.getAllUser = async (req, res) => {
  try {
    const users = await userModel.find({});
    res.send(users);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.getUserById = async (req, res) => {
  try {
    const users = await userModel.findById(req.params.id);
    res.send(users);
  } catch (err) {
    console.log(err);
    res.send(err);
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id);
    user.user_name = req.body.user_name || user.user_name;
    user.user_email = req.body.user_email || user.user_email;
    const result = await user.save();
    console.log(result);
    res.send(result);
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    console.log(user + "user deleted");
    res.send(user + "deleted");
  } catch (error) {
    console.log(error);
    res.send(error);
  }
};
