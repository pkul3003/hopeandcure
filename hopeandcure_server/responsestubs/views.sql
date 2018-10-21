create view appointments_view as 
( select UHID, FirstName, LastName, DOB, Gender, DateOfAppointment, TimeOfAppointment, ContactNumber, 
Consultant, PatientProgressStatus from appointments);

create view appointments_view as 
(select a.UHID, a.FirstName, a.LastName, a.DOB, a.Gender, a.DateOfAppointment, a.TimeOfAppointment, a.ContactNumber,
a.Consultant, b.PatientProgressStatus, b.RunningNotes from
appointments a, patient_progress_tracker b 
where a.UHID = b.UHID and 
a.DateOfAppointment = b.DateOfAppointment);

create view prescription_diagnosis_view as (
select m.medicine_name, m.recommended_dosage, m.medicine_id, mpr.prescription_type, 
dmr.diagnosis_id, dmr.diagnosis_type from medicine_master m, medical_prescription_master mpr, 
diagnosis_master dmr where mpr.medicine_id=m.medicine_id AND mpr.diagnosis_id=dmr.diagnosis_id
);