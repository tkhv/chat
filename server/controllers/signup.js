const bcrypt = require("bcryptjs");

const User = require("../models/user");

exports.signup = async (req, res, next) => {
  console.log(req.body);
  try {
    const password = await bcrypt.hash(req.body.password, 12);
    const user = await User.create({
      username: req.body.username,
      password: password,
    });
    console.log("Created new user.");
    res.json({
      message: "User created successfully",
    });
  } catch (err) {
    res.json({
      message: "User already exists.",
    });
  }
};
