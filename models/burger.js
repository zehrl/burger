const orm = require('../config/orm');

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        })
    },

    insertOne: (burger_name, cb) => {
        orm.insertOne("burgers", burger_name, (res) => {
            cb(res)
        })
    }
}

module.exports = burger;