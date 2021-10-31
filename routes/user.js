const express = require("express");
const {
  getUserDetails,
  updateUserDetailsDefault,
  updateUserDetailsGoogle,
  getUsers,
  suspendUsers,
  unsuspendUsers,
} = require("../controllers/user.js");
const router = express.Router();

router.post("/getUserDetails", getUserDetails);
router.post("/updateUserDetailsDefault", updateUserDetailsDefault);
router.post("/updateUserDetailsGoogle", updateUserDetailsGoogle);
router.post("/getUsers", getUsers);
router.post("/suspendUsers", suspendUsers);
router.post("/unsuspendUsers", unsuspendUsers);

module.exports = router;
