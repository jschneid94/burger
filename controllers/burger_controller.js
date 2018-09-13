const express = require("express");
var router = express.Router();

var burger = require("../models/burger");

router.get("/", function(req, res) {
    burger.selectAll(function(data) {
      var hbsObject = {
        burgers: data
      };
      console.log(hbsObject);
      res.render("index", hbsObject);
    });
});

router.post("/", function(req, res) {
    burger.insertOne("burger_name", 
        [req.body.name], 
        function(data) {
            res.json({ id: data.insertId });
        });
});

module.exports = router;