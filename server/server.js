
'use strict';

var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');

var data = require('./routes/data');

var app = express();
var server = require('http').Server(app);

app.use(bodyParser.json());

/*jslint nomen: true*/
app.use('/', express.static(path.join(__dirname, '../client/views')));
app.use('/css', express.static(path.join(__dirname, '../client/css')));
app.use('/js', express.static(path.join(__dirname, '../client/js')));
app.use('/vendor', express.static(path.join(__dirname, '../node_modules')));
app.use('/ng-table', express.static(path.join(__dirname, '../ng-table')));

app.use('/data', data);

/*jslint unparam: true */
app.get('*', function (req, res) {
    res.sendFile(path.join(__dirname, '../client/views/index.html'));
});

server.listen(3001);
