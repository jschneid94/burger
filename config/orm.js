const connection = require('./connection');

function objToSql(ob) {
    var arr = [];

    // Loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // Check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
        // If string with spaces, add quotations (Long Burger Name => 'Long Burger Name')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
        arr.push(key + "=" + value);
        }
    }

    // Translate array of strings to a single comma-separated string
    return arr.toString();
}

const orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableInput], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function(tableInput, colToInput, valToInsert, cb) {
        var queryString = "INSERT INTO ?? (??) VALUES (?)";
        colToInput = colToInput.toString();
        connection.query(queryString, [tableInput, colToInput, valToInsert], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function(tableInput, objColVals, condition, cb) {
        var queryString = `UPDATE ${tableInput} SET ${objToSql(objColVals)} WHERE ${condition}`;
        console.log(objColVals);
        connection.query(queryString, function(err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    deleteOne: function(tableInput, condition, cb) {
        var queryString = `DELETE FROM ${tableInput} WHERE ${condition}`;
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        });
      }
}

module.exports = orm;