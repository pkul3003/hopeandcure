'use strict';
console.log('Entering router.js...');
var express = require('express');
var config = require('./config.js');
var wait = require('wait.for');
var app = express();
var bodyParser = require("body-parser");
//var apiFunctionsController = require('./controllers/apiFunctionsController.js');
var apiAppointmentsController = require('./appointments/api/apptHandler.js')


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var appRouter = function(app) {

app.get("/", function(req, res) {
     
     res.send("Success on default page");
});
	
app.get("/DaysOfWeek", function(req, res) {
	 var DaysOfWeek = config.DaysOfWeek;
	 res.send(DaysOfWeek);
});

app.get("/ErrorMessages", function(req, res) {
	 var ErrorMessages = config.ErrorMessages;
	 res.send(ErrorMessages);
});

// Fetching BE data or response type requests

app.post('/hook', function(req, res) {
    console.log("inside router app.post: "+ JSON.stringify(req.body.intentName));

    if(req.body.intentName = "retrieve-appointments"){
        console.log("Entering router retrieve-appointments------>");
    	wait.launchFiber(apiAppointmentsController.apiHandlerForAppointments, req, res);
        console.log("Exiting router retrieve-appointments------>");
    }
}); 

}

module.exports = appRouter;
console.log('Exiting router.js...');
