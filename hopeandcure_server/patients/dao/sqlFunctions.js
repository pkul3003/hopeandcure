let mysql = require('mysql2');
let config = require("../../config.js");
let callmysqlpool = require("../../mysql-functions/createMysqlSingleton.js");
let SearchStringParsing = require("../../common-functions/commonFunctions.js");


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

async function createNewPatient(req) {
  console.log("Entering createNewPatient...");
  let first_name = req.body.patient.first_name;
  let middle_name = req.body.patient.middle_name;
  let last_name = req.body.patient.last_name;
  let birth_date = req.body.patient.DOB;
  let gender = req.body.patient.gender;
  let contact_number = req.body.patient.contact_number;
  let email_id = req.body.patient.email_id;
  let aadhar = req.body.patient.aadhar;
  let query1 = "INSERT INTO patients (UHID, FirstName, MiddleName, LastName, DOB, Gender, ContactNumber, EmailId, Aadhar, RecordTouchDate) " +
  "VALUES (DEFAULT,'"+ first_name +"','" + middle_name + "','"+ last_name + "','"+
              birth_date +"','" + gender +"','"+ contact_number +"','"+ email_id + "','"+ aadhar +"',DEFAULT);";
  console.log(query1);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query1);
    console.log("after createPatient ... now fetching UHID just created");
    query2 = "SELECT UHID FROM patients WHERE FirstName = '" + first_name +"' AND LastName = '" + last_name+ "' AND DOB = '" + birth_date +
     "' AND ContactNumber = '" + contact_number + "' AND Aadhar = '" +aadhar+ "';" ;
     console.log("select UHID query: ", query2);
    let [result, fields] = await con.execute(query2);
    console.log("result.inserId: " , JSON.parse(JSON.stringify(result)));
    let newUHIDObject = JSON.parse(JSON.stringify(result));
    newUHID = newUHIDObject[0].UHID;
    console.log(newUHID);
    con.release();

    var response = {
      "msgtype": "success",
      "message": "patient created successfully",
      "UHID" : newUHID
    }
    console.log("Exiting createNewPatient...");
    return response;
  }
  catch(err) {
    console.log("Error ====== createNewPatient");
    console.log("Exiting createNewPatient...");
    if(err.code === "ER_DUP_ENTRY") {
      var response = {
        "msgtype" : "info",
				"message": "patient already exists"
			}
      //con.release();
      console.log("Exiting createNewPatient...");
      return response;
    }
  //  con.release();
    console.log("Exiting createNewPatient...");
    return false;
  }
}

async function addPatientAddress(req) {
  console.log("Entering addPatientAddress...");
  let UHID = req.body.patientAddress.UHID;
  let address_line1 = req.body.patientAddress.address_line1;
  let address_line2 = req.body.patientAddress.address_line2;
  let landmark = req.body.patientAddress.landmark;
  let area = req.body.patientAddress.area;
  let city = req.body.patientAddress.city;
  let district = req.body.patientAddress.district;
  let state = req.body.patientAddress.state;
  let pincode = req.body.patientAddress.pincode;
  let emergency_conact_number = req.body.patientAddress.emergency_conact_number;

  let query = "INSERT INTO patient_address VALUES ('"+ UHID +"','" + address_line1 + "','"+ address_line2 + "','"+
              landmark +"','" + area +"','" + city +"','" + district +"', '"+ state +"', '"+ pincode +"', '"+
              emergency_conact_number +"', DEFAULT);";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query);
    con.release();
    console.log("Exiting addPatientAddress...");
    var success = {
      "msgtype" : "success",
      "message": "patient address added successfully"
    }
    console.log("Exiting addPatientAddress...");
    return success;
  }
  catch(err) {
    console.log("Error ====== addPatientAddress", err.message, err.code);
    console.log("Exiting addPatientAddress...");
    if(err.code === "ER_DUP_ENTRY") {
      var errMessage = {
        "msgtype" : "info",
				"message": "patient address already exists"
			}
      console.log("Exiting addPatientAddress...");
      return errMessage;
    }
    if(err.code === "ER_NO_REFERENCED_ROW_2") {

      var errMessage = {
        "msgtype" : "info",
        "message": "patient UHID not valid to add address"
      }
      console.log("Exiting addPatientAddress...");
      return errMessage;
    }
    console.log("Exiting addPatientAddress...");
    return false;
  }
}

async function createPatientMedicalFacts (req) {
  console.log("Entering createPatientMedicalFacts...");

  let UHID = req.body.patient.UHID;
  let blood_group = req.body.patient.blood_group;
  let bp_systolic = req.body.patient.bp_systolic;
  let bp_diastolic = req.body.patient.bp_diastolic;
  let isDiabetic = req.body.patient.isDiabetic;
  let isHighBPPatient = req.body.patient.isHighBPPatient;
  let isHeartPatient = req.body.patient.isHeartPatient;
  let patient_weight = req.body.patient.patient_weight;
  let sugar_level_fasting = req.body.patient.sugar_level_fasting;
  let sugar_level_random = req.body.patient.sugar_level_random;
  let sugar_level_postlunch = req.body.patient.sugar_level_postlunch;


  let query = "INSERT INTO patient_medical_facts VALUES ('"+UHID+ "','"+ blood_group + "','"+
              bp_systolic +"','" + bp_diastolic +"', '"+ isDiabetic +"', '"+ isHighBPPatient +
              "', '"+ isHeartPatient + "', '"+ patient_weight + "', '"+ sugar_level_fasting + "', '"+ sugar_level_random +
              "', '"+ sugar_level_postlunch + "', DEFAULT);";

  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query);
    con.release();

    var response = {
      "msgtype" : "success",
      "message": "patient medical facts added successfully"
    }
    console.log("Exiting createPatientMedicalFacts...");
    return response;
  }
  catch(err) {
    //con.release();
    console.log("Error ====== createPatientMedicalFacts");
    console.log("Exiting createPatientMedicalFacts...");
    return false;
  }
}

async function updatePatientMedicalFacts (req) {
  console.log("Entering updatePatientMedicalFacts...");

  let UHID = req.body.patient.UHID;
  let blood_group = req.body.patient.blood_group;
  let bp_systolic = req.body.patient.bp_systolic;
  let bp_diastolic = req.body.patient.bp_diastolic;
  let isDiabetic = req.body.patient.isDiabetic;
  let isHighBPPatient = req.body.patient.isHighBPPatient;
  let isHeartPatient = req.body.patient.isHeartPatient;
  let patient_weight = req.body.patient.patient_weight;
  let sugar_level_fasting = req.body.patient.sugar_level_fasting;
  let sugar_level_random = req.body.patient.sugar_level_random;
  let sugar_level_postlunch = req.body.patient.sugar_level_postlunch;

  let query = "update patient_medical_facts set BloodGroup = '" + blood_group + "', BloodPressureSystolic = '" +
      bp_systolic + "', BloodPressureDiastolic = '" + bp_diastolic + "', isDiabetic = '" + isDiabetic + "', isHighBPPatient ='" +
      isHighBPPatient + "', isHeartPatient = '" +isHeartPatient + "',   PatientWeight = '" + patient_weight +
      "', SugarLevelFasting = '" + sugar_level_fasting + "', SugarLeaveRandom = '" + sugar_level_random +     
      "', SugarLevelPostLunch = '" + sugar_level_postlunch+ "', RecordTouchDate = DEFAULT where UHID = " +UHID+ "; ";

  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query);
    var response = {
      "msgtype" : "success",
      "message": "patient medical facts updated successfully"
    }
    con.release();
    console.log("Exiting updatePatientMedicalFacts...");
    return response;
  }
  catch(err) {
    //con.release();
    console.log("Error ====== updatePatientMedicalFacts");
    console.log("Exiting updatePatientMedicalFacts...");
    return false;
  }
}

async function retrievePatientMedicalFacts(req) {
  console.log("inside retrievePatientMedicalFacts...");
  let UHID = req.body.patient.UHID;

  let query = "SELECT * FROM patients WHERE UHID = '" +UHID+ "';";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let patientJson = JSON.stringify(result);
    console.log(patientJson);
    con.release();
    return patientJson;
  }
  catch(err) {
    console.log("Error ====== retrievePatientsByName");
    return false;
  }
}

