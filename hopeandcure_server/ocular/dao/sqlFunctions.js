let mysql = require('mysql2');
let config = require("../../config.js");
let callmysqlpool = require("../../mysql-functions/createMysqlSingleton.js");
var moment = require('moment');

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

// Function to add recording of a optometarist during eye examination
async function addOptometryResults(req) {
  console.log("Entering addOptometryResults...");
  let UHID = req.body.patient.UHID;
  let auto_refractometer_reading_right = req.body.patient.auto_refractometer_reading_right;
  let auto_refractometer_reading_left = req.body.patient.auto_refractometer_reading_left;
  let keratometry_reading_right = req.body.patient.keratometry_reading_right;
  let keratometry_reading_left = req.body.patient.keratometry_reading_left;
  let unaided_vision_right = req.body.patient.unaided_vision_right;
  let unaided_vision_left = req.body.patient.unaided_vision_left;
  let vision_with_pinhole = req.body.patient.vision_with_pinhole;
  let retinoscopy = req.body.patient.retinoscopy;
  let acceptance = req.body.patient.acceptance;
  let intra_ocular_pressure = req.body.patient.intra_ocular_pressure;
  let iop_record_timestamp = req.body.patient.iop_record_timestamp;
  let SAC = req.body.patient.SAC;
  let dilatation = req.body.patient.dilatation;
  let dilatation_time = req.body.patient.dilatation_time;
  let optical_investigation = req.body.patient.optical_investigation;
  let procedures_done = req.body.patient.procedures_done;
  let blood_pressure = req.body.patient.blood_pressure;
  let special_precautions = req.body.patient.special_precautions;
  let refer_to_consultant = req.body.patient.refer_to_consultant;
  let xylocaine_test = req.body.patient.xylocaine_test;
  let current_complaints = req.body.patient.current_complaints;
  let duration_current_complaints = req.body.patient.duration_current_complaints;
  let past_ocular_illness = req.body.patient.past_ocular_illness;
  let treatment_past_ocular_illness = req.body.patient.treatment_past_ocular_illness;
  let past_systemic_illness = req.body.patient.past_systemic_illness;
  let treatment_past_systemic_illness = req.body.patient.treatment_past_systemic_illness;
  let surgical_history_ocular = req.body.patient.surgical_history_ocular;
  let surgical_history_other = req.body.patient.surgical_history_other;
  let drug_allergies = req.body.patient.drug_allergies;
  let current_glass_prescription_right = req.body.patient.current_glass_prescription_right;
  let current_glass_prescription_left = req.body.patient.current_glass_prescription_left


  let query = "INSERT INTO optometry_results (UHID, auto_refractometer_reading_right, auto_refractometer_reading_left, " +
  "keratometry_reading_right, keratometry_reading_left, unaided_vision_right, unaided_vision_left, " +
  "vision_with_pinhole, retinoscopy, acceptance, intra_ocular_pressure, SAC, iop_record_timestamp, " +
  "dilatation, dilatation_time, optical_investigation, procedures_done, blood_pressure, special_precautions, "+
  "refer_to_consultant, xylocaine_test, current_complaints, duration_current_complaints, " + 
  "past_ocular_illness, treatment_past_ocular_illness, past_systemic_illness, treatment_past_systemic_illness, "+
  "surgical_history_ocular, surgical_history_other, drug_allergies, current_glass_prescription_right," +
  "current_glass_prescription_left,  RecordTouchDate) "+
  "VALUES ('"+ UHID +"','" + auto_refractometer_reading_right + "','"+
              auto_refractometer_reading_left + "','"+ keratometry_reading_right +"', '"+ keratometry_reading_left +
              "','" + unaided_vision_right +"', '"+ unaided_vision_left +"', '"+ vision_with_pinhole +
              "', '"+ retinoscopy +"', '"+ acceptance +"', '"+ intra_ocular_pressure + "', '"+ SAC +
              "', '"+ iop_record_timestamp + "', '"+ dilatation+ "', '"+dilatation_time + "', '"+optical_investigation + 
              "', '"+ procedures_done + "', '"+ blood_pressure+ "', '"+special_precautions +
              "', '"+ refer_to_consultant + "', '"+ xylocaine_test+ "', '"+current_complaints+ "', '"+duration_current_complaints+
              "', '"+ past_ocular_illness+ "', '"+treatment_past_ocular_illness+ "', '" + past_systemic_illness +
              "', '"+ treatment_past_systemic_illness+ "', '"+ surgical_history_ocular+ "', '"+ surgical_history_other+
              "', '"+ drug_allergies+ "', '"+ current_glass_prescription_right+ 
              "', '"+ current_glass_prescription_left+ "', DEFAULT);";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query);
    con.release();
    console.log("Exiting addOptometryResults...");
    return true;
  }
  catch(err) {
    console.log("Error ====== addOptometryResults");
    console.log("Error code is: ", err.code);
    console.log("Exiting addOptometryResults...");
    return false;
  }
}

async function retrieveOptometryResults(req) {
  console.log("Entering retrieveOptometryResults...");
  let UHID = req.query['UHID'];
  let date_of_optometry_test = req.query['date'];
  let query = "";

  if (moment(date_of_optometry_test, 'YYYY-MM-DD',true)=== true) {
    query = "SELECT * FROM optometry_results WHERE UHID = '" +UHID+ 
    "' and date(RecordTouchDate) = '" + date_of_optometry_test+ "'; ";
  } else {
    query = "SELECT * FROM optometry_results WHERE UHID = '" +UHID+ 
            "' order by RecordTouchDate desc limit 1;"
  } 
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let patientJson = JSON.stringify(result);
    console.log(patientJson);
    con.release();
    console.log("Exiting retrieveOptometryResults...");
    return patientJson;
  }
  catch(err) {
    console.log("Error ====== retrieveOptometryResults");
    console.log("Error code is: ", err.code);
    console.log("Exiting retrieveOptometryResults...");
    return false;
  }
}

async function addConsultantResults(req) {
  console.log("Entering addConsultantResults...");
  let UHID = req.body.patient.UHID;
  let VisionRight = req.body.patient.VisionRight;
  let VisionLeft = req.body.patient.VisionLeft;
  let acceptanceRight = req.body.patient.acceptanceRight;
  let acceptanceLeft = req.body.patient.acceptanceLeft;
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
              VisionLeft + "','"+ acceptanceRight +"', '"+ 
              acceptanceLeft +"', '"+ Finalglass_presRight +"', '"+ Finalglass_presLeft + "', '"+EyebrowRight +"', '"+ EyebrowLeft +"', '"+ Extraocular_moveRight + "', '"+ Extraocular_moveLeft +"', '"+
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
exports.addOptometryResults = addOptometryResults;
exports.retrieveOptometryResults = retrieveOptometryResults;
exports.retrievePatientOcularFacts = retrievePatientOcularFacts;
exports.addConsultantResults = addConsultantResults;
exports.retrievePatientSurgicalHistory = retrievePatientSurgicalHistory;
exports.addPatientSurgicalHistory = addPatientSurgicalHistory;