const express = require("express");
const {
  notifyAccept,
  notifyReceive,
  getNotifsFor,
} = require("../controllers/notif.js");
const router = express.Router();

router.post("/notifyAccept", notifyAccept);
router.post("/notifyReceive", notifyReceive);
router.post("/getNotifsFor", getNotifsFor);

module.exports = router;
