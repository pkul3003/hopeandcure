'use strict'
let stubResponse = require('../../responsestubs/StubResponse.js');
let config = require("../../config.js");
let globalsqlFunctions = require('../../mysql-functions/mysqlFunctions.js');
let mysqlFunctions = require('../dao/sqlfunctions.js');

async function apiHandlerCreatePatientBill(req, res) {
    console.log("Entering apiHandlerCreatePatientBill========>");
      let response = await mysqlFunctions.createPatientBillRecord(req);
      console.log("inside apiHandlerCreatePatientBill:  ", response);
  
      if (response === false) {
          var returnJsonObj = {
              "msgtype" : "error",
              "message": "There was an error in creating the patient bill"
          }
          console.log("Exiting apiHandlerCreatePatientBill========>");
          return res.send(returnJsonObj);
      }
  
      var returnJsonObj = {
          "msgtype" : "success",
          "message": "patient bill and progress status updated successfully"
        }
        console.log("Exiting apiHandlerCreatePatientBill========>");
        return res.json(returnJsonObj);
  }

async function apiHandlerRetrieveModesOfPayment(req, res) {

    console.log("Entering apiHandlerRetrieveModesOfPayment...");

    let result = await mysqlFunctions.retrieveModesOfPayment(req);
    console.log("inside apiHandlerRetrieveModesOfPayment:  ", result);
  
    if (result === false) {
      var returnJsonObj = {
        "msgtype" : "error",
        "message": "There was an error is fetching modes of payment"
      }
      return res.send(returnJsonObj);
    }
    console.log("Exiting apiHandlerRetrieveModesOfPayment========>");
    return res.send(JSON.parse(result));


  }
exports.apiHandlerCreatePatientBill = apiHandlerCreatePatientBill;
exports.apiHandlerRetrieveModesOfPayment = apiHandlerRetrieveModesOfPayment;