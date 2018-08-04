$(document).ready(function()
{
	$("#username").focus();
});
function applicationLogin()
{
	var username = $("#username").val();
	var pswd = $("#pswd").val();

	console.log("username :"+username+" pswd :: "+pswd);

	var reqJsonObj = {"intentName" : "authenticate-staff","staff": {"username" : username,"password" : pswd}};

	console.log(JSON.stringify(reqJsonObj));

	  $.ajax({
		 type : "POST",
	  	 url : "http://localhost:8082/login",
	  	 data : reqJsonObj,
	  	 success : function(result)
	  	 {
	   		 console.log(JSON.stringify(result));
	   		 window.location.href = "searchPatient.html";
	  	 }
	  });
}
