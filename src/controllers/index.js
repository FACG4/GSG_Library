const express = require('express');

const router = express.Router();


const login = require('./login.js');
const reserv = require('./reserv.js');


router.get('/login', login.get);

router.post('/login', login.post);


router.get('/reserv', reserv.get);

router.post('/reserv', reserv.post);

module.exports = router;
