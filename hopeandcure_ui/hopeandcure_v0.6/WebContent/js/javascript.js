$(document).ready(function(){
  $("#appointmentSearch").hide();
  $("#searchedPatientDetails").modal("hide");
});

// $(".searchAppointmentBtn").click(function(){
//   $("#appointmentSearch").show();
//   $("#searchedPatientDetails").hide();
// });

$(".searchAppointmentBtn").click(function(){
  $("#searchedPatientDetails").modal("show");
});

$(".searchPatientDetails").click(function(){
  $("#searchedPatientDetails").show();
});

$(".newPatientBtn").click(function(){
  window.open("newPatient.html");
});
