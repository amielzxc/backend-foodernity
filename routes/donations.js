const express = require("express");
const { getDonations, acceptDonation } = require("../controllers/donations.js");
const router = express.Router();

router.post("/getDonations", getDonations);
router.post("/acceptDonations", acceptDonation);

module.exports = router;
