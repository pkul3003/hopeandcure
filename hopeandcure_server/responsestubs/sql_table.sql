CREATE USER 'hms_admin'@'localhost' identified by 'Hope&Cure@123';
grant all privileges on 'hmsdb'.* to 'hms_admin'@'localhost';

drop table if exists `patients`;

CREATE TABLE patients (
    UHID int NOT NULL AUTO_INCREMENT,
    FirstName varchar(255) NOT NULL,
    MiddleName varchar(255),
    LastName varchar(255) NOT NULL,
    DOB Date NOT NULL,
    Gender varchar(255) NOT NULL,
    ContactNumber BIGINT NOT NULL,
    EmailId varchar(255),
    Aadhar varchar(20),
    RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (UHID)
);

ALTER TABLE patients ADD Aadhar varchar(20);

--alter table patients drop index UC_Patient;

ALTER TABLE patients
ADD CONSTRAINT UC_Patient UNIQUE (FirstName, LastName, DOB, ContactNumber, Aadhar);

drop table if exists `patient_address`;

CREATE TABLE patient_address (
    UHID int NOT NULL UNIQUE,
    AddressLine1 varchar(255) NOT NULL,
    AddressLine2 varchar(255),
    Landmark varchar(255),
    Area varchar(255),
    City varchar(255),
    District varchar(255),
    State varchar(255),
    PINCode BIGINT,
    EmergencyContactNumber BIGINT,
    RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (UHID) references patients(UHID)
);

drop table if exists `appointments`;

CREATE TABLE appointments (
    UHID int NOT NULL,
    FirstName varchar(255) NOT NULL,
    MiddleName varchar(255),
    LastName varchar(255) NOT NULL,
    DOB Date NOT NULL,
    Gender varchar(255) NOT NULL,
    Consultant varchar(255) NOT NULL,
    DateOfAppointment Date NOT NULL,
    TimeOfAppointment Time NOT NULL,
    ContactNumber BIGINT NOT NULL,
    EmailId varchar(255),
    ReferredBy varchar(255),
    ComingFromCity varchar(255),
    ComingFromArea varchar(255),
    PatientRelativeName varchar(255),
    RelationWithPatient varchar(255),
    RelativeContactNumber BIGINT,
    RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (UHID, DateOfAppointment),
    FOREIGN KEY (UHID) references patients(UHID)
);

drop table if exists patient_progress_tracker;
CREATE TABLE patient_progress_tracker (
  UHID int NOT NULL,
  PatientProgressStatus varchar(100),
  RunningNotes varchar(500),
  DateOfAppointment Date NOT NULL,
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UHID, DateOfAppointment) references appointments(UHID, DateOfAppointment)
);


drop table if exists `patient_medical_facts`;
CREATE TABLE patient_medical_facts (
  UHID int NOT NULL,
  BloodGroup varchar(255) NOT NULL,
  BloodPressureSystolic varchar(255),
  BloodPressureDiastolic varchar(255),
  isDiabetic ENUM('YES', 'NO'),
  isHighBPPatient ENUM('YES', 'NO'),
  isHeartPatient ENUM('YES', 'NO'),
  PatientWeight DECIMAL (4,2),
  SugarLevelFasting int,
  SugarLeaveRandom int,
  SugarLevelPostLunch int,
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UHID) references patients(UHID)
);

drop table if exists `systemic_complaint_types`;
CREATE TABLE systemic_complaint_types (
  ComplaintType varchar(100) NOT NULL,
  ComplaintDescription varchar(300),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ComplaintType)
);

drop table if exists `patient_ocular_facts`;
CREATE TABLE patient_ocular_facts (
  UHID int NOT NULL,
  UsingSpectacles ENUM('YES', 'NO'),
  UsingContacts ENUM('YES', 'NO'),
  RightGlassPrescription varchar(100),
  LeftGlassPrescription varchar(100),
  EyeColor varchar(100),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UHID) references patients(UHID)
);

drop table if exists `patient_drug_allergies`;
CREATE TABLE patient_drug_allergies (
  UHID int NOT NULL,
  DrugName varchar(100),
  AllergicReaction varchar(100),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UHID) references patients(UHID)
);

drop table if exists `optometry_results`;

