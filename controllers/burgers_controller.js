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

router.post('/api/burger', ({ body }, res) => {
    burger.insertOne(body.burgerName, (result) => {
        res.json(result);
    });
});

router.put('/api/burger/devour/:id', (req, res) => {
    burger.updateOne(req.params.id, (result) => {
        res.json(result);
    })
})

module.exports = router;