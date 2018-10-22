-- MySQL dump 10.13  Distrib 5.7.16, for Win64 (x86_64)
--
-- Host: localhost    Database: hmsdb
-- ------------------------------------------------------
-- Server version	5.7.16-log

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `advice_master`
--

DROP TABLE IF EXISTS `advice_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `advice_master` (
  `advice_id` int(11) NOT NULL AUTO_INCREMENT,
  `advice_type` varchar(50) NOT NULL,
  `advice_sub_type` varchar(300) NOT NULL,
  `advice_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`advice_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advice_master`
--

LOCK TABLES `advice_master` WRITE;
/*!40000 ALTER TABLE `advice_master` DISABLE KEYS */;
INSERT INTO `advice_master` VALUES (1,'ophthalmic','Cataract Surgery','','2018-10-20 18:30:00'),(2,'ophthalmic','Glaucoma ','','2018-10-20 18:30:00'),(3,'ophthalmic','DCR ','','2018-10-20 18:30:00'),(4,'ophthalmic','Petrygium Surgery','','2018-10-20 18:30:00');
/*!40000 ALTER TABLE `advice_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `appointments`
--

DROP TABLE IF EXISTS `appointments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `appointments` (
  `UHID` int(11) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) NOT NULL,
  `DOB` date NOT NULL,
  `Gender` varchar(255) NOT NULL,
  `Consultant` varchar(255) NOT NULL,
  `DateOfAppointment` date NOT NULL,
  `TimeOfAppointment` time NOT NULL,
  `ContactNumber` bigint(20) NOT NULL,
  `EmailId` varchar(255) DEFAULT NULL,
  `ReferredBy` varchar(255) DEFAULT NULL,
  `ComingFromCity` varchar(255) DEFAULT NULL,
  `ComingFromArea` varchar(255) DEFAULT NULL,
  `PatientRelativeName` varchar(255) DEFAULT NULL,
  `RelationWithPatient` varchar(255) DEFAULT NULL,
  `RelativeContactNumber` varchar(10) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`UHID`,`DateOfAppointment`),
  CONSTRAINT `appointments_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointments`
--

LOCK TABLES `appointments` WRITE;
/*!40000 ALTER TABLE `appointments` DISABLE KEYS */;
INSERT INTO `appointments` VALUES (1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-03-05','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:03'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-10','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:44'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-11','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:20'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-31','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:06:04'),(1235,'Parag','prabhakar','kulkarni','1981-03-01','male','Prakash_Rasal','2018-08-25','11:00:00',9922962322,'pkul3003@gmail.com','','Pune','Dhayari','Advait','Son','9911962322','2018-08-12 07:15:15'),(1235,'Parag','prabhakar','kulkarni','1981-03-01','male','Prakash_Rasal','2018-08-26','11:00:00',9922962322,'pkul3003@gmail.com','','Pune','Dhayari','Advait','Son','9911962322','2018-08-12 07:15:47'),(1272,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-05-31','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','','','9911223222','2018-07-08 12:10:13'),(1272,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-07-09','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','','','9911223222','2018-07-08 12:14:02'),(1272,'Advait','Parag','Kulkarni','2010-07-05','male','Prakash_Rasal','2018-08-29','14:00:00',9922962322,'pkul3003@gmail.com','Dina','Pune','Dhayari','Parag','father','9922623222','2018-08-12 11:10:14'),(1275,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-07-30','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','Sujay','brother','9233234432','2018-07-21 15:52:42'),(1275,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-07-31','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','Sujay','brother','9233234432','2018-07-22 18:48:35'),(1275,'Deepak','','Boje','1981-02-04','undefined','Prakash_Rasal','2018-08-27','14:00:00',9823264645,'deepak.boje@gmail.com','','Pune','Dhayari','seth','friend','9922962322','2018-08-13 02:39:15'),(1275,'Deepak','','Boje','1981-02-04','undefined','Prakash_Rasal','2018-08-31','18:00:00',9823264645,'deepak.boje@gmail.com','','Pune','Dhayari','ppk','','null','2018-08-13 20:39:24'),(1275,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-10-31','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','Sujay','brother','9233234432','2018-08-12 01:12:18'),(1277,'mukesh','p','Joshi','2001-06-06','male','Dr Prakash Rasal','2018-12-23','12:00:00',9567750288,'mukesh.joshi@gmail.com','null','Pune','kothrud','parag','brother','9922962322','2018-10-02 05:30:30');
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `appointments_view`
--

DROP TABLE IF EXISTS `appointments_view`;
/*!50001 DROP VIEW IF EXISTS `appointments_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `appointments_view` AS SELECT 
 1 AS `UHID`,
 1 AS `FirstName`,
 1 AS `LastName`,
 1 AS `DOB`,
 1 AS `Gender`,
 1 AS `DateOfAppointment`,
 1 AS `TimeOfAppointment`,
 1 AS `ContactNumber`,
 1 AS `Consultant`,
 1 AS `PatientProgressStatus`,
 1 AS `RunningNotes`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `complaint_master`
--

DROP TABLE IF EXISTS `complaint_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `complaint_master` (
  `complaint_id` int(11) NOT NULL AUTO_INCREMENT,
  `complaint_type` varchar(50) NOT NULL,
  `complaint_sub_type` varchar(100) NOT NULL,
  `complaint_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`complaint_id`,`complaint_type`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complaint_master`
--

LOCK TABLES `complaint_master` WRITE;
/*!40000 ALTER TABLE `complaint_master` DISABLE KEYS */;
INSERT INTO `complaint_master` VALUES (1,'Occular','Redness','Eyes Redness','2018-10-19 18:30:00'),(2,'Occular','Pain','','2018-10-19 18:30:00'),(3,'Occular','Watering','','2018-10-19 18:30:00'),(4,'Occular','Dryness','','2018-10-19 18:30:00'),(5,'Occular','Diminished Vision','','2018-10-19 18:30:00'),(6,'Occular','Blurring of Vision','','2018-10-19 18:30:00'),(7,'Occular','Broken Spectacle','','2018-10-19 18:30:00'),(8,'Occular','Routine Followup','','2018-10-19 18:30:00');
/*!40000 ALTER TABLE `complaint_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultants`
--

DROP TABLE IF EXISTS `consultants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consultants` (
  `staffid` bigint(20) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `PrimarySpeciality` varchar(300) NOT NULL,
  `SecondarySpeciality` varchar(300) DEFAULT NULL,
  `HighestQualification` varchar(300) NOT NULL,
  `Physician` enum('yes','no') NOT NULL,
  `Surgeon` enum('yes','no') NOT NULL,
  `EmergencyContactNumber` bigint(20) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `staffid` (`staffid`),
  CONSTRAINT `consultants_ibfk_1` FOREIGN KEY (`staffid`) REFERENCES `staff_login` (`staffid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultants`
--

LOCK TABLES `consultants` WRITE;
/*!40000 ALTER TABLE `consultants` DISABLE KEYS */;
INSERT INTO `consultants` VALUES (1000,'Prakash','Rasal','Opthalmologist','','MD','yes','yes',9922962322,'2018-07-30 21:15:34'),(1001,'Wasant','ambekar','Opthalmologist','','MD','yes','yes',9922962322,'2018-07-30 21:27:50');
/*!40000 ALTER TABLE `consultants` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `diagnosis_master`
--

DROP TABLE IF EXISTS `diagnosis_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `diagnosis_master` (
  `diagnosis_id` int(11) NOT NULL AUTO_INCREMENT,
  `diagnosis_type` varchar(50) NOT NULL,
  `diagnosis_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`diagnosis_id`),
  UNIQUE KEY `uc_diagnosis_type` (`diagnosis_type`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnosis_master`
--

LOCK TABLES `diagnosis_master` WRITE;
/*!40000 ALTER TABLE `diagnosis_master` DISABLE KEYS */;
INSERT INTO `diagnosis_master` VALUES (1,'Advance Catract Surgery','','2018-10-20 18:30:00'),(2,'Conjective eyes','','2018-10-20 18:30:00'),(3,'Glucoma','','2018-10-20 18:30:00');
/*!40000 ALTER TABLE `diagnosis_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instructions_master`
--

DROP TABLE IF EXISTS `instructions_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `instructions_master` (
  `instructions_id` int(11) NOT NULL AUTO_INCREMENT,
  `instructions_type` varchar(50) NOT NULL,
  `instructions_sub_type` varchar(100) NOT NULL,
  `instructions_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`instructions_id`,`instructions_type`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instructions_master`
--

LOCK TABLES `instructions_master` WRITE;
/*!40000 ALTER TABLE `instructions_master` DISABLE KEYS */;
INSERT INTO `instructions_master` VALUES (1,'Occular','Regular followup','','2018-10-19 18:30:00'),(2,'Occular','Óñ©Óñ░Óñ▓ ÓñØÓÑïÓñ¬Óñ¥','','2018-10-19 18:30:00'),(3,'Occular','Regular Medication','','2018-10-19 18:30:00'),(4,'Occular','Please carry all documents during visit','','2018-10-19 18:30:00');
/*!40000 ALTER TABLE `instructions_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `investigation_master`
--

DROP TABLE IF EXISTS `investigation_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `investigation_master` (
  `investigation_id` int(11) NOT NULL AUTO_INCREMENT,
  `investigation_type` varchar(50) NOT NULL,
  `investigation_sub_type` varchar(100) NOT NULL,
  `investigation_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`investigation_id`,`investigation_type`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `investigation_master`
--

LOCK TABLES `investigation_master` WRITE;
/*!40000 ALTER TABLE `investigation_master` DISABLE KEYS */;
INSERT INTO `investigation_master` VALUES (1,'Optical','A Scan','','2018-10-19 18:30:00'),(2,'Optical','B Scan','','2018-10-19 18:30:00'),(3,'Optical','IOL Master','','2018-10-19 18:30:00'),(4,'Optical','Gonioscopy','','2018-10-19 18:30:00'),(5,'Optical','Corneal topography','','2018-10-19 18:30:00'),(6,'Optical','Fundus Photo','','2018-10-19 18:30:00'),(7,'Optical','OCT','','2018-10-19 18:30:00'),(8,'Optical','Perimetry','','2018-10-19 18:30:00');
/*!40000 ALTER TABLE `investigation_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medical_prescription_master`
--

DROP TABLE IF EXISTS `medical_prescription_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medical_prescription_master` (
  `prescription_type` varchar(255) NOT NULL,
  `medicine_id` int(11) NOT NULL,
  `diagnosis_id` int(11) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `fk_medicine` (`medicine_id`),
  KEY `fk_diagnosis` (`diagnosis_id`),
  CONSTRAINT `medical_prescription_master_ibfk_1` FOREIGN KEY (`medicine_id`) REFERENCES `medicine_master` (`medicine_id`),
  CONSTRAINT `medical_prescription_master_ibfk_2` FOREIGN KEY (`diagnosis_id`) REFERENCES `diagnosis_master` (`diagnosis_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical_prescription_master`
--

LOCK TABLES `medical_prescription_master` WRITE;
/*!40000 ALTER TABLE `medical_prescription_master` DISABLE KEYS */;
INSERT INTO `medical_prescription_master` VALUES ('Catract Prescription',1,1,'2018-10-20 18:30:00'),('Catract Prescription',2,1,'2018-10-20 18:30:00'),('Conjective eye',3,2,'2018-10-20 18:30:00'),('Conjective eye',4,2,'2018-10-20 18:30:00');
/*!40000 ALTER TABLE `medical_prescription_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medicine_master`
--

DROP TABLE IF EXISTS `medicine_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medicine_master`
--

LOCK TABLES `medicine_master` WRITE;
/*!40000 ALTER TABLE `medicine_master` DISABLE KEYS */;
INSERT INTO `medicine_master` VALUES (1,'Drushti Drop','Drop','Cipla','Prasad','','','M,A,E','2018-10-20 18:30:00'),(2,'eyecare Drop','Drop','Cipla','Prasad','','','M,E','2018-10-20 18:30:00'),(3,'Omaze','Tablet','Cipla','Prasad','','','','2018-10-20 18:30:00'),(4,'Zantec','Capsule','Cipla','Prasad','','','E','2018-10-20 18:30:00');
/*!40000 ALTER TABLE `medicine_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `minor_opd_procedures_master`
--

DROP TABLE IF EXISTS `minor_opd_procedures_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `minor_opd_procedures_master` (
  `min_procedure_id` int(11) NOT NULL AUTO_INCREMENT,
  `min_procedure_type` varchar(50) NOT NULL,
  `min_procedure_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`min_procedure_id`),
  UNIQUE KEY `uc_min_procedure_type` (`min_procedure_type`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `minor_opd_procedures_master`
--

LOCK TABLES `minor_opd_procedures_master` WRITE;
/*!40000 ALTER TABLE `minor_opd_procedures_master` DISABLE KEYS */;
INSERT INTO `minor_opd_procedures_master` VALUES (1,'Petrygium suture removal done','','2018-10-20 18:30:00'),(2,'DCR suture removal done','','2018-10-20 18:30:00'),(3,'Conjunctival cyst ruptured','','2018-10-20 18:30:00'),(4,'Thorough eye wash done','','2018-10-20 18:30:00');
/*!40000 ALTER TABLE `minor_opd_procedures_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `modes_of_payment`
--

DROP TABLE IF EXISTS `modes_of_payment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `modes_of_payment` (
  `ModeOfPayment` varchar(100) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ModeOfPayment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `modes_of_payment`
--

LOCK TABLES `modes_of_payment` WRITE;
/*!40000 ALTER TABLE `modes_of_payment` DISABLE KEYS */;
INSERT INTO `modes_of_payment` VALUES ('AADHAR PAY','2018-10-02 09:48:41'),('CASH','2018-10-02 09:48:41'),('CHEQUE','2018-10-02 09:48:41'),('CREDIT CARD','2018-10-02 09:48:41'),('DEBIT CARD','2018-10-02 09:47:04'),('GOOGLE PAY','2018-10-02 09:48:41'),('NET BANKING','2018-10-02 09:48:41'),('PAYTM','2018-10-02 09:48:41'),('UPI','2018-10-02 09:48:41');
/*!40000 ALTER TABLE `modes_of_payment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ocular_complaint_types`
--

DROP TABLE IF EXISTS `ocular_complaint_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ocular_complaint_types` (
  `ComplaintType` varchar(100) NOT NULL,
  `ComplaintDescription` varchar(300) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ComplaintType`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ocular_complaint_types`
--

LOCK TABLES `ocular_complaint_types` WRITE;
/*!40000 ALTER TABLE `ocular_complaint_types` DISABLE KEYS */;
INSERT INTO `ocular_complaint_types` VALUES ('farsignthedness','cannot see nearby things','2018-08-26 10:49:51'),('nearsightedness','cannot see far-off things','2018-08-26 10:49:51'),('sore eyes','cannot see nearby things','2018-08-26 10:49:52');
/*!40000 ALTER TABLE `ocular_complaint_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `ophthalmologist_examination_record`
--

DROP TABLE IF EXISTS `ophthalmologist_examination_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `ophthalmologist_examination_record` (
  `UHID` int(11) NOT NULL,
  `VisionRight` varchar(100) DEFAULT NULL,
  `VisionLeft` varchar(100) DEFAULT NULL,
  `AcceptanceRight` varchar(100) DEFAULT NULL,
  `AcceptanceLeft` varchar(100) DEFAULT NULL,
  `Finalglass_presRight` varchar(100) DEFAULT NULL,
  `Finalglass_presLeft` varchar(100) DEFAULT NULL,
  `EyebrowRight` varchar(100) DEFAULT NULL,
  `EyebrowLeft` varchar(100) DEFAULT NULL,
  `Extraocular_moveRight` varchar(100) DEFAULT NULL,
  `Extraocular_moveLeft` varchar(100) DEFAULT NULL,
  `Pupillary_ReactionRight` varchar(100) DEFAULT NULL,
  `Pupillary_ReactionLeft` varchar(100) DEFAULT NULL,
  `Other_FindingRight` varchar(100) DEFAULT NULL,
  `Other_FindingLeft` varchar(100) DEFAULT NULL,
  `Intraocular_PressureType` varchar(100) DEFAULT NULL,
  `Intraocular_PressureRight` varchar(100) DEFAULT NULL,
  `Intraocular_PressureLeft` varchar(100) DEFAULT NULL,
  `GonioscopyRight` varchar(100) DEFAULT NULL,
  `GonioscopyLeft` varchar(100) DEFAULT NULL,
  `SlitLamp_ExamRight` varchar(100) DEFAULT NULL,
  `SlitLamp_ExamLeft` varchar(100) DEFAULT NULL,
  `ConjuctivaRight` varchar(100) DEFAULT NULL,
  `ConjuctivaLeft` varchar(100) DEFAULT NULL,
  `CorneaRight` varchar(100) DEFAULT NULL,
  `CorneaLeft` varchar(100) DEFAULT NULL,
  `Anterior_ChamberRight` varchar(100) DEFAULT NULL,
  `Anterior_ChamberLeft` varchar(100) DEFAULT NULL,
  `Lenticular_statusRight` varchar(100) DEFAULT NULL,
  `Lenticular_statusLeft` varchar(100) DEFAULT NULL,
  `GlowRight` varchar(100) DEFAULT NULL,
  `GlowLeft` varchar(100) DEFAULT NULL,
  `Direct_OpthalmRight` varchar(100) DEFAULT NULL,
  `Direct_OpthalmLeft` varchar(100) DEFAULT NULL,
  `Inirect_OpthalmRight` varchar(100) DEFAULT NULL,
  `Indirect_OpthalmLeft` varchar(100) DEFAULT NULL,
  `NinetyD_SeventyeightDRight` varchar(100) DEFAULT NULL,
  `NinteyD_SeventyeightDLeft` varchar(100) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `fk_UHID` (`UHID`),
  CONSTRAINT `ophthalmologist_examination_record_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ophthalmologist_examination_record`
--

LOCK TABLES `ophthalmologist_examination_record` WRITE;
/*!40000 ALTER TABLE `ophthalmologist_examination_record` DISABLE KEYS */;
INSERT INTO `ophthalmologist_examination_record` VALUES (1272,'5','5','accept right','accept left','+2','-2','eyebrow right','eyebrow left','extra ocular right','extra ocular left','pupillary right','pupillary left','other right','other left','NCT','intra ocular right','intra ocular left','gonio right','gonio left','slit right','slit left','conjectiva right','conjectiva left','cornea right','cornea left','anterior right','anterior left','lenticular right','lenticular left','glow right','glow left','opth right','opth left','indirect right','indirect left','ninety right','ninety left','2018-08-27 18:31:00');
/*!40000 ALTER TABLE `ophthalmologist_examination_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `optical_investigation`
--

DROP TABLE IF EXISTS `optical_investigation`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `optical_investigation` (
  `UHID` int(11) NOT NULL,
  `Procedure1` varchar(100) DEFAULT NULL,
  `Procedure2` varchar(100) DEFAULT NULL,
  `Procedure3` varchar(100) DEFAULT NULL,
  `InvestigationSummary` varchar(300) DEFAULT NULL,
  `XylocaineTest` varchar(300) DEFAULT NULL,
  `BloodPressureSystolic` varchar(100) DEFAULT NULL,
  `BloodPressureDiastolic` varchar(100) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  CONSTRAINT `optical_investigation_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `optical_investigation`
--

LOCK TABLES `optical_investigation` WRITE;
/*!40000 ALTER TABLE `optical_investigation` DISABLE KEYS */;
/*!40000 ALTER TABLE `optical_investigation` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `optometary_results`
--

DROP TABLE IF EXISTS `optometary_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `optometary_results` (
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
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`UHID`),
  CONSTRAINT `optometary_results_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `optometary_results`
--

LOCK TABLES `optometary_results` WRITE;
/*!40000 ALTER TABLE `optometary_results` DISABLE KEYS */;
INSERT INTO `optometary_results` VALUES (1277,'afr123','afl123','krr123','krl123','15/20','13/20','not sure','not sure','not sure','APPLANATION','2018-10-19','TBD','00:00:15','cornea','left eye cataract','110/165','dark glasses','Prakash.Rasal','CDMR','POSITIVE','2018-10-20 08:59:29');
/*!40000 ALTER TABLE `optometary_results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_address`
--

DROP TABLE IF EXISTS `patient_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_address` (
  `UHID` int(11) NOT NULL,
  `AddressLine1` varchar(255) NOT NULL,
  `AddressLine2` varchar(255) DEFAULT NULL,
  `Landmark` varchar(255) DEFAULT NULL,
  `Area` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `District` varchar(255) DEFAULT NULL,
  `State` varchar(255) DEFAULT NULL,
  `PINCode` bigint(20) DEFAULT NULL,
  `EmergencyContactNumber` bigint(20) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  UNIQUE KEY `UHID` (`UHID`),
  CONSTRAINT `patient_address_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_address`
--

LOCK TABLES `patient_address` WRITE;
/*!40000 ALTER TABLE `patient_address` DISABLE KEYS */;
INSERT INTO `patient_address` VALUES (1234,'G-405','Sreenanda Classic','Hotel Kunal Icon','Rahatani','Pune','Pune','Maharashtra',411027,9922962322,'2018-05-26 16:45:51'),(1235,'G-605','Rosewoods Classic','Roseland Residency','Pimple Saudagar','Pune','Pune','Maharashtra',411027,9922962322,'2018-05-26 17:35:03'),(1275,'G-605','Rosewoods Classic','Roseland Residency','Pimple Saudagar','Pune','Pune','Maharashtra',411027,9922962322,'2018-07-22 18:14:12');
/*!40000 ALTER TABLE `patient_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_billing_record`
--

DROP TABLE IF EXISTS `patient_billing_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_billing_record` (
  `UHID` int(11) NOT NULL,
  `OPDConsultationFee` decimal(7,2) NOT NULL DEFAULT '0.00',
  `IPDFee` decimal(8,2) NOT NULL DEFAULT '0.00',
  `InvestigationsFee` decimal(7,2) NOT NULL DEFAULT '0.00',
  `LabFee` decimal(8,2) NOT NULL DEFAULT '0.00',
  `ProcedureCharges` decimal(8,2) NOT NULL DEFAULT '0.00',
  `GST` decimal(6,2) NOT NULL DEFAULT '0.00',
  `DiscountPercent` int(11) NOT NULL DEFAULT '0',
  `TotalBillAmount` decimal(9,2) NOT NULL DEFAULT '0.00',
  `ModeOfPayment` varchar(100) NOT NULL,
  `DateOfBill` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  KEY `ModeOfPayment` (`ModeOfPayment`),
  CONSTRAINT `patient_billing_record_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`),
  CONSTRAINT `patient_billing_record_ibfk_2` FOREIGN KEY (`ModeOfPayment`) REFERENCES `modes_of_payment` (`ModeOfPayment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_billing_record`
--

LOCK TABLES `patient_billing_record` WRITE;
/*!40000 ALTER TABLE `patient_billing_record` DISABLE KEYS */;
INSERT INTO `patient_billing_record` VALUES (1275,123.44,3432.22,121.11,132.11,5443.00,0.00,10,8326.69,'DEBIT CARD','2018-10-02 10:38:03','2018-10-02 10:38:03'),(1275,123.44,3432.22,121.11,132.11,5443.00,0.00,10,8326.69,'DEBIT CARD','2018-10-02 10:49:37','2018-10-02 10:49:37'),(1275,123.44,3432.22,121.11,132.11,5443.00,0.00,10,8300.00,'DEBIT CARD','2018-10-02 10:49:56','2018-10-02 10:49:56'),(1275,123.44,3432.22,121.11,132.11,5443.00,0.00,10,8326.69,'DEBIT CARD','2018-10-02 10:50:18','2018-10-02 10:50:18'),(1275,123.44,3432.22,121.11,132.11,5443.00,0.00,10,8326.69,'DEBIT CARD','2018-10-02 10:50:46','2018-10-02 10:50:46');
/*!40000 ALTER TABLE `patient_billing_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_drug_allergies`
--

DROP TABLE IF EXISTS `patient_drug_allergies`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_drug_allergies` (
  `UHID` int(11) NOT NULL,
  `DrugName` varchar(100) DEFAULT NULL,
  `AllergicReaction` varchar(100) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  CONSTRAINT `patient_drug_allergies_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_drug_allergies`
--

LOCK TABLES `patient_drug_allergies` WRITE;
/*!40000 ALTER TABLE `patient_drug_allergies` DISABLE KEYS */;
INSERT INTO `patient_drug_allergies` VALUES (1272,'penicilin','skin rashes and vomiting','2018-08-27 17:20:11');
/*!40000 ALTER TABLE `patient_drug_allergies` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_medical_facts`
--

DROP TABLE IF EXISTS `patient_medical_facts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_medical_facts` (
  `UHID` int(11) NOT NULL,
  `BloodGroup` varchar(255) NOT NULL,
  `BloodPressureSystolic` varchar(255) DEFAULT NULL,
  `BloodPressureDiastolic` varchar(255) DEFAULT NULL,
  `isDiabetic` enum('YES','NO') DEFAULT NULL,
  `isHighBPPatient` enum('YES','NO') DEFAULT NULL,
  `isHeartPatient` enum('YES','NO') DEFAULT NULL,
  `PatientWeight` decimal(4,2) DEFAULT NULL,
  `SugarLevelFasting` int(11) DEFAULT NULL,
  `SugarLeaveRandom` int(11) DEFAULT NULL,
  `SugarLevelPostLunch` int(11) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  CONSTRAINT `patient_medical_facts_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_medical_facts`
--

LOCK TABLES `patient_medical_facts` WRITE;
/*!40000 ALTER TABLE `patient_medical_facts` DISABLE KEYS */;
INSERT INTO `patient_medical_facts` VALUES (1277,'AB+ve','110','80','YES','YES','YES',79.00,156,233,255,'2018-08-23 19:46:20'),(1277,'AB+ve','110','80','YES','YES','YES',79.00,156,233,255,'2018-08-26 03:14:03');
/*!40000 ALTER TABLE `patient_medical_facts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_ocular_complaints`
--

DROP TABLE IF EXISTS `patient_ocular_complaints`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_ocular_complaints` (
  `UHID` int(11) NOT NULL,
  `complaint_type` varchar(100) DEFAULT NULL,
  `complaint_duration` varchar(100) DEFAULT NULL,
  `complaint_discription` varchar(300) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  KEY `ComplaintType` (`complaint_type`),
  CONSTRAINT `patient_ocular_complaints_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`),
  CONSTRAINT `patient_ocular_complaints_ibfk_2` FOREIGN KEY (`complaint_type`) REFERENCES `ocular_complaint_types` (`ComplaintType`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_ocular_complaints`
--

LOCK TABLES `patient_ocular_complaints` WRITE;
/*!40000 ALTER TABLE `patient_ocular_complaints` DISABLE KEYS */;
INSERT INTO `patient_ocular_complaints` VALUES (1272,'nearsightedness','2 months',NULL,'2018-08-26 10:57:40'),(1272,'nearsightedness','2 months',NULL,'2018-08-26 10:59:43'),(1275,'nearsightedness','2 months','','2018-10-19 08:25:26');
/*!40000 ALTER TABLE `patient_ocular_complaints` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_ocular_facts`
--

DROP TABLE IF EXISTS `patient_ocular_facts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_ocular_facts` (
  `UHID` int(11) NOT NULL,
  `UsingSpectacles` enum('YES','NO') DEFAULT NULL,
  `UsingContacts` enum('YES','NO') DEFAULT NULL,
  `RightGlassPrescription` varchar(100) DEFAULT NULL,
  `LeftGlassPrescription` varchar(100) DEFAULT NULL,
  `EyeColor` varchar(100) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  CONSTRAINT `patient_ocular_facts_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_ocular_facts`
--

LOCK TABLES `patient_ocular_facts` WRITE;
/*!40000 ALTER TABLE `patient_ocular_facts` DISABLE KEYS */;
INSERT INTO `patient_ocular_facts` VALUES (1234,'YES','YES','+2.2','+2.4','brown','2018-08-23 19:47:16');
/*!40000 ALTER TABLE `patient_ocular_facts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_previous_ocular_illness`
--

DROP TABLE IF EXISTS `patient_previous_ocular_illness`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_previous_ocular_illness` (
  `UHID` int(11) NOT NULL,
  `KnownOcularCondition` varchar(300) DEFAULT NULL,
  `DurationOfCondition` varchar(100) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  CONSTRAINT `patient_previous_ocular_illness_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_previous_ocular_illness`
--

LOCK TABLES `patient_previous_ocular_illness` WRITE;
/*!40000 ALTER TABLE `patient_previous_ocular_illness` DISABLE KEYS */;
INSERT INTO `patient_previous_ocular_illness` VALUES (1277,'gloucoma','2 months','2018-08-26 03:11:55');
/*!40000 ALTER TABLE `patient_previous_ocular_illness` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_progress_tracker`
--

DROP TABLE IF EXISTS `patient_progress_tracker`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_progress_tracker` (
  `UHID` int(11) NOT NULL,
  `PatientProgressStatus` varchar(100) DEFAULT NULL,
  `RunningNotes` varchar(500) DEFAULT NULL,
  `DateOfAppointment` date NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`,`DateOfAppointment`),
  CONSTRAINT `patient_progress_tracker_ibfk_1` FOREIGN KEY (`UHID`, `DateOfAppointment`) REFERENCES `appointments` (`UHID`, `DateOfAppointment`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_progress_tracker`
--

LOCK TABLES `patient_progress_tracker` WRITE;
/*!40000 ALTER TABLE `patient_progress_tracker` DISABLE KEYS */;
INSERT INTO `patient_progress_tracker` VALUES (1235,'registered','patient needs a wheel chain','2018-08-26','2018-08-26 09:45:16'),(1272,'consultant','Patient needs a wheel chair;','2018-08-29','2018-08-26 09:53:31'),(1275,'registered','patient complains a lot','2018-08-27','2018-08-26 09:47:58'),(1275,'registered','patient complains a lot','2018-08-31','2018-08-26 09:48:41'),(1277,'Registered','Patient needs wheel chair','2018-12-23','2018-10-02 05:30:30');
/*!40000 ALTER TABLE `patient_progress_tracker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_systemic_history`
--

DROP TABLE IF EXISTS `patient_systemic_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_systemic_history` (
  `UHID` int(11) NOT NULL,
  `ComplaintType` varchar(100) NOT NULL,
  `ComplaintDuration` varchar(100) DEFAULT NULL,
  `ComplaintDescription` varchar(300) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  KEY `ComplaintType` (`ComplaintType`),
  CONSTRAINT `patient_systemic_history_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`),
  CONSTRAINT `patient_systemic_history_ibfk_2` FOREIGN KEY (`ComplaintType`) REFERENCES `systemic_complaint_types` (`ComplaintType`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_systemic_history`
--

LOCK TABLES `patient_systemic_history` WRITE;
/*!40000 ALTER TABLE `patient_systemic_history` DISABLE KEYS */;
INSERT INTO `patient_systemic_history` VALUES (1277,'blurred_vision','1 month','Unable to see clearly since some time','2018-08-26 02:51:43');
/*!40000 ALTER TABLE `patient_systemic_history` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patients`
--

DROP TABLE IF EXISTS `patients`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patients` (
  `UHID` int(11) NOT NULL AUTO_INCREMENT,
  `FirstName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) NOT NULL,
  `DOB` date NOT NULL,
  `Gender` varchar(255) NOT NULL,
  `ContactNumber` varchar(10) NOT NULL,
  `EmailId` varchar(255) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Aadhar` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`UHID`),
  UNIQUE KEY `UC_Patient` (`FirstName`,`LastName`,`DOB`,`ContactNumber`,`Aadhar`)
) ENGINE=InnoDB AUTO_INCREMENT=1282 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1234,'sujay','satish','kulkarni','1981-11-06','male','9881065234','sujayk@gmail.com','2018-05-14 14:46:38',NULL),(1235,'Parag','prabhakar','kulkarni','1981-03-02','male','9922962322','pkul3003@gmail.com','2018-05-14 14:46:38',NULL),(1271,'advait1','parag1','kulkarni1','2010-08-08','male','9853214333','advaitk1@gmail.com','2018-07-07 13:58:46','12345678'),(1272,'Advait','Parag','Kulkarni','2010-07-06','male','9922962322','pkul3003@gmail.com','2018-07-08 10:50:50','undefined'),(1273,'Tattya','','Kulkarni','1981-06-05','male','9234223433','','2018-07-08 11:02:32','undefined'),(1274,'Bhakt','','Pralhad','1981-05-04','male','9284223454','','2018-07-08 11:14:59','undefined'),(1275,'Deepak','','Boje','1981-02-05','undefined','9823264645','deepak.boje@gmail.com','2018-07-21 15:38:17','undefined'),(1277,'mukesh','p','joshi','2001-08-08','male','9853214333','mukesh.joshi@gmail.com','2018-08-23 19:08:46','1234567211'),(1278,'Nikihl','p','mishra','2001-08-08','male','9853214343','mukesh.mishra@gmail.com','2018-10-14 08:30:23','1234563211'),(1279,'Nikki','p','mishra','2001-08-09','male','9833214343','nikki.mishra@gmail.com','2018-10-19 05:32:39','1231563211'),(1280,'Barak','kinadal','Obama','1920-12-10','male','9023878723','brak@gmail.com','2018-10-19 05:48:45','90243090923');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `prescription_diagnosis_view`
--

DROP TABLE IF EXISTS `prescription_diagnosis_view`;
/*!50001 DROP VIEW IF EXISTS `prescription_diagnosis_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `prescription_diagnosis_view` AS SELECT 
 1 AS `medicine_name`,
 1 AS `recommended_dosage`,
 1 AS `medicine_id`,
 1 AS `prescription_type`,
 1 AS `diagnosis_id`,
 1 AS `diagnosis_type`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `procedure_master`
--

DROP TABLE IF EXISTS `procedure_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `procedure_master` (
  `procedure_id` int(11) NOT NULL AUTO_INCREMENT,
  `procedure_type` varchar(50) NOT NULL,
  `procedure_sub_type` varchar(100) NOT NULL,
  `procedure_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`procedure_id`,`procedure_type`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `procedure_master`
--

LOCK TABLES `procedure_master` WRITE;
/*!40000 ALTER TABLE `procedure_master` DISABLE KEYS */;
INSERT INTO `procedure_master` VALUES (1,'Optical','Refraction','','2018-10-19 18:30:00'),(2,'Optical','Gonioscopy','','2018-10-19 18:30:00'),(3,'Optical','Pachymetry','','2018-10-19 18:30:00'),(4,'Optical','Fundus fluroscein angiography','','2018-10-19 18:30:00'),(5,'Optical','Suture Removal','','2018-10-19 18:30:00'),(6,'Optical','Dilated Examination','','2018-10-19 18:30:00'),(7,'Optical','Cleaning and dressing','','2018-10-19 18:30:00');
/*!40000 ALTER TABLE `procedure_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `special_precaution_master`
--

DROP TABLE IF EXISTS `special_precaution_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `special_precaution_master` (
  `precaution_id` int(11) NOT NULL AUTO_INCREMENT,
  `precaution_type` varchar(50) NOT NULL,
  `precaution_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`precaution_id`),
  UNIQUE KEY `uc_precaution_type` (`precaution_type`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `special_precaution_master`
--

LOCK TABLES `special_precaution_master` WRITE;
/*!40000 ALTER TABLE `special_precaution_master` DISABLE KEYS */;
INSERT INTO `special_precaution_master` VALUES (1,'Strict Bed Rest','','2018-10-20 18:30:00'),(2,'Dark Glasses','','2018-10-20 18:30:00'),(3,'Pop Up Position','','2018-10-20 18:30:00');
/*!40000 ALTER TABLE `special_precaution_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff_address`
--

DROP TABLE IF EXISTS `staff_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `staff_address` (
  `staffid` bigint(20) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `AddressLine1` varchar(255) NOT NULL,
  `AddressLine2` varchar(255) DEFAULT NULL,
  `Landmark` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `State` varchar(255) DEFAULT NULL,
  `PINCode` bigint(20) DEFAULT NULL,
  `EmergencyContactNumber` bigint(20) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `staffid` (`staffid`),
  CONSTRAINT `staff_address_ibfk_1` FOREIGN KEY (`staffid`) REFERENCES `staff_login` (`staffid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_address`
--

LOCK TABLES `staff_address` WRITE;
/*!40000 ALTER TABLE `staff_address` DISABLE KEYS */;
/*!40000 ALTER TABLE `staff_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff_details`
--

DROP TABLE IF EXISTS `staff_details`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `staff_details` (
  `staffid` bigint(20) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) NOT NULL,
  `DOB` date NOT NULL,
  `Gender` varchar(255) NOT NULL,
  `ContactNumber` bigint(20) NOT NULL,
  `EmailId` varchar(255) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `staffid` (`staffid`),
  CONSTRAINT `staff_details_ibfk_1` FOREIGN KEY (`staffid`) REFERENCES `staff_login` (`staffid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_details`
--

LOCK TABLES `staff_details` WRITE;
/*!40000 ALTER TABLE `staff_details` DISABLE KEYS */;
INSERT INTO `staff_details` VALUES (1002,'Pritam','','Rasal','1981-11-06','male',9657564333,'pritam@gmail.com','2018-08-12 01:32:42'),(1003,'Anil','','Gore','1982-11-06','male',8657564333,'anilgore@gmail.com','2018-08-23 19:11:03');
/*!40000 ALTER TABLE `staff_details` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff_login`
--

DROP TABLE IF EXISTS `staff_login`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `staff_login` (
  `staffid` bigint(20) NOT NULL AUTO_INCREMENT,
  `username` varchar(255) NOT NULL,
  `password` varchar(32) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`staffid`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=1004 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_login`
--

LOCK TABLES `staff_login` WRITE;
/*!40000 ALTER TABLE `staff_login` DISABLE KEYS */;
INSERT INTO `staff_login` VALUES (1000,'prakash.rasal','e19d5cd5af0378da05f63f891c7467af','2018-07-30 21:12:35'),(1001,'wasant.ambekar','e19d5cd5af0378da05f63f891c7467af','2018-07-30 21:27:10'),(1002,'pri123','e19d5cd5af0378da05f63f891c7467af','2018-08-12 01:32:42'),(1003,'anil.gore','e19d5cd5af0378da05f63f891c7467af','2018-08-23 19:11:03');
/*!40000 ALTER TABLE `staff_login` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff_roles`
--

DROP TABLE IF EXISTS `staff_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `staff_roles` (
  `staffid` bigint(20) NOT NULL,
  `Admin` enum('yes','no') DEFAULT NULL,
  `Receptionist` enum('yes','no') DEFAULT NULL,
  `Consultant` enum('yes','no') DEFAULT NULL,
  `Optometerist` enum('yes','no') DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `staffid` (`staffid`),
  CONSTRAINT `staff_roles_ibfk_1` FOREIGN KEY (`staffid`) REFERENCES `staff_login` (`staffid`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_roles`
--

LOCK TABLES `staff_roles` WRITE;
/*!40000 ALTER TABLE `staff_roles` DISABLE KEYS */;
/*!40000 ALTER TABLE `staff_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `systemic_complaint_types`
--

DROP TABLE IF EXISTS `systemic_complaint_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `systemic_complaint_types` (
  `ComplaintType` varchar(100) NOT NULL,
  `ComplaintDescription` varchar(300) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`ComplaintType`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `systemic_complaint_types`
--

LOCK TABLES `systemic_complaint_types` WRITE;
/*!40000 ALTER TABLE `systemic_complaint_types` DISABLE KEYS */;
INSERT INTO `systemic_complaint_types` VALUES ('blurred_vision','the vision becomes blurred','2018-08-26 02:46:48');
/*!40000 ALTER TABLE `systemic_complaint_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `appointments_view`
--

/*!50001 DROP VIEW IF EXISTS `appointments_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8 */;
/*!50001 SET character_set_results     = utf8 */;
/*!50001 SET collation_connection      = utf8_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `appointments_view` AS (select `a`.`UHID` AS `UHID`,`a`.`FirstName` AS `FirstName`,`a`.`LastName` AS `LastName`,`a`.`DOB` AS `DOB`,`a`.`Gender` AS `Gender`,`a`.`DateOfAppointment` AS `DateOfAppointment`,`a`.`TimeOfAppointment` AS `TimeOfAppointment`,`a`.`ContactNumber` AS `ContactNumber`,`a`.`Consultant` AS `Consultant`,`b`.`PatientProgressStatus` AS `PatientProgressStatus`,`b`.`RunningNotes` AS `RunningNotes` from (`appointments` `a` join `patient_progress_tracker` `b`) where ((`a`.`UHID` = `b`.`UHID`) and (`a`.`DateOfAppointment` = `b`.`DateOfAppointment`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `prescription_diagnosis_view`
--

/*!50001 DROP VIEW IF EXISTS `prescription_diagnosis_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = cp850 */;
/*!50001 SET character_set_results     = cp850 */;
/*!50001 SET collation_connection      = cp850_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `prescription_diagnosis_view` AS (select `m`.`medicine_name` AS `medicine_name`,`m`.`recommended_dosage` AS `recommended_dosage`,`m`.`medicine_id` AS `medicine_id`,`mpr`.`prescription_type` AS `prescription_type`,`dmr`.`diagnosis_id` AS `diagnosis_id`,`dmr`.`diagnosis_type` AS `diagnosis_type` from ((`medicine_master` `m` join `medical_prescription_master` `mpr`) join `diagnosis_master` `dmr`) where ((`mpr`.`medicine_id` = `m`.`medicine_id`) and (`mpr`.`diagnosis_id` = `dmr`.`diagnosis_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-10-21 16:07:03
