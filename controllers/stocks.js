const db = require("../configDB.js");

const addStocks = (req, res) => {
  //func
  const categArr = req.body.categArr;
  const qtyArr = req.body.qtyArr;
  console.log(categArr);
  for (var x = 0; x < categArr.length; x++) {
    console.log(categArr[x]);
    db.query(
      "SELECT * FROM inventorytable WHERE categories=?",
      [categArr[x]],
      (err, result) => {
        if (err) {
          console.log(result);
          console.log("error");
          res.send(err);
        } else {
          console.log(result);
          console.log("specific category fetched successfully");
          //
          //   res.send("specific category fetched successfully");

          // console.log(result[0].receivedDonations);
          var received = Number(result[0].receivedDonations);
          var stocks = Number(result[0].stocks);
          var newReceived = received + qtyArr[x];
          var newStocks = stocks + qtyArr[x];

          db.query(
            "UPDATE inventorytable SET receivedDonations= ? AND stocks= ?  WHERE categories=?",
            [newReceived, newStocks, categArr[x]],
            (err, result) => {
              if (err) {
                console.log(result);
                console.log("error");
                res.send(err);
              } else {
                console.log(result);
                console.log("stocks updated and added successfully");

                res.send("stocks updated and added successfully");
              }
            }
          );
        }
      }
    );
  }
};

// const addStocks = (req, res) => {
//   //func
//   const categArr = JSON.parse(req.body.categArr);
//   const qtyArr = JSON.parse(req.body.qtyArr);

//   for (var x = 0; x < categArr.length; x++) {
//     db.query(
//       "SELECT * FROM inventorytable WHERE categories=?",
//       [categArr[x]],
//       (err, result) => {
//         if (err) {
//           console.log(result);
//           console.log("error");
//           res.send(err);
//         } else {
//           console.log(result);
//           console.log("specific category fetched successfully");
//           //
//           //   res.send("specific category fetched successfully");

//           var received = result[0].data.receivedDonations;
//           var stocks = result[0].data.stocks;
//           var newReceived = received + Number(qtyArr[x]);
//           var newStocks = stocks + Number(qtyArr[x]);

//           db.query(
//             "UPDATE inventorytable SET receivedDonations=? AND stocks=?  WHERE categories=?",
//             [newReceived, newStocks, categArr[x]],
//             (err, result) => {
//               if (err) {
//                 console.log(result);
//                 console.log("error");
//                 res.send(err);
//               } else {
//                 console.log(result);
//                 console.log("stocks updated and added successfully");

//                 res.send("stocks updated and added successfully");
//               }
//             }
//           );
//         }
//       }
//     );
//   }
// };

const removeStocks = (req, res) => {
  //func
  const categ = req.body.categ;
  const qty = req.body.qty;

  db.query(
    "SELECT * FROM inventorytable WHERE categories=?",
    [categ],
    (err, result) => {
      if (err) {
        console.log(result);
        console.log("error");
        res.send(err);
      } else {
        console.log(result);
        console.log("specific category to be subtracted fetched successfully");
        //
        //   res.send("specific category fetched successfully");

        var donated = Number(result[0].donatedDonations);
        var stocks = Number(result[0].stocks);
        var newDonated = donated + Number(qty);
        var newStocks = stocks - Number(qty);

        db.query(
          "UPDATE inventorytable SET donatedDonations=? AND stocks=?  WHERE categories=?",
          [newDonated, newStocks, categ],
          (err, result) => {
            if (err) {
              console.log(result);
              console.log("error");
              res.send(err);
            } else {
              console.log(result);
              console.log("stocks updated and subtracted successfully");

              res.send("stocks updated and subtracted successfully");
            }
          }
        );
      }
    }
  );
};

const getStocks = (req, res) => {
  //func

  db.query("SELECT * FROM inventorytable", (err, result) => {
    if (err) {
      console.log(result);
      console.log("error");
      res.send(err);
    } else {
      console.log(result);
      console.log("Stocks fetched successfully");
    }
  });
};

module.exports = {
  getStocks,
  addStocks,
  removeStocks,
};
