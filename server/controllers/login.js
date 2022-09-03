const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../env/server.env"),
});
const User = require("../models/user");

exports.login = async (req, res, next) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      console.log(user);
      const validPwd = await bcrypt.compare(req.body.password, user.password);
      if (validPwd) {
        const token = jwt.sign(
          {
            username: req.body.username,
            userID: user._id,
          },
          process.env.client_secret,
          { expiresIn: "1h" }
        );
        res.json({
          message: "Found.",
          found: true,
          token: token,
          userID: user._id,
        });
      } else {
        res.json({
          message: "Invalid password.",
          found: false,
        });
      }
    } else {
      res.json({
        message: "No such user exists.",
        found: false,
      });
    }
    res.send();
  } catch (err) {
    console.log(err);
    res.send();
  }
};

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

/*exports.login = (req, res, next) => {
  User.find({ username: req.body.username })
    .then((result) => {
      if (result.length < 1) {
        console.log("Adding new user...");
        const user = new User({ username: req.body.username });
        user
          .save()
          .then((res) => console.log(res))
          .catch((err) => console.log(err));
      } else {
        console.log("User already exists.");
      }
    })
    .catch((err) => console.log(err));
  res.send();
}; */
