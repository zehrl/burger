const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.selectAll((data) => {
        
        const hbsObject = {
            burger: data
        };

        console.log(hbsObject);
        res.render('index', hbsObject);
    })
});

router.post('/api/burger', ({body}, res) => {
    burger.insertOne(body.burger_name, () => {
        res.redirect('/')
    })
})

module.exports = router;