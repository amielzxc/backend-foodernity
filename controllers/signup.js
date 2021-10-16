const bcrypt = require("bcrypt");
const nodemailer = require("nodemailer");
const db = require("../configDB.js");

const signup = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const surname = req.body.surname;
  const dateOfReg = req.body.dateOfReg;
  const loginMethod = req.body.loginMethod;
  const userType = req.body.userType;
  const userStatus = req.body.userStatus;

  try {
    db.query("SELECT * FROM user WHERE email= ?", [email], (err, result) => {
      if (err) {
        console.log(err);
        res.send(err);
      } else {
        if (result.length >= 1) {
          // console.log(result);
          // res.status(409).send("email is already taken");
          res.send("email is already taken");
          console.log("email is already taken");
        } else {
          let verificationCode = Math.floor(Math.random() * 888888 + 111111);
          bcrypt.hash(verificationCode + "", 10, function (err, hash) {
            if (err) {
              console.log(err);
            } else {
              var mail = nodemailer.createTransport({
                service: "gmail",
                auth: {
                  user: "foodernity2021@gmail.com",
                  pass: "foodernityApp2021",
                },
              });
              var mailOptions = {
                from: "foodernity2021@gmail.com",
                to: email,
                subject: "Foodernity Verification Code",
                text: "The verification code is " + verificationCode,
              };

              mail.sendMail(mailOptions, function (error, info) {
                if (error) {
                  console.log(error);
                } else {
                  console.log("Email sent: " + info.response);
                }
              });
              console.log(verificationCode);
              res.send(hash);
            }
          });

          verifySignup(req);

          //   let changePasscode = Math.floor(Math.random() * 888888 + 111111);
          //   db.query(
          //     "INSERT INTO users(email, password, firstname, surname, profilePicture, dateOfReg, loginMethod, userType, userStatus, changePasswordCode) VALUES(?,?,?,?,?,?,?,?,?,?)",
          //     [
          //       email,
          //       password,
          //       firstname,
          //       surname,
          //       profilePicture,
          //       dateOfReg,
          //       loginMethod,
          //       userType,
          //       userStatus,
          //       changePasscode,
          //     ],
          //     (err, result) => {
          //       if (err) {
          //         res.status(500).send(err);
          //       }
          //       console.log(result);
          //       console.log("new user added successfully");
          //       //
          //       res.send("new user added successfully");
          //     }
          //   );
        }
      }
    });
  } catch (error) {
    console.log("add user/registration -> try catch error " + error);
  }
};

const verifySignup = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;
  const firstname = req.body.firstname;
  const surname = req.body.surname;
  const dateOfReg = req.body.dateOfReg;
  const loginMethod = req.body.loginMethod;
  const userType = req.body.userType;
  const userStatus = req.body.userStatus;
  const changePasscode = Math.floor(Math.random() * 888888 + 111111);
  // db.connect();
  db.query(
    "INSERT INTO user(email, password, givenName, surname, dateOfReg, loginMethod, userType, userStatus, changePasswordCode) VALUES(?,?,?,?,?,?,?,?,?)",
    [
      email,
      password,
      firstname,
      surname,
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
      } else {
        console.log(result);
        console.log("new user added successfully");
        //
        res.send({ message: "new user added successfully" });
      }
    }
  );
};

module.exports = {
  signup,
  verifySignup,
};
