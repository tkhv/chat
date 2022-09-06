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

const dmSchema = new schema({
  dmID: {
    type: String,
    required: true,
    unique: true,
  },
  messages: [messageSchema],
});

module.exports = mongoose.model("Dms", dmSchema);
