import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-mypage',
  templateUrl: 'mypage.html',
})
export class MypagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  person={
    username:'花颜',
    funs:2650,
    focus:10,
    msg:'玩手机没有用，早，努力学习吧！',
    img:'',
    iconSrc:'../../assets/imgs/test.png'
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

}
