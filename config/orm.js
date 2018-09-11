const connection = require('./orm.js');

const orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function() {

    },
    updateOne: function() {

    }
}

module.exports = orm;