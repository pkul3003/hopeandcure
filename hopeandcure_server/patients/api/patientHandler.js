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

    let response = await mysqlFunctions.createNewPatient(req);
    console.log("inside apiHandlerCreatePatient:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error in creating the new patient"
			}
  		console.log("Exiting apiHandlerCreatePatient========>");
		return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerCreatePatient========>");
	return res.json(response);
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

async function apiHandlerAddMedicalFacts(req, res) {
		console.log("Entering apiHandlerAddMedicalFacts========>");
		let response = await mysqlFunctions.createPatientMedicalFacts(req);
    console.log("inside apiHandlerAddMedicalFacts:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is adding medical facts for the patient"
			}
			console.log("Exiting apiHandlerAddMedicalFacts========>");
			return res.send(returnJsonObj);
		}
		console.log("Exiting apiHandlerAddMedicalFacts========>");
		return res.json(response);
}

async function apiHandlerUpdateMedicalFacts(req, res) {
		console.log("Entering apiHandlerUpdateMedicalFacts========>");
		let response = await mysqlFunctions.updatePatientMedicalFacts(req);
    console.log("inside apiHandlerUpdateMedicalFacts:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is updating medical facts for the patient"
			}
			console.log("Exiting apiHandlerUpdateMedicalFacts========>");
			return res.send(returnJsonObj);
		}
		console.log("Exiting apiHandlerUpdateMedicalFacts========>");
		return res.json(response);
}

async function apiHandlerRetrieveMedicalFacts(req,res) {
	console.log("Entering apiHandlerRetrieveMedicalFacts========>");
	let response = await mysqlFunctions.retrievePatientMedicalFacts(req);
	console.log("inside apiHandlerRetrieveMedicalFacts:  ", response);

	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "There was an error in retrieving medical facts for the patient"
		}
		console.log("Exiting apiHandlerRetrieveMedicalFacts========>");
		return res.send(returnJsonObj);
	}

	console.log("Exiting apiHandlerRetrieveMedicalFacts========>");
	return res.send(JSON.parse(response));
}

async function apiHandlerAddPatientDrugAllergies(req, res) {
	console.log("Entering apiHandlerAddPatientDrugAllergies========>");
	let response = await mysqlFunctions.addPatientDrugAllergies(req);
	console.log("inside apiHandlerAddPatientDrugAllergies:  ", response);

	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "There was an error in adding drug allergies for the patient"
		}
		console.log("Exiting apiHandlerAddPatientDrugAllergies========>");
		return res.send(returnJsonObj);
	}

	var returnJsonObj = {
		"msgtype" : "success",
		"message": "patient drug allergies added successfully"
	  }
	  console.log("Exiting apiHandlerAddPatientDrugAllergies========>");
	  return res.json(returnJsonObj);
}

async function apiHandlerRetrieveSurgicalHistory(req, res){
	console.log("Entering apiHandlerRetrieveSurgicalHistory========>");
	let response = await mysqlFunctions.retrievePatientSurgicalHistory(req);
	console.log("inside apiHandlerRetrieveSurgicalHistory:  ", response);

	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "There was an error in retrieving surgical history for the patient"
		}
		console.log("Exiting apiHandlerRetrieveSurgicalHistory========>");
		return res.send(returnJsonObj);
	}

	console.log("Exiting apiHandlerRetrieveSurgicalHistory========>");
	return res.send(JSON.parse(response));
}

async function apiHandlerAddSurgicalHistory(req, res) {
	console.log("Entering apiHandlerAddSurgicalHistory========>");
	let response = await mysqlFunctions.addPatientSurgicalHistory(req);
	console.log("inside apiHandlerAddSurgicalHistory:  ", response);

	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "There was an error in adding surgical history for the patient"
		}
		console.log("Exiting apiHandlerAddSurgicalHistory========>");
		return res.send(returnJsonObj);
	}

	var returnJsonObj = {
		"msgtype" : "success",
		"message": "patient surgical history added successfully"
	  }
	  console.log("Exiting apiHandlerAddSurgicalHistory========>");
	  return res.json(returnJsonObj);
}

exports.apiHandlerCreatePatient = apiHandlerCreatePatient;
exports.apiHandlerAddMedicalFacts = apiHandlerAddMedicalFacts;
exports.apiHandlerUpdateMedicalFacts = apiHandlerUpdateMedicalFacts;
exports.apiHandlerRetrieveMedicalFacts = apiHandlerRetrieveMedicalFacts;
exports.apiHandlerAddPatientAddress = apiHandlerAddPatientAddress;
exports.apiHandlerSearchPatient = apiHandlerSearchPatient;
exports.apiHandlerAddPatientDrugAllergies = apiHandlerAddPatientDrugAllergies;
exports.apiHandlerRetrieveSurgicalHistory = apiHandlerRetrieveSurgicalHistory;
exports.apiHandlerAddSurgicalHistory = apiHandlerAddSurgicalHistory;
exports.apiHandlerUpdatePatientDetails = apiHandlerUpdatePatientDetails;