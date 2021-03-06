'use strict'
let stubResponse = require('../../responsestubs/StubResponse.js');
let config = require("../../config.js");
let globalsqlFunctions = require('../../mysql-functions/mysqlFunctions.js');
let mysqlFunctions = require('../dao/sqlFunctions.js');

// create a new staff
async function apiHandlerCreateStaff(req,res) {
	console.log("Entering apiHandlerCreateStaff========>");

    let result = await mysqlFunctions.createNewStaff(req);
    console.log("inside apiHandlerCreatePatient:  ", result);

		if (result === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is creating staff member"
			}
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerCreateStaff========>");
		return res.json(result);
}


async function apiHandlerAuthenticateStaff(req,res) {
	console.log("Entering apiHandlerAuthenticateStaff========>");

    let result = await mysqlFunctions.authenticateStaffLogin(req);
    console.log("inside apiHandlerAuthenticateStaff:  ", result);

		if (result === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is authenticating staff member"
			}
			return res.send(returnJsonObj);
		}

    if (result === "[]") {
      console.log("username or password did not match");
      var returnJsonObj = {
				"msgtype" : "info",
				"message": "username or password did not match"
			}
      return res.send(returnJsonObj);
    }
  	console.log("Exiting apiHandlerAuthenticateStaff========>");
		return res.send(JSON.parse(result));
}


async function apiHandlerRetrieveConsultants(req,res) {
	console.log("Entering apiHandlerRetrieveConsultants========>");

    let result = await mysqlFunctions.retrieveConstultants(req);
    console.log("inside apiHandlerRetrieveConsultants:  ", result);

		if (result === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is retrieving consultants"
			}
			console.log("Exiting apiHandlerRetrieveConsultants========>");
			return res.send(returnJsonObj);
		}

    if (result === "[]") {
      console.log("there were no consultants");
      var returnJsonObj = {
				"msgtype" : "info",
				"message": "there were no consultants"
			}
	  console.log("Exiting apiHandlerRetrieveConsultants========>");	
      return res.send(returnJsonObj);
    }
  	console.log("Exiting apiHandlerRetrieveConsultants========>");
		return res.send(JSON.parse(result));
}


exports.apiHandlerCreateStaff = apiHandlerCreateStaff;
exports.apiHandlerAuthenticateStaff = apiHandlerAuthenticateStaff;
exports.apiHandlerRetrieveConsultants = apiHandlerRetrieveConsultants;