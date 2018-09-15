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
    update: function(objColVals, condition, cb) {
        orm.updateOne("burgers", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.deleteOne("burgers", condition, function(res) {
            cb(res)
        });
    }
};

module.exports = burger;