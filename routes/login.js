const express = require("express");
const { loginUser } = require("../controllers/login.js");
const router = express.Router();

router.post("/login", loginUser);

module.exports = router;
