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
var apiOccularHandler = require('./occular/api/occularHandler.js');

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
			case 'add-medical-facts':
				await apiPatientController.apiHandlerAddMedicalFacts(req, res);
				break;
			case 'update-medical-facts':
				await apiPatientController.apiHandlerUpdateMedicalFacts(req, res);
				break;
			case 'retrieve-medical-facts':
				await apiPatientController.apiHandlerRetrieveMedicalFacts(req, res);
				break;
			case 'add-patient-occular-facts':
				await apiOccularHandler.apiHandlerAddOccularFacts(req, res);
				break;
			case 'retrieve-patient-occular-facts':
				await apiOccularHandler.apiHandlerRetrieveOccularFacts(req, res);
				break;
			case 'add-optometary-results':
				await apiOccularHandler.apiHandlerAddOptometeryResults(req, res);
				break;
			case 'retrieve-optometary-results':
				await apiOccularHandler.apiHandlerRetrieveOptometeryResults(req, res);
				break;
			case 'retrieve-consultants':
				await apiStaffController.apiHandlerRetrieveConsultants(req, res);
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
