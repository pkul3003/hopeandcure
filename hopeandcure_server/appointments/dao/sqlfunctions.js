let mysql = require('mysql2');
let config = require("../../config.js");
let callmysqlpool = require("../../mysql-functions/createMysqlSingleton.js");
let SearchStringParsing = require("../../common-functions/commonFunctions.js");

async function getConnectionPool() {
  try {
    console.log("Entering getConnectionPool...");
    return (await callmysqlpool.getPool());
  }
  catch (err) {
    console.log("Error in creating Mysql Pool");
    console.log("Error code is: ", err.code);
    return false;
  }
}

// This function retrieves all current and future appointments based on view-type
async function retrieveAppointments(req) {
  console.log("Entering retrieveAppointments...");
  let view_type = req.query['view-type'];
  let query = "";

  switch(view_type) {
    case "reception":
      query = "SELECT * FROM appointments_view WHERE (DateOfAppointment >= CURDATE()) ORDER BY DateOfAppointment;";
      break;
    case "optometry":
      query = "SELECT * FROM appointments_view WHERE (DateOfAppointment >= CURDATE())" + 
              "and (PatientProgressStatus = 'Arrived' or PatientProgressStatus = 'With_Optometrist')"+
              " ORDER BY DateOfAppointment; ";
      break;
    case "consultant":
      query = "SELECT * FROM appointments_view WHERE (DateOfAppointment >= CURDATE())"+
              "and (PatientProgressStatus = 'Arrived' or PatientProgressStatus = 'With_Optometrist' "+
              "or PatientProgressStatus = 'With_Consultant') ORDER BY DateOfAppointment; " ;
      break;
    default:
      var responseJson = {
        "msgType" : "warning",
        "message" : "invalid view-type specified"
      }
      console.log("Exiting retrieveAppointments...");
      return JSON.stringify(responseJson);
  }


  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let appointmentsJson = JSON.stringify(result);
    console.log(appointmentsJson);
    con.release();
    return appointmentsJson;
  }
  catch(err) {
    console.log("Error ====== retrieveAppointments");
    console.log("Error code is: ", err.code);
    con.release();
    return false;
  }
}

async function retrieveAppointmentsByDate(req) {
  console.log("Entering retrieveAppointmentsByDate...");
  //let DateOfAppointment = req.body.appointments.appointment_date;
  // req coming as a GET call
  let DateOfAppointment = req.query['date'];
  
  let query = "SELECT * FROM appointments_view WHERE DateOfAppointment = '" + DateOfAppointment + "';";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let appointmentsJson = JSON.stringify(result);
    console.log(appointmentsJson);
    con.release();
    return appointmentsJson;
  }
  catch(err) {
    console.log("Error ====== retrieveAppointments");
    console.log("Error code is: ", err.code);
    con.release();
    return false;
  }
}

async function createAppointment(req) {
  console.log("Entering createAppointment...");

  let UHID = req.body.appointment.UHID;
  let first_name = req.body.appointment.first_name;
  let middle_name = req.body.appointment.middle_name;
  let last_name = req.body.appointment.last_name;
  let birth_date = req.body.appointment.DOB;
  let gender = req.body.appointment.gender;
  let consultant = req.body.appointment.consultant;
  let appointment_date = req.body.appointment.appointment_date;
  let appointment_time = req.body.appointment.appointment_time;
  let contact_number = req.body.appointment.contact_number;
  let email_id = req.body.appointment.email_id;
  let referred_by = req.body.appointment.referred_by;
  let patient_city = req.body.appointment.patient_city;
  let patient_area = req.body.appointment.patient_area;
  let relative_name = req.body.appointment.relative_name;
  let relation_with_patient = req.body.appointment.relation_with_patient;
  let relative_contact_no = req.body.appointment.relative_contact_no;
  let RunningNotes = req.body.appointment.RunningNotes;

  // format date of birth
  birth_date = birth_date.substring(0,10);
  if (relative_contact_no === "") {
    relative_contact_no = null;
  }


  let query1 = "INSERT INTO appointments values('" +UHID+ "','" +first_name+ "','"+middle_name+ "','"+last_name+ "','" +birth_date+
  "','" +gender+ "','" +consultant+ "','" +appointment_date+ "','" +appointment_time+ "','" +contact_number+
  "','" +email_id+ "','" +referred_by+ "','" +patient_city+ "','" +patient_area+ "','" +relative_name+
  "','" +relation_with_patient+ "','" +relative_contact_no+ "',DEFAULT);";

  // orchestration moved to apptHandler.js
  //let query2 = "INSERT INTO patient_progress_tracker values('" +UHID+ "', '" +PatientProgressStatus+ "', '" +RunningNotes+ "', DEFAULT);";

  console.log(query1);

  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.query(query1);
    con.release();
    return true;
  }
  catch(err) {
    console.log("Error ====== createAppointment");
    console.log("Error code is: ", err.code);
    if(err.code === "ER_DUP_ENTRY") {
      var duplicate_entry = "ER_DUP_ENTRY";
      console.log("appointment already exists for the patient for the given day ");
      console.log("Exiting createAppointment...");
      con.release();
      return duplicate_entry;
    } else {
      console.log("Exiting createAppointment...");
      con.release();
      return false;
    }
  }
}

