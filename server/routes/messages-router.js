const express = require('express');
let router = express.Router();
const pool = require('../module/pool');

router.get('/', (req, res) => {
    pool.query(`SELECT * FROM "messages";`)
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            res.send(500);
            console.log('error', error);
        });//end GET query
});//end GET call server side

router.post('/', (req, res) => {
    console.log(req.body);
    
    pool.query(`INSERT INTO "messages" ("name","message")
    VALUES ($1, $2);`, [req.body.name, req.body.message])
        .then((results) => {
            res.send(results.rows);
        }).catch((error) => {
            console.log('Error POSTING message from PostgreSQL', error);
            res.sendStatus(500);
        })//end POST query
});//end POST call server side


module.exports = router;
