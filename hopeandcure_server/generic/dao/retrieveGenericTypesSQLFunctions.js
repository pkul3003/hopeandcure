let mysql = require('mysql2');
let config = require("../../config.js");
let callmysqlpool = require("../../mysql-functions/createMysqlSingleton.js");
let common_functions = require("../../common-functions/commonFunctions.js");

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

async function retrieveComplaintTypes(req) {
  
    console.log("Entering retrieveComplaintTypes...");
    let complaint_type = req.query['complaint-type'];
    let query = "";
    if (common_functions.compareStrings(complaint_type, "all", true) === true) {
      query = "SELECT complaint_sub_type FROM complaint_master ORDER BY complaint_sub_type; ";
    } else {
      query = "SELECT complaint_sub_type FROM complaint_master WHERE complaint_type ='"+ complaint_type+ 
              "' ORDER BY complaint_sub_type; ";
    }
  
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
        con.release();
        console.log("Exiting retrieveComplaintTypes...");
        return JSON.stringify(NoComplaintTypesFound);
      }
      con.release();
      console.log("Exiting retrieveComplaintTypes...");
      return complaintsJson;
    }
    catch(err) {
      console.log("Error ====== retrieveComplaintTypes");
      console.log("Error code is: ", err.code);
      con.release();
      console.log("Exiting retrieveComplaintTypes...");
      return false;
    }
  }

// Surgery or IPD Procedure types
async function retrieveSurgicalProcedureTypes(req) {
    console.log("Entering retrieveSurgicalProcedureTypes...");
    let procedure_type = req.query['procedure-type'];
    let query = "";
  
    if (common_functions.compareStrings(procedure_type, "all", true) === true) {
      query = "SELECT procedure_sub_type FROM procedures_master ORDER BY procedure_sub_type; ";
    } else {
      query = "SELECT procedure_sub_type FROM procedures_master WHERE procedure_type = '"+ procedure_type+
              "' ORDER BY procedure_sub_type; ";
    }
    
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
          "message": "no surgical procedures types found"
        }
        con.release();
        console.log("Exiting retrieveSurgicalProcedureTypes...");
        return JSON.stringify(NoSurgeryTypesFound);
      }
      con.release();
      console.log("Exiting retrieveSurgicalProcedureTypes...");
      return surgeryTypesJson;
    }
    catch(err) {
      console.log("Error ====== retrieveSurgicalProcedureTypes");
      console.log("Error code is: ", err.code);
      con.release();
      console.log("Exiting retrieveSurgicalProcedureTypes...");
      return false;
    }
}


async function retrieveInvestigationTypes(req) {
  console.log("Entering retrieveInvestigationTypes...");
  let investigation_type = req.query['investigation-type'];

  let query = "";
  if (common_functions.compareStrings(investigation_type, "all", true) === true) {
      query = "SELECT investigation_sub_type FROM investigations_master ORDER BY investigation_sub_type;";
  } else {
    query = "SELECT investigation_sub_type FROM investigations_master WHERE investigation_type ='" +investigation_type+ 
            "' ORDER BY investigation_sub_type;";
  }

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
      con.release();
      console.log("Exiting retrieveInvestigationTypes...");
      return JSON.stringify(NoSurgeryTypesFound);
    }
    con.release();
    console.log("Exiting retrieveInvestigationTypes...");
    return InvestigationTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrieveInvestigationTypes");
    console.log("Error code is: ", err.code);
    con.release();
    console.log("Exiting retrieveInvestigationTypes...");
    return false;
  }
}

async function retrieveSpecialPrecautionTypes(req) {
  console.log("Entering retrieveSpecialPrecautionTypes...");
  let precaution_type = req.query['precaution-type'];
  let query = "";
  if (common_functions.compareStrings(precaution_type, "all", true) === true) {
      query = "SELECT precaution_sub_type FROM special_precautions_master ORDER BY precaution_sub_type;";
  } else {
    query = "SELECT precaution_sub_type FROM special_precautions_master WHERE precaution_type ='" +precaution_type+ 
            "' ORDER BY precaution_sub_type;";
  }

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
      console.log("Exiting retrieveSpecialPrecautionTypes...");
      con.release();
      return JSON.stringify(NoPrecautionTypesFound);
    }
    con.release();    
    console.log("Exiting retrieveSpecialPrecautionTypes...");
    return PrecautionTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrieveAllPrecautionTypes");
    console.log("Error code is: ", err.code);
    con.release();
    console.log("Exiting retrieveAllPrecautionTypes...");
    return false;
  }
}

