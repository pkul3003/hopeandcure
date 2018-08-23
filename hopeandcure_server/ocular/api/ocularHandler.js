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

exports.apiHandlerAddOptometeryResults = apiHandlerAddOptometeryResults;
exports.apiHandlerRetrieveOptometeryResults = apiHandlerRetrieveOptometeryResults;
exports.apiHandlerAddOcularFacts = apiHandlerAddOcularFacts;
exports.apiHandlerRetrieveOcularFacts = apiHandlerRetrieveOcularFacts;