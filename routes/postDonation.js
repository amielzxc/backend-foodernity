const express = require("express");
const { postDonation } = require("../controllers/postDonation.js");
const router = express.Router();

router.post("/postDonation", postDonation);

module.exports = router;
