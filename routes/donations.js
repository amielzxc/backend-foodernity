const express = require("express");
const {
  getDonations,
  acceptDonation,
  receiveDonation,
} = require("../controllers/donations.js");
const router = express.Router();

router.post("/getDonations", getDonations);
router.post("/acceptDonations", acceptDonation);
router.post("/receiveDonations", receiveDonation);

module.exports = router;
