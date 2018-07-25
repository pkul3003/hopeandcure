$(document).ready(function()
{
  var reqJsonObj ={"intentName" : "retrieve-appointments"}
  console.log("appointment UHID ::"+localStorage.getItem("UHID"));

  $.ajax({
	 type : "POST",
	 url : "http://localhost:8082/hook",
	 data : reqJsonObj,
	 success : function(result)
	 {
       for(var i=0;i<result.length;i++)
       {
      	 $("#appointmentData").append("<tr class='trClass' onclick = 'patientInformationModal()'><td>"+(i+1)+"</td><td>"+result[i].UHID+"</td><td>"+result[i].FirstName+" "+result[i].LastName+"</td><td>"+result[i].Gender+"</td><td>"+result[i].Consultant+"</td><td>"+result[i].TimeOfAppointment+"</td><td><select class='appointmentStatus'><option value='registered'>Registered</option><option value='arrived'>Arrived</option><option value='optometrist'>Optometrist</option><option value='consultant'>Consultant</option><option value='investigation'>Investigation</option><option value='completed'>Consultation completed</option><option value='ipd'>IPD</option></select></td></tr>");
       }
	 }
  });
});

/*function bookAppointment()
{
  var firstName = localStorage.getItem("firstName");
  var middleName = localStorage.getItem("middleName");
  var lastName = localStorage.getItem("lastName");
  var dateOfBirth = localStorage.getItem("dateOfBirth");
  var gender = localStorage.getItem("gender");
  var contactNumber = localStorage.getItem("contactNumber");
  var emailId = localStorage.getItem("emailId");
  var consultant = $("#consultant").val();
  var appointmentDate = $("#appointmentDate").val();
  var appointmentTime = $("#appointmentTime").val();
  var referredBy = $("#referredBy").val();
  var patientRelative = $("#patient_relative").val();
  var patientRelation = $("#patient_relation").val();
  var relativeContact = $("#relative_contact").val();

  var reqJsonObj = {"intentName" : "create-appointment","appointment": {"UHID" : "1236","first_name": firstName, "middle_name": middleName, "last_name": lastName, "DOB": dateOfBirth, "gender": gender, "contact_number": contactNumber, "email_id": emailId, "consultant":consultant, "appointment_date":appointmentDate, "appointment_time":appointmentTime, "referred_by":referredBy, "patient_city":"Pune", "patient_area":"Dhayari","patient_relative" : patientRelative ,"patient_relation": patientRelation ,"relative_contact":relativeContact}};

  console.log(reqJsonObj);

  $.ajax({
	 type : "POST",
  	 url : "http://localhost:8082/hook",
  	 data : reqJsonObj,
  	 success : function(result)
  	 {
   		 console.log(JSON.stringify(result));
  	 }
  });
}*/

function bookAppointment()
{
	alert("UHID :: "+localStorage.getItem("UHID"));
	var uhid = localStorage.getItem("UHID");
	var reqJsonObj = {"intentName" : "search-patient","patient": {"search_string": uhid}}

	$.ajax({
	     type : "POST",
	  	 url : "http://localhost:8082/hook",
	  	 data : reqJsonObj,
	  	 success : function(result)
	  	 {
	  		 confirmBookAppointment(uhid,result[0].FirstName,result[0].MiddleName,result[0].LastName,result[0].DOB,result[0].Gender,result[0].ContactNumber,result[0].EmailId);

	 	 }
	 });
}
function confirmBookAppointment(uhid,firstName,middleName,lastName,dob,gender,contactNo,emailId)
{
	var consultant = $("#consultant").val();
	var appointmentDate = $("#appointmentDate").val();
	var appointmentTime = $("#appointmentTime").val();
	var referredBy = $("#referredBy").val();
	var relativeName = $("#patient_relative").val();
	var relativeRelation = $("#patient_relation").val();
	var relativeContactNo = $("#relative_contact").val();

	var reqJsonObj = {"intentName" : "create-appointment","appointment" : {"UHID" : uhid,"first_name" : firstName,"middle_name" : middleName,"last_name" : lastName,"DOB" : dob,"gender" : gender,"consultant" : consultant,"appointment_date" : appointmentDate,"appointment_time" : appointmentTime,"contact_number" : contactNo,"email_id" : emailId,"referred_by" : referredBy,"patient_city" : "Pune","patient_area" : "Dhayari","relative_name" : relativeName,"relation_with_patient" : relativeRelation,"relative_contact_no" : relativeContactNo}}

	$.ajax({
	     type : "POST",
	  	 url : "http://localhost:8082/hook",
	  	 data : reqJsonObj,
	  	 success : function(result)
	  	 {
	  		 alert("appointment Booked");
	  		 window.location.href = "searchPatient.html";

	 	 }
	 });
}

function goBack()
{
    window.history.back();
}
