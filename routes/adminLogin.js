const express = require("express");
const { loginAdmin } = require("../controllers/adminLogin.js");
const router = express.Router();

router.post("/loginAdmin", loginAdmin);

module.exports = router;
