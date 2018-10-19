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
      con.release();
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
      con.release();
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
      con.release();
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
    con.release();
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
    con.release();
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

exports.retrieveSystemicComplaintTypes = retrieveSystemicComplaintTypes;
exports.retrieveOcularComplaintTypes = retrieveOcularComplaintTypes;
exports.retrieveSystemicProcedureTypes = retrieveSystemicProcedureTypes;
exports.retrieveOcularProcedureTypes = retrieveOcularProcedureTypes;
exports.retrieveOpticalInvestigationTypes = retrieveOpticalInvestigationTypes;
  