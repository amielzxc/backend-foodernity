const db = require("../configDB.js");

const updateChangePasswordCode = (req, res) => {
  const changePasscode = Math.floor(Math.random() * 888888 + 111111);
  const email = req.body.email;

  db.query(
    "UPDATE user SET changePasswordCode=? WHERE email = ?",
    [changePasscode, email],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log("Success code update: " + email);
        res.status(200).send("Success code update");
      }
    }
  );
};

module.exports = {
  updateChangePasswordCode,
};
