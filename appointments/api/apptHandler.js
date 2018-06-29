'use strict'
let stubResponse = require('../../responsestubs/StubResponse.js');
let config = require("../../config.js");
let globalsqlFunctions = require('../../mysql-functions/mysqlFunctions.js');
let mysqlFunctions = require('../dao/sqlfunctions.js');
var express = require('express');
var bodyParser = require("body-parser");


async function apiHandlerForAppointments(req, res) {
  console.log("Entering apiHandlerForAppointments...");

	let result = await mysqlFunctions.retrieveAppointments(req);
	console.log("inside apiHandlerForAppointments:  ", result);

	if (result === false) {
		var returnJsonObj = {
			"message": "There was an error is fetching appointments"
		}
		res.send(returnJsonObj);
	}
	console.log("Exiting apiHandlerForAppointments========>");
	res.send(JSON.parse(result));
}

async function apiHandlerCreateAppointment(req, res) {
  console.log("Entering apiHandlerCreateAppointment...");

  let result = await mysqlFunctions.createAppointment(req);
  console.log("inside apiHandlerCreateAppointment:  ", result);

  if (result === false) {
    var returnJsonObj = {
      "message": "There was an error is creating the appointment"
    }
    res.send(returnJsonObj);
  }
  var returnJsonObj = {
    "message": "appointment created successfully"
  }
  console.log("Exiting apiHandlerForAppointments========>");
  res.send(returnJsonObj);
}


//exporing all apiHandler functions
exports.apiHandlerForAppointments = apiHandlerForAppointments;
exports.apiHandlerCreateAppointment = apiHandlerCreateAppointment;
