const express = require('express');
const router = express.Router();

const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        console.log(data);
        res.render('index');
    })
});

module.exports = router;