-- MySQL dump 10.14  Distrib 5.5.60-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: Jane
-- ------------------------------------------------------
-- Server version	5.5.60-MariaDB

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
-- Table structure for table `admin`
--

DROP TABLE IF EXISTS `admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `admin` (
  `id` int(11) NOT NULL,
  `UserName` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `UserPass` varchar(12) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (2,'a','0cc175b9c0'),(4,'admin','e10abc3949');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `sort` varchar(10) COLLATE utf8_unicode_ci NOT NULL,
  `title` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `author` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `date` datetime NOT NULL,
  `content` text COLLATE utf8_unicode_ci NOT NULL,
  `Uid` int(11) NOT NULL,
  `username` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`),
  KEY `article_ibfk_1` (`Uid`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`Uid`) REFERENCES `user` (`Uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'美食','一些能吃掉黑眼圈的最佳食物','林夕','2018-12-03 15:41:09','这里推荐四种食物，可以让你省却因购买昂贵奢侈的眼霜、眼膜而“大出血”，仅需在日常饮食中增加其摄入量，就能使你和黑眼圈轻松说拜拜了。鸡蛋、芝麻、胡萝卜、海带',2,'lx'),(2,'情感','减肥，那是光进来的地方','花颜','2018-08-22 15:42:42','来说说关于爱、成长和意义。如果说，减肥需要一个终极理由的话，我认为，那就只有爱了。心理学上说，一个人之所以会浪费时间，挥霍健康，是因为他没有感受到足够被爱，于是觉得自己的生命毫无价值。我们也许都曾经想尽办法争取过别人的关注，也许不遗余力地付出过，最终，无奈的我们，只能选择自我放逐，来逃避那些不被爱的痛苦。假如，全世界真的没有人爱你了。你自己会不会做那个，唯一还爱自己的人？我们只能做一个饥肠辘辘的人，只想着向别人讨要食物，却拿不出食物，喂饱自己和帮助别人吗？自爱，然后爱人，方能被爱，难道不是这样吗？而另一种可能的情况是，我们把随心所欲当成了自爱和自由。好几年前，有一种长的四四方方的西瓜，我听说是为了运输方便，所以弄个铁盒子给套住，等西瓜长大了，就会长成方形的，也不知道是不是真的。我不知道，我们会不会也是通过这样方式成长起来的。《今日简史》中说，现在的人类，已经如同曾经被自己驯化过的家畜，我们就像人工培育的奶牛，性格温顺，乳量惊人，但在其他方面远远不及其野生祖先，没那么灵活，没那么好奇，也没那么懂得变通。今天的我们，饱食终日，却又焦虑不安，欲壑难填。我们以为跟随自己的欲望，就是自爱跟自由，殊不知，这些欲望，甚至有可能是被驯化出来的，因为世界需要这样的我们。认真的减一次肥，放下对食物和欲望的执着，或者你才能感受到自己真正想要的是什么。',1,'hy'),(3,'旅行','这个世界很大，愿你们都去看看','李梅','2018-05-23 09:43:26','从06年第一次出国开始，整整过去了11年的时间。期间不知不觉走过了全世界6大洲55个国家。住过青旅十人间，也住过五星级酒店。吃过美味路边摊，也吃过米其林。体验过开飞机，也徒步过百内W环线。跟家人、朋友、恋人旅行过，也享受过很多次独自一人的旅行。看到过乌尤尼盐湖的天空之境，也参观过乌干达坎帕拉的贫民窟。有过狂喜，也有过挫折，但唯一不变的是对这个世界的热爱和欣喜。',5,'lm');
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `back`
--

DROP TABLE IF EXISTS `back`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `back` (
  `Uid` int(11) NOT NULL,
  `username` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `backContent` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `backDate` datetime DEFAULT NULL,
  `name` varchar(24) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`Uid`),
  CONSTRAINT `back_ibfk_1` FOREIGN KEY (`Uid`) REFERENCES `user` (`Uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `back`
--

LOCK TABLES `back` WRITE;
/*!40000 ALTER TABLE `back` DISABLE KEYS */;
INSERT INTO `back` VALUES (1,'hy','很喜欢','2018-12-05 00:00:00','花颜'),(2,'lx','支持','2018-12-12 00:00:00','林夕'),(3,'ly','推广','2018-12-11 00:00:00','林一');
/*!40000 ALTER TABLE `back` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `chat`
--

DROP TABLE IF EXISTS `chat`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `chat` (
  `Uid` int(11) NOT NULL,
  `username` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `usernameTo` varchar(24) COLLATE utf8_unicode_ci DEFAULT NULL,
  `chatContent` mediumtext COLLATE utf8_unicode_ci,
  `chatDate` datetime DEFAULT NULL,
  `name` varchar(24) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`Uid`),
  CONSTRAINT `chat_ibfk_1` FOREIGN KEY (`Uid`) REFERENCES `user` (`Uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `chat`
--

LOCK TABLES `chat` WRITE;
/*!40000 ALTER TABLE `chat` DISABLE KEYS */;
INSERT INTO `chat` VALUES (1,'hy','2','你好','2018-12-05 10:20:35','花颜'),(2,'lx','1','你好','2018-12-12 10:21:45','林夕'),(3,'ly','4','认识你很高兴','2018-12-07 21:05:41','林一'),(4,'zy','3','我也是','2018-12-07 21:06:13','左一'),(5,'lm','2','hi','2018-12-12 15:16:55','李梅');
/*!40000 ALTER TABLE `chat` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `collect`
--

DROP TABLE IF EXISTS `collect`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `collect` (
  `Uid` int(11) NOT NULL,
  `username` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `trendsId` int(11) NOT NULL,
  `collectDate` datetime DEFAULT NULL,
  PRIMARY KEY (`trendsId`,`Uid`),
  KEY `Uid` (`Uid`),
  CONSTRAINT `collect_ibfk_1` FOREIGN KEY (`Uid`) REFERENCES `user` (`Uid`),
  CONSTRAINT `collect_ibfk_2` FOREIGN KEY (`trendsId`) REFERENCES `trends` (`trendsId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `collect`
--

LOCK TABLES `collect` WRITE;
/*!40000 ALTER TABLE `collect` DISABLE KEYS */;
INSERT INTO `collect` VALUES (2,'lx',1,'2018-12-12 10:30:31'),(1,'hy',2,'2018-12-05 00:00:00'),(3,'ly',2,'2018-12-11 19:25:21');
/*!40000 ALTER TABLE `collect` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `follower`
--

DROP TABLE IF EXISTS `follower`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `follower` (
  `Uid` int(11) NOT NULL,
  `username` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `fid` int(11) DEFAULT NULL,
  `name` varchar(24) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`Uid`),
  CONSTRAINT `follower_ibfk_1` FOREIGN KEY (`Uid`) REFERENCES `user` (`Uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `follower`
--

LOCK TABLES `follower` WRITE;
/*!40000 ALTER TABLE `follower` DISABLE KEYS */;
INSERT INTO `follower` VALUES (1,'hy',2,'花颜'),(2,'lx',3,'林夕'),(3,'ly',1,'林一'),(4,'zy',1,'左一');
/*!40000 ALTER TABLE `follower` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keyWord`
--

DROP TABLE IF EXISTS `keyWord`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `keyWord` (
  `trendsId` int(11) NOT NULL,
  `keyContent` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`trendsId`),
  CONSTRAINT `keyWord_ibfk_1` FOREIGN KEY (`trendsId`) REFERENCES `trends` (`trendsId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keyWord`
--

LOCK TABLES `keyWord` WRITE;
/*!40000 ALTER TABLE `keyWord` DISABLE KEYS */;
INSERT INTO `keyWord` VALUES (1,'减肥'),(2,'改善黑眼圈'),(3,'便捷早餐便当'),(4,'心灵鸡汤'),(5,'旅游游记');
/*!40000 ALTER TABLE `keyWord` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `target`
--

DROP TABLE IF EXISTS `target`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `target` (
  `Uid` int(11) NOT NULL,
  `username` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `tid` int(11) DEFAULT NULL,
  `target` int(11) DEFAULT NULL,
  `targetRelation` char(5) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`Uid`),
  KEY `target_ibfk_2` (`tid`),
  CONSTRAINT `target_ibfk_2` FOREIGN KEY (`tid`) REFERENCES `user` (`Uid`),
  CONSTRAINT `target_ibfk_1` FOREIGN KEY (`Uid`) REFERENCES `user` (`Uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `target`
--

LOCK TABLES `target` WRITE;
/*!40000 ALTER TABLE `target` DISABLE KEYS */;
INSERT INTO `target` VALUES (1,'hy',2,10,'互相关注'),(2,'lx',1,5,'互相关注'),(3,'ly',2,2,'左关注右'),(4,'zy',3,6,'左关注右'),(5,'lm',2,6,'右关注左');
/*!40000 ALTER TABLE `target` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trends`
--

DROP TABLE IF EXISTS `trends`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trends` (
  `Uid` int(11) NOT NULL,
  `username` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `trendsId` int(11) NOT NULL,
  `audioName` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `imageName` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `articleName` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `star` int(11) DEFAULT NULL,
  `articleContent` text COLLATE utf8_unicode_ci,
  `vedioName` varchar(50) COLLATE utf8_unicode_ci DEFAULT NULL,
  `name` varchar(24) COLLATE utf8_unicode_ci DEFAULT NULL,
  `audioHttp` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `vedioHttp` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`trendsId`),
  KEY `Uid` (`Uid`),
  CONSTRAINT `trends_ibfk_1` FOREIGN KEY (`Uid`) REFERENCES `user` (`Uid`),
  CONSTRAINT `trends_ibfk_2` FOREIGN KEY (`Uid`) REFERENCES `user` (`Uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trends`
--

LOCK TABLES `trends` WRITE;
/*!40000 ALTER TABLE `trends` DISABLE KEYS */;
INSERT INTO `trends` VALUES (1,'hy',1,'My Sunshine','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=84#did83','减肥，那是光进来的地方',10,'来说说关于爱、成长和意义。如果说，减肥需要一个终极理由的话，我认为，那就只有爱了。心理学上说，一个人之所以会浪费时间，挥霍健康，是因为他没有感受到足够被爱，于是觉得自己的生命毫无价值。我们也许都曾经想尽办法争取过别人的关注，也许不遗余力地付出过，最终，无奈的我们，只能选择自我放逐，来逃避那些不被爱的痛苦。假如，全世界真的没有人爱你了。你自己会不会做那个，唯一还爱自己的人？我们只能做一个饥肠辘辘的人，只想着向别人讨要食物，却拿不出食物，喂饱自己和帮助别人吗？自爱，然后爱人，方能被爱，难道不是这样吗？而另一种可能的情况是，我们把随心所欲当成了自爱和自由。好几年前，有一种长的四四方方的西瓜，我听说是为了运输方便，所以弄个铁盒子给套住，等西瓜长大了，就会长成方形的，也不知道是不是真的。我不知道，我们会不会也是通过这样方式成长起来的。《今日简史》中说，现在的人类，已经如同曾经被自己驯化过的家畜，我们就像人工培育的奶牛，性格温顺，乳量惊人，但在其他方面远远不及其野生祖先，没那么灵活，没那么好奇，也没那么懂得变通。今天的我们，饱食终日，却又焦虑不安，欲壑难填。我们以为跟随自己的欲望，就是自爱跟自由，殊不知，这些欲望，甚至有可能是被驯化出来的，因为世界需要这样的我们。认真的减一次肥，放下对食物和欲望的执着，或者你才能感受到自己真正想要的是什么。',NULL,'花颜','http://www.yue365.com/play/993/342293.shtml',NULL),(2,'lx',2,'Cry On My Shoulder','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=591#did590','一些能吃掉黑眼圈的最佳食物',50,'这里推荐四种食物，可以让你省却因购买昂贵奢侈的眼霜、眼膜而“大出血”，仅需在日常饮食中增加其摄入量，就能使你和黑眼圈轻松说拜拜了。鸡蛋、芝麻、胡萝卜、海带',NULL,'林夕','http://bd.kuwo.cn/yue365/CryOnMyShoulder/DeutschlandSuchtDenSuperstar',NULL),(3,'ly',3,'Faded','','上班族如何在30分钟内做出丰富的便当早餐',60,'1.一起床就烧热水，烧水期间把食材洗干净备用。\r\n2.水烧好后用先将米饭放入电饭煲里煮，大概20分钟可以完成。（用热水煮饭会比较快）\r\n3.煮饭空隙可以炒菜或者做费时间的菜，这样饭做好后，菜也就好了。\r\n4.烤鸡腿、鸡米花这类的提前一个晚上做，第二天复烤即可。',NULL,'林一','http://www.yue365.com/play/25467/398883.shtml',NULL),(4,'zy',4,'','','不评论就是最大的善意',80,'我本不关注娱乐圈的事，特别是报道明星的家长里短，谁谁谁出轨了，谁又和谁在网上打口水战了，我其实更多是不听、不看、不关注。众口铄金，网友过于关注，只会让事情节外生枝。慕容素衣写的这本《淡定是最好的优雅》，是一本随笔，书里写的是作者对一些女明星的看法。赵雅芝、沈殿霞、林青霞、刘嘉玲、翁美玲，等等，可以说是专门写给女人看的一本鸡汤随笔。作者的部分言论我不太赞同，但是书的封面和各种水彩植物插图真的很美、很素、很淡雅。','肖申克的救赎','左一',NULL,'https://www.jianshu.com/p/f454bf0c2c3b'),(5,'lm',5,'','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=11#did10','这个世界很大，愿你们都去看看',123,'从06年第一次出国开始，整整过去了11年的时间。期间不知不觉走过了全世界6大洲55个国家。住过青旅十人间，也住过五星级酒店。吃过美味路边摊，也吃过米其林。体验过开飞机，也徒步过百内W环线。跟家人、朋友、恋人旅行过，也享受过很多次独自一人的旅行。看到过乌尤尼盐湖的天空之境，也参观过乌干达坎帕拉的贫民窟。有过狂喜，也有过挫折，但唯一不变的是对这个世界的热爱和欣喜。','毒液','李梅',NULL,'https://www.jianshu.com/p/adbf423d62b2');
/*!40000 ALTER TABLE `trends` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trendsReply`
--

DROP TABLE IF EXISTS `trendsReply`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trendsReply` (
  `Uid` int(11) NOT NULL,
  `username` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `trendsReplyId` int(11) NOT NULL,
  `replyDate` datetime DEFAULT NULL,
  `replyContent` mediumtext COLLATE utf8_unicode_ci,
  `star` int(11) DEFAULT NULL,
  `name` varchar(24) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`trendsReplyId`,`Uid`),
  KEY `Uid` (`Uid`),
  CONSTRAINT `trendsReply_ibfk_1` FOREIGN KEY (`trendsReplyId`) REFERENCES `trends` (`trendsId`),
  CONSTRAINT `trendsReply_ibfk_2` FOREIGN KEY (`Uid`) REFERENCES `user` (`Uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trendsReply`
--

LOCK TABLES `trendsReply` WRITE;
/*!40000 ALTER TABLE `trendsReply` DISABLE KEYS */;
INSERT INTO `trendsReply` VALUES (1,'hy',2,'2018-12-05 00:00:00','很喜欢',10,'林一'),(2,'lx',2,'2018-12-12 00:00:00','支持',200,'林夕'),(3,'ly',3,'2018-12-11 00:00:00','有效',23,'林一'),(4,'zy',4,'2018-12-07 00:00:00','有用',56,'左一'),(5,'lm',5,'2018-12-09 00:00:00','收藏',11,'李梅');
/*!40000 ALTER TABLE `trendsReply` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `trendsStar`
--

DROP TABLE IF EXISTS `trendsStar`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `trendsStar` (
  `Uid` int(11) NOT NULL,
  `username` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `trendsId` int(11) NOT NULL,
  `starDate` datetime NOT NULL,
  `name` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`trendsId`),
  KEY `Uid` (`Uid`),
  CONSTRAINT `trendsStar_ibfk_1` FOREIGN KEY (`Uid`) REFERENCES `user` (`Uid`),
  CONSTRAINT `trendsStar_ibfk_2` FOREIGN KEY (`trendsId`) REFERENCES `trends` (`trendsId`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `trendsStar`
--

LOCK TABLES `trendsStar` WRITE;
/*!40000 ALTER TABLE `trendsStar` DISABLE KEYS */;
INSERT INTO `trendsStar` VALUES (1,'hy',1,'2018-12-05 00:00:00','花颜'),(2,'lx',2,'2018-12-12 00:00:00','林夕'),(3,'ly',3,'2018-12-11 00:00:00','林一'),(4,'zy',4,'2018-12-07 00:00:00','左一'),(5,'lm',5,'2018-12-09 00:00:00','李梅');
/*!40000 ALTER TABLE `trendsStar` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `user` (
  `Uid` int(11) NOT NULL,
  `username` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  `constellation` varchar(13) COLLATE utf8_unicode_ci DEFAULT NULL,
  `target` int(11) NOT NULL,
  `password` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `gender` char(2) COLLATE utf8_unicode_ci NOT NULL,
  `avatar` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `area` varchar(100) COLLATE utf8_unicode_ci NOT NULL,
  `phoneNumber` char(11) COLLATE utf8_unicode_ci DEFAULT NULL,
  `myReply` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `grade` int(11) NOT NULL,
  `followers` int(11) DEFAULT NULL,
  `trendsTitle` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `bgImage` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `qq` varchar(13) COLLATE utf8_unicode_ci DEFAULT NULL,
  `weChat` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `web` varchar(30) COLLATE utf8_unicode_ci DEFAULT NULL,
  `regtime` datetime DEFAULT NULL,
  `name` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Uid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'hy',18,'水瓶座',10,'1234567','女','http://pic.sogou.com/d?query=%CE%A2%D0%C5%D3%C3%BB%A7%CD%B7%CF%F1+%CD%BC%C6%AC&st=255&mode=255&did=15#did14','石家庄','15336525986','很喜欢你',2,5,'减肥，那时光进来的地方','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=84#did83','花颜','花颜','花颜','2018-03-08 14:48:44','花颜'),(2,'lx',30,'射手座',30,'1314258','男','http://pic.sogou.com/d?query=%CE%A2%D0%C5%D3%C3%BB%A7%CD%B7%CF%F1+%CD%BC%C6%AC&st=255&mode=255&did=152#did151','北京','15669852364','支持你',14,8000,'一些能能吃掉黑眼圈的最佳食物','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=84#did104','林夕','林夕','林夕','2017-10-12 14:48:58','林夕'),(3,'ly',20,'白羊座',20,'1658947','女','http://pic.sogou.com/d?query=%CE%A2%D0%C5%D3%C3%BB%A7%CD%B7%CF%F1+%CD%BC%C6%AC&st=255&mode=255&did=151#did150','上海','15698241539','一起去玩',3,4,'上班族如何在30分钟内做出丰富的便当早餐','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=11#did10','林一','林一','林一','2018-10-03 19:45:10','林一'),(4,'zy',22,'双子座',60,'a1b2c3d','男','http://pic.sogou.com/d?query=%E5%8D%A1%E9%80%9A+%E5%A4%B4%E5%83%8F&page=1&did=3&st=191&phu=http%3A%2F%2Fimg03.store.sogou.com%2Fapp%2Fa%2F10010016%2F20b1fadb415babf4726aa34fcd2c7cdc#did19','厦门','15528964532','吃饭',5,8,'不评论就是最大的善意','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=45#did44','左一','左一','左一','2018-10-11 08:49:22','左一'),(5,'lm',36,'金牛座',50,'ebscfd','女','http://pic.sogou.com/d?query=%E5%8D%A1%E9%80%9A+%E5%A4%B4%E5%83%8F&page=1&did=3&st=191&phu=http%3A%2F%2Fimg03.store.sogou.com%2Fapp%2Fa%2F10010016%2F20b1fadb415babf4726aa34fcd2c7cdc#did2','成都','16952384765','旅游',20,6,'这个世界很大，愿你们都去看看','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=591#did590','李梅','李梅','李梅','2016-12-15 11:49:35','李梅');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-12-12 16:46:19
