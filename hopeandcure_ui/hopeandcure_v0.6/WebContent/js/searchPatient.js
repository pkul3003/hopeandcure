// ON PAGE LOAD GET APPOINTMENTS
$(document).ready(function()
{
  $("#patientInformationContainer").hide();
  $("#multipleSearchPatients").hide();
  $("#searchPatientBar").focus();
  var reqJsonObj ={"intentName" : "retrieve-appointments"}

  $.ajax({
	 type : "POST",
	 url : "http://localhost:8082/hook",
	 data : reqJsonObj,
	 success : function(result)
	 {
     if(result.length==0)
     {
       $("#appointmentsTable_01").hide();
     }
     else
     {
       for(var i=0;i<result.length;i++)
       {
          var trId = "trId"+i;
          var uhid = result[i].UHID;
          $("#appointmentData").append("<tr id='"+trId+"' class='trClass'><td onclick = 'patientInformationModal(\""+uhid+"\")'>"+(i+1)+"</td><td onclick = 'patientInformationModal(\""+uhid+"\")'>"+result[i].UHID+"</td><td onclick = 'patientInformationModal(\""+uhid+"\")'>"+result[i].FirstName+" "+result[i].LastName+"</td><td onclick = 'patientInformationModal(\""+uhid+"\")'>"+result[i].Gender+"</td><td onclick = 'patientInformationModal(\""+uhid+"\")'>"+result[i].Consultant+"</td><td onclick = 'patientInformationModal(\""+uhid+"\")'>"+result[i].TimeOfAppointment+"</td><td><select  id='appointmentStatus"+i+"' class='appointmentStatus' onchange = 'getStatusVal(this)'><option value='registered'>Registered</option><option value='arrived'>Arrived</option><option value='optometrist'>Optometrist</option><option value='consultant'>Consultant</option><option value='investigation'>Investigation</option><option value='completed'>Consultation completed</option><option value='ipd'>IPD</option></select></td></tr>");

          var statusId = "appointmentStatus"+i;
          if(($("#"+statusId).val() == "registered") || ($("#"+statusId).val() == "Registered"))
            $("#"+statusId).closest("td").css("background-color","rgba(247,20,20,0.84)");

          if(($("#"+statusId).val() == "arrived") || ($("#"+statusId).val() == "Arrived"))
            $("#"+statusId).closest("td").css("background-color","rgba(68,236,65,0.84)");

          if(($("#"+statusId).val() == "optometrist") || ($("#"+statusId).val() == "Optometrist"))
            $("#"+statusId).closest("td").css("background-color","rgba(243,193,13,0.84)");

          if(($("#"+statusId).val() == "consultant") || ($("#"+statusId).val() == "Consultant"))
            $("#"+statusId).closest("td").css("background-color","rgba(236,203,236,1)");

          if(($("#"+statusId).val() == "investigation") || ($("#"+statusId).val() == "Investigation"))
            $("#"+statusId).closest("td").css("background-color","rgba(237,239,130,1)");

          if(($("#"+statusId).val() == "consultation completed") || ($("#"+statusId).val() == "Consultation completed"))
            $("#"+statusId).closest("td").css("background-color","rgba(251,157,59,1)");

          if(($("#"+statusId).val() == "ipd") || ($("#"+statusId).val() == "IPD"))
            $("#"+statusId).closest("td").css("background-color","rgba(144,226,204,1)");
       }
     }
	 }
  });
});
// TOGGLE APPOINTMENT STATUS COLOR
function getStatusVal(sel)
{
	var statusValue = sel.value;
	var statusId = sel.id;
	if((statusValue == "registered") || (statusValue == "Registered"))
  		$("#"+statusId).closest("td").css("background-color","rgba(247,20,20,0.84)");

  	 if((statusValue == "arrived") || (statusValue == "Arrived"))
  		$("#"+statusId).closest("td").css("background-color","rgba(68,236,65,0.84)");

  	 if((statusValue == "optometrist") || (statusValue == "Optometrist"))
   		$("#"+statusId).closest("td").css("background-color","rgba(243,193,13,0.84)");

  	 if((statusValue == "consultant") || (statusValue == "Consultant"))
    		$("#"+statusId).closest("td").css("background-color","rgba(236,203,236,1)");

    if(($("#"+statusId).val() == "investigation") || ($("#"+statusId).val() == "Investigation"))
      $("#"+statusId).closest("td").css("background-color","rgba(237,239,130,1)");

    if(($("#"+statusId).val() == "consultation completed") || ($("#"+statusId).val() == "Consultation completed"))
      $("#"+statusId).closest("td").css("background-color","rgba(251,157,59,1)");

    if(($("#"+statusId).val() == "ipd") || ($("#"+statusId).val() == "IPD"))
      $("#"+statusId).closest("td").css("background-color","rgba(144,226,204,1)");
}

