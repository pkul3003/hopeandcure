#!/usr/bin/env node

var https = require('https');
var fs = require('fs');
var express = require('express');

// Instantiate our server
//var server = restify.createServer();

var options = {
  key: fs.readFileSync( '/etc/certs/localhost.key' ),
  cert: fs.readFileSync( '/etc/certs/localhost.cert' ),
  requestCert: false,
  rejectUnauthorized: false
};


var app = express();
var port = process.env.PORT || 7443;
var server = https.createServer( options, app );
var router = require('./router.js')(app);

// Now, setup server
//setup_server(server);

server.listen( port, function (app) {
  console.log( 'Express server listening on port ' + server.address().port );
} );