const express = require("express");
const {
  getDonations,
  acceptDonation,
  receiveDonation,
  addCallForDonations,
  getCallForDonations,
  updateCallForDonations,
} = require("../controllers/donations.js");
const router = express.Router();

router.post("/getDonations", getDonations);
router.post("/acceptDonations", acceptDonation);
router.post("/receiveDonations", receiveDonation);
router.post("/addCallForDonations", addCallForDonations);
router.post("/getCallForDonations", getCallForDonations);
router.post("/updateCallForDonations", updateCallForDonations);

module.exports = router;
