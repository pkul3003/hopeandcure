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

// find all patients based on first and last name
async function apiHandlerFindPatients(req,res){
	console.log("Entering apiHandlerCreatePatient========>");
    console.log(req.body.patient.first_name);
    console.log(req.body.patient.last_name);

    let response = await mysqlFunctions.retrievePatientsByName(req);
    console.log("inside retrievePatientsByName:  ", response);
		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is fetching customer"
			}
			return res.send(returnJsonObj);
		}
  console.log("Exiting apiHandlerCreatePatient========>");
	return res.send(JSON.parse(response));
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

// find a patient using his/her UHID
async function apiHandlerFindPatientByUHID(req,res){
	console.log("Entering apiHandlerFindPatientByUHID========>");
    console.log(req.body.patient.UHID);
    let response = await mysqlFunctions.retrievePatientsByUHID(req);
    console.log("inside apiHandlerFindPatientByUHID:  ", response);
		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is fetching customer"
			}
			return res.send(returnJsonObj);
		}
	console.log("Exiting apiHandlerFindPatientByUHID========>");
	return res.send(JSON.parse(response));
  
}

// find a patient by his/her mobile number
async function apiHandlerFindPatientByMobile(req,res){
	console.log("Entering apiHandlerFindPatientByMobile========>");
    console.log(req.body.patient.contact_number);
    let response = await mysqlFunctions.retrievePatientsByMobile(req);
    console.log("inside apiHandlerFindPatientByMobile:  ", response);
		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is fetching customer"
			}
			return res.send(returnJsonObj);
		}
		
  console.log("Exiting apiHandlerFindPatientByMobile========>");
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

async function apiHandlerRetrieveSystemicHistory(req,res) {
	console.log("Entering apiHandlerRetrieveSystemicHistory========>");
	let response = await mysqlFunctions.retrievePatientSystemicHistory(req);
	console.log("inside apiHandlerRetrieveSystemicHistory:  ", response);

	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "There was an error in retrieving systemic history for the patient"
		}
		console.log("Exiting apiHandlerRetrieveSystemicHistory========>");
		return res.send(returnJsonObj);
	}

	console.log("Exiting apiHandlerRetrieveSystemicHistory========>");
	return res.send(JSON.parse(response));
}

async function apiHandlerAddSystemicHistory(req,res) {
	console.log("Entering apiHandlerAddSystemicHistory========>");
	let response = await mysqlFunctions.addPatientSystemicHistory(req);
	console.log("inside apiHandlerAddSystemicHistory:  ", response);

	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "There was an error in adding systemic history for the patient"
		}
		console.log("Exiting apiHandlerAddSystemicHistory========>");
		return res.send(returnJsonObj);
	}

	var returnJsonObj = {
		"msgtype" : "success",
		"message": "patient systemtic history added successfully"
	  }
	  console.log("Exiting apiHandlerAddSystemicHistory========>");
	  return res.json(returnJsonObj);
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
exports.apiHandlerFindPatients = apiHandlerFindPatients;
exports.apiHandlerFindPatientByUHID = apiHandlerFindPatientByUHID;
exports.apiHandlerFindPatientByMobile = apiHandlerFindPatientByMobile;
exports.apiHandlerAddMedicalFacts = apiHandlerAddMedicalFacts;
exports.apiHandlerUpdateMedicalFacts = apiHandlerUpdateMedicalFacts;
exports.apiHandlerRetrieveMedicalFacts = apiHandlerRetrieveMedicalFacts;
exports.apiHandlerAddPatientAddress = apiHandlerAddPatientAddress;
exports.apiHandlerSearchPatient = apiHandlerSearchPatient;
exports.apiHandlerRetrieveSystemicHistory = apiHandlerRetrieveSystemicHistory;
exports.apiHandlerAddSystemicHistory = apiHandlerAddSystemicHistory;
exports.apiHandlerAddPatientDrugAllergies = apiHandlerAddPatientDrugAllergies;
exports.apiHandlerRetrieveSurgicalHistory = apiHandlerRetrieveSurgicalHistory;
exports.apiHandlerAddSurgicalHistory = apiHandlerAddSurgicalHistory;
