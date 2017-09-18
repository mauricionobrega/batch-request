// app init
var express = require("express");
var expressBatch = require("express-batch");
var app = express();

// mount batch middeleware
app.use("/api/batch", expressBatch(app));

// mount ordinary API endpoints
app.get("/api/constants/pi", function apiUserHandler(req, res) {
  console.log("--> /api/constants/pi");
  res.send(Math.PI);
});

app.get("/api/users/:id", function apiUserHandler(req, res) {
  console.log("--> /api/users/:id");
  res.json({
      id: req.params.id,
      name: "Alice"
  });
});

// start the app
app.listen(3000);