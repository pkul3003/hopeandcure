create view appointments_view as 
( select UHID, FirstName, LastName, DOB, Gender, DateOfAppointment, TimeOfAppointment, ContactNumber, 
Consultant, PatientProgressStatus from appointments);

create view appointments_view as 
(select a.UHID, a.FirstName, a.LastName, a.DOB, a.Gender, a.DateOfAppointment, a.TimeOfAppointment, a.ContactNumber,
a.Consultant, b.PatientProgressStatus, b.RunningNotes from
appointments a, patient_progress_tracker b 
where a.UHID = b.UHID and 
a.DateOfAppointment = b.DateOfAppointment);
