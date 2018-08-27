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
//var app = express();
var bodyParser = require("body-parser");
var apiAppointmentsController = require('./appointments/api/apptHandler.js');
var apiPatientController = require('./patients/api/patientHandler.js');
var apiStaffController = require('./staff/api/staffHandler.js');
var apiOcularController = require('./ocular/api/ocularHandler.js');

// CORS-enabled for all origins!


var appRouter = function(app) {
	app.use(cors());
	// bodyParser for incoming json REST requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(function(req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
  });


app.get("/DaysOfWeek", function(req, res) {
	 var DaysOfWeek = config.DaysOfWeek;
	 res.send(DaysOfWeek);
});


app.post('/login', async function(req,res){
  console.log("insider router app.post/login: ", JSON.stringify(req.body.intentName));
  await apiStaffController.apiHandlerAuthenticateStaff(req, res);
  //res.end('done');
});

;

app.post('/hook', async function(req, res) {
    console.log("inside router app.post/hook: "+ JSON.stringify(req.body.intentName));

		switch (req.body.intentName) {
			case 'create-appointment':
				await apiAppointmentsController.apiHandlerCreateAppointment(req, res);
				break;
			case 'retrieve-appointments':
				await apiAppointmentsController.apiHandlerForAppointments(req, res);
				break;
			case 'retrieve-appointments-by-date':
				await apiAppointmentsController.apiHandlerForAppointmentsByDate(req, res);
				break;
			case 'create-patient':
				await apiPatientController.apiHandlerCreatePatient(req, res);
				break;
			case 'add-patient-address':
				await apiPatientController.apiHandlerAddPatientAddress(req, res);
				break;
			case 'search-patient':
				await apiPatientController.apiHandlerSearchPatient(req, res);
				break;
			case 'create-new-staff':
				await apiStaffController.apiHandlerCreateStaff(req, res);
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
			case 'retrieve-patient-systemic-history':
				await apiPatientController.apiHandlerRetrieveSystemicHistory(req, res);
				break;
			case 'add-patient-systemic-history':
				await apiPatientController.apiHandlerAddSystemicHistory(req, res);
				break;
			case 'add-patient-ocular-facts':
				await apiOcularController.apiHandlerAddOcularFacts(req, res);
				break;
			case 'retrieve-patient-ocular-facts':
				await apiOcularController.apiHandlerRetrieveOcularFacts(req, res);
				break;
			case 'add-optometary-results':
				await apiOcularController.apiHandlerAddOptometeryResults(req, res);
				break;
			case 'retrieve-optometary-results':
				await apiOcularController.apiHandlerRetrieveOptometeryResults(req, res);
				break;
			case 'retrieve-consultants':
				await apiStaffController.apiHandlerRetrieveConsultants(req, res);
				break;
			case 'retrieve-previous-ocular-illness':
				await apiOcularController.apiHandlerRetrievePreviousOcularIllness(req, res);
				break;
			case 'add-previous-ocular-illness':
				await apiOcularController.apiHandlerAddPreviousOcularIllness(req, res);
				break;
			case 'retrieve-ocular-complaint-types' :
				await apiOcularController.apiHandlerRetrieveOcularComplaintTypes(req, res);
				break;
			case 'add-current-ocular-complaints':
				await apiOcularController.apiHandlerAddCurrentOcularComplaints(req, res);
				break;
			case 'retrieve-systemic-complaint-types' :
				await apiOcularController.apiHandlerRetrieveSystemicComplaintTypes(req, res);
				break;
			case 'update-patient-progress-status' :
				await apiAppointmentsController.apiHandlerUpdatePatientProgressStatus(req, res);
				break;
			case 'add-patient-drug-allergies':
				await apiPatientController.apiHandlerAddPatientDrugAllergies(req, res);
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
