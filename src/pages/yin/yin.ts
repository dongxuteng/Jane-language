import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the YinPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-yin',
  templateUrl: 'yin.html',
})
export class YinPage {
  
  asseys=[
    {
      imgSrc:'../../assets/imgs/6.jpg',
      title:'杨宗纬、张碧晨——凉凉',
      music:'../../assets/imgs/liangliang.mp3'
    },
    {
      imgSrc:'../../assets/imgs/aiqing.jpg',
      title:'Adele - Make You Feel My Love',
      music:'../../assets/imgs/Adele - Make You Feel My Love.mp3'
    },
    {
      imgSrc:'../../assets/imgs/fj.jpg',
      title:'Adele - Make You Feel My Love',
      music:'../../assets/imgs/Adele - Rolling in the Deep.mp3'
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
}
