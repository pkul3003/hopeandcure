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

async function apiHandlerRetrievePreviousOcularIllness(req, res) {
  console.log("Entering apiHandlerRetrievePreviousOcularIllness========>");

  let result = await mysqlFunctions.retrievePreviousOcularIllness(req);
  
  console.log("inside apiHandlerRetrievePreviousOcularIllness:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching previous ocular illnesses"
    }
    console.log("Exiting apiHandlerRetrievePreviousOcularIllness========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrievePreviousOcularIllness========>");
return res.send(JSON.parse(result));
}

async function apiHandlerRetrieveOcularComplaintTypes(req, res) {
  console.log("Entering apiHandlerRetrieveOcularComplaintTypes========>");

  let result = await mysqlFunctions.retrieveOcularComplaintTypes(req);
  
  console.log("inside apiHandlerRetrieveOcularComplaintTypes:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching ocular complaint types"
    }
    console.log("Exiting apiHandlerRetrieveOcularComplaintTypes========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveOcularComplaintTypes========>");
return res.send(JSON.parse(result));
}

async function apiHandlerAddOptometeryResults(req, res) {
  console.log("Entering apiHandlerAddOptometeryResults ====> ");

  let result = await mysqlFunctions.addOptometaryResults(req);
  console.log("inside apiHandlerAddOptometeryResults:  ", result);

  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is adding patient optometary results"
    }
    console.log("Exiting apiHandlerAddOptometeryResults========>");
    return res.send(returnJsonObj);
  }
  var returnJsonObj = {
    "msgtype" : "success",
    "message": "patient optometary results added successfully"
  }
  console.log("Exiting apiHandlerAddOptometeryResults========>");
  return res.json(returnJsonObj);
}

async function apiHandlerRetrieveOptometeryResults(req, res) {
  console.log("Entering apiHandlerRetrieveOptometeryResults========>");

  let result = await mysqlFunctions.retrieveRetrieveOptometaryResults(req);
  console.log("inside apiHandlerRetrieveOptometeryResults:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching patient optometary results"
    }
    console.log("Exiting apiHandlerRetrieveOptometeryResults========>");
    return res.send(returnJsonObj);
  }
  console.log("Exiting apiHandlerRetrieveOptometeryResults========>");
  return res.send(JSON.parse(result));
}


async function apiHandlerRetrieveSystemicComplaintTypes(req, res) {
  console.log("Entering apiHandlerRetrieveSystemicComplaintTypes========>");

  let result = await mysqlFunctions.retrieveSystemicComplaintTypes(req);
  
  console.log("inside apiHandlerRetrieveSystemicComplaintTypes:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching systemic complaint types"
    }
    console.log("Exiting apiHandlerRetrieveSystemicComplaintTypes========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveSystemicComplaintTypes========>");
return res.send(JSON.parse(result));
}

async function apiHandlerAddPreviousOcularIllness(req,res) {
	console.log("Entering apiHandlerAddPreviousOcularIllness========>");
	let response = await mysqlFunctions.addPreviousOcularIllness(req);
	console.log("inside apiHandlerAddPreviousOcularIllness:  ", response);

	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "There was an error in adding previous ocular illness for the patient"
		}
		console.log("Exiting apiHandlerAddPreviousOcularIllness========>");
		return res.send(returnJsonObj);
	}

	var returnJsonObj = {
		"msgtype" : "success",
		"message": "patient previous ocular illness added successfully"
	  }
	  console.log("Exiting apiHandlerAddPreviousOcularIllness========>");
	  return res.json(returnJsonObj);
}


async function apiHandlerAddCurrentOcularComplaints(req,res) {
	console.log("Entering apiHandlerAddCurrentOcularComplaints========>");
	let response = await mysqlFunctions.addCurrentOcularComplaints(req);
	console.log("inside apiHandlerAddCurrentOcularComplaints:  ", response);

	if (response === false) {
		var returnJsonObj = {
			"msgtype" : "error",
			"message": "There was an error in adding current ocular complaints for the patient"
		}
		console.log("Exiting apiHandlerAddCurrentOcularComplaints========>");
		return res.send(returnJsonObj);
	}

	var returnJsonObj = {
		"msgtype" : "success",
		"message": "patient ocular complaints added successfully"
	  }
	  console.log("Exiting apiHandlerAddCurrentOcularComplaints========>");
	  return res.json(returnJsonObj);
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

exports.apiHandlerAddOptometeryResults = apiHandlerAddOptometeryResults;
exports.apiHandlerRetrieveOptometeryResults = apiHandlerRetrieveOptometeryResults;
exports.apiHandlerAddOcularFacts = apiHandlerAddOcularFacts;
exports.apiHandlerRetrieveOcularFacts = apiHandlerRetrieveOcularFacts;
exports.apiHandlerRetrievePreviousOcularIllness = apiHandlerRetrievePreviousOcularIllness;
exports.apiHandlerRetrieveOcularComplaintTypes = apiHandlerRetrieveOcularComplaintTypes;
exports.apiHandlerRetrieveSystemicComplaintTypes = apiHandlerRetrieveSystemicComplaintTypes;
exports.apiHandlerAddPreviousOcularIllness = apiHandlerAddPreviousOcularIllness;
exports.apiHandlerAddCurrentOcularComplaints = apiHandlerAddCurrentOcularComplaints;
exports.apiHandlerAddConsultantResults = apiHandlerAddConsultantResults;
