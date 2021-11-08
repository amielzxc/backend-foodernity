const db = require("../configDB.js");

const getDonations = (req, res) => {
  // const email = req.body.email;
  // const password = req.body.password;

  db.query(
    "SELECT user.fullName,user.email, donationtable.* FROM user INNER JOIN donationtable ON user.userID=donationtable.donationDonor WHERE donationtable.status='pending' OR donationtable.status='accepted'",
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
        // res.status(200).send(result);
        console.log("donation accepted");

        db.query(
          "SELECT * FROM donationtable WHERE status='pending' OR status='accepted'",
          (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).send(err);
            } else {
              console.log(result);
              res.status(200).send(result);
            }
          }
        );
      }
    }
  );
};
const receiveDonation = (req, res) => {
  // const email = req.body.email;
  // const password = req.body.password;
  const donationID = req.body.donationID;

  db.query(
    "UPDATE donationtable SET status='received' WHERE donationID=?",
    [donationID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(result);
        // res.status(200).send(result);
        console.log("donation received");

        db.query(
          "SELECT * FROM donationtable WHERE status='pending' OR status='accepted'",
          (err, result) => {
            if (err) {
              console.log(err);
              res.status(500).send(err);
            } else {
              console.log(result);
              res.status(200).send(result);
            }
          }
        );
      }
    }
  );
};

const addCallForDonations = (req, res) => {
  // const email = req.body.email;
  // const password = req.body.password;
  const title = req.body.title;
  const description = req.body.description;
  const imgPath = req.body.imgPath;
  const status = req.body.status;
  const date = req.body.date;

  db.query(
    "INSERT INTO callfordonation (title,description,imgPath,status,date)VALUES(?,?,?,?,?)",
    [title, description, imgPath, status, date],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(result);
        console.log("added call for donation");
        res.status(200).send(result);
      }
    }
  );
};

const getCallForDonations = (req, res) => {
  db.query("SELECT * FROM callfordonation", (err, result) => {
    if (err) {
      console.log(err);
      res.status(500).send(err);
    } else {
      console.log(result);
      console.log("fetch call for donation");
      res.status(200).send(result);
    }
  });
};
const getCallForDonationsUnfulfilled = (req, res) => {
  db.query(
    "SELECT * FROM callfordonation WHERE status='unfulfilled'",
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(result);
        console.log("fetch call for donation");
        res.status(200).send(result);
      }
    }
  );
};

const updateCallForDonations = (req, res) => {
  const ID = req.body.ID;
  db.query(
    "UPDATE callfordonation SET status='fulfilled' WHERE callForDonationID=?",
    [ID],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(result);
        console.log("update call for donation");
        res.status(200).send(result);
      }
    }
  );
};

const distributeDonations = (req, res) => {
  // const email = req.body.email;
  // const password = req.body.password;
  const donationImage = req.body.donationImage;
  const donationCategory = req.body.donationCategory;
  const donationQuantity = req.body.donationQuantity;
  const donationRecipient = req.body.donationRecipient;
  const recipientLocation = req.body.recipientLocation;
  const donationRemarks = req.body.donationRemarks;
  const date = req.body.date;

  db.query(
    "INSERT INTO distributeddonations (donationImage,donationCategory,donationQuantity,donationRecipient,recipientLocation,donationRemarks,date)VALUES(?,?,?,?,?,?,?)",
    [
      donationImage,
      donationCategory,
      donationQuantity,
      donationRecipient,
      recipientLocation,
      donationRemarks,
      date,
    ],
    (err, result) => {
      if (err) {
        console.log(err);
        res.status(500).send(err);
      } else {
        console.log(result);
        console.log("donation distributed");
        res.status(200).send(result);
      }
    }
  );
};

const getDistributedDonations = (req, res) => {
  // db.connect();
  db.query("SELECT * FROM distributeddonations", (err, result) => {
    if (err) {
      console.log(result);
      console.log("error");
      res.send(err);
    } else {
      console.log(result);
      console.log("Distributed donations fetched successfully!");
      //
      res.send(result);
    }
  });
};

const getDonationsFor = (req, res) => {
  const donorID = req.body.donorID;
  // db.connect();
  db.query(
    "SELECT * FROM donationtable WHERE donationDonor=?",
    [donorID],
    (err, result) => {
      if (err) {
        console.log(result);
        console.log("error");
        res.send(err);
      } else {
        console.log(result);
        console.log("donations fetched successfully!");
        //
        res.send(result);
      }
    }
  );
};

module.exports = {
  getDonations,
  acceptDonation,
  receiveDonation,
  addCallForDonations,
  getCallForDonations,
  updateCallForDonations,
  distributeDonations,
  getCallForDonationsUnfulfilled,
  getDistributedDonations,
  getDonationsFor,
};
