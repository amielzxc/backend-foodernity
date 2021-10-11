const mysql = require("mysql");

const db = mysql.createConnection({
  user: "root",
  host: "localhost",
  password: "admin",
  database: "capstone2",
});

db.connect();
module.exports = db;

// db.query(
//     "INSERT INTO users(firstname,lastname)VALUES(?,?)",
//     [firstname, lastname],
//     (err, res) => {
//       if (err) {
//         console.log(err);
//       }
//       console.log(res);
//     }
//   );
