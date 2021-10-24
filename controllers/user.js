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
  const email = req.body.email;
  const profilePicture = req.body.profilePicture;
  const fullName = req.body.fullName;
  const password = req.body.password;

  db.query(
    "UPDATE user SET profilePicture = ?, fullName= ?, password =? WHERE email = ?",
    [profilePicture, fullName, password, email],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log("Success update default: " + email);
        res.status(200).send("Success update default");
      }
    }
  );
};
const updateUserDetailsGoogle = (req, res) => {
  const email = req.body.email;
  const profilePicture = req.body.profilePicture;
  const fullName = req.body.fullName;

  db.query(
    "UPDATE user SET profilePicture = ?, fullName= ?, WHERE email = ?",
    [profilePicture, fullName, email],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log("Success update google: " + email);
        res.status(200).send("Success update google");
      }
    }
  );
};

module.exports = {
  getUserDetails,
  updateUserDetailsDefault,
  updateUserDetailsGoogle,
};
