import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ZhanghaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-zhanghao',
  templateUrl: 'zhanghao.html',
})
export class ZhanghaoPage {

  zhanghaos = [{
    name: '赫恩曼尼',
    number: '1522659xxxx',
  }]

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map(key => {
        elements[key].style.display = "none";
      });
    }
  }
 
  ionViewWillLeave() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map(key => {
        elements[key].style.display = "flex";
      });
    }
  }

}
