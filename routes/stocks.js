const express = require("express");
const { addStocks, removeStocks } = require("../controllers/stocks.js");
const router = express.Router();

router.post("/addStocks", addStocks);
router.post("/removeStocks", removeStocks);

module.exports = router;
