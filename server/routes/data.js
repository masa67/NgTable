
'use strict';

var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
    res.status(201).send([
        { firstname: 'A', lastname: 'B', mail: 'a@a.com', 'phone-number': '1', birthdate: '01011970' },
        { firstname: 'C', lastname: 'D', mail: 'c@a.com', 'phone-number': '1', birthdate: '01011970' },
        { firstname: 'E', lastname: 'F', mail: 'e@a.com', 'phone-number': '1', birthdate: '01011970' }
    ]);
});

module.exports = router;
