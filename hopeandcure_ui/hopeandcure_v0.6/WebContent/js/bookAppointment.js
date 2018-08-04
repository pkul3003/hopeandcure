// ON PAGE LOAD APPOINTMENT DATE
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
      if(result.length==0)
      {
        alert("No results to show");
      }
      else {
        for(var i=0;i<result.length;i++)
        {
       	 $("#appointmentData").append("<tr class='trClass' onclick = 'patientInformationModal()'><td>"+(i+1)+"</td><td>"+result[i].UHID+"</td><td>"+result[i].FirstName+""+result[i].LastName+"</td><td>"+result[i].Gender+"</td><td>"+result[i].Consultant+"</td><td>"+result[i].TimeOfAppointment+"</td><td><select class='appointmentStatus'><option value='registered'>Registered</option><option value='arrived'>Arrived</option><option value='optometrist'>Optometrist</option><option value='consultant'>Consultant</option><option value='investigation'>Investigation</option><option value='completed'>Consultation completed</option><option value='ipd'>IPD</option></select></td></tr>");
        }
      }
      getConsultants();
	 }
  });
});
// GET CONSULTANTS LIST
function getConsultants()
{
  var reqJsonObj ={"intentName" : "retrieve-consultants"};

  $.ajax({
    type : "POST",
    url : "http://localhost:8082/hook",
    data : reqJsonObj,
    success : function(result)
    {
      for(var i=0;i<result.length;i++)
      {
        $("#consultant").append("<option>"+result[i].consultant+"</option>");
      }
    }
  });
}
// GET PATIENT DATA TO BOOK APPOINTMENT
function bookAppointment()
{
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
// BOOK APPOINTMENT
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
	  		 window.location.href = "searchPatient.html";

	 	 }
	 });
}

// GO BACK TO PREVIOUS PAGE
function goBack()
{
    window.history.back();
}
