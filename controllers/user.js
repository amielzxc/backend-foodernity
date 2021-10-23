const db = require("../configDB.js");

const getUserDetails = (req, res) => {
  const email = req.body.email;

  db.query("SELECT * FROM user WHERE email=?", [email], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      if (result.length == 1) {
        console.log(result[0]);
        res.send(result[0]);
      } else {
        res.status(200).send("No existing account.");
      }
    }
  });
};

const updateUserDetailsDefault = (req, res) => {
  const userID = req.body.userID;
  const imagePath = req.body.imagePath;
  const fullName = req.body.fullName;
  const password = req.body.password;

  db.query(
    "UPDATE user SET imagePath = ?, fullName= ?, password =? WHERE CustomerID = ?",
    [imagePath, fullName, password, userID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log("Success update: " + userID);
        res.status(200).send("No existing account.");
      }
    }
  );
};
const updateUserDetailsGoogle = (req, res) => {
  const userID = req.body.userID;
  const imagePath = req.body.imagePath;
  const fullName = req.body.fullName;

  db.query(
    "UPDATE user SET imagePath = ?, fullName= ?, WHERE CustomerID = ?",
    [imagePath, fullName, userID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log("Success update: " + userID);
        res.status(200).send("No existing account.");
      }
    }
  );
};

module.exports = {
  getUserDetails,
  updateUserDetailsDefault,
  updateUserDetailsGoogle,
};