async function retrieveDiagnosisTypes(req) {
  console.log("Entering retrieveDiagnosisTypes...");
  let diagnosis_type = req.query['diagnosis-type'];
  let query = ""
  if (common_functions.compareStrings(diagnosis_type, "all", true) === true) {
      query = "SELECT diagnosis_sub_type FROM diagnosis_master ORDER BY diagnosis_sub_type;";
  } else {
    query = "SELECT diagnosis_sub_type FROM diagnosis_master WHERE diagnosis_type= '"+ diagnosis_type+
              "' ORDER BY diagnosis_sub_type;";
  }
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
      con.release();
      console.log("Exiting retrieveDiagnosisTypes...");
      return JSON.stringify(NoDiagnosisTypesFound);
    }
    con.release();
    console.log("Exiting retrieveDiagnosisTypes...");
    return DiagnosisTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrieveDiagnosisTypes");
    console.log("Error code is: ", err.code);
    con.release();
    console.log("Exiting retrieveDiagnosisTypes...");
    return false;
  }
}

async function retrieveInstructionTypes(req){
  console.log("Entering retrieveInstructionTypes...");
  let instruction_type = req.query['instruction-type'];
  let query = "";

  if (common_functions.compareStrings(instruction_type, "all", true) === true) {
      query = "SELECT instruction_sub_type FROM instructions_master ORDER BY instruction_sub_type; ";
  } else {
    query = "SELECT instruction_sub_type FROM instructions_master WHERE instruction_type = '" +instruction_type+
            "' ORDER BY instruction_sub_type; ";
  }
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
      con.release();
      console.log("Exiting retrieveInstructionTypes...");
      return JSON.stringify(NoInstructionTypesFound);
    }
    con.release();
    console.log("Exiting retrieveInstructionTypes...");
    return InstructionTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrieveInstructionTypes");
    console.log("Error code is: ", err.code);
    con.release();
    console.log("Exiting retrieveInstructionTypes...");
    return false;
  }
}


async function retrieveMedicalPrescriptionTypes(req) {
  console.log("Entering retrieveMedicalPrescriptionTypes...");
  let diagnosis_id = req.query['diagnosis-id'];

  let query = "select * from prescription_diagnosis_view where diagnosis_id = '" +diagnosis_id+ "';";
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
      con.release();
      console.log("Exiting retrieveMedicalPrescriptionTypes...");
      return JSON.stringify(NoPrescriptionTypesFound);
    }
    // success response
    con.release();
    console.log("Exiting retrieveMedicalPrescriptionTypes...");
    return PrescriptionTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrieveMedicalPrescriptionTypes");
    console.log("Error code is: ", err.code);
    con.release();
    console.log("Exiting retrieveMedicalPrescriptionTypes...");
    return false;
  }
}

async function retrieveMedicalAdviceTypes(req) {
  console.log("Entering retrieveMedicalAdviceTypes...");
  let advice_type = req.query['advice-type'];
  let query = "";

  if (common_functions.compareStrings(advice_type, "all", true) === true) { 
    query = "SELECT advice_sub_type FROM advice_master ORDER BY advice_sub_type;";
  } else {
    query = "SELECT advice_sub_type FROM advice_master WHERE advice_type= '" +advice_type+ 
            "' ORDER BY advice_sub_type;";
  }
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let MysqlResponseJson = JSON.stringify(result);
    console.log("stringified json object is: ", MysqlResponseJson);
    if(MysqlResponseJson === "[]") {
      console.log(" it seems no previous advice types were found .........");
      var NoDataFound = {
        "msgtype" : "info",
        "message": "no advice type found"
      }
      con.release();
      console.log("Exiting retrieveMedicalAdviceTypes...");
      return JSON.stringify(NoDataFound);
    }
    con.release();
    console.log("Exiting retrieveMedicalAdviceTypes...");
    return MysqlResponseJson;
  }
  catch(err) {
    console.log("Error ====== retrieveMedicalAdviceTypes");
    console.log("Error code is: ", err.code);
    con.release();
    console.log("Exiting retrieveMedicalAdviceTypes...");
    return false;
  }
}

