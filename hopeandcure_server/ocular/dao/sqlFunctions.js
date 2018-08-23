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
    console.log("Exiting addOptometaryResults...");
    return false;
  }
}

async function retrieveRetrieveOptometaryResults(req) {
  console.log("Entering retrieveRetrieveOptometaryResults...");
  let UHID = req.body.patient.UHID;

  let query = "SELECT * FROM optometary_results WHERE UHID = ?;";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query,[UHID]);
    let patientJson = JSON.stringify(result);
    console.log(patientJson);
    con.release();
    console.log("Exiting retrieveRetrieveOptometaryResults...");
    return patientJson;
  }
  catch(err) {
    console.log("Error ====== retrieveOptometaryResults");
    console.log("Exiting retrieveRetrieveOptometaryResults...");
    return false;
  }
}


async function retrievePatientOcularFacts(req) {
  console.log("Entering retrievePatientocularFacts...");
  let UHID = req.body.patient.UHID;

  let query = "SELECT * FROM patient_ocular_facts WHERE UHID = ?;";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query,[UHID]);
    let patientJson = JSON.stringify(result);
    console.log(patientJson);
    con.release();
    console.log("Exiting retrievePatientocularFacts...");
    return patientJson;
  }
  catch(err) {
    console.log("Error ====== retrievePatientocularFacts");
    console.log("Exiting retrievePatientocularFacts...");
    return false;
  }
}

exports.addPatientOcularFacts = addPatientOcularFacts;
exports.addOptometaryResults = addOptometaryResults;
exports.retrieveRetrieveOptometaryResults = retrieveRetrieveOptometaryResults;
exports.retrievePatientOcularFacts = retrievePatientOcularFacts;