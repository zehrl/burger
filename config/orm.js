const connection = require("./connection");

const orm = {

    // selectAll();
    selectAll: (table, cb) => {
        connection.query(
            `SELECT * FROM ${table};`,
            (err, res) => {
                if (err) { throw (err) }
                cb(res);
            })
    },

    // insertOne();
    insertOne: (table, burger_name, cb) => {
        connection.query(
            `INSERT INTO ${table} (burger_name) VALUES ("${burger_name.toString()}")`,
            (err, result) => {
                if (err) { throw (err) }
                cb(result);
            })
    }

    // updateOne();

    // deleteConsumed();

}

module.exports = orm;