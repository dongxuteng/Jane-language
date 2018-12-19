import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html',
})
export class MypagePage {
  dynamic: number=1;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  person = {
    username: '简小语',
    fans: 2650,
    focus: 10,
    msg: '玩手机没有用，早，努力学习吧！',
    img: '',
    iconSrc: '../../assets/imgs/icon.png',
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
  ]
  asseys=[
    {
      title: "时间面前，一切终将释怀",
      inner: "常想时间是一味良药，能让人自渡，再难忘的人或事，在时间面前终将释怀。 光阴的巷口，谁没有过年少唇红齿白的时光，谁不曾走过青春的迷茫，谁没有过年少轻狂，谁没有经过命运的起起落落？ 生命中，总有那么一个人陪你看过风景，总有一双手温暖你前行的路。",
    }
  ]
  items=[
    {
      imgSrc:'../../assets/imgs/aiqing.jpg',
      title:'Adele - Make You Feel My Love',
      music:'../../assets/imgs/Adele - Make You Feel My Love.mp3'
    }
  ]
  guanzhus = [{
    id: '001',
    imageUrl:"../assets/imgs/icon.png",
    title: '简小语',
    lastMessage: '简语官方客服',
    zhuangtai:'取消关注'
  },
    {
      id: '002',
      imageUrl:"../assets/imgs/icon.png",
      title: 'Tony',
      lastMessage: '一个写手',
      zhuangtai:'关注',
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
    yellow2.style.borderBottom='2px solid #ffdb2c';
    yellow1.style.borderBottom='2px solid #fff';
  }
  change1(){
    this.dynamic=1;
    var yellow3=document.getElementById('yellow3');
    var yellow2=document.getElementById('yellow2');
    var yellow1=document.getElementById('yellow1');
    yellow3.style.borderBottom='2px solid #fff';
    yellow1.style.borderBottom='2px solid #ffdb2c';
    yellow2.style.borderBottom='2px solid #fff';
  }
  change3(){
    this.dynamic=3;
    var yellow3=document.getElementById('yellow3');
    var yellow2=document.getElementById('yellow2');
    var yellow1=document.getElementById('yellow1');
    yellow3.style.borderBottom='2px solid #ffdb2c';
    yellow2.style.borderBottom='2px solid #fff';
    yellow1.style.borderBottom='2px solid #fff';
  }

}
