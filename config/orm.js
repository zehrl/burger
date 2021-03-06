const connection = require("./connection");

const orm = {

    selectAll: (table, cb) => {
        connection.query(
            `SELECT * FROM ${table};`,
            (err, res) => {
                if (err) { throw (err) }
                cb(res);
            })
    },

    insertOne: (table, burgerName, cb) => {
        connection.query(
            `INSERT INTO ${table} (burger_name) VALUES ("${burgerName.toString()}")`,
            (err, result) => {
                if (err) { throw (err) }
                cb(result);
            })
    },

    updateOne: (table, burgerId, cb) => {
        connection.query(
            `UPDATE ${table} SET devoured = true WHERE id = "${burgerId}"`,
            (err, result) => {
                if (err) { throw (err) }
                cb(result);
            })
    },

    updateAll: (table, whereColumn, whereValue, columnToUpdate, newValue, cb) => {
        connection.query(
            `UPDATE ${table} SET ${columnToUpdate} = ${newValue} WHERE ${whereColumn} = ${whereValue}`,
            (err, result) => {
                if (err) { throw (err) }
                cb(result);
            })
    }
}

module.exports = orm;