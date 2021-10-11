const express = require("express");
const {
  getUser,
  addUser,
  updateUser,
  deleteUser,
  getUsers,
} = require("../controllers/user.js");
const router = express.Router();

router.post("/get/users", getUsers);
router.get("/get/:id", getUser);
router.post("/add", addUser);
router.post("/update/:id", updateUser);
router.post("/delete/:id", deleteUser);

module.exports = router;
