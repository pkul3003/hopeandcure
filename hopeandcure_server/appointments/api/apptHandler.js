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
      "msgtype" : "error",
			"message": "There was an error is fetching appointments"
		}
		return res.send(returnJsonObj);
	}
	console.log("Exiting apiHandlerForAppointments========>");
	return res.send(JSON.parse(result));
}

async function apiHandlerForAppointmentsByDate(req, res) {
  console.log("Entering apiHandlerForAppointmentsByDate...");

  let result = await mysqlFunctions.retrieveAppointmentsByDate(req);
  console.log("inside apiHandlerForAppointmentsByDate:  ", result);

  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching appointments"
    }
    return res.send(returnJsonObj);
  }
  console.log("Exiting apiHandlerForAppointmentsByDate========>");
  return res.send(JSON.parse(result));
}
async function apiHandlerCreateAppointment(req, res) {
  console.log("Entering apiHandlerCreateAppointment...");

  let result = await mysqlFunctions.createAppointment(req);
  console.log("inside apiHandlerCreateAppointment:  ", result);

  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is creating the appointment"
    }
    return res.send(returnJsonObj);
  }
  console.log("Exiting apiHandlerForAppointments========>");
  return res.send(result);
}


//exporing all apiHandler functions
exports.apiHandlerForAppointments = apiHandlerForAppointments;
exports.apiHandlerCreateAppointment = apiHandlerCreateAppointment;
exports.apiHandlerForAppointmentsByDate = apiHandlerForAppointmentsByDate;
