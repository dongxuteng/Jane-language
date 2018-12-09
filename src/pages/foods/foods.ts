import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-foods',
  templateUrl: 'foods.html',
})
export class FoodsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

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
  foodsmore(){
    this.navCtrl.push('FoodmorePage')
  }
}
