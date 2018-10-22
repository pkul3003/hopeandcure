-- MySQL dump 10.13  Distrib 5.7.23, for Linux (x86_64)
--
-- Host: localhost    Database: hmsdb
-- ------------------------------------------------------
-- Server version	5.7.23-0ubuntu0.18.04.1

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
INSERT INTO `appointments` VALUES (1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-03-05','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:03'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-10','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:44'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-11','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:20'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-31','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:06:04'),(1235,'Parag','prabhakar','kulkarni','1981-03-01','male','Prakash_Rasal','2018-08-25','11:00:00',9922962322,'pkul3003@gmail.com','','Pune','Dhayari','Advait','Son','9911962322','2018-08-12 07:15:15'),(1235,'Parag','prabhakar','kulkarni','1981-03-01','male','Prakash_Rasal','2018-08-26','11:00:00',9922962322,'pkul3003@gmail.com','','Pune','Dhayari','Advait','Son','9911962322','2018-08-12 07:15:47'),(1272,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-05-31','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','','','9911223222','2018-07-08 12:10:13'),(1272,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-07-09','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','','','9911223222','2018-07-08 12:14:02'),(1272,'Advait','Parag','Kulkarni','2010-07-05','male','Prakash_Rasal','2018-08-29','14:00:00',9922962322,'pkul3003@gmail.com','Dina','Pune','Dhayari','Parag','father','9922623222','2018-08-12 11:10:14'),(1275,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-07-30','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','Sujay','brother','9233234432','2018-07-21 15:52:42'),(1275,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-07-31','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','Sujay','brother','9233234432','2018-07-22 18:48:35'),(1275,'Deepak','','Boje','1981-02-04','undefined','Prakash_Rasal','2018-08-27','14:00:00',9823264645,'deepak.boje@gmail.com','','Pune','Dhayari','seth','friend','9922962322','2018-08-13 02:39:15'),(1275,'Deepak','','Boje','1981-02-04','undefined','Prakash_Rasal','2018-08-31','18:00:00',9823264645,'deepak.boje@gmail.com','','Pune','Dhayari','ppk','','null','2018-08-13 20:39:24'),(1275,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-10-31','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','Sujay','brother','9233234432','2018-08-12 01:12:18'),(1277,'mukesh','p','Joshi','2001-06-06','male','Dr Prakash Rasal','2018-10-31','12:00:00',9567750288,'mukesh.joshi@gmail.com','null','Pune','kothrud','parag','brother','9922962322','2018-08-23 19:10:05');
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
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
-- Table structure for table `occular_prescription`
--

DROP TABLE IF EXISTS `occular_prescription`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `occular_prescription` (
  `UHID` int(11) NOT NULL,
  `OpticalPrescription1` varchar(300) DEFAULT NULL,
  `OpticalPrescription2` varchar(300) DEFAULT NULL,
  `OpticalPrescription3` varchar(300) DEFAULT NULL,
  `Precaution1` varchar(300) DEFAULT NULL,
  `Precaution2` varchar(300) DEFAULT NULL,
  `Precaution3` varchar(300) DEFAULT NULL,
  `SpecialistReferral` enum('YES','NO') DEFAULT NULL,
  `ReferredSpecialist1` varchar(300) DEFAULT NULL,
  `ReferredSpecialist2` varchar(300) DEFAULT NULL,
  `ReferredSpecialist3` varchar(300) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  CONSTRAINT `occular_prescription_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `occular_prescription`
--

LOCK TABLES `occular_prescription` WRITE;
/*!40000 ALTER TABLE `occular_prescription` DISABLE KEYS */;
/*!40000 ALTER TABLE `occular_prescription` ENABLE KEYS */;
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
/*!40000 ALTER TABLE `ocular_complaint_types` ENABLE KEYS */;
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
  `AutorefactrometerReadingRight` varchar(100) DEFAULT NULL,
  `AutorefactrometerReadingLeft` varchar(100) DEFAULT NULL,
  `KeratometryReadingRight` varchar(100) DEFAULT NULL,
  `KeratometryReadingLeft` varchar(100) DEFAULT NULL,
  `UnaidedVisionRight` varchar(100) DEFAULT NULL,
  `UnaidedVisionLeft` varchar(100) DEFAULT NULL,
  `VisionWithPinhole` varchar(100) DEFAULT NULL,
  `Retinoscopy` varchar(100) DEFAULT NULL,
  `Acceptance` varchar(100) DEFAULT NULL,
  `IntraOccularPressure` enum('SCHIOTZ','NCT','APPLANATION','DIGITALLY') DEFAULT NULL,
  `SAC` varchar(100) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  CONSTRAINT `optometary_results_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `optometary_results`
--

LOCK TABLES `optometary_results` WRITE;
/*!40000 ALTER TABLE `optometary_results` DISABLE KEYS */;
INSERT INTO `optometary_results` VALUES (1234,'afr123','afl123','krr123','krl123','15/20','13/20','not sure','not sure','not sure','DIGITALLY','not sure','2018-05-26 15:32:22'),(1234,'afr123','afl123','krr123','krl123','15/20','13/20','not sure','not sure','not sure','DIGITALLY','not sure','2018-07-22 18:14:25'),(1234,'afr123','afl123','krr123','krl123','15/20','13/20','not sure','not sure','not sure','DIGITALLY','not sure','2018-08-12 01:11:23');
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
-- Table structure for table `patient_complaints`
--

DROP TABLE IF EXISTS `patient_complaints`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_complaints` (
  `UHID` int(11) NOT NULL,
  `Complaint1` varchar(300) DEFAULT NULL,
  `Complaint1DurationWeeks` varchar(100) DEFAULT NULL,
  `Complaint2` varchar(300) DEFAULT NULL,
  `Complaint2DurationWeeks` varchar(100) DEFAULT NULL,
  `Complaint3` varchar(300) DEFAULT NULL,
  `Complaint3DurationWeeks` varchar(100) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  CONSTRAINT `patient_complaints_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_complaints`
--

LOCK TABLES `patient_complaints` WRITE;
/*!40000 ALTER TABLE `patient_complaints` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient_complaints` ENABLE KEYS */;
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
INSERT INTO `patient_medical_facts` VALUES (1277,'AB+ve','110','80','YES','YES','YES',79.00,156,233,255,'2018-08-23 19:46:20');
/*!40000 ALTER TABLE `patient_medical_facts` ENABLE KEYS */;
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
-- Table structure for table `patient_previous_occular_illness`
--

DROP TABLE IF EXISTS `patient_previous_occular_illness`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_previous_occular_illness` (
  `UHID` int(11) NOT NULL,
  `KnownOcularCondition` varchar(300) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  CONSTRAINT `patient_previous_occular_illness_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_previous_occular_illness`
--

LOCK TABLES `patient_previous_occular_illness` WRITE;
/*!40000 ALTER TABLE `patient_previous_occular_illness` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient_previous_occular_illness` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=1278 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1234,'sujay','satish','kulkarni','1981-11-06','male','9881065234','sujayk@gmail.com','2018-05-14 14:46:38',NULL),(1235,'Parag','prabhakar','kulkarni','1981-03-02','male','9922962322','pkul3003@gmail.com','2018-05-14 14:46:38',NULL),(1271,'advait1','parag1','kulkarni1','2010-08-08','male','9853214333','advaitk1@gmail.com','2018-07-07 13:58:46','12345678'),(1272,'Advait','Parag','Kulkarni','2010-07-06','male','9922962322','pkul3003@gmail.com','2018-07-08 10:50:50','undefined'),(1273,'Tattya','','Kulkarni','1981-06-05','male','9234223433','','2018-07-08 11:02:32','undefined'),(1274,'Bhakt','','Pralhad','1981-05-04','male','9284223454','','2018-07-08 11:14:59','undefined'),(1275,'Deepak','','Boje','1981-02-05','undefined','9823264645','deepak.boje@gmail.com','2018-07-21 15:38:17','undefined'),(1277,'mukesh','p','joshi','2001-08-08','male','9853214333','mukesh.joshi@gmail.com','2018-08-23 19:08:46','1234567211');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
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
/*!40000 ALTER TABLE `systemic_complaint_types` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-08-24  1:26:14
