const connection = require('./connection');

function objToSql(ob) {
    var arr = [];

    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
        var value = ob[key];
        // check to skip hidden properties
        if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
            value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
        }
    }

    // translate array of strings to a single comma-separated string
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
        var queryString = "UPDATE ?? SET ? WHERE ?";
        objColVals = objToSql(objColVals);
        connection.query(queryString, [tableInput, objColVals, condition], function(err, result) {
            if (err) throw err;
            cb(result);
        });
    }
}

module.exports = orm;