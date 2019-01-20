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
  `advice_sub_type` varchar(100) DEFAULT NULL,
  `advice_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`advice_id`,`advice_type`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `advice_master`
--

LOCK TABLES `advice_master` WRITE;
/*!40000 ALTER TABLE `advice_master` DISABLE KEYS */;
INSERT INTO `advice_master` VALUES (12,'ocular_pre_surgery','Cataract Surgery','Cataract surgery advised to the patient','2019-01-19 08:50:15'),(13,'ocular_pre_surgery','Glaucoma Surgery','Glaucoma surgery advised to the patient','2019-01-19 08:50:15'),(14,'ocular_pre_surgery','DCR Surgery','DCR surgery advised to the patient','2019-01-19 08:50:15'),(15,'ocular_pre_surgery','Pterygium Surgery','Pterygium surgery advised to the patient','2019-01-19 08:50:15'),(16,'ocular_post_surgery','No head bath','Advised not to take head bath','2019-01-19 08:50:15'),(17,'ocular_post_surgery','Avoid reading','','2019-01-19 08:50:15'),(18,'ocular_post_surgery','Avoid television','','2019-01-19 08:50:16'),(19,'ocular_post_surgery','Wear dark glasses','','2019-01-19 08:50:16'),(20,'ocular_post_surgery','No light exposure','','2019-01-19 08:50:16');
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
INSERT INTO `appointments` VALUES (1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-03-05','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:03'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-10','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:44'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-11','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:05:20'),(1234,'sujay','satish','kulkarni','1981-11-06','male','Dr Prakash Rasal','2018-05-31','12:00:00',9881065234,'sujayk@gmail.com','none','Pune','wakad',NULL,NULL,NULL,'2018-05-15 19:06:04'),(1234,'sujay','satish','kulkarni','1981-11-05','male','Prakash_Rasal','2019-01-12','12:00:00',9881065234,'sujayk@gmail.com','Parag','undefined','undefined','Nik','Friend','9922962322','2018-12-29 03:55:39'),(1234,'Sujay','p','Kulkarni','2001-06-06','male','Dr Prakash Rasal','2019-03-03','12:00:00',9567750288,'sujayk@gmail.com','null','Pune','kothrud','parag','brother','9922962322','2019-01-05 06:19:20'),(1235,'Parag','prabhakar','kulkarni','1981-03-01','male','Prakash_Rasal','2018-08-25','11:00:00',9922962322,'pkul3003@gmail.com','','Pune','Dhayari','Advait','Son','9911962322','2018-08-12 07:15:15'),(1235,'Parag','prabhakar','kulkarni','1981-03-01','male','Prakash_Rasal','2018-08-26','11:00:00',9922962322,'pkul3003@gmail.com','','Pune','Dhayari','Advait','Son','9911962322','2018-08-12 07:15:47'),(1272,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-05-31','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','','','9911223222','2018-07-08 12:10:13'),(1272,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-07-09','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','','','9911223222','2018-07-08 12:14:02'),(1272,'Advait','Parag','Kulkarni','2010-07-05','male','Prakash_Rasal','2018-08-29','14:00:00',9922962322,'pkul3003@gmail.com','Dina','Pune','Dhayari','Parag','father','9922623222','2018-08-12 11:10:14'),(1275,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-07-30','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','Sujay','brother','9233234432','2018-07-21 15:52:42'),(1275,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-07-31','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','Sujay','brother','9233234432','2018-07-22 18:48:35'),(1275,'Deepak','','Boje','1981-02-04','undefined','Prakash_Rasal','2018-08-27','14:00:00',9823264645,'deepak.boje@gmail.com','','Pune','Dhayari','seth','friend','9922962322','2018-08-13 02:39:15'),(1275,'Deepak','','Boje','1981-02-04','undefined','Prakash_Rasal','2018-08-31','18:00:00',9823264645,'deepak.boje@gmail.com','','Pune','Dhayari','ppk','','null','2018-08-13 20:39:24'),(1275,'Prasad','Dattatray','Joshi','1981-06-06','male','Dr Prakash Rasal','2018-10-31','12:00:00',9567750288,'joship18@gmail.com','null','Pune','Dhayari','Sujay','brother','9233234432','2018-08-12 01:12:18'),(1277,'mukesh','p','Joshi','2001-06-06','male','Dr Prakash Rasal','2018-12-23','12:00:00',9567750288,'mukesh.joshi@gmail.com','null','Pune','kothrud','parag','brother','9922962322','2018-10-02 05:30:30'),(1280,'Barak','p','Obama','2001-06-06','male','Dr Prakash Rasal','2019-04-04','12:00:00',9567750288,'barak@gmail.com','null','Pune','kothrud','parag','brother','9922962322','2019-01-06 05:13:31'),(1284,'Barak','p','Obama','2001-06-06','male','Dr Prakash Rasal','2019-01-06','12:00:00',9567750288,'barak@gmail.com','null','Pune','kothrud','parag','brother','9922962322','2019-01-06 06:44:33'),(1284,'Barak','p','Obama','2001-06-06','male','Dr Prakash Rasal','2019-04-04','12:00:00',9567750288,'barak@gmail.com','null','Pune','kothrud','parag','brother','9922962322','2019-01-06 05:14:31');
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
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `complaint_master`
--

LOCK TABLES `complaint_master` WRITE;
/*!40000 ALTER TABLE `complaint_master` DISABLE KEYS */;
INSERT INTO `complaint_master` VALUES (17,'ocular','Redness','Redness in eyes','2019-01-19 08:50:16'),(18,'ocular','Pain','Pain in eyes','2019-01-19 08:50:16'),(19,'ocular','Watering','Watery eyes','2019-01-19 08:50:16'),(20,'ocular','Dryness','Dryness in eyes','2019-01-19 08:50:16'),(21,'ocular','Diminished Vision','Diminished Vision','2019-01-19 08:50:16'),(22,'ocular','Blurred Vision','Blurred Vision','2019-01-19 08:50:16'),(23,'ocular','Broken Spectacle','Broken Spectacle','2019-01-19 08:50:16'),(24,'','Defective vision for distance','','2019-01-19 08:50:16');
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
  `diagnosis_sub_type` varchar(100) NOT NULL,
  `diagnosis_desc` varchar(255) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`diagnosis_id`)
) ENGINE=InnoDB AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `diagnosis_master`
--

LOCK TABLES `diagnosis_master` WRITE;
/*!40000 ALTER TABLE `diagnosis_master` DISABLE KEYS */;
INSERT INTO `diagnosis_master` VALUES (4,'ocular','Conjunctiva_Acute Conjunctivitis','','2019-01-19 08:50:16'),(5,'general','Conjunctiva_Allergic Conjunctivitis','','2019-01-19 08:50:16'),(6,'','Conjunctiva_Bitot Spots','','2019-01-19 08:50:16'),(7,'','Conjunctiva_Bleb','','2019-01-19 08:50:16'),(8,'','Conjunctiva_Chemosis','','2019-01-19 08:50:16'),(9,'','Conjunctiva_Ciliary congestion','','2019-01-19 08:50:16'),(10,'','Conjunctiva_Concretions','','2019-01-19 08:50:16'),(11,'','Conjunctiva_Bulbar','','2019-01-19 08:50:16'),(12,'','Conjunctiva_Fornices','','2019-01-19 08:50:16'),(13,'','Conjunctiva_Palpebral','','2019-01-19 08:50:16'),(14,'','Conjunctiva_Conjunctivital flap in situ','','2019-01-19 08:50:16'),(15,'','Conjunctiva_Cyst','','2019-01-19 08:50:16'),(16,'','Conjunctiva_Dermoid','','2019-01-19 08:50:16'),(17,'','Conjunctiva_Dermolipoma','','2019-01-19 08:50:16'),(18,'','Conjunctiva_Discharge','','2019-01-19 08:50:16'),(19,'','Conjunctiva_Epithelioma','','2019-01-19 08:50:16'),(20,'','Conjunctiva_Follicles','','2019-01-19 08:50:16'),(21,'','Conjunctiva_Foreign Body','','2019-01-19 08:50:17'),(22,'','Conjunctiva_Giant Pupillary Conjunctivitis','','2019-01-19 08:50:17'),(23,'','Conjunctiva_Melanosis','','2019-01-19 08:50:17'),(24,'','Conjunctiva_Neavus','','2019-01-19 08:50:17'),(25,'','Conjunctiva_Normal','','2019-01-19 08:50:17'),(26,'','Conjunctiva_Pale','','2019-01-19 08:50:17'),(27,'','Conjunctiva_Papillae','','2019-01-19 08:50:17'),(28,'','Conjunctiva_Pseudo Membranous Conjuctivitis','','2019-01-19 08:50:17'),(29,'','Conjunctiva_Phlycten','','2019-01-19 08:50:17'),(30,'','Conjunctiva_Pingecula','','2019-01-19 08:50:17'),(31,'','Conjunctiva_Pterygium','','2019-01-19 08:50:17'),(32,'','Conjunctiva_Psudeo membranes','','2019-01-19 08:50:17'),(33,'','Conjunctiva_Pingecula Inflamed','','2019-01-19 08:50:17'),(34,'','Cornea_Pterygium','','2019-01-19 08:50:17'),(35,'','Cornea_Dry Eye Disease','','2019-01-19 08:50:17'),(36,'','Cornea_Keratomalacia','','2019-01-19 08:50:17'),(37,'','Cornea_Recurrent Corneal Erosion Syndrome','','2019-01-19 08:50:17'),(38,'','Cornea_Bullous Keratopathy','','2019-01-19 08:50:17'),(39,'','Cornea_Filamentry Keratopathy','','2019-01-19 08:50:17'),(40,'','Cornea_Neurotrophic Keratisis','','2019-01-19 08:50:17'),(41,'','Cornea_Toxic keratopathy','','2019-01-19 08:50:17'),(42,'','Cornea_Fungal Keratisis','','2019-01-19 08:50:17'),(43,'','Cornea_Acanthamoeba Keratisis','','2019-01-19 08:50:17'),(44,'','Cornea_Herpes Simplex Virus Keratopathy','','2019-01-19 08:50:17'),(45,'','Cornea_Marginal Keratisis','','2019-01-19 08:50:17'),(46,'','Cornea_Interstitial Keratisis','','2019-01-19 08:50:17'),(47,'','Cornea_Peripheral Ulcerative Keratisis','','2019-01-19 08:50:17'),(48,'','Cornea_Pellucid Marginal Degeneration','','2019-01-19 08:50:17'),(49,'','Cornea_Stromal Dystrophies','','2019-01-19 08:50:17'),(50,'','Cornea_Fuchs Endothelial Dystrophy','','2019-01-19 08:50:17'),(51,'','Cornea_Keratoconus','','2019-01-19 08:50:17'),(52,'','Cornea_Band -Shaped Keratopathy','','2019-01-19 08:50:17'),(53,'','Cornea_Keratisis Medicamentosa','','2019-01-19 08:50:17'),(54,'','Cornea_Chemical injury','','2019-01-19 08:50:18'),(55,'','Cornea_Corneal changes in Contact Lens users','','2019-01-19 08:50:18'),(56,'','Cornea_Corneal Graft Infection','','2019-01-19 08:50:18'),(57,'','Cornea_Graft Rejection','','2019-01-19 08:50:18'),(58,'','Sclera_Episcleritis','','2019-01-19 08:50:18'),(59,'','Sclera_Scleritis','','2019-01-19 08:50:18'),(60,'','External Disease_Trichiasis','','2019-01-19 08:50:18'),(61,'','External Disease_Chalazion','','2019-01-19 08:50:18'),(62,'','External Disease_Stye','','2019-01-19 08:50:18'),(63,'','External Disease_Blepharitis','','2019-01-19 08:50:18'),(64,'','External Disease_Lagopthalmos','','2019-01-19 08:50:18'),(65,'','External Disease_Exposure Keratopathy','','2019-01-19 08:50:18'),(66,'','External Disease_Ocular Surface Suquamous Neoplasia','','2019-01-19 08:50:18'),(67,'','External Disease_Allergic Conjunctivitis','','2019-01-19 08:50:18'),(68,'','External Disease_Bacterial Conjunctivitis','','2019-01-19 08:50:18'),(69,'','Lens_Cataract','','2019-01-19 08:50:18'),(70,'','Lens_Posterior Subcapsular Cataract','','2019-01-19 08:50:18'),(71,'','Lens_Anterior Subcapsuar Cataract','','2019-01-19 08:50:18'),(72,'','Lens_Psudeo Phakia Cataract','','2019-01-19 08:50:18'),(73,'','Lens_Mature Cataract','','2019-01-19 08:50:18'),(74,'','Lens_Hyper Mature Cataract','','2019-01-19 08:50:18'),(75,'','Lens_Morgagian Cataract','','2019-01-19 08:50:18'),(76,'','Lens_Phaco Donesis Cataract','','2019-01-19 08:50:18'),(77,'','Lens_ Ectopia Lentis Cataract','','2019-01-19 08:50:18'),(78,'','Lens_ Aphakia Cataract','','2019-01-19 08:50:18'),(79,'','Lens_ Dislocated IOL Cataract','','2019-01-19 08:50:18'),(80,'','','','2019-01-19 08:50:18');
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
  `instruction_sub_type` varchar(100) DEFAULT NULL,
  `instruction_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`instruction_id`)
) ENGINE=InnoDB AUTO_INCREMENT=16 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `instructions_master`
--

