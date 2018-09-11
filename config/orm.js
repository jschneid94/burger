const connection = require('./orm.js');

const orm = {
    selectAll: function(tableInput) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    insertOne: function(tableInput, colToInput, valToInsert) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        connection.query(queryString, [tableInput, colToInput, valToInsert], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    },
    updateOne: function(tableInput, colToInput, newColVal, id, idVal) {
        var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
        connection.query(queryString, [tableInput, colToInput, newColVal, id, idVal], function(err, result) {
            if (err) throw err;
            console.log(result);
        });
    }
}

module.exports = orm;