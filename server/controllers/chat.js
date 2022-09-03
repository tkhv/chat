const Messages = require("../models/message.js");

exports.postMessage = async (req, res, next) => {
  if (!req.body.content) {
    return res.send({ added: false });
  }
  try {
    if (await Messages.create(req.body)) {
      res.json({ added: true });
    } else res.json({ added: false });
  } catch (err) {
    console.log(err);
    res.send({ added: false });
  }
};

exports.getMessages = async (req, res, next) => {
  try {
    const messages = await Messages.find();
    res.json({ foundMessages: true, messageList: messages });
  } catch (err) {
    console.log(err);
    res.send();
  }
};
