const express = require("express");
const {
  getUserDetails,
  updateUserDetailsDefault,
  updateUserDetailsGoogle,
} = require("../controllers/user.js");
const router = express.Router();

router.post("/getUserDetails", getUserDetails);
router.post("/updateUserDetailsDefault", updateUserDetailsDefault);
router.post("/updateUserDetailsGoogle", updateUserDetailsGoogle);

module.exports = router;
