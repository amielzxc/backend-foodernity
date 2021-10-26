const db = require("../configDB.js");

const postDonation = (req, res) => {
  //func

  const donationDonor = req.body.donationDonor;
  const date = req.body.date;
  const time = req.body.time;
  const donationName = req.body.donationName;
  const donationCategories = req.body.donationCategories;
  const donationQuantities = req.body.donationQuantities;
  const imgPath = req.body.imgPath;

  db.query(
    "INSERT INTO donationtable(donationDonor, date, time, donationName, donationCategories, donationQuantities, imgPath, status) VALUES(?,?,?,?,?,?,?,?)",
    [
      donationDonor,
      date,
      time,
      donationName,
      donationCategories,
      donationQuantities,
      imgPath,
      "pending",
    ],
    (err, result) => {
      if (err) {
        console.log(result);
        console.log("error");
        res.send(err);
      } else {
        console.log(result);
        console.log("new donation added successfully");
        //
        res.send("new donation added successfully");
      }
    }
  );
};

module.exports = {
  postDonation,
};
