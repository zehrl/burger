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
    insertOne: (table, burgerName, cb) => {
        connection.query(
            `INSERT INTO ${table} (burger_name) VALUES ("${burgerName.toString()}")`,
            (err, result) => {
                if (err) { throw (err) }
                cb(result);
            })
    },

    // updateOne();
    updateOne: (table, burgerId, cb) => {
        connection.query(
            `UPDATE ${table} SET devoured = true WHERE id = "${burgerId}"`,
            (err, result) => {
                if (err) { throw (err) }
                cb(result);
            })
    },

    // deleteAll();
    deleteAll: (table, column, value, cb) => {
        connection.query(
            `DELETE FROM ${table} WHERE ${column} = ${value}`,
            (err, result) => {
                if (err) { throw (err) }
                cb(result);
            })
    }
}

module.exports = orm;