async function retrieveMinorOPDProcedureTypes(req){
  console.log("Entering retrieveMinorOPDProcedureTypes...");
  let min_proc_type = req.query['minor-procedure-type'];
  let query = "";
  if (common_functions.compareStrings(min_proc_type, "all", true) === true) {
    query = "SELECT min_procedure_sub_type FROM minor_opd_procedures_master ORDER BY min_procedure_sub_type";
  } else {
    query = "SELECT min_procedure_sub_type FROM minor_opd_procedures_master WHERE " +
              " min_procedure_type = '"+ min_proc_type+ "' ORDER BY min_procedure_sub_type;";
  }
  
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let MysqlResponseJson = JSON.stringify(result);
    console.log("stringified json object is: ", MysqlResponseJson);
    if(MysqlResponseJson === "[]") {
      console.log(" it seems no previous minor procedures types were found .........");
      var NoDataFound = {
        "msgtype" : "info",
        "message": "no minor OPD procedures type found"
      }
      con.release();
      console.log("Exiting retrieveMinorOPDProcedureTypes...");
      return JSON.stringify(NoDataFound);
    }
    con.release();
    console.log("Exiting retrieveMinorOPDProcedureTypes...");
    return MysqlResponseJson;
  }
  catch(err) {
    console.log("Error ====== retrieveMinorOPDProcedureTypes");
    console.log("Error code is: ", err.code);
    con.release();
    console.log("Exiting retrieveMinorOPDProcedureTypes...");
    return false;
  }
}

// To retrieve Patient status from master
async function retrievePatientStatusMaster(req){
  console.log("Entering retrievePatientStatusMaster...");

  let query = "select status_code from patient_status_master order by status_code;";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let MysqlResponseJson = JSON.stringify(result);
    console.log("stringified json object is: ", MysqlResponseJson);
    if(MysqlResponseJson === "[]") {
      console.log(" it seems no patient status found in master table .........");
      var NoDataFound = {
        "msgtype" : "info",
        "message": "no Patient status found"
      }
      con.release();
      console.log("Exiting retrievePatientStatusMaster...");
      return JSON.stringify(NoDataFound);
    }
    con.release();
    console.log("Exiting retrievePatientStatusMaster...");
    return MysqlResponseJson;
  }
  catch(err) {
    console.log("Error ====== retrievePatientStatusMaster");
    console.log("Error code is: ", err.code);
    con.release();
    console.log("Exiting retrievePatientStatusMaster...");
    return false;
  }
}

// search medicine
async function searchMedicineByName(req) {
  console.log("Entering searchMedicineByName...");
  let medicine_name = req.query['medicine-name'];

  let query = "SELECT medicine_name, medicine_type, manufacturer, " +
              "recommended_dosage FROM medicine_master where medicine_name like '" +medicine_name+ "';";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let MysqlResponseJson = JSON.stringify(result);
    console.log("stringified json object is: ", MysqlResponseJson);
    if(MysqlResponseJson === "[]") {
      console.log(" it seems no medicines matching the given name were found .........");
      var NoDataFound = {
        "msgtype" : "info",
        "message": "no medicine found"
      }
      con.release();
      console.log("Exiting searchMedicineByName...");
      return JSON.stringify(NoDataFound);
    }
    con.release();
    console.log("Exiting searchMedicineByName...");
    return MysqlResponseJson;
  }
  catch(err) {
    console.log("Error ====== searchMedicineByName");
    console.log("Error code is: ", err.code);
    con.release();
    console.log("Exiting   searchMedicineByName...");
    return false;
  }
}

