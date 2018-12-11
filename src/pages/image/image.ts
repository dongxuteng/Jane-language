import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PersonalPage } from '../personal/personal';

/**
 * Generated class for the ImagePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-image',
  templateUrl: 'image.html',
})
export class ImagePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  articles = [
    {
      title: '制作传统的法国羊角面包',
      imgSrc: '../../assets/imgs/3.jpg',
      iconSrc: '../../assets/imgs/icon.png',
      username: 'Kika Kong',
      likes: '222 Likes'
    },
    {
      title: '草莓味甜点',
      imgSrc: '../../assets/imgs/2.jpg',
      iconSrc: '../../assets/imgs/icon.png',
      username: 'Kika Kong',
      likes: '334 Likes'
    },
    {
      title: '好看又好吃的马卡龙',
      imgSrc: '../../assets/imgs/6.jpg',
      iconSrc: '../../assets/imgs/icon.png',
      username: 'Kika Kong',
      likes: '877 Likes'
    }
  ]

  ionViewDidLoad(){
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


  doRefresh(refresher) {
    console.log('Begin async operation', refresher);
    setTimeout(() => {
      console.log('Async operation has ended');
      refresher.complete();
    }, 2000);
  }
  Goperson(){
    this.navCtrl.push('PersonalPage');
  }
  // like(){
  //  document.getElementById('like').style.display;

  // }
}
