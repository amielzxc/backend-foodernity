const express = require("express");
const {
  getDonations,
  acceptDonation,
  receiveDonation,
  addCallForDonations,
  getCallForDonations,
  updateCallForDonations,
  distributeDonations,
  getCallForDonationsUnfulfilled,
  getDistributedDonations,
  getDonationsFor,
} = require("../controllers/donations.js");
const router = express.Router();

router.post("/getDonations", getDonations);
router.post("/acceptDonations", acceptDonation);
router.post("/receiveDonations", receiveDonation);
router.post("/addCallForDonations", addCallForDonations);
router.post("/getCallForDonations", getCallForDonations);
router.post("/updateCallForDonations", updateCallForDonations);
router.post("/distributeDonations", distributeDonations);
router.post("/getCallForDonationsUnfulfilled", getCallForDonationsUnfulfilled);
router.post("/getDistributedDonations", getDistributedDonations);
router.post("/getDonationsFor", getDonationsFor);

module.exports = router;