async function retrievepPastHistoryTypes(req){
  console.log("Entering retrievepPastHistoryTypes...");
  let past_history_type = req.query['past-history-type'];
  let query = "";

  if (common_functions.compareStrings(past_history_type, "all", true) === true) {
      query = "SELECT past_history_subtype  FROM past_history_master ORDER BY instruction_sub_type; ";
  } else {
    query = "SELECT past_history_subtype FROM past_history_master WHERE past_history_type  = '" +past_history_type+
            "' ORDER BY past_history_subtype; ";
  }
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let PastHistoryTypesJson = JSON.stringify(result);
    console.log("stringified json object is: ", PastHistoryTypesJson);
    if(PastHistoryTypesJson === "[]") {
      console.log(" it seems no previous past history types were found .........");
      var NoPastHistoryTypesFound = {
        "msgtype" : "info",
        "message": "no past history type found"
      }
      con.release();
      console.log("Exiting retrievepPastHistoryTypes...");
      return JSON.stringify(NoPastHistoryTypesFound);
    }
    con.release();
    console.log("Exiting retrievepPastHistoryTypes...");
    return PastHistoryTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrievepPastHistoryTypes");
    console.log("Error code is: ", err.code);
    con.release();
    console.log("Exiting retrievepPastHistoryTypes...");
    return false;
  }
}

// To retrive entire data from Complaint master
async function retrieveComplaintMaster(req) {
  
  console.log("Entering retrieveComplaintMaster...");
  
  let query = "";
  
  query = "SELECT * FROM complaint_master ORDER BY complaint_sub_type; ";
  
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let complaintsJson = JSON.stringify(result);
    console.log("stringified json object is: ", complaintsJson);
    if(complaintsJson === "[]") {
      console.log(" it seems master data not available for complaints .........");
      var NoComplaintTypesFound = {
        "msgtype" : "info",
        "message": "no complaint master data found"
      }
      con.release();
      console.log("Exiting retrieveComplaintMaster...");
      return JSON.stringify(NoComplaintTypesFound);
    }
    con.release();
    console.log("Exiting retrieveComplaintTypes...");
    return complaintsJson;
  }
  catch(err) {
    console.log("Error ====== retrieveComplaintMaster");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveComplaintMaster...");
    return false;
  }
}

// To retrive entire data from Procedure master
async function retrieveSurgicalProcedureMaster(req) {
  
  console.log("Entering retrieveSurgicalProcedureMaster...");
  
  let query = "";
  
  query = "SELECT * FROM procedures_master ORDER BY procedure_sub_type; ";
  
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let masterJson = JSON.stringify(result);
    console.log("stringified json object is: ", masterJson);
    if(masterJson === "[]") {
      console.log(" it seems master data not available for Procedure Master .........");
      var NoMasterDataFound = {
        "msgtype" : "info",
        "message": "no procedure master data found"
      }
      con.release();
      console.log("Exiting retrieveSurgicalProcedureMaster...");
      return JSON.stringify(NoMasterDataFound);
    }
    con.release();
    console.log("Exiting retrieveSurgicalProcedureMaster...");
    return masterJson;
  }
  catch(err) {
    console.log("Error ====== retrieveSurgicalProcedureMaster");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveSurgicalProcedureMaster...");
    return false;
  }
}

// To retrive entire data from Investigation master
async function retrieveInvestigationMaster(req) {
  
  console.log("Entering retrieveInvestigationMaster...");
  
  let query = "";
  
  query = "SELECT * FROM investigation_master ORDER BY investigation_sub_type; ";
  
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let masterJson = JSON.stringify(result);
    console.log("stringified json object is: ", masterJson);
    if(masterJson === "[]") {
      console.log(" it seems master data not available for Investigation Master .........");
      var NoMasterDataFound = {
        "msgtype" : "info",
        "message": "no investigation master data found"
      }
      con.release();
      console.log("Exiting retrieveInvestigationMaster...");
      return JSON.stringify(NoMasterDataFound);
    }
    con.release();
    console.log("Exiting retrieveInvestigationMaster...");
    return masterJson;
  }
  catch(err) {
    console.log("Error ====== retrieveInvestigationMaster");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveInvestigationMaster...");
    return false;
  }
}

