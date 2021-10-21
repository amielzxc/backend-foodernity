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
  res.send("Hello from Stack Over Flowers");
});

const signup = require("./routes/signup.js");
const login = require("./routes/login.js");
const user = require("./routes/user.js");
// const listingItem = require("./routes/listingItem.js");
// const message = require("./routes/message.js");
// const login = require("./routes/login.js");

app.use("/signup", signup);
app.use("/login", login);
app.use("/user", user);
// app.use("/message", message);
// app.use("/", login);

app.listen(port, () => {
  console.log(`running on port: ${port}`);
  console.log("hello");
});

// module.exports = server;
