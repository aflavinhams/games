-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: localhost    Database: jogos
-- ------------------------------------------------------
-- Server version	8.0.34

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `jogos`
--

DROP TABLE IF EXISTS `jogos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `jogos` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nome` varchar(250) NOT NULL,
  `descricao` varchar(2000) DEFAULT NULL,
  `tamanho` varchar(6) DEFAULT NULL,
  `plataforma` varchar(45) DEFAULT NULL,
  `classificacao` varchar(20) DEFAULT NULL,
  `genero` varchar(45) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `idjogos_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=58 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `jogos`
--

LOCK TABLES `jogos` WRITE;
/*!40000 ALTER TABLE `jogos` DISABLE KEYS */;
INSERT INTO `jogos` VALUES (46,'Assassin\'s Creed Valhalla','Jogo de ação e aventura baseado na mitologia viking, onde o jogador controla Eivor, um guerreiro viking que invade a Inglaterra.','50 GB','PC, PS4, Xbox One','M18','Ação, Aventura, Mundo Aberto'),(47,'League of Legends','Jogo multiplayer online de batalha em equipe (MOBA), onde duas equipes de campeões competem para destruir a base inimiga.','10 GB','PC','Livre','MOBA'),(48,'Cyberpunk 2077','Jogo de RPG de ação ambientado em um futuro distópico, onde o jogador controla V, um mercenário tentando se tornar uma lenda em Night City.','70 GB','PC, PS5, Xbox Series X','M18','RPG, Ação, Mundo Aberto'),(49,'Among Us','Jogo de dedução social onde jogadores tentam descobrir quem é o impostor entre a tripulação de uma nave espacial.','250 MB','PC, Switch, Mobile','Livre','Party, Multijogador'),(50,'Call of Duty: Modern Warfare','Jogo de tiro em primeira pessoa com campanhas intensas e modos multiplayer, ambientado em cenários militares modernos.','175 GB','PC, PS4, Xbox One','M18','Tiro, Ação'),(57,'ana','ana','ana','ana','ana','ana');
/*!40000 ALTER TABLE `jogos` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-04-09 22:39:31
