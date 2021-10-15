const e = require("express");
const mysql = require("mysql");
require("dotenv").config();

// const db = mysql.createConnection({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DATABASE_NAME,
// });

var self = this;

var db = mysql.createPool({
  connectionLimit: 100,
  waitForConnections: true,
  queueLimit: 0,
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE_NAME,
  debug: true,
  wait_timeout: 28800,
  connect_timeout: 10,
});

self.configureExpress(pool);

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
