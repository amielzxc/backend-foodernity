const express = require("express");
const app = express();
// const http = require("http");
// const server = http.createServer(app);
var cors = require("cors");
require("dotenv").config();
const port = process.env.PORT;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Sira apk ng capstone");
});

const signup = require("./routes/signup.js");
const login = require("./routes/login.js");
const user = require("./routes/user.js");
const postDonation = require("./routes/postDonation.js");
const loginAdmin = require("./routes/adminLogin.js");
const donations = require("./routes/donations.js");
const stocks = require("./routes/stocks.js");
const forgotPassword = require("./routes/forgotPassword.js");
const notif = require("./routes/notif.js");
const logout = require("./routes/logout.js");
const visit = require("./routes/visit.js");

app.use("/signup", signup);
app.use("/login", login);
app.use("/user", user);
app.use("/post", postDonation);
app.use("/loginAdmin", loginAdmin);
app.use("/donations", donations);
app.use("/stocks", stocks);
app.use("/forgotPassword", forgotPassword);
app.use("/notif", notif);
app.use("/logout", logout);
app.use("/visit", visit);

app.listen(port, () => {
  console.log(`running on port: ${port}`);
  console.log("hello");
});

// module.exports = server;
