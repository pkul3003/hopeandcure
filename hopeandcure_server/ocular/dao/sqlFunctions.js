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

async function addPatientOcularFacts(req) {
  console.log("Entering addPatientOcularFacts...");
  let UHID = req.body.patient.UHID;
  let using_specs = req.body.patient.using_specs;
  let using_contacts = req.body.patient.using_contacts;
  let right_prescription = req.body.patient.right_prescription;
  let left_prescription = req.body.patient.left_prescription;
  let eye_color = req.body.patient.eye_color;

  let query = "INSERT INTO patient_ocular_facts VALUES ('"+ UHID +"','" + using_specs + "','"+ using_contacts + "','"+
              right_prescription +"','" + left_prescription +"', '"+ eye_color +"', DEFAULT);";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query);
    con.release();
    console.log("Exiting addPatientOcularFacts...");
    return true;
  }
  catch(err) {
    console.log("Error ====== addPatientOcularFacts");
    console.log("Error code is: ", err.code);
    return false;
  }
}

async function retrievePatientOcularFacts(req) {
  console.log("Entering retrievePatientocularFacts...");
  let UHID = req.body.patient.UHID;

  let query = "SELECT * FROM patient_ocular_facts WHERE UHID = '" +UHID+ "'; ";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let patientJson = JSON.stringify(result);
    console.log(patientJson);
    con.release();
    console.log("Exiting retrievePatientocularFacts...");
    return patientJson;
  }
  catch(err) {
    console.log("Error ====== retrievePatientocularFacts");
    console.log("Error code is: ", err.code);
    console.log("Exiting retrievePatientocularFacts...");
    return false;
  }
}


async function addOptometaryResults(req) {
  console.log("Entering addOptometaryResults...");
  let UHID = req.body.patient.UHID;
  let AutorefactrometerReadingRight = req.body.patient.AutorefactrometerReadingRight;
  let AutorefactrometerReadingLeft = req.body.patient.AutorefactrometerReadingLeft;
  let KeratometryReadingRight = req.body.patient.KeratometryReadingRight;
  let KeratometryReadingLeft = req.body.patient.KeratometryReadingLeft;
  let UnaidedVisionRight = req.body.patient.UnaidedVisionRight;
  let UnaidedVisionLeft = req.body.patient.UnaidedVisionLeft;
  let VisionWithPinhole = req.body.patient.VisionWithPinhole;
  let Retinoscopy = req.body.patient.Retinoscopy;
  let Acceptance = req.body.patient.Acceptance;
  let IntraocularPressure = req.body.patient.IntraocularPressure;
  let SAC = req.body.patient.SAC;

  let query = "INSERT INTO optometary_results VALUES ('"+ UHID +"','" + AutorefactrometerReadingRight + "','"+
              AutorefactrometerReadingLeft + "','"+ KeratometryReadingRight +"', '"+
              KeratometryReadingLeft +"','" + UnaidedVisionRight +"', '"+ UnaidedVisionLeft +"', '"+ VisionWithPinhole +
              "', '"+ Retinoscopy +"', '"+ Acceptance +"', '"+ IntraocularPressure + "', '"+ SAC +"', DEFAULT);";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query);
    con.release();
    console.log("Exiting addOptometaryResults...");
    return true;
  }
  catch(err) {
    console.log("Error ====== addOptometaryResults");
    console.log("Error code is: ", err.code);
    console.log("Exiting addOptometaryResults...");
    return false;
  }
}

async function retrieveRetrieveOptometaryResults(req) {
  console.log("Entering retrieveRetrieveOptometaryResults...");
  let UHID = req.body.patient.UHID;

  let query = "SELECT * FROM optometary_results WHERE UHID = '" +UHID+ "'; ";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let patientJson = JSON.stringify(result);
    console.log(patientJson);
    con.release();
    console.log("Exiting retrieveRetrieveOptometaryResults...");
    return patientJson;
  }
  catch(err) {
    console.log("Error ====== retrieveOptometaryResults");
    console.log("Error code is: ", err.code);
    console.log("Exiting retrieveRetrieveOptometaryResults...");
    return false;
  }
}

