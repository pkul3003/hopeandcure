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

async function apiHandlerRertrieveInvestigationTypes(req, res) {
  console.log("Entering apiHandlerRertrieveInvestigationTypes========>");
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
      console.log("Exiting apiHandlerRertrieveInvestigationTypes========>");
      return res.send(returnJsonObj);
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


async function apiHandlerRetrieveSpecialPrecautionTypes(req, res) {
  console.log("Entering apiHandlerRetrieveSpecialPrecautionTypes========>");
  let precaution_type = req.query['precaution-type'];
  let result = {};

  switch(precaution_type) {
    case 'systemic':
      result = await mysqlFunctions.retrieveSystemicPrecautionTypes(req);
      break;
    case 'ocular':
      result = await mysqlFunctions.retrieveOpticalPrecautionTypes(req);
      break;
    case 'optical':
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
      console.log("Exiting apiHandlerRetrieveSpecialPrecautionTypes========>");
      return res.send(returnJsonObj);
    }
  
  console.log("inside apiHandlerRetrieveSpecialPrecautionTypes:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching precaution types"
    }
    console.log("Exiting apiHandlerRetrieveSpecialPrecautionTypes========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveSpecialPrecautionTypes========>");
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
      result = await mysqlFunctions.retrieveOcularDiagnosisTypes(req);
      break;
    case 'optical':
      result = await mysqlFunctions.retrieveOcularDiagnosisTypes(req);
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

async function apiHandlerRetrieveInstructionTypes(req, res){
  console.log("Entering apiHandlerRetrieveInstructionTypes========>");
  let instruction_type = req.query['instruction-type'];
  let result = {};

  switch(instruction_type) {
    case 'systemic':
      result = await mysqlFunctions.retrieveSystemicInstructionTypes(req);
      break;
    case 'ocular':
      result = await mysqlFunctions.retrieveOcularInstructionTypes(req);
      break;
    case 'optical':
      result = await mysqlFunctions.retrieveOcularInstructionTypes(req);
      break;
    case 'all':
      result = await mysqlFunctions.retrieveAllInstructionTypes(req);
      break;
    default:
      var returnJsonObj = {
        "msgtype" : "info",
        "message" : "Invalid instruction type specified. current valid values: systemic, optical, all"
      }
      console.log("Exiting apiHandlerRetrieveInstructionTypes========>");
      return res.send(returnJsonObj);
    }
  
  console.log("inside apiHandlerRetrieveInstructionTypes:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching instruction types"
    }
    console.log("Exiting apiHandlerRetrieveInstructionTypes========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveInstructionTypes========>");
return res.send(JSON.parse(result));
}


// retrieve medical prescription for a given diagnosis
async function apiHandlerRetrievePrescriptionTypes(req, res){
  console.log("Entering apiHandlerRetrievePrescription========>");

  let result = await mysqlFunctions.retrieveMedicalPrescriptionTypes(req);
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

async function apiHandlerRetrieveMedicalAdviceTypes(req, res) {
  console.log("Entering apiHandlerRetrieveMedicalAdviceTypes========>");
  
  let advice_type = req.query['advice-type'];
  let result = {};

  switch(advice_type) {
    case 'systemic':
      result = await mysqlFunctions.retrieveSystemicAdviceTypes(req);
      break;
    case 'ocular':
      result = await mysqlFunctions.retrieveOcularAdviceTypes(req);
      break;
    case 'optical':
      result = await mysqlFunctions.retrieveOcularAdviceTypes(req);
      break;
    case 'all':
      result = await mysqlFunctions.retrieveAllAdviceTypes(req);
      break;
    default:
      var returnJsonObj = {
        "msgtype" : "info",
        "message" : "Invalid advice type specified. current valid values: systemic, optical, all"
      }
      console.log("Exiting apiHandlerRetrieveMedicalAdviceTypes========>");
      return res.send(returnJsonObj);
    }
  
  console.log("inside apiHandlerRetrieveMedicalAdviceTypes:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching advice"
    }
    console.log("Exiting apiHandlerRetrieveMedicalAdviceTypes========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveMedicalAdviceTypes========>");
return res.send(JSON.parse(result));
}

async function apiHandlerRetrieveMinorPorcedureTypes(req, res){
  console.log("Entering apiHandlerRetrieveMinorPorcedureTypes========>");

  let min_proc_type = req.query['minor-procedure-type'];
  let result = {};

  switch(min_proc_type) {
    case 'systemic':
      result = await mysqlFunctions.retrieveSystemicMinorOPDProcedureTypes(req);
      break;
    case 'ocular':
      result = await mysqlFunctions.retrieveOcularMinorOPDProcedureTypes(req);
      break;
    case 'optical':
      result = await mysqlFunctions.retrieveOcularMinorOPDProcedureTypes(req);
      break;
    case 'all':
      result = await mysqlFunctions.retrieveAllMinorOPDProcedureTypes(req);
      break;
    default:
      var returnJsonObj = {
        "msgtype" : "info",
        "message" : "Invalid minor OPD Procedure type specified. current valid values: systemic, optical, all"
      }
      console.log("Exiting apiHandlerRetrieveMinorPorcedureTypes========>");
      return res.send(returnJsonObj);
    }
  console.log("inside apiHandlerRetrieveMinorPorcedureTypes:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching minor OPD Procedures."
    }
    console.log("Exiting apiHandlerRetrieveMinorPorcedureTypes========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveMinorPorcedureTypes========>");
return res.send(JSON.parse(result));
}

async function apiHandlerRetrievePatientStatusMaster(req, res){
  console.log("Entering apiHandlerRetrievePatientStatusMaster========>");
  let result = {};

  result = await mysqlFunctions.retrievePatientStatusMaster(req);
  console.log("inside apiHandlerRetrievePatientStatusMaster:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching Patient Status from master"
    }
    console.log("Exiting apiHandlerRetrievePatientStatusMaster========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrievePatientStatusMaster========>");
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

  exports.apiHandlerRetrieveComplaintTypes = apiHandlerRetrieveComplaintTypes;
  exports.apiHandlerRetrieveProcedureTypes = apiHandlerRetrieveProcedureTypes;
  exports.apiHandlerRertrieveInvestigationTypes = apiHandlerRertrieveInvestigationTypes;
  exports.apiHandlerRetrieveSpecialPrecautionTypes = apiHandlerRetrieveSpecialPrecautionTypes;
  exports.apiHandlerRetrieveDiagnosisTypes = apiHandlerRetrieveDiagnosisTypes;
  exports.apiHandlerRetrieveInstructionTypes = apiHandlerRetrieveInstructionTypes;
  exports.apiHandlerRetrieveMedicalAdviceTypes = apiHandlerRetrieveMedicalAdviceTypes;
  exports.apiHandlerRetrievePrescriptionTypes = apiHandlerRetrievePrescriptionTypes;
  exports.apiHandlerRetrieveMinorPorcedureTypes = apiHandlerRetrieveMinorPorcedureTypes;
  exports.apiHandlerSearchMedicineByName = apiHandlerSearchMedicineByName;
  exports.apiHandlerRetrievePatientStatusMaster = apiHandlerRetrievePatientStatusMaster;