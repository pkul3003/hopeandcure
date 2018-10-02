let mysql = require('mysql2');
let config = require("../../config.js");
let callmysqlpool = require("../../mysql-functions/createMysqlSingleton.js");

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


async function createPatientBillRecord(req) {
    console.log("Entering createPatientBillRecord...");
    let UHID = req.body.patient.UHID;
    let OPDConsultationFee = req.body.patient.OPDConsultationFee;
    let IPDFee = req.body.patient.IPDFee;
    let InvestigationsFee = req.body.patient.InvestigationsFee;
    let LabFee = req.body.patient.LabFee;
    let ProcedureCharges = req.body.patient.ProcedureCharges;
    let DiscountPercent = req.body.patient.DiscountPercent;
    let ModeOfPayment = req.body.patient.ModeOfPayment;

    // calculate GST. GST exempt for Medical Services
    let GST = 0.00;
    // calculate TotalBillAmount
    let temp1 = OPDConsultationFee + IPDFee + InvestigationsFee + LabFee + ProcedureCharges;
    let temp2 = temp1 - (DiscountPercent * temp1 / 100);
    let TotalBillAmount = parseFloat(temp2).toPrecision(9);

    let query = "INSERT into patient_billing_record VALUES ('" +UHID+ "', " + 
    OPDConsultationFee + ", " + IPDFee + ", " + InvestigationsFee + ", " + LabFee +", "+ ProcedureCharges +
    ", " + GST + ", " + DiscountPercent + ", " + TotalBillAmount + ", '" + ModeOfPayment +
    "', DEFAULT, DEFAULT);";

    console.log(query);
    try {
      let pool = await getConnectionPool();
      let con = await pool.getConnection();
      await con.execute(query);
      con.release();
      return true;
    }
    catch(err) {
      console.log("Error ====== createPatientBillRecord");
      console.log("Error code is: ", err.code);
      console.log("Exiting createPatientBillRecord...");
      return false;
    }
  }

async function retrieveModesOfPayment(req) {
    console.log("Entering retrieveModesOfPayment...");
    
    let query = "SELECT ModeOfPayment FROM modes_of_payment; " ;
    console.log(query);
    try {
      let pool = await getConnectionPool();
      let con = await pool.getConnection();
      let [result,fields] = await con.execute(query);
      let paymentModesJson = JSON.stringify(result);
      console.log(paymentModesJson);
      con.release();
      return paymentModesJson;
    }
    catch(err) {
      console.log("Error ====== retrieveModesOfPayment");
      console.log("Error code is: ", err.code);
      console.log("Exiting retrieveModesOfPayment...");
      return false;
    }
}

exports.createPatientBillRecord = createPatientBillRecord;
exports.retrieveModesOfPayment = retrieveModesOfPayment;