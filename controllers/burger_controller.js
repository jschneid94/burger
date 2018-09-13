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
    burger.create("burger_name", 
        [req.body.name], 
        function(data) {
            res.json({ id: data.insertId });
        });
});

router.put("/", function(req, res) {
    burger.update("")
})

module.exports = router;