const express = require("express");
const { updateChangePasswordCode } = require("../controllers/logout.js");
const router = express.Router();

router.post("/updateChangePasswordCode", updateChangePasswordCode);

module.exports = router;
