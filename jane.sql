-- MySQL dump 10.14  Distrib 5.5.60-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: jane
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
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `UserName` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  `UserPass` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `admin`
--

LOCK TABLES `admin` WRITE;
/*!40000 ALTER TABLE `admin` DISABLE KEYS */;
INSERT INTO `admin` VALUES (1,'a','0cc175b9c0f1b6a831c399e269772661'),(2,'admin','e10adc3949ba59abbe56e057f20f883e'),(3,'d','8277e0910d750195b448797616e091ad');
/*!40000 ALTER TABLE `admin` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `sort` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `title` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
  `author` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `content` text COLLATE utf8_unicode_ci,
  `Uid` int(11) DEFAULT NULL,
  `star1` int(12) DEFAULT NULL,
  `comments` int(12) DEFAULT NULL,
  `transmits` int(12) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `article_ibfk_1` (`Uid`),
  CONSTRAINT `article_ibfk_1` FOREIGN KEY (`Uid`) REFERENCES `user` (`Uid`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'旅行','美好的世界','林夕','2018-12-03 15:41:09','这个世界真的很大，想自己去看一看这个世界到底有多么的美好，是不是自己心中所想的那样，看到这些，心里可能会舒畅的多，毕竟看见美好的景色会把烦心的事暂时忘却',2,12,20,14),(2,'情感','减肥，那是光进来的地方','花颜','2018-12-17 15:42:42','来说说关于爱、成长和意义。如果说，减肥需要一个终极理由的话，我认为，那就只有爱了。心理学上说，一个人之所以会浪费时间，挥霍健康，是因为他没有感受到足够被爱，于是觉得自己的生命毫无价值。我们也许都曾经想尽办法争取过别人的关注，也许不遗余力地付出过，最终，无奈的我们，只能选择自我放逐，来逃避那些不被爱的痛苦。假如，全世界真的没有人爱你了。你自己会不会做那个，唯一还爱自己的人？我们只能做一个饥肠辘辘的人，只想着向别人讨要食物，却拿不出食物，喂饱自己和帮助别人吗？自爱，然后爱人，方能被爱，难道不是这样吗？而另一种可能的情况是，我们把随心所欲当成了自爱和自由。好几年前，有一种长的四四方方的西瓜，我听说是为了运输方便，所以弄个铁盒子给套住，等西瓜长大了，就会长成方形的，也不知道是不是真的。我不知道，我们会不会也是通过这样方式成长起来的。《今日简史》中说，现在的人类，已经如同曾经被自己驯化过的家畜，我们就像人工培育的奶牛，性格温顺，乳量惊人，但在其他方面远远不及其野生祖先，没那么灵活，没那么好奇，也没那么懂得变通。今天的我们，饱食终日，却又焦虑不安，欲壑难填。我们以为跟随自己的欲望，就是自爱跟自由，殊不知，这些欲望，甚至有可能是被驯化出来的，因为世界需要这样的我们。认真的减一次肥，放下对食物和欲望的执着，或者你才能感受到自己真正想要的是什么。',1,3,8,65),(3,'旅行','这个','李梅','2018-11-23 09:43:26','从06年第一次出国开始，整整过去了11年的时间。期间不知不觉走过了全世界6大洲55个国家。住过青旅十人间，也住过五星级酒店。吃过美味路边摊，也吃过米其林。体验过开飞机，也徒步过百内W环线。跟家人、朋友、恋人旅行过，也享受过很多次独自一人的旅行。看到过乌尤尼盐湖的天空之境，也参观过乌干达坎帕拉的贫民窟。有过狂喜，也有过挫折，但唯一不变的是对这个世界的热爱。',5,34,53,21);
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
INSERT INTO `back` VALUES (1,'hy','很喜欢','2018-12-05 00:00:00','花颜'),(3,'xiongda','界面还需要继续优化','2018-12-17 14:19:01','熊大'),(4,'xionger','功能还不太完善','2018-12-17 14:43:39','熊二');
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
-- Table structure for table `img`
--

DROP TABLE IF EXISTS `img`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `img` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `img` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `img`
--

LOCK TABLES `img` WRITE;
/*!40000 ALTER TABLE `img` DISABLE KEYS */;
/*!40000 ALTER TABLE `img` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `img_admin`
--

DROP TABLE IF EXISTS `img_admin`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `img_admin` (
  `id` int(10) NOT NULL AUTO_INCREMENT,
  `img` varchar(64) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `img_admin`
--

LOCK TABLES `img_admin` WRITE;
/*!40000 ALTER TABLE `img_admin` DISABLE KEYS */;
INSERT INTO `img_admin` VALUES (5,'/imguser/0.25340475133800244.jpg');
/*!40000 ALTER TABLE `img_admin` ENABLE KEYS */;
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
-- Table structure for table `rec_article`
--

DROP TABLE IF EXISTS `rec_article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!40101 SET character_set_client = utf8 */;
CREATE TABLE `rec_article` (
  `id` int(12) NOT NULL AUTO_INCREMENT,
  `sort` varchar(64) DEFAULT NULL,
  `title` varchar(64) DEFAULT NULL,
  `author` varchar(24) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  `content` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rec_article`
--

LOCK TABLES `rec_article` WRITE;
/*!40000 ALTER TABLE `rec_article` DISABLE KEYS */;
INSERT INTO `rec_article` VALUES (1,'旅行','美好的时光','熊大','2018-12-19 09:01:49','我想去很多地方去旅行，想去西贡，这个安安呆过的城市，其实挺喜欢一个人出去走走，因为这样我会有安全感。我不打搅别人，同时别人也不吵我，我想我的生活会很安静的。安静而那么美好。热闹的时候我可以出去吵闹，安静的时候我可以坐在窗前看看风景。我说我只想要简单平凡的生活。\r\n\r\n　　一个人出去走走，多久在学校压抑的心情有时更 想念外头的阳光，喜欢走在外面的村子里闲闲走走，我会想起小时呆在农村的感觉，其实只是想念那些纯真的生活。塞着耳机晒晒太阳很舒服，尽管十二月份的兰州很冷，每天只有在衣服里取暖，只有在这样慵懒的下午晒晒太阳就会觉得很温暖，其实窝在宿舍的时候是最压抑的，毕竟宿舍里的那些人并不是我们身边真正关心我的人，宿舍里除了电脑游戏充斥着，更多的就是谈论各种私生活，我想我是听着不舒服的，所以躲着一个人出来享享安静。\r\n\r\n　　我是可以一个人四处乱走无拘无束的，习惯了这样随意。未曾会想起这样的自己会孤单，因为不敢想，怕会一发不可收拾。那么忧伤在哪里，其实只是偶尔罢了。忧伤忧伤在宿舍最后会得病，出去走走或许心胸会舒坦点。'),(2,'美食','中国菜系都','林夕','2018-12-19 09:05:01','中国菜肴素有四大风味和八大菜系之说。四大风味是：鲁、川、粤、淮、扬。八大菜系一般是指：山东菜、四川菜、湖南菜、江苏菜、浙江菜、安徽菜、广东菜和福建菜。\r\n\r\n　　粤菜系由广州菜、潮州菜、东江菜三种地方风味组成。广州菜包括珠江三角洲和肇庆、韶关、湛江等地的名食在内。地域最广，用料庞杂，选料精细，技艺精良，善于变化，风味讲究，清而不淡，鲜而不俗，嫩而不生，油而不腻。夏秋力求清淡，冬春偏重浓郁，擅长小炒，要求掌握火候和油温恰到好处。潮汕菜故属闽地，其语言和习俗与闽南相近。'),(3,'情感','对于感情的个人理解','熊二','2018-12-19 09:06:15','最好的感情是随意，却又彼此在意\r\n\r\n　　最好的感情是随意，却又彼此在意；是惬意，却又彼此珍惜。各自独立，而心在一齐；各自呼吸，而爱不分离。\r\n\r\n　　两个人在一齐，最重要的感觉就是舒服。即使默默不语，也是一种默契；纵然两两相望，也是一种惺惺相惜。距离，让思念生出秀丽；懂得，让心灵有了皈依。\r\n\r\n　　很多时候，我们需要的只是一份倾诉，一份聆听。心中的苦只要有人懂，便减少几分。一个拥抱虽简单，却是最暖的依靠；一份聆听虽平常，却是最好的安慰。\r\n\r\n　　理解，是心的认同；感知，是心的相通。真正的感情，就是用一颗心去温暖另一颗心。\r\n\r\n　　有一种朋友不在生活里，却在生命里；有一种陪伴不在身边，却在你心间。那些说不出的话，如果有人懂，就是幸福。\r\n\r\n　　其实我们都不需要太多，孤单时有人陪，无助时有人帮，落泪时有人知，于心灵就是一种温暖，于生命就是一种感动。\r\n\r\n　　四季冷暖，有人叮咛你加衣；生活劳碌，有人嘱咐你休息，足矣。精神有了寄托，委屈能够诉说；心灵有了归宿，人生不再漂泊，情感有了慰藉，生命不再寂寞；纵然只有简单的语言，却体贴暖心。\r\n\r\n　　心灵间的相伴，是灵魂的相连，是精神的取暖。温暖，是心里的一种感受；感动，是生命的一种柔情。身在天涯外，心在咫尺间。\r\n\r\n　　飘过风和雨，才明白不弃的是深爱。走过一段路，经历一些事，才能真正看清一些人。患难时，读懂了人情冷暖；平淡中，体会到缘分善变。'),(4,'旅行','带着忧伤去旅行','光头强','2018-12-19 09:07:11','五月份的天空，没有过多杂质带来的纷扰，没有时空错乱的幻想，干干净净的带给人一种舒适感。坐上车，没有目的的前行，给自己一点空间去放松。我坐上了一辆常坐但很陌生的一辆公交车，不知自己想去哪里。\r\n\r\n　　我也不用害怕自己因为没有想过要去哪里而感到手足无措，哪怕只有一次可以让自己觉得这是一种简单的生活方式，哪怕只有几个钟头的路程，我也能够感受到这段路程中它所带给我的感受。简简单单，不用害怕的一段路程。\r\n\r\n　　我挑了一个不怎么好的一天，天空的颜色慢慢在变化着。好像是在告诉我这一天并不适合外出，会因为天气的原因而感受不到一开始就存在的那些事物的美妙。怕我感受不到大自然对我们的眷恋，怕我会因为天气的原因而去谩骂它。\r\n\r\n　　看着车窗外，灰蓝色的天空带给人一种压抑的感觉，但我的思绪完全不被它所影响。这一段路程，不是我想有就可以有的。我也会珍惜即使天空有点悲伤，我也希望能用自己的快乐去感染它，让它陪我一起分享。');
/*!40000 ALTER TABLE `rec_article` ENABLE KEYS */;
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
  CONSTRAINT `target_ibfk_1` FOREIGN KEY (`Uid`) REFERENCES `user` (`Uid`),
  CONSTRAINT `target_ibfk_2` FOREIGN KEY (`tid`) REFERENCES `user` (`Uid`)
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
  `transmit` int(12) DEFAULT NULL,
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
INSERT INTO `trends` VALUES (1,'hy',1,'My Sunshine','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=84#did83','减肥，那是光进来的地方',10,'来说说关于爱、成长和意义。如果说，减肥需要一个终极理由的话，我认为，那就只有爱了。心理学上说，一个人之所以会浪费时间，挥霍健康，是因为他没有感受到足够被爱，于是觉得自己的生命毫无价值。我们也许都曾经想尽办法争取过别人的关注，也许不遗余力地付出过，最终，无奈的我们，只能选择自我放逐，来逃避那些不被爱的痛苦。假如，全世界真的没有人爱你了。你自己会不会做那个，唯一还爱自己的人？我们只能做一个饥肠辘辘的人，只想着向别人讨要食物，却拿不出食物，喂饱自己和帮助别人吗？自爱，然后爱人，方能被爱，难道不是这样吗？而另一种可能的情况是，我们把随心所欲当成了自爱和自由。好几年前，有一种长的四四方方的西瓜，我听说是为了运输方便，所以弄个铁盒子给套住，等西瓜长大了，就会长成方形的，也不知道是不是真的。我不知道，我们会不会也是通过这样方式成长起来的。《今日简史》中说，现在的人类，已经如同曾经被自己驯化过的家畜，我们就像人工培育的奶牛，性格温顺，乳量惊人，但在其他方面远远不及其野生祖先，没那么灵活，没那么好奇，也没那么懂得变通。今天的我们，饱食终日，却又焦虑不安，欲壑难填。我们以为跟随自己的欲望，就是自爱跟自由，殊不知，这些欲望，甚至有可能是被驯化出来的，因为世界需要这样的我们。认真的减一次肥，放下对食物和欲望的执着，或者你才能感受到自己真正想要的是什么。',NULL,'花颜','http://www.yue365.com/play/993/342293.shtml',NULL,NULL),(2,'lx',2,'Cry On My Shoulder','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=591#did590','一些能吃掉黑眼圈的最佳食物',50,'这里推荐四种食物，可以让你省却因购买昂贵奢侈的眼霜、眼膜而“大出血”，仅需在日常饮食中增加其摄入量，就能使你和黑眼圈轻松说拜拜了。鸡蛋、芝麻、胡萝卜、海带',NULL,'林夕','http://bd.kuwo.cn/yue365/CryOnMyShoulder/DeutschlandSuchtDenSuperstar',NULL,NULL),(3,'ly',3,'Faded','','上班族如何在30分钟内做出丰富的便当早餐',60,'1.一起床就烧热水，烧水期间把食材洗干净备用。\r\n2.水烧好后用先将米饭放入电饭煲里煮，大概20分钟可以完成。（用热水煮饭会比较快）\r\n3.煮饭空隙可以炒菜或者做费时间的菜，这样饭做好后，菜也就好了。\r\n4.烤鸡腿、鸡米花这类的提前一个晚上做，第二天复烤即可。',NULL,'林一','http://www.yue365.com/play/25467/398883.shtml',NULL,NULL),(4,'zy',4,'','','不评论就是最大的善意',80,'我本不关注娱乐圈的事，特别是报道明星的家长里短，谁谁谁出轨了，谁又和谁在网上打口水战了，我其实更多是不听、不看、不关注。众口铄金，网友过于关注，只会让事情节外生枝。慕容素衣写的这本《淡定是最好的优雅》，是一本随笔，书里写的是作者对一些女明星的看法。赵雅芝、沈殿霞、林青霞、刘嘉玲、翁美玲，等等，可以说是专门写给女人看的一本鸡汤随笔。作者的部分言论我不太赞同，但是书的封面和各种水彩植物插图真的很美、很素、很淡雅。','肖申克的救赎','左一',NULL,'https://www.jianshu.com/p/f454bf0c2c3b',NULL),(5,'lm',5,'','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=11#did10','这个世界很大，愿你们都去看看',123,'从06年第一次出国开始，整整过去了11年的时间。期间不知不觉走过了全世界6大洲55个国家。住过青旅十人间，也住过五星级酒店。吃过美味路边摊，也吃过米其林。体验过开飞机，也徒步过百内W环线。跟家人、朋友、恋人旅行过，也享受过很多次独自一人的旅行。看到过乌尤尼盐湖的天空之境，也参观过乌干达坎帕拉的贫民窟。有过狂喜，也有过挫折，但唯一不变的是对这个世界的热爱和欣喜。','毒液','李梅',NULL,'https://www.jianshu.com/p/adbf423d62b2',NULL);
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
  `Uid` int(11) NOT NULL AUTO_INCREMENT,
  `username` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `age` int(11) NOT NULL,
  `constellation` varchar(13) COLLATE utf8_unicode_ci DEFAULT NULL,
  `target` int(11) NOT NULL,
  `password` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `gender` char(2) COLLATE utf8_unicode_ci NOT NULL,
  `img` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
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
  `name` varchar(64) COLLATE utf8_unicode_ci NOT NULL,
  PRIMARY KEY (`Uid`),
  KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'hy',18,'水瓶座',10,'1234567','女','/imguser/1.jpg','石家庄','15336525986','很喜欢你',2,5,'减肥，那时光进来的地方','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=84#did83','花颜','花颜','花颜','2018-03-08 14:48:44','花颜'),(2,'lx',30,'射手座',30,'1314258','男','/imguser/2.jpg','北京','15669852364','支持你',14,8000,'一些能能吃掉黑眼圈的最佳食物','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=84#did104','林夕','林夕','林夕','2017-10-12 14:48:58','林夕'),(3,'ly',20,'白羊座',20,'1658947','女','/imguser/3.jpg','上海','15698241539','一起去玩',3,4,'上班族如何在30分钟内做出丰富的便当早餐','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=11#did10','林一','林一','林一','2018-10-03 19:45:10','林一'),(4,'zy',22,'双子座',60,'a1b2c3d','男','/imguser/4.jpg','厦门','15528964532','吃饭',5,8,'不评论就是最大的善意','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=45#did44','左一','左一','左一','2018-10-11 08:49:22','左一'),(5,'lm',36,'金牛座',50,'ebscfd','女','/imguser/5.jpg','成都','16952384765','旅游',20,6,'这个世界很大，愿你们都去看看','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=591#did590','李梅','李梅','李梅','2016-12-15 11:49:35','李梅'),(6,'mx',20,'处女座',40,'dxt123456','男','/imguser/6.jpg','石家庄','15226591929','挺不错的',5,10,'今天又是美好的一天',NULL,'熊大','熊大','熊大','2018-12-18 09:32:26','熊大'),(7,'lv',20,NULL,0,'','男','/imguser/7.jpg','',NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'2018-12-19 09:50:52','熊二');
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

-- Dump completed on 2018-12-21  8:04:49
