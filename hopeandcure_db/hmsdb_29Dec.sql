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
CREATE DATABASE IF NOT EXISTS `hmsdb`;


DROP TABLE IF EXISTS `advice_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `advice_master` (
  `advice_id` int(11) NOT NULL AUTO_INCREMENT,
  `advice_type` varchar(50) NOT NULL,
  `advice_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`advice_id`,`advice_type`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advice_master`
--

LOCK TABLES `advice_master` WRITE;
/*!40000 ALTER TABLE `advice_master` DISABLE KEYS */;
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
INSERT INTO `appointments` VALUES (1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-03-05','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:03'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-10','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:44'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-11','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:20'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-31','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:06:04'),(1234,'sujay','satish','kulkarni','1981-11-05','male','Prakash_Rasal','2019-01-12','12:00:00',9881065234,'sujayk@gmail.com','Parag','undefined','undefined','Nik','Friend','9922962322','2018-12-29 03:55:39'),(1235,'Parag','prabhakar','kulkarni','1981-03-01','male','Prakash_Rasal','2018-08-25','11:00:00',9922962322,'pkul3003@gmail.com','','Pune','Dhayari','Advait','Son','9911962322','2018-08-12 07:15:15'),(1235,'Parag','prabhakar','kulkarni','1981-03-01','male','Prakash_Rasal','2018-08-26','11:00:00',9922962322,'pkul3003@gmail.com','','Pune','Dhayari','Advait','Son','9911962322','2018-08-12 07:15:47'),(1272,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-05-31','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','','','9911223222','2018-07-08 12:10:13'),(1272,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-07-09','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','','','9911223222','2018-07-08 12:14:02'),(1272,'Advait','Parag','Kulkarni','2010-07-05','male','Prakash_Rasal','2018-08-29','14:00:00',9922962322,'pkul3003@gmail.com','Dina','Pune','Dhayari','Parag','father','9922623222','2018-08-12 11:10:14'),(1275,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-07-30','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','Sujay','brother','9233234432','2018-07-21 15:52:42'),(1275,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-07-31','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','Sujay','brother','9233234432','2018-07-22 18:48:35'),(1275,'Deepak','','Boje','1981-02-04','undefined','Prakash_Rasal','2018-08-27','14:00:00',9823264645,'deepak.boje@gmail.com','','Pune','Dhayari','seth','friend','9922962322','2018-08-13 02:39:15'),(1275,'Deepak','','Boje','1981-02-04','undefined','Prakash_Rasal','2018-08-31','18:00:00',9823264645,'deepak.boje@gmail.com','','Pune','Dhayari','ppk','','null','2018-08-13 20:39:24'),(1275,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-10-31','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','Sujay','brother','9233234432','2018-08-12 01:12:18'),(1277,'mukesh','p','Joshi','2001-06-06','male','Dr Prakash Rasal','2018-12-23','12:00:00',9567750288,'mukesh.joshi@gmail.com','null','Pune','kothrud','parag','brother','9922962322','2018-10-02 05:30:30');
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
INSERT INTO `complaint_master` VALUES (1,'ocular','Redness','Eyes Redness','2018-10-19 18:30:00'),(2,'ocular','Pain','','2018-10-19 18:30:00'),(3,'ocular','Watering','','2018-10-19 18:30:00'),(4,'ocular','Dryness','','2018-10-19 18:30:00'),(5,'ocular','Diminished Vision','','2018-10-19 18:30:00'),(6,'ocular','Blurring of Vision','','2018-10-19 18:30:00'),(7,'ocular','Broken Spectacle','','2018-10-19 18:30:00'),(8,'ocular','Routine Followup','','2018-10-19 18:30:00');
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
-- Table structure for table `healthcare_services_master`
--

DROP TABLE IF EXISTS `healthcare_services_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `healthcare_services_master` (
  `service_id` int(11) NOT NULL AUTO_INCREMENT,
  `service_type` varchar(100) NOT NULL,
  `service_sub_type` varchar(200) DEFAULT NULL,
  `service_charge` decimal(6,2) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`service_id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `healthcare_services_master`
--

LOCK TABLES `healthcare_services_master` WRITE;
/*!40000 ALTER TABLE `healthcare_services_master` DISABLE KEYS */;
INSERT INTO `healthcare_services_master` VALUES (1,'OPD','Consultation',200.00,'2018-11-03 02:14:45');
/*!40000 ALTER TABLE `healthcare_services_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `instructions_master`
--

DROP TABLE IF EXISTS `instructions_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `instructions_master` (
  `instruction_id` int(11) NOT NULL AUTO_INCREMENT,
  `instruction_type` varchar(50) NOT NULL,
  `instruction_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`instruction_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instructions_master`
--

LOCK TABLES `instructions_master` WRITE;
/*!40000 ALTER TABLE `instructions_master` DISABLE KEYS */;
/*!40000 ALTER TABLE `instructions_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `investigations_master`
--

DROP TABLE IF EXISTS `investigations_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `investigations_master` (
  `investigation_id` int(11) NOT NULL AUTO_INCREMENT,
  `investigation_type` varchar(50) NOT NULL,
  `investigation_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`investigation_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `investigations_master`
--

LOCK TABLES `investigations_master` WRITE;
/*!40000 ALTER TABLE `investigations_master` DISABLE KEYS */;
/*!40000 ALTER TABLE `investigations_master` ENABLE KEYS */;
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
  `mode_of_payment` varchar(100) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`mode_of_payment`)
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
  `consultant_name` varchar(100) DEFAULT NULL,
  KEY `fk_UHID` (`UHID`),
  CONSTRAINT `ophthalmologist_examination_record_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ophthalmologist_examination_record`
