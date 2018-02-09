'use strict'
let stubResponse = require('../../responsestubs/StubResponse.js');
let config = require("../../config.js");

//log conversation history

async function apiHandlerForAppointments(req,res){
	console.log("Entering apiHandlerForAppointments========>");
	//get username
	let returnJsonObj = await stubResponse.ListOfAppointments;
	
	JSON.stringify(returnJsonObj);
	
	console.log("#################");
	
	console.log(returnJsonObj);
	
	console.log("#################");
	
	console.log("Exiting apiHandlerForShowBalance========>");
	
	return res.json(returnJsonObj);
}



//exporing all apiHandler functions
exports.apiHandlerForAppointments = apiHandlerForAppointments;
