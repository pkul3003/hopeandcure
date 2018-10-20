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

drop table if exists `patient_previous_ocular_illness`;
CREATE TABLE patient_previous_ocular_illness (
  UHID int NOT NULL,
  KnownOcularCondition varchar(300),
  DurationOfCondition varchar(100),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UHID) references patients(UHID)
);

drop table if exists `patient_previous_ocular_treatment`;
CREATE TABLE patient_previous_ocular_illness (
  UHID int NOT NULL,
  OcularTreatment varchar(300),
  OcularTreatmentMonthYear varchar(100),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UHID) references patients(UHID)
);

drop table if exists `ocular_complaint_types`;
CREATE TABLE ocular_complaint_types (
  ComplaintType varchar(100) NOT NULL,
  ComplaintDescription varchar(300),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ComplaintType)
);

drop table if exists `systemic_complaint_types`;
CREATE TABLE systemic_complaint_types (
  ComplaintType varchar(100) NOT NULL,
  ComplaintDescription varchar(300),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (ComplaintType)
);

drop table if exists `patient_ocular_complaints`; 
create table patient_ocular_complaints(
  UHID int NOT NULL,
  ComplaintType varchar(100) NOT NULL,
  ComplaintDuration varchar(100),
  ComplaintDescription varchar(300),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UHID) references patients(UHID),
  FOREIGN KEY (ComplaintType) references ocular_complaint_types(ComplaintType)
);

drop table if exists `patient_systemic_history`;
CREATE TABLE patient_systemic_history (
  UHID int NOT NULL,
  ComplaintType varchar(100) NOT NULL,
  ComplaintDuration varchar(100),
  ComplaintDescription varchar(300),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UHID) references patients(UHID),
  FOREIGN KEY (ComplaintType) references systemic_complaint_types(ComplaintType)
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

drop table if exists `optometary_results`;

CREATE TABLE optometary_results (
  UHID int(11) NOT NULL,
  auto_refractometer_reading_right varchar(100) DEFAULT NULL,
  auto_refractometer_reading_left varchar(100) DEFAULT NULL,
  keratometry_reading_right varchar(100) DEFAULT NULL,
  keratometry_reading_left varchar(100) DEFAULT NULL,
  unaided_vision_right varchar(100) DEFAULT NULL,
  unaided_vision_left varchar(100) DEFAULT NULL,
  vision_with_pinhole varchar(100) DEFAULT NULL,
  retinoscopy varchar(100) DEFAULT NULL,
  acceptance varchar(100) DEFAULT NULL,
  intra_ocular_pressure enum('SCHIOTZ','NCT','APPLANATION','DIGITALLY') DEFAULT NULL,
  iop_record_timestamp date DEFAULT NULL,
  dilatation varchar(100) DEFAULT NULL,
  dilatation_time time DEFAULT NULL,
  optical_investigation varchar(300) DEFAULT NULL,
  procedures_done varchar(300) DEFAULT NULL,
  blood_pressure varchar(100) DEFAULT NULL,
  special_precautions varchar(200) DEFAULT NULL,
  refer_to_consultant varchar(100) DEFAULT NULL,
  SAC enum('PATENT','CDMR','CBCR') DEFAULT NULL,
  xylocaine_test enum('POSITIVE','NEGATIVE') DEFAULT NULL,
  RecordTouchDate timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY UHID (UHID),
  CONSTRAINT optometary_results_ibfk_1 FOREIGN KEY (UHID) REFERENCES patients (UHID)
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

CREATE TABLE patient_systemic_surgical_history_simple
(
  UHID int NOT NULL,
  surgery_description varchar(300),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UHID) references patients(UHID)
);

CREATE TABLE patient_ocular_surgical_history_simple
(
  UHID int NOT NULL,
  surgery_description varchar(300),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UHID) references patients(UHID)
);

-- to be imported from central medicine database
drop table if exists `medicine_master`;
CREATE TABLE medicine_master (
  MedicineID
  MedicineName
  ManufacturerName
  MedicineRemarks
);


drop table if exists `medical_prescription_templates` ;
CREATE TABLE medical_prescription_templates (
  TemplateID int NOT NULL,
  TemplateName varchar(300) NOT NULL,
  Description varchar(300) NOT NULL,
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
);

drop table if exists `template_medicines`;
CREATE TABLE template_medicines (
  TemplateID int NOT NULL,
  MedicineID varchar(100) NOT NULL,
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY(TemplateID, MedicineID) references medical_prescription_templates(TemplateID), medicine_master(MedicineID)
);


drop table if exists `staff_login`;
CREATE TABLE staff_login (
  staffid bigint NOT NULL AUTO_INCREMENT,
  username varchar(255) NOT NULL UNIQUE,
  password varchar(32) NOT NULL,
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (staffid)
);

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
  Admin ENUM('yes', 'no'),
  Receptionist ENUM('yes', 'no'),
  Consultant ENUM('yes', 'no'),
  Optometerist ENUM('yes', 'no'),
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (staffid) REFERENCES staff_login(staffid)
);

INSERT INTO staff_roles VALUES ('pkul3003', 'yes', 'yes', 'no', 'no', DEFAULT);
INSERT INTO staff_roles VALUES ('pkul3003', 'yes', 'yes', 'no', 'no', DEFAULT);



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


CREATE TABLE patient_billing_record (
  UHID int NOT NULL,
  OPDConsultationFee DECIMAL(7,2) NOT NULL DEFAULT 0.00,
  IPDFee DECIMAL(8,2) NOT NULL DEFAULT 0.00,
  InvestigationsFee DECIMAL(7,2) NOT NULL DEFAULT 0.00,
  LabFee DECIMAL(8,2) NOT NULL DEFAULT 0.00,
  ProcedureCharges DECIMAL(8,2) NOT NULL DEFAULT 0.00,
  GST DECIMAL(6,2) NOT NULL DEFAULT 0.00,
  DiscountPercent INTEGER NOT NULL DEFAULT 0,
  TotalBillAmount DECIMAL(9,2) NOT NULL DEFAULT 0.00,
  ModeOfPayment varchar(100) NOT NULL,
  DateOfBill TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  RecordTouchDate TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (UHID) references patients(UHID),
  FOREIGN KEY (ModeOfPayment) references mode_of_payment(ModeOfPayment)
);

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
