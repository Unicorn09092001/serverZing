// Path
const path = require("path");

// Express
const express = require("express");
const cors = require('cors')
const app = express();
const port = 3000;

// Config app use
app.use(express.static(path.join(__dirname, "public"))); // set static file
app.set("views", path.join(__dirname, "views")); // set root dictionary view
app.set("view engine", "ejs"); // set template view engine use ejs

// ROUTE HOME
const homeRoute = require("./routers/home");
app.use("/", cors(), homeRoute);

const top100Route = require("./routers/top100");
app.use("/top100", cors(), top100Route);

// API
const apiRoute = require("./routers/api/zing");
app.use("/api", cors(), apiRoute);

// Page Error
// app.get("*", function (req, res) {
//   res.send("nhap sai link roi ban oi !!!");
// });
app.get("/top100", function(req, res) {
  res.json({top100: "asdhjk"})
})

// Start server listen port 3000
app.listen(port, () => {
  console.log(`Start server listen at http://localhost:${port}`);
});
