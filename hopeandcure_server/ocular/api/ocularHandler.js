'use strict'
let stubResponse = require('../../responsestubs/StubResponse.js');
let config = require("../../config.js");
let globalsqlFunctions = require('../../mysql-functions/mysqlFunctions.js');
let mysqlFunctions = require('../dao/sqlFunctions.js');

async function apiHandlerAddOcularFacts(req, res) {
  console.log("Entering apiHandlerAddOcularFacts ====> ");

  let result = await mysqlFunctions.addPatientOcularFacts(req);
  console.log("inside apiHandlerAddOcularFacts:  ", result);

  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is adding patient ocular facts"
    }
    console.log("Exiting apiHandlerAddocularFacts========>");
    return res.send(returnJsonObj);
  }
  var returnJsonObj = {
    "msgtype" : "success",
    "message": "patient ocular facts created successfully"
  }
  console.log("Exiting apiHandlerAddocularFacts========>");
  return res.json(returnJsonObj);
}

async function apiHandlerRetrieveOcularFacts(req, res) {
    console.log("Entering apiHandlerRetrieveOcularFacts========>");

    let result = await mysqlFunctions.retrievePatientOcularFacts(req);
    
    console.log("inside apiHandlerRetrieveocularFacts:  ", result);
    if (result === false) {
      var returnJsonObj = {
        "msgtype" : "error",
        "message": "There was an error is fetching patient ocular facts"
      }
      console.log("Exiting apiHandlerRetrieveOcularFacts========>");
      return res.send(returnJsonObj);
    }
  console.log("Exiting apiHandlerRetrieveOcularFacts========>");
  return res.send(JSON.parse(result));
}

async function apiHandlerAddOptometeryResults(req, res) {
  console.log("Entering apiHandlerAddOptometeryResults ====> ");

  let result = await mysqlFunctions.addOptometryResults(req);
  console.log("inside apiHandlerAddOptometeryResults:  ", result);

  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is adding patient optometry results"
    }
    console.log("Exiting apiHandlerAddOptometeryResults========>");
    return res.send(returnJsonObj);
  }
  var returnJsonObj = {
    "msgtype" : "success",
    "message": "patient optometry results added successfully"
  }
  console.log("Exiting apiHandlerAddOptometeryResults========>");
  return res.json(returnJsonObj);
}

async function apiHandlerRetrieveOptometryResults(req, res) {
  console.log("Entering apiHandlerRetrieveOptometryResults========>");

  let result = await mysqlFunctions.retrieveOptometryResults(req);
  console.log("inside apiHandlerRetrieveOptometryResults:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching patient optometry results"
    }
    console.log("Exiting apiHandlerRetrieveOptometryResults========>");
    return res.send(returnJsonObj);
  }
  console.log("Exiting apiHandlerRetrieveOptometryResults========>");
  return res.send(JSON.parse(result));
}

async function apiHandlerAddConsultantResults(req, res) {
  console.log("Entering apiHandlerAddConsultantResults ====> ");

  let result = await mysqlFunctions.addConsultantResults(req);
  console.log("inside apiHandlerAddConsultantResults:  ", result);

  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is updating consultant examination record of the patient"
    }
    console.log("Exiting apiHandlerAddConsultantResults========>");
    return res.send(returnJsonObj);
  }
  var returnJsonObj = {
    "msgtype" : "success",
    "message": "consultant examination record of the patient added successfully"
  }
  console.log("Exiting apiHandlerAddConsultantResults========>");
  return res.json(returnJsonObj);
}

async function apiHandlerRetrieveSurgicalHistory(req, res){
	console.log("Entering apiHandlerRetrieveSurgicalHistory========>");
	let response = await mysqlFunctions.retrievePatientSurgicalHistory(req);
	console.log("inside apiHandlerRetrieveSurgicalHistory:  ", response);

	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "There was an error in retrieving ocular surgical history for the patient"
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
			"message": "There was an error in adding ocular surgical history for the patient"
		}
		console.log("Exiting apiHandlerAddSurgicalHistory========>");
		return res.send(returnJsonObj);
	}

	var returnJsonObj = {
		"msgtype" : "success",
		"message": "patient ocular surgical history added successfully"
	  }
	  console.log("Exiting apiHandlerAddSurgicalHistory========>");
	  return res.json(returnJsonObj);
}


async function apiHandlerAddPrescription(req, res){
  console.log("Entering apiHandlerAddPrescription========>");
	let response = await mysqlFunctions.addPatientPrescription(req);
	console.log("inside apiHandlerAddPrescription:  ", response);

	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "one or more prescriptions could not be added"
		}
		console.log("Exiting apiHandlerAddPrescription========>");
		return res.send(returnJsonObj);
	} else if (response === true) {

	var returnJsonObj = {
		"msgtype" : "success",
		"message": "patient medical prescription added successfully"
	  }
	  console.log("Exiting apiHandlerAddPrescription========>");
	  return res.json(returnJsonObj);
  } else {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error in creating medical prescription"
      }
      console.log("Exiting apiHandlerAddPrescription========>");
      return res.json(returnJsonObj);
  }
}

exports.apiHandlerAddOptometeryResults = apiHandlerAddOptometeryResults;
exports.apiHandlerRetrieveOptometryResults = apiHandlerRetrieveOptometryResults;
exports.apiHandlerAddOcularFacts = apiHandlerAddOcularFacts;
exports.apiHandlerRetrieveOcularFacts = apiHandlerRetrieveOcularFacts;
exports.apiHandlerAddConsultantResults = apiHandlerAddConsultantResults;
exports.apiHandlerRetrieveSurgicalHistory = apiHandlerRetrieveSurgicalHistory;
exports.apiHandlerAddSurgicalHistory = apiHandlerAddSurgicalHistory;
exports.apiHandlerAddPrescription = apiHandlerAddPrescription;