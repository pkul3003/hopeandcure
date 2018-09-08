'use strict'
let stubResponse = require('../../responsestubs/StubResponse.js');
let config = require("../../config.js");
let mysqlFunctions = require('../dao/sqlFunctions.js');

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

async function apiHandlerRetrieveSurgeryTypes(req, res){
    console.log("Entering apiHandlerRetrieveSurgeryTypes========>");

    let result = await mysqlFunctions.retrieveSurgeryTypes(req);
    
    console.log("inside apiHandlerRetrieveSurgeryTypes:  ", result);
    if (result === false) {
      var returnJsonObj = {
        "msgtype" : "error",
        "message": "There was an error is fetching surgery types"
      }
      console.log("Exiting apiHandlerRetrieveSurgeryTypes========>");
      return res.send(returnJsonObj);
    }
  console.log("Exiting apiHandlerRetrieveSurgeryTypes========>");
  return res.send(JSON.parse(result));
}

exports.apiHandlerRetrieveSystemicComplaintTypes = apiHandlerRetrieveSystemicComplaintTypes;
exports.apiHandlerRetrieveSurgeryTypes = apiHandlerRetrieveSurgeryTypes;