/*
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://localhost:27017/";

MongoClient.connect(url, function(err, db) {
  if (err) throw err;
  var dbo = db.db("hmsdb");
  dbo.collection("patients").findOne({}, function(err, result) {
    if (err) throw err;
    console.log(result.name);
    db.close();
  });
});
*/

var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "root@123",
  database: "hmsdb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  query = `SELECT * FROM Patient;`;
  con.query(query, function(err, result){
    if(err) throw err;
    console.log("result: ", result);
  });
});
