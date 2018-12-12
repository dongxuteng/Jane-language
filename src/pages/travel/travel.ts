import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TravelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travel',
  templateUrl: 'travel.html',
})
export class TravelPage {
  arr=[{
    name:"花颜",
    img:'assets/imgs/fj.jpg',
    msg:'真正的旅行，从来不是一堆照片的堆砌和满足内心小小的虚荣，正因如此，旅行并不仅仅是去看风景，更难得的是旅行之前的期待、旅行进行时的感动和旅行归来时的回味无穷。'
  },{
    name:"勒布朗",
    img:'assets/imgs/fj2.jpg',
    msg:'真正的旅行，从来不是一堆照片的堆砌和满足内心小小的虚荣，正因如此，旅行并不仅仅是去看风景，更难得的是旅行之前的期待、旅行进行时的感动和旅行归来时的回味无穷。'
  },{
    name:"赫赫",
    img:'assets/imgs/fj3.jpg',
    msg:'真正的旅行，从来不是一堆照片的堆砌和满足内心小小的虚荣，正因如此，旅行并不仅仅是去看风景，更难得的是旅行之前的期待、旅行进行时的感动和旅行归来时的回味无穷。'
  },{
    name:"赫赫",
    img:'assets/imgs/fj1.jpg',
    msg:'真正的旅行，从来不是一堆照片的堆砌和满足内心小小的虚荣，正因如此，旅行并不仅仅是去看风景，更难得的是旅行之前的期待、旅行进行时的感动和旅行归来时的回味无穷。'
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
goTravelmore(){
  this.navCtrl.push("TravelmorePage")
}
}