async function retrievePatients(req) {
  console.log("inside retrievePatients...");

  var tentFirstName1 = "";
  var tentLastName1 = "";
  var tentFirstName2 = "";
  var tentLastName2 = "";
  var mobile = "";
  var UHID = "";
  returnJsonObj = [];

  let search_string = req.body.patient.search_string;
  let parsedSearchString = await SearchStringParsing.getParsedSearchString (search_string);
  //var validReqObjects = {};

  for (var key in parsedSearchString) {
        console.log("key: "+key+", vvalue: " + parsedSearchString[key]);
        switch (key) {
          case 'mobile':
              mobile = parsedSearchString[key];
              break;
          case 'UHID':
              UHID = parsedSearchString[key];
              break;
          case 'tentFirstName1':
              tentFirstName1 = parsedSearchString[key];
              break;
          case 'tentLastName1':
              tentLastName1 = parsedSearchString[key];
              break;
          case 'tentFirstName2':
              tentFirstName2 = parsedSearchString[key];
              break;
          case 'tentLastName2':
              tentLastName2 = parsedSearchString[key];
              break;
          default:
        }
      }

    let query = "SELECT * FROM patients where FirstName like '"+ tentFirstName1 +"' or Lastname like '" +tentLastName1 +
                  "' or FirstName like '" + tentFirstName2 + "' and LastName like '" +tentLastName2 + "' or ContactNumber = '"+
                  mobile + "' or UHID = '"+ UHID + "';";

    try {
        let pool = await getConnectionPool();
        let con = await pool.getConnection();

          console.log(query);
          let [result,fields] = await con.execute(query);

        let patientJson = JSON.stringify(result);
        console.log(patientJson);
        con.release();

        if(patientJson === "[]") {
          console.log(" it seems no patients were found .........");
          var NoPatientsFound = {
            "msgtype" : "info",
            "message": "no patients found for the given criteria"
          }
          returnJsonObj[0] = NoPatientsFound;
          //icount++;
          return JSON.stringify(returnJsonObj);
        }
        return patientJson;
      }
      catch(err) {
        console.log("Error ====== retrievePatientsByName");
        var ErrorFromDB = {
          "msgtype" : "failed",
          "message": "There was an error while searching the patient"
        }
        returnJsonObj[0] = ErrorFromDB;
        //icount++;
      }
  return JSON.stringify(returnJsonObj);
}


async function retrievePatientsByName(req) {
  console.log("inside retrievePatientsByName...");
  let first_name = req.body.patient.first_name;
  let last_name = req.body.patient.last_name;
  let query = `SELECT * FROM patients WHERE FirstName = ? AND LastName = ?;`;
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query,[first_name,last_name]);
    let patientJson = JSON.stringify(result);
    console.log(patientJson);
    con.release();
    return patientJson;
  }
  catch(err) {
    console.log("Error ====== retrievePatientsByName");
    return false;
  }
}

async function retrievePatientsByUHID(req) {
  console.log("inside retrievePatientsByUHID...");
  let UHID = req.body.patient.UHID;
  query = "SELECT * FROM patients WHERE UHID = " + UHID;
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let patientJson = JSON.stringify(result);
    console.log(patientJson);
    con.release();
    return patientJson;
  }
  catch (err){
    console.log("Error ====== retrievePatientsByUHID");
    return false;
  }
}

async function retrievePatientsByMobile(req) {
  console.log("inside retrievePatientsByMobile...");
  let contact_number = req.body.patient.contact_number;
  query = "SELECT * FROM patients WHERE ContactNumber = ?";
  console.log(query);

  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query,[contact_number]);
    let patientJson = JSON.stringify(result);
    console.log(patientJson);
    con.release();
    return patientJson;
  }
  catch (err){
    console.log("Error ====== retrievePatientsByMobile");
    return false;
  }
}

async function retrieveConsultants(req){

  console.log("inside retrieveConsultants...");
  
  query = "SELECT * FROM consultants;";
  console.log(query);

  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query,[contact_number]);
    let patientJson = JSON.stringify(result);
    console.log(patientJson);
    con.release();
    return patientJson;
  }
  catch (err){
    console.log("Error ====== retrievePatientsByMobile");
    return false;
  }
}


exports.retrievePatientsByName = retrievePatientsByName;
exports.retrievePatientsByUHID = retrievePatientsByUHID;
exports.createNewPatient = createNewPatient;
exports.retrievePatientsByMobile = retrievePatientsByMobile;
exports.createPatientMedicalFacts = createPatientMedicalFacts;
exports.retrievePatientMedicalFacts = retrievePatientMedicalFacts;
exports.updatePatientMedicalFacts = updatePatientMedicalFacts;
exports.addPatientAddress = addPatientAddress;
exports.retrievePatients = retrievePatients;
