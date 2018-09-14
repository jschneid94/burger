const express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.all(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/api/burgers", function(req, res) {
    burger.create(
        "burger_name", 
        req.body.name, 
        function(data) {
            console.log(data);
            res.json({ id: data.insertId });
        });
});

router.put("/api/burgers/:id", function(req, res) {
    var condition = `id = ${req.params.id}`;
    console.log(`Condition: ${condition}`);

    burger.update({devoured: true}, condition, function(data) {
        if (data.changedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

module.exports = router;