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
  let IntraOcularPressure = req.body.patient.IntraOcularPressure;
  let SAC = req.body.patient.SAC;

  let query = "INSERT INTO optometary_results VALUES ('"+ UHID +"','" + AutorefactrometerReadingRight + "','"+
              AutorefactrometerReadingLeft + "','"+ KeratometryReadingRight +"', '"+
              KeratometryReadingLeft +"','" + UnaidedVisionRight +"', '"+ UnaidedVisionLeft +"', '"+ VisionWithPinhole +
              "', '"+ Retinoscopy +"', '"+ Acceptance +"', '"+ IntraOcularPressure + "', '"+ SAC +"', DEFAULT);";
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

async function addConsultantResults(req) {
  console.log("Entering addConsultantResults...");
  let UHID = req.body.patient.UHID;
  let VisionRight = req.body.patient.VisionRight;
  let VisionLeft = req.body.patient.VisionLeft;
  let AcceptanceRight = req.body.patient.AcceptanceRight;
  let AcceptanceLeft = req.body.patient.AcceptanceLeft;
  let Finalglass_presRight  = req.body.patient.Finalglass_presRight ;
  let Finalglass_presLeft = req.body.patient.Finalglass_presLeft;
  let EyebrowRight  = req.body.patient.EyebrowRight ;
  let EyebrowLeft  = req.body.patient.EyebrowLeft ;
  let Extraocular_moveRight  = req.body.patient.Extraocular_moveRight ;
  let Extraocular_moveLeft  = req.body.patient.Extraocular_moveLeft ;

  let Pupillary_ReactionRight  = req.body.patient.Pupillary_ReactionRight ;
  let Pupillary_ReactionLeft  = req.body.patient.Pupillary_ReactionLeft ;
  let Other_FindingRight  = req.body.patient.Other_FindingRight ;
  let Other_FindingLeft  = req.body.patient.Other_FindingLeft ;
  let Intraocular_PressureType   = req.body.patient.Intraocular_PressureType  ;
  let Intraocular_PressureRight  = req.body.patient.Intraocular_PressureRight ;
  let Intraocular_PressureLeft   = req.body.patient.Intraocular_PressureLeft  ;
  let GonioscopyRight   = req.body.patient.GonioscopyRight  ;
  let GonioscopyLeft   = req.body.patient.GonioscopyLeft  ;
  let SlitLamp_ExamRight   = req.body.patient.SlitLamp_ExamRight  ;
  let SlitLamp_ExamLeft   = req.body.patient.SlitLamp_ExamLeft  ;

  let ConjuctivaRight  = req.body.patient.ConjuctivaRight ;
  let ConjuctivaLeft  = req.body.patient.ConjuctivaLeft ;
  let CorneaRight  = req.body.patient.CorneaRight ;
  let CorneaLeft  = req.body.patient.CorneaLeft ;
  let Anterior_ChamberRight   = req.body.patient.Anterior_ChamberRight ;
  let Anterior_ChamberLeft  = req.body.patient.Anterior_ChamberLeft ;
  let Lenticular_statusRight   = req.body.patient.Lenticular_statusRight ;
  let Lenticular_statusLeft   = req.body.patient.Lenticular_statusLeft  ;
  let GlowRight   = req.body.patient.GlowRight  ;
  let GlowLeft   = req.body.patient.GlowLeft  ;

  let Direct_OpthalmRight   = req.body.patient.Direct_OpthalmRight  ;
  let Direct_OpthalmLeft   = req.body.patient.Direct_OpthalmLeft  ;
  let Inirect_OpthalmRight   = req.body.patient.Inirect_OpthalmRight  ;
  let Indirect_OpthalmLeft   = req.body.patient.Indirect_OpthalmLeft  ;
  let NinetyD_SeventyeightDRight    = req.body.patient.NinetyD_SeventyeightDRight  ;
  let NinetyD_SeventyeightDLeft   = req.body.patient.NinetyD_SeventyeightDLeft  ;
  

  let query = "INSERT INTO ophthalmologist_examination_record VALUES ('"+ UHID +"', '" + VisionRight + "','"+
              VisionLeft + "','"+ AcceptanceRight +"', '"+ 
              AcceptanceLeft +"', '"+ Finalglass_presRight +"', '"+ Finalglass_presLeft + "', '"+EyebrowRight +"', '"+ EyebrowLeft +"', '"+ Extraocular_moveRight + "', '"+ Extraocular_moveLeft +"', '"+
               Pupillary_ReactionRight +"', '" + Pupillary_ReactionLeft +"','"+ Other_FindingRight +"','"+ Other_FindingLeft+"','"+ Intraocular_PressureType +"','"+ 
               Intraocular_PressureRight +"','"+ Intraocular_PressureLeft + "', '"+ GonioscopyRight +"', '"+ GonioscopyLeft + "', '"+SlitLamp_ExamRight +"', '" +
               SlitLamp_ExamLeft + "','" +ConjuctivaRight + "', '" +ConjuctivaLeft +"', '"+CorneaRight +"','"+ CorneaLeft+"','"+Anterior_ChamberRight+"','"+
               Anterior_ChamberLeft +"','"+Lenticular_statusRight +"','"+Lenticular_statusLeft +"','"+GlowRight +"','"+ GlowLeft +"','"+ Direct_OpthalmRight +"','" +
               Direct_OpthalmLeft+"', '"+Inirect_OpthalmRight +"','"+Indirect_OpthalmLeft +"', '"+NinetyD_SeventyeightDRight +"', '"+ NinetyD_SeventyeightDLeft +"', DEFAULT);";

  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query);
    con.release();
    console.log("Exiting addConsultantResults...");
    return true;
  }
  catch(err) {
    console.log("Error ====== addConsultantResults");
    console.log("Error code is: ", err.code);
    console.log("Exiting addConsultantResults...");
    return false;
  }
}

async function retrievePatientSurgicalHistory(req) {
  console.log("Entering retrievePatientSurgicalHistory...");
  let UHID = req.body.patient.UHID;

  let query = "SELECT * FROM patient_ocular_surgical_history_simple WHERE UHID = '" +UHID+ "';";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let patientJson = JSON.stringify(result);
    console.log(patientJson);
    if(patientJson === "[]") {
      console.log(" it seems no previous surgical history was found .........");
      var NoSurgeryHistoryFound = {
        "msgtype" : "info",
        "message": "no ocular surgical history found"
      }
      return JSON.stringify(NoSurgeryHistoryFound);
    }
    con.release();
    return patientJson;
  }
  catch(err) {
    console.log("Error ====== retrievePatientSurgicalHistory");
    console.log("Error code is: ", err.code);
    console.log("Exiting retrievePatientSurgicalHistory...");
    return false;
  }
}

async function addPatientSurgicalHistory(req) {
  console.log("Entering addPatientSurgicalHistory...");
  let UHID = req.body.patient.UHID;
  let surgery_description = req.body.patient.surgery_description;
  
  let query = "INSERT into patient_ocular_surgical_history_simple VALUES ('" +UHID+ "','" + 
  surgery_description + "', DEFAULT);";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query);
    con.release();
    return true;
  }
  catch(err) {
    console.log("Error ====== addPatientSurgicalHistory");
    console.log("Error code is: ", err.code);
    console.log("Exiting addPatientSurgicalHistory...");
    return false;
  }
}

exports.addPatientOcularFacts = addPatientOcularFacts;
exports.addOptometaryResults = addOptometaryResults;
exports.retrieveRetrieveOptometaryResults = retrieveRetrieveOptometaryResults;
exports.retrievePatientOcularFacts = retrievePatientOcularFacts;
exports.retrievePreviousOcularIllness = retrievePreviousOcularIllness;
exports.retrieveOcularComplaintTypes = retrieveOcularComplaintTypes;
exports.addPreviousOcularIllness = addPreviousOcularIllness;
exports.addCurrentOcularComplaints = addCurrentOcularComplaints;
exports.addConsultantResults = addConsultantResults;
exports.retrievePatientSurgicalHistory = retrievePatientSurgicalHistory;
exports.addPatientSurgicalHistory = addPatientSurgicalHistory;