const orm = require('../config/orm.js');

const burger = {
    all: function(cb) {
        orm.selectAll("burgers", function(res) {
            cb(res);
        });
    },
    create: function(col, val, cb) {
        orm.insertOne("burgers", col, val, function(res) {
            cb(res);
        });
    },
    update: function(col, val, condition, cb) {
        orm.updateOne("burgers", col, val, condition, function(res) {
            cb(res);
        });
    }
}

module.exports = burger;