const express = require("express");
var router = express.Router();

var burger = require("../models/burger");

// GET request to load all burgers onto the page
router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});
// POST request to post a submitted burger to the database
router.post("/api/burgers", function(req, res) {
    burger.create(
        "burger_name", 
        req.body.name, 
        function(data) {
            console.log(data);
            res.json({ id: data.insertId });
        });
});
// PUT request to update a burger to devoured
router.put("/api/burgers/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;
    console.log(`Condition: ${condition}`);
    burger.update({devoured: true}, condition, function(result) {
        if (result.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
// DELETE request to remove a burger from db
router.delete("/api/burgers/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;
    console.log(`Condition: ${condition}`);
    burger.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
        res.status(200).end();
        }
    });
})

module.exports = router;