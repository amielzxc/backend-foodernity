const express = require("express");
const {
  addStocks,
  removeStocks,
  getStocks,
} = require("../controllers/stocks.js");
const router = express.Router();

router.post("/addStocks", addStocks);
router.post("/removeStocks", removeStocks);
router.post("/getStocks", getStocks);

module.exports = router;
