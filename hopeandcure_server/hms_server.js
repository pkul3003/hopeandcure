#!/usr/bin/env node

var https = require('https');
var http = require('http');
var fs = require('fs');
var express = require('express');

// define constants
const tls_or_http = 'https'; // change to https when necessary
const http_port = 8082;
const https_port = 7443;
var app = express();

if (tls_or_http === 'https') {

  var options = {
    //key: fs.readFileSync('/etc/certs/localhost.key'),
    //cert: fs.readFileSync('/etc/certs/localhost.cert'),
    key: fs.readFileSync('D:\\Parag\\Personal\\hmsapp\\localhost.key'),
    cert: fs.readFileSync('D:\\Parag\\Personal\\hmsapp\\localhost.cert'),
    requestCert: false,
    rejectUnauthorized: false
  };

  var port = process.env.PORT || https_port;
  var server = https.createServer(options, app);
  var router = require('./router.js')(app);

} else if (tls_or_http === 'http') {
  var port = process.env.PORT || http_port;
  var server = http.createServer(app);
  var router = require('./router.js')(app);

}

// Now, setup server
server.listen(port, function (app) {
  console.log('Express server listening on port ' + server.address().port);
});
