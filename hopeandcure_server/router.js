/**
filename: router.js
description: this defines an  express application called app and acts as a router for all incoming REST requests
from the client. The use of body-parser is must to read the contents of the incoming request json object.

methods supported:
http GET
http POST
http login
http logout
*/
'use strict';
console.log('Entering router.js...');
var express = require('express');
var session = require('express-session');
var config = require('./config.js');
var cors = require('cors');
var app = express();
var bodyParser = require("body-parser");
var apiAppointmentsController = require('./appointments/api/apptHandler.js');
var apiPatientController = require('./patients/api/patientHandler.js');
var apiStaffController = require('./staff/api/staffHandler.js');
var apiOccularHandler = require('./occular/api/occularHandler.js');
var sess;

// CORS-enabled for all origins!
app.use(cors());

var appRouter = function(app) {

app.get("/DaysOfWeek", function(req, res) {
	 var DaysOfWeek = config.DaysOfWeek;
	 res.send(DaysOfWeek);
});

app.get("/ErrorMessages", function(req, res) {
	 var ErrorMessages = config.ErrorMessages;
	 res.send(ErrorMessages);
});

app.post('/login', async function(req,res){
  console.log("insider router app.post/login: ", JSON.stringify(req.body.intentName));
  //sess = req.session;
  //sess.username=req.body.staff.username;
  //console.log("username: ", sess.username);
  await apiStaffController.apiHandlerAuthenticateStaff(req, res);
  res.end('done');
});

// Fetching BE data or response type requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/hook', async function(req, res) {
    console.log("inside router app.post/hook: "+ JSON.stringify(req.body.intentName));

    if(req.body.intentName === "create-appointment"){
        console.log("Entering router create-appointment------>");
    	await apiAppointmentsController.apiHandlerCreateAppointment(req, res);
        console.log("Exiting router create-appointment------>");
    }
    if(req.body.intentName === "retrieve-appointments"){
        console.log("Entering router retrieve-appointments------>");
    	await apiAppointmentsController.apiHandlerForAppointments(req, res);
        console.log("Exiting router retrieve-appointments------>");
    }
		if(req.body.intentName === "retrieve-appointments-by-date"){
        console.log("Entering router retrieve-appointments-by-date------>");
    	await apiAppointmentsController.apiHandlerForAppointmentsByDate(req, res);
        console.log("Exiting router retrieve-appointments-by-date------>");
    }
    if(req.body.intentName === "create-patient"){
        console.log("Entering router create-patient------>");
      await apiPatientController.apiHandlerCreatePatient(req, res);
        console.log("Exiting router create-patient------>");
    }
    if(req.body.intentName === "add-patient-address"){
        console.log("Entering router add-patient-address------>");
      await apiPatientController.apiHandlerAddPatientAddress(req, res);
        console.log("Exiting router add-patient-address------>");
    }
    if(req.body.intentName === "retrieve-patient-by-name"){
        console.log("Entering router retrieve-patient-by-name------>");
      await apiPatientController.apiHandlerFindPatients(req, res);
        console.log("Exiting router retrieve-patient-by-name------>");
    }
    if(req.body.intentName === "retrieve-patient-by-uhid"){
        console.log("Entering router retrieve-patient-by-uhid------>");
      await apiPatientController.apiHandlerFindPatientByUHID(req, res);
        console.log("Exiting router retrieve-patient-by-uhid------>");
    }
    if(req.body.intentName === "retrieve-patient-by-mobile"){
        console.log("Entering router retrieve-patient-by-mobile------>");
      await apiPatientController.apiHandlerFindPatientByMobile(req, res);
        console.log("Exiting router retrieve-patient-by-mobile------>");
    }
    if(req.body.intentName === "search-patient"){
        console.log("Entering router search-patient------>");
      await apiPatientController.apiHandlerSearchPatient(req, res);
        console.log("Exiting router search-patient------>");
    }
    if(req.body.intentName === "create-new-staff"){
        console.log("Entering router create-new-staff------>");
      await apiStaffController.apiHandlerCreateStaff(req, res);
        console.log("Exiting router create-new-staff------>");
    }
    if(req.body.intentName === "add-medical-facts"){
        console.log("Entering router add-medical-facts------>");
      await apiPatientController.apiHandlerAddMedicalFacts(req, res);
        console.log("Exiting router add-medical-facts------>");
    }
    if(req.body.intentName === "update-medical-facts"){
        console.log("Entering router update-medical-facts------>");
      await apiPatientController.apiHandlerUpdateMedicalFacts(req, res);
        console.log("Exiting router update-medical-facts------>");
    }
    if(req.body.intentName === "retrieve-medical-facts"){
        console.log("Entering router retrieve-medical-facts------>");
      await apiPatientController.apiHandlerRetrieveMedicalFacts(req, res);
        console.log("Exiting router retrieve-medical-facts------>");
    }
    if(req.body.intentName === "add-patient-occular-facts") {
      console.log("Entering router add-patient-occular-facts------>");
      await apiOccularHandler.apiHandlerAddOccularFacts(req, res);
      console.log("Exiting router add-patient-occular-facts------>");
    }
    if(req.body.intentName === "retrieve-patient-occular-facts") {
      console.log("Entering router retrieve-patient-occular-facts------>");
      await apiOccularHandler.apiHandlerRetrieveOccularFacts(req, res);
      console.log("Exiting router retrieve-patient-occular-facts------>");
    }
    if(req.body.intentName === "add-optometary-results"){
      console.log("Entering router add-optometary-results------>");
      await apiOccularHandler.apiHandlerAddOptometeryResults(req, res);
      console.log("Exiting router add-optometary-results------>");
    }
    if(req.body.intentName === "retrieve-optometary-results"){
      console.log("Entering router retrieve-optometary-results------>");
      await apiOccularHandler.apiHandlerRetrieveOptometeryResults(req, res);
      console.log("Exiting router retrieve-optometary-results------>");
    }
});
}

module.exports = appRouter;
console.log('Exiting router.js...');