--

LOCK TABLES `ophthalmologist_examination_record` WRITE;
/*!40000 ALTER TABLE `ophthalmologist_examination_record` DISABLE KEYS */;
INSERT INTO `ophthalmologist_examination_record` VALUES (1272,'5','5','accept right','accept left','+2','-2','eyebrow right','eyebrow left','extra ocular right','extra ocular left','pupillary right','pupillary left','other right','other left','NCT','intra ocular right','intra ocular left','gonio right','gonio left','slit right','slit left','conjectiva right','conjectiva left','cornea right','cornea left','anterior right','anterior left','lenticular right','lenticular left','glow right','glow left','opth right','opth left','indirect right','indirect left','ninety right','ninety left','2018-08-27 18:31:00',NULL),(1275,'5','5','undefined','undefined','+2','-2','eyebrow right','eyebrow left','extra ocular right','extra ocular left','pupillary right','pupillary left','other right','other left','NCT','intra ocular right','intra ocular left','gonio right','gonio left','slit right','slit left','conjectiva right','conjectiva left','cornea right','cornea left','anterior right','anterior left','lenticular right','lenticular left','glow right','glow left','opth right','opth left','indirect right','indirect left','ninety right','ninety left','2018-10-21 18:35:03',NULL);
/*!40000 ALTER TABLE `ophthalmologist_examination_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `optometry_results`
--

DROP TABLE IF EXISTS `optometry_results`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
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
  KEY `optometary_results_ibfk_1` (`UHID`),
  CONSTRAINT `optometry_results_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `optometry_results`
--

LOCK TABLES `optometry_results` WRITE;
/*!40000 ALTER TABLE `optometry_results` DISABLE KEYS */;
INSERT INTO `optometry_results` VALUES (1278,'afr123','afl123','krr123','krl123','15/20','13/20','not sure','not sure','not sure','APPLANATION','2018-10-21','TBD','00:00:15','cornea','left eye cataract','110/165','dark glasses','Prakash.Rasal','CDMR','POSITIVE','sore eyes','3 months','cataract','cataract surgery left eye','type2 diabetes','medicines & insulin','cataract surgery','none','none','na','na','2018-10-21 18:32:20'),(1278,'afr123','afl123','krr123','krl123','15/20','13/20','not sure','not sure','not sure','APPLANATION','2018-10-21','TBD','00:00:15','cornea','left eye cataract','110/165','dark glasses','Prakash.Rasal','CDMR','POSITIVE','sore eyes','3 months','cataract','cataract surgery left eye','type2 diabetes','medicines & insulin','cataract surgery','none','none','na','na','2018-10-21 18:32:23'),(1278,'afr123','afl123','krr123','krl123','15/20','13/20','not sure','not sure','not sure','APPLANATION','2018-10-21','TBD','00:00:15','cornea','left eye cataract','110/165','dark glasses','Prakash.Rasal','CDMR','POSITIVE','sore eyes','3 months','cataract','cataract surgery left eye','type2 diabetes','medicines & insulin','cataract surgery','none','none','na','na','2018-10-22 13:36:25'),(1277,'afr123','afl123','krr123','krl123','15/20','13/20','not sure','not sure','not sure','APPLANATION','2018-10-21','TBD','10:15:00','cornea','left eye cataract','110/165','dark glasses','Prakash.Rasal','CDMR','POSITIVE','sore eyes','3 months','cataract','cataract surgery left eye','type2 diabetes','medicines & insulin','cataract surgery','none','none','na','na','2018-10-22 13:50:03');
/*!40000 ALTER TABLE `optometry_results` ENABLE KEYS */;
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
  `service_type` varchar(100) NOT NULL,
  `service_sub_type` varchar(200) DEFAULT NULL,
  `GST` decimal(6,2) NOT NULL DEFAULT '0.00',
  `discount_percent` int(11) NOT NULL DEFAULT '0',
  `total_bill_amount` decimal(9,2) NOT NULL DEFAULT '0.00',
  `mode_of_payment` varchar(100) NOT NULL,
  `date_of_bill` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `consultant_name` varchar(100) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  KEY `mode_of_payment` (`mode_of_payment`),
  CONSTRAINT `patient_billing_record_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`),
  CONSTRAINT `patient_billing_record_ibfk_2` FOREIGN KEY (`mode_of_payment`) REFERENCES `modes_of_payment` (`mode_of_payment`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_billing_record`
--

LOCK TABLES `patient_billing_record` WRITE;
/*!40000 ALTER TABLE `patient_billing_record` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient_billing_record` ENABLE KEYS */;
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
-- Table structure for table `patient_prescription_record`
--

DROP TABLE IF EXISTS `patient_prescription_record`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_prescription_record` (
  `UHID` int(11) NOT NULL,
  `medicine_name` varchar(200) NOT NULL,
  `recommended_dosage` varchar(100) NOT NULL,
  `additional_instructions` varchar(200) NOT NULL,
  `date_of_prescription` date NOT NULL,
  `consultant_name` varchar(100) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  CONSTRAINT `patient_prescription_record_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_prescription_record`
--

LOCK TABLES `patient_prescription_record` WRITE;
/*!40000 ALTER TABLE `patient_prescription_record` DISABLE KEYS */;
INSERT INTO `patient_prescription_record` VALUES (1272,'ofloxacin','3 times a day','before food','2018-02-02','prakash rasal','2018-11-17 03:45:43'),(1272,'pilocarpine','2 drops in each eye','3 times a day','2018-02-02','prakash rasal','2018-11-17 03:45:43'),(1272,'cyclosporine','3 drops per day','2 times a day','2018-02-02','prakash rasal','2018-11-17 03:45:43'),(1272,'ofloxacin','3 times a day','before food','2018-02-02','prakash rasal','2018-11-17 03:46:28'),(1272,'cyclosporine','3 drops per day','2 times a day','2018-02-02','prakash rasal','2018-11-17 03:46:28'),(1272,'pilocarpine','2 drops in each eye','3 times a day','2018-02-02','prakash rasal','2018-11-17 03:46:28'),(1272,'ofloxacin','3 times a day','before food','2018-02-02','prakash rasal','2018-11-17 03:49:06'),(1272,'cyclosporine','3 drops per day','2 times a day','2018-02-02','prakash rasal','2018-11-17 03:49:06'),(1272,'pilocarpine','2 drops in each eye','3 times a day','2018-02-02','prakash rasal','2018-11-17 03:49:06');
/*!40000 ALTER TABLE `patient_prescription_record` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_progress_status`
--

DROP TABLE IF EXISTS `patient_progress_status`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_progress_status` (
  `status_code` varchar(100) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`status_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_progress_status`
--

LOCK TABLES `patient_progress_status` WRITE;
/*!40000 ALTER TABLE `patient_progress_status` DISABLE KEYS */;
INSERT INTO `patient_progress_status` VALUES ('Arrived','2018-12-29 05:34:53'),('Consultation_Complete','2018-12-29 05:37:57'),('Registered','2018-12-29 05:34:35'),('Under_Investigation','2018-12-29 05:36:19'),('With_Consultant','2018-12-29 05:35:33'),('With_Optometrist','2018-12-29 05:35:26');
/*!40000 ALTER TABLE `patient_progress_status` ENABLE KEYS */;
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
INSERT INTO `patient_progress_tracker` VALUES (1235,'registered','patient needs a wheel chain','2018-08-26','2018-08-26 09:45:16'),(1272,'consultant','Patient needs a wheel chair;','2018-08-29','2018-08-26 09:53:31'),(1275,'registered','patient complains a lot','2018-08-27','2018-08-26 09:47:58'),(1275,'registered','patient complains a lot','2018-08-31','2018-08-26 09:48:41'),(1277,'Registered','Patient needs wheel chair','2018-12-23','2018-10-02 05:30:30'),(1234,'Registered','','2019-01-12','2018-12-29 03:55:39');
/*!40000 ALTER TABLE `patient_progress_tracker` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=1281 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1234,'sujay','satish','kulkarni','1981-11-06','male','9881065234','sujayk@gmail.com','2018-05-14 14:46:38',NULL),(1235,'Parag','prabhakar','kulkarni','1981-03-02','male','9922962322','pkul3003@gmail.com','2018-05-14 14:46:38',NULL),(1271,'advait1','parag1','kulkarni1','2010-08-08','male','9853214333','advaitk1@gmail.com','2018-07-07 13:58:46','12345678'),(1272,'Advait','Parag','Kulkarni','2010-07-06','male','9922962322','pkul3003@gmail.com','2018-07-08 10:50:50','undefined'),(1273,'Tattya','','Kulkarni','1981-06-05','male','9234223433','','2018-07-08 11:02:32','undefined'),(1274,'Bhakt','','Pralhad','1981-05-04','male','9284223454','','2018-07-08 11:14:59','undefined'),(1275,'Deepak','','Boje','1981-02-05','undefined','9823264645','deepak.boje@gmail.com','2018-07-21 15:38:17','undefined'),(1277,'mukesh','p','joshi','2001-08-08','male','9853214333','mukesh.joshi@gmail.com','2018-08-23 19:08:46','1234567211'),(1278,'Nikihl','p','mishra','2001-08-08','male','9853214343','mukesh.mishra@gmail.com','2018-10-14 08:30:23','1234563211'),(1279,'Nikki','p','mishra','2001-08-09','male','9833214343','nikki.mishra@gmail.com','2018-10-19 05:32:39','1231563211'),(1280,'Barak','kinadal','Obama','1920-12-10','male','9023878723','brak@gmail.com','2018-12-09 09:36:14','90243090923');
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
-- Table structure for table `procedures_master`
--

DROP TABLE IF EXISTS `procedures_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `procedures_master` (
  `procedure_id` int(11) NOT NULL AUTO_INCREMENT,
  `procedure_type` varchar(50) NOT NULL,
  `procedure_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`procedure_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `procedures_master`
--

LOCK TABLES `procedures_master` WRITE;
/*!40000 ALTER TABLE `procedures_master` DISABLE KEYS */;
/*!40000 ALTER TABLE `procedures_master` ENABLE KEYS */;
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
  `staff_role` varchar(50) DEFAULT NULL,
  PRIMARY KEY (`staffid`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=1004 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_login`
--

LOCK TABLES `staff_login` WRITE;
/*!40000 ALTER TABLE `staff_login` DISABLE KEYS */;
INSERT INTO `staff_login` VALUES (1000,'prakash.rasal','e19d5cd5af0378da05f63f891c7467af','2018-07-30 21:12:35',NULL),(1001,'wasant.ambekar','e19d5cd5af0378da05f63f891c7467af','2018-07-30 21:27:10',NULL),(1002,'pri123','e19d5cd5af0378da05f63f891c7467af','2018-08-12 01:32:42',NULL),(1003,'anil.gore','e19d5cd5af0378da05f63f891c7467af','2018-08-23 19:11:03',NULL);
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
  `role_name` varchar(50) DEFAULT NULL,
  `screen_name` varchar(100) DEFAULT NULL,
  `privileges` enum('READ','READ-WRITE') NOT NULL,
  `html_path` varchar(400) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `staffid` (`staffid`),
  CONSTRAINT `staff_roles_ibfk_1` FOREIGN KEY (`staffid`) REFERENCES `staff_login` (`staffid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staff_roles`
--

LOCK TABLES `staff_roles` WRITE;
/*!40000 ALTER TABLE `staff_roles` DISABLE KEYS */;
INSERT INTO `staff_roles` VALUES (1001,'ADMIN','MASTER-DATA','READ-WRITE','http://localhost:4200/master-data','2018-11-03 01:41:37'),(1001,'ADMIN','MASTER-DATA','READ-WRITE','http://localhost:4200/help','2018-11-03 01:42:19'),(1001,'ADMIN','MASTER-DATA','READ-WRITE','http://localhost:4200/help','2018-11-03 01:42:22'),(1001,'ADMIN','HELP','READ-WRITE','http://localhost:4200/master-data','2018-11-03 01:42:56');
/*!40000 ALTER TABLE `staff_roles` ENABLE KEYS */;
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

-- Dump completed on 2018-12-29 12:17:27
