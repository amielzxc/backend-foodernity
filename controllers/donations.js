const db = require("../configDB.js");

const getDonations = (req, res) => {
  // const email = req.body.email;
  // const password = req.body.password;

  db.query(
    "SELECT * FROM donationtable WHERE status='pending' OR status='accepted'",
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);

        // db.query(
        //   "SELECT * FROM user WHERE email= ? AND password= ? AND userType='admin'",
        //   [email, password],
        //   (err, result1) => {
        //     if (err) {
        //       console.log(err);
        //       res.status(500).send(err);
        //     } else {
        //       if (result1.length == 1) {
        //         console.log(result1[0]);mber
        //         console.log("logged in");
        //         res.status(200).send(result1[0]);
        //       } else {
        //         res.status(200).send("Wrong email/password.");
        //       }
        //     }
        //   }
        // );
      } else {
        console.log(result);
        res.status(200).send(result);
      }
    }
  );
};

const acceptDonation = (req, res) => {
  // const email = req.body.email;
  // const password = req.body.password;
  const donationID = req.body.donationID;

  db.query(
    "UPDATE donationtable SET status='accepted' WHERE donationID=?",
    [donationID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);

        // db.query(
        //   "SELECT * FROM user WHERE email= ? AND password= ? AND userType='admin'",
        //   [email, password],
        //   (err, result1) => {
        //     if (err) {
        //       console.log(err);
        //       res.status(500).send(err);
        //     } else {
        //       if (result1.length == 1) {
        //         console.log(result1[0]);mber
        //         console.log("logged in");
        //         res.status(200).send(result1[0]);
        //       } else {
        //         res.status(200).send("Wrong email/password.");
        //       }
        //     }
        //   }
        // );
      } else {
        console.log(result);
        res.status(200).send(result);
        console.log("donation accepted");
      }
    }
  );
};
module.exports = {
  getDonations,
  acceptDonation,
};
