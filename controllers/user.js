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

module.exports = {
  getUserDetails,
};
