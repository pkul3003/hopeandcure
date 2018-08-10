'use strict'
let stubResponse = require('../../responsestubs/StubResponse.js');
let config = require("../../config.js");
let globalsqlFunctions = require('../../mysql-functions/mysqlFunctions.js');
let mysqlFunctions = require('../dao/sqlFunctions.js');

async function apiHandlerAddOccularFacts(req, res) {
  console.log("Entering apiHandlerAddOccularFacts ====> ");

  let result = await mysqlFunctions.addPatientOccularFacts(req);
  console.log("inside apiHandlerAddOccularFacts:  ", result);

  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is adding patient occular facts"
    }
    console.log("Exiting apiHandlerAddOccularFacts========>");
    return res.send(returnJsonObj);
  }
  var returnJsonObj = {
    "msgtype" : "success",
    "message": "patient occular facts created successfully"
  }
  console.log("Exiting apiHandlerAddOccularFacts========>");
  return res.json(returnJsonObj);
}

async function apiHandlerRetrieveOccularFacts(req, res) {
    console.log("Entering apiHandlerRetrieveOccularFacts========>");

    let result = await mysqlFunctions.retrievePatientOccularFacts(req);
    console.log("inside apiHandlerRetrieveOccularFacts:  ", result);
    if (result === false) {
      var returnJsonObj = {
        "msgtype" : "error",
        "message": "There was an error is fetching patient occular facts"
      }
      console.log("Exiting apiHandlerRetrieveOccularFacts========>");
      return res.send(returnJsonObj);
    }
  console.log("Exiting apiHandlerRetrieveOccularFacts========>");
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
  console.log("inside apiHandlerRetrieveOccularFacts:  ", result);
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


exports.apiHandlerAddOccularFacts = apiHandlerAddOccularFacts;
exports.apiHandlerRetrieveOccularFacts = apiHandlerRetrieveOccularFacts;
exports.apiHandlerAddOptometeryResults = apiHandlerAddOptometeryResults;
exports.apiHandlerRetrieveOptometeryResults = apiHandlerRetrieveOptometeryResults;
