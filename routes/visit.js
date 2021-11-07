const express = require("express");
const { getVisitCount, addVisitCount } = require("../controllers/visit.js");
const router = express.Router();

router.post("/addVisitCount", addVisitCount);
router.post("/getVisitCount", getVisitCount);

module.exports = router;
