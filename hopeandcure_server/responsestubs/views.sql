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


CREATE VIEW patient_address_details_view AS 
(select p.UHID, p.FirstName as first_name, p.MiddleName as middle_name, p.LastName as last_name, p.DOB, 
p.Gender as gender, p.ContactNumber as contact_number, p.EmailId as email_name, 
p.Aadhar as aadhar, a.AddressLine1 as address_line1, a.AddressLine2 as address_line2, a.Landmark as landmark, 
a.Area as area, a.City as city, a.District as district, a.State as state, a.PINCode as pin_code, 
a.EmergencyContactNumber as emergency_contact_number, concat(a.AddressLine1, ' ', a.AddressLine2, ' ', 
a.Landmark, ' ', a.Area, ' ', a.City, ' ', a.District, ' ', a.State, ' ', a.PINCode, ' ', 
a.EmergencyContactNumber) AS concat_address, ap.DateOfAppointment as date_of_appointment from 
(patients p join patient_address a join appointments_view ap) 
where (p.UHID = a.UHID and p.UHID = ap.UHID));

CREATE VIEW patient_address_details_view AS 
(select p.UHID, p.FirstName, p.MiddleName, p.LastName, p.DOB, 
p.Gender, p.ContactNumber, p.EmailId, p.Aadhar, a.AddressLine1, a.AddressLine2, a.Landmark, 
a.Area, a.City, a.District, a.State, a.PINCode, a.EmergencyContactNumber, 
concat(a.AddressLine1, ' ', a.AddressLine2, ' ', 
a.Landmark, ' ', a.Area, ' ', a.City, ' ', a.District, ' ', a.State, ' ', a.PINCode, ' ', 
a.EmergencyContactNumber) AS concat_address, ap.DateOfAppointment from 
patients p inner join patient_address a on (p.UHID = a.UHID)
left outer join appointments_view ap on (p.UHID = ap.UHID));

CREATE VIEW prescription_diagnosis_view AS 
(select m.medicine_name AS medicine_name,m.recommended_dosage AS recommended_dosage,
m.medicine_id AS medicine_id,mpr.prescription_type AS prescription_type,
dmr.diagnosis_id AS diagnosis_id,dmr.diagnosis_type AS diagnosis_type 
from ((medicine_master m join medical_prescriptions_master mpr) join diagnosis_master dmr) 
where ((mpr.medicine_id = m.medicine_id) and (mpr.diagnosis_id = dmr.diagnosis_id)));

select p.UHID, p.FirstName, p.MiddleName, p.LastName, a.AddressLine1, ap.DateOfAppointment from Patients p
INNER JOIN patient_address a on (p.UHID = a.UHID)
LEFT OUTER JOIN appointments_view ap on p.UHID = ap.UHID;