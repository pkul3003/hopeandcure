$(document).ready(function()
{
	$("#username").focus();
});
// $("#pswd").keypress(function(e) {
// 	alert("entered");
//     if(e.which == 13) {
//         alert('You pressed enter!');
//     }
// });
function applicationLogin()
{
	var username = $("#username").val();
	var pswd = $("#pswd").val();

	console.log("username :"+username+" pswd :: "+pswd);

	var reqJsonObj = {"intentName" : "authenticate-staff","staff": {"username" : username,"password" : pswd}};
	//var reqJsonObj = {"intentName" : "authenticate-staff","staff": {"username" : username,"password" : MD5(pswd)}};

	console.log(JSON.stringify(reqJsonObj));

	  $.ajax({
		 type : "POST",
	  	 url : "http://localhost:8082/login",
	  	 data : reqJsonObj,
	  	 success : function(result)
	  	 {
	   		 console.log(JSON.stringify(result));
	   		 alert("Logged Successfully");
	   		 window.location.href = "searchPatient.html";
	  	 }
	  });
}