async function retrievePreviousOcularIllness(req) {
  console.log("Entering retrievePreviousOcularIllness...");
  let UHID = req.body.patient.UHID;

  let query = "SELECT * FROM patient_previous_ocular_illness WHERE UHID = '" +UHID+ "'; ";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let patientJson = JSON.stringify(result);
    console.log("stringified json object is: ", patientJson);
    if(patientJson === "[]") {
      console.log(" it seems no previous illness were found .........");
      var NoPatientsFound = {
        "msgtype" : "info",
        "message": "no previous illness for the given patient"
      }
      return JSON.stringify(NoPatientsFound);
    }
    con.release();
    console.log("Exiting retrievePreviousOcularIllness...");
    return patientJson;
  }
  catch(err) {
    console.log("Error ====== retrievePreviousOcularIllness");
    console.log("Error code is: ", err.code);

    console.log("Exiting retrievePreviousOcularIllness...");
    return false;
  }
}

async function retrieveOcularComplaintTypes(Req) {
  
  console.log("Entering retrieveOcularComplaintTypes...");

  let query = "SELECT * FROM ocular_complaint_types; ";
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

async function retrieveSystemicComplaintTypes(Req) {
  
  console.log("Entering retrieveSystemicComplaintTypes...");

  let query = "SELECT * FROM systemic_complaint_types; ";
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

async function addPreviousOcularIllness(req) {
  console.log("Entering addPreviousOcularIllness...");
  let UHID = req.body.patient.UHID;
  let KnownOcularCondition = req.body.patient.KnownOcularCondition;
  let DurationOfCondition = req.body.patient.DurationOfCondition;

  let query = "INSERT into patient_previous_ocular_illness VALUES ('" +UHID+ "','" + 
  KnownOcularCondition + "', '" +DurationOfCondition+ "', DEFAULT);";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query);
    con.release();
    return true;
  }
  catch(err) {
    console.log("Error ====== addPreviousOcularIllness");
    console.log("Error code is: ", err.code);
    console.log("Exiting addPreviousOcularIllness...");
    return false;
  }
}

async function addCurrentOcularComplaints(req) {
  console.log("Entering addCurrentOcularComplaints...");
  let UHID = req.body.patient.UHID;
  let ComplaintType = req.body.patient.ComplaintType;
  let ComplaintDuration = req.body.patient.ComplaintDuration;
  let ComplaintDescription = req.body.patient.ComplaintDescription;
  if (ComplaintDescription === null || ComplaintDescription === 'undefined') {
    console.log("inside null condition...")
    ComplaintDescription = "";
  }

  let query = "INSERT into patient_ocular_complaints VALUES ('" +UHID+ "','" + 
  ComplaintType + "', '" +ComplaintDuration+ "', ComplaintDescription = '"+ ComplaintDescription+"', DEFAULT);";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query);
    con.release();
    return true;
  }
  catch(err) {
    console.log("Error ====== addCurrentOcularComplaints");
    console.log("Error code is: ", err.code);
    console.log("Exiting addCurrentOcularComplaints...");
    return false;
  }
}

exports.addPatientOcularFacts = addPatientOcularFacts;
exports.addOptometaryResults = addOptometaryResults;
exports.retrieveRetrieveOptometaryResults = retrieveRetrieveOptometaryResults;
exports.retrievePatientOcularFacts = retrievePatientOcularFacts;
exports.retrievePreviousOcularIllness = retrievePreviousOcularIllness;
exports.retrieveOcularComplaintTypes = retrieveOcularComplaintTypes;
exports.retrieveSystemicComplaintTypes = retrieveSystemicComplaintTypes;
exports.addPreviousOcularIllness = addPreviousOcularIllness;
exports.addCurrentOcularComplaints = addCurrentOcularComplaints;
