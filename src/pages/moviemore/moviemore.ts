import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MoviemorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-moviemore',
  templateUrl: 'moviemore.html',
})
export class MoviemorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  asseys = [{
    name: "Ezreal",
    iconSrc: "assets/imgs/4.jpg",
    likes: 11,
    comments: 25,
    face:"assets/imgs/fj.jpg",
    url:'http://edge.ivideo.sina.com.cn/180518871.mp4?KID=sina,viask&Expires=1544803200&ssig=pzZ5EvhSe1'
  } 
]
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
// 下拉刷新
doRefresh(refresher) {
  console.log('Begin async operation', refresher);
  setTimeout(() => {
    console.log('Async operation has ended');
    refresher.complete();
  }, 2000);
}
goPersonal(){
this.navCtrl.push('PersonalPage')
}

}