CREATE TABLE `optometry_results` (
  `UHID` int(11) NOT NULL,
  `auto_refractometer_reading_right` varchar(100) DEFAULT NULL,
  `auto_refractometer_reading_left` varchar(100) DEFAULT NULL,
  `keratometry_reading_right` varchar(100) DEFAULT NULL,
  `keratometry_reading_left` varchar(100) DEFAULT NULL,
  `unaided_vision_right` varchar(100) DEFAULT NULL,
  `unaided_vision_left` varchar(100) DEFAULT NULL,
  `vision_with_pinhole` varchar(100) DEFAULT NULL,
  `retinoscopy` varchar(100) DEFAULT NULL,
  `acceptance` varchar(100) DEFAULT NULL,
  `intra_ocular_pressure` enum('SCHIOTZ','NCT','APPLANATION','DIGITALLY') DEFAULT NULL,
  `iop_record_timestamp` date DEFAULT NULL,
  `dilatation` varchar(100) DEFAULT NULL,
  `dilatation_time` time DEFAULT NULL,
  `optical_investigation` varchar(300) DEFAULT NULL,
  `procedures_done` varchar(300) DEFAULT NULL,
  `blood_pressure` varchar(100) DEFAULT NULL,
  `special_precautions` varchar(200) DEFAULT NULL,
  `refer_to_consultant` varchar(100) DEFAULT NULL,
  `SAC` enum('PATENT','CDMR','CBCR') DEFAULT NULL,
  `xylocaine_test` enum('POSITIVE','NEGATIVE') DEFAULT NULL,
  `current_complaints` varchar(300) DEFAULT NULL,
  `duration_current_complaints` varchar(300) DEFAULT NULL,
  `past_ocular_illness` varchar(300) DEFAULT NULL,
  `treatment_past_ocular_illness` varchar(300) DEFAULT NULL,
  `past_systemic_illness` varchar(300) DEFAULT NULL,
  `treatment_past_systemic_illness` varchar(300) DEFAULT NULL,
  `surgical_history_ocular` varchar(300) DEFAULT NULL,
  `surgical_history_other` varchar(300) DEFAULT NULL,
  `drug_allergies` varchar(300) DEFAULT NULL,
  `current_glass_prescription_right` varchar(50) DEFAULT NULL,
  `current_glass_prescription_left` varchar(50) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  CONSTRAINT `optometry_results_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
);


CREATE TABLE surgery_types
(
  surgery_type varchar(100) NOT NULL,
  surgery_alias varchar(100),
  surgery_description varchar(500),
  applicable_gender ENUM('MALE', 'FEMALE', 'BOTH'),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (surgery_type)
);

CREATE TABLE surgery_sub_types
(
  surgery_type varchar(100) NOT NULL,
  surgery_sub_type varchar(100) NOT NULL,
  surgery_subtype_description varchar(500),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (surgery_type) REFERENCES surgery_types(surgery_type)
);

drop table if exists patient_surgical_history;
CREATE TABLE patient_surgical_history
(
  UHID int NOT NULL,
  surgery_type varchar(300) NOT NULL,
  surgery_sub_type varchar(100) NOT NULL,
  surgery_description varchar(300),
  surgery_month_year varchar(100),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UHID) references patients(UHID),
  FOREIGN KEY (surgery_type) references surgery_types(surgery_type)
);

-- to be imported from central medicine database

drop table if exists `staff_login`;
CREATE TABLE staff_login (
  staffid bigint NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL UNIQUE,
  password varchar(32) NOT NULL,
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (staffid)
);

alter table staff_login add staff_role varchar(50);

ALTER TABLE staff_login AUTO_INCREMENT=1000;

INSERT INTO staff_login VALUES(DEFAULT, 'prakash.rasal', MD5('abcd1234'), DEFAULT);
INSERT INTO staff_login VALUES(DEFAULT, 'wasant.ambekar', MD5('abcd1234'), DEFAULT);

drop table if exists `staff_details`;
CREATE TABLE staff_details (
  staffid bigint NOT NULL,
  FirstName varchar(255) NOT NULL,
  MiddleName varchar(255),
  LastName varchar(255) NOT NULL,
  DOB Date NOT NULL,
  Gender varchar(255) NOT NULL,
  ContactNumber BIGINT NOT NULL,
  EmailId varchar(255),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (staffid) REFERENCES staff_login(staffid)
);

INSERT INTO staff_details values(1001, 'Parag', null, 'kulkarni', '1981-03-02', 'male', '9922962322',
  'pkul3003@gmail.com', DEFAULT);

INSERT INTO staff_details VALUES (1002, 'Prasad','Dattatray','Jpshi','1981-06-06','male', '9657564333',
  'joship@gmail.com',DEFAULT);


drop table if exists `staff_roles`;
CREATE TABLE staff_roles (
  staffid bigint NOT NULL,
  role_name enum('ADMIN', 'RECEPTIONIST', 'OPTOMETRIST', 'CONSULTANT') NOT NULL,
  screen_name varchar(100),
  privileges enum('READ', 'READ-WRITE') NOT NULL,
  html_path varchar(400),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (staffid) REFERENCES staff_login(staffid)
);

INSERT INTO staff_roles VALUES ('pkul3003', 'ADMIN', 'MASTER-DATA', 'READ-WRITE', 'http://localhost:4200/master-data', DEFAULT);


create table healthcare_services_master (
  service_id INT AUTO_INCREMENT,
  service_type varchar(100) not null,
  service_sub_type varchar(200),
  service_charge DECIMAL(6,2),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (service_id)
);

insert into healthcare_services_master values(DEFAULT, 'OPD', 'Consultation', 200.00, DEFAULT);

CREATE TABLE patient_billing_record (
  UHID int NOT NULL,
  service_type varchar(100) not null,
  service_sub_type varchar(200),
  GST DECIMAL(6,2) NOT NULL DEFAULT 0.00,
  discount_percent INTEGER NOT NULL DEFAULT 0,
  total_bill_amount DECIMAL(9,2) NOT NULL DEFAULT 0.00,
  mode_of_payment varchar(100) NOT NULL,
  date_of_bill TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  consultant_name varchar(100) NOT NULL,
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UHID) references patients(UHID),
  FOREIGN KEY (mode_of_payment) references modes_of_payment(mode_of_payment)
);


drop table if exists `staff_address`;

CREATE TABLE staff_address (
  staffid bigint NOT NULL,
  FirstName varchar(255) NOT NULL,
  LastName varchar(255) NOT NULL,
  AddressLine1 varchar(255) NOT NULL,
  AddressLine2 varchar(255),
  Landmark varchar(255),
  City varchar(255),
  State varchar(255),
  PINCode BIGINT,
  EmergencyContactNumber BIGINT,
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (staffid) REFERENCES staff_login(staffid)
);

drop table if exists `consultants`;

CREATE TABLE consultants (
  staffid bigint NOT NULL,
  FirstName varchar(255) NOT NULL,
  LastName varchar(255) NOT NULL,
  PrimarySpeciality varchar(300) NOT NULL,
  SecondarySpeciality varchar(300),
  HighestQualification varchar(300) NOT NULL,
  Physician ENUM('yes', 'no') NOT NULL,
  Surgeon ENUM('yes', 'no') NOT NULL,
  EmergencyContactNumber BIGINT,
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (staffid) REFERENCES staff_login(staffid)
);

INSERT INTO consultants VALUES(1000, 'Prakash' , 'Rasal', 'Opthalmologist', '', 'MD', 'yes' , 'yes', 9922962322, DEFAULT);
INSERT INTO consultants VALUES(1001, 'Wasant' , 'ambekar', 'Opthalmologist', '', 'MD', 'yes' , 'yes', 9922962322, DEFAULT);




CREATE TABLE modes_of_payment (
  ModeOfPayment varchar(100) NOT NULL,
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ModeOfPayment)
);

insert into mode_of_payment values ('DEBIT CARD', DEFAULT);
insert into mode_of_payment values ('CREDIT CARD', DEFAULT);
insert into mode_of_payment values ('CASH', DEFAULT);
insert into mode_of_payment values ('CHEQUE', DEFAULT);
insert into mode_of_payment values ('UPI', DEFAULT);
insert into mode_of_payment values ('AADHAR PAY', DEFAULT);
insert into mode_of_payment values ('PAYTM', DEFAULT);
insert into mode_of_payment values ('GOOGLE PAY', DEFAULT);
insert into mode_of_payment values ('NET BANKING', DEFAULT);



-- master tables

CREATE TABLE IF NOT EXISTS complaint_master(
    complaint_id INT AUTO_INCREMENT,
    complaint_type VARCHAR(50) NOT NULL,
	  complaint_sub_type VARCHAR(100) NOT NULL,
    complaint_desc VARCHAR(255) NOT NULL,
    RecordTouchDate Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,    
    PRIMARY KEY (complaint_id,complaint_type )
);  


CREATE TABLE IF NOT EXISTS investigation_master(
    investigation_id INT AUTO_INCREMENT,
    investigation_type VARCHAR(50) NOT NULL,
	investigation_sub_type VARCHAR(100) NOT NULL,
    investigation_desc VARCHAR(255) NOT NULL,
RecordTouchDate Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,    
    PRIMARY KEY (investigation_id,investigation_type )
);  

CREATE TABLE IF NOT EXISTS procedure_master(
    procedure_id INT AUTO_INCREMENT,
    procedure_type VARCHAR(50) NOT NULL,
	procedure_sub_type VARCHAR(100) NOT NULL,
    procedure_desc VARCHAR(255) NOT NULL,
RecordTouchDate Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,    
    PRIMARY KEY (procedure_id,procedure_type )
);  


CREATE TABLE IF NOT EXISTS diagnosis_master(
    diagnosis_id INT AUTO_INCREMENT,
    diagnosis_type VARCHAR(50) NOT NULL,
    diagnosis_desc VARCHAR(255) NOT NULL, 
    RecordTouchDate Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,   
    PRIMARY KEY (diagnosis_id)
); 
alter table diagnosis_master add constraint uc_diagnosis_type unique (diagnosis_type);


CREATE TABLE IF NOT EXISTS special_precaution_master(
    precaution_id INT AUTO_INCREMENT,
    precaution_type VARCHAR(50) NOT NULL,
    precaution_desc VARCHAR(255) NOT NULL, 
    RecordTouchDate Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,   
    PRIMARY KEY (precaution_id )
);  
alter table special_precaution_master add constraint uc_precaution_type unique (precaution_type);

CREATE TABLE IF NOT EXISTS advice_master(
    advice_id INT AUTO_INCREMENT,
    advice_type VARCHAR(50) NOT NULL,
	  advice_sub_type varchar(300) not null,
    advice_desc VARCHAR(255) NOT NULL, 
    RecordTouchDate Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,   
    PRIMARY KEY (advice_id)
); 

CREATE TABLE IF NOT EXISTS minor_opd_procedures_master(
    min_procedure_id INT AUTO_INCREMENT,
    min_procedure_type VARCHAR(50) NOT NULL,
    min_procedure_desc VARCHAR(255) NOT NULL,   
	RecordTouchDate Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    PRIMARY KEY (min_procedure_id)
);
alter table minor_opd_procedures_master add constraint uc_min_procedure_type unique (min_procedure_type);

CREATE TABLE `medicine_master` (
  `medicine_id` int(11) NOT NULL AUTO_INCREMENT,
  `medicine_name` varchar(100) NOT NULL,
  `medicine_type` varchar(255) NOT NULL,
  `manufacturer` varchar(255) DEFAULT NULL,
  `medicine_mr` varchar(255) DEFAULT NULL,
  `medicine_mr_contact` varchar(255) DEFAULT NULL,
  `medicine_remarks` varchar(255) DEFAULT NULL,
  `recommended_dosage` varchar(300) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`medicine_id`)
);

CREATE TABLE IF NOT EXISTS medical_prescription_master(
    prescription_type VARCHAR(255) NOT NULL,
    medicine_id INT NOT NULL,
    diagnosis_id INT NOT NULL,
    RecordTouchDate Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY fk_medicine(medicine_id) REFERENCES medicine_master(medicine_id),
    FOREIGN KEY fk_diagnosis(diagnosis_id) REFERENCES diagnosis_master(diagnosis_id)
); 

create table patient_prescription_record (
  UHID INT not null,
  medicine_name varchar(200) not null,
  recommended_dosage varchar(100) not null,
  additional_instructions varchar(200) not null,
  date_of_prescription date not null,
  consultant_name varchar(100),
  RecordTouchDate Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(UHID) references patients(UHID)
);

CREATE TABLE IF NOT EXISTS instructions_master(
    instruction_id INT AUTO_INCREMENT,
    instruction_type VARCHAR(50) NOT NULL,
    instruction_desc VARCHAR(255) NOT NULL, 
    RecordTouchDate Timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,   
    PRIMARY KEY (instruction_id)
);  
