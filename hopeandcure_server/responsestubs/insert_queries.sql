
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


update patient_progress_tracker set RunningNotes = 'Patient complaints a lot, may be hypochondriac ' , PatientProgressStatus = 'optometary', RecordTouchDate = DEFAULT where UHID = '1277' AND DateOfAppointment = '2018-12-21';

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