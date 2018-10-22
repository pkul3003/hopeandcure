-- MySQL dump 10.13  Distrib 5.7.22, for Linux (x86_64)
--
-- Host: localhost    Database: hmsdb
-- ------------------------------------------------------
-- Server version	5.7.22-0ubuntu0.16.04.1

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
  `RelativeContactNumber` bigint(20) DEFAULT NULL,
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
INSERT INTO `appointments` VALUES (1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-03-05','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:03'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-10','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:44'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-11','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:20'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-31','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:06:04'),(1272,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-05-31','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','','',9911223222,'2018-07-08 12:10:13'),(1272,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-07-09','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','','',9911223222,'2018-07-08 12:14:02'),(1275,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-07-30','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','Sujay','brother',9233234432,'2018-07-21 15:52:42');
/*!40000 ALTER TABLE `appointments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `consultants`
--

DROP TABLE IF EXISTS `consultants`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `consultants` (
  `username` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `PrimarySpeciality` varchar(300) NOT NULL,
  `SecondarySpeciality` varchar(300) DEFAULT NULL,
  `HighestQualification` varchar(300) NOT NULL,
  `Physician` enum('yes','no') NOT NULL,
  `Surgeon` enum('yes','no') NOT NULL,
  `EmergencyContactNumber` bigint(20) DEFAULT NULL,
  KEY `username` (`username`),
  CONSTRAINT `consultants_ibfk_1` FOREIGN KEY (`username`) REFERENCES `stafflogin` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `consultants`
--

LOCK TABLES `consultants` WRITE;
/*!40000 ALTER TABLE `consultants` DISABLE KEYS */;
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
INSERT INTO `optometary_results` VALUES (1234,'afr123','afl123','krr123','krl123','15/20','13/20','not sure','not sure','not sure','DIGITALLY','not sure','2018-05-26 15:32:22');
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
INSERT INTO `patient_address` VALUES (1234,'G-405','Sreenanda Classic','Hotel Kunal Icon','Rahatani','Pune','Pune','Maharashtra',411027,9922962322,'2018-05-26 16:45:51'),(1235,'G-605','Rosewoods Classic','Roseland Residency','Pimple Saudagar','Pune','Pune','Maharashtra',411027,9922962322,'2018-05-26 17:35:03');
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
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `BloodGroup` varchar(255) NOT NULL,
  `BloodPressureSystolic` varchar(255) DEFAULT NULL,
  `BloodPressureDiastolic` varchar(255) DEFAULT NULL,
  `KnownMedicalCondition1` varchar(300) DEFAULT NULL,
  `KnownMedicalCondition2` varchar(300) DEFAULT NULL,
  `KnownMedicalCondition3` varchar(300) DEFAULT NULL,
  `DrugAllergy1` varchar(300) DEFAULT NULL,
  `DrugAllergy2` varchar(300) DEFAULT NULL,
  `PreviousSystemicTreatment1` varchar(300) DEFAULT NULL,
  `PreviousSystemicTreatment2` varchar(300) DEFAULT NULL,
  `PreviousSystemicTreatment3` varchar(300) DEFAULT NULL,
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
INSERT INTO `patient_medical_facts` VALUES (1234,'Sujay','Kulkarni','AB+ve','110','80','high BP','null','null','ibuprofane','null','null','null','null','2018-05-22 14:36:47');
/*!40000 ALTER TABLE `patient_medical_facts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_occular_facts`
--

DROP TABLE IF EXISTS `patient_occular_facts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_occular_facts` (
  `UHID` int(11) NOT NULL,
  `UsingSpectacles` enum('YES','NO') DEFAULT NULL,
  `UsingContacts` enum('YES','NO') DEFAULT NULL,
  `RightGlassPrescription` varchar(100) DEFAULT NULL,
  `LeftGlassPrescription` varchar(100) DEFAULT NULL,
  `EyeColor` varchar(100) DEFAULT NULL,
  `PreviousTreatment1` varchar(300) DEFAULT NULL,
  `PreviousTreatment2` varchar(300) DEFAULT NULL,
  `PreviousTreatment3` varchar(300) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  CONSTRAINT `patient_occular_facts_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_occular_facts`
--

LOCK TABLES `patient_occular_facts` WRITE;
/*!40000 ALTER TABLE `patient_occular_facts` DISABLE KEYS */;
INSERT INTO `patient_occular_facts` VALUES (1234,'YES','YES','+2.2','+2.4','brown','null','null','null','2018-05-24 13:25:52');
/*!40000 ALTER TABLE `patient_occular_facts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_occular_history`
--

DROP TABLE IF EXISTS `patient_occular_history`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_occular_history` (
  `UHID` int(11) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `KnownOccularCondition1` varchar(300) DEFAULT NULL,
  `KnownOccularCondition2` varchar(300) DEFAULT NULL,
  `KnownOccularCondition3` varchar(300) DEFAULT NULL,
  `OpticalSurgeryHistory1` varchar(300) DEFAULT NULL,
  `OpticalSurgeryHistory2` varchar(300) DEFAULT NULL,
  `OpticalSurgeryHistory3` varchar(300) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `UHID` (`UHID`),
  CONSTRAINT `patient_occular_history_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_occular_history`
--

LOCK TABLES `patient_occular_history` WRITE;
/*!40000 ALTER TABLE `patient_occular_history` DISABLE KEYS */;
/*!40000 ALTER TABLE `patient_occular_history` ENABLE KEYS */;
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
  `ContactNumber` bigint(20) NOT NULL,
  `EmailId` varchar(255) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Aadhar` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`UHID`),
  UNIQUE KEY `UC_Patient` (`FirstName`,`LastName`,`DOB`,`ContactNumber`,`Aadhar`)
) ENGINE=InnoDB AUTO_INCREMENT=1276 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1234,'sujay','satish','kulkarni','1981-11-06','male',9881065234,'sujayk@gmail.com','2018-05-14 14:46:38',NULL),(1235,'Parag','prabhakar','kulkarni','1981-03-02','male',9922962322,'pkul3003@gmail.com','2018-05-14 14:46:38',NULL),(1271,'advait1','parag1','kulkarni1','2010-08-08','male',9853214333,'advaitk1@gmail.com','2018-07-07 13:58:46','12345678'),(1272,'Advait','Parag','Kulkarni','2010-07-06','male',9922962322,'pkul3003@gmail.com','2018-07-08 10:50:50','undefined'),(1273,'Tattya','','Kulkarni','1981-06-05','male',9234223433,'','2018-07-08 11:02:32','undefined'),(1274,'Bhakt','','Pralhad','1981-05-04','male',9284223454,'','2018-07-08 11:14:59','undefined'),(1275,'Deepak','','Boje','1981-02-05','undefined',9823264645,'deepak.boje@gmail.com','2018-07-21 15:38:17','undefined');
/*!40000 ALTER TABLE `patients` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staff_address`
--

DROP TABLE IF EXISTS `staff_address`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `staff_address` (
  `username` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `LastName` varchar(255) NOT NULL,
  `AddressLine1` varchar(255) NOT NULL,
  `AddressLine2` varchar(255) DEFAULT NULL,
  `Landmark` varchar(255) DEFAULT NULL,
  `City` varchar(255) DEFAULT NULL,
  `State` varchar(255) DEFAULT NULL,
  `PINCode` bigint(20) DEFAULT NULL,
  `EmergencyContactNumber` bigint(20) DEFAULT NULL,
  KEY `username` (`username`),
  CONSTRAINT `staff_address_ibfk_1` FOREIGN KEY (`username`) REFERENCES `stafflogin` (`username`)
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
-- Table structure for table `stafflogin`
--

DROP TABLE IF EXISTS `stafflogin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `stafflogin` (
  `username` varchar(255) NOT NULL,
  `FirstName` varchar(255) NOT NULL,
  `MiddleName` varchar(255) DEFAULT NULL,
  `LastName` varchar(255) NOT NULL,
  `DOB` date NOT NULL,
  `Gender` varchar(255) NOT NULL,
  `ContactNumber` bigint(20) NOT NULL,
  `EmailId` varchar(255) DEFAULT NULL,
  `password` varchar(32) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stafflogin`
--

LOCK TABLES `stafflogin` WRITE;
/*!40000 ALTER TABLE `stafflogin` DISABLE KEYS */;
INSERT INTO `stafflogin` VALUES ('pjoshi123','Prasad','Dattatray','Jpshi','1981-06-06','male',9657564333,'joship@gmail.com','e19d5cd5af0378da05f63f891c7467af','2018-05-13 21:06:13'),('pkul3003','Parag',NULL,'kulkarni','1981-03-02','male',9922962322,'pkul3003@gmail.com','e19d5cd5af0378da05f63f891c7467af','2018-05-13 20:26:28'),('prakash123','Prakash','','Rasal','1981-11-06','male',9657564333,'prakashs@gmail.com','e19d5cd5af0378da05f63f891c7467af','2018-05-14 14:55:27'),('pritam123','Pritam','','Rasal','1981-11-06','male',9657564333,'pritam@gmail.com','e19d5cd5af0378da05f63f891c7467af','2018-05-23 14:57:32'),('sujayk123','Sujay','Satish','Kulkarni','1981-11-06','male',9657564333,'sujayk@gmail.com','e19d5cd5af0378da05f63f891c7467af','2018-05-13 21:14:22');
/*!40000 ALTER TABLE `stafflogin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `staffroles`
--

DROP TABLE IF EXISTS `staffroles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `staffroles` (
  `username` varchar(255) NOT NULL,
  `Admin` enum('yes','no') DEFAULT NULL,
  `Receptionist` enum('yes','no') DEFAULT NULL,
  `Consultant` enum('yes','no') DEFAULT NULL,
  `Optometerist` enum('yes','no') DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  KEY `username` (`username`),
  CONSTRAINT `staffroles_ibfk_1` FOREIGN KEY (`username`) REFERENCES `stafflogin` (`username`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `staffroles`
--

LOCK TABLES `staffroles` WRITE;
/*!40000 ALTER TABLE `staffroles` DISABLE KEYS */;
INSERT INTO `staffroles` VALUES ('pkul3003','yes','yes','no','no','2018-05-14 14:07:54');
/*!40000 ALTER TABLE `staffroles` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-07-22 22:14:57
