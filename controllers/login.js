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
          "SELECT * FROM user WHERE email= ? AND password= ?",
          [email, password],
          (err, result1) => {
            if (err) {
              console.log(err);
              res.status(500).send(err);
            } else {
              if (result1.length == 1) {
                console.log(result1[0]);
                console.log("logged in");

                if (result1[0].userStatus == "suspended") {
                  res.status(200).send("Suspended");
                } else {
                  res.status(200).send("Logged in");
                }
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

const loginViaGoogle = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const fullName = req.body.fullName;
  const dateOfReg = req.body.dateOfReg;
  const loginMethod = req.body.loginMethod;
  const userType = req.body.userType;
  const userStatus = req.body.userStatus;
  const changePasscode = "";

  //check if there is an existing email
  db.query("SELECT * FROM user WHERE email=?", [email], (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      if (result.length == 1) {
        //check the login method if it matches the google login
        console.log(result[0]);
        if (result[0].loginMethod == "google") {
          console.log("Logged in");
          if (result[0].userStatus == "suspended") {
            res.status(200).send("Suspended");
          } else {
            res.status(200).send("Logged in");
          }
        } else {
          console.log("Email is in use in different login method");
          res.send("Email is in use in different login method");
        }
      } else {
        // res.status(200).send("No account matched!");

        //sign up the account first and save to the DB
        db.query(
          "INSERT INTO user(email, password, fullName, dateOfReg, loginMethod, userType, userStatus, changePasswordCode) VALUES(?,?,?,?,?,?,?,?)",
          [
            email,
            password,
            fullName,
            dateOfReg,
            loginMethod,
            userType,
            userStatus,
            changePasscode,
          ],
          (err, result) => {
            if (err) {
              console.log(result);
              console.log("error");
              res.send(err);

              //
            } else {
              console.log(result);
              console.log("new user added successfully via google login");
              //
              res.send("new user added successfully via google login");

              //after successfully saving to the database
            }
          }
        );
      }
    }
  });
};

module.exports = {
  loginUser,
  loginViaGoogle,
};