LOCK TABLES `instructions_master` WRITE;
/*!40000 ALTER TABLE `instructions_master` DISABLE KEYS */;
INSERT INTO `instructions_master` VALUES (4,'general','Regular follow up','','2019-01-19 08:50:18'),(5,'general','Regular medication','','2019-01-19 08:50:18'),(6,'general','Call in case of emergency','','2019-01-19 08:50:18'),(7,'general','Keep all documents handy','','2019-01-19 08:50:18'),(8,'general','Avoid Headbath','','2019-01-19 08:50:18'),(9,'general','Dont Sleep On Side Of Operated Eye','','2019-01-19 08:50:18'),(10,'general','Avoid Spicy Food','','2019-01-19 08:50:18'),(11,'general','Avoid Playing With Children','','2019-01-19 08:50:19'),(12,'general','Avoid Rubbing Eyes','','2019-01-19 08:50:19'),(13,'general','Dont Watch TV,Computer for 8 Days','','2019-01-19 08:50:19'),(14,'general','Avoid Reading For 8 Days','','2019-01-19 08:50:19'),(15,'general','Avoid Exposure To Sunlight','','2019-01-19 08:50:19');
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
  `investigation_sub_type` varchar(100) DEFAULT NULL,
  `investigation_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`investigation_id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `investigations_master`
--

LOCK TABLES `investigations_master` WRITE;
/*!40000 ALTER TABLE `investigations_master` DISABLE KEYS */;
INSERT INTO `investigations_master` VALUES (4,'ocular','A Scan','For IOL calculation','2019-01-19 08:50:19'),(5,'ocular','B Scan','Retinal Pathology','2019-01-19 08:50:19'),(6,'ocular','IOL master','Axial lengh IOL calculation','2019-01-19 08:50:19'),(7,'ocular','Gonioscopy','Study of angles','2019-01-19 08:50:19'),(8,'ocular','Cornial Topography','Assesment of corneal pathology','2019-01-19 08:50:19'),(9,'ocular','Fundus Photo','Visualisation of fundus','2019-01-19 08:50:19'),(10,'ocular','OCT','Study of retina macula anterior segment pathology','2019-01-19 08:50:19'),(11,'ocular','Perimetry','Visual field study','2019-01-19 08:50:19'),(12,'ocular','Schiots Tonometry','IOP measurement','2019-01-19 08:50:19'),(13,'ocular','Non Contact tonometry','IOP measurement','2019-01-19 08:50:19'),(14,'ocular','Pachymetry','Corneal thickness measurement','2019-01-19 08:50:19'),(15,'ocular','Schirms Test','Dryness Assesments','2019-01-19 08:50:19'),(16,'ocular','Flurosciene Stain','Epithelial defect','2019-01-19 08:50:19'),(17,'ocular','Cover Test','Squint evaluation','2019-01-19 08:50:19'),(18,'ocular','Prism Test','Squint evaluation','2019-01-19 08:50:19'),(19,'ocular','Corneal Reflects','Squint evaluation','2019-01-19 08:50:19'),(20,'ocular','FFA','Retinal Vessel Pathology','2019-01-19 08:50:19'),(21,'ocular','ICG','Retinal Vessel Pathology','2019-01-19 08:50:19'),(22,'ocular','Optical Biometry','IOL ,Axial lengthmeasurement','2019-01-19 08:50:19');
/*!40000 ALTER TABLE `investigations_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `medical_prescriptions_master`
--

DROP TABLE IF EXISTS `medical_prescriptions_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `medical_prescriptions_master` (
  `prescription_id` int(11) NOT NULL AUTO_INCREMENT,
  `prescription_type` varchar(255) NOT NULL,
  `medicine_id` int(11) NOT NULL,
  `diagnosis_id` int(11) NOT NULL,
  `prescription_desc` varchar(255) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`prescription_id`),
  KEY `fk_medicine` (`medicine_id`),
  KEY `fk_diagnosis` (`diagnosis_id`),
  CONSTRAINT `medical_prescription_master_ibfk_1` FOREIGN KEY (`medicine_id`) REFERENCES `medicine_master` (`medicine_id`),
  CONSTRAINT `medical_prescription_master_ibfk_2` FOREIGN KEY (`diagnosis_id`) REFERENCES `diagnosis_master` (`diagnosis_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `medical_prescriptions_master`
--

LOCK TABLES `medical_prescriptions_master` WRITE;
/*!40000 ALTER TABLE `medical_prescriptions_master` DISABLE KEYS */;
/*!40000 ALTER TABLE `medical_prescriptions_master` ENABLE KEYS */;
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
  `medicine_sub_type` varchar(100) DEFAULT NULL,
  `manufacturer` varchar(255) DEFAULT NULL,
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
INSERT INTO `medicine_master` VALUES (1,'Drushti Drop','Drop','test sub types','Cipla','','M,A,E','2018-10-20 18:30:00'),(2,'eyecare Drop','Drop','test sub types','Cipla','','M,E','2018-10-20 18:30:00'),(3,'Omaze','Tablet','test sub types','Cipla','','','2018-10-20 18:30:00'),(4,'Zantec','Capsule','test sub types','Cipla','','E','2018-10-20 18:30:00');
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
  `min_procedure_sub_type` varchar(100) DEFAULT NULL,
  `min_procedure_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`min_procedure_id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `minor_opd_procedures_master`
