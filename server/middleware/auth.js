const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (req, res, next) => {
  const token = req.get("Authorization").split(" ")[1];
  let decodedToken;
  try {
    decodedToken = jwt.verify(token, process.env.client_secret);
  } catch (err) {
    console.log(err);
  }
  if (decodedToken) {
    console.log(decodedToken);
  }
  next();
};
