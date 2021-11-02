const express = require("express");
const { notifyAccept, notifyReceive } = require("../controllers/notif.js");
const router = express.Router();

router.post("/notifyAccept", notifyAccept);
router.post("/notifyReceive", notifyReceive);

module.exports = router;
