const express = require("express");
const { getUserDetails } = require("../controllers/user.js");
const router = express.Router();

router.post("/getUserDetails", getUserDetails);

module.exports = router;
