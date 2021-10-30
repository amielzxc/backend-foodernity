const db = require("../configDB.js");

const addStocks = (req, res) => {
  //func
  const categArr = req.body.categArr;
  const qtyArr = req.body.qtyArr;
  console.log(categArr);

  console.log("add stocks");
  db.query("SELECT * FROM inventorytable", (err, result) => {
    if (err) {
      console.log(result);
      console.log("error");
      res.send(err);
    } else {
      // console.log(result);
      console.log("fetched successfully");
      getAll = result;

      //console.log(getAll[0].categories);

      let categories = {};

      for (let i = 0; i < result.length; i++) {
        categories[result[i].categories] = {
          receivedDonations: result[i].receivedDonations,
          stocks: result[i].stocks,
        };
      }
      console.log(categories);
      for (let i = 0; i < categArr.length; i++) {
        console.log(categories[i].receivedDonations + " " + Number(qtyArr[i]));
        db.query(
          "UPDATE inventorytable SET receivedDonations=?, stocks=?  WHERE categories=?",
          [
            Number(categories[categArr[i]].receivedDonations) +
              Number(qtyArr[i]),
            Number(categories[categArr[i]].stocks) + Number(qtyArr[i]),
            categArr[i],
          ],
          (err, result) => {
            if (err) {
              console.log(result);
              console.log("error");
              res.send(err);
            } else {
              console.log(result);
              console.log("stocks updated and added successfully");

              // res.send("stocks updated and added successfully");
            }
          }
        );
      }
      res.send("stocks updated and added successfully");
    }
  });

  // for (var x = 0; x < categArr.length; x++) {
  //   console.log(categArr[x]);
  //   db.query(
  //     "SELECT * FROM inventorytable WHERE categories=?",
  //     [categArr[x]],
  //     (err, result) => {
  //       if (err) {
  //         console.log(result);
  //         console.log("error");
  //         res.send(err);
  //       } else {
  //         console.log(result);
  //         console.log("specific category fetched successfully");
  //         //
  //         //   res.send("specific category fetched successfully");

  //         // console.log(result[0].receivedDonations);
  //         var received = Number(result[0].receivedDonations);
  //         var stocks = Number(result[0].stocks);
  //         var newReceived = received + Number(qtyArr[x]);
  //         var newStocks = stocks + Number(qtyArr[x]);

  //         db.query(
  //           "UPDATE inventorytable SET receivedDonations= ? AND stocks= ?  WHERE categories=?",
  //           [newReceived, newStocks, categArr[x]],
  //           (err, result) => {
  //             if (err) {
  //               console.log(result);
  //               console.log("error");
  //               res.send(err);
  //             } else {
  //               console.log(result);
  //               console.log("stocks updated and added successfully");

  //               res.send("stocks updated and added successfully");
  //             }
  //           }
  //         );
  //       }
  //     }
  //   );
  // }
};

const removeStocks = (req, res) => {
  //func
  const categArr = req.body.categArr;
  const qtyArr = req.body.qtyArr;
  console.log(categArr);
  console.log(qtyArr);
  console.log("remove stocks");
  db.query("SELECT * FROM inventorytable", (err, result) => {
    if (err) {
      console.log(result);
      console.log("error");
      res.send(err);
    } else {
      // console.log(result);
      console.log("fetched successfully");
      getAll = result;

      //console.log(getAll[0].categories);

      let categories = {};

      for (let i = 0; i < result.length; i++) {
        categories[result[i].categories] = {
          donatedDonations: result[i].donatedDonations,
          stocks: result[i].stocks,
        };
      }
      console.log(categories);
      console.log(categArr);
      console.log(qtyArr);
      for (let i = 0; i < categArr.length; i++) {
        //console.log(c.receivedDonations + " " + Number(qtyArr[i]));
        db.query(
          "UPDATE inventorytable SET donatedDonations=?, stocks=?  WHERE categories=?",
          [
            Number(categories[categArr[i]].donatedDonations) +
              Number(qtyArr[i]),
            Number(categories[categArr[i]].stocks) - Number(qtyArr[i]),
            categArr[i],
          ],
          (err, result) => {
            if (err) {
              console.log(result);
              console.log("error");
              res.send(err);
            } else {
              console.log(result);
              console.log("stocks updated and removed some successfully");
            }
          }
        );
      }
    }
  });
};
// const removeStocks = (req, res) => {
//   //func

//   const categ = req.body.categ;
//   const qty = req.body.qty;

//   db.query(
//     "SELECT * FROM inventorytable WHERE categories=?",
//     [categ],
//     (err, result) => {
//       if (err) {
//         console.log(result);
//         console.log("error");
//         res.send(err);
//       } else {
//         console.log(result);
//         console.log("specific category to be subtracted fetched successfully");
//         //
//         //   res.send("specific category fetched successfully");

//         var donated = Number(result[0].donatedDonations);
//         var stocks = Number(result[0].stocks);
//         var newDonated = donated + Number(qty);
//         var newStocks = stocks - Number(qty);

//         db.query(
//           "UPDATE inventorytable SET donatedDonations=?, stocks=?  WHERE categories=?",
//           [newDonated, newStocks, categ],
//           (err, result) => {
//             if (err) {
//               console.log(result);
//               console.log("error");
//               res.send(err);
//             } else {
//               console.log(result);
//               console.log("stocks updated and subtracted successfully");

//               res.send("stocks updated and subtracted successfully");
//             }
//           }
//         );
//       }
//     }
//   );
// };

const getStocks = (req, res) => {
  //func
  console.log("get stocks");
  db.query("SELECT * FROM inventorytable", (err, result) => {
    if (err) {
      console.log(result);
      console.log("error");
      res.send(err);
    } else {
      console.log(result);
      console.log("Stocks fetched successfully");
      res.send(result);
    }
  });
};

module.exports = {
  getStocks,
  addStocks,
  removeStocks,
};
