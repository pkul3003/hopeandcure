
insert into patients VALUES ('1234', 'sujay', 'satish', 'kulkarni', '1981-11-06', 'male', '9881065234', 'sujayk@gmail.com', DEFAULT);
insert into patients VALUES (DEFAULT, 'Parag', 'prabhakar', 'kulkarni', '1981-03-02', 'male', '9922962322', 'pkul3003@gmail.com', DEFAULT);
insert into patients VALUES (DEFAULT, 'mangesh', 'kulkarni', '1981-11-06', 'male', '9881065234', 'sujayk@gmail.com', DEFAULT);

  insert into appointments VALUES ('1234', 'sujay', 'satish', 'kulkarni', '1981-11-06', 'male',
    'Dr Prakash Rasal', '2018-03-05', '12:00', '9881065234', 'sujayk@gmail.com', 'none', 'Pune', 'wakad', null, null, null, DEFAULT);

  insert into appointments VALUES ('1234', 'sujay', 'satish', 'kulkarni', '1981-11-06', 'male',
    'Dr Prakash Rasal', '2018-05-11', '12:00', '9881065234', 'sujayk@gmail.com', 'none', 'Pune', 'wakad', null, null, null, DEFAULT);

  insert into appointments VALUES ('1234', 'sujay', 'satish', 'kulkarni', '1981-11-06', 'male',
    'Dr Prakash Rasal', '2018-05-10', '12:00', '9881065234', 'sujayk@gmail.com', 'none', 'Pune', 'wakad', null, null, null, DEFAULT);

  insert into appointments VALUES ('1234', 'sujay', 'satish', 'kulkarni', '1981-11-06', 'male',
    'Dr Prakash Rasal', '2018-05-31', '12:00', '9881065234', 'sujayk@gmail.com', 'none', 'Pune', 'wakad', null, null, null, DEFAULT);

  insert into appointments VALUES ('1234', 'sujay', 'satish', 'kulkarni', '1981-11-06', 'male',
    'Dr Prakash Rasal', '2018-05-13', '12:00', '9881065234', 'sujayk@gmail.com', 'none', 'Pune', 'wakad', null, null, null, DEFAULT);

  INSERT INTO appointments values('Prasad','Dattatray','Joshi','1981-06-06','male',
    'Dr Prakash Rasal','2018-07-31','12:00','9567750288','joship18@gmail.com','null','Pune','Dhayari' , DEFAULT);

    INSERT INTO patient_medical_facts VALUES('1234', 'sujay', 'kulkarni','AB+', 'black', 'gloucoma', 'high blood pressure', 'AIDS');


update patient_progress_tracker set RunningNotes = 'Patient complaints a lot, may be hypochondriac ' , PatientProgressStatus = 'optometry', RecordTouchDate = DEFAULT where UHID = '1277' AND DateOfAppointment = '2018-12-21';

insert into patient_progress_tracker values (1235, 'registered', 'patient needs a wheel chain', '2018-08-26', DEFAULT);
insert into patient_progress_tracker values (1272, 'registered', 'patient complains a lot', '2018-08-29', DEFAULT);


insert into ocular_complaint_types values ('nearsightedness', 'cannot see far-off things', DEFAULT);
insert into ocular_complaint_types values ('farsignthedness', 'cannot see nearby things', DEFAULT);
insert into ocular_complaint_types values ('sore eyes', 'cannot see nearby things', DEFAULT);

insert into surgery_types values ('ocular', 'ophthalmological', 'any type of eye surgery', 'BOTH');

insert into surgery_sub_types values ('ocular', 'glaucoma', 'a condition of increased pressure within the eyeball, causing gradual loss of sight.', DEFAULT);
insert into surgery_sub_types values ('ocular', 'DCR', '', DEFAULT);
insert into surgery_sub_types values ('ocular', 'Pterygium', '', DEFAULT);
insert into surgery_sub_types values ('ocular', 'Squint', '', DEFAULT);
insert into surgery_sub_types values ('ocular', 'Lid surgery', '', DEFAULT);
insert into surgery_sub_types values ('ocular', 'DCR', '', DEFAULT);

insert into mode_of_payment values ('DEBIT CARD', DEFAULT);
insert into mode_of_payment values ('CREDIT CARD', DEFAULT);
insert into mode_of_payment values ('CASH', DEFAULT);
insert into mode_of_payment values ('CHEQUE', DEFAULT);
insert into mode_of_payment values ('UPI', DEFAULT);
insert into mode_of_payment values ('AADHAR PAY', DEFAULT);
insert into mode_of_payment values ('PAYTM', DEFAULT);
insert into mode_of_payment values ('GOOGLE PAY', DEFAULT);
insert into mode_of_payment values ('NET BANKING', DEFAULT);




INSERT INTO complaint_master (complaint_id, complaint_type, complaint_sub_type, complaint_desc, RecordTouchDate) VALUES ('1', 'ocular', 'Redness', 'Eyes Redness', default);

INSERT INTO complaint_master (complaint_id, complaint_type, complaint_sub_type, complaint_desc, RecordTouchDate) VALUES ('2', 'ocular', 'Pain', '', default);

INSERT INTO complaint_master (complaint_id, complaint_type, complaint_sub_type, complaint_desc, RecordTouchDate) VALUES ('3', 'ocular', 'Watering', '', default);

INSERT INTO complaint_master (complaint_id, complaint_type, complaint_sub_type, complaint_desc, RecordTouchDate) VALUES ('4', 'ocular', 'Dryness', '', default);

INSERT INTO complaint_master (complaint_id, complaint_type, complaint_sub_type, complaint_desc, RecordTouchDate) VALUES ('5', 'ocular', 'Diminished Vision', '', default);

INSERT INTO complaint_master (complaint_id, complaint_type, complaint_sub_type, complaint_desc, RecordTouchDate) VALUES ('6', 'ocular', 'Blurring of Vision', '', default);

INSERT INTO complaint_master (complaint_id, complaint_type, complaint_sub_type, complaint_desc, RecordTouchDate) VALUES ('7', 'ocular', 'Broken Spectacle', '', default);

INSERT INTO complaint_master (complaint_id, complaint_type, complaint_sub_type, complaint_desc, RecordTouchDate) VALUES ('8', 'ocular', 'Routine Followup', '', default);



INSERT INTO investigation_master (investigation_id, investigation_type, investigation_sub_type,investigation_desc, RecordTouchDate) VALUES ('1', 'Optical', 'A Scan','',default);

INSERT INTO investigation_master (investigation_id, investigation_type, investigation_sub_type,investigation_desc, RecordTouchDate) VALUES ('2', 'Optical', 'B Scan','',default);

INSERT INTO investigation_master (investigation_id, investigation_type, investigation_sub_type,investigation_desc, RecordTouchDate) VALUES ('3', 'Optical', 'IOL Master','',default);

INSERT INTO investigation_master (investigation_id, investigation_type, investigation_sub_type,investigation_desc, RecordTouchDate) VALUES ('4', 'Optical', 'Gonioscopy','',default);

INSERT INTO investigation_master (investigation_id, investigation_type, investigation_sub_type,investigation_desc, RecordTouchDate) VALUES ('5', 'Optical', 'Corneal topography','',default);

INSERT INTO investigation_master (investigation_id, investigation_type, investigation_sub_type,investigation_desc, RecordTouchDate) VALUES ('6', 'Optical', 'Fundus Photo','',default);

INSERT INTO investigation_master (investigation_id, investigation_type, investigation_sub_type,investigation_desc, RecordTouchDate) VALUES ('8', 'Optical', 'Perimetry','',default);

INSERT INTO investigation_master (investigation_id, investigation_type, investigation_sub_type,investigation_desc, RecordTouchDate) VALUES ('7', 'Optical', 'OCT','',default);


INSERT INTO procedure_master (procedure_id, procedure_type, procedure_sub_type,procedure_desc, RecordTouchDate) VALUES ('1', 'Optical', 'Refraction','',default);

INSERT INTO procedure_master (procedure_id, procedure_type, procedure_sub_type,procedure_desc, RecordTouchDate) VALUES ('2', 'Optical', 'Gonioscopy','',default);

INSERT INTO procedure_master (procedure_id, procedure_type, procedure_sub_type,procedure_desc, RecordTouchDate) VALUES ('3', 'Optical', 'Pachymetry','',default);

INSERT INTO procedure_master (procedure_id, procedure_type, procedure_sub_type,procedure_desc, RecordTouchDate) VALUES ('4', 'Optical', 'Fundus fluroscein angiography','',default);

INSERT INTO procedure_master (procedure_id, procedure_type, procedure_sub_type,procedure_desc, RecordTouchDate) VALUES ('5', 'Optical', 'Suture Removal','',default);

INSERT INTO procedure_master (procedure_id, procedure_type, procedure_sub_type,procedure_desc, RecordTouchDate) VALUES ('7', 'Optical', 'Cleaning and dressing','',default);
INSERT INTO procedure_master (procedure_id, procedure_type, procedure_sub_type,procedure_desc, RecordTouchDate) VALUES ('6', 'Optical', 'Dilated Examination','',default);


INSERT INTO special_precaution_master (precaution_id, precaution_type, precaution_desc, RecordTouchDate) VALUES ('1', 'Strict Bed Rest', '',default);;
INSERT INTO special_precaution_master (precaution_id, precaution_type, precaution_desc, RecordTouchDate) VALUES ('2', 'Dark Glasses', '',default);
INSERT INTO special_precaution_master (precaution_id, precaution_type, precaution_desc, RecordTouchDate) VALUES ('3', 'Pop Up Position', '',default);


INSERT INTO advice_master (advice_id, advice_type, advice_sub_type, advice_desc, RecordTouchDate) VALUES ('1', 'ophthalmic', 'Cataract Surgery','', default);
INSERT INTO advice_master (advice_id, advice_type, advice_sub_type, advice_desc, RecordTouchDate) VALUES ('2', 'ophthalmic', 'Glaucoma ','', default);
INSERT INTO advice_master (advice_id, advice_type, advice_sub_type, advice_desc, RecordTouchDate) VALUES ('3', 'ophthalmic', 'DCR ','', default);
INSERT INTO advice_master (advice_id, advice_type, advice_sub_type, advice_desc, RecordTouchDate) VALUES ('4', 'ophthalmic', 'Petrygium Surgery','', default);


INSERT INTO instructions_master (instruction_id, instruction_type,instruction_sub_type, instruction_desc, RecordTouchDate) VALUES ('1', 'ocular','Regular followup', '',default);

INSERT INTO instructions_master (instruction_id, instruction_type,instruction_sub_type, instruction_desc, RecordTouchDate) VALUES ('3', 'ocular','Regular Medication', '',default);

INSERT INTO instructions_master (instruction_id, instruction_type,instruction_sub_type, instruction_desc, RecordTouchDate) VALUES ('4', 'ocular','Please carry all documents during visit', '',default);


INSERT INTO diagnosis_master (diagnosis_id, diagnosis_type, diagnosis_desc, RecordTouchDate) VALUES ('1', 'Advance Catract Surgery','', default);

INSERT INTO diagnosis_master (diagnosis_id, diagnosis_type, diagnosis_desc, RecordTouchDate) VALUES ('2', 'Conjective eyes','', default);

INSERT INTO diagnosis_master (diagnosis_id, diagnosis_type, diagnosis_desc, RecordTouchDate) VALUES ('3', 'Glucoma','', default);



INSERT INTO minor_opd_procedures_master (min_procedure_id, min_procedure_type, min_procedure_desc, RecordTouchDate) VALUES ('1', 'Petrygium suture removal done','', default);

INSERT INTO minor_opd_procedures_master (min_procedure_id, min_procedure_type, min_procedure_desc, RecordTouchDate) VALUES ('2', 'DCR suture removal done','', default);

INSERT INTO minor_opd_procedures_master (min_procedure_id, min_procedure_type, min_procedure_desc, RecordTouchDate) VALUES ('3', 'Conjunctival cyst ruptured','', default);

INSERT INTO minor_opd_procedures_master (min_procedure_id, min_procedure_type, min_procedure_desc, RecordTouchDate) VALUES ('4','Thorough eye wash done','', default);


INSERT INTO medicine_master (medicine_name, medicine_type, manufacturer, medicine_mr, medicine_mr_contact, medicine_remarks, recommended_dosage, RecordTouchDate) VALUES ('Drushti Drop', 'Drop','Cipla','Prasad','','','M,A,E',default);

INSERT INTO medicine_master (medicine_name, medicine_type, manufacturer, medicine_mr, medicine_mr_contact, medicine_remarks, recommended_dosage, RecordTouchDate) VALUES ('eyecare Drop', 'Drop','Cipla','Prasad','','','M,E',default);

INSERT INTO medicine_master (medicine_name, medicine_type, manufacturer, medicine_mr, medicine_mr_contact, medicine_remarks, recommended_dosage, RecordTouchDate) VALUES ('Omaze', 'Tablet','Cipla','Prasad','','','',default);

INSERT INTO medicine_master (medicine_name, medicine_type, manufacturer, medicine_mr, medicine_mr_contact, medicine_remarks, recommended_dosage, RecordTouchDate) VALUES ('Zantec', 'Capsule','Cipla','Prasad','','','E',default);


INSERT INTO medical_prescription_master (prescription_type, medicine_id, diagnosis_id, RecordTouchDate)
 VALUES ('Catract Prescription', '1','1',default);

INSERT INTO medical_prescription_master (prescription_type, medicine_id, diagnosis_id, RecordTouchDate)
 VALUES ('Catract Prescription', '2','1',default);

INSERT INTO medical_prescription_master (prescription_type, medicine_id, diagnosis_id, RecordTouchDate)
 VALUES ('Conjective eye', '3','2',default);

INSERT INTO medical_prescription_master (prescription_type, medicine_id, diagnosis_id, RecordTouchDate)
 VALUES ('Conjective eye', '4','2',default);
