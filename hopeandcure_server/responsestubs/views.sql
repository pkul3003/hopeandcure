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

CREATE VIEW `patient_address_details_view` AS 
(select `p`.`UHID` AS `UHID`,`p`.`FirstName` AS `FirstName`,`p`.`MiddleName` AS `MiddleName`,
`p`.`LastName` AS `LastName`,`p`.`DOB` AS `DOB`,`p`.`Gender` AS `Gender`,
`p`.`ContactNumber` AS `ContactNumber`,`p`.`EmailId` AS `EmailId`,`p`.`Aadhar` AS `Aadhar`, `a`.`AddressLine1`,' ',`a`.`AddressLine2`,' ',`a`.`Landmark`,' ',`a`.`Area`,' ',`a`.`City`,' ',
`a`.`District`,' ',`a`.`State`,' ',`a`.`PINCode`,' ',`a`.`EmergencyContactNumber`,
concat(`a`.`AddressLine1`,' ',`a`.`AddressLine2`,' ',`a`.`Landmark`,' ',`a`.`Area`,' ',`a`.`City`,' ',
`a`.`District`,' ',`a`.`State`,' ',`a`.`PINCode`,' ',`a`.`EmergencyContactNumber`) AS `concat_address` 
from (`patients` `p` join `patient_address` `a`) where (`p`.`UHID` = `a`.`UHID`));

CREATE VIEW `prescription_diagnosis_view` AS 
(select `m`.`medicine_name` AS `medicine_name`,`m`.`recommended_dosage` AS `recommended_dosage`,
`m`.`medicine_id` AS `medicine_id`,`mpr`.`prescription_type` AS `prescription_type`,
`dmr`.`diagnosis_id` AS `diagnosis_id`,`dmr`.`diagnosis_type` AS `diagnosis_type` 
from ((`medicine_master` `m` join `medical_prescriptions_master` `mpr`) join `diagnosis_master` `dmr`) 
where ((`mpr`.`medicine_id` = `m`.`medicine_id`) and (`mpr`.`diagnosis_id` = `dmr`.`diagnosis_id`)));