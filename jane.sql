-- MySQL dump 10.14  Distrib 5.5.60-MariaDB, for Linux (x86_64)
--
-- Host: localhost    Database: Jane1
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
) ENGINE=InnoDB AUTO_INCREMENT=15 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (1,'旅行','美好的世界','林夕','2018-12-03 15:41:09','这个世界真的很大，想自己去看一看这个世界到底有多么的美好，是不是自己心中所想的那样，看到这些，心里可能会舒畅的多，毕竟看见美好的景色会把烦心的事暂时忘却',2,12,20,14),(2,'情感','减肥，那是光进来的地方','花颜','2018-12-17 15:42:42','来说说关于爱、成长和意义。如果说，减肥需要一个终极理由的话，我认为，那就只有爱了。心理学上说，一个人之所以会浪费时间，挥霍健康，是因为他没有感受到足够被爱，于是觉得自己的生命毫无价值。我们也许都曾经想尽办法争取过别人的关注，也许不遗余力地付出过，最终，无奈的我们，只能选择自我放逐，来逃避那些不被爱的痛苦。假如，全世界真的没有人爱你了。你自己会不会做那个，唯一还爱自己的人？我们只能做一个饥肠辘辘的人，只想着向别人讨要食物，却拿不出食物，喂饱自己和帮助别人吗？自爱，然后爱人，方能被爱，难道不是这样吗？而另一种可能的情况是，我们把随心所欲当成了自爱和自由。好几年前，有一种长的四四方方的西瓜，我听说是为了运输方便，所以弄个铁盒子给套住，等西瓜长大了，就会长成方形的，也不知道是不是真的。我不知道，我们会不会也是通过这样方式成长起来的。《今日简史》中说，现在的人类，已经如同曾经被自己驯化过的家畜，我们就像人工培育的奶牛，性格温顺，乳量惊人，但在其他方面远远不及其野生祖先，没那么灵活，没那么好奇，也没那么懂得变通。今天的我们，饱食终日，却又焦虑不安，欲壑难填。我们以为跟随自己的欲望，就是自爱跟自由，殊不知，这些欲望，甚至有可能是被驯化出来的，因为世界需要这样的我们。认真的减一次肥，放下对食物和欲望的执着，或者你才能感受到自己真正想要的是什么。',1,3,8,65),(3,'旅行','这个','李梅','2018-11-23 09:43:26','从06年第一次出国开始，整整过去了11年的时间。期间不知不觉走过了全世界6大洲55个国家。住过青旅十人间，也住过五星级酒店。吃过美味路边摊，也吃过米其林。体验过开飞机，也徒步过百内W环线。跟家人、朋友、恋人旅行过，也享受过很多次独自一人的旅行。看到过乌尤尼盐湖的天空之境，也参观过乌干达坎帕拉的贫民窟。有过狂喜，也有过挫折，但唯一不变的是对这个世界的热爱。',5,34,53,21),(4,'励志','趁年轻应该多奋斗点','花颜','2018-12-12 15:36:39','正如狄更斯在双城记里所说，现在是最好的年代，也是最坏的年代。因为互联网的出现，降低我们成功的门槛，同时也是因为互联网的出现，让社会的不平等剧烈放大呈现在我们面前。对于前路，我相信趁年轻多奋斗点总是好的。好在经过多年的改革开放的熏陶，社会已经逐渐变成一个多元包容的社会，我们没有必要每个人都当科学家，没有必要每个人都是工程师，也没有必要每个人都是创业者。我们需要起早贪黑的环卫工人，也需要风雨兼程的快递小哥等等。因为我们都在为每个个体更好的生活而奋斗。所以当我们在推送的信息诸如摩拜创始人套现15亿:你的同龄人,正在抛弃你等信息，完全没有必要妄自菲薄，毕竟我们每个人的成长路径不会完全相同。还记得以前一段新闻，煎饼大妈月薪3万，让很多的985、211们觉得读书多年后进入职场后的月薪，却仍远不及大妈。但背后的辛劳，我们又有几人真正想过，也许大妈每天起早贪黑，工作时间可能长达十五六个小时之多，而且不论刮风下雨都不能耽误，否则大妈的收入为零。而985、211们可能很多在宽敞的写字楼里办公，不用日晒雨淋，还有固定的休息日和带薪休假制度。从收入总量来说，可能煎饼大妈完胜大部分985、211们，但单论小时工资来说，985、211却远胜于煎饼大妈。即使援引这样的一个新闻也不是年轻放弃奋斗，日益沉沦的理由，相反，它更应该是一个激励自己奋发图强的动力。近年来，印度电影在中国影院取得了不俗的票房成绩。《摔跤吧，爸爸》通过对印度一名全国摔跤冠军迫于生计问题未能走向更高的平台，在重男轻女的印度社会他通过对两个女儿的摔跤训练先后培养成全国冠军使两个女孩掌握了自己的命运。而另一部印度电影《起跑线》以优质教育资源为题，通过贫穷和富裕两个家庭通过不同方式争夺入学资格的故事的叙述，让我们看到了社会的不公和人性善良的一面。其中一个片段，服装店老板拉吉为获得政府保障贫穷孩子入学资格的名额假装贫民住在贫民区，为了生活不得不天亮之前等待班车乘坐很长时间到工厂上班，并且在工厂内动辄以罚款作为管理制度，连上厕所都受到严格限制。让我想到，除去背景、天赋等条件外，时间是贫困人口唯一能够逆袭人生的武器。但现实是，比穷更可怕的是又穷又忙，这就关闭了穷人改变人生的窗口。因此，贫困得以世袭。正如一篇文章里说的，没有钱，只能叫穷。没有时间，才是真正陷入“困境”。没有钱的穷可能是暂时的，但没有钱又没有时间的穷是长久的。我发现，不只是自己，其实这些年大家都很忙。与朋友以前分处两地时，一年还能聚上几次，现在大家都在同一座城市反而见面的机会越来越少。空虚和穷忙占据了我们普通人大部分的时间，忙于无意义的事务，做着重复单调无法提高的杂务，一旦空闲下来就变得空虚不知道该做什么。坐着发呆很长时间。趁年轻，我们应该多奋斗点，但要持续发力，成功往往是一种优秀的习惯长期坚持的结果。奋斗是一个积极向上的状态，但切忌四处发力，不要给自己安排太满，当我们褪去学生的稚嫩的时候，就应该意识到我们不可能成为一个全才，因此在时间安排上不要排得太满，不要忘记给自己一点缓冲，静下来思考怎样提升自己而不是一味地忙碌。自己才是命运的主宰，愿我们用自律改变生活，用时间重塑人生。',1,8,6,80),(5,'美食','舌尖上的美食：饺子','左一','2018-12-24 15:11:03','我是一个美食爱好者，一直以来非常迷恋《舌尖上的中国》。从第一季开始关注，一直期待着第三季能在2018年春节期间早日与观众见面。每次看到那些鲜艳欲滴的食物，总勾起我的馋意。山西丁村主妇们制作的面食——黄馍馍印象深刻，它让我不由地想起了姥姥在世时常做的饽饽。姥姥做的虽不如电视中那样精巧细致，但那味道深刻地记录在我的味蕾上，永远也不会忘怀。幼时，姥姥做面食，我总会在一边看着，不时发出阵阵惊叹。特别是做菜包子，馅多，皮薄，包时一揉、一捏，做好后很像女孩裙子的花边，栩栩如生。',4,98,1,7),(6,'美食','中国菜系都','林夕','2018-12-19 09:05:01','　　粤菜系由广州菜、潮州菜、东江菜三种地方风味组成。广州菜包括珠江三角洲和肇庆、韶关、湛江等地的名食在内。地域最广，用料庞杂，选料精细，技艺精良，善于变化，风味讲究，清而不淡，鲜而不俗，嫩而不生，油而不腻。夏秋力求清淡，冬春偏重浓郁，擅长小炒，要求掌握火候和油温恰到好处。潮汕菜故属闽地，其语言和习俗与闽南相近',2,89,2,5),(7,'情感','对于感情的个人理解','熊二','2018-12-19 09:06:15','最好的感情是随意，却又彼此在意\r\n\r\n　　最好的感情是随意，却又彼此在意；是惬意，却又彼此珍惜。各自独立，而心在一齐；各自呼吸，而爱不分离。\r\n\r\n　　两个人在一齐，最重要的感觉就是舒服。即使默默不语，也是一种默契；纵然两两相望，也是一种惺惺相惜。距离，让思念生出秀丽；懂得，让心灵有了皈依。\r\n\r\n　　很多时候，我们需要的只是一份倾诉，一份聆听。心中的苦只要有人懂，便减少几分。一个拥抱虽简单，却是最暖的依靠；一份聆听虽平常，却是最好的安慰。\r\n\r\n　　理解，是心的认同；感知，是心的相通。真正的感情，就是用一颗心去温暖另一颗心。\r\n\r\n　　有一种朋友不在生活里，却在生命里；有一种陪伴不在身边，却在你心间。那些说不出的话，如果有人懂，就是幸福。其实我们都不需要太多，孤单时有人陪，无助时有人帮，落泪时有人知，于心灵就是一种温暖，于生命就是一种感动。四季冷暖，有人叮咛你加衣；生活劳碌，有人嘱咐你休息，足矣。精神有了寄托，委屈能够诉说；心灵有了归宿，人生不再漂泊，情感有了慰藉，生命不再寂寞；纵然只有简单的语言，却体贴暖心。心灵间的相伴，是灵魂的相连，是精神的取暖。温暖，是心里的一种感受；感动，是生命的一种柔情。身在天涯外，心在咫尺间。飘过风和雨，才明白不弃的是深爱。走过一段路，经历一些事，才能真正看清一些人。患难时，读懂了人情冷暖；平淡中，体会到缘分善变。',7,54,1,6),(8,'旅行','美好的时光','熊大','2018-12-19 09:01:49','我想去很多地方去旅行，想去西贡，这个安安呆过的城市，其实挺喜欢一个人出去走走，因为这样我会有安全感。我不打搅别人，同时别人也不吵我，我想我的生活会很安静的。安静而那么美好。热闹的时候我可以出去吵闹，安静的时候我可以坐在窗前看看风景。我说我只想要简单平凡的生活。\r\n\r\n　　一个人出去走走，多久在学校压抑的心情有时更 想念外头的阳光，喜欢走在外面的村子里闲闲走走，我会想起小时呆在农村的感觉，其实只是想念那些纯真的生活。塞着耳机晒晒太阳很舒服，尽管十二月份的兰州很冷，每天只有在衣服里取暖，只有在这样慵懒的下午晒晒太阳就会觉得很温暖，其实窝在宿舍的时候是最压抑的，毕竟宿舍里的那些人并不是我们身边真正关心我的人，宿舍里除了电脑游戏充斥着，更多的就是谈论各种私生活，我想我是听着不舒服的，所以躲着一个人出来享享安静。\r\n\r\n　　我是可以一个人四处乱走无拘无束的，习惯了这样随意。未曾会想起这样的自己会孤单，因为不敢想，怕会一发不可收拾。那么忧伤在哪里，其实只是偶尔罢了。忧伤忧伤在宿舍最后会得病，出去走走或许心胸会舒坦点。',6,50,1,9),(9,'旅行','带着忧伤去旅行','光头强','2018-12-19 09:07:11','五月份的天空，没有过多杂质带来的纷扰，没有时空错乱的幻想，干干净净的带给人一种舒适感。坐上车，没有目的的前行，给自己一点空间去放松。我坐上了一辆常坐但很陌生的一辆公交车，不知自己想去哪里。\r\n\r\n　　我也不用害怕自己因为没有想过要去哪里而感到手足无措，哪怕只有一次可以让自己觉得这是一种简单的生活方式，哪怕只有几个钟头的路程，我也能够感受到这段路程中它所带给我的感受。简简单单，不用害怕的一段路程。\r\n\r\n　　我挑了一个不怎么好的一天，天空的颜色慢慢在变化着。好像是在告诉我这一天并不适合外出，会因为天气的原因而感受不到一开始就存在的那些事物的美妙。怕我感受不到大自然对我们的眷恋，怕我会因为天气的原因而去谩骂它。\r\n\r\n　　看着车窗外，灰蓝色的天空带给人一种压抑的感觉，但我的思绪完全不被它所影响。这一段路程，不是我想有就可以有的。我也会珍惜即使天空有点悲伤，我也希望能用自己的快乐去感染它，让它陪我一起分享。',8,26,2,8),(10,'情感','因有阳光，不惧荒凉','左一','2018-12-05 15:14:04','其实无论在世界的哪个地方，只要阳光能照到的地方就有生命的交响，可能是微乎其微的声响，却能代表有律动的乐章，让心不会荒凉，播种了爱的希望土地上终会生长出美丽的花朵，把一个华光灿烂的新世界展现在我们的面前，可以尽情拥抱身边每一个欣喜相逢的朋友与家人，那些曾走失的幸福回归到正途，一个一个安放在人生的站点，让进出站点的时刻都和幸福重逢，举手投足间获得人生圆满的归宿。',4,150,2,3),(11,'旅行','做一个真正心灵自由的人','林夕','2018-12-23 15:18:51','看过很多人说，要来一场说走就走的旅行，但是，旅行，哪有那么简单。从产生去一个地方的念头开始，到真正付诸行动，中间有太多的事、太多的细节需要去考虑，世界不是你想像的模样，没那么多激情、浪漫，更多的是日复一日的单调循环，当你想冲破这种规律，就要做好头破血流的心理预期，否则接踵而至、难以预估的麻烦足以抵消刹那间闪现的渴望。我的眼中，旅行分两种，去看一个人，以及一个人去看。前者的说走就走固然会给对方带去惊喜，但有责任意识的人，或者说会多想一些事的人免不了会多思考一些，这次意料之外的行动会不会给对方带来更多的麻烦、对方惊喜的面庞之下有没有潜藏着更深层次的厌烦、不耐。与其在那么多担心中疲惫，不如给对方足够的时间去准备。这是一种束缚，也是一种尊重。如此，说走就走，还是只适合一个人去看。在闲暇之余，安排好一切，去看看想去的地方，去看看一路上的人、一路上的风景，会想一些事但更多的时候会什么都不想。双眼所见的一切已经占据了全部的脑海，要用很久的时间去回味，去挑选，将最触动人心的画面珍藏。再去回味时，得到的或许是快乐，或许是遗憾，也或许是平静，无论何种，都收获了一种心情，一份心境，因为一个只有你知道的故事，一笔你的财富。将来的某一天，你可以把它分享给任何一个人，不为了炫耀，就只是简单的分享。会在将来，感谢曾经走过一次的自己，让自己的心，多了一些一辈子的东西。如果有人问，这不只有两种吗，还有和朋友基友一起出去呢？我想说的是，旅行和游玩不一样，旅行是去走、去听、去看、去品味，游玩是去玩、去赏、去开心。旅行去的地方不需要有动人的风景，不需要游人如织的证明，哪怕是从小到大看过无数遍的东西，比如我住了十年出租屋的天台，也同样可以是旅行的地点，十年过去，仍旧喜欢头顶的燕子，远处的夕阳。游玩在外，旅行在心。如果，真有这样的一个人，或者是一群人，愿意和你一起旅行，在我看来，便是去看一个人与一个人去看最美的结合，虽是不同的个体，却拥有彼此交融的灵魂，一起走，恍如一人独行。漂亮的符号，在我的憧憬中，有这样一个人，陪你说走就走，才有了旅行最美的内涵。会让你有不被现实的烦恼、他人的不解羁绊的勇气，做一个真正心灵自由的人，一路前行，宛若心灵的朝圣。',2,169,1,8),(12,'美食','舌尖上的中国之冬至篇','光头强','2018-12-16 15:27:19','提到美食，满是色香味，尽是形意养。在冬至这一天，银川有个习俗，这一天要喝粉汤、吃羊肉粉汤饺子。银川人还给羊肉粉汤叫了个特别的名字——“头脑”。羊肉粉汤由蘑菇和羊肉烹饪而成，佐以盐、姜、葱、蒜、辣椒、酱油等调料，汤滚开后放进切好的粉块、泡好的粉条，再加入韭黄、蒜苗、香菜，这样一锅五颜六色的羊肉粉汤就做好了，香气扑鼻，让人垂涎欲滴。关于冬至苏州人吃馄饨，其实还有历史典故。美女西施为了哄吴王开心，做了馄饨，吴王大悦连忙问是什么美食，西施想：这昏君浑浑噩噩混沌不开，便随口应道：“混沌。”后来，为了纪念西施创造的这种美食，苏州人便把馄饨定为冬至节的食物。冬天来一碗皮薄馅大的馄饨，瞬间驱走寒冷。福建厦门人冬至吃姜母鸭。姜母鸭以红面番鸭为原料，用芝麻油将鸭肉炒香后，再加入老姜(姜母)及米酒等炖煮而成。姜母鸭自家做的比较少，因此，冬至一到，就有很多人开始排队买姜母鸭。冬至这天，台湾人民用九层糕祭祖，九层糕用糯米粉捏成鸡、鸭、龟、猪、牛、羊等象征吉祥中意福禄寿的动物，然后用蒸笼分层蒸成，别有一番风味。对广东人来说，冬至甚至是一个比春节还重要的节日。这天，大多数广东人都有“加菜”吃冬至肉的风俗。烧腊是广东人冬至餐桌上必不可少的传统食品。烧腊已经再也不仅仅只有腊肠，腊鱼、腊肉、腊鸭、腊鸡等也被搬上了餐桌，那一煲煲油汪汪、香喷喷的腊味煲仔饭更是轻易地俘虏人们那颗不断追求美味食物的心。驱寒补血气的羊肉可以说是冬季最适合不过的滋补佳品，每年冬至，四川地区的人们都会喝上一碗热腾腾的羊肉汤，炖到泛白的诱人汤汁趁热喝下，软嫩的羊肉佐以酱料入口，鲜到骨子里大概就是这么个意思。在寒冷的冬至，吃上一碗热气腾腾的羊肉，光想象都觉得满足。',8,190,2,4),(13,'情感','恋一座城','李梅','2018-12-01 15:20:42','这里的冬天不是特别的冷，只是夜晚的时候有点微凉。在晚饭后很喜欢和友人漫步在这朦胧的夜色中。漫步在梧桐树下，橘黄色的灯光透过半黄半绿的梧桐树叶闪耀出美丽的光芒。地下散落了一地的叶子，像是一个个沉睡的精灵。我想捡起一只精灵，把它藏进我的背包里，或者是信笺里，但是最终我没有付诸行动。我思索着它们的命运，明天它们还会在这里吗?夜里起风，它们会飞向哪里?抑或是被来往的行人踩进鞋底，抑或是被扫地的大爷阿姨扫进垃圾车里?我在想它们最终的命运可能都是回归大地，也许命运就是一个个轮回，这个谁也不知晓。发现它们我是如此的欢喜，想着想着就嘴角扬起笑容。夜凉如水，抬眼望去，城市的霓虹灯闪烁在氤氲的雾气中，城市上空被薄如蝉翼的雾气包裹着，置身其中似在仙境，似真似幻。大马路上一尘不染，一辆辆汽车疾驰而过也卷不起一丝尘土，倒是卷起一阵冷风。不过到了八点时刻左右，这路上有点冷清，偶有一辆计程车慢悠悠的行驶在马路边上，“空车”二个红色小字在夜色中却是格外显眼。我在路边缓缓行走，被司机以为是这个城市的夜归人，我礼貌的招招手回绝了，继续我的夜色漫步。这个城市的脚步很慢很慢，有时候都使我忘了时光。以为昨天还停留在这里。夜，总是如此的吸引我。这里的夜色真的很美，美到可以忘记一切烦恼。也许曾经是因为某个人来到这里，因此逗留 在这里，徘徊在此地。后来，发现真的爱上了这座城市。没有其他因素，就仅仅是单纯的喜爱。你会发现你已经爱上了这里的一切，每条大街小巷都有走过的痕迹。那棵棵梧桐树每天都在守护着这座城市，可爱的雀儿每天站在枝头载歌载舞。',5,172,1,8),(14,'情感','生命如沫','李梅','2018-11-21 15:23:19','不久前我收到消息，一个朋友突然去世了。他是我以前的同事，他才28岁，也没有结婚，客死异乡……。我心情顿时非常的沉重，人生短暂仓促，谁也没想到年轻的生命会瞬间坠落。这两天，又发生了类似的事。她的亲人，一个年轻的生命也陨落了。从她言谈中，我只感觉到她呼吸的疼痛，语调的悲伤。我也不知道应当如何安慰她才好，生死有命，对于生命的渺小，我早已有颇多的感慨。甚至说，从开始悲痛的哭泣，到悲痛的强忍哭泣，再到麻木的悲痛，这样的过程，就像看透了生命里的东西————人终究无法逃离生死轮回。这些年，身边的亲人离去的离去，悲痛的悲痛。每一次伤心都像在提醒我，要珍惜自己，要珍惜生命，要及时行乐，谁也不知道明天和意外哪一个先来。可是，当我悲痛以后，却也没有改变太多。熬夜还是常态，虽然现在强迫自己一日三餐必须吃，其实吃的并不规律，吃的也很不科学。身边的人，也同样如此。纵然我们都想让自己不但要健康，还要潇洒，也要赚钱。可是生活的不易，让我们都妥协了，我们宁愿用一时的放纵去消散积累在心间的点滴不安，也不愿让那不安留存心底，一天天，一年年累积成山。或许，有时候心情比健康更重要吧?面对生死，我们都有过无数的思考，归根结底:对于生命而言，没有贫穷和富贵之分，纵然你对这个世界有无限的不舍又能怎样呢?面对生死，谁都有不舍，终而还是只能告别。还记得和好朋友调侃:谁都不知道意外和明天哪一个先来，我们彼此之间约定，如果真的有那么一天，我希望，清明时节，偶尔你也会祭奠我。生命坠落如花落，命由天定，生死莫敢测。如果有一天，我也忽然莫名的丢失在这个世界里，大概我也会有诸多的不舍，不舍那些爱着的所有风景，不舍那些点滴的往事，不舍那些幸福的流年。但我希望这个世界，他可以继续美下去，我希望还爱着我的所有人，他们都不要难过，不要悲伤，我的灵魂依然飘渺在这尘世的星空里，看着我所爱的一切。',5,138,1,2);
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
  `star` int(12) DEFAULT NULL,
  `comments` int(12) DEFAULT NULL,
  `reply` text,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `rec_article`
--

LOCK TABLES `rec_article` WRITE;
/*!40000 ALTER TABLE `rec_article` DISABLE KEYS */;
INSERT INTO `rec_article` VALUES (1,'旅行','美好的时光','熊大','2018-12-19 09:01:49','我想去很多地方去旅行，想去西贡，这个安安呆过的城市，其实挺喜欢一个人出去走走，因为这样我会有安全感。我不打搅别人，同时别人也不吵我，我想我的生活会很安静的。安静而那么美好。热闹的时候我可以出去吵闹，安静的时候我可以坐在窗前看看风景。我说我只想要简单平凡的生活。\r\n\r\n　　一个人出去走走，多久在学校压抑的心情有时更 想念外头的阳光，喜欢走在外面的村子里闲闲走走，我会想起小时呆在农村的感觉，其实只是想念那些纯真的生活。塞着耳机晒晒太阳很舒服，尽管十二月份的兰州很冷，每天只有在衣服里取暖，只有在这样慵懒的下午晒晒太阳就会觉得很温暖，其实窝在宿舍的时候是最压抑的，毕竟宿舍里的那些人并不是我们身边真正关心我的人，宿舍里除了电脑游戏充斥着，更多的就是谈论各种私生活，我想我是听着不舒服的，所以躲着一个人出来享享安静。\r\n\r\n　　我是可以一个人四处乱走无拘无束的，习惯了这样随意。未曾会想起这样的自己会孤单，因为不敢想，怕会一发不可收拾。那么忧伤在哪里，其实只是偶尔罢了。忧伤忧伤在宿舍最后会得病，出去走走或许心胸会舒坦点。',50,1,NULL),(2,'美食','中国菜系都','林夕','2018-12-19 09:05:01','中国菜肴素有四大风味和八大菜系之说。四大风味是：鲁、川、粤、淮、扬。八大菜系一般是指：山东菜、四川菜、湖南菜、江苏菜、浙江菜、安徽菜、广东菜和福建菜。\r\n\r\n　　粤菜系由广州菜、潮州菜、东江菜三种地方风味组成。广州菜包括珠江三角洲和肇庆、韶关、湛江等地的名食在内。地域最广，用料庞杂，选料精细，技艺精良，善于变化，风味讲究，清而不淡，鲜而不俗，嫩而不生，油而不腻。夏秋力求清淡，冬春偏重浓郁，擅长小炒，要求掌握火候和油温恰到好处。潮汕菜故属闽地，其语言和习俗与闽南相近。',89,2,NULL),(3,'情感','对于感情的个人理解','熊二','2018-12-19 09:06:15','最好的感情是随意，却又彼此在意\r\n\r\n　　最好的感情是随意，却又彼此在意；是惬意，却又彼此珍惜。各自独立，而心在一齐；各自呼吸，而爱不分离。\r\n\r\n　　两个人在一齐，最重要的感觉就是舒服。即使默默不语，也是一种默契；纵然两两相望，也是一种惺惺相惜。距离，让思念生出秀丽；懂得，让心灵有了皈依。\r\n\r\n　　很多时候，我们需要的只是一份倾诉，一份聆听。心中的苦只要有人懂，便减少几分。一个拥抱虽简单，却是最暖的依靠；一份聆听虽平常，却是最好的安慰。\r\n\r\n　　理解，是心的认同；感知，是心的相通。真正的感情，就是用一颗心去温暖另一颗心。\r\n\r\n　　有一种朋友不在生活里，却在生命里；有一种陪伴不在身边，却在你心间。那些说不出的话，如果有人懂，就是幸福。其实我们都不需要太多，孤单时有人陪，无助时有人帮，落泪时有人知，于心灵就是一种温暖，于生命就是一种感动。四季冷暖，有人叮咛你加衣；生活劳碌，有人嘱咐你休息，足矣。精神有了寄托，委屈能够诉说；心灵有了归宿，人生不再漂泊，情感有了慰藉，生命不再寂寞；纵然只有简单的语言，却体贴暖心。心灵间的相伴，是灵魂的相连，是精神的取暖。温暖，是心里的一种感受；感动，是生命的一种柔情。身在天涯外，心在咫尺间。飘过风和雨，才明白不弃的是深爱。走过一段路，经历一些事，才能真正看清一些人。患难时，读懂了人情冷暖；平淡中，体会到缘分善变。',54,1,NULL),(4,'旅行','带着忧伤去旅行','光头强','2018-12-19 09:07:11','五月份的天空，没有过多杂质带来的纷扰，没有时空错乱的幻想，干干净净的带给人一种舒适感。坐上车，没有目的的前行，给自己一点空间去放松。我坐上了一辆常坐但很陌生的一辆公交车，不知自己想去哪里。\r\n\r\n　　我也不用害怕自己因为没有想过要去哪里而感到手足无措，哪怕只有一次可以让自己觉得这是一种简单的生活方式，哪怕只有几个钟头的路程，我也能够感受到这段路程中它所带给我的感受。简简单单，不用害怕的一段路程。\r\n\r\n　　我挑了一个不怎么好的一天，天空的颜色慢慢在变化着。好像是在告诉我这一天并不适合外出，会因为天气的原因而感受不到一开始就存在的那些事物的美妙。怕我感受不到大自然对我们的眷恋，怕我会因为天气的原因而去谩骂它。\r\n\r\n　　看着车窗外，灰蓝色的天空带给人一种压抑的感觉，但我的思绪完全不被它所影响。这一段路程，不是我想有就可以有的。我也会珍惜即使天空有点悲伤，我也希望能用自己的快乐去感染它，让它陪我一起分享。',26,2,NULL),(5,'美食','舌尖上的美食：饺子','左一','2018-12-24 15:11:03','我是一个美食爱好者，一直以来非常迷恋《舌尖上的中国》。从第一季开始关注，一直期待着第三季能在2018年春节期间早日与观众见面。每次看到那些鲜艳欲滴的食物，总勾起我的馋意。山西丁村主妇们制作的面食——黄馍馍印象深刻，它让我不由地想起了姥姥在世时常做的饽饽。姥姥做的虽不如电视中那样精巧细致，但那味道深刻地记录在我的味蕾上，永远也不会忘怀。幼时，姥姥做面食，我总会在一边看着，不时发出阵阵惊叹。特别是做菜包子，馅多，皮薄，包时一揉、一捏，做好后很像女孩裙子的花边，栩栩如生。\r\n千百年来，中国人从五谷杂粮中获得温饱，而这种碳水化合物营造出的不仅仅是饱腹感，更是替亿万个像姥姥这样的长辈表达了对儿孙的爱。时代在变，观念在变，而中国人传统对家的依赖永远不变。大年夜的饺子锅里依然热气腾腾。我的心被这股热气浸染：无论我走到哪里，飞得多远，都不会忘记家里那碗热气腾腾的饺子。',98,1,NULL),(6,'情感','因有阳光，不惧荒凉','左一','2018-12-05 15:14:04','其实无论在世界的哪个地方，只要阳光能照到的地方就有生命的交响，可能是微乎其微的声响，却能代表有律动的乐章，让心不会荒凉，播种了爱的希望土地上终会生长出美丽的花朵，把一个华光灿烂的新世界展现在我们的面前，可以尽情拥抱身边每一个欣喜相逢的朋友与家人，那些曾走失的幸福回归到正途，一个一个安放在人生的站点，让进出站点的时刻都和幸福重逢，举手投足间获得人生圆满的归宿。\r\n\r\n在满是细小的沙粒中和所有的普通人一样，淹没在人群中渺小而微弱，可是用最朴实的情怀感恩阳光的馈赠，用内心火一样的热爱呵护善良的回声，传递人与人之间朴素的善与美，期待在人心之间架起最美的彩虹，牵手走过风雨的路程，再遇阳光灿烂的日子。是多么幸运，在茫茫人海中有缘相逢，哪怕是刹那还是确认了世间美好的一瞬间，在数学领域是多小的一个概率落在彼此之间，不用刻意去计算将来的对错，今天阳光的照耀已经温暖了许多年之后的心程，若还有什么值得铭记就把相逢的瞬间绘成彩色的图画，把画中的太阳永远留在最明亮的时刻，照亮未来的旅途。从容面对一切的苦难，他乡的孤寂曾是唯一的行李，如今那心中如画的太阳一直高悬在头顶，方知淡定的态度才是智慧的人生，不以物喜不以己悲是自身修养的一个境界，需要融入美的事物，拒绝平庸与粗俗彰显优雅的品格。在生命的长河里，对事物的认知一点一滴堆积着真善美的能量，总是积极乐观的面对遇到的困难和坎坷，把心中向往的光明与太阳的光芒重叠在一起，轻轻吹响明天的号角，出发去没有俗事困扰的清平世界，乐享万物生长的欣欣向荣，感受这一季跳跃的华美乐章，把最美的芳华装入行囊分享给沿途的花开。可曾闻见追逐的风吹来的芬芳，翻飞的花絮让心停留在花的烂漫中，想遗忘的是经历的种种磨难，却更深刻的领悟了半世的滋味来自苦寒的磨砺，惟有高洁的品行才从容走出这样坚实的脚步，引领未来的方向，让每一个荒凉的地方获得阳光的照耀，成就人生巅峰的美丽画卷，徐徐展开破茧成蝶之后的诗意人生。',150,2,NULL),(7,'旅行','做一个真正心灵自由的人，一路前行','林夕','2018-12-23 15:18:51','看过很多人说，要来一场说走就走的旅行，但是，旅行，哪有那么简单。从产生去一个地方的念头开始，到真正付诸行动，中间有太多的事、太多的细节需要去考虑，世界不是你想像的模样，没那么多激情、浪漫，更多的是日复一日的单调循环，当你想冲破这种规律，就要做好头破血流的心理预期，否则接踵而至、难以预估的麻烦足以抵消刹那间闪现的渴望。我的眼中，旅行分两种，去看一个人，以及一个人去看。前者的说走就走固然会给对方带去惊喜，但有责任意识的人，或者说会多想一些事的人免不了会多思考一些，这次意料之外的行动会不会给对方带来更多的麻烦、对方惊喜的面庞之下有没有潜藏着更深层次的厌烦、不耐。与其在那么多担心中疲惫，不如给对方足够的时间去准备。这是一种束缚，也是一种尊重。如此，说走就走，还是只适合一个人去看。在闲暇之余，安排好一切，去看看想去的地方，去看看一路上的人、一路上的风景，会想一些事但更多的时候会什么都不想。双眼所见的一切已经占据了全部的脑海，要用很久的时间去回味，去挑选，将最触动人心的画面珍藏。再去回味时，得到的或许是快乐，或许是遗憾，也或许是平静，无论何种，都收获了一种心情，一份心境，因为一个只有你知道的故事，一笔你的财富。将来的某一天，你可以把它分享给任何一个人，不为了炫耀，就只是简单的分享。会在将来，感谢曾经走过一次的自己，让自己的心，多了一些一辈子的东西。如果有人问，这不只有两种吗，还有和朋友基友一起出去呢？我想说的是，旅行和游玩不一样，旅行是去走、去听、去看、去品味，游玩是去玩、去赏、去开心。旅行去的地方不需要有动人的风景，不需要游人如织的证明，哪怕是从小到大看过无数遍的东西，比如我住了十年出租屋的天台，也同样可以是旅行的地点，十年过去，仍旧喜欢头顶的燕子，远处的夕阳。游玩在外，旅行在心。如果，真有这样的一个人，或者是一群人，愿意和你一起旅行，在我看来，便是去看一个人与一个人去看最美的结合，虽是不同的个体，却拥有彼此交融的灵魂，一起走，恍如一人独行。漂亮的符号，在我的憧憬中，有这样一个人，陪你说走就走，才有了旅行最美的内涵。会让你有不被现实的烦恼、他人的不解羁绊的勇气，做一个真正心灵自由的人，一路前行，宛若心灵的朝圣。',169,1,NULL),(8,'美食','舌尖上的中国之冬至篇','光头强','2018-12-16 15:27:19','提到美食，满是色香味，尽是形意养。在冬至这一天，银川有个习俗，这一天要喝粉汤、吃羊肉粉汤饺子。银川人还给羊肉粉汤叫了个特别的名字——“头脑”。羊肉粉汤由蘑菇和羊肉烹饪而成，佐以盐、姜、葱、蒜、辣椒、酱油等调料，汤滚开后放进切好的粉块、泡好的粉条，再加入韭黄、蒜苗、香菜，这样一锅五颜六色的羊肉粉汤就做好了，香气扑鼻，让人垂涎欲滴。关于冬至苏州人吃馄饨，其实还有历史典故。美女西施为了哄吴王开心，做了馄饨，吴王大悦连忙问是什么美食，西施想：这昏君浑浑噩噩混沌不开，便随口应道：“混沌。”后来，为了纪念西施创造的这种美食，苏州人便把馄饨定为冬至节的食物。冬天来一碗皮薄馅大的馄饨，瞬间驱走寒冷。福建厦门人冬至吃姜母鸭。姜母鸭以红面番鸭为原料，用芝麻油将鸭肉炒香后，再加入老姜(姜母)及米酒等炖煮而成。姜母鸭自家做的比较少，因此，冬至一到，就有很多人开始排队买姜母鸭。冬至这天，台湾人民用九层糕祭祖，九层糕用糯米粉捏成鸡、鸭、龟、猪、牛、羊等象征吉祥中意福禄寿的动物，然后用蒸笼分层蒸成，别有一番风味。对广东人来说，冬至甚至是一个比春节还重要的节日。这天，大多数广东人都有“加菜”吃冬至肉的风俗。烧腊是广东人冬至餐桌上必不可少的传统食品。烧腊已经再也不仅仅只有腊肠，腊鱼、腊肉、腊鸭、腊鸡等也被搬上了餐桌，那一煲煲油汪汪、香喷喷的腊味煲仔饭更是轻易地俘虏人们那颗不断追求美味食物的心。驱寒补血气的羊肉可以说是冬季最适合不过的滋补佳品，每年冬至，四川地区的人们都会喝上一碗热腾腾的羊肉汤，炖到泛白的诱人汤汁趁热喝下，软嫩的羊肉佐以酱料入口，鲜到骨子里大概就是这么个意思。在寒冷的冬至，吃上一碗热气腾腾的羊肉，光想象都觉得满足。',190,2,NULL),(9,'情感','恋一座城','李梅','2018-12-01 15:20:42','这里的冬天不是特别的冷，只是夜晚的时候有点微凉。在晚饭后很喜欢和友人漫步在这朦胧的夜色中。漫步在梧桐树下，橘黄色的灯光透过半黄半绿的梧桐树叶闪耀出美丽的光芒。地下散落了一地的叶子，像是一个个沉睡的精灵。我想捡起一只精灵，把它藏进我的背包里，或者是信笺里，但是最终我没有付诸行动。我思索着它们的命运，明天它们还会在这里吗?夜里起风，它们会飞向哪里?抑或是被来往的行人踩进鞋底，抑或是被扫地的大爷阿姨扫进垃圾车里?我在想它们最终的命运可能都是回归大地，也许命运就是一个个轮回，这个谁也不知晓。发现它们我是如此的欢喜，想着想着就嘴角扬起笑容。夜凉如水，抬眼望去，城市的霓虹灯闪烁在氤氲的雾气中，城市上空被薄如蝉翼的雾气包裹着，置身其中似在仙境，似真似幻。大马路上一尘不染，一辆辆汽车疾驰而过也卷不起一丝尘土，倒是卷起一阵冷风。不过到了八点时刻左右，这路上有点冷清，偶有一辆计程车慢悠悠的行驶在马路边上，“空车”二个红色小字在夜色中却是格外显眼。我在路边缓缓行走，被司机以为是这个城市的夜归人，我礼貌的招招手回绝了，继续我的夜色漫步。这个城市的脚步很慢很慢，有时候都使我忘了时光。以为昨天还停留在这里。夜，总是如此的吸引我。这里的夜色真的很美，美到可以忘记一切烦恼。也许曾经是因为某个人来到这里，因此逗留 在这里，徘徊在此地。后来，发现真的爱上了这座城市。没有其他因素，就仅仅是单纯的喜爱。你会发现你已经爱上了这里的一切，每条大街小巷都有走过的痕迹。那棵棵梧桐树每天都在守护着这座城市，可爱的雀儿每天站在枝头载歌载舞。',172,1,NULL),(10,'情感','生命如沫','李梅','2018-11-21 15:23:19','不久前我收到消息，一个朋友突然去世了。他是我以前的同事，他才28岁，也没有结婚，客死异乡……。我心情顿时非常的沉重，人生短暂仓促，谁也没想到年轻的生命会瞬间坠落。这两天，又发生了类似的事。她的亲人，一个年轻的生命也陨落了。从她言谈中，我只感觉到她呼吸的疼痛，语调的悲伤。我也不知道应当如何安慰她才好，生死有命，对于生命的渺小，我早已有颇多的感慨。甚至说，从开始悲痛的哭泣，到悲痛的强忍哭泣，再到麻木的悲痛，这样的过程，就像看透了生命里的东西————人终究无法逃离生死轮回。这些年，身边的亲人离去的离去，悲痛的悲痛。每一次伤心都像在提醒我，要珍惜自己，要珍惜生命，要及时行乐，谁也不知道明天和意外哪一个先来。可是，当我悲痛以后，却也没有改变太多。熬夜还是常态，虽然现在强迫自己一日三餐必须吃，其实吃的并不规律，吃的也很不科学。身边的人，也同样如此。纵然我们都想让自己不但要健康，还要潇洒，也要赚钱。可是生活的不易，让我们都妥协了，我们宁愿用一时的放纵去消散积累在心间的点滴不安，也不愿让那不安留存心底，一天天，一年年累积成山。或许，有时候心情比健康更重要吧?面对生死，我们都有过无数的思考，归根结底:对于生命而言，没有贫穷和富贵之分，纵然你对这个世界有无限的不舍又能怎样呢?面对生死，谁都有不舍，终而还是只能告别。还记得和好朋友调侃:谁都不知道意外和明天哪一个先来，我们彼此之间约定，如果真的有那么一天，我希望，清明时节，偶尔你也会祭奠我。生命坠落如花落，命由天定，生死莫敢测。如果有一天，我也忽然莫名的丢失在这个世界里，大概我也会有诸多的不舍，不舍那些爱着的所有风景，不舍那些点滴的往事，不舍那些幸福的流年。但我希望这个世界，他可以继续美下去，我希望还爱着我的所有人，他们都不要难过，不要悲伤，我的灵魂依然飘渺在这尘世的星空里，看着我所爱的一切。',138,1,NULL);
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
  `trendsId` int(11) NOT NULL AUTO_INCREMENT,
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
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
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
  `starDate` datetime DEFAULT NULL,
  `name` varchar(24) COLLATE utf8_unicode_ci DEFAULT NULL,
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
  `age` int(11) DEFAULT NULL,
  `constellation` varchar(13) COLLATE utf8_unicode_ci DEFAULT NULL,
  `target` int(11) DEFAULT NULL,
  `password` varchar(24) COLLATE utf8_unicode_ci NOT NULL,
  `gender` char(2) COLLATE utf8_unicode_ci DEFAULT NULL,
  `img` varchar(300) COLLATE utf8_unicode_ci DEFAULT NULL,
  `area` varchar(100) COLLATE utf8_unicode_ci DEFAULT NULL,
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
  `name` varchar(64) COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`Uid`),
  KEY `name` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'hy',18,'水瓶座',10,'1234567','女','/imguser/1.jpg','石家庄','15336525986','很喜欢你',2,5,'减肥，那时光进来的地方','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=84#did83','花颜','花颜','花颜','2018-03-08 14:48:44','花颜'),(2,'lx',30,'射手座',30,'1314258','男','/imguser/2.jpg','北京','15669852364','支持你',14,8000,'一些能能吃掉黑眼圈的最佳食物','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=84#did104','林夕','林夕','林夕','2017-10-12 14:48:58','林夕'),(3,'ly',20,'白羊座',20,'1658947','女','/imguser/3.jpg','上海','15698241539','一起去玩',3,4,'上班族如何在30分钟内做出丰富的便当早餐','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=11#did10','林一','林一','林一','2018-10-03 19:45:10','林一'),(4,'zy',22,'双子座',60,'a1b2c3d','男','/imguser/4.jpg','厦门','15528964532','吃饭',5,8,'不评论就是最大的善意','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=45#did44','左一','左一','左一','2018-10-11 08:49:22','左一'),(5,'lm',36,'金牛座',50,'ebscfd','女','/imguser/5.jpg','成都','16952384765','旅游',20,6,'这个世界很大，愿你们都去看看','http://pic.sogou.com/d?query=%B1%B3%BE%B0%CD%BC%C6%AC%CE%DE%CB%AE%D3%A1&mode=1&did=591#did590','李梅','李梅','李梅','2016-12-15 11:49:35','李梅'),(6,'mx',20,'处女座',40,'dxt123456','男','/imguser/6.jpg','石家庄','15226591929','挺不错的',5,10,'今天又是美好的一天',NULL,'熊大','熊大','熊大','2018-12-18 09:32:26','熊大'),(7,'lv',20,NULL,0,'','男','/imguser/7.jpg','',NULL,NULL,0,NULL,NULL,NULL,NULL,NULL,NULL,'2018-12-19 09:50:52','熊二'),(8,'ab',19,'处女座',5,'1528964','男',NULL,'石家庄',NULL,NULL,1,NULL,NULL,NULL,'光头强','光头强','光头强','2018-12-24 15:50:39','光头强');
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

-- Dump completed on 2018-12-24 16:17:58
