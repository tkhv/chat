const path = require("path");
require("dotenv").config({
  path: path.resolve(__dirname, "../env/server.env"),
});
const mongoose = require("mongoose");

const dbConnect = () => {
  return mongoose.connect(process.env.DB_URL);
};

module.exports = dbConnect;
