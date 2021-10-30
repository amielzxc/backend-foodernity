const express = require("express");
const {
  getChangePasswordCode,
  updatePassword,
} = require("../controllers/forgotPassword.js");
const router = express.Router();

router.post("/getChangePasswordCode", getChangePasswordCode);
router.post("/updatePassword", updatePassword);

module.exports = router;
