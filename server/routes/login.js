const express = require("express");

const loginController = require("../controllers/login");
const signupController = require("../controllers/signup");

const router = express.Router();

router.post("/api/login", loginController.login);

router.post("/api/login/signup", loginController.signup);

module.exports = router;