// To retrive entire data from Special Precaution master
async function retrieveSpecialPrecautionMaster(req) {
  
  console.log("Entering retrieveSpecialPrecautionMaster...");
  
  let query = "";
  
  query = "SELECT * FROM special_precautions_master ORDER BY precaution_sub_type;";
      
  
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let masterJson = JSON.stringify(result);
    console.log("stringified json object is: ", masterJson);
    if(masterJson === "[]") {
      console.log(" it seems master data not available for Special Precaution Master .........");
      var NoMasterDataFound = {
        "msgtype" : "info",
        "message": "no Special Precaution master data found"
      }
      con.release();
      console.log("Exiting retrieveSpecialPrecautionMaster...");
      return JSON.stringify(NoMasterDataFound);
    }
    con.release();
    console.log("Exiting retrieveSpecialPrecautionMaster...");
    return masterJson;
  }
  catch(err) {
    console.log("Error ====== retrieveSpecialPrecautionMaster");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveSpecialPrecautionMaster...");
    return false;
  }
}

// To retrive entire data from Diagnosis master
async function retrieveDiagnosisMaster(req) {
  
  console.log("Entering retrieveDiagnosisMaster...");
  
  let query = "";
  
  query = "SELECT * FROM diagnosis_master ORDER BY diagnosis_sub_type;";
  
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let masterJson = JSON.stringify(result);
    console.log("stringified json object is: ", masterJson);
    if(masterJson === "[]") {
      console.log(" it seems master data not available for Diagnosis Master .........");
      var NoMasterDataFound = {
        "msgtype" : "info",
        "message": "no Diagnosis master data found"
      }
      con.release();
      console.log("Exiting retrieveDiagnosisMaster...");
      return JSON.stringify(NoMasterDataFound);
    }
    con.release();
    console.log("Exiting retrieveDiagnosisMaster...");
    return masterJson;
  }
  catch(err) {
    console.log("Error ====== retrieveDiagnosisMaster");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveDiagnosisMaster...");
    return false;
  }
}

// To retrive entire data from Instruction master
async function retrieveInstructionMaster(req) {
  
  console.log("Entering retrieveInstructionMaster...");
  
  let query = "";
  
  query = "SELECT * FROM instructions_master ORDER BY instruction_sub_type; ";
  
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let masterJson = JSON.stringify(result);
    console.log("stringified json object is: ", masterJson);
    if(masterJson === "[]") {
      console.log(" it seems master data not available for Instruction Master .........");
      var NoMasterDataFound = {
        "msgtype" : "info",
        "message": "no Instruction master data found"
      }
      con.release();
      console.log("Exiting retrieveInstructionMaster...");
      return JSON.stringify(NoMasterDataFound);
    }
    con.release();
    console.log("Exiting retrieveInstructionMaster...");
    return masterJson;
  }
  catch(err) {
    console.log("Error ====== retrieveInstructionMaster");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveInstructionMaster...");
    return false;
  }
}

// To retrive entire data from Medical Prescription Master master
async function retrieveMedicalPrescriptionMaster(req) {
  
  console.log("Entering retrieveMedicalPrescriptionMaster...");
  
  let query = "select * from prescription_diagnosis_view order by diagnosis_id ;";
  
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let masterJson = JSON.stringify(result);
    console.log("stringified json object is: ", masterJson);
    if(masterJson === "[]") {
      console.log(" it seems master data not available for Medical Prescription Master .........");
      var NoMasterDataFound = {
        "msgtype" : "info",
        "message": "no Medical Prescription master data found"
      }
      con.release();
      console.log("Exiting retrieveMedicalPrescriptionMaster...");
      return JSON.stringify(NoMasterDataFound);
    }
    con.release();
    console.log("Exiting retrieveMedicalPrescriptionMaster...");
    return masterJson;
  }
  catch(err) {
    console.log("Error ====== retrieveMedicalPrescriptionMaster");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveMedicalPrescriptionMaster...");
    return false;
  }
}

