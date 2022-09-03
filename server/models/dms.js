const mongoose = require("mongoose");

const schema = mongoose.Schema;

const messageSchema = new schema({
  content: {
    type: String,
    required: true,
  },
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
