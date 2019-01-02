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