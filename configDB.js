const e = require("express");
const mysql = require("mysql");
require("dotenv").config();

const db = mysql.createConnection({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
});

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
