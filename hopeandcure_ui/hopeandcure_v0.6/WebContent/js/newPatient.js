// GO TO PREVIOUS PAGE
function goBack()
{
    window.history.back();
}
// ON SAVE CLICK ONLY CREATE PATIENT
function createPatient()
{
  var first_name = $('#firstName').val();
  var middle_name = $('#middleName').val();
  var last_name = $('#lastName').val();
  var dob = $('#dob').val();
  var gender = $("input[name='gender']:checked").val();
  var contact_number = $('#contactNo').val();
  var email_id = $('#emailId').val();
  var adhaarNo = $('#adhaarNo').val();

  var reqJsonObj = {"intentName" : "create-patient","patient": {"first_name": first_name,"middle_name": middle_name,"last_name": last_name,"DOB": dob,"gender": gender,"contact_number": contact_number,"email_id": email_id,"aadhar":adhaarNo}}

  $.ajax({
	 type : "POST",
  	 url : "https://localhost:7443/hook",
  	 data : reqJsonObj,
  	 success : function(result)
  	 {
   		 localStorage.setItem("UHID",result.UHID);
   		 saveAddress();
   		 window.location.href = "searchPatient.html";
  	 }
  });

}
// SAVE PATIENT ADDRESS AND EMERGENCY CONTACT
function saveAddress()
{
	var UHID = localStorage.getItem("UHID");
	var addressLine1 = $('#addressLine1').val();
	var addressLine2 = $('#addressLine2').val();
	var landmark = $('#landmark').val();
	var area = $('#area').val();
	var district = $('#district').val();
	var pinCode = $('#pinCode').val();
	var city = $('#city').val();
	var state = $('#state').val();
	var emergencyContactNo = $('#emergencyContactNo').val();

	var reqJsonObj = {
			"intentName" : "add-patient-address",
			"patientAddress" : {
				"UHID" : UHID,
				"address_line1" : addressLine1,
				"address_line2" : addressLine2,
				"landmark" : landmark,
				"area" : area,
				"city" : city,
				"district" : district,
				"state" : state,
				"pincode" : pinCode,
				"emergency_conact_number" : emergencyContactNo
			}
		}
	  $.ajax({
		 type : "POST",
	  	 url : "https://localhost:7443/hook",
	  	 data : reqJsonObj,
	  	 success : function(result)
	  	 {
	   		 console.log("address add :: "+JSON.stringify(result));
	  	 }
	  });
}

// BOOK APPOINTMENT CLICK
function bookAppointment()
{
	var first_name = $('#firstName').val();
	  var middle_name = $('#middleName').val();
	  var last_name = $('#lastName').val();
	  var dob = $('#dob').val();
	  var gender = $("input[name='gender']:checked").val();
	  // gender = "male";
	  var contact_number = $('#contactNo').val();
	  var email_id = $('#emailId').val();
	  var adhaarNo = $('#adhaarNo').val();

	  var reqJsonObj = {"intentName" : "create-patient","patient": {"first_name": first_name,"middle_name": middle_name,"last_name": last_name,"DOB": dob,"gender": gender,"contact_number": contact_number,"email_id": email_id,"adhaar":adhaarNo}}

	  $.ajax({
		 type : "POST",
	  	 url : "https://localhost:7443/hook",
	  	 data : reqJsonObj,
	  	 success : function(result)
	  	 {
	   		 localStorage.setItem("UHID",result.UHID);
	   		 saveAddress();
	   		window.location.href = "bookAppointment.html";
	  	 }
	  });
}
