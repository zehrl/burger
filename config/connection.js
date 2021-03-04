require('dotenv').config();
const mysql = require("mysql");
let connection;

const createConnection = async () => {
    if (process.env.JAWSDB_URL) {
        const connection = mysql.createConnection(process.env.JAWSDB_URL);
        return connection;
    } else {
        const connection = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: process.env.DB_PASS,
            database: "burgers_db"
        })
        return connection;
    };

}

createConnection().then((connection) => {
    connection.connect();
});

module.exports = connection;