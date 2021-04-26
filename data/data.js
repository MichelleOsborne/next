"use strict";

// Import SQLite library.
const sqlite3 = require("sqlite3").verbose();

// The application layer uses food classes
const food = require("../food.js");

// Connect to the database.
var db = new sqlite3.Database("data/SupremeDining.db", function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log("Connected to supreme database.");
});


// Export getStudents function
exports.getMenu = function(callback) {
    // Create SQL statement
    var sql = `
        SELECT * FROM MENU`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create an array of Students
        var menu = [];
        // Loop through rows creating Student objects
        for (var row of rows) {
            // Create programme object
            
            var items = new supreme.MENU(row.item.id, row.item_name, row.Description, row.Category_id, row.price);
            // Add student to array
            menu.push(items);
        }
        // Execute callback function
        callback(menu);
    });
};
// Export getModules function
exports.getStaff = function(callback) {
    // Create SQL statement
    var sql = `SELECT * FROM STAFF`;
    // Execute query. Return all
    db.all(sql, function(err, rows) {
        // Check if error
        if (err) {
            return console.error(err.message);
        }
        // Create modules array
        var staff = [];
        // Loop through each row and create a module object
        for (var row of rows) {
            // Create module object
            var mod = new supreme.STAFF(row.Staff_id, row.Title, row.First_name, row.Surname, row.Address, row.Phone_no, row.Email);
            // Add module to array
            staff.push(mod);
        }
        // Execute callback function
        callback(staff);
    });
};
