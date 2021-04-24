-- MySQL dump 10.13  Distrib 8.0.23, for Win64 (x86_64)
--
-- Host: localhost    Database: tita
-- ------------------------------------------------------
-- Server version	8.0.23

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `assignment`
--

DROP TABLE IF EXISTS `assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assignment` (
  `assignment_id` int NOT NULL AUTO_INCREMENT,
  `assignment_name` varchar(50) NOT NULL,
  `creation_date` datetime NOT NULL,
  `submission_date` datetime NOT NULL,
  `assignment_link` varchar(150) NOT NULL,
  PRIMARY KEY (`assignment_id`)
) ENGINE=InnoDB AUTO_INCREMENT=21 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment`
--

LOCK TABLES `assignment` WRITE;
/*!40000 ALTER TABLE `assignment` DISABLE KEYS */;
INSERT INTO `assignment` VALUES (17,'Basic Practice','2021-04-23 19:04:00','2021-04-24 11:00:00','https://res.cloudinary.com/titacms/image/upload/v1619184854/jjhxpsbbnpbx99v5w7ef.pdf'),(18,'Unsupervised Learning','2021-04-23 19:04:50','2021-04-23 10:04:00','https://res.cloudinary.com/titacms/image/upload/v1619184896/axhm69d69aclznvra7kh.pdf'),(19,'Advanced Practice','2021-04-23 19:05:46','2021-04-26 22:05:00','https://res.cloudinary.com/titacms/image/upload/v1619184951/hhwba6lehjqpvwgiapil.pdf'),(20,'Learning Algorithm','2021-04-23 19:07:17','2021-04-22 21:09:00','https://res.cloudinary.com/titacms/image/upload/v1619185041/nmnzcvaqahmlvuav3ocy.pdf');
/*!40000 ALTER TABLE `assignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `assignment_subclass`
--

DROP TABLE IF EXISTS `assignment_subclass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `assignment_subclass` (
  `assignment_id` int NOT NULL,
  `sub_class_id` int NOT NULL,
  KEY `assignment_id` (`assignment_id`),
  KEY `sub_class_id` (`sub_class_id`),
  CONSTRAINT `assignment_subclass_ibfk_1` FOREIGN KEY (`assignment_id`) REFERENCES `assignment` (`assignment_id`),
  CONSTRAINT `assignment_subclass_ibfk_2` FOREIGN KEY (`sub_class_id`) REFERENCES `sub_class` (`sub_class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `assignment_subclass`
--

LOCK TABLES `assignment_subclass` WRITE;
/*!40000 ALTER TABLE `assignment_subclass` DISABLE KEYS */;
INSERT INTO `assignment_subclass` VALUES (17,27),(17,28),(17,29),(18,27),(18,28),(18,29),(19,27),(19,28),(19,29),(20,27),(20,28),(20,29);
/*!40000 ALTER TABLE `assignment_subclass` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classrooms`
--

DROP TABLE IF EXISTS `classrooms`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `classrooms` (
  `classroom_id` varchar(10) NOT NULL,
  `course_name` varchar(50) NOT NULL,
  `course_code` varchar(10) NOT NULL,
  `num_groups` int NOT NULL,
  `branchName` varchar(50) DEFAULT NULL,
  `branchYear` int DEFAULT NULL,
  PRIMARY KEY (`classroom_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classrooms`
--

LOCK TABLES `classrooms` WRITE;
/*!40000 ALTER TABLE `classrooms` DISABLE KEYS */;
INSERT INTO `classrooms` VALUES ('dltpntgc','Computer Networks','CSN-210',6,'CSE',2019),('fysoirzb','Fluid Dynamics','MEC-205',6,'MechE',2021),('nfvwyzqb','Solid Mechanics','CVE-201',2,'CivE',2020);
/*!40000 ALTER TABLE `classrooms` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quiz_subclass`
--

DROP TABLE IF EXISTS `quiz_subclass`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quiz_subclass` (
  `quiz_id` int NOT NULL,
  `sub_class_id` int NOT NULL,
  KEY `quiz_id` (`quiz_id`),
  KEY `sub_class_id` (`sub_class_id`),
  CONSTRAINT `quiz_subclass_ibfk_1` FOREIGN KEY (`quiz_id`) REFERENCES `quizzes` (`quiz_id`),
  CONSTRAINT `quiz_subclass_ibfk_2` FOREIGN KEY (`sub_class_id`) REFERENCES `sub_class` (`sub_class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quiz_subclass`
--

LOCK TABLES `quiz_subclass` WRITE;
/*!40000 ALTER TABLE `quiz_subclass` DISABLE KEYS */;
INSERT INTO `quiz_subclass` VALUES (1,27),(1,28),(1,29),(1,30),(1,32),(1,31),(1,27),(1,28),(1,29),(1,30),(1,31),(1,32),(1,27),(1,28),(1,29),(1,30),(1,31),(1,32),(4,27),(4,28),(4,29),(4,30),(4,31),(4,32),(5,33),(6,34);
/*!40000 ALTER TABLE `quiz_subclass` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `quizzes`
--

DROP TABLE IF EXISTS `quizzes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `quizzes` (
  `quiz_id` int NOT NULL AUTO_INCREMENT,
  `quiz_name` varchar(50) NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `quiz_link` varchar(150) NOT NULL,
  PRIMARY KEY (`quiz_id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `quizzes`
--

LOCK TABLES `quizzes` WRITE;
/*!40000 ALTER TABLE `quizzes` DISABLE KEYS */;
INSERT INTO `quizzes` VALUES (1,'Entertainment Quiz','2021-04-24 11:00:00','2021-04-24 11:40:00','https://docs.google.com/forms/d/e/1FAIpQLSfmiSooCOZGveysh7QQJCkd7Us1WSdY4ybaSAZV3ln7o6XNug/viewform?usp=sf_link'),(2,'Entertainment Quiz 1','2021-04-24 10:50:00','2021-04-24 11:00:00','https://docs.google.com/forms/d/e/1FAIpQLSfmiSooCOZGveysh7QQJCkd7Us1WSdY4ybaSAZV3ln7o6XNug/viewform?usp=sf_link'),(3,'Entertainment Quiz 2','2021-04-28 11:00:00','2021-04-28 12:00:00','https://docs.google.com/forms/d/e/1FAIpQLSfmiSooCOZGveysh7QQJCkd7Us1WSdY4ybaSAZV3ln7o6XNug/viewform?usp=sf_link'),(4,'Tathya General Quiz','2021-04-23 11:00:00','2021-04-23 12:00:00','https://docs.google.com/forms/d/e/1FAIpQLSf3H1el1gPhU-_lruUAWV5cfTnJVhoutL7Gouo0zF0jLaSPRQ/viewform?usp=sf_link'),(5,'Test Quiz','2021-04-24 16:00:00','2021-04-24 16:15:00','test-quiz.com'),(6,'Test Quiz 2','2021-04-25 14:50:00','2021-04-25 15:00:00','https://test-quiz-2');
/*!40000 ALTER TABLE `quizzes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `resources`
--

DROP TABLE IF EXISTS `resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `resources` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `link` varchar(150) NOT NULL,
  `description` varchar(1000) DEFAULT NULL,
  `uploaded_at` datetime NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `resources`
--

LOCK TABLES `resources` WRITE;
/*!40000 ALTER TABLE `resources` DISABLE KEYS */;
/*!40000 ALTER TABLE `resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stud_assignment`
--

DROP TABLE IF EXISTS `stud_assignment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stud_assignment` (
  `assignment_id` int NOT NULL,
  `assignment_link` varchar(150) NOT NULL,
  `sid` int NOT NULL,
  `submitted_at` datetime DEFAULT NULL,
  KEY `assignment_id` (`assignment_id`),
  KEY `sid` (`sid`),
  CONSTRAINT `stud_assignment_ibfk_1` FOREIGN KEY (`assignment_id`) REFERENCES `assignment` (`assignment_id`),
  CONSTRAINT `stud_assignment_ibfk_2` FOREIGN KEY (`sid`) REFERENCES `students` (`sid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stud_assignment`
--

LOCK TABLES `stud_assignment` WRITE;
/*!40000 ALTER TABLE `stud_assignment` DISABLE KEYS */;
INSERT INTO `stud_assignment` VALUES (17,'https://res.cloudinary.com/titacms/image/upload/v1619184977/clcnp7bkecta8rl3wzwb.pdf',19103057,'2021-04-23 19:06:13'),(18,'https://res.cloudinary.com/titacms/image/upload/v1619184997/bcfmjftfad3ybj2hq5lj.pdf',19103057,'2021-04-23 19:06:31');
/*!40000 ALTER TABLE `stud_assignment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `stud_class`
--

DROP TABLE IF EXISTS `stud_class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `stud_class` (
  `sid` int NOT NULL,
  `sub_class_id` int NOT NULL,
  KEY `sid` (`sid`),
  KEY `sub_class_id` (`sub_class_id`),
  CONSTRAINT `stud_class_ibfk_1` FOREIGN KEY (`sid`) REFERENCES `students` (`sid`),
  CONSTRAINT `stud_class_ibfk_2` FOREIGN KEY (`sub_class_id`) REFERENCES `sub_class` (`sub_class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `stud_class`
--

LOCK TABLES `stud_class` WRITE;
/*!40000 ALTER TABLE `stud_class` DISABLE KEYS */;
INSERT INTO `stud_class` VALUES (19103057,29),(19103057,33),(19103057,33),(19103057,33),(19103057,33),(19103057,33),(19103057,33),(19103057,33),(19103057,33),(19103057,33),(19103057,33),(19103057,33),(19103057,33),(19103057,33),(19103057,34),(19103057,37);
/*!40000 ALTER TABLE `stud_class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `students`
--

DROP TABLE IF EXISTS `students`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `students` (
  `sid` int NOT NULL,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  PRIMARY KEY (`sid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `students`
--

LOCK TABLES `students` WRITE;
/*!40000 ALTER TABLE `students` DISABLE KEYS */;
INSERT INTO `students` VALUES (19103057,'Shubh Ashish','shubhashish.bt19cse@pec.edu.in');
/*!40000 ALTER TABLE `students` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_class`
--

DROP TABLE IF EXISTS `sub_class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_class` (
  `sub_class_id` int NOT NULL AUTO_INCREMENT,
  `class_id` varchar(10) NOT NULL,
  `grp_no` int NOT NULL,
  PRIMARY KEY (`sub_class_id`),
  KEY `class_id` (`class_id`),
  CONSTRAINT `sub_class_ibfk_1` FOREIGN KEY (`class_id`) REFERENCES `classrooms` (`classroom_id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_class`
--

LOCK TABLES `sub_class` WRITE;
/*!40000 ALTER TABLE `sub_class` DISABLE KEYS */;
INSERT INTO `sub_class` VALUES (27,'dltpntgc',1),(28,'dltpntgc',2),(29,'dltpntgc',3),(30,'dltpntgc',4),(31,'dltpntgc',5),(32,'dltpntgc',6),(33,'nfvwyzqb',1),(34,'nfvwyzqb',2),(35,'fysoirzb',1),(36,'fysoirzb',2),(37,'fysoirzb',3),(38,'fysoirzb',4),(39,'fysoirzb',5),(40,'fysoirzb',6);
/*!40000 ALTER TABLE `sub_class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `sub_resources`
--

DROP TABLE IF EXISTS `sub_resources`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `sub_resources` (
  `sub_class_id` int DEFAULT NULL,
  `resource_id` int DEFAULT NULL,
  KEY `sub_class_id` (`sub_class_id`),
  KEY `resource_id` (`resource_id`),
  CONSTRAINT `sub_resources_ibfk_1` FOREIGN KEY (`sub_class_id`) REFERENCES `sub_class` (`sub_class_id`),
  CONSTRAINT `sub_resources_ibfk_2` FOREIGN KEY (`resource_id`) REFERENCES `resources` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `sub_resources`
--

LOCK TABLES `sub_resources` WRITE;
/*!40000 ALTER TABLE `sub_resources` DISABLE KEYS */;
/*!40000 ALTER TABLE `sub_resources` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teach_class`
--

DROP TABLE IF EXISTS `teach_class`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teach_class` (
  `tid` int NOT NULL,
  `sub_class_id` int NOT NULL,
  KEY `tid` (`tid`),
  KEY `sub_class_id` (`sub_class_id`),
  CONSTRAINT `teach_class_ibfk_1` FOREIGN KEY (`tid`) REFERENCES `teachers` (`tid`),
  CONSTRAINT `teach_class_ibfk_2` FOREIGN KEY (`sub_class_id`) REFERENCES `sub_class` (`sub_class_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teach_class`
--

LOCK TABLES `teach_class` WRITE;
/*!40000 ALTER TABLE `teach_class` DISABLE KEYS */;
INSERT INTO `teach_class` VALUES (6,27),(6,28),(6,29),(6,30),(6,31),(6,32),(6,33),(6,34),(6,35),(6,36),(6,37),(6,38),(6,39),(6,40);
/*!40000 ALTER TABLE `teach_class` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `teachers`
--

DROP TABLE IF EXISTS `teachers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `teachers` (
  `tid` int NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `email` varchar(150) NOT NULL,
  PRIMARY KEY (`tid`),
  UNIQUE KEY `email` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `teachers`
--

LOCK TABLES `teachers` WRITE;
/*!40000 ALTER TABLE `teachers` DISABLE KEYS */;
INSERT INTO `teachers` VALUES (6,'TiTa Classroom Management System','adm.tita.cms@gmail.com');
/*!40000 ALTER TABLE `teachers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `timetable`
--

DROP TABLE IF EXISTS `timetable`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `timetable` (
  `tt_id` int NOT NULL AUTO_INCREMENT,
  `sub_class_id` int DEFAULT NULL,
  `start_time` time DEFAULT NULL,
  `end_time` time DEFAULT NULL,
  `day` varchar(10) DEFAULT NULL,
  `type` varchar(10) DEFAULT NULL,
  PRIMARY KEY (`tt_id`),
  KEY `sub_class_id` (`sub_class_id`),
  CONSTRAINT `timetable_ibfk_1` FOREIGN KEY (`sub_class_id`) REFERENCES `sub_class` (`sub_class_id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `timetable`
--

LOCK TABLES `timetable` WRITE;
/*!40000 ALTER TABLE `timetable` DISABLE KEYS */;
INSERT INTO `timetable` VALUES (9,27,'09:00:00','10:00:00','Monday','Lecture');
/*!40000 ALTER TABLE `timetable` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2021-04-24  9:39:49