--

LOCK TABLES `minor_opd_procedures_master` WRITE;
/*!40000 ALTER TABLE `minor_opd_procedures_master` DISABLE KEYS */;
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
  `NinetyD_SeventyeightDLeft` varchar(100) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `consultant_name` varchar(100) DEFAULT NULL,
  `Optical_Investigation` varchar(300) DEFAULT NULL,
  `Lab_Investigations` varchar(100) DEFAULT NULL,
  `Diagnosis` varchar(200) DEFAULT NULL,
  `Treatment` varchar(200) DEFAULT NULL,
  `Additional_treatment` varchar(200) DEFAULT NULL,
  `Advice` varchar(300) DEFAULT NULL,
  `Minor_opd_procedure` varchar(300) DEFAULT NULL,
  `Instructions` varchar(300) DEFAULT NULL,
  KEY `fk_UHID` (`UHID`),
  CONSTRAINT `ophthalmologist_examination_record_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`) ON UPDATE CASCADE
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `ophthalmologist_examination_record`
--

LOCK TABLES `ophthalmologist_examination_record` WRITE;
/*!40000 ALTER TABLE `ophthalmologist_examination_record` DISABLE KEYS */;
INSERT INTO `ophthalmologist_examination_record` VALUES (1272,'5','5','accept right','accept left','+2','-2','eyebrow right','eyebrow left','extra ocular right','extra ocular left','pupillary right','pupillary left','other right','other left','NCT','intra ocular right','intra ocular left','gonio right','gonio left','slit right','slit left','conjectiva right','conjectiva left','cornea right','cornea left','anterior right','anterior left','lenticular right','lenticular left','glow right','glow left','opth right','opth left','indirect right','indirect left','ninety right','ninety left','2018-08-27 18:31:00',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL),(1275,'5','5','accept right','accept left','+2','-2','eyebrow right','eyebrow left','extra ocular right','extra ocular left','pupillary right','pupillary left','other right','other left','NCT','intra ocular right','intra ocular left','gonio right','gonio left','slit right','slit left','conjectiva right','conjectiva left','cornea right','cornea left','anterior right','anterior left','lenticular right','lenticular left','glow right','glow left','opth right','opth left','indirect right','indirect left','ninety right','ninety left','2019-01-20 06:25:02','prakash_rasal','gloucoma','undefined','gloucoma','surgery','right cataract','first gloucoma then cataract','minor opd','minor OPD to be done'),(1275,'5','5','accept right','accept left','+2','-2','eyebrow right','eyebrow left','extra ocular right','extra ocular left','pupillary right','pupillary left','other right','other left','NCT','intra ocular right','intra ocular left','gonio right','gonio left','slit right','slit left','conjectiva right','conjectiva left','cornea right','cornea left','anterior right','anterior left','lenticular right','lenticular left','glow right','glow left','opth right','opth left','indirect right','indirect left','ninety right','ninety left','2019-01-20 06:25:02','prakash_rasal','gloucoma','undefined','gloucoma','surgery','right cataract','first gloucoma then cataract','minor opd','minor OPD to be done'),(1275,'5','5','accept right','accept left','+2','-2','eyebrow right','eyebrow left','extra ocular right','extra ocular left','pupillary right','pupillary left','other right','other left','NCT','intra ocular right','intra ocular left','gonio right','gonio left','slit right','slit left','conjectiva right','conjectiva left','cornea right','cornea left','anterior right','anterior left','lenticular right','lenticular left','glow right','glow left','opth right','opth left','indirect right','indirect left','ninety right','ninety left','2019-01-20 06:25:02','prakash_rasal','gloucoma','undefined','gloucoma','surgery','right cataract','first gloucoma then cataract','minor opd','minor OPD to be done');
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
  `vision_with_pinhole_right` varchar(100) DEFAULT NULL,
  `vision_with_pinhole_left` varchar(100) DEFAULT NULL,
  `retinoscopy_right` varchar(100) DEFAULT NULL,
  `retinoscopy_left` varchar(100) DEFAULT NULL,
  `acceptance_right` varchar(100) DEFAULT NULL,
  `acceptance_left` varchar(100) DEFAULT NULL,
  `iop_measurement_technique` enum('SCHIOTZ','NCT','APPLANATION','DIGITALLY') DEFAULT NULL,
  `intra_ocular_pressure_right` varchar(100) DEFAULT NULL,
  `intra_ocular_pressure_left` varchar(100) DEFAULT NULL,
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
  `using_specs` varchar(10) DEFAULT NULL,
  `current_glass_prescription_right` varchar(50) DEFAULT NULL,
  `current_glass_prescription_left` varchar(50) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `user` varchar(100) DEFAULT NULL,
  KEY `optometary_results_ibfk_1` (`UHID`),
  CONSTRAINT `optometry_results_ibfk_1` FOREIGN KEY (`UHID`) REFERENCES `patients` (`UHID`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `optometry_results`
--

LOCK TABLES `optometry_results` WRITE;
/*!40000 ALTER TABLE `optometry_results` DISABLE KEYS */;
INSERT INTO `optometry_results` VALUES (1278,'afr123','afl123','krr123','krl123','15/20','13/20',NULL,NULL,NULL,NULL,NULL,NULL,'APPLANATION',NULL,NULL,'2018-10-21','TBD','00:00:15','cornea','left eye cataract','110/165','dark glasses','Prakash.Rasal','CDMR','POSITIVE','sore eyes','3 months','cataract','cataract surgery left eye','type2 diabetes','medicines & insulin','cataract surgery','none','none',NULL,'na','na','2018-10-21 18:32:20',NULL),(1278,'afr123','afl123','krr123','krl123','15/20','13/20',NULL,NULL,NULL,NULL,NULL,NULL,'APPLANATION',NULL,NULL,'2018-10-21','TBD','00:00:15','cornea','left eye cataract','110/165','dark glasses','Prakash.Rasal','CDMR','POSITIVE','sore eyes','3 months','cataract','cataract surgery left eye','type2 diabetes','medicines & insulin','cataract surgery','none','none',NULL,'na','na','2018-10-21 18:32:23',NULL),(1278,'afr123','afl123','krr123','krl123','15/20','13/20',NULL,NULL,NULL,NULL,NULL,NULL,'APPLANATION',NULL,NULL,'2018-10-21','TBD','00:00:15','cornea','left eye cataract','110/165','dark glasses','Prakash.Rasal','CDMR','POSITIVE','sore eyes','3 months','cataract','cataract surgery left eye','type2 diabetes','medicines & insulin','cataract surgery','none','none',NULL,'na','na','2018-10-22 13:36:25',NULL),(1277,'afr123','afl123','krr123','krl123','15/20','13/20',NULL,NULL,NULL,NULL,NULL,NULL,'APPLANATION',NULL,NULL,'2019-01-06','TBD','15:00:00','cornea','left eye cataract','110/165','dark glasses','Prakash.Rasal','CDMR','POSITIVE','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined',NULL,'undefined','undefined','2019-01-06 07:38:05','prakash.rasal'),(1277,'afr123','afl123','krr123','krl123','15/20','13/20',NULL,NULL,NULL,NULL,NULL,NULL,'APPLANATION',NULL,NULL,'2019-01-06','TBD','15:00:00','cornea','left eye cataract','110/165','dark glasses','Prakash.Rasal','CDMR','POSITIVE','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined','undefined',NULL,'undefined','undefined','2019-01-06 07:38:05','prakash.rasal'),(1280,'afr123','afl123','krr123','krl123','15/20','13/20','not sure','undefined','not sure','not sure','not sure','not sure','APPLANATION','not sure','not sure','2019-01-06','TBD','15:00:00','cornea','left eye cataract','110/165','dark glasses','Prakash.Rasal','CDMR','POSITIVE','some complaint','2 months','past_ocular_illness','test1','past illness','treatment1','his1','othe1','drug1','yes','right','left','2019-01-07 17:22:33','prakash.rasal'),(1280,'afr123','afl123','krr123','krl123','15/20','13/20','not sure','undefined','not sure','not sure','not sure','not sure','APPLANATION','not sure','not sure','2019-01-06','TBD','15:00:00','cornea','left eye cataract','110/165','dark glasses','Prakash.Rasal','CDMR','POSITIVE','some complaint','2 months','past_ocular_illness','test1','past illness','treatment1','his1','othe1','drug1','yes','right','left','2019-01-20 06:12:55','prakash.rasal');
/*!40000 ALTER TABLE `optometry_results` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `past_history_master`
--

DROP TABLE IF EXISTS `past_history_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `past_history_master` (
  `past_history_id` int(11) NOT NULL AUTO_INCREMENT,
  `past_history_type` varchar(50) NOT NULL,
  `past_history_sub_type` varchar(50) NOT NULL,
  `past_history_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`past_history_id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `past_history_master`
--

LOCK TABLES `past_history_master` WRITE;
/*!40000 ALTER TABLE `past_history_master` DISABLE KEYS */;
INSERT INTO `past_history_master` VALUES (1,'ocular','Test ocular1','','2019-01-06 06:37:29'),(2,'ocular','Test ocular2','','2019-01-06 06:37:29'),(3,'systemic','Test Systemic','','2019-01-06 06:38:01'),(4,'systemic','Test Systemic2','','2019-01-06 06:38:11');
/*!40000 ALTER TABLE `past_history_master` ENABLE KEYS */;
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
  `PINCode` varchar(10) DEFAULT NULL,
  `EmergencyContactNumber` varchar(10) DEFAULT NULL,
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
INSERT INTO `patient_address` VALUES (1234,'G-405','Sreenanda Classic','Hotel Kunal Icon','Rahatani','Pune','Pune','Maharashtra','411027','9922962322','2018-05-26 16:45:51'),(1235,'G-605','Rosewoods Classic','Roseland Residency','Pimple Saudagar','Pune','Pune','Maharashtra','411027','9922962322','2018-05-26 17:35:03'),(1275,'G-605','Rosewoods Classic','Roseland Residency','Pimple Saudagar','Pune','Pune','Maharashtra','411027','9922962322','2018-07-22 18:14:12'),(1277,'G-605','Rosewoods Classic','Roseland Residency','Pimple Saudagar','Pune','Pune','Maharashtra','411027','9922962322','2019-01-05 07:03:15'),(1280,'G-605','Rosewoods Classic','Roseland Residency','Pimple Saudagar','Pune','Pune','Maharashtra','411027','9922962322','2019-01-05 07:43:21'),(1286,'G-605','Rosewoods Classic','Roseland Residency','Pimple Saudagar','Pune','Pune','Maharashtra','411027','9922962322','2018-12-29 07:22:29'),(1288,'A5-102','Sree Classic','Hanuman Mandir','Nainital','Nainital','Nainital','HP','251027','2033212321','2018-12-30 08:21:26'),(1289,'A5-102','Sree Classic','Hanuman Mandir','Nainital','Nainital','Nainital','HP',NULL,NULL,'2018-12-30 09:27:03');
/*!40000 ALTER TABLE `patient_address` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `patient_address_details_view`
--

DROP TABLE IF EXISTS `patient_address_details_view`;
/*!50001 DROP VIEW IF EXISTS `patient_address_details_view`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `patient_address_details_view` AS SELECT 
 1 AS `UHID`,
 1 AS `FirstName`,
 1 AS `MiddleName`,
 1 AS `LastName`,
 1 AS `DOB`,
 1 AS `Gender`,
 1 AS `ContactNumber`,
 1 AS `EmailId`,
 1 AS `Aadhar`,
 1 AS `AddressLine1`,
 1 AS `AddressLine2`,
 1 AS `Landmark`,
 1 AS `Area`,
 1 AS `City`,
 1 AS `District`,
 1 AS `State`,
 1 AS `PINCode`,
 1 AS `EmergencyContactNumber`,
 1 AS `concat_address`,
 1 AS `DateOfAppointment`*/;
SET character_set_client = @saved_cs_client;

--
-- Temporary view structure for view `patient_address_details_view1`
--

DROP TABLE IF EXISTS `patient_address_details_view1`;
/*!50001 DROP VIEW IF EXISTS `patient_address_details_view1`*/;
SET @saved_cs_client     = @@character_set_client;
SET character_set_client = utf8;
/*!50001 CREATE VIEW `patient_address_details_view1` AS SELECT 
 1 AS `UHID`,
 1 AS `FirstName`,
 1 AS `MiddleName`,
 1 AS `LastName`,
 1 AS `DOB`,
 1 AS `Gender`,
 1 AS `ContactNumber`,
 1 AS `EmailId`,
 1 AS `Aadhar`,
 1 AS `AddressLine1`,
 1 AS `AddressLine2`,
 1 AS `Landmark`,
 1 AS `Area`,
 1 AS `City`,
 1 AS `District`,
 1 AS `State`,
 1 AS `PINCode`,
 1 AS `EmergencyContactNumber`,
 1 AS `concat_address`,
 1 AS `DateOfAppointment`*/;
SET character_set_client = @saved_cs_client;

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
  `quantity` varchar(100) DEFAULT NULL,
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
/*!40000 ALTER TABLE `patient_prescription_record` ENABLE KEYS */;
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
INSERT INTO `patient_progress_tracker` VALUES (1235,'registered','patient needs a wheel chain','2018-08-26','2018-08-26 09:45:16'),(1272,'With_Consultant','Patient needs a wheel chair;Patient needs a wheel chair;Patient needs a wheel chair;','2018-08-29','2018-12-31 09:55:44'),(1275,'registered','patient complains a lot','2018-08-27','2018-08-26 09:47:58'),(1275,'registered','patient complains a lot','2018-08-31','2018-08-26 09:48:41'),(1277,'Registered','Patient needs wheel chair','2018-12-23','2018-10-02 05:30:30'),(1234,'Registered','','2019-01-12','2018-12-29 03:55:39'),(1234,'Registered','Patient needs wheel chair','2019-03-03','2019-01-05 06:19:20'),(1280,'Arrived','Patient needs a wheel chair;Patient needs wheel chair','2019-04-04','2019-01-06 05:15:44'),(1284,'With_Optometrist','Patient needs a wheel chair;Patient needs wheel chair','2019-04-04','2019-01-06 05:16:13'),(1284,'Registered','Patient needs wheel chair','2019-01-06','2019-01-06 06:44:33');
/*!40000 ALTER TABLE `patient_progress_tracker` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient_status_master`
--

DROP TABLE IF EXISTS `patient_status_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `patient_status_master` (
  `status_code` varchar(100) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`status_code`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient_status_master`
--

LOCK TABLES `patient_status_master` WRITE;
/*!40000 ALTER TABLE `patient_status_master` DISABLE KEYS */;
INSERT INTO `patient_status_master` VALUES ('Arrived','2018-12-29 05:34:53'),('Consultation_Complete','2018-12-29 05:37:57'),('Registered','2018-12-29 05:34:35'),('Under_Investigation','2018-12-29 05:36:19'),('With_Consultant','2018-12-29 05:35:33'),('With_Optometrist','2018-12-29 05:35:26');
/*!40000 ALTER TABLE `patient_status_master` ENABLE KEYS */;
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
) ENGINE=InnoDB AUTO_INCREMENT=1292 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patients`
--

LOCK TABLES `patients` WRITE;
/*!40000 ALTER TABLE `patients` DISABLE KEYS */;
INSERT INTO `patients` VALUES (1234,'sujay','satish','kulkarni','1981-11-06','male','9881065234','sujayk@gmail.com','2018-05-14 14:46:38',NULL),(1235,'Parag','prabhakar','kulkarni','1981-03-02','male','9922962322','pkul3003@gmail.com','2018-05-14 14:46:38',NULL),(1271,'advait1','parag1','kulkarni1','2010-08-08','male','9853214333','advaitk1@gmail.com','2018-07-07 13:58:46','12345678'),(1272,'Advait','Parag','Kulkarni','2010-07-06','male','9922962322','pkul3003@gmail.com','2018-07-08 10:50:50','undefined'),(1273,'Tattya','','Kulkarni','1981-06-05','male','9234223433','','2018-07-08 11:02:32','undefined'),(1274,'Bhakt','','Pralhad','1981-05-04','male','9284223454','','2018-07-08 11:14:59','undefined'),(1275,'Deepak','','Boje','1981-02-05','undefined','9823264645','deepak.boje@gmail.com','2018-07-21 15:38:17','undefined'),(1277,'mukesh','p','joshi','2001-08-08','male','9853214333','mukesh.joshi@gmail.com','2018-08-23 19:08:46','1234567211'),(1278,'Nikihl','p','mishra','2001-08-08','male','9853214343','mukesh.mishra@gmail.com','2018-10-14 08:30:23','1234563211'),(1279,'Nikki','p','mishra','2001-08-09','male','9833214343','nikki.mishra@gmail.com','2018-10-19 05:32:39','1231563211'),(1280,'Barak','kinadal','Obama','1920-12-10','male','9023878723','brak@gmail.com','2019-01-05 06:54:00','90243090923'),(1284,'Aayush','Sujay','Kulkarni','1920-12-10','male','9023878726','aayush@gmail.com','2018-12-29 07:21:23','90243090923'),(1286,'Ridhima','Sujay','Kulkarni','1920-12-10','female','9023878726','aayush@gmail.com','2018-12-29 07:22:29','90243090923'),(1288,'funsukh','m','wangdu','1960-12-10','female','9052878726','funsukh@gmail.com','2018-12-30 08:21:26','902432322923'),(1289,'funsukh1','m','wangdu1','1960-12-10','female','9052878726','funsukh@gmail.com','2018-12-30 09:24:46','902432322923'),(1291,'funsukh2','m','wangdu2','1960-12-10','female','9052878726','funsukh@gmail.com','2018-12-30 09:26:15','902432322923');
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
  `procedure_sub_type` varchar(100) DEFAULT NULL,
  `procedure_desc` varchar(255) NOT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`procedure_id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `procedures_master`
--

LOCK TABLES `procedures_master` WRITE;
/*!40000 ALTER TABLE `procedures_master` DISABLE KEYS */;
INSERT INTO `procedures_master` VALUES (1,'ocular','test procedure1','test 1 desc','2018-12-31 13:32:27'),(2,'ocular','test procedure2','test 2 desc','2018-12-31 13:32:27'),(3,'ocular','test procedure3','test 3 desc','2018-12-31 13:32:28'),(4,'ocular','Refraction','','2019-01-19 08:50:20'),(5,'ocular','Gonioscopy','','2019-01-19 08:50:20'),(6,'ocular','Pachymetry','','2019-01-19 08:50:20'),(7,'ocular','Fundus fluroscein angiography','','2019-01-19 08:50:20'),(8,'ocular','Suture removal','','2019-01-19 08:50:20'),(9,'ocular','Cleaning and dressing','','2019-01-19 08:50:20'),(10,'ocular','Dialated','','2019-01-19 08:50:20'),(11,'ocular','Dialated Examination','','2019-01-19 08:50:20');
/*!40000 ALTER TABLE `procedures_master` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `special_precautions_master`
--

DROP TABLE IF EXISTS `special_precautions_master`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `special_precautions_master` (
  `precaution_id` int(11) NOT NULL AUTO_INCREMENT,
  `precaution_type` varchar(50) NOT NULL,
  `precaution_sub_type` varchar(100) NOT NULL,
  `precaution_desc` varchar(255) DEFAULT NULL,
  `RecordTouchDate` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`precaution_id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `special_precautions_master`
--

LOCK TABLES `special_precautions_master` WRITE;
/*!40000 ALTER TABLE `special_precautions_master` DISABLE KEYS */;
INSERT INTO `special_precautions_master` VALUES (4,'general','','Compulsory bed rest','2019-01-19 08:50:20'),(5,'general','','Pop up position','2019-01-19 08:50:20'),(6,'general','','Dark glasses','2019-01-19 08:50:20'),(7,'general','','One eyed patient','2019-01-19 08:50:20'),(8,'general','','Hypertensive Retinopathy','2019-01-19 08:50:21'),(9,'general','','Diabetic Retinopathy','2019-01-19 08:50:21'),(10,'general','','Systemic Disorders ','2019-01-19 08:50:21');
/*!40000 ALTER TABLE `special_precautions_master` ENABLE KEYS */;
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
-- Final view structure for view `patient_address_details_view`
--

