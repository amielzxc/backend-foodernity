const db = require("../configDB.js");

const addVisitCount = (req, res) => {
  //func
  const date = req.body.date;
  db.query(
    "INSERT INTO visit(dateOfVisit) VALUES(?)",
    [date],
    (err, result) => {
      if (err) {
        console.log(result);
        console.log("error");
        res.send(err);
      } else {
        console.log(result);
        console.log("new visit added");
        //

        res.send("new visit added");
      }
    }
  );
};
const getVisitCount = (req, res) => {
  //func

  db.query(
    "SELECT * FROM visit WHERE visitID=(SELECT max(visitID) FROM visit)",
    (err, result) => {
      if (err) {
        console.log(result);
        console.log("error");
        res.send(err);
      } else {
        console.log(result);
        console.log("Visit count fetched successfully");
        //

        res.send(result);
      }
    }
  );
};

module.exports = {
  addVisitCount,
  getVisitCount,
};
