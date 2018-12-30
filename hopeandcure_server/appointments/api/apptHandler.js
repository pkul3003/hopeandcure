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

// this function has an orchestration logic for creating appointments and add patient progress status
async function apiHandlerCreateAppointment(req, res) {
  console.log("Entering apiHandlerCreateAppointment...");

  let result = await mysqlFunctions.createAppointment(req);
  console.log("inside apiHandlerCreateAppointment, appointment creation result:  ", result);

  if (result === "ER_DUP_ENTRY"){
    var returnJsonObj = {
      "msgtype" : "info",
      "message": "appointment already exists for the patient for the given day."
    }
    console.log("Exiting createAppointment...");
    return res.send(returnJsonObj);
  }
  if (result === true) {
    let status = await mysqlFunctions.addPatientProgressStatus(req);
    console.log("after appointment creation, print progress status:  ", status);
    if (status === true) {

      var returnJsonObj = {
        "msgtype" : "success",
        "message": "appointment created and patient progress status added successfully"
      }
      console.log("Exiting createAppointment...");
      return res.send(returnJsonObj);;
    } else {
      var returnJsonObj = {
        "msgtype" : "info",
        "message": "appointment created but patient progress status update failed. please check the server logs"
      }
      console.log("appointment created but patient progress status update failed. please check the server logs");
      console.log("Exiting createAppointment...");
      return res.send(returnJsonObj);;
    }
  } else if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is creating the appointment."
    }
    console.log("Exiting apiHandlerForAppointments========>");
    return res.send(returnJsonObj);
  }
}

async function apiHandlerUpdatePatientProgressStatus(req, res) {
  console.log("Entering apiHandlerUpdatePatientProgressStatus========>");
	let response = await mysqlFunctions.updatePatientProgressStatus(req);
	console.log("inside apiHandlerUpdatePatientProgressStatus:  ", response);

	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "There was an error in updating the patient progress status"
		}
		console.log("Exiting apiHandlerUpdatePatientProgressStatus========>");
		return res.send(returnJsonObj);
	}

	var returnJsonObj = {
		"msgtype" : "success",
		"message": "patient progress status updated successfully"
	  }
	  console.log("Exiting apiHandlerUpdatePatientProgressStatus========>");
	  return res.json(returnJsonObj);
}
// api to update appoinntments
async function apiHandlerUpdateAppointments(req, res) {
  console.log("Entering apiHandlerUpdateAppointments========>");
	let response = await mysqlFunctions.updateAppointment(req);
	console.log("inside apiHandlerUpdateAppointments:  ", response);

	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "There was an error in updating the appointment"
		}
		console.log("Exiting apiHandlerUpdateAppointments========>");
		return res.send(returnJsonObj);
	}

	var returnJsonObj = {
		"msgtype" : "success",
		"message": "patient appointment updated successfully"
	  }
	  console.log("Exiting apiHandlerUpdateAppointments========>");
	  return res.json(returnJsonObj);
}
// find all appointments based on either UHID, first_name, last_name or mobile
async function apiHandlerSearchAppointment(req, res) {
	console.log("Entering apiHandlerSearchAppointment========>");
	let response = await mysqlFunctions.searchAppointment(req);
	console.log("inside apiHandlerSearchAppointment:  ", response);
	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "There was an error is searching the appointment"
		}
		return res.send(returnJsonObj);
	}
console.log("Exiting apiHandlerSearchAppointment========>");
return res.send(JSON.parse(response));
}

//exporing all apiHandler functions
exports.apiHandlerForAppointments = apiHandlerForAppointments;
exports.apiHandlerCreateAppointment = apiHandlerCreateAppointment;
exports.apiHandlerForAppointmentsByDate = apiHandlerForAppointmentsByDate;
exports.apiHandlerUpdatePatientProgressStatus = apiHandlerUpdatePatientProgressStatus;
exports.apiHandlerUpdateAppointments=apiHandlerUpdateAppointments;
exports.apiHandlerSearchAppointment=apiHandlerSearchAppointment;