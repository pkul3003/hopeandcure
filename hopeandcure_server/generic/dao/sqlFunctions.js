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
  
    let query = "SELECT complaint_sub_type FROM complaint_master where complaint_type like 'ocular' or 'occular'; ";
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
  
    let query = "SELECT procedure_sub_type FROM procedures_master where procedure_type = 'systemic'; ";
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

  let query = "SELECT procedure_desc FROM procedures_master WHERE procedure_type = 'ocular' "+
              "ORDER BY procedure_desc; ";
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

async function retrieveOpticalInvestigations(req) {
  console.log("Entering retrieveOpticalInvestigations...");
  
  let query = "SELECT investigation_desc FROM investigation_master where investigation_type = 'optical'"+ 
              "ORDER BY investigation_desc; ";
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
    
    console.log("Exiting retrieveOpticalInvestigations...");
    return InvestigationTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrieveOpticalInvestigations");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveOpticalInvestigations...");
    return false;
  }
}

async function retrieveAllPrecautionTypes(req) {
  console.log("Entering retrieveAllPrecautionTypes...");
  
  let query = "SELECT precaution_desc FROM special_precaution_master ORDER BY precaution_desc; ";
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

async function retrieveInstructions(req){
  console.log("Entering retrieveInstructions...");
  
  let query = "SELECT instruction_desc FROM instructions_master ORDER BY instruction_desc; ";
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
    
    console.log("Exiting retrieveInstructions...");
    return InstructionTypesJson;
  }
  catch(err) {
    console.log("Error ====== retrieveInstructions");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveInstructions...");
    return false;
  }
}


async function retrieveMedicalPrescription(req) {
  console.log("Entering retrieveMedicalPrescription...");
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

async function retrieveAdvice(req) {
  console.log("Entering retrieveAdvice...");

  let query = "SELECT advice_desc FROM advice_master ORDER BY advice_desc;";
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
      console.log("Exiting retrieveAdvice...");
      return JSON.stringify(NoDataFound);
    }
    
    console.log("Exiting retrieveAdvice...");
    return MysqlResponseJson;
  }
  catch(err) {
    console.log("Error ====== retrieveAdvice");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveAdvice...");
    return false;
  }
}

async function retrieveMinorOPDProcedures(req){
  console.log("Entering retrieveMinorOPDProcedures...");

  let query = "SELECT min_procedure_type FROM minor_opd_procedures_master;";
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
      console.log("Exiting retrieveMinorOPDProcedures...");
      return JSON.stringify(NoDataFound);
    }
    
    console.log("Exiting retrieveMinorOPDProcedures...");
    return MysqlResponseJson;
  }
  catch(err) {
    console.log("Error ====== retrieveMinorOPDProcedures");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrieveMinorOPDProcedures...");
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
      console.log("Exiting searchMedicineByName...");
      return JSON.stringify(NoDataFound);
    }
    
    console.log("Exiting searchMedicineByName...");
    return MysqlResponseJson;
  }
  catch(err) {
    console.log("Error ====== searchMedicineByName");
    console.log("Error code is: ", err.code);

    console.log("Exiting searchMedicineByName...");
    return false;
  }
}

async function createNewComplaint(req) {
  console.log("Entering createNewComplaint...");
  let complaint_type = req.body.complaint.complaint_type;
  let complaint_sub_type = req.body.complaint.complaint_sub_type;
  let complaint_desc = req.body.complaint.complaint_desc;
  let query1 = "INSERT INTO complaint_master VALUES (DEFAULT,'"+ complaint_type +"','" + 
    "', '"+ complaint_sub_type +"', '"+ complaint_desc + "',DEFAULT);";
  console.log(query1);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query1);
    

    var response = {
      "msgtype": "success",
      "message": "Complaint created successfully"
     
    }
    console.log("Exiting createNewComplaint...");
    return response;
  }
  catch(err) {
    console.log("Error ====== createNewComplaint");
    console.log("Error code is: ", err.code);
    if(err.code === "ER_DUP_ENTRY") {
      var response = {
        "msgtype" : "info",
				"message": "Complaint Type already exists"
			}
      //
      console.log("Exiting createNewComplaint...");
      return response;
    }
  //  
    console.log("Exiting createNewComplaint...");
    return false;
  }
}

async function createNewInstruction(req) {
  console.log("Entering createNewInstruction...");
  let instruction_type = req.body.instruction.instruction_type;
  let instruction_sub_type = req.body.instruction.instruction_sub_type;
  let instruction_desc = req.body.instruction.instruction_desc;
  let query1 = "INSERT INTO instructions_master VALUES (DEFAULT,'"+ instruction_type +"','" 
    "', '"+instruction_sub_type+"','"+ instruction_desc + "',DEFAULT);";
  console.log(query1);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query1);
    

    var response = {
      "msgtype": "success",
      "message": "Instruction created successfully"
     
    }
    console.log("Exiting createNewInstruction...");
    return response;
  }
  catch(err) {
    console.log("Error ====== createNewInstruction");
    console.log("Error code is: ", err.code);
    if(err.code === "ER_DUP_ENTRY") {
      var response = {
        "msgtype" : "info",
				"message": "Instruction Type already exists"
			}
      //
      console.log("Exiting createNewInstruction...");
      return response;
    }
  //  
    console.log("Exiting createNewInstruction...");
    return false;
  }
}

async function createNewInvestigation(req) {
  console.log("Entering createNewInvestigation...");
  let investigation_type = req.body.investigation.investigation_type;
  let investigation_desc = req.body.investigation.investigation_desc;
  let query1 = "INSERT INTO investigation_master VALUES (DEFAULT,'"+ investigation_type +"','" + investigation_desc + "',DEFAULT);";
  console.log(query1);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query1);
    

    var response = {
      "msgtype": "success",
      "message": "Investigation created successfully"
     
    }
    console.log("Exiting createNewInvestigation...");
    return response;
  }
  catch(err) {
    console.log("Error ====== createNewInvestigation");
    console.log("Error code is: ", err.code);
    if(err.code === "ER_DUP_ENTRY") {
      var response = {
        "msgtype" : "info",
				"message": "Investigation Type already exists"
			}
      //
      console.log("Exiting createNewInvestigation...");
      return response;
    }
  //  
    console.log("Exiting createNewInvestigation...");
    return false;
  }
}

async function createNewProcedure(req) {
  console.log("Entering createNewProcedure...");
  let procedure_type = req.body.procedure.procedure_type;
  let procedure_desc = req.body.procedure.procedure_desc;
  let query1 = "INSERT INTO procedures_master VALUES (DEFAULT,'"+ procedure_type +"','" 
                + procedure_desc + "',DEFAULT);";
  console.log(query1);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query1);
    

    var response = {
      "msgtype": "success",
      "message": "procedure created successfully"
     
    }
    console.log("Exiting createNewProcedure...");
    return response;
  }
  catch(err) {
    console.log("Error ====== createNewProcedure");
    console.log("Error code is: ", err.code);
    if(err.code === "ER_DUP_ENTRY") {
      var response = {
        "msgtype" : "info",
				"message": "procedure Type already exists"
			}
      //
      console.log("Exiting createNewProcedure...");
      return response;
    }
  //  
    console.log("Exiting createNewProcedure...");
    return false;
  }
}

async function createNewSpecialPrecaution(req) {
  console.log("Entering createNewSpecialPrecaution...");
  let precaution_type = req.body.splprecaution.precaution_type;
  let precaution_desc = req.body.splPrecaution.precaution_desc;
  let query1 = "INSERT INTO special_precaution_master VALUES (DEFAULT,'"+ precaution_type +"','" + precaution_desc + "',DEFAULT);";
  console.log(query1);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query1);
    

    var response = {
      "msgtype": "success",
      "message": "Precaution created successfully"
     
    }
    console.log("Exiting createNewSpecialPrecaution...");
    return response;
  }
  catch(err) {
    console.log("Error ====== createNewSpecialPrecaution");
    console.log("Error code is: ", err.code);
    if(err.code === "ER_DUP_ENTRY") {
      var response = {
        "msgtype" : "info",
				"message": "Precaution Type already exists"
			}
      //
      console.log("Exiting createNewSpecialPrecaution...");
      return response;
    }
  //  
    console.log("Exiting createNewSpecialPrecaution...");
    return false;
  }
}

async function createNewDiagnosis(req) {
  console.log("Entering createNewDiagnosis...");
  let diagnosis_type = req.body.diagnosis.diagnosis_type;
  let diagnosis_desc = req.body.diagnosis.diagnosis_desc;
  let query1 = "INSERT INTO diagnosis_master VALUES (DEFAULT,'"+ diagnosis_type +"','" + diagnosis_desc + "',DEFAULT);";
  console.log(query1);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query1);
    

    var response = {
      "msgtype": "success",
      "message": "Diagnosis created successfully"
     
    }
    console.log("Exiting createNewDiagnosis...");
    return response;
  }
  catch(err) {
    console.log("Error ====== createNewDiagnosis");
    console.log("Error code is: ", err.code);
    if(err.code === "ER_DUP_ENTRY") {
      var response = {
        "msgtype" : "info",
				"message": "Diagnosis Type already exists"
			}
      //
      console.log("Exiting createNewDiagnosis...");
      return response;
    }
  //  
    console.log("Exiting createNewDiagnosis...");
    return false;
  }
}

async function createNewAdvice(req) {
  console.log("Entering createNewAdvice...");
  let advice_type = req.body.advice.advice_type;
  let advice_desc = req.body.advice.advice_desc;
  let query1 = "INSERT INTO advice_master VALUES (DEFAULT,'"+ advice_type +"','" + advice_desc + "',DEFAULT);";
  console.log(query1);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query1);
    

    var response = {
      "msgtype": "success",
      "message": "Advice created successfully"
     
    }
    console.log("Exiting createNewAdvice...");
    return response;
  }
  catch(err) {
    console.log("Error ====== createNewAdvice");
    console.log("Error code is: ", err.code);
    if(err.code === "ER_DUP_ENTRY") {
      var response = {
        "msgtype" : "info",
				"message": "Advice Type already exists"
			}
      //
      console.log("Exiting createNewAdvice...");
      return response;
    }
  //  
    console.log("Exiting createNewAdvice...");
    return false;
  }
}

async function createNewMinorOpdProcedure(req) {
  console.log("Entering createNewMinorOpdProcedure...");
  let opdprocedure_type = req.body.opdprocedure.opdprocedure_type;
  let opdprocedure_desc = req.body.opdprocedure.opdprocedure_desc;
  let query1 = "INSERT INTO minoropd_procedures_master VALUES (DEFAULT,'"+ opdprocedure_type +"','" + opdprocedure_desc + "',DEFAULT);";
  console.log(query1);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query1);
    

    var response = {
      "msgtype": "success",
      "message": "Minor OPDProcedure created successfully"
     
    }
    console.log("Exiting createNewMinorOpdProcedure...");
    return response;
  }
  catch(err) {
    console.log("Error ====== createNewMinorOpdProcedure");
    console.log("Error code is: ", err.code);
    if(err.code === "ER_DUP_ENTRY") {
      var response = {
        "msgtype" : "info",
				"message": "Minor OPDProcedure Type already exists"
			}
      //
      console.log("Exiting createNewMinorOpdProcedure...");
      return response;
    }
  //  
    console.log("Exiting createNewMinorOpdProcedure...");
    return false;
  }
}

async function createNewDosageInstruction(req) {
  console.log("Entering createNewDosageInstruction...");
  let dosageinstruction_type = req.body.dosageinstruction.dosageinstruction_type;
  let dosageinstruction_language = req.body.dosageinstruction.dosageinstruction_language;
  let dosageinstruction_desc = req.body.dosageinstruction.dosageinstruction_desc;
  let query1 = "INSERT INTO dosage_instructions_master VALUES (DEFAULT,'"+ dosageinstruction_type +"','" + dosageinstruction_language +"', '" + dosageinstruction_desc + "',DEFAULT);";
  console.log(query1);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query1);
    
    var response = {
      "msgtype": "success",
      "message": " DosageInstruction created successfully"
     
    }
    console.log("Exiting createNewDosageInstruction...");
    return response;
  }
  catch(err) {
    console.log("Error ====== createNewDosageInstruction");
    console.log("Error code is: ", err.code);
    if(err.code === "ER_DUP_ENTRY") {
      var response = {
        "msgtype" : "info",
				"message": " DosageInstruction Type already exists"
			}
      //
      console.log("Exiting createNewDosageInstruction...");
      return response;
    }
  //  
    console.log("Exiting createNewDosageInstruction...");
    return false;
  }
}

async function createNewMedicine(req) {
  console.log("Entering createNewMedicine...");
  let medicine_name = req.body.medicine.medicine_name;
  let medicine_type = req.body.medicine.medicine_type;
  let medicine_manufactrer = req.body.medicine.medicine_manufactrer;
  let medicine_mr = req.body.medicine.medicine_mr;
  let medicine_mr_contact = req.body.medicine.medicine_mr_contact;
  let medicine_remarks = req.body.medicine.medicine_remarks;
  let recommended_dosage = req.body.medicine.recommended_dosage;

  let query1 = "INSERT INTO medicine_master VALUES (DEFAULT,'"+ medicine_name +"','" + medicine_type +"', '" 
      + medicine_manufactrer + "','"+medicine_mr +"','"+medicine_mr_contact +"','"+ medicine_remarks+
      "','"+recommended_dosage +"', DEFAULT);";
  console.log(query1);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query1);
    

    var response = {
      "msgtype": "success",
      "message": " Medicine created successfully"
     
    }
    console.log("Exiting createNewMedicine...");
    return response;
  }
  catch(err) {
    console.log("Error ====== createNewMedicine");
    console.log("Error code is: ", err.code);
    if(err.code === "ER_DUP_ENTRY") {
      var response = {
        "msgtype" : "info",
				"message": " Medicine  already exists"
			}
      //
      console.log("Exiting createNewMedicine...");
      return response;
    }
  //  
    console.log("Exiting createNewMedicine...");
    return false;
  }
}

async function createNewMedicinePrescription(req) {
  console.log("Entering createNewMedicinePrescription...");
  let prescription_type  = req.body.medprescription.prescription_type;
  let medicine_id  = req.body.medmedprescriptionicine.medicine_id;
  let diagnosis_id  = req.body.medprescription.diagnosis_id;
  
  let query1 = "INSERT INTO medical_prescription_master VALUES (DEFAULT,'"+ prescription_type +"','" + medicine_id +"', '" 
  + diagnosis_id + "', DEFAULT);";
  console.log(query1);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query1);
    

    var response = {
      "msgtype": "success",
      "message": " Medicine Prescription created successfully"
     
    }
    console.log("Exiting createNewMedicinePrescription...");
    return response;
  }
  catch(err) {
    console.log("Error ====== createNewMedicinePrescription");
    console.log("Error code is: ", err.code);
    if(err.code === "ER_DUP_ENTRY") {
      var response = {
        "msgtype" : "info",
				"message": " Medicine Prescription  already exists"
			}
      //
      console.log("Exiting createNewMedicinePrescription...");
      return response;
    }
  //  
    console.log("Exiting createNewMedicinePrescription...");
    return false;
  }
}


exports.createNewComplaint=createNewComplaint;
exports.createNewInstruction=createNewInstruction;
exports.createNewInvestigation=createNewInvestigation;
exports.createNewProcedure=createNewProcedure;
exports.createNewSpecialPrecaution=createNewSpecialPrecaution;
exports.createNewDiagnosis=createNewDiagnosis;
exports.createNewAdvice=createNewAdvice;
exports.createNewMinorOpdProcedure=createNewMinorOpdProcedure;
exports.createNewDosageInstruction=createNewDosageInstruction;
exports.createNewMedicine=createNewMedicine;
exports.createNewMedicinePrescription=createNewMedicinePrescription;


// export all functions to be used by NodeJS when imported in other functions
exports.retrieveSystemicComplaintTypes = retrieveSystemicComplaintTypes;
exports.retrieveOcularComplaintTypes = retrieveOcularComplaintTypes;
exports.retrieveSystemicProcedureTypes = retrieveSystemicProcedureTypes;
exports.retrieveOcularProcedureTypes = retrieveOcularProcedureTypes;
exports.retrieveOpticalInvestigations = retrieveOpticalInvestigations;
exports.retrieveAllPrecautionTypes = retrieveAllPrecautionTypes;
exports.retrieveAllDiagnosisTypes = retrieveAllDiagnosisTypes;
exports.retrieveInstructions = retrieveInstructions;
exports.retrieveMedicalPrescription = retrieveMedicalPrescription;
exports.retrieveAdvice = retrieveAdvice;
exports.retrieveMinorOPDProcedures = retrieveMinorOPDProcedures;
exports.searchMedicineByName = searchMedicineByName;