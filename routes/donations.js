const express = require("express");
const { getDonations } = require("../controllers/donations.js");
const router = express.Router();

router.post("/getDonations", getDonations);

module.exports = router;
