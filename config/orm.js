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
    }

    // insertOne();

    // updateOne();

}

module.exports = orm;