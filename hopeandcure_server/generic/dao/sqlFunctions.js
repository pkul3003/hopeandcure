let mysql = require('mysql2');
let config = require("../../config.js");
let callmysqlpool = require("../../mysql-functions/createMysqlSingleton.js");

async function getConnectionPool() {
  try {
    console.log("inside getConnectionPool...");
    return (await callmysqlpool.getPool());
  }
  catch (err) {
    console.log("Error in creating Mysql Pool");
    console.log("Error code is: ", err.code);
    return false;
  }
}

async function retrieveSystemicComplaintTypes(Req) {
  
    console.log("Entering retrieveSystemicComplaintTypes...");
  
    let query = "SELECT complaint_sub_type FROM complaint_master where complaint_type = 'systemic'; ";
    console.log(query);
    try {
      let pool = await getConnectionPool();
      let con = await pool.getConnection();
      let [result,fields] = await con.execute(query);
      let complaintsJson = JSON.stringify(result);
      console.log("stringified json object is: ", complaintsJson);
      if(complaintsJson === "[]") {
        console.log(" it seems no previous complaints were found .........");
        var NoComplaintTypesFound = {
          "msgtype" : "info",
          "message": "no complaint types found"
        }
        return JSON.stringify(NoComplaintTypesFound);
      }
      
      console.log("Exiting retrieveSystemicComplaintTypes...");
      return complaintsJson;
    }
    catch(err) {
      console.log("Error ====== retrieveSystemicComplaintTypes");
      console.log("Error code is: ", err.code);
  
      console.log("Exiting retrieveSystemicComplaintTypes...");
      return false;
    }
  }

  async function retrieveOcularComplaintTypes(Req) {
  
    console.log("Entering retrieveOcularComplaintTypes...");
  
    let query = "SELECT complaint_sub_type FROM complaint_master where complaint_type = 'ocular'; ";
    console.log(query);
    try {
      let pool = await getConnectionPool();
      let con = await pool.getConnection();
      let [result,fields] = await con.execute(query);
      let complaintsJson = JSON.stringify(result);
      console.log("stringified json object is: ", complaintsJson);
      if(complaintsJson === "[]") {
        console.log(" it seems no previous complaints were found .........");
        var NoComplaintTypesFound = {
          "msgtype" : "info",
          "message": "no ocular complaint types found"
        }
        return JSON.stringify(NoComplaintTypesFound);
      }
      
      console.log("Exiting retrieveOcularComplaintTypes...");
      return complaintsJson;
    }
    catch(err) {
      console.log("Error ====== retrieveOcularComplaintTypes");
      console.log("Error code is: ", err.code);
  
      console.log("Exiting retrieveOcularComplaintTypes...");
      return false;
    }
  }

async function retrieveSystemicProcedureTypes(req) {
    console.log("Entering retrieveSystemicProcedureTypes...");
  
    let query = "SELECT procedure_sub_type FROM procedure_master where procedure_type = 'systemic'; ";
    console.log(query);
    try {
      let pool = await getConnectionPool();
      let con = await pool.getConnection();
      let [result,fields] = await con.execute(query);
      let surgeryTypesJson = JSON.stringify(result);
      console.log("stringified json object is: ", surgeryTypesJson);
      if(surgeryTypesJson === "[]") {
        console.log(" it seems no previous procedures were found .........");
        var NoSurgeryTypesFound = {
          "msgtype" : "info",
          "message": "no systemic procedures types found"
        }
        return JSON.stringify(NoSurgeryTypesFound);
      }
      
      console.log("Exiting retrieveSystemicProcedureTypes...");
      return surgeryTypesJson;
    }
    catch(err) {
      console.log("Error ====== retrieveSystemicProcedureTypes");
      console.log("Error code is: ", err.code);
  
      console.log("Exiting retrieveSystemicProcedureTypes...");
      return false;
    }
}

async function retrieveOcularProcedureTypes(req) {
  console.log("Entering retrieveOcularProcedureTypes...");

  let query = "SELECT procedure_sub_type FROM procedure_master where procedure_type = 'ocular'; ";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let surgeryTypesJson = JSON.stringify(result);
    console.log("stringified json object is: ", surgeryTypesJson);
    if(surgeryTypesJson === "[]") {
      console.log(" it seems no ocular procedures types were found .........");
      var NoSurgeryTypesFound = {
        "msgtype" : "info",
        "message": "no ocular procedures types found"
      }
      return JSON.stringify(NoSurgeryTypesFound);
    }
    
    console.log("Exiting retrieveOcularProcedureTypes...");
    return surgeryTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrieveOcularProcedureTypes");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveOcularProcedureTypes...");
    return false;
  }
}

async function retrieveOpticalInvestigationTypes(req) {
  console.log("Entering retrieveOpticalInvestigationTypes...");
  
  let query = "SELECT investigation_sub_type FROM investigation_master where investigation_type = 'optical'; ";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let InvestigationTypesJson = JSON.stringify(result);
    console.log("stringified json object is: ", InvestigationTypesJson);
    if(InvestigationTypesJson === "[]") {
      console.log(" it seems no previous investigation types were found .........");
      var NoSurgeryTypesFound = {
        "msgtype" : "info",
        "message": "no optical investigation types found"
      }
      return JSON.stringify(NoSurgeryTypesFound);
    }
    
    console.log("Exiting retrieveOpticalInvestigationTypes...");
    return InvestigationTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrieveOpticalInvestigationTypes");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveOpticalInvestigationTypes...");
    return false;
  }
}