async function addPatientProgressStatus(req) {
  console.log("Entering addPatientProgressStatus...");

  let UHID = req.body.appointment.UHID;
  let RunningNotes = req.body.appointment.RunningNotes;
  let PatientProgressStatus = 'Registered';
  let DateOfAppointment = req.body.appointment.appointment_date;

  let query = "INSERT INTO patient_progress_tracker values('" +UHID+ "', '" +PatientProgressStatus+ 
  "', '" +RunningNotes+ "', '" +DateOfAppointment+ "', DEFAULT);";

  console.log(query);

  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.query(query);
    con.release();
    return true;
  }
  catch(err) {
    console.log("Error ====== addPatientProgressStatus");
    console.log("Error code is: ", err.code);
    con.release();
    return false;
  }
}

// To update appointment
async function updateAppointment(req) {
  console.log("Entering updateAppointment...");

  let UHID = req.body.appointment.UHID;
  let OldDateofAppointment = req.body.appointment.old_appointment_date;
  let DateOfAppointment = req.body.appointment.appointment_date;
  let TimeOfAppointment = req.body.appointment.TimeOfAppointment;
  let consultant = req.body.appointment.consultant;

  let query = "update appointments set dateofappointment = '" +DateOfAppointment+ "', timeofappointment= '" +TimeOfAppointment+ 
  "', consultant = '" + consultant +"' Where UHID = '" +UHID+ "' AND dateofappointment= '" +OldDateofAppointment+ "' ;";

  console.log(query);

  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.query(query);
    con.release();
    return true;
  }
  catch(err) {
    console.log("Error ====== updateAppointment");
    console.log("Error code is: ", err.code);
    con.release();
    return false;
  }
}

async function updatePatientProgressStatus(req) {

  console.log("Entering updatePatientProgressStatus...");

  let UHID = req.body.appointment.UHID;
  let RunningNotes = req.body.appointment.RunningNotes;
  let PatientProgressStatus = req.body.appointment.PatientProgressStatus;
  let DateOfAppointment = req.body.appointment.DateOfAppointment;
  let UpdatedRunningNotes = "";

  let query1 = "SELECT RunningNotes FROM patient_progress_tracker WHERE UHID = '" +UHID+"' AND DateOfAppointment = '" +DateOfAppointment+ "';";
  console.log(query1);
  
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let ExistingNotesJson = {};
    let ExistingNotes = "";
    
    let [result,fields] = await con.query(query1);
    let ExistingNotesResult = JSON.stringify(result);
    console.log ("printing stringified result: ", ExistingNotesResult);

    let ExistingNotesJsonArray = JSON.parse(ExistingNotesResult);
    for (count in ExistingNotesJsonArray) {
      console.log("json object is : " , ExistingNotesJsonArray[count]);
      ExistingNotesJson = ExistingNotesJsonArray[count];
    }
    for (key in ExistingNotesJson) {
      console.log("key is:" , key);
      console.log("value is: ", ExistingNotesJson[key]);
      ExistingNotes = ExistingNotesJson[key];
    }

    console.log("existing notes : ", ExistingNotes);
    UpdatedRunningNotes = RunningNotes + ";" + ExistingNotes;
    console.log("updated notes : ", UpdatedRunningNotes);

    let query2 = "update patient_progress_tracker set RunningNotes = '" +UpdatedRunningNotes+ 
    "' , PatientProgressStatus = '" +PatientProgressStatus+ "', RecordTouchDate = DEFAULT where UHID = '" +UHID+ 
    "' AND DateOfAppointment = '" +DateOfAppointment+ "';" 

    console.log("query2: ", query2);
    await con.query(query2);
    con.release();
    console.log("Exiting updatePatientProgressStatus...");
    return true;
  }
  catch(err) {
    console.log("Error ====== addPatientProgressStatus");
    console.log("Error code is: ", err.code);
    console.log("Exiting updatePatientProgressStatus...");
    con.release();
    return false;
  }

}

// Retrieve appointments based on any search criteria
async function searchAppointment(req) {
  console.log("Entering searchAppointment...");

  var tentFirstName1 = "";
  var tentLastName1 = "";
  var tentFirstName2 = "";
  var tentLastName2 = "";
  var mobile = "";
  var UHID = "";
  returnJsonObj = [];

  let search_string = req.body.patient.search_string;
  console.log("Search_String: ", req.body.patient);
  let parsedSearchString = await SearchStringParsing.getParsedSearchString(search_string);
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

    let query = "SELECT * FROM appointments_view where FirstName like '"+ tentFirstName1 +"' or Lastname like '" +tentLastName1 +
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
          console.log(" it seems no appointments were found .........");
          var NoAppointmentsFound = {
            "msgtype" : "info",
            "message": "no appointments found for the given criteria"
          }
          returnJsonObj[0] = NoAppointmentsFound;
          //icount++;
          return JSON.stringify(NoAppointmentsFound);
        }
        return patientJson;
      }
      catch(err) {
        console.log("Error ====== searchAppointment");
        console.log("error code is: " + err.code);
        con.release();
        var ErrorFromDB = {
          "msgtype" : "failed",
          "message": "There was an error while searching the appointments"
        }
        returnJsonObj[0] = ErrorFromDB;
        return JSON.stringify(ErrorFromDB);
        //icount++;
      }
  return false;
}


exports.retrieveAppointments = retrieveAppointments;
exports.createAppointment = createAppointment;
exports.retrieveAppointmentsByDate = retrieveAppointmentsByDate;
exports.addPatientProgressStatus = addPatientProgressStatus;
exports.updatePatientProgressStatus = updatePatientProgressStatus;
exports.updateAppointment=updateAppointment;
exports.searchAppointment=searchAppointment;