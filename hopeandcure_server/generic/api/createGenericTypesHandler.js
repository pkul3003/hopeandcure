'use strict'
let stubResponse = require('../../responsestubs/StubResponse.js');
let config = require("../../config.js");
let mysqlFunctions = require('../dao/createGenericTypesSQLFunctions.js');

// create a new complaint
async function apiHandlerCreateComplaint(req,res){
	console.log("Entering apiHandlerCreateComplaint========>");

    let response = await mysqlFunctions.createNewComplaint(req);
    console.log("inside apiHandlerCreateComplaint:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is creating complaint"
			}
  	console.log("Exiting apiHandlerCreateComplaint========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerCreateComplaint========>");
		return res.json(response);
}

// create a new Investigation
async function apiHandlerCreateInvestigation(req,res){
	console.log("Entering apiHandlerCreateInvestigation========>");

    let response = await mysqlFunctions.createNewInvestigation(req);
    console.log("inside apiHandlerCreateInvestigation:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is creating Investigation"
			}
  	console.log("Exiting apiHandlerCreateInvestigation========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerCreateInvestigation========>");
		return res.json(response);
}

// create a new Procedure
async function apiHandlerCreateProcedure(req,res){
	console.log("Entering apiHandlerCreateProcedure========>");

  response = mysqlFunctions.createNewProcedure(req);
  console.log("inside apiHandlerCreateProcedure:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is creating Procedure"
			}
  	console.log("Exiting apiHandlerCreateProcedure========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerCreateProcedure========>");
		return res.json(response);
}

// create a new Special Precaution
async function apiHandlerSpecialPrecaution(req,res){
	console.log("Entering apiHandlerSpecialPrecaution========>");

    let response = await mysqlFunctions.createNewSpecialPrecaution(req);
    console.log("inside apiHandlerSpecialPrecaution:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is creating Special Precaution"
			}
  	console.log("Exiting apiHandlerSpecialPrecaution========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerSpecialPrecaution========>");
		return res.json(response);
}

// create a new Diagnosis
async function apiHandlerCreateNewDiagnosis(req,res){
	console.log("Entering apiHandlerCreateNewDiagnosis========>");

    let response = await mysqlFunctions.createNewDiagnosis(req);
    console.log("inside apiHandlerDiagnosis:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is creating Diagnosis"
			}
  	console.log("Exiting apiHandlerCreateNewDiagnosis========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerCreateNewDiagnosis========>");
		return res.json(response);
}

// create a new Instruction
async function apiHandlerCreateNewInstruction(req,res){
	console.log("Entering apiHandlerCreateNewInstruction========>");

    let response = await mysqlFunctions.createNewInstruction(req);
    console.log("inside apiHandlerInstruction:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is creating Instruction"
			}
  	console.log("Exiting apiHandlerCreateNewInstruction========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerCreateNewInstruction========>");
		return res.json(response);
}

// create a new Advice
async function apiHandlerCreateAdvice(req,res){
	console.log("Entering apiHandlerCreateAdvice========>");

    let response = await mysqlFunctions.createNewAdvice(req);
    console.log("inside apiHandlerCreateAdvice:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is creating Advice"
			}
  	console.log("Exiting apiHandlerCreateAdvice========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerCreateAdvice========>");
		return res.json(response);
}

// create a new Dosage Instruction
async function apiHandlerDosageInstruction(req,res){
	console.log("Entering apiHandlerDosageInstruction========>");

    let response = await mysqlFunctions.createNewDosageInstruction(req);
    console.log("inside apiHandlerDosageInstruction:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is creating Dosage Instruction"
			}
  	console.log("Exiting apiHandlerDosageInstruction========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerDosageInstruction========>");
		return res.json(response);
}

// create a new Minor OPD Preocedure
async function apiHandlerMinorOpdProcedure(req,res){
	console.log("Entering apiHandlerMinorOpdProcedure========>");

    let response = await mysqlFunctions.createNewMinorOpdProcedure(req);
    console.log("inside apiHandlerMinorOpdProcedure:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is creating Minor OPD Preocedure "
			}
  	console.log("Exiting apiHandlerMinorOpdProcedure========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerMinorOpdProcedure========>");
		return res.json(response);
}

// create a new  Medicine
async function apiHandlerMedicine(req,res){
	console.log("Entering apiHandlerMedicine========>");

    let response = await mysqlFunctions.createNewMedicine(req);
    console.log("inside apiHandlerMedicine:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is creating Medicine "
			}
  	console.log("Exiting apiHandlerMedicine========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerMedicine========>");
		return res.json(response);
}

// create a new Medical Prescription
async function apiHandlerMedicalPrescription(req,res){
	console.log("Entering apiHandlerMedicalPrescription========>");

    let response = await mysqlFunctions.createNewMedicinePrescription(req);
    console.log("inside apiHandlerMedicalPrescription:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error is creating Medical Prescription "
			}
  	console.log("Exiting apiHandlerMedicalPrescription========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerMedicalPrescription========>");
		return res.json(response);
}

exports.apiHandlerCreateComplaint = apiHandlerCreateComplaint;
exports.apiHandlerCreateInvestigation = apiHandlerCreateInvestigation;
exports.apiHandlerCreateProcedure = apiHandlerCreateProcedure;
exports.apiHandlerSpecialPrecaution = apiHandlerSpecialPrecaution;
exports.apiHandlerCreateNewDiagnosis = apiHandlerCreateNewDiagnosis;
exports.apiHandlerCreateNewInstruction = apiHandlerCreateNewInstruction;
exports.apiHandlerCreateAdvice = apiHandlerCreateAdvice ;
exports.apiHandlerDosageInstruction = apiHandlerDosageInstruction;
exports.apiHandlerMinorOpdProcedure = apiHandlerMinorOpdProcedure;
exports.apiHandlerMedicine = apiHandlerMedicine;
exports.apiHandlerMedicalPrescription = apiHandlerMedicalPrescription;