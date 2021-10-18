const db = require("../configDB.js");

const loginUser = (req, res) => {
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
          "SELECT * FROM users WHERE email= ? AND password= ?",
          [email, password],
          (err, result1) => {
            if (err) {
              console.log(err);
              res.status(500).send(err);
            } else {
              if (result1.length == 1) {
                console.log(result1);
                console.log("logged in");
                res
                  .status(200)
                  .send({ message: "logged in", accDetails: result1[0] });
              } else {
                res
                  .status(200)
                  .send({ message: "Wrong email/password!", accDetails: null });
              }
            }
          }
        );
      } else {
        res.status(200).send("No account matched!");
      }
    }
  });
};

const loginViaGoogle = (req, res) => {
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
          "SELECT * FROM users WHERE email= ? AND password= ?",
          [email, password],
          (err, result1) => {
            if (err) {
              console.log(err);
              res.status(500).send(err);
            } else {
              if (result1.length == 1) {
                console.log(result1);
                console.log("logged in");
                res
                  .status(200)
                  .send({ message: "logged in", accDetails: result1[0] });
              } else {
                res
                  .status(200)
                  .send({ message: "Wrong email/password!", accDetails: null });
              }
            }
          }
        );
      } else {
        res.status(200).send("No account matched!");
      }
    }
  });

  // db.query(
  //   "SELECT * FROM users WHERE email= ? AND password= ?",
  //   [email, password],
  //   (err, result1) => {
  //     if (err) {
  //       console.log(err);
  //       res.status(500).send(err);
  //     } else {
  //       if (result1.length == 1) {
  //         console.log(result);
  //         console.log("pasok");
  //         res.status(200).send(result1[0]);
  //       } else {
  //         res.status(200).send("Wrong email/password");
  //       }
  //     }
  //   }
  // );
};

module.exports = {
  loginUser,
};
