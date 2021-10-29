const db = require("../configDB.js");

const postDonation = (req, res) => {
  //func

  const donationDonor = req.body.userID;
  const date = req.body.date;
  const donationName = req.body.donationName;
  const donationCategories = req.body.donationCategories;
  const donationQuantities = req.body.donationQuantities;
  const imgPath = req.body.imgPath;
  const status = req.body.status;

  db.query(
    "INSERT INTO donationtable(donationDonor, date,  donationName, donationCategories, donationQuantities, imgPath, status) VALUES(?,?,?,?,?,?,?)",
    [
      donationDonor,
      date,
      donationName,
      donationCategories,
      donationQuantities,
      imgPath,
      status,
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
