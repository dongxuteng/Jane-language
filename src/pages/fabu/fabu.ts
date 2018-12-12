import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
<<<<<<< HEAD
import { HttpClient } from '@angular/common/http'
=======
import {HttpClient} from '@angular/common/http'
>>>>>>> ee3bc292c8dc67fc10e54cac2ece4bd7b8cb55cc
/**
 * Generated class for the FabuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
declare var BMap;
@IonicPage()
@Component({
  selector: 'page-fabu',
  templateUrl: 'fabu.html',
})
export class FabuPage {
  localCityName: string;
  arr = {
    name: '赫恩曼尼'
  }
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    let elements = document.querySelectorAll(".tabbar");
    if (elements != null) {
      Object.keys(elements).map((key) => {
        elements[key].style.display = 'none';
      });
    }
    var myCity = new BMap.LocalCity();
    myCity.get(function(result) {
      var cityName = result.name;
      localStorage.setItem('currentCity', cityName);
      return cityName;
    });

    //延迟500毫秒取存储在localStorage中的 cityName
    setTimeout(() => {
      this.localCityName = localStorage.getItem('currentCity');
    }, 500);
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

  //返回主页
  return() {
    this.navCtrl.pop();
  }
}
