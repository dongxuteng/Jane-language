import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SharePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-share',
  templateUrl: 'share.html',
})
export class SharePage {
  arrmsg=[{
    name: "Ezreal",
    title: "一段话",
    inner: "Wait a minute. Wait a minute, Doc. Uhhh... Are you telling me that you built a time machine... out of a DeLorean?! Whoa. This is heavy.",
    iconSrc: "../../assets/imgs/4.jpg",
    likes: 11,
    comments: 25
  },
]
  arrvideo=[{
    name:'花颜',
    tx:'assets/imgs/3.jpg',
    likes:'45',
    comments:'60',
    url:'http://edge.ivideo.sina.com.cn/180245613.mp4?KID=sina,viask&Expires=1544630400&ssig=XaEGf0qxFV'
  }];
  interest:string="text";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goPersonal(){
    this.navCtrl.push('PersonalPage')
  }
  ionViewDidEnter(){
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
