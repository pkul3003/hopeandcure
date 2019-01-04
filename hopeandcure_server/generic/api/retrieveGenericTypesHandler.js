'use strict'
let stubResponse = require('../../responsestubs/StubResponse.js');
let config = require("../../config.js");
let mysqlFunctions = require('../dao/retrieveGenericTypesSQLFunctions.js');

async function apiHandlerRetrieveComplaintTypes(req, res) {
    console.log("Entering apiHandlerRetrieveComplaintTypes========>");

    //let complaint_type = req.param('complaint-type');
    let complaint_type = req.query['complaint-type'];
    let result = await mysqlFunctions.retrieveComplaintTypes(req);
  
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

  async function apiHandlerRetrieveSurgicalProcedureTypes(req, res){
    console.log("Entering apiHandlerRetrieveSurgicalProcedureTypes========>");
    
    let result = await mysqlFunctions.retrieveSurgicalProcedureTypes(req);
        
    console.log("inside apiHandlerRetrieveSurgicalProcedureTypes:  ", result);
    if (result === false) {
      var returnJsonObj = {
        "msgtype" : "error",
        "message": "There was an error is fetching procedure types"
      }
      console.log("Exiting apiHandlerRetrieveSurgicalProcedureTypes========>");
      return res.send(returnJsonObj);
    }
  console.log("Exiting apiHandlerRetrieveSurgicalProcedureTypes========>");
  return res.send(JSON.parse(result));
}

async function apiHandlerRetrieveInvestigationTypes(req, res) {
  console.log("Entering apiHandlerRertrieveInvestigationTypes========>");
  console.log(req.query['investigation-type']);
  let result = await mysqlFunctions.retrieveInvestigationTypes(req);
  
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
  
  let result = await mysqlFunctions.retrieveSpecialPrecautionTypes(req);
  
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
  
  let result =  await mysqlFunctions.retrieveDiagnosisTypes(req);
     
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
  
  let result = await mysqlFunctions.retrieveInstructionTypes(req);
  
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
  
  let result = await mysqlFunctions.retrieveMedicalAdviceTypes(req);
  
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
  let result = await mysqlFunctions.retrieveMinorOPDProcedureTypes(req);
      
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


async function apiHandlerRetrieveComplaintMaster(req, res) {
  console.log("Entering apiHandlerRetrieveComplaintMaster========>");

  //let complaint_type = req.param('complaint-type');
  
  let result = await mysqlFunctions.retrieveComplaintMaster(req);

  console.log("inside apiHandlerRetrieveComplaintMaster, after BE call:  ", result);
  if (result === false || result === '{}') {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching complaint master data"
    }
    console.log("Exiting apiHandlerRetrieveComplaintMaster========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveComplaintMaster========>");
return res.send(JSON.parse(result));
}

async function apiHandlerRetrieveInvestigationMaster(req, res) {
  console.log("Entering apiHandlerRetrieveInvestigationMaster========>");
  console.log(req.query['investigation-type']);
  let result = await mysqlFunctions.retrieveInvestigationMaster(req);
  
  console.log("inside apiHandlerRetrieveInvestigationMaster:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching investigation master data"
    }
    console.log("Exiting apiHandlerRetrieveInvestigationMaster========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveInvestigationMaster========>");
return res.send(JSON.parse(result));
}


async function apiHandlerRetrieveSpecialPrecautionMaster(req, res) {
  console.log("Entering apiHandlerRetrieveSpecialPrecautionMaster========>");
  
  let result = await mysqlFunctions.retrieveSpecialPrecautionMaster(req);
  
  console.log("inside apiHandlerRetrieveSpecialPrecautionMaster:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching special precaution master data"
    }
    console.log("Exiting apiHandlerRetrieveSpecialPrecautionMaster========>");
    return res.send(returnJsonObj);
  }
  console.log("Exiting apiHandlerRetrieveSpecialPrecautionMaster========>");
  return res.send(JSON.parse(result));
}

async function apiHandlerRetrieveDiagnosisMaster(req, res) {
  console.log("Entering apiHandlerRetrieveDiagnosisMaster========>");
  
  let result =  await mysqlFunctions.retrieveDiagnosisMaster(req);
     
  console.log("inside apiHandlerRetrieveDiagnosisMaster:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching diagnosis master data"
    }
    console.log("Exiting apiHandlerRetrieveDiagnosisMaster========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveDiagnosisMaster========>");
return res.send(JSON.parse(result));
}

async function apiHandlerRetrieveInstructionMaster(req, res){
  console.log("Entering apiHandlerRetrieveInstructionMaster========>");
  
  let result = await mysqlFunctions.retrieveInstructionMaster(req);
  
  console.log("inside apiHandlerRetrieveInstructionMaster:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching instruction master data"
    }
    console.log("Exiting apiHandlerRetrieveInstructionMaster========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveInstructionMaster========>");
return res.send(JSON.parse(result));
}

async function apiHandlerRetrieveMedicalAdviceMaster(req, res) {
  console.log("Entering apiHandlerRetrieveMedicalAdviceTypes========>");
  
  let result = await mysqlFunctions.retrieveMedicalAdviceMaster(req);
  
  console.log("inside apiHandlerRetrieveMedicalAdviceMaster:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching advice master data"
    }
    console.log("Exiting apiHandlerRetrieveMedicalAdviceMaster========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveMedicalAdviceMaster========>");
return res.send(JSON.parse(result));
}

async function apiHandlerRetrieveMinorPorcedureMaster(req, res){
  console.log("Entering apiHandlerRetrieveMinorPorcedureTypes========>");
  let result = await mysqlFunctions.retrieveMinorOPDProcedureMaster(req);
      
  console.log("inside apiHandlerRetrieveMinorPorcedureMaster:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching minor OPD Procedures master data"
    }
    console.log("Exiting apiHandlerRetrieveMinorPorcedureMaster========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetrieveMinorPorcedureMaster========>");
return res.send(JSON.parse(result));
}

async function apiHandlerRetrieveSurgicalProcedureMaster(req, res){
  console.log("Entering apiHandlerRetriveSurgicalProcedureMaster========>");
  
  let result = await mysqlFunctions.retrieveSurgicalProcedureMaster(req);
      
  console.log("inside apiHandlerRetriveSurgicalProcedureMaster:  ", result);
  if (result === false) {
    var returnJsonObj = {
      "msgtype" : "error",
      "message": "There was an error is fetching surgical procedure master data"
    }
    console.log("Exiting apiHandlerRetriveSurgicalProcedureMaster========>");
    return res.send(returnJsonObj);
  }
console.log("Exiting apiHandlerRetriveSurgicalProcedureMaster========>");
return res.send(JSON.parse(result));
}

  exports.apiHandlerRetrieveComplaintTypes = apiHandlerRetrieveComplaintTypes;
  exports.apiHandlerRetrieveSurgicalProcedureTypes = apiHandlerRetrieveSurgicalProcedureTypes;
  exports.apiHandlerRetrieveInvestigationTypes = apiHandlerRetrieveInvestigationTypes;
  exports.apiHandlerRetrieveSpecialPrecautionTypes = apiHandlerRetrieveSpecialPrecautionTypes;
  exports.apiHandlerRetrieveDiagnosisTypes = apiHandlerRetrieveDiagnosisTypes;
  exports.apiHandlerRetrieveInstructionTypes = apiHandlerRetrieveInstructionTypes;
  exports.apiHandlerRetrieveMedicalAdviceTypes = apiHandlerRetrieveMedicalAdviceTypes;
  exports.apiHandlerRetrievePrescriptionTypes = apiHandlerRetrievePrescriptionTypes;
  exports.apiHandlerRetrieveMinorPorcedureTypes = apiHandlerRetrieveMinorPorcedureTypes;
  exports.apiHandlerSearchMedicineByName = apiHandlerSearchMedicineByName;
  exports.apiHandlerRetrievePatientStatusMaster = apiHandlerRetrievePatientStatusMaster;

  exports.apiHandlerRetrieveComplaintMaster=apiHandlerRetrieveComplaintMaster;
  exports.apiHandlerRetrieveInvestigationMaster=apiHandlerRetrieveInvestigationMaster;  
  exports.apiHandlerRetrieveSpecialPrecautionMaster=apiHandlerRetrieveSpecialPrecautionMaster;
  exports.apiHandlerRetrieveDiagnosisMaster=apiHandlerRetrieveDiagnosisMaster;
  exports.apiHandlerRetrieveInstructionMaster=apiHandlerRetrieveInstructionMaster;
  exports.apiHandlerRetrieveMedicalAdviceMaster=apiHandlerRetrieveMedicalAdviceMaster;
  exports.apiHandlerRetrieveMinorPorcedureMaster=apiHandlerRetrieveMinorPorcedureMaster;
  exports.apiHandlerRetrieveSurgicalProcedureMaster=apiHandlerRetrieveSurgicalProcedureMaster;
  