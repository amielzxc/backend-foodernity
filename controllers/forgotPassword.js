const db = require("../configDB.js");
const nodemailer = require("nodemailer");

const getChangePasswordCode = (req, res) => {
  const email = req.body.email;
  let changePassCode = Math.floor(Math.random() * 888888 + 111111);
  db.query("SELECT * FROM user WHERE email=?", [email], (err, result) => {
    if (err) {
      console.log(err);
      res.status(200).send(err);
    } else {
      if (result.length == 1) {
        console.log(result[0]);

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
          text: "The code for change password is " + changePassCode,
        };

        mail.sendMail(mailOptions, function (error, info) {
          if (error) {
            console.log(error);
          } else {
            console.log("Email sent: " + info.response);
          }
        });

        res.status(200).send(changePassCode + "");
      } else {
        res.status(200).send("No existing account.");
      }
    }
  });
};

const updatePassword = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  db.query(
    "UPDATE user SET password=? WHERE email=?",
    [password, email],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(result);

        console.log("Password updated");

        res.send("Password updated");
      }
    }
  );
};

module.exports = {
  getChangePasswordCode,
  updatePassword,
};
