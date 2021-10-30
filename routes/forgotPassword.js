const express = require("express");
const { getChangePasswordCode } = require("../controllers/forgotPassword.js");
const router = express.Router();

router.post("/getChangePasswordCode", getChangePasswordCode);

module.exports = router;