// function hidePatientInformationContainer()
// {
//   $("#patientInformationContainer").hide();
// }

// GET INFORMATION OF SEARCHED PATIENT
function getPatientInformation()
{
  $("#uhid").html('');
  $("#name").html('');
  $("#dob").html('');
  $("#contactNo").html('');
  $("#emailId").html('');

	var searchPatientData = $('#searchPatientBar').val();
	var reqJsonObj = {"intentName" : "search-patient","patient": {"search_string": searchPatientData}}

  $.ajax({
     type : "POST",
  	 url : "http://localhost:8082/hook",
  	 data : reqJsonObj,
  	 success : function(result)
  	 {
  		 if(result[0].msgtype)
		{
  			 alert("Patient Not Found");
		}
  		 else if(result.length>1)
		{
  			for(var i=0;i<result.length;i++)
  	       {
  	    	 var trId = "trId"+i;
  	    	 var uhid = result[i].UHID;
  	      	 $("#multiplePatientData").append("<tr id='"+trId+"' class='trClass'><td onclick = 'displayPatientInformationContainer(\""+uhid+"\")'>"+(i+1)+"</td><td onclick = 'displayPatientInformationContainer(\""+uhid+"\")'>"+result[i].UHID+"</td><td onclick = 'displayPatientInformationContainer(\""+uhid+"\")'>"+result[i].FirstName+" "+result[i].LastName+"</td><td onclick = 'displayPatientInformationContainer(\""+uhid+"\")'>"+result[i].Gender+"</td><td onclick = 'displayPatientInformationContainer(\""+uhid+"\")'>"+result[i].DOB+"</td><td onclick = 'displayPatientInformationContainer(\""+uhid+"\")'>"+result[i].ContactNumber+"</td><td onclick = 'displayPatientInformationContainer(\""+uhid+"\")'>"+result[i].EmailId+"</td></tr>");

  	       }
  			$("#multipleSearchPatients").show();
		}
  		 else
  		{
        if(result[0].DOB.includes("T") || result[0].DOB.includes("t"))
        {
          var date_of_birth = result[0].DOB.substring(0, result[0].DOB.indexOf('T'));
        }
  			 $("#uhid").html("Patient Id : "+result[0].UHID);
  			 localStorage.setItem("UHID",result[0].UHID);
  			 $("#name").html("Name : "+result[0].FirstName+" "+result[0].MiddleName+" "+result[0].LastName);

  			 $("#dob").html("Date Of Birth : "+date_of_birth)

  			 $("#contactNo").html("Contact No. : "+result[0].ContactNumber);

  			 $("#emailId").html("Email Id : "+result[0].EmailId);

		      $("#adhaarNo").html("Adhaar No : "+result[0].Aadhar);

  			 $("#patientInformationContainer").show();
  		}
      }
  });
}

// WHEN MULTIPLE SEARCH RESULT GET INFORMTION OF SPECIFIC SEARCH PATIENT
function displayPatientInformationContainer(uhid)
{
	$("#uhid").html('');
	$("#name").html('');
	$("#dob").html('');
	$("#contactNo").html('');
	$("#emailId").html('');

	var reqJsonObj = {"intentName" : "search-patient","patient": {"search_string": uhid}}
	console.log(JSON.stringify(reqJsonObj));
	  $.ajax({
	     type : "POST",
	  	 url : "http://localhost:8082/hook",
	  	 data : reqJsonObj,
	  	 success : function(result)
	  	 {
         if(result[0].DOB.includes("T") || result[0].DOB.includes("t"))
         {
           var date_of_birth = result[0].DOB.substring(0, result[0].DOB.indexOf('T'));
         }
			  $("#uhid").html("Patient Id : "+result[0].UHID);
			  localStorage.setItem("UHID",result[0].UHID);
		      $("#name").html("Name : "+result[0].FirstName+" "+result[0].MiddleName+" "+result[0].LastName);

		      $("#dob").html("Date Of Birth : "+date_of_birth)

		      $("#contactNo").html("Contact No. : "+result[0].ContactNumber);

		      $("#emailId").html("Email Id : "+result[0].EmailId);

		      $("#adhaarNo").html("Adhaar No : "+result[0].Aadhar);
	 	 }
	 });
	  $("#patientInformationContainer").show();
}
// GET INFORMATION OF BOOKED APPOINTMENT PATIENT
function patientInformationModal(uhid)
{
  var reqJsonObj = {"intentName" : "search-patient","patient": {"search_string": uhid}}
	console.log(JSON.stringify(reqJsonObj));
	  $.ajax({
	     type : "POST",
	  	 url : "http://localhost:8082/hook",
	  	 data : reqJsonObj,
	  	 success : function(result)
	  	 {
         if(result[0].DOB.includes("T") || result[0].DOB.includes("t"))
         {
           var date_of_birth = result[0].DOB.substring(0, result[0].DOB.indexOf('T'));
         }
			  $("#patientUHIDModal").html("UHID : "+result[0].UHID);
		      $("#patientNameModal").html("Name : "+result[0].FirstName+" "+result[0].MiddleName+" "+result[0].LastName);

		      $("#patientDOBModal").html("Date Of Birth : "+date_of_birth);

		      $("#patientContactNoModal").html("Contact No. : "+result[0].ContactNumber);

		      $("#patientEmailIdModal").html("Email Id : "+result[0].EmailId);

		      $("#patientAdhaarNoModal").html("Adhaar No : "+result[0].Aadhar);
	 	 }
	 });
    $("#patientInformationModal").modal("show");
}

