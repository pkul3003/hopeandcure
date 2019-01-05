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
    console.log("Error code is: ", err.code);
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

    var response = {
      "msgtype": "success",
      "message": "patient created successfully",
      "UHID" : newUHID
    }
    con.release();
    console.log("Exiting createNewPatient...");
    return response;
  }
  catch(err) {
    console.log("Error ====== createNewPatient");
    console.log("Error code is: ", err.code);
    if(err.code === "ER_DUP_ENTRY") {
      var response = {
        "msgtype" : "info",
				"message": "patient already exists"
			}
      con.release();
      console.log("Exiting createNewPatient...");
      return response;
    }
    con.release();
    console.log("Exiting createNewPatient...");
    return false;
  }
}

async function updatePatientDetails(req) {
  console.log("Entering updatePatientDetails...");
  let UHID = req.body.patient.UHID
  let first_name = req.body.patient.first_name;
  let middle_name = req.body.patient.middle_name;
  let last_name = req.body.patient.last_name;
  let birth_date = req.body.patient.DOB;
  let gender = req.body.patient.gender;
  let contact_number = req.body.patient.contact_number;
  let email_id = req.body.patient.email_id;
  let aadhar = req.body.patient.aadhar;
  let query = "UPDATE patients set FirstName = '"+ first_name +"', MiddleName = '" + middle_name + 
              "', LastName = '"+ last_name + "', DOB = '"+birth_date +"', Gender = '" + gender +
              "', ContactNumber = '"+ contact_number +"', EmailId = '"+ email_id +
              "', Aadhar = '"+ aadhar +"', RecordTouchDate = NOW() where UHID = "+UHID+ ";";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query);
    var response = {
      "msgtype": "success",
      "message": "patient details updated successfully"
    }
    console.log("Exiting updatePatientDetails...");
    con.release();
    return response;
  }
  catch(err) {
      console.log("Error ====== updatePatientDetails");
      console.log("Error code is: ", err.code);
      console.log("Exiting updatePatientDetails...");
      con.release();
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
      con.release();
      return errMessage;
    }
    if(err.code === "ER_NO_REFERENCED_ROW_2") {

      var errMessage = {
        "msgtype" : "info",
        "message": "patient UHID not valid to add address"
      }
      console.log("Exiting addPatientAddress...");
      con.release();
      return errMessage;
    }
    console.log("Exiting addPatientAddress...");
    con.release();
    return false;
  }
}
// To update Patient address
async function updatePatientAddress(req) {
  console.log("Entering updatePatientAddress...");
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

  let query = "UPDATE patient_address set AddressLine1 = '" + address_line1 + "', AddressLine2 = '"+ address_line2 + "',Landmark = '"+
              landmark +"', Area = '" + area +"', City ='" + city +"', District = '" + district +"',State = '"+ state +"', PINCode = '"+ pincode +"', EmergencyContactNumber = '"+
              emergency_conact_number +"' Where UHID = '" + UHID +"' ;";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query);
    con.release();
    console.log("Exiting updatePatientAddress...");
    var success = {
      "msgtype" : "success",
      "message": "patient address updated successfully"
    }
    console.log("Exiting updatePatientAddress...");
    return success;
  }
  catch(err) {
    console.log("Error ====== updatePatientAddress");
    console.log("Error code is: ", err.code);
    console.log("Exiting updatePatientAddress...");
    con.release();
    return false;
  }
}


async function retrievePatients(req) {
  console.log("Entering retrievePatients...");

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
        console.log("key: "+key+", value: " + parsedSearchString[key]);
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
          return JSON.stringify(NoPatientsFound);
        }
        return patientJson;
      }
      catch(err) {
        console.log("Error ====== retrievePatientsByName");
        console.log("error code is: " + err.code);
        var ErrorFromDB = {
          "msgtype" : "failed",
          "message": "There was an error while searching the patient"
        }
        returnJsonObj[0] = ErrorFromDB;
        con.release();
        return JSON.stringify(ErrorFromDB);
        //icount++;
      }
  return false;
}

async function retrievePatientAndAddressDetails(req) {
  console.log("Entering retrievePatientAndAddressDetails...");
  let UHID = req.query['UHID'];

  let query = "select * from patient_address_details_view where UHID = " +UHID+ ";";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let PatientDetailsJson = JSON.stringify(result);
    console.log("stringified json object is: ", PatientDetailsJson);
    if(PatientDetailsJson === "[]") {
      console.log(" it seems no patients were found .........");
      var NoPatientsFound = {
        "msgtype" : "info",
        "message": "no patient details found"
      }
      console.log("Exiting retrievePatientAndAddressDetails...");
      return JSON.stringify(NoPatientsFound);
    }
    // success response
    console.log("Exiting retrievePatientAndAddressDetails...");
    con.release();
    return PatientDetailsJson;
  }
  catch(err) {
    console.log("Error ====== retrievePatientAndAddressDetails");
    console.log("Error code is: ", err.code);
    con.release();
    console.log("Exiting retrievePatientAndAddressDetails...");
    return false;
  }

}


exports.createNewPatient = createNewPatient;
exports.addPatientAddress = addPatientAddress;
exports.retrievePatients = retrievePatients;
exports.updatePatientDetails = updatePatientDetails;
exports.retrievePatientAndAddressDetails = retrievePatientAndAddressDetails;
exports.updatePatientAddress = updatePatientAddress;