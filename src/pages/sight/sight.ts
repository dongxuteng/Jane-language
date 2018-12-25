import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-sight',
  templateUrl: 'sight.html',
})
export class SightPage {


  srcs = [
    "../../assets/imgs/1.jpg",
    "../../assets/imgs/7.jpg",
    "../../assets/imgs/6.jpg",
    "../../assets/imgs/3.jpg",
  ];

  asseys = [
    {
      name: "Ezreal",
      inner: "To see a world in a grain of sand. And a heaven in a wild flowerHold infinity in the palm of your hand. And eternity in an hour.",
      iconSrc: "../../assets/imgs/4.jpg",
      imgSrc:'../../assets/imgs/12.jpg',
      likes: 11,
      comments: 25
    },
    {
      name: "Weapon",
      inner: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
      imgSrc: "../../assets/imgs/lizhi.jpg",
      iconSrc: "../../assets/imgs/1.jpg",
      likes: 56,
      comments: 87
    }
  ]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
  }

  // 页面跳转
  goFoods() {
    this.navCtrl.push("FoodsPage");
  }
  goEssays(){
    this.navCtrl.push("EssayPage");
  }
  goEmotions(){
    this.navCtrl.push("EmotionPage");
  }
  goEncouragements(){
    this.navCtrl.push("EncouragementPage");
  }

  goSightmore() {
    this.navCtrl.push('SightmorePage')
  }
  goPersonal() {
    this.navCtrl.push('PersonalPage');
  }
  goTravel() {
    this.navCtrl.push('TravelPage');
  }
  goMusic(){
    this.navCtrl.push('MusicPage');
  }
  goMovie(){
    this.navCtrl.push("MoviePage");
  }
  // 点赞计数
  like(i) {
    var islike = document.querySelectorAll('#like')[i].className.indexOf(' love');
    // console.log(islike);
    if(islike === -1){  // 未收藏->已收藏
      document.querySelectorAll('#like')[i].className += ' love';
      // this.arr[0].like++
      // console.log('未收藏->已收藏： ',document.querySelectorAll('#like')[0].className);
    }
    else{  // 已收藏->未收藏
      document.querySelectorAll('#like')[i].className = document.querySelectorAll('#like')[i].className.slice(0,20);
      // console.log('已收藏->未收藏： ',document.querySelectorAll('#like')[0].className);
      // this.arr[0].like--;
    }
  }


  // 下拉刷新
  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
}
