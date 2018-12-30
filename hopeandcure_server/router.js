/**
filename: router.js
description: this defines an  express application called app and acts as a router for all incoming REST requests
from the client. The use of body-parser is must to read the contents of the incoming request json object.

methods supported:
http GET, http POST, http login, http logout
*/
'use strict';
console.log('Entering router.js...');
var express = require('express');
var config = require('./config.js');
var cors = require('cors');
var bodyParser = require("body-parser");
var apiAppointmentsController = require('./appointments/api/apptHandler.js');
var apiPatientController = require('./patients/api/patientHandler.js');
var apiStaffController = require('./staff/api/staffHandler.js');
var apiOcularController = require('./ocular/api/ocularHandler.js');
var apiGenericController = require('./generic/api/genericHandler.js');
var apiBillingController = require('./billing/api/billingHandler.js');


var appRouter = function(app) {

	// CORS-enabled for all origins!
	app.use(cors());

	// bodyParser for incoming json REST requests
	app.use(bodyParser.json());
	app.use(bodyParser.urlencoded({ extended: true }));

	app.use(function(req, res, next) {
		res.header("Access-Control-Allow-Origin", "*");
		res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
		next();
  	});

// GET interfaces
// sample test interface to check if the server is working
app.get("/days-of-week", function(req, res) {
	 var DaysOfWeek = config.DaysOfWeek;
	 res.send(DaysOfWeek);
});

// retrieve-appointments
app.get("/retrieve-appointments", async function(req, res) {
	await apiAppointmentsController.apiHandlerForAppointments(req, res);
});

// retrieve-appointments-by-date
app.get("/retrieve-appointments-by-date", async function(req, res) {
	await apiAppointmentsController.apiHandlerForAppointmentsByDate(req, res);
});

// retrieve-consultants
app.get("/retrieve-consultants", async function(req, res) {
	await apiStaffController.apiHandlerRetrieveConsultants(req, res);
});

// modes-of-payment
app.get("/retrieve-modes-of-payment", async function(req, res) {
	await apiBillingController.apiHandlerRetrieveModesOfPayment(req, res);
});

// complaint-types
app.get("/retrieve-complaint-types", async function(req, res) {
	await apiGenericController.apiHandlerRetrieveComplaintTypes(req, res);
});

// procedure or surgery types
app.get("/retrieve-procedure-types", async function(req, res) {
	await apiGenericController.apiHandlerRetrieveProcedureTypes(req, res);
});

// investigation types (optical or systemic)
app.get("/retrieve-investigation-types", async function(req, res) {
	await apiGenericController.apiHandlerRertrieveInvestigationTypes(req, res);
});

// special precaution types
app.get("/retrieve-special-precautions", async function(req, res){
	await apiGenericController.apiHandlerRetrieveSpecialPrecautions(req, res);
});

app.get("/retrieve-diagnosis-types", async function(req, res) {
	await apiGenericController.apiHandlerRetrieveDiagnosisTypes(req, res);
});

app.get("/retrieve-instructions", async function(req, res){
	await apiGenericController.apiHandlerRetrieveInstructions(req, res);
});

app.get("/retrieve-prescription-by-diagnosis-id", async function(req, res){
	await apiGenericController.apiHandlerRetrievePrescription(req, res);
});

app.get("/retrieve-medical-advice", async function(req, res){
	await apiGenericController.apiHandlerRetrieveMedicalAdvice(req, res);
});

app.get("/retrieve-minor-opd-procedures", async function(req, res) {
	await apiGenericController.apiHandlerRetrieveMinorPorcedures(req, res);
});

app.get("/retrieve-patient-status-master", async function(req, res) {
	await apiGenericController.apiHandlerRetrievePatientStatusMaster(req, res);
});

app.get("/search-medicine-by-name", async function(req, res) {
	await apiGenericController.apiHandlerSearchMedicineByName(req, res);
});

// GET interface for Optometry results
app.get("/retrieve-optometry-data-by-uhid", async function(req, res){
	await apiOcularController.apiHandlerRetrieveOptometryResults(req, res);
});

app.get("/retrieve-ptient-past-history", async function(req, res) {
	await apiOcularController.apiHandlerRetrievPatientlatestComplaintHistory(req, res);
});


// seperate POST call for login function
app.post('/login', async function(req,res){
  console.log("insider router app.post/login: ", JSON.stringify(req.body.intentName));
  await apiStaffController.apiHandlerAuthenticateStaff(req, res);
});



app.post('/staff', async function(req,res){
	console.log("insider router app.post/staff: ", JSON.stringify(req.body.intentName));
	switch (req.body.intentName) {
		case 'create-new-staff':
			await apiStaffController.apiHandlerCreateStaff(req, res);
			break;		
		default:
			var returnJsonObj = {
				"msgtype" : "info",
				"message" : "Invalid intentName specified"
			}
			res.send(returnJsonObj);
		}
  });

app.post('/appointments', async function (req, res){
	console.log("inside router app.post/appointments: "+ JSON.stringify(req.body.intentName));

	switch (req.body.intentName) {
		case 'create-appointment':
			await apiAppointmentsController.apiHandlerCreateAppointment(req, res);
			break;
		case 'update-patient-progress-status' :
			await apiAppointmentsController.apiHandlerUpdatePatientProgressStatus(req, res);
			break;
		case 'update-appointment':
			await apiAppointmentsController.apiHandlerUpdateAppointments(req, res);
			break;
		case 'search-appointment':
			await apiAppointmentsController.apiHandlerSearchAppointment(req, res);
			break;	
		default:
			var returnJsonObj = {
				"msgtype" : "info",
				"message" : "Invalid intentName specified"
			}
			res.send(returnJsonObj);		
		
	}
});

app.post('/patients', async function (req, res){
	console.log("inside router app.post/patients: "+ JSON.stringify(req.body.intentName));
	switch (req.body.intentName) {
		case 'create-patient':
			await apiPatientController.apiHandlerCreatePatient(req, res);
			break;
		case 'update-patient-details':
			await apiPatientController.apiHandlerUpdatePatientDetails(req, res);
			break;		
		case 'add-patient-address':
			await apiPatientController.apiHandlerAddPatientAddress(req, res);
			break;
		case 'search-patient':
			await apiPatientController.apiHandlerSearchPatient(req, res);
			break;
		case 'add-patient-medical-facts':
			await apiPatientController.apiHandlerAddMedicalFacts(req, res);
			break;
		case 'update-patient-medical-facts':
			await apiPatientController.apiHandlerUpdateMedicalFacts(req, res);
			break;
		case 'retrieve-patient-medical-facts':
			await apiPatientController.apiHandlerRetrieveMedicalFacts(req, res);
			break;
		default:
			var returnJsonObj = {
				"msgtype" : "info",
				"message" : "Invalid intentName specified"
			}
			res.send(returnJsonObj);
	}
});

app.post('/generic', async function(req, res){
	console.log("inside router app.post/generic: "+ JSON.stringify(req.body.intentName));
	switch (req.body.intentName) {
		case 'create-complaint' :
			await apiGenericController.apiHandlerCreateComplaint(req, res);
			break;
		case 'create-investigation' :
			await apiGenericController.apiHandlerCreateInvestigation(req, res);
			break;
		case 'create-procedure':
			await apiGenericController.apiHandlerCreateProcedure(req,res);
			break;
		case 'create-special-precaution':
			await apiGenericController.apiHandlerSpecialPrecaution(req, res);
			break;
		case 'crate-new-diagnosis':
			await apiGenericController.apiHandlerCreateNewDiagnosis(req,res);
			break;
		case 'create-new-instruction':
			await apiGenericController.apiHandlerCreateNewInstruction(req,res);
			break;
		default:
			var returnJsonObj = {
				"msgtype" : "info",
				"message" : "Invalid intentName specified"
			}
			res.send(returnJsonObj);
	}
});

app.post('/ocular', async function (req, res){
	console.log("inside router app.post/ocular: "+ JSON.stringify(req.body.intentName));
	switch (req.body.intentName) {
		case 'add-optometry-results':
			await apiOcularController.apiHandlerAddOptometeryResults(req, res);
			break;
		case 'add-consultant-examination-record':
			await apiOcularController.apiHandlerAddConsultantResults(req, res);
			break;
		case 'add-patient-prescription':
			await apiOcularController.apiHandlerAddPrescription(req, res);
			break;
				
		default:
			var returnJsonObj = {
				"msgtype" : "info",
				"message" : "Invalid intentName specified"
			}
			res.send(returnJsonObj);
	}
});

app.post('/billing', async function (req, res){
	console.log("inside router app.post/ocular: "+ JSON.stringify(req.body.intentName));
	switch (req.body.intentName) {
		case 'create-bill':
			await apiBillingController.apiHandlerCreatePatientBill(req, res);
			break;
		default:
			var returnJsonObj = {
				"msgtype" : "info",
				"message" : "Invalid intentName specified"
			}
			res.send(returnJsonObj);
		}
	});
}
module.exports = appRouter;
console.log('Exiting router.js...');