// To retrive entire data from Medical Advice Master master
async function retrieveMedicalAdviceMaster(req) {
  
  console.log("Entering retrieveMedicalAdviceMaster...");
  
  let query = "";
  query = "SELECT * FROM advice_master ORDER BY advice_sub_type;";
  
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let masterJson = JSON.stringify(result);
    console.log("stringified json object is: ", masterJson);
    if(masterJson === "[]") {
      console.log(" it seems master data not available for Medical Advice Master .........");
      var NoMasterDataFound = {
        "msgtype" : "info",
        "message": "no Medical Advice master data found"
      }
      con.release();
      console.log("Exiting retrieveMedicalAdviceMaster...");
      return JSON.stringify(NoMasterDataFound);
    }
    con.release();
    console.log("Exiting retrieveMedicalAdviceMaster...");
    return masterJson;
  }
  catch(err) {
    console.log("Error ====== retrieveMedicalAdviceMaster");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveMedicalAdviceMaster...");
    return false;
  }
}

// To retrive entire data from Minor OPD procedure Master master
async function retrieveMinorOPDProcedureMaster(req) {
  
  console.log("Entering retrieveMinorOPDProcedureMaster...");
  
  let query = "";
  query = "SELECT * FROM minor_opd_procedures_master ORDER BY min_procedure_sub_type";
  
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let masterJson = JSON.stringify(result);
    console.log("stringified json object is: ", masterJson);
    if(masterJson === "[]") {
      console.log(" it seems master data not available for Minor OPD procedure Master .........");
      var NoMasterDataFound = {
        "msgtype" : "info",
        "message": "no Minor OPD procedure master data found"
      }
      con.release();
      console.log("Exiting retrieveMinorOPDProcedureMaster...");
      return JSON.stringify(NoMasterDataFound);
    }
    con.release();
    console.log("Exiting retrieveMinorOPDProcedureMaster...");
    return masterJson;
  }
  catch(err) {
    console.log("Error ====== retrieveMinorOPDProcedureMaster");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveMinorOPDProcedureMaster...");
    return false;
  }
}

// export all functions to be used by NodeJS when imported in other functions
exports.retrieveComplaintTypes = retrieveComplaintTypes;
exports.retrieveSurgicalProcedureTypes = retrieveSurgicalProcedureTypes;
exports.retrieveInvestigationTypes = retrieveInvestigationTypes;
exports.retrieveSpecialPrecautionTypes = retrieveSpecialPrecautionTypes;
exports.retrieveDiagnosisTypes = retrieveDiagnosisTypes;
exports.retrieveInstructionTypes = retrieveInstructionTypes;
exports.retrieveMedicalPrescriptionTypes = retrieveMedicalPrescriptionTypes;
exports.retrieveMedicalAdviceTypes = retrieveMedicalAdviceTypes;
exports.retrieveMinorOPDProcedureTypes = retrieveMinorOPDProcedureTypes;
exports.searchMedicineByName = searchMedicineByName;
exports.retrievePatientStatusMaster=retrievePatientStatusMaster;
exports.retrievepPastHistoryTypes=retrievepPastHistoryTypes;

exports.retrieveComplaintMaster=retrieveComplaintMaster;
exports.retrieveSurgicalProcedureMaster=retrieveSurgicalProcedureMaster;
exports.retrieveInvestigationMaster=retrieveInvestigationMaster;
exports.retrieveSpecialPrecautionMaster=retrieveSpecialPrecautionMaster;
exports.retrieveDiagnosisMaster=retrieveDiagnosisMaster;
exports.retrieveInstructionMaster=retrieveInstructionMaster;
exports.retrieveMedicalPrescriptionMaster=retrieveMedicalPrescriptionMaster;
exports.retrieveMedicalAdviceMaster=retrieveMedicalAdviceMaster;
exports.retrieveMinorOPDProcedureMaster=retrieveMinorOPDProcedureMaster;
