"use strict";

// The application layer uses student classes
const food= require("../food.js");

// The application layer talks to the data layer
const data = require("../data/data.js");

// Import express library.
const express = require("express");

// Create express application
var app = express();

// Add static files location
app.use(express.static("static"));

// Add /module endpoint
app.get("/MENU/:Item_id", function(req, res) {
  // Return "Module <code>"
  res.send("MENU " + req.params.code);
});

// Add /modules endpoint
app.get("/MENUS", function(req, res) {

data.getMenu(function(menu) {
  res.json(menu);
});
});

// Add /programme endpoint
app.get("/STAFF/:Staff_id", function(req, res) {
  // Return "Programme <code>"
  res.send("STAFF " + req.params.code);
});

// Add /programmes endpoint
app.get("/STAFF", function(req, res) {
  // Return "All programmes"
  data.getStaff(function(staff) {
    res.json(staff);
});
});


// Start listening on port 3000
app.listen(3000, function(err) {
  if (err) {
    return console.error(err.message);
  }
  console.log("Server started.");
});