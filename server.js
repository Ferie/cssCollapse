var express = require('express');
var localhost = express();
var dotenv = require('dotenv');
var bodyParser = require('body-parser');

//*** Configuration ***//
// Set your main file here
var mainFile = '/index.html';

// Set your available localhost port here
var localhostPort = 9000;

// Get cofiguration file from .env (if needed)
dotenv.load();

// Parse incoming request bodies in a middleware before your handlers (if needed)
localhost.use(bodyParser.json());

// Start the server and manage a mod rewrite that forward to specified page
localhost.use(express.static(__dirname));

localhost.get(/.*/, function (req, res) {
    res.sendFile(__dirname + mainFile);
});

localhost.listen(localhostPort, function () {
    console.log("Start surfing at localhost:%d", localhostPort);
});
