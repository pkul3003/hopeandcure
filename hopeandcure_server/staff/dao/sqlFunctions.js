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
    return false;
  }
}

async function createNewStaff(req) {
  console.log("Entering createNewStaff...");
  let username = req.body.staff.username;
  let first_name = req.body.staff.first_name;
  let middle_name = req.body.staff.middle_name;
  let last_name = req.body.staff.last_name;
  let birth_date = req.body.staff.DOB;
  let gender = req.body.staff.gender;
  let contact_number = req.body.staff.contact_number;
  let email_id = req.body.staff.email_id;
  let password = req.body.staff.password;

  let query = "INSERT INTO stafflogin VALUES ('" +username+ "', '"+ first_name +"','" + middle_name + "','"+ last_name + "','"+
              birth_date +"','" + gender +"', '"+ contact_number +"', '"+ email_id + "', MD5('" +password+ "'), DEFAULT);";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    await con.execute(query);
    con.release();

    var returnJsonObj = {
      "msgtype" : "success",
      "message": "staff created successfully"
    }
    console.log("Exiting createNewStaff...");
    return returnJsonObj;
  }
  catch(err) {
    console.log("Error ====== createNewStaff");

    if(err.code === "ER_DUP_ENTRY") {
      var response = {
        "msgtype" : "info",
				"message": "staff username already exists"
			}
      //con.release();
      console.log("Exiting createNewStaff...");
      return response;
    }
    //con.release();
    console.log("Exiting createNewStaff...");
    return false;
  }
}

async function authenticateStaffLogin(req) {

  console.log("Entering authenticateStaffLogin...");
  let username = req.body.staff.username;
  let password = req.body.staff.password;
  let query = "SELECT username, password FROM stafflogin WHERE username = '" + username + "' AND password = MD5( '" + password+ "');";
  console.log(query);
  try {
    let pool = await getConnectionPool();
    let con = await pool.getConnection();
    let [result,fields] = await con.execute(query);
    let staffJson = JSON.stringify(result);
    console.log(staffJson);
    con.release();
    return staffJson;
  }
  catch(err) {
    //con.release();
    console.log("Error ====== authenticateStaffLogin");
    return false;
  }
}


exports.createNewStaff = createNewStaff;
exports.authenticateStaffLogin = authenticateStaffLogin;
