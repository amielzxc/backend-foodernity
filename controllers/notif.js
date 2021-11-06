const db = require("../configDB.js");

const notifyAccept = (req, res) => {
  const donationID = req.body.donationID;
  const donorEmail = req.body.donorEmail;
  const donationName = req.body.donationName;
  const notificationMessage = `Your donation "${donationName}" has been accepted. Please do prepare to send it right away. Thank you!`;

  // db.connect();
  db.query(
    "INSERT INTO notificationtable(donationID, donorEmail, donationName, notificationMessage) VALUES(?,?,?,?)",
    [donationID, donorEmail, donationName, notificationMessage],
    (err, result) => {
      if (err) {
        console.log(result);
        console.log("error");
        res.send(err);
      } else {
        console.log(result);
        console.log("new notification accept is successfully added");
        //
        res.send("new notification accept is successfully added");
      }
    }
  );
};

const notifyReceive = (req, res) => {
  const donationID = req.body.donationID;
  const donorEmail = req.body.donorEmail;
  const donationName = req.body.donationName;
  const notificationMessage = `Your donation "${donationName}" has been received. Thank you for donating!`;

  // db.connect();
  db.query(
    "INSERT INTO notificationtable(donationID, donorEmail, donationName, notificationMessage) VALUES(?,?,?,?)",
    [donationID, donorEmail, donationName, notificationMessage],
    (err, result) => {
      if (err) {
        console.log(result);
        console.log("error");
        res.send(err);
      } else {
        console.log(result);
        console.log("new notification receive is successfully added");
        //
        res.send("new notification receive is successfully added");
      }
    }
  );
};

const getNotifsFor = (req, res) => {
  const donorEmail = req.body.donorEmail;

  // db.connect();
  db.query(
    "SELECT * FROM notificationtable WHERE donorEmail=?",
    [donorEmail],
    (err, result) => {
      if (err) {
        console.log(result);
        console.log("error");
        res.send(err);
      } else {
        console.log(result);
        console.log(
          "Notifications for " + donorEmail + " has been fetched successfully."
        );
        //
        res.send(result);
      }
    }
  );
};

module.exports = {
  notifyReceive,
  notifyAccept,
  getNotifsFor,
};
