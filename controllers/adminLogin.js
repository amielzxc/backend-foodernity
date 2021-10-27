const db = require("../configDB.js");

const loginAdmin = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query("SELECT * FROM user WHERE email=?", [email], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      if (result.length == 1) {
        console.log(result[0]);
        db.query(
          "SELECT * FROM user WHERE email= ? AND password= ? and userType=admin",
          [email, password],
          (err, result1) => {
            if (err) {
              console.log(err);
              res.status(500).send(err);
            } else {
              if (result1.length == 1) {
                console.log(result1[0]);
                console.log("logged in");
                res.status(200).send("logged in");
              } else {
                res.status(200).send("Wrong email/password.");
              }
            }
          }
        );
      } else {
        res.status(200).send("No existing account.");
      }
    }
  });
};

module.exports = {
  loginAdmin,
};
