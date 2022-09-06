const express = require("express");

const chatController = require("../controllers/chat");

const router = express.Router();

router.post("/api/chat/sendMsg", chatController.postMessage);
router.post("/api/chat/getMsgs", chatController.getMessages);
router.post("/api/chat/getDms", chatController.getDM);

module.exports = router;
