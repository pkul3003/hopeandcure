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
				"message": "There was an error is fetching customer"
			}
  	console.log("Exiting apiHandlerCreatePatient========>");
			res.send(returnJsonObj);
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
			res.send(returnJsonObj);
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
			res.send(returnJsonObj);
		}
  console.log("Exiting apiHandlerCreatePatient========>");
	res.send(JSON.parse(response));
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
		res.send(returnJsonObj);
	}
console.log("Exiting apiHandlerSearchPatient========>");
res.send(JSON.parse(response));
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
			res.send(returnJsonObj);
		}
		res.send(JSON.parse(response));
  console.log("Exiting apiHandlerFindPatientByUHID========>");
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
			res.send(returnJsonObj);
		}
		res.send(JSON.parse(response));
  console.log("Exiting apiHandlerFindPatientByMobile========>");
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
			res.send(returnJsonObj);
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
			res.send(returnJsonObj);
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
		res.send(returnJsonObj);
	}

	console.log("Exiting apiHandlerRetrieveMedicalFacts========>");
	res.send(JSON.parse(response));
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
