const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const port = process.env.PORT || 3001;
var cors = require("cors");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Hello from Stack Over Flowers");
});

const signup = require("./routes/signup.js");
// const listingItem = require("./routes/listingItem.js");
// const user = require("./routes/user.js");
// const message = require("./routes/message.js");
// const login = require("./routes/login.js");

app.use("/signup", signup);
// app.use("/user", user);
// app.use("/message", message);
// app.use("/", login);

server.listen(port, "0.0.0.0", () => {
  console.log(`running on port: ${port}`);
});

module.exports = server;
