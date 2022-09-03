const express = require("express");

const chatController = require("../controllers/chat");

const router = express.Router();

router.post("/api/chat", chatController.postMessage);
router.get("/api/chat", chatController.getMessages);

module.exports = router;
