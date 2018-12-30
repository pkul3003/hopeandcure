'use strict'
let stubResponse = require('../../responsestubs/StubResponse.js');
let config = require("../../config.js");
let globalsqlFunctions = require('../../mysql-functions/mysqlFunctions.js');
let mysqlFunctions = require('../dao/sqlFunctions.js');
var express = require('express');
var bodyParser = require("body-parser");

let restService = express();
restService.use(bodyParser.json());

// create a new patient
async function apiHandlerCreatePatient(req,res){
	console.log("Entering apiHandlerCreatePatient========>");

    let patientResponse = await mysqlFunctions.createNewPatient(req);
    console.log("inside apiHandlerCreatePatient:  ", patientResponse);

		if (patientResponse === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error in creating the new patient"
			}
  		console.log("Exiting apiHandlerCreatePatient========>");
		return res.send(returnJsonObj);
		} else {
			if (patientResponse.msgtype === "success") {
				req.body.patientAddress.UHID = patientResponse.UHID;
				let addressResponse = await mysqlFunctions.addPatientAddress(req);
				if (addressResponse === false || addressResponse.msgtype !== "success") {
					patientResponse.msgtype = "info";
					patientResponse.message = "Patient created successfully but there was an error in adding address";
					console.log("Exiting apiHandlerCreatePatient========>");
					return res.json(patientResponse);
				}
			}
		}
  	console.log("Exiting apiHandlerCreatePatient========>");
	return res.json(patientResponse);
}

// update existing patient details
async function apiHandlerUpdatePatientDetails(req,res){
	console.log("Entering apiHandlerUpdatePatientDetails========>");

    let response = await mysqlFunctions.updatePatientDetails(req);
    console.log("inside apiHandlerUpdatePatientDetails:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error in updating the patient details"
			}
		
  		console.log("Exiting apiHandlerUpdatePatientDetails========>");
		return res.send(returnJsonObj);
		}
		else {
			if (response.msgtype === "success") {
				req.body.patientAddress.UHID = response.UHID;
				let addressResponse = await mysqlFunctions.updatePatientAddress(req);
				if (addressResponse === false || addressResponse.msgtype !== "success") {
					response.msgtype = "info";
					response.message = "Patient information updated successfully but there was an error in updating address";
					console.log("Exiting apiHandlerUpdatePatientDetails========>");
					return res.json(response);
				}
			}
		}
  	console.log("Exiting apiHandlerUpdatePatientDetails========>");
	return res.json(response);
}


// add patient Address
async function apiHandlerAddPatientAddress(req, res) {
	console.log("Entering apiHandlerAddPatientAddress========>");

    let response = await mysqlFunctions.addPatientAddress(req);
    console.log("inside apiHandlerAddPatientAddress:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is adding patient address"
			}
  	console.log("Exiting apiHandlerAddPatientAddress========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerAddPatientAddress========>");
		return res.json(response);
}

// update patient Address
async function apiHandlerUpdatePatientAddress(req, res) {
	console.log("Entering apiHandlerUpdatePatientAddress========>");

    let response = await mysqlFunctions.updatePatientAddress(req);
    console.log("inside apiHandlerUpdatePatientAddress:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is updating patient address"
			}
  	console.log("Exiting apiHandlerUpdatePatientAddress========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerUpdatePatientAddress========>");
		return res.json(response);
}


// find all patients based on either UHID, first_name, last_name or mobile
async function apiHandlerSearchPatient(req, res) {
	console.log("Entering apiHandlerSearchPatient========>");
	let response = await mysqlFunctions.retrievePatients(req);
	console.log("inside apiHandlerSearchPatient:  ", response);
	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "There was an error is searching the patient"
		}
		return res.send(returnJsonObj);
	}
console.log("Exiting apiHandlerSearchPatient========>");
return res.send(JSON.parse(response));
}

// added by Parag on 30 Dec 2018
async function apiHandlerRetrievPatientAddressDetails(req, res) {
	console.log("Entering apiHandlerRetrievPatientAddressDetails========>");
	let response = await mysqlFunctions.retrievePatientAndAddressDetails(req);
	console.log("inside apiHandlerRetrievPatientAddressDetails:  ", response);
	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "There was an error is searching the patient and address details"
		}
		return res.send(returnJsonObj);
	}
	console.log("Exiting apiHandlerRetrievPatientAddressDetails========>");
	return res.send(JSON.parse(response));
}


exports.apiHandlerCreatePatient = apiHandlerCreatePatient;
exports.apiHandlerAddPatientAddress = apiHandlerAddPatientAddress;
exports.apiHandlerSearchPatient = apiHandlerSearchPatient;
exports.apiHandlerUpdatePatientDetails = apiHandlerUpdatePatientDetails;
exports.apiHandlerRetrievPatientAddressDetails = apiHandlerRetrievPatientAddressDetails;