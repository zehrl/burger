const express = require('express');
const router = express.Router();
const burger = require('../models/burger');

router.get('/', (req, res) => {
    burger.selectAll((data) => {

        const consumedCount = data.filter((entry) => {
            return entry.devoured;
        }).length

        const hbsObject = {
            burger: data,
            consumedCount
        };

        // console.log(hbsObject);
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

router.put('/api/burger/devoured', (req, res) => {
    burger.hideDevoured("devoured", "true", "display", "false", (result) => {
        res.json(result);
    })
})

module.exports = router;