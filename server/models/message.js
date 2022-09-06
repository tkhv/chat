const mongoose = require("mongoose");

const schema = mongoose.Schema;

const messageSchema = new schema({
  content: {
    type: String,
    required: true,
  },
  userID: {
    type: String, //TODO: Change type to ObjectID
    required: true,
  },
  time: {
    type: Date,
    required: true,
  },
  // reactions: {     TODO: Add reaction functionality
  //   type: [],
  //   required: false,
  // },
});

module.exports = mongoose.model("Message", messageSchema);
