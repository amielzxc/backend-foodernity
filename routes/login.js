const express = require("express");
const { loginUser, loginViaGoogle } = require("../controllers/login.js");
const router = express.Router();

router.post("/login", loginUser);
router.post("/googleLogin", loginViaGoogle);
module.exports = router;
