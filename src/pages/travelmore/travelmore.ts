import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TravelmorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-travelmore',
  templateUrl: 'travelmore.html',
})
export class TravelmorePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }


  arr=[
    {name:'花颜',
    msg:'真正的旅行，从来不是一堆照片的堆砌和满足内心小小的虚荣，正因如此，旅行并不仅仅是去看风景，更难得的是旅行之前的期待、旅行进行时的感动和旅行归来时的回味无穷。',
     img:'assets/imgs/fj2.jpg',
     tx:'assets/imgs/icon.png',
     num:'50',
     date:'2018/11/11',
     likes:'999'
   }]

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
}