async function retrieveAllPrecautionTypes(req) {
  console.log("Entering retrieveAllPrecautionTypes...");
  
  let query = "SELECT precaution_type FROM special_precaution_master; ";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let PrecautionTypesJson = JSON.stringify(result);
    console.log("stringified json object is: ", PrecautionTypesJson);
    if(PrecautionTypesJson === "[]") {
      console.log(" it seems no previous precaution types were found .........");
      var NoPrecautionTypesFound = {
        "msgtype" : "info",
        "message": "no precaution types found"
      }
      return JSON.stringify(NoPrecautionTypesFound);
    }
    
    console.log("Exiting retrieveAllPrecautionTypes...");
    return PrecautionTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrieveAllPrecautionTypes");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveAllPrecautionTypes...");
    return false;
  }
}

async function retrieveAllDiagnosisTypes(req) {
  console.log("Entering retrieveAllDiagnosisTypes...");
  
  let query = "SELECT diagnosis_id, diagnosis_type FROM diagnosis_master; ";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let DiagnosisTypesJson = JSON.stringify(result);
    console.log("stringified json object is: ", DiagnosisTypesJson);
    if(DiagnosisTypesJson === "[]") {
      console.log(" it seems no previous diagnosis types were found .........");
      var NoDiagnosisTypesFound = {
        "msgtype" : "info",
        "message": "no diagnosis type found"
      }
      return JSON.stringify(NoDiagnosisTypesFound);
    }
    
    console.log("Exiting retrieveAllDiagnosisTypes...");
    return DiagnosisTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrieveAllDiagnosisTypes");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveAllDiagnosisTypes...");
    return false;
  }
}

async function retrieveOcularInstructions(req){
  console.log("Entering retrieveOcularInstructions...");
  
  let query = "SELECT instructions_sub_type FROM instructions_master where instructions_type = 'Occular'; ";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let InstructionTypesJson = JSON.stringify(result);
    console.log("stringified json object is: ", InstructionTypesJson);
    if(InstructionTypesJson === "[]") {
      console.log(" it seems no previous instruction types were found .........");
      var NoInstructionTypesFound = {
        "msgtype" : "info",
        "message": "no instructions type found"
      }
      return JSON.stringify(NoInstructionTypesFound);
    }
    
    console.log("Exiting retrieveOcularInstructions...");
    return InstructionTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrieveOcularInstructions");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveOcularInstructions...");
    return false;
  }
}


async function retrieveMedicalPrescription(req) {
  console.log("Entering retrieveMedicalPrescription...");
  let diagnosis_id = req.query['diagnosis-id'];

  let query = "SELECT * FROM medical_prescription_master WHERE diagnosis_id  = '" +diagnosis_id+ "';";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let PrescriptionTypesJson = JSON.stringify(result);
    console.log("stringified json object is: ", PrescriptionTypesJson);
    if(PrescriptionTypesJson === "[]") {
      console.log(" it seems no previous Prescription types were found .........");
      var NoPrescriptionTypesFound = {
        "msgtype" : "info",
        "message": "no Prescriptions type found"
      }
      return JSON.stringify(NoPrescriptionTypesFound);
    }
    
    console.log("Exiting retrieveMedicalPrescription...");
    return PrescriptionTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrieveMedicalPrescription");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveMedicalPrescription...");
    return false;
  }
}

async function retrieveOphthalmicAdvice(req) {
  console.log("Entering retrieveOphthalmicAdvice...");

  let query = "SELECT advice_type, advice_sub_type FROM advice_master WHERE advice_type = 'ophthalmic';";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let AdviceTypesJson = JSON.stringify(result);
    console.log("stringified json object is: ", AdviceTypesJson);
    if(AdviceTypesJson === "[]") {
      console.log(" it seems no previous ophthalmic advice types were found .........");
      var NoAdviceTypesFound = {
        "msgtype" : "info",
        "message": "no advice type found"
      }
      console.log("Exiting retrieveOphthalmicAdvice...");
      return JSON.stringify(NoAdviceTypesFound);
    }
    
    console.log("Exiting retrieveOphthalmicAdvice...");
    return AdviceTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrieveOphthalmicAdvice");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveOphthalmicAdvice...");
    return false;
  }
}

exports.retrieveSystemicComplaintTypes = retrieveSystemicComplaintTypes;
exports.retrieveOcularComplaintTypes = retrieveOcularComplaintTypes;
exports.retrieveSystemicProcedureTypes = retrieveSystemicProcedureTypes;
exports.retrieveOcularProcedureTypes = retrieveOcularProcedureTypes;
exports.retrieveOpticalInvestigationTypes = retrieveOpticalInvestigationTypes;
exports.retrieveAllPrecautionTypes = retrieveAllPrecautionTypes;
exports.retrieveAllDiagnosisTypes = retrieveAllDiagnosisTypes;
exports.retrieveOcularInstructions = retrieveOcularInstructions;
exports.retrieveMedicalPrescription = retrieveMedicalPrescription;
exports.retrieveOphthalmicAdvice = retrieveOphthalmicAdvice;