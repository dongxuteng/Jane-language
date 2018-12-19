import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the WenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wen',
  templateUrl: 'wen.html',
})
export class WenPage {
  asseys = [
    {
      name: "二十四番花信",
      title: "年少有为",
      inner: "谁都想年少有为，可现实却很多人一生碌碌无为。每个人在年少时，都对未来有个美好的憧憬，以为等到长大后，这些憧憬就能一一实现，但真正等到年老那时，却发现梦想一个都未曾实现。今天，许久未发朋友圈的大学同学，突然分享李荣浩的歌曲《年少有为》，配文却是年少无为。想想看，我们已经离开大学整整五年的时间，有些人混得风生水起，大部分人却一直碌碌无为，差距一点点产生，焦虑也在一点点增加。如果这辈子注定年少无为，我们该以何种姿态来面对自身呢?又以何种面貌来面对，对我们寄予厚望的父母呢?",
      iconSrc: "../../assets/imgs/one.png",
      comments: 321,
      likes: 77,
    },
    {
      name: "花颜",
      title: "一段话",
      inner: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a ?! Whoa. This is heavy.Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
      iconSrc: "../../assets/imgs/icon.png",
      comments: 256,
      likes: 99,
    },
    {
      name: "春暖花开",
      title: "时间面前，一切终将释怀",
      inner: "常想时间是一味良药，能让人自渡，再难忘的人或事，在时间面前终将释怀。 光阴的巷口，谁没有过年少唇红齿白的时光，谁不曾走过青春的迷茫，谁没有过年少轻狂，谁没有经过命运的起起落落？ 生命中，总有那么一个人陪你看过风景，总有一双手温暖你前行的路。",
      iconSrc: "../../assets/imgs/icon.png",
      comments: 187,
      likes: 45,
    }
  ]
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
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
  ionViewDidEnter() {
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
  goEncouragemore(){
    this.navCtrl.push('EncouragemorePage')
  }

}