// function callCreatePatientPage()
// {
//     window.location.href = "newPatient.html";
// }

// GET APPOINTMENTS BY SPECIFIC DATE
function getAppointmentsByDate()
{
	var dateSelected = $("#searchAppointmentsByDate").val()
	var reqJsonObj = {"intentName" : "retrieve-appointments-by-date","appointments" : {"appointment_date" : dateSelected}}
	console.log(JSON.stringify(reqJsonObj));

	$.ajax({
	     type : "POST",
	  	 url : "http://localhost:8082/hook",
	  	 data : reqJsonObj,
	  	 success : function(result)
	  	 {
        if(result.length==0)
        {
          alert("No appointments for selected date !!");
        }
        else {
          $("#appointmentData").html('');
          for(var i=0;i<result.length;i++)
          {
            var trId = "trId"+i;
            var uhid = result[i].UHID;
            $("#appointmentData").append("<tr id='"+trId+"' class='trClass'><td onclick = 'patientInformationModal(\""+uhid+"\")'>"+(i+1)+"</td><td onclick = 'patientInformationModal(\""+uhid+"\")'>"+result[i].UHID+"</td><td onclick = 'patientInformationModal(\""+uhid+"\")'>"+result[i].FirstName+" "+result[i].LastName+"</td><td onclick = 'patientInformationModal(\""+uhid+"\")'>"+result[i].Gender+"</td><td onclick = 'patientInformationModal(\""+uhid+"\")'>"+result[i].Consultant+"</td><td onclick = 'patientInformationModal(\""+uhid+"\")'>"+result[i].TimeOfAppointment+"</td><td><select  id='appointmentStatus"+i+"' class='appointmentStatus' onchange = 'getStatusVal(this)'><option value='registered'>Registered</option><option value='arrived'>Arrived</option><option value='optometrist'>Optometrist</option><option value='consultant'>Consultant</option><option value='investigation'>Investigation</option><option value='completed'>Consultation completed</option><option value='ipd'>IPD</option></select></td></tr>");

            var statusId = "appointmentStatus"+i;
            if(($("#"+statusId).val() == "registered") || ($("#"+statusId).val() == "Registered"))
              $("#"+statusId).closest("td").css("background-color","rgba(247,20,20,0.84)");

            if(($("#"+statusId).val() == "arrived") || ($("#"+statusId).val() == "Arrived"))
              $("#"+statusId).closest("td").css("background-color","rgba(68,236,65,0.84)");

            if(($("#"+statusId).val() == "optometrist") || ($("#"+statusId).val() == "Optometrist"))
              $("#"+statusId).closest("td").css("background-color","rgba(243,193,13,0.84)");

            if(($("#"+statusId).val() == "consultant") || ($("#"+statusId).val() == "Consultant"))
              $("#"+statusId).closest("td").css("background-color","rgba(236,203,236,1)");

            if(($("#"+statusId).val() == "investigation") || ($("#"+statusId).val() == "Investigation"))
              $("#"+statusId).closest("td").css("background-color","rgba(237,239,130,1)");

            if(($("#"+statusId).val() == "consultation completed") || ($("#"+statusId).val() == "Consultation completed"))
              $("#"+statusId).closest("td").css("background-color","rgba(251,157,59,1)");

            if(($("#"+statusId).val() == "ipd") || ($("#"+statusId).val() == "IPD"))
              $("#"+statusId).closest("td").css("background-color","rgba(144,226,204,1)");
          }
        }
	 	 }
	 });
}
