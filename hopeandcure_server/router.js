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
var apiGenericRetrieveController = require('./generic/api/retrieveGenericTypesHandler.js');
var apiGenericCreateController = require('./generic/api/createGenericTypesHandler.js')
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
app.get("/retrieve-all-appointments", async function(req, res) {
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
	await apiGenericRetrieveController.apiHandlerRetrieveComplaintTypes(req, res);
});

app.get("/retrieve-complaint-master", async function(req, res) {
	await apiGenericRetrieveController.apiHandlerRetrieveComplaintMaster(req, res);
});

// procedure or surgery types
app.get("/retrieve-surgical-procedure-types", async function(req, res) {
	console.log("inside GET - retrieve-procedure-types ");
	await apiGenericRetrieveController.apiHandlerRetrieveSurgicalProcedureTypes(req, res);
});

app.get("/retrieve-surgical-procedure-master", async function(req, res) {
	console.log("inside GET - retrieve-procedure-master ");
	await apiGenericRetrieveController.apiHandlerRetrieveSurgicalProcedureMaster(req, res);
});


// investigation types (optical or systemic)
app.get("/retrieve-investigation-types", async function(req, res) {
	await apiGenericRetrieveController.apiHandlerRertrieveInvestigationTypes(req, res);
});

app.get("/retrieve-investigation-master", async function(req, res) {
	await apiGenericRetrieveController.apiHandlerRetrieveInvestigationMaster(req, res);
});

// special precaution types
app.get("/retrieve-special-precaution-types", async function(req, res){
	await apiGenericRetrieveController.apiHandlerRetrieveSpecialPrecautionTypes(req, res);
});

app.get("/retrieve-special-precaution-master", async function(req, res){
	await apiGenericRetrieveController.apiHandlerRetrieveSpecialPrecautionMaster(req, res);
});

// Diagnosis Master
app.get("/retrieve-diagnosis-types", async function(req, res) {
	await apiGenericRetrieveController.apiHandlerRetrieveDiagnosisTypes(req, res);
});

app.get("/retrieve-diagnosis-master", async function(req, res) {
	await apiGenericRetrieveController.apiHandlerRetrieveDiagnosisMaster(req, res);
});

// Instruction 
app.get("/retrieve-instruction-types", async function(req, res){
	await apiGenericRetrieveController.apiHandlerRetrieveInstructionTypes(req, res);
});

app.get("/retrieve-instruction-master", async function(req, res){
	await apiGenericRetrieveController.apiHandlerRetrieveInstructionMaster(req, res);
});

// Medical prescription by diagnosis ID
app.get("/retrieve-prescription-by-diagnosis-id", async function(req, res){
	await apiGenericRetrieveController.apiHandlerRetrievePrescriptionTypes(req, res);
});

// Medical Advice
app.get("/retrieve-medical-advice-types", async function(req, res){
	await apiGenericRetrieveController.apiHandlerRetrieveMedicalAdviceTypes(req, res);
});

app.get("/retrieve-medical-advice-master", async function(req, res){
	await apiGenericRetrieveController.apiHandlerRetrieveMedicalAdviceMaster(req, res);
});

// Minor Opd procedure
app.get("/retrieve-minor-opd-procedure-types", async function(req, res) {
	await apiGenericRetrieveController.apiHandlerRetrieveMinorPorcedureTypes(req, res);
});

app.get("/retrieve-minor-opd-procedure-master", async function(req, res) {
	await apiGenericRetrieveController.apiHandlerRetrieveMinorPorcedureMaster(req, res);
});
// Patient Status Master
app.get("/retrieve-patient-status-master", async function(req, res) {
	await apiGenericRetrieveController.apiHandlerRetrievePatientStatusMaster(req, res);
});

app.get("/search-medicine-by-name", async function(req, res) {
	await apiGenericRetrieveController.apiHandlerSearchMedicineByName(req, res);
});

// GET interface for Optometry results
app.get("/retrieve-optometry-data-by-uhid", async function(req, res){
	await apiOcularController.apiHandlerRetrieveOptometryResults(req, res);
});

app.get("/retrieve-ptient-past-history", async function(req, res) {
	await apiOcularController.apiHandlerRetrievPatientlatestComplaintHistory(req, res);
});


// seperate POST call for login function
// added on 29 Dec by Prasad Joshi
app.post('/login', async function(req,res){
  console.log("insider router app.post/login: ", JSON.stringify(req.body.intentName));
  await apiStaffController.apiHandlerAuthenticateStaff(req, res);
});

// Retrive Patient and Address Details together
// added on 30 Dec 2018 by Parag
app.get("/retrieve-patient-address-details", async function(req, res) {
	await apiPatientController.apiHandlerRetrievPatientAddressDetails(req, res);
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
		case 'search-appointments':
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
		case 'create-complaint-type' :
			await apiGenericCreateController.apiHandlerCreateComplaint(req, res);
			break;
		case 'create-investigation-type' :
			await apiGenericCreateController.apiHandlerCreateInvestigation(req, res);
			break;
		case 'create-procedure-type':
			await apiGenericCreateController.apiHandlerCreateProcedure(req,res);
			break;
		case 'create-special-precaution-type':
			await apiGenericCreateController.apiHandlerSpecialPrecaution(req, res);
			break;
		case 'crate-new-diagnosis':
			await apiGenericCreateController.apiHandlerCreateNewDiagnosis(req,res);
			break;
		case 'create-new-instruction':
			await apiGenericCreateController.apiHandlerCreateNewInstruction(req,res);
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
