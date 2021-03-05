const orm = require('../config/orm');

const burger = {
    selectAll: (cb) => {
        orm.selectAll("burgers", (res) => {
            cb(res);
        })
    },

    insertOne: (burger_name, cb) => {
        orm.insertOne("burgers", burger_name, (result) => {
            cb(result)
        })
    },

    updateOne: (burgerId, cb) => {
        orm.updateOne("burgers", burgerId, (result) => {
            cb(result)
        })
    },

    deleteDevoured: (column, value, cb) => {
        orm.deleteAll("burgers", column, value, (result) => {
            cb(result)
        })
    }
}

module.exports = burger;