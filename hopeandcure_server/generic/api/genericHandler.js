'use strict'
let stubResponse = require('../../responsestubs/StubResponse.js');
let config = require("../../config.js");
let mysqlFunctions = require('../dao/sqlFunctions.js');

async function apiHandlerRetrieveComplaintTypes(req, res) {
    console.log("Entering apiHandlerRetrieveComplaintTypes========>");

    //let complaint_type = req.param('complaint-type');
    let complaint_type = req.query['complaint-type'];
    let result = {};

    switch (complaint_type) {
      case 'systemic':
        result = await mysqlFunctions.retrieveSystemicComplaintTypes(req);
        break;
      case 'ocular':
        result = await mysqlFunctions.retrieveOcularComplaintTypes(req);
        break;
      case 'optical':
        result = await mysqlFunctions.retrieveOcularComplaintTypes(req);
        break;
      case 'all':
        result = await mysqlFunctions.retrieveAllComplaintTypes(req);	
        break;
      default:
        var returnJsonObj = {
          "msgtype" : "info",
          "message" : "Invalid complaint type specified. current valid values: systemic, ocular"
        }
        console.log("Exiting apiHandlerRetrieveComplaintTypes========>");
        res.send(returnJsonObj);
      }
  
    console.log("inside apiHandlerRetrieveComplaintTypes, after BE call:  ", result);
    if (result === false) {
      var returnJsonObj = {
        "msgtype" : "error",
        "message": "There was an error is fetching complaint types"
      }
      console.log("Exiting apiHandlerRetrieveComplaintTypes========>");
      return res.send(returnJsonObj);
    }
  console.log("Exiting apiHandlerRetrieveComplaintTypes========>");
  return res.send(JSON.parse(result));
  }

async function apiHandlerRetrieveProcedureTypes(req, res){
    console.log("Entering apiHandlerRetrieveProcedureTypes========>");
    let procedure_type = req.query['procedure-type'];
    let result = {};

    switch(procedure_type) {
      case 'systemic':
        result = await mysqlFunctions.retrieveSystemicProcedureTypes(req);
        break;
      case 'ocular':
        result = await mysqlFunctions.retrieveOcularProcedureTypes(req);
        break;
      case 'optical':
        result = await mysqlFunctions.retrieveOcularProcedureTypes(req);
        break;
      case 'all':
        result = await mysqlFunctions.retrieveAllProcedureTypes(req);
        break;
      default:
        var returnJsonObj = {
          "msgtype" : "info",
          "message" : "Invalid procedure type specified. current valid values: systemic, ocular"
        }
        console.log("Exiting apiHandlerRetrieveProcedureTypes========>");
        res.send(returnJsonObj);
      }
    
    console.log("inside apiHandlerRetrieveProcedureTypes:  ", result);
    if (result === false) {
      var returnJsonObj = {
        "msgtype" : "error",
        "message": "There was an error is fetching procedure types"
      }
      console.log("Exiting apiHandlerRetrieveProcedureTypes========>");
      return res.send(returnJsonObj);
    }
  console.log("Exiting apiHandlerRetrieveProcedureTypes========>");
  return res.send(JSON.parse(result));
}

async function apiHandlerRertrieveInvestigationTypes(req, res) {
  console.log("Entering apiHandlerRertrieveInvestigationTypes========>");
  let investigation_type = req.query['investigation-type'];
  let result = {};

  switch(investigation_type) {
    case 'systemic':
      result = await mysqlFunctions.retrieveSystemicInvestigationTypes(req);
      break;
    case 'ocular':
      result = await mysqlFunctions.retrieveOpticalInvestigationTypes(req);
      break;
    case 'optical':
      result = await mysqlFunctions.retrieveOpticalInvestigationTypes(req);
      break;
    case 'all':
      result = await mysqlFunctions.retrieveAllInvestigationTypes(req);
      break;
    default:
      var returnJsonObj = {
        "msgtype" : "info",
        "message" : "Invalid investigation type specified. current valid values: systemic, optical"
      }
      console.log("Exiting apiHandlerRertrieveInvestigationTypes========>");
      res.send(returnJsonObj);
    }
  
  console.log("inside apiHandlerRertrieveInvestigationTypes:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching investigation types"
    }
    console.log("Exiting apiHandlerRertrieveInvestigationTypes========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRertrieveInvestigationTypes========>");
return res.send(JSON.parse(result));
}


async function apiHandlerRetrieveSpecialPrecautions(req, res) {
  console.log("Entering apiHandlerRetrieveSpecialPrecautions========>");
  let precaution_type = req.query['precaution-type'];
  let result = {};

  switch(precaution_type) {
    case 'systemic':
      result = await mysqlFunctions.retrieveSystemicPrecautionTypes(req);
      break;
    case 'ocular':
      result = await mysqlFunctions.retrieveOpticalPrecautionTypes(req);
      break;
    case 'all':
      result = await mysqlFunctions.retrieveAllPrecautionTypes(req);
      break;
    default:
      var returnJsonObj = {
        "msgtype" : "info",
        "message" : "Invalid precaution type specified. current valid values: systemic, optical, all"
      }
      console.log("Exiting apiHandlerRetrieveSpecialPrecautions========>");
      res.send(returnJsonObj);
    }
  
  console.log("inside apiHandlerRetrieveSpecialPrecautions:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching precaution types"
    }
    console.log("Exiting apiHandlerRetrieveSpecialPrecautions========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveSpecialPrecautions========>");
return res.send(JSON.parse(result));
}


async function apiHandlerRetrieveDiagnosisTypes(req, res) {
  console.log("Entering apiHandlerRetrieveDiagnosisTypes========>");
  let diagnosis_type = req.query['diagnosis-type'];
  let result = {};

  switch(diagnosis_type) {
    case 'systemic':
      result = await mysqlFunctions.retrieveSystemicDiagnosisTypes(req);
      break;
    case 'ocular':
      result = await mysqlFunctions.retrieveAllDiagnosisTypes(req);
      break;
    case 'optical':
      result = await mysqlFunctions.retrieveAllDiagnosisTypes(req);
      break;
    case 'all':
      result = await mysqlFunctions.retrieveAllDiagnosisTypes(req);
      break;
    default:
      var returnJsonObj = {
        "msgtype" : "info",
        "message" : "Invalid diagnosis type specified. current valid values: systemic, optical, all"
      }
      console.log("Exiting apiHandlerRetrieveDiagnosisTypes========>");
      res.send(returnJsonObj);
    }
  
  console.log("inside apiHandlerRetrieveDiagnosisTypes:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching diagnosis types"
    }
    console.log("Exiting apiHandlerRetrieveDiagnosisTypes========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveDiagnosisTypes========>");
return res.send(JSON.parse(result));
}


async function apiHandlerRetrieveInstructions(req, res){
  console.log("Entering apiHandlerRetrieveInstructions========>");
  let instruction_type = req.query['instructions-type'];
  let result = {};

  switch(instruction_type) {
    case 'generic':
      result = await mysqlFunctions.retrieveGenericInstructions(req);
      break;
    case 'ocular':
      result = await mysqlFunctions.retrieveOcularInstructions(req);
      break;
    case 'optical':
      result = await mysqlFunctions.retrieveOcularInstructions(req);
      break;
    case 'all':
      result = await mysqlFunctions.retrieveAllInstructions(req);
      break;
    default:
      var returnJsonObj = {
        "msgtype" : "info",
        "message" : "Invalid instruction type specified. current valid values: generic, ocular, all"
      }
      console.log("Exiting apiHandlerRetrieveInstructions========>");
      res.send(returnJsonObj);
    }
  
  console.log("inside apiHandlerRetrieveInstructions:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching instruction types"
    }
    console.log("Exiting apiHandlerRetrieveInstructions========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveInstructions========>");
return res.send(JSON.parse(result));
}

exports.apiHandlerRetrieveComplaintTypes = apiHandlerRetrieveComplaintTypes;
exports.apiHandlerRetrieveProcedureTypes = apiHandlerRetrieveProcedureTypes;
exports.apiHandlerRertrieveInvestigationTypes = apiHandlerRertrieveInvestigationTypes;
exports.apiHandlerRetrieveSpecialPrecautions = apiHandlerRetrieveSpecialPrecautions;
exports.apiHandlerRetrieveDiagnosisTypes = apiHandlerRetrieveDiagnosisTypes;
exports.apiHandlerRetrieveInstructions = apiHandlerRetrieveInstructions;