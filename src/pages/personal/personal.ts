import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpClient} from "@angular/common/http";

@IonicPage()
@Component({
  selector: 'page-personal',
  templateUrl: 'personal.html',
})
export class PersonalPage {
  dynamic: number=2;
  public anyList:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,private http:HttpClient) {
  }


  person = {
    username: 'Ezreal',
    fans: 2650,
    focus: 10,
    msg: '玩手机没有用，早，努力学习吧！',
    img: '',
    iconSrc: '../../assets/imgs/test.png',
    arcticleTimes: 295
  }

  ageLabels = [
    "90后",
    "00后",
    "10后"
  ];

  level = 6;

  location = "石家庄";

  constellation = [
    "白羊座",
    "金牛座",
    "双子座",
    "巨蟹座",
    "狮子座",
    "处女座",
    "天秤座",
    "天蝎座",
    "射手座",
    "摩羯座",
    "水瓶座",
    "双鱼座"
  ];
  asseys=[
    {
      title: "时间面前，一切终将释怀",
      inner: "常想时间是一味良药，能让人自渡，再难忘的人或事，在时间面前终将释怀。 光阴的巷口，谁没有过年少唇红齿白的时光，谁不曾走过青春的迷茫，谁没有过年少轻狂，谁没有经过命运的起起落落？ 生命中，总有那么一个人陪你看过风景，总有一双手温暖你前行的路。",
    },
    {
      title:'乡愁，是心灵深处最美的花朵',
      inner:'乡愁是一份沉重的爱。离开故土的游子，默默将爱收藏在心底。在异乡打拼，心里异常孤独，对着城市的钢筋水泥，对着那些永远都不可能与之说心里话的人，心中充满惆怅。在寂寞的时候，对着荷塘月色，想起故乡的袅袅炊烟，想起脸上堆满皱纹的阿爸阿妈，想起故乡的那条清澈',
    }
  ]
  items=[
    {
      imgSrc:'../../assets/imgs/1.jpg',
      title:'Adele - Make You Feel My Love',
      music:'../../assets/imgs/Adele - Make You Feel My Love.mp3'
    },
    {
    imgSrc:'../../assets/imgs/12.jpg',
    title:'《你要的全拿走》— 胡彦斌',
    //p:'“先冲我笑的人是你 先伸出手的人是你 可为什么 后退一万步的人是你 急于抽身离开的人也是你”',
    music:'../../assets/imgs/liangliang.mp3'
    }
  ]
  guanzhus = [{
    id: '001',
    imageUrl:"../assets/imgs/icon.png",
    title: '简小语',
    lastMessage: '简语官方客服',
    zhuangtai:'+关注'
  },
    {
      id: '002',
      imageUrl:"../assets/imgs/icon.png",
      title: 'Tony',
      lastMessage: '一个写手',
      zhuangtai:'+关注',
    },
    {
      id: '003',
      imageUrl: "../assets/imgs/icon.png",
      title: 'Steve',
      lastMessage: '666',
      zhuangtai:'互相关注',
    }];
  goMePage() {
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
  }
  //ionic当退出页面的时候触发的方法
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'flex';
      });
    }
  }
  change2(){
    this.dynamic=2;
    var yellow3=document.getElementById('yellow3');
    var yellow2=document.getElementById('yellow2');
    var yellow1=document.getElementById('yellow1');
    yellow3.style.borderBottom='2px solid #fff';
    yellow2.style.borderBottom='2px solid #808080';
    yellow1.style.borderBottom='2px solid #fff';
  }
  change1(){
    this.dynamic=1;
    var yellow3=document.getElementById('yellow3');
    var yellow2=document.getElementById('yellow2');
    var yellow1=document.getElementById('yellow1');
    yellow3.style.borderBottom='2px solid #fff';
    yellow1.style.borderBottom='2px solid #808080';
    yellow2.style.borderBottom='2px solid #fff';
  }
  change3(){
    this.dynamic=3;
    var yellow3=document.getElementById('yellow3');
    var yellow2=document.getElementById('yellow2');
    var yellow1=document.getElementById('yellow1');
    yellow3.style.borderBottom='2px solid #808080';
    yellow2.style.borderBottom='2px solid #fff';
    yellow1.style.borderBottom='2px solid #fff';

  }
}