/*!50001 DROP VIEW IF EXISTS `patient_address_details_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = cp850 */;
/*!50001 SET character_set_results     = cp850 */;
/*!50001 SET collation_connection      = cp850_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `patient_address_details_view` AS (select `p`.`UHID` AS `UHID`,`p`.`FirstName` AS `FirstName`,`p`.`MiddleName` AS `MiddleName`,`p`.`LastName` AS `LastName`,`p`.`DOB` AS `DOB`,`p`.`Gender` AS `Gender`,`p`.`ContactNumber` AS `ContactNumber`,`p`.`EmailId` AS `EmailId`,`p`.`Aadhar` AS `Aadhar`,`a`.`AddressLine1` AS `AddressLine1`,`a`.`AddressLine2` AS `AddressLine2`,`a`.`Landmark` AS `Landmark`,`a`.`Area` AS `Area`,`a`.`City` AS `City`,`a`.`District` AS `District`,`a`.`State` AS `State`,`a`.`PINCode` AS `PINCode`,`a`.`EmergencyContactNumber` AS `EmergencyContactNumber`,concat(`a`.`AddressLine1`,' ',`a`.`AddressLine2`,' ',`a`.`Landmark`,' ',`a`.`Area`,' ',`a`.`City`,' ',`a`.`District`,' ',`a`.`State`,' ',`a`.`PINCode`,' ',`a`.`EmergencyContactNumber`) AS `concat_address`,`ap`.`DateOfAppointment` AS `DateOfAppointment` from ((`patients` `p` join `patient_address` `a` on((`p`.`UHID` = `a`.`UHID`))) left join `appointments_view` `ap` on((`p`.`UHID` = `ap`.`UHID`)))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `patient_address_details_view1`
--

/*!50001 DROP VIEW IF EXISTS `patient_address_details_view1`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = cp850 */;
/*!50001 SET character_set_results     = cp850 */;
/*!50001 SET collation_connection      = cp850_general_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `patient_address_details_view1` AS (select `p`.`UHID` AS `UHID`,`p`.`FirstName` AS `FirstName`,`p`.`MiddleName` AS `MiddleName`,`p`.`LastName` AS `LastName`,`p`.`DOB` AS `DOB`,`p`.`Gender` AS `Gender`,`p`.`ContactNumber` AS `ContactNumber`,`p`.`EmailId` AS `EmailId`,`p`.`Aadhar` AS `Aadhar`,`a`.`AddressLine1` AS `AddressLine1`,`a`.`AddressLine2` AS `AddressLine2`,`a`.`Landmark` AS `Landmark`,`a`.`Area` AS `Area`,`a`.`City` AS `City`,`a`.`District` AS `District`,`a`.`State` AS `State`,`a`.`PINCode` AS `PINCode`,`a`.`EmergencyContactNumber` AS `EmergencyContactNumber`,concat(`a`.`AddressLine1`,`a`.`AddressLine2`,`a`.`Landmark`,`a`.`Area`,`a`.`City`,`a`.`District`,`a`.`State`,`a`.`PINCode`,`a`.`EmergencyContactNumber`) AS `concat_address`,`ap`.`DateOfAppointment` AS `DateOfAppointment` from ((`patients` `p` join `patient_address` `a`) join `appointments_view` `ap`) where ((`p`.`UHID` = `a`.`UHID`) and (`p`.`UHID` = `ap`.`UHID`))) */;
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
/*!50001 VIEW `prescription_diagnosis_view` AS (select `m`.`medicine_name` AS `medicine_name`,`m`.`recommended_dosage` AS `recommended_dosage`,`m`.`medicine_id` AS `medicine_id`,`mpr`.`prescription_type` AS `prescription_type`,`dmr`.`diagnosis_id` AS `diagnosis_id`,`dmr`.`diagnosis_type` AS `diagnosis_type` from ((`medicine_master` `m` join `medical_prescriptions_master` `mpr`) join `diagnosis_master` `dmr`) where ((`mpr`.`medicine_id` = `m`.`medicine_id`) and (`mpr`.`diagnosis_id` = `dmr`.`diagnosis_id`))) */;
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

-- Dump completed on 2019-01-20 12:04:57
