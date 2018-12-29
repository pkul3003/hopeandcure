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
        return res.send(returnJsonObj);
      }
  
    console.log("inside apiHandlerRetrieveComplaintTypes, after BE call:  ", result);
    if (result === false || result === '{}') {
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
        return res.send(returnJsonObj);
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

async function apiHandlerRertrieveInvestigations(req, res) {
  console.log("Entering apiHandlerRertrieveInvestigations========>");
  let investigation_type = req.query['investigation-type'];
  let result = {};

  switch(investigation_type) {
    case 'systemic':
      result = await mysqlFunctions.retrieveSystemicInvestigations(req);
      break;
    case 'ocular':
      result = await mysqlFunctions.retrieveOpticalInvestigations(req);
      break;
    case 'optical':
      result = await mysqlFunctions.retrieveOpticalInvestigations(req);
      break;
    case 'all':
      result = await mysqlFunctions.retrieveAllInvestigationTypes(req);
      break;
    default:
      var returnJsonObj = {
        "msgtype" : "info",
        "message" : "Invalid investigation type specified. current valid values: systemic, optical"
      }
      console.log("Exiting apiHandlerRertrieveInvestigations========>");
      return res.send(returnJsonObj);
    }
  
  console.log("inside apiHandlerRertrieveInvestigations:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching investigation types"
    }
    console.log("Exiting apiHandlerRertrieveInvestigations========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRertrieveInvestigations========>");
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
      return res.send(returnJsonObj);
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
      return res.send(returnJsonObj);
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
  
  result = await mysqlFunctions.retrieveInstructions(req);
  
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

// retrieve medical prescription for a given diagnosis
async function apiHandlerRetrievePrescription(req, res){
  console.log("Entering apiHandlerRetrievePrescription========>");
  
  let result = await mysqlFunctions.retrieveMedicalPrescription(req);
  console.log("inside apiHandlerRetrievePrescription:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching medical prescription for a given diagnosis id"
    }
    console.log("Exiting apiHandlerRetrievePrescription========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrievePrescription========>");
return res.send(JSON.parse(result));
}

async function apiHandlerRetrieveMedicalAdvice(req, res) {
  console.log("Entering apiHandlerRetrieveMedicalAdvice========>");
  
  result = await mysqlFunctions.retrieveAdvice(req);
  
  console.log("inside apiHandlerRetrieveMedicalAdvice:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching advice"
    }
    console.log("Exiting apiHandlerRetrieveMedicalAdvice========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveMedicalAdvice========>");
return res.send(JSON.parse(result));
}

async function apiHandlerRetrieveMinorPorcedures(req, res){
  console.log("Entering apiHandlerRetrieveMinorPorcedures========>");
  let result = {};

  result = await mysqlFunctions.retrieveMinorOPDProcedures(req);
  console.log("inside apiHandlerRetrieveMinorPorcedures:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching minor OPD Procedures."
    }
    console.log("Exiting apiHandlerRetrieveMinorPorcedures========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveMinorPorcedures========>");
return res.send(JSON.parse(result));
}

async function apiHandlerSearchMedicineByName(req, res) {
  console.log("Entering apiHandlerSearchMedicineByName========>");
  let result = {};

  result = await mysqlFunctions.searchMedicineByName(req);
  console.log("inside apiHandlerSearchMedicineByName:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error in searching the medicine"
    }
    console.log("Exiting apiHandlerSearchMedicineByName========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerSearchMedicineByName========>");
return res.send(JSON.parse(result));
}

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

    let response = await mysqlFunctions.createNewProcedure(req);
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

// Retrive Advice
async function apiHandlerRetriveAdvice(req,res){
	console.log("Entering apiHandlerRetriveAdvice========>");

    let response = await mysqlFunctions.retrieveAdvice(req);
    console.log("inside apiHandlerRetriveAdvice:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error in retriving Advice "
			}
  	console.log("Exiting apiHandlerRetriveAdvice========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerRetriveAdvice========>");
		return res.json(response);
}

// Retrive Complaint
async function apiHandlerRetriveComplaint(req,res){
	console.log("Entering apiHandlerRetriveComplaint========>");

    let response = await mysqlFunctions.retrieveComplaint(req);
    console.log("inside apiHandlerRetriveComplaint:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error in retriving Complaint "
			}
  	console.log("Exiting apiHandlerRetriveComplaint========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerRetriveComplaint========>");
		return res.json(response);
}

// Retrive Diagnosis
async function apiHandlerRetriveDiagnosis(req,res){
	console.log("Entering apiHandlerRetriveDiagnosis========>");

    let response = await mysqlFunctions.retrieveDiagnosis(req);
    console.log("inside apiHandlerRetriveDiagnosis:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error in retriving Diagnosis "
			}
  	console.log("Exiting apiHandlerRetriveDiagnosis========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerRetriveDiagnosis========>");
		return res.json(response);
}

// Retrive Dosage Instruction
async function apiHandlerRetriveDosageInstruction(req,res){
	console.log("Entering apiHandlerRetriveDosageInstruction========>");

    let response = await mysqlFunctions.retrieveDosageInstruction(req);
    console.log("inside apiHandlerRetriveDosageInstruction:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error in retriving Dosage Instruction "
			}
  	console.log("Exiting apiHandlerRetriveDosageInstruction========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerRetriveDosageInstruction========>");
		return res.json(response);
}

// Retrive  Instruction
async function apiHandlerRetriveInstruction(req,res){
	console.log("Entering apiHandlerRetriveInstruction========>");

    let response = await mysqlFunctions.retrieveInstruction(req);
    console.log("inside apiHandlerRetriveInstruction:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error in retriving  Instruction "
			}
  	console.log("Exiting apiHandlerRetriveInstruction========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerRetriveInstruction========>");
		return res.json(response);
}

// Retrive  Investigation
async function apiHandlerRetriveInvestigation(req,res){
	console.log("Entering apiHandlerRetriveInvestigation========>");

    let response = await mysqlFunctions.retrieveInvestigation(req);
    console.log("inside apiHandlerRetriveInvestigation:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error in retriving  Investigation "
			}
  	console.log("Exiting apiHandlerRetriveInvestigation========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerRetriveInvestigation========>");
		return res.json(response);
}

// Retrive  Medical Prescription
async function apiHandlerRetriveMedicalPrescription(req,res){
	console.log("Entering apiHandlerRetriveMedicalPrescription========>");

    let response = await mysqlFunctions.retrieveMedicalPrescription(req);
    console.log("inside apiHandlerRetriveMedicalPrescription:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error in retriving  Medical Prescription "
			}
  	console.log("Exiting apiHandlerRetriveMedicalPrescription========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerRetriveMedicalPrescription========>");
		return res.json(response);
}

// Retrive  Minor OPD Procedure
async function apiHandlerRetriveMinorOPDProcedure(req,res){
	console.log("Entering apiHandlerRetriveMinorOPDProcedure========>");

    let response = await mysqlFunctions.retrieveMinorOpdProcedure(req);
    console.log("inside apiHandlerRetriveMinorOPDProcedure:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error in retriving  Minor OPD Procedure "
			}
  	console.log("Exiting apiHandlerRetriveMinorOPDProcedure========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerRetriveMinorOPDProcedure========>");
		return res.json(response);
}

// Retrive   Procedure
async function apiHandlerRetriveProcedure(req,res){
	console.log("Entering apiHandlerRetriveProcedure========>");

    let response = await mysqlFunctions.retrieveProcedure(req);
    console.log("inside apiHandlerRetriveProcedure:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error in retriving Procedure "
			}
  	console.log("Exiting apiHandlerRetriveProcedure========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerRetriveProcedure========>");
		return res.json(response);
}

// Retrive   Special Precaution
async function apiHandlerRetriveSpecialPrecaution(req,res){
	console.log("Entering apiHandlerRetriveSpecialPrecaution========>");

    let response = await mysqlFunctions.retrieveSpecialPrecaution(req);
    console.log("inside apiHandlerRetriveSpecialPrecaution:  ", response);

		if (response === false) {
			var returnJsonObj = {
				"msgtype" : "error",
				"message": "There was an error in retriving Special Precaution "
			}
  	console.log("Exiting apiHandlerRetriveSpecialPrecaution========>");
			return res.send(returnJsonObj);
		}
  	console.log("Exiting apiHandlerRetriveSpecialPrecaution========>");
		return res.json(response);
}




exports.apiHandlerCreateComplaint = apiHandlerCreateComplaint;
exports.apiHandlerCreateInvestigation = apiHandlerCreateInvestigation;
exports.apiHandlerCreateProcedure = apiHandlerCreateProcedure;
exports.apiHandlerSpecialPrecaution = apiHandlerSpecialPrecaution;
exports.apiHandlerCreateNewDiagnosis = apiHandlerCreateNewDiagnosis;
exports.apiHandlerCreateNewInstruction = apiHandlerCreateNewInstruction;
exports.apiHandlerCreateAdvice = apiHandlerCreateAdvice;
exports.apiHandlerDosageInstruction = apiHandlerDosageInstruction;
exports.apiHandlerMinorOpdProcedure = apiHandlerMinorOpdProcedure;
exports.apiHandlerMedicine = apiHandlerMedicine;
exports.apiHandlerMedicalPrescription = apiHandlerMedicalPrescription;


exports.apiHandlerRetrieveComplaintTypes = apiHandlerRetrieveComplaintTypes;
exports.apiHandlerRetrieveProcedureTypes = apiHandlerRetrieveProcedureTypes;
exports.apiHandlerRertrieveInvestigations = apiHandlerRertrieveInvestigations;
exports.apiHandlerRetrieveSpecialPrecautions = apiHandlerRetrieveSpecialPrecautions;
exports.apiHandlerRetrieveDiagnosisTypes = apiHandlerRetrieveDiagnosisTypes;
exports.apiHandlerRetrieveInstructions = apiHandlerRetrieveInstructions;
exports.apiHandlerRetrievePrescription = apiHandlerRetrievePrescription;
exports.apiHandlerRetrieveMedicalAdvice = apiHandlerRetrieveMedicalAdvice;
exports.apiHandlerRetrieveMinorPorcedures = apiHandlerRetrieveMinorPorcedures;
exports.apiHandlerSearchMedicineByName = apiHandlerSearchMedicineByName